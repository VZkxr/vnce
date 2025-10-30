// === MENU HAMBURGUESA ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const heroCarrusel = document.querySelector(".hero-carrusel");
const totalSlides = document.querySelectorAll(".hero-slide").length;
let index = 0;

setInterval(() => {
  index = (index + 1) % totalSlides; // bucle infinito
  heroCarrusel.style.transform = `translateX(-${index * 100}%)`;
}, 5000); // cada 5 segundos


document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  const catalogoPeliculas = [
    {
      titulo: "Superman",
      tipo: "Película",
      sinopsis: `Mientras el mundo pierde la fe en la bondad, Clark Kent, un periodista en Metrópolis, se embarca en un viaje para reconciliar su herencia kryptoniana con su educación humana como Superman.`,
      genero: ['Ciencia ficción', 'Aventura', 'Acción'],
      calificacion: 7.4,
      duracion: "129 min",
      elenco: ['David Corenswet', 'Rachel Brosnahan', 'Nicholas Hoult', 'Edi Gathegi', 'Nathan Fillion'],
      portada: "https://image.tmdb.org/t/p/original/fvUJb08yatV2b3NUSwuYdQKYoFd.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2025-07-09"
    },
    {
      titulo: "Eliminar Amigo",
      tipo: "Película",
      sinopsis: `Mientras están chateando una noche, seis amigos reciben por Skype un mensaje de Laura Barns, una joven estudiante que se había suicidado un año antes tras ser humillada en Internet por un video sexual en el que aparecía borracha una noche. Al principio los amigos piensan que es una broma, pero cuando la persona con la que chatean comienza a revelar sus secretos más íntimos, se dan cuenta de que el asunto es grave.`,
      genero: ['Terror', 'Misterio'],
      calificacion: 5.538,
      duracion: "82 min",
      elenco: ['Shelley Hennig', 'Heather Sossaman', 'Renee Olstead', 'Matthew Bohrer', 'Moses Storm'],
      portada: "https://image.tmdb.org/t/p/original/pzxHNiKjHL8Sz7DZ7POXXqohxet.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2014-10-22"
    },
    {
      titulo: "Narcos: México",
      tipo: "Serie",
      sinopsis: `Cuenta la historia real del ascenso al poder del cártel de Guadalajara, liderado por Miguel Ángel Félix Gallardo (Diego Luna), y el inicio de las guerras de la droga en el México de los años 80. Por su parte Kiki Camarena (Michael Peña) es un agente de la DEA norteamericana al que trasladan desde California a Guadalajara para incorporarse a la investigación del recién nacido cartel mexicano. Gallardo comenzó su imperio traficando con marihuana y uniendo a todos los narcos del país con un propósito común, pero pronto su ambición le llevó a ver México como el mejor sitio para transportar la cocaína colombiana.`,
      genero: ['Drama', 'Crimen'],
      calificacion: 7.9,
      duracion: "3 temporadas",
      elenco: ['Scoot McNairy', 'José María Yázpik', 'Alejandro Edda', 'Luis Gerardo Méndez', 'Matt Letscher'],
      portada: "https://image.tmdb.org/t/p/original/yCid4sQkaVzfa2y4yQWs5E0TES9.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2018-11-16"
    },
    {
      titulo: "La Oficina",
      tipo: "Serie",
      sinopsis: `La vida diaria de los empleados de una oficina de una compañía papelera localizada en Scranton, Pensilvania. Corrosivo retrato de los miembros de una empresa. Versión americana de una popular serie británica de la BBC del mismo título.`,
      genero: ['Comedia'],
      calificacion: 8.585,
      duracion: "9 temporadas",
      elenco: ['Rainn Wilson', 'John Krasinski', 'Jenna Fischer', 'Ed Helms'],
      portada: "https://image.tmdb.org/t/p/original/xMtiEEQ8ajtTkEvpftrIGsdmonz.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2005-03-24"
    },
    {
      titulo: "París, Texas",
      tipo: "Película",
      sinopsis: `Un hombre camina por el desierto de Texas sin recordar quién es. Su hermano lo busca e intenta que recuerde cómo era su vida cuatro años antes, cuando abandonó a su mujer y a su hijo. A medida que va recuperando la memoria y se relaciona con personas de su pasado, se plantea la necesidad de rehacer su vida.`,
      genero: ['Drama', 'Romance'],
      calificacion: 8.093,
      duracion: "145 min",
      elenco: ['Harry Dean Stanton', 'Nastassja Kinski', 'Dean Stockwell', 'Hunter Carson', 'Aurore Clément'],
      portada: "https://image.tmdb.org/t/p/original/ba8edzVOul1uDHaLgDImALqhsN1.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "1984-07-16"
    },
    {
      titulo: "Mascotas al Rescate",
      tipo: "Película",
      sinopsis: `En un tren a punto de salir de la estación, suena la alarma que obliga a todos los pasajeros a bajar. Pero entonces el tren arranca de manera imprevista, llevándose a bordo a los viajeros que no han tenido tiempo de descender: los animales de compañía. Asombrados, estos descubren que el tren está bajo el control de Hans, un tejón manipulador y rencoroso que busca vengarse de Rex, el perro policía que lo envió a la cárcel años atrás. Como los servicios de rescate no logran intervenir en el trayecto montañoso del tren, que avanza a toda velocidad, los animales de compañía solo pueden contar con Falcon, un mapache algo tramposo que hará todo lo posible por salvarlos.`,
      genero: ['Animación', 'Comedia', 'Aventura'],
      calificacion: 7.0,
      duracion: "87 min",
      elenco: ['Damien Ferrette', 'Hervé Jolly', 'Kaycie Chase', 'Frantz Confiac', 'Emmanuel Garijo'],
      portada: "https://image.tmdb.org/t/p/original/7B22kTVnkXhpKhaKDGOQ7bIvDXW.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2025-07-02"
    },
    {
      titulo: "Los tipos malos 2",
      tipo: "Película",
      sinopsis: `Un genial equipo de animales que no respetan la ley, los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) en ser buenos, pero se ven envueltos involuntariamente en un golpe de envergadura mundial planeado por un inesperado grupo de criminales: las Tipas Malas.`,
      genero: ['Familia', 'Comedia', 'Crimen', 'Aventura', 'Animación'],
      calificacion: 7.8,
      duracion: "104 min",
      elenco: ['Sam Rockwell', 'Marc Maron', 'Awkwafina', 'Craig Robinson', 'Anthony Ramos'],
      portada: "https://image.tmdb.org/t/p/original/mZmnKDhIS2yNmtfzde5vtdCYzBF.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2025-07-24"
    },
    {
      titulo: "El teléfono negro",
      tipo: "Película",
      sinopsis: `El tímido pero inteligente Finney Blake, de 13 años, es secuestrado por un asesino sádico. En el sótano insonorizado, un teléfono desconectado en la pared empieza a sonar.`,
      genero: ['Terror', 'Suspense'],
      calificacion: 7.552,
      duracion: "103 min",
      elenco: ['Mason Thames', 'Ethan Hawke', 'Madeleine McGraw', 'Jeremy Davies', 'E. Roger Mitchell'],
      portada: "https://image.tmdb.org/t/p/original/1D2R2wIgbTyXTPzmyJIKSbVN9wG.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2022-06-16"
    },
    {
      titulo: "Gran Hotel",
      tipo: "Serie",
      sinopsis: `Para descubrir la verdad sobre la misteriosa desaparición de su hermana, un joven se infiltra en un hotel disfrazado de sirviente y comienza a investigar.`,
      genero: ['Drama', 'Misterio', 'Crimen'],
      calificacion: 7.722,
      duracion: "3 temporadas",
      elenco: ['Adriana Ozores', 'Amaia Salamanca', 'Yon González', 'Eloy Azorín', 'Fele Martínez'],
      portada: "https://image.tmdb.org/t/p/original/hAEWiDY5trfg0JRVaGGyea6Cepk.jpg",
      enlaceTelegram: "https://t.me/vanacue/",
      fecha: "2011-05-10"
    },
  ];

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

    // Crear título de la sección
    const tituloSeccion = document.createElement("h2");
    tituloSeccion.textContent = seccion;

    // Agregar botón y título al contenedor
    headerSeccion.appendChild(tituloSeccion);
    headerSeccion.appendChild(explorarBtn);  // se superpone sobre el título

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

    // Filtrar según sección y mantener orden descendente
    let peliculasSeccion = [];
    if(seccion === "Recién agregadas"){
      peliculasSeccion = catalogoPeliculas.slice(-8).reverse(); // últimas 8 en orden descendente
    } else if(seccion === "Suspenso"){
      // Mapeamos todas las películas que tengan "Suspense" a esta sección
      peliculasSeccion = catalogoPeliculas
        .filter(p => p.genero.includes("Suspense"))
        .slice(-8)
        .reverse();
    } else {
      peliculasSeccion = catalogoPeliculas
        .filter(p => p.genero.includes(seccion))
        .slice(-8)           // tomar las últimas 8 de esa sección
        .reverse();           // invertir para orden descendente
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
});