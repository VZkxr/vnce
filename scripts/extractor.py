import requests
import re
import json # Usamos json para "limpiar" cada valor
import os

API_KEY = "d17af68828b64225260e4828503f98f9"
BASE_URL = "https://api.themoviedb.org/3"


# === Funciones base (Sin cambios) ===

def obtener_id_y_tipo(entrada):
    """
    Detecta si la entrada es:
    - un número (ID TMDb, asumido como película)
    - una URL de TMDb (película o serie)
    - o un nombre (detectado como película por defecto)
    """
    entrada = entrada.strip()
    if entrada.isdigit():
        return int(entrada), "movie"
    match = re.search(r"themoviedb\.org/(movie|tv)/(\d+)", entrada)
    if match:
        tipo = match.group(1)
        id_obra = int(match.group(2))
        return id_obra, tipo
    return entrada, "movie"


def buscar_obra(nombre, tipo):
    """Busca una película o serie por nombre y devuelve su primer resultado."""
    url = f"{BASE_URL}/search/{tipo}?api_key={API_KEY}&language=es-MX&query={nombre}"
    r = requests.get(url).json()
    if not r.get("results"):
        print("❌ No se encontró la obra.")
        return None
    return r["results"][0]


def obtener_detalles(id_obra, tipo):
    """Obtiene detalles completos (y elenco) de película o serie."""
    url = f"{BASE_URL}/{tipo}/{id_obra}?api_key={API_KEY}&language=es-MX&append_to_response=credits"
    return requests.get(url).json()


# === Función de generación (ACTUALIZADA) ===

def generar_bloque_json(datos, tipo):
    """
    Genera el bloque como un string JSON válido, con formato personalizado:
    - Objeto principal indentado.
    - Listas (genero, elenco) en una sola línea.
    """
    # 1. Obtenemos los datos crudos de Python
    if tipo == "movie":
        titulo = datos.get("title", "Desconocido")
        duracion = f"{datos.get('runtime', 0)} min"
        fecha = datos.get("release_date", "Desconocida")
        tipo_formato = "Película"
    else:  # serie
        titulo = datos.get("name", "Desconocido")
        temporadas = datos.get("number_of_seasons", 0)
        episodios = datos.get("number_of_episodes", 0)
        fecha = datos.get("first_air_date", "Desconocida")
        tipo_formato = "Serie"
        if temporadas == 1:
            duracion = f"{episodios} episodios"
        else:
            duracion = f"{temporadas} temporadas"

    sinopsis = datos.get("overview", "")
    generos = [g["name"] for g in datos.get("genres", [])]
    calificacion = round(datos.get("vote_average", 0), 3)
    elenco = [actor["name"] for actor in datos.get("credits", {}).get("cast", [])[:5]]
    portada = "https://image.tmdb.org/t/p/original" + (datos.get("poster_path") or "")
    enlace_telegram = "https://t.me/vanacue/"

    # 2. Convertimos CADA valor a su representación en JSON
    #    json.dumps() se encarga de añadir comillas a los strings
    #    y escapar caracteres especiales (ej. \n o ").
    #    ensure_ascii=False mantiene las tildes.
    
    titulo_json = json.dumps(titulo, ensure_ascii=False)
    tipo_json = json.dumps(tipo_formato, ensure_ascii=False)
    sinopsis_json = json.dumps(sinopsis, ensure_ascii=False)
    calificacion_json = json.dumps(calificacion) # json.dumps() maneja números
    duracion_json = json.dumps(duracion, ensure_ascii=False)
    portada_json = json.dumps(portada, ensure_ascii=False)
    enlace_json = json.dumps(enlace_telegram, ensure_ascii=False)
    fecha_json = json.dumps(fecha, ensure_ascii=False)

    # 3. [LA CLAVE] Convertimos las listas.
    #    Como NO usamos 'indent', json.dumps() las creará en una sola línea.
    generos_json = json.dumps(generos, ensure_ascii=False)
    elenco_json = json.dumps(elenco, ensure_ascii=False)


    # 4. [CORREGIDO] Construimos el bloque final de forma más segura,
    #    uniendo una lista de strings. Esto evita problemas
    #    de comillado con las f-strings multilínea.
    partes_json = [
        "{",
        f'    "titulo": {titulo_json},',
        f'    "tipo": {tipo_json},',
        f'    "sinopsis": {sinopsis_json},',
        f'    "genero": {generos_json},',
        f'    "calificacion": {calificacion_json},',
        f'    "duracion": {duracion_json},',
        f'    "elenco": {elenco_json},',
        f'    "portada": {portada_json},',
        f'    "enlaceTelegram": {enlace_json},',
        f'    "fecha": {fecha_json}', # Nota: Sin coma en el último elemento
        "}" # La coma final para copiar/pegar va después del '}'
    ]
    
    # Unimos todas las partes con un salto de línea
    bloque_con_coma = "\n".join(partes_json)
    
    return bloque_con_coma


# === Función principal (Sin cambios) ===

def procesar_entrada(entrada):
    """Detecta si la entrada es un archivo .txt o una sola URL."""
    if entrada.endswith(".txt") and os.path.exists(entrada):
        with open(entrada, "r", encoding="utf-8") as f:
            return [line.strip() for line in f if line.strip()], True
    else:
        return [entrada.strip()], False


if __name__ == "__main__":
    entrada = input("🎬 Ingresa la URL o el nombre del archivo .txt: ").strip()
    entradas, es_archivo = procesar_entrada(entrada)

    bloques = []

    for url in entradas:
        id_o_nombre, tipo = obtener_id_y_tipo(url)

        if isinstance(id_o_nombre, int):
            print(f"🔍 Extrayendo datos de {tipo.upper()} con ID {id_o_nombre}...")
            detalles = obtener_detalles(id_o_nombre, tipo)
            bloque_json = generar_bloque_json(detalles, tipo)
            bloques.append(bloque_json)
        else:
            resultado = buscar_obra(id_o_nombre, tipo)
            if resultado:
                nombre_encontrado = resultado.get("title") or resultado.get("name")
                print(f"🔍 Buscando detalles de {nombre_encontrado}...")
                detalles = obtener_detalles(resultado["id"], tipo)
                bloque_json = generar_bloque_json(detalles, tipo)
                bloques.append(bloque_json)
            else:
                print(f"❌ No se encontró: {id_o_nombre}")

    if es_archivo:
        if bloques:
            salida = "bloques_json.txt"
            with open(salida, "w", encoding="utf-8") as f:
                f.write("\n\n".join(bloques))
            print(f"\n✅ Bloques JSON listos y guardados en: {salida}")
        else:
            print("⚠️ No se generaron bloques válidos.")
    else:
        if bloques:
            print("\n🧩 Bloque JSON generado (listo para copiar y pegar):\n")
            print(bloques[0])
        else:
            print("⚠️ No se generó ningún bloque.")