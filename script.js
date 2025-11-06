// === CARGADOR DE DATOS ===
// Usamos fetch para cargar el JSON. Esto devuelve una "promesa".
const dataPromise = fetch('datos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(e => {
    console.error('No se pudo cargar el archivo datos.json:', e);
    // Devuelve un array vacío en caso de error para que la app no se rompa
    return []; 
  });


// === MENU HAMBURGUESA ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// === HERO (solo si existe en la página) ===
const heroCarrusel = document.querySelector(".hero-carrusel");
if (heroCarrusel) {
  const totalSlides = document.querySelectorAll(".hero-slide").length;
  const btnLeftHero = document.querySelector(".hero-btn-left");
  const btnRightHero = document.querySelector(".hero-btn-right");
  let index = 0;
  const dots = document.querySelectorAll(".hero-dots .dot");

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.src = i === index ? "Multimedia/circle_w.svg" : "Multimedia/circle.svg";
    });
  }

  function goToSlide(i) {
    index = i;
    heroCarrusel.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
    resetAutoplay();
  }

  // Swipe táctil
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  heroCarrusel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  heroCarrusel.addEventListener("touchmove", (e) => {
    touchEndX = e.changedTouches[0].screenX;
  });

  heroCarrusel.addEventListener("touchend", () => {
    const deltaX = touchStartX - touchEndX;
    if (deltaX > swipeThreshold) goToSlide((index + 1) % totalSlides);
    else if (deltaX < -swipeThreshold) goToSlide((index - 1 + totalSlides) % totalSlides);
  });

  // Autoplay
  let autoplayTimeout;
  function startAutoplay() {
    autoplayTimeout = setTimeout(() => {
      index = (index + 1) % totalSlides;
      goToSlide(index);
    }, 5000);
  }
  function resetAutoplay() {
    clearTimeout(autoplayTimeout);
    startAutoplay();
  }
  startAutoplay();

  // Flechas
  btnLeftHero?.addEventListener("click", () => {
    goToSlide((index - 1 + totalSlides) % totalSlides);
  });
  btnRightHero?.addEventListener("click", () => {
    goToSlide((index + 1) % totalSlides);
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });
}


