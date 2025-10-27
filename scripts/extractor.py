import requests
import re
import textwrap
import os

API_KEY = "d17af68828b64225260e4828503f98f9"
BASE_URL = "https://api.themoviedb.org/3"


# === Funciones base ===

def obtener_id_y_tipo(entrada):
    """
    Detecta si la entrada es:
    - un número (ID TMDb, asumido como película)
    - una URL de TMDb (película o serie)
    - o un nombre (detectado como película por defecto)
    """
    entrada = entrada.strip()

    # ID numérico → asumimos película
    if entrada.isdigit():
        return int(entrada), "movie"

    # URL de TMDb → detecta tipo (movie o tv)
    match = re.search(r"themoviedb\.org/(movie|tv)/(\d+)", entrada)
    if match:
        tipo = match.group(1)
        id_obra = int(match.group(2))
        return id_obra, tipo

    # Nombre → se buscará luego
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


def generar_bloque_js(datos, tipo):
    """Genera el bloque JS formateado para película o serie, incluyendo fecha."""
    if tipo == "movie":
        titulo = datos.get("title", "Desconocido").replace('"', '\\"')
        duracion = f"{datos.get('runtime', 0)} min"
        fecha = datos.get("release_date", "Desconocida")
        tipo_formato = "Película"
    else:  # serie
        titulo = datos.get("name", "Desconocido").replace('"', '\\"')
        temporadas = datos.get("number_of_seasons", 0)
        episodios = datos.get("number_of_episodes", 0)
        fecha = datos.get("first_air_date", "Desconocida")
        tipo_formato = "Serie"
        if temporadas == 1:
            duracion = f"{episodios} episodios"
        else:
            duracion = f"{temporadas} temporadas"

    sinopsis = datos.get("overview", "").replace("`", "'")
    generos = [g["name"] for g in datos.get("genres", [])]
    calificacion = datos.get("vote_average", 0)
    elenco = [actor["name"] for actor in datos.get("credits", {}).get("cast", [])[:5]]
    portada = "https://image.tmdb.org/t/p/original" + (datos.get("poster_path") or "")

    bloque_js = f"""
    {{
        titulo: "{titulo}",
        tipo: "{tipo_formato}",
        sinopsis: `{sinopsis}`,
        genero: {generos},
        calificacion: {calificacion},
        duracion: "{duracion}",
        elenco: {elenco},
        portada: "{portada}",
        enlaceTelegram: "https://t.me/vanacue/",
        fecha: "{fecha}"
    }},
    """
    return textwrap.dedent(bloque_js).strip()


# === Función principal ===

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
            bloque_js = generar_bloque_js(detalles, tipo)
            bloques.append(bloque_js)
        else:
            resultado = buscar_obra(id_o_nombre, tipo)
            if resultado:
                nombre_encontrado = resultado.get("title") or resultado.get("name")
                print(f"🔍 Buscando detalles de {nombre_encontrado}...")
                detalles = obtener_detalles(resultado["id"], tipo)
                bloque_js = generar_bloque_js(detalles, tipo)
                bloques.append(bloque_js)
            else:
                print(f"❌ No se encontró: {id_o_nombre}")

    # Si la entrada era un archivo, guarda los resultados
    if es_archivo:
        if bloques:
            salida = "bloques_extraidos.txt"
            with open(salida, "w", encoding="utf-8") as f:
                f.write("\n\n".join(bloques))
            print(f"\n✅ Bloques listos y guardados en: {salida}")
        else:
            print("⚠️ No se generaron bloques válidos.")
    else:
        # Si es solo una URL o nombre, imprime el bloque directamente
        if bloques:
            print("\n🧩 Bloque generado:\n")
            print(bloques[0])
        else:
            print("⚠️ No se generó ningún bloque.")