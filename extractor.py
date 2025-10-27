import requests
import re
import textwrap

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
    """Genera el bloque JS formateado para película o serie."""
    if tipo == "movie":
        titulo = datos.get("title", "Desconocido").replace('"', '\\"')
        duracion = f"{datos.get('runtime', 0)} min"
    else:  # serie
        titulo = datos.get("name", "Desconocido").replace('"', '\\"')
        temporadas = datos.get("number_of_seasons", 0)
        episodios = datos.get("number_of_episodes", 0)
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
        sinopsis: `{sinopsis}`,
        genero: {generos},
        calificacion: {calificacion},
        duracion: "{duracion}",
        elenco: {elenco},
        portada: "{portada}",
        enlaceTelegram: "https://t.me/vanacue/"
    }},
    """
    return textwrap.dedent(bloque_js).strip()


# === Ejecución principal ===

if __name__ == "__main__":
    entrada = input("🎬 Ingresa el nombre, ID o URL de la obra (película o serie): ").strip()
    id_o_nombre, tipo = obtener_id_y_tipo(entrada)

    if isinstance(id_o_nombre, int):
        detalles = obtener_detalles(id_o_nombre, tipo)
        bloque_js = generar_bloque_js(detalles, tipo)
        print("\n✅ Bloque listo para pegar en tu index.js:\n")
        print(bloque_js)

    else:
        resultado = buscar_obra(id_o_nombre, tipo)
        if resultado:
            detalles = obtener_detalles(resultado["id"], tipo)
            bloque_js = generar_bloque_js(detalles, tipo)
            print("\n✅ Bloque listo para pegar en tu index.js:\n")
            print(bloque_js)
        else:
            print("❌ No se encontró ningún resultado.")