document.addEventListener("DOMContentLoaded", () => {
  // Esperamos a que los datos del JSON estén listos
  dataPromise.then(catalogoPeliculas => {
    
    const main = document.querySelector("main");
    if (!main || main.classList.contains("genero-main")) return; // evitar interferencia con genero.html

    // Secciones
    const secciones = ["Recién agregadas", "Terror", "Acción", "Romance", "Comedia", "Drama", "Animación", "Suspenso"];

    secciones.forEach(seccion => {
      const seccionDiv = document.createElement("div");
      seccionDiv.classList.add("seccion-catalogo");

      // Crear contenedor del título y el botón
      const headerSeccion = document.createElement("div");
      headerSeccion.classList.add("header-seccion");

      // Crear botón "Explorar todo >" con estructura interna
      const explorarBtn = document.createElement("div");
      explorarBtn.classList.add("explorar-btn");
      explorarBtn.innerHTML = `<span class="simbolo">&#10148;</span><span class="texto">Explorar todo &#10148;</span>`
      // Al hacer clic en "Explorar todo", redirigir al género
      explorarBtn.addEventListener("click", () => {
        const generoURL = seccion.toLowerCase().replace(" ", "_");
        window.location.href = `genero.html?genero=${encodeURIComponent(generoURL)}`;
      });

      // Crear título de la sección
      const tituloSeccion = document.createElement("h2");
      tituloSeccion.textContent = seccion;

      //  Solo mostrar el botón si no es "Recién agregadas"
      headerSeccion.appendChild(tituloSeccion);
      if (seccion !== "Recién agregadas") {
        headerSeccion.appendChild(explorarBtn);
      }

      // Agregar al div de la sección
      seccionDiv.appendChild(headerSeccion);

      const contenedorCarrusel = document.createElement("div");
      contenedorCarrusel.classList.add("carrusel-container");

      const btnLeft = document.createElement("button");
      btnLeft.classList.add("scroll-btn","left");
      btnLeft.innerHTML = "&#10094;";
      const btnRight = document.createElement("button");
      btnRight.classList.add("scroll-btn","right");
      btnRight.innerHTML = "&#10095;";

      const carrusel = document.createElement("div");
      carrusel.classList.add("carrusel");

      // Mapeo de sinónimos para secciones que pueden tener variantes en los datos
      const generoAliases = {
        "suspenso": ["suspenso", "suspense"],
        // si en el futuro quieres más aliases: "accion": ["acción","accion"], ...
      };

      // Filtrar según sección y mantener orden descendente
      let peliculasSeccion = [];
      if (seccion === "Recién agregadas") {
          // *** ¡CORREGIDO! *** Tomar los últimos 8 agregados
          peliculasSeccion = [...catalogoPeliculas] // Copiar el array
            .reverse() // Invertir (últimos primero)
            .slice(0, 8); // Tomar los primeros 8 de la lista invertida
        } else {
          const key = seccion.toLowerCase();

          if (key === "suspenso") {
            // usar aliases para buscar tanto "Suspenso" como "Suspense"
            const aliases = generoAliases["suspenso"];
            peliculasSeccion = catalogoPeliculas
              .filter(p => p.genero.some(g => aliases.includes(g.toLowerCase())))
              // *** ¡CORREGIDO! *** Invertir los resultados
              .reverse()
              .slice(0, 8); // Tomar los 8 más recientes de ese género
          } else {
            // búsqueda case-insensitive exacta en el array de géneros
            peliculasSeccion = catalogoPeliculas
              .filter(p => p.genero.some(g => g.toLowerCase() === key))
              // *** ¡CORREGIDO! *** Invertir los resultados
              .reverse()
              .slice(0, 8); // Tomar los 8 más recientes de ese género
          }
        }

      // Crear tarjetas (solo portada, título y géneros visibles)
      peliculasSeccion.forEach(pelicula => {
        const card = document.createElement("div");
        card.classList.add("tarjeta");
        card.innerHTML = `
          <img src="${pelicula.portada}" alt="${pelicula.titulo}">
          <div class="contenido">
            <h3>${pelicula.titulo}</h3>
            <p>${pelicula.genero.join(", ")}</p>
          </div>
        `;
        // Guardamos el objeto completo en dataset para usarlo más tarde si queremos
        card.dataset.info = JSON.stringify(pelicula);

        carrusel.appendChild(card);
      });

      contenedorCarrusel.appendChild(btnLeft);
      contenedorCarrusel.appendChild(carrusel);
      contenedorCarrusel.appendChild(btnRight);

      // Función botones
      btnLeft.addEventListener("click", ()=> {
        carrusel.scrollBy({ left: -300, behavior: "smooth" });
      });
      btnRight.addEventListener("click", ()=> {
        carrusel.scrollBy({ left: 300, behavior: "smooth" });
      });

      seccionDiv.appendChild(contenedorCarrusel);
      main.appendChild(seccionDiv);
    });

  }); // Cerramos el .then de dataPromise
});

// === PÁGINA DE GÉNERO ===
document.addEventListener("DOMContentLoaded", () => {
  // Esperamos a que los datos del JSON estén listos
  dataPromise.then(catalogoPeliculas => {

    const params = new URLSearchParams(window.location.search);
    const generoParam = params.get("genero");
    if (!generoParam) return; // si no estamos en la página de género, salimos

    const generoNombre = decodeURIComponent(generoParam).replace("_", " ");
    const generoKey = generoNombre.toLowerCase();

    const titulo = document.getElementById("titulo-genero");
    const contenedor = document.getElementById("grid-genero");

    if (titulo && contenedor) {
      // Poner el título con mayúscula inicial
      titulo.textContent = generoNombre.charAt(0).toUpperCase() + generoNombre.slice(1);

      // === 🔧 Mapeo de sinónimos (Suspenso <-> Suspense) ===
      const generoAliases = {
        "suspenso": ["suspenso", "suspense"],
        "suspense": ["suspenso", "suspense"]
      };

      // === Filtrar películas coincidentes ===
      const peliculasFiltradas = catalogoPeliculas
        .filter(p => 
          p.genero.some(g => {
            const gLower = g.toLowerCase();
            // si existe alias, busca en ambas variantes
            if (generoAliases[generoKey]) {
              return generoAliases[generoKey].includes(gLower);
            }
            // de lo contrario, coincidencia exacta (case-insensitive)
            return gLower === generoKey;
          })
        )
        // *** ¡CORREGIDO! *** Invertir el array filtrado
        .reverse(); 

      console.log(`Género: ${generoNombre} → Encontradas:`, peliculasFiltradas.map(p => p.titulo));

      // === Renderizar tarjetas ===
      peliculasFiltradas.forEach(pelicula => {
        const card = document.createElement("div");
        card.classList.add("tarjeta");
        card.innerHTML = `
          <img src="${pelicula.portada}" alt="${pelicula.titulo}">
          <div class="contenido">
            <h3>${pelicula.titulo}</h3>
            <p>${pelicula.genero.join(", ")}</p>
          </div>
        `;
        // Guardamos el objeto completo en dataset
        card.dataset.info = JSON.stringify(pelicula);
        contenedor.appendChild(card);
      });
    }

  }); // Cerramos el .then de dataPromise
});

// === FUNCIONALIDAD DE BOTONES DE MENÚ (Inicio / Series / Películas) ===
document.addEventListener("DOMContentLoaded", () => {
  // Esperamos a que los datos del JSON estén listos
  dataPromise.then(catalogoPeliculas => {

    const btnInicio = document.querySelector(".nav-links a:nth-child(1)");
    const btnSeries = document.querySelector(".nav-links a:nth-child(2)");
    const btnPeliculas = document.querySelector(".nav-links a:nth-child(3)");

    const hero = document.querySelector(".hero");
    const main = document.querySelector("main");

    if (!btnInicio || !btnSeries || !btnPeliculas || !main) return;

    function mostrarGrid(titulo, tipo) {
      // Ocultar el hero si existe
      if (hero) hero.style.display = "none";

      // Limpiar el contenido actual del main
      main.innerHTML = `
        <section class="genero-main">
          <h1 id="titulo-genero">${titulo}</h1>
          <div id="grid-genero" class="grid-genero"></div>
        </section>
      `;

      const grid = main.querySelector("#grid-genero");

      // Filtrar según tipo ("Serie" o "Película")
      const elementos = catalogoPeliculas
        .filter(item => item.tipo === tipo)
        // *** ¡CORREGIDO! *** Invertir el array filtrado
        .reverse();

      if (elementos.length === 0) {
        grid.innerHTML = `<p style="text-align:center;">No se encontraron ${tipo.toLowerCase()}s.</p>`;
        return;
      }

      // Crear tarjetas
      elementos.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("tarjeta");
        card.innerHTML = `
          <img src="${item.portada}" alt="${item.titulo}">
          <div class="contenido">
            <h3>${item.titulo}</h3>
            <p>${item.genero.join(", ")}</p>
          </div>
        `;
        // Guardamos el objeto completo en dataset
        card.dataset.info = JSON.stringify(item);
        grid.appendChild(card);
      });
    }

    // === EVENTOS ===
    btnInicio.addEventListener("click", e => {
      e.preventDefault();
      // Recargar la página para volver al hero y secciones originales
      window.location.href = "index.html";
    });

    btnSeries.addEventListener("click", e => {
      e.preventDefault();
      mostrarGrid("Series", "Serie");
    });

    btnPeliculas.addEventListener("click", e => {
      e.preventDefault();
      mostrarGrid("Películas", "Película");
    });

  }); // Cerramos el .then de dataPromise
});

// === BUSCADOR EMERGENTE ===
document.addEventListener("DOMContentLoaded", () => {
  // Esperamos a que los datos del JSON estén listos
  dataPromise.then(catalogoPeliculas => {

    const iconoLupa = document.querySelector('.menu-right img[alt="Buscar"]');
    const overlay = document.getElementById("buscador-overlay");
    const inputBusqueda = document.getElementById("input-busqueda");
    const resultados = document.getElementById("resultados-busqueda");

    if (!iconoLupa || !overlay || !inputBusqueda || !resultados) return;

    // --- Funciones auxiliares ---
    const abrirBuscador = () => {
      overlay.classList.remove("hidden");
      inputBusqueda.focus();
      // Empuja un estado temporal al historial
      history.pushState({ buscador: true }, "");
    };

    const cerrarBuscador = () => {
      overlay.classList.add("hidden");
      // Solo retrocede si el estado actual pertenece al buscador
      if (history.state && history.state.buscador) {
        history.back();
      }
    };

    // --- Mostrar el buscador al hacer clic en la lupa ---
    iconoLupa.addEventListener("click", abrirBuscador);

    // Cerrar buscador con tecla ESC
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") cerrarBuscador();
    });

    // Cerrar si se hace clic fuera del cuadro
    overlay.addEventListener("click", e => {
      if (e.target === overlay) cerrarBuscador();
    });

    // --- Detectar cuando el usuario presiona el botón "atrás" ---
    window.addEventListener("popstate", e => {
      if (overlay && !overlay.classList.contains("hidden")) {
        // Si el buscador está abierto, lo cerramos sin abandonar la página
        overlay.classList.add("hidden");
      }
    });

    // Buscar mientras se escribe
    inputBusqueda.addEventListener("input", e => {
      const texto = e.target.value.toLowerCase().trim();
      resultados.innerHTML = ""; // limpiar

      if (!texto) return;

      // Filtrado de coincidencias
      const coincidencias = catalogoPeliculas
        .filter(p => p.titulo.toLowerCase().includes(texto))
        // *** ¡CORREGIDO! *** Invertir el array filtrado
        .reverse(); 

      if (coincidencias.length === 0) {
        resultados.innerHTML = `<p style="text-align:center;color:#888;">Sin resultados para "${texto}"</p>`;
        return;
      }

      coincidencias.forEach(pelicula => {
        const card = document.createElement("div");
        card.classList.add("tarjeta");
        card.innerHTML = `
          <img src="${pelicula.portada}" alt="${pelicula.titulo}">
          <div class="contenido">
            <h3>${pelicula.titulo}</h3>
            <p>${pelicula.genero.join(", ")}</p>
          </div>
        `;
        // Guardamos el objeto completo en dataset
        card.dataset.info = JSON.stringify(pelicula);
        
        // No agregamos el evento de clic aquí, usamos el global
        resultados.appendChild(card);
      });
    });

  }); // Cerramos el .then de dataPromise
});


// === CLICK GLOBAL EN TARJETAS ===
// Este listener también debe esperar a los datos, por si acaso
// el dataset.info falla y tiene que usar el fallback de buscar por título
document.addEventListener("click", e => {
  dataPromise.then(catalogoPeliculas => {
    
    const card = e.target.closest(".tarjeta");
    if (!card) return; // si no se hizo clic sobre una tarjeta, salir

    // Intentar obtener la info del dataset
    let pelicula;
    if (card.dataset.info) {
      pelicula = JSON.parse(card.dataset.info);
    } else {
      // fallback: buscar por el título en el texto de la tarjeta
      const titulo = card.querySelector("h3")?.textContent?.trim();
      if (titulo) {
        pelicula = catalogoPeliculas.find(p => p.titulo === titulo);
      }
    }

    if (pelicula && pelicula.enlaceTelegram) {
      window.open(pelicula.enlaceTelegram, "_blank"); // abrir en nueva pestaña
    }

  }); // Cerramos el .then de dataPromise
});


// === BOTONES DE REPRODUCIR DEL HERO ===
document.addEventListener("DOMContentLoaded", () => {
  const botonesHero = document.querySelectorAll(".hero-slide .hero-btn");

  // Define los enlaces personalizados para cada slide (en el mismo orden que aparecen en el HTML)
  const enlacesHero = [
    "https://t.me/c/2990770379/720", // IT: Bienvenidos a Derry
    "https://t.me/c/2990770379/455", // Heretic
    "https://t.me/c/2990770379/264"  // Stranger Things
  ];

  botonesHero.forEach((boton, i) => {
    boton.addEventListener("click", () => {
      const url = enlacesHero[i];
      if (url) window.open(url, "_blank"); // abre en nueva pestaña
    });
  });
});

// === CONTRASEÑA DEFINIDA EN EL FRONTEND ===
const correctPassword = "mkepler6789";

// === FUNCIÓN PARA BLOQUEAR LA PÁGINA ===
function lockPage() {
  const mainContent = document.getElementById('mainContent');
  if (mainContent) {
    mainContent.style.pointerEvents = 'none';
  }

  document.body.style.overflow = 'hidden';
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  document.body.style.mozUserSelect = 'none';
  document.body.style.msUserSelect = 'none';

  document.addEventListener('keydown', blockKeys, true);
  document.addEventListener('contextmenu', blockRightClick, true);
}

// === FUNCIÓN PARA DESBLOQUEAR LA PÁGINA ===
function unlockPage() {
  document.body.style.overflow = 'auto';
  document.body.style.userSelect = 'auto';
  document.body.style.webkitUserSelect = 'auto';
  document.body.style.mozUserSelect = 'auto';
  document.body.style.msUserSelect = 'auto';
  document.body.style.pointerEvents = 'auto';

  const mainContent = document.getElementById('mainContent');
  if (mainContent) {
    mainContent.style.display = 'block';
    mainContent.style.overflow = 'visible';
    mainContent.style.pointerEvents = 'auto';
  }

  document.body.offsetHeight; // Forzar reflow

  document.removeEventListener('keydown', blockKeys, true);
  document.removeEventListener('contextmenu', blockRightClick, true);

  console.log('Página desbloqueada - Scroll habilitado');
}

// === BLOQUEAR TECLAS ===
function blockKeys(e) {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Escape'];
  const isTextInput = e.target.tagName === 'INPUT' && e.target.type === 'password';
  if (!isTextInput && !allowedKeys.includes(e.key)) {
    e.preventDefault();
    e.stopPropagation();
  }
}

// === BLOQUEAR CLIC DERECHO ===
function blockRightClick(e) {
  e.preventDefault();
  e.stopPropagation();
}

// === AUTENTICACIÓN SIN PARPADEO ===
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("passwordOverlay");
  const mainContent = document.getElementById("mainContent");
  const passwordInput = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMsg");
  const submitBtn = document.getElementById("submitPassword"); // botón

  // Verificar si ya está autenticado antes de mostrar nada
  if (sessionStorage.getItem("passwordCorrect") === "true") {
    unlockPage();
    overlay.style.display = "none";
    mainContent.style.display = "block";
    return; // Evita que parpadee
  }

  // Si no está autenticado, bloquear y mostrar overlay
  lockPage();
  overlay.style.display = "flex";
  mainContent.style.display = "none";
  passwordInput.focus();

  // Evento Enter
  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      validarPassword();
    }
  });

  // Evento Click del botón
  if (submitBtn) {
    submitBtn.addEventListener("click", validarPassword);
  }

  function validarPassword() {
    const input = passwordInput.value.trim();
    if (input === correctPassword) {
      sessionStorage.setItem("passwordCorrect", "true");
      overlay.style.display = "none";
      mainContent.style.display = "block";
      unlockPage();
    } else {
      errorMsg.style.display = "block";
      passwordInput.value = "";
      passwordInput.focus();
    }
  }
});

// === PERMITIR PEGAR CONTRASEÑA (para evitar bloqueo de disable-devtool) ===
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("passwordInput");
  if (passwordInput) {
    passwordInput.addEventListener("paste", (e) => {
      e.stopPropagation(); // evita que disable-devtool lo bloquee
    }, true);
  }
});