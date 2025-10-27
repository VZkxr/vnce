// === MENU HAMBURGUESA ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  const catalogoPeliculas = [
    {
      titulo: "Los tipos malos 2",
      sinopsis: `Un genial equipo de animales que no respetan la ley, los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) en ser buenos, pero se ven envueltos involuntariamente en un golpe de envergadura mundial planeado por un inesperado grupo de criminales: las Tipas Malas.`,
      genero: ['Familia', 'Comedia', 'Crimen', 'Aventura', 'Animación'],
      calificacion: 7.757,
      duracion: "104 min",
      elenco: ['Sam Rockwell', 'Marc Maron', 'Awkwafina', 'Craig Robinson', 'Anthony Ramos'],
      portada: "https://image.tmdb.org/t/p/original/mZmnKDhIS2yNmtfzde5vtdCYzBF.jpg",
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Superman",
      sinopsis: `Mientras el mundo pierde la fe en la bondad, Clark Kent, un periodista en Metrópolis, se embarca en un viaje para reconciliar su herencia kryptoniana con su educación humana como Superman.`,
      genero: ['Ciencia ficción', 'Aventura', 'Acción'],
      calificacion: 7.431,
      duracion: "129 min",
      elenco: ['David Corenswet', 'Rachel Brosnahan', 'Nicholas Hoult', 'Edi Gathegi', 'Nathan Fillion'],
      portada: "https://image.tmdb.org/t/p/original/fvUJb08yatV2b3NUSwuYdQKYoFd.jpg",
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Eliminar Amigo",
      sinopsis: `Mientras están chateando una noche, seis amigos reciben por Skype un mensaje de Laura Barns, una joven estudiante que se había suicidado un año antes tras ser humillada en Internet por un video sexual en el que aparecía borracha una noche. Al principio los amigos piensan que es una broma, pero cuando la persona con la que chatean comienza a revelar sus secretos más íntimos, se dan cuenta de que el asunto es grave.`,
      genero: ['Terror', 'Misterio'],
      calificacion: 5.537,
      duracion: "82 min",
      elenco: ['Shelley Hennig', 'Heather Sossaman', 'Renee Olstead', 'Matthew Bohrer', 'Moses Storm'],
      portada: "https://image.tmdb.org/t/p/original/pzxHNiKjHL8Sz7DZ7POXXqohxet.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Narcos: México",
      sinopsis: `Cuenta la historia real del ascenso al poder del cártel de Guadalajara, liderado por Miguel Ángel Félix Gallardo (Diego Luna), y el inicio de las guerras de la droga en el México de los años 80. Por su parte Kiki Camarena (Michael Peña) es un agente de la DEA norteamericana al que trasladan desde California a Guadalajara para incorporarse a la investigación del recién nacido cartel mexicano. Gallardo comenzó su imperio traficando con marihuana y uniendo a todos los narcos del país con un propósito común, pero pronto su ambición le llevó a ver México como el mejor sitio para transportar la cocaína colombiana.`,     
      genero: ['Drama', 'Crimen'],
      calificacion: 7.9,
      duracion: "3 temporadas",
      elenco: ['Scoot McNairy', 'José María Yázpik', 'Alejandro Edda', 'Luis Gerardo Méndez', 'Matt Letscher'],
      portada: "https://image.tmdb.org/t/p/original/yCid4sQkaVzfa2y4yQWs5E0TES9.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Gran Hotel",
      sinopsis: `Para descubrir la verdad sobre la misteriosa desaparición de su hermana, un joven se infiltra en un hotel disfrazado de sirviente y comienza a investigar.`,
      genero: ['Drama', 'Misterio', 'Crimen'],
      calificacion: 7.722,
      duracion: "3 temporadas",
      elenco: ['Adriana Ozores', 'Amaia Salamanca', 'Yon González', 'Eloy Azorín', 'Fele Martínez'],
      portada: "https://image.tmdb.org/t/p/original/hAEWiDY5trfg0JRVaGGyea6Cepk.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "La Oficina",
      sinopsis: `La vida diaria de los empleados de una oficina de una compañía papelera localizada en Scranton, Pensilvania. Corrosivo retrato de los miembros de una empresa. Versión americana de una popular serie británica de la BBC del mismo título.`,
      genero: ['Comedia'],
      calificacion: 8.585,
      duracion: "9 temporadas",
      elenco: ['Rainn Wilson', 'John Krasinski', 'Jenna Fischer', 'Ed Helms'],
      portada: "https://image.tmdb.org/t/p/original/xMtiEEQ8ajtTkEvpftrIGsdmonz.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "John Wick: Otro Día para Matar",
      sinopsis: `La ciudad de Nueva York se convierte en el patio acribillado a balazos de un ex-asesino mientras él elimina a los gánsteres que destruyeron todo lo que él quería.`,   
      genero: ['Acción', 'Suspense'],
      calificacion: 7.452,
      duracion: "101 min",
      elenco: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen', 'Willem Dafoe', 'Dean Winters'],
      portada: "https://image.tmdb.org/t/p/original/tDl5ac1VJwMRvlgINDCsDCqg9CE.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "John Wick 2: Un Nuevo Día para Matar",
      sinopsis: `En esta secuela del éxito de 2014, el legendario asesino John Wick (Keanu Reeves) se ve obligado a salir del retiro por un ex-asociado que planea obtener el control de un misterioso grupo internacional de asesinos. Obligado a ayudarlo por un juramento de sangre, John emprende un viaje a Roma lleno de adrenalina estremecedora para pelear contra los asesinos más peligrosos del mundo.`,
      genero: ['Acción', 'Suspense', 'Crimen'],
      calificacion: 7.338,
      duracion: "122 min",
      elenco: ['Keanu Reeves', 'Common', 'Laurence Fishburne', 'Riccardo Scamarcio', 'Ruby Rose'],
      portada: "https://image.tmdb.org/t/p/original/jiNJdE6F9Gf7c0ZnrQMSJNXQnrd.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "John Wick 3: Parabellum",
      sinopsis: `Después de matar a un miembro del misterioso gremio internacional de asesinos, la Mesa Alta, John Wick está excomulgado, pero los hombres y mujeres más despiadados del mundo esperan cada  uno su turno.`,
      genero: ['Acción', 'Suspense', 'Crimen'],
      calificacion: 7.444,
      duracion: "131 min",
      elenco: ['Keanu Reeves', 'Halle Berry', 'Ian McShane', 'Laurence Fishburne', 'Mark Dacascos'],
      portada: "https://image.tmdb.org/t/p/original/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "John Wick 4",
      sinopsis: `John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.`,
      genero: ['Acción', 'Suspense', 'Crimen'],
      calificacion: 7.718,
      duracion: "170 min",
      elenco: ['Keanu Reeves', '甄子丹', 'Bill Skarsgård', 'Ian McShane', 'Laurence Fishburne'],
      portada: "https://image.tmdb.org/t/p/original/mj2Z9HnRSIEk3n7yVPoOY4Uzzfh.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "El Continental: Del mundo de John Wick",
      sinopsis: `Serie precuela de la franquicia cinematográfica John Wick, centrada en la historia de Winston Scott. Muestra su camino para llegar a su posición como propietario de la sucursal neoyorquina de la cadena de Hoteles Continental, refugios seguros para asesinos en cuyos terrenos no se puede matar ni dejar de pagar una deuda.`,
      genero: ['Crimen', 'Drama', 'Action & Adventure'],
      calificacion: 7.364,
      duracion: "3 episodios",
      elenco: ['Colin Woodell', 'Mel Gibson', 'Mishel Prada', 'Ben Robson', 'Hubert Point-Du Jour'],
      portada: "https://image.tmdb.org/t/p/original/sDasxXov8BvqWCSA0BJvvMmQNdr.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "El desafio de Marguerite",
      sinopsis: `Una brillante estudiante de matemáticas de la Escuela Nacional Superior de Francia, el día de la presentación de su tesis, comete un error que hace tambalear todas las certezas de su planificada vida. Así que decide dejarlo todo y empezar de nuevo.`,        
      genero: ['Drama', 'Misterio'],
      calificacion: 6.847,
      duracion: "114 min",
      elenco: ['Ella Rumpf', 'Julien Frison', 'Jean-Pierre Darroussin', 'Sonia Bonny', 'Clotilde Courau'],
      portada: "https://image.tmdb.org/t/p/original/s3hngjvkwOWfU7aJbHQVJitsfrF.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Bailarina",
      sinopsis: `Eve Macarro es una asesina entrenada por la Ruska Roma desde su infancia, la misma organización criminal encargada del adiestramiento de John Wick. En esta violenta historia de venganza, Eve intentará por todos los medios averiguar quién está detrás del asesinato de su padre. En su lucha por conocer la verdad, tendrá que atenerse a las normas de la Alta Mesa y, por supuesto, a las del Hotel Continental, donde descubrirá que existen secretos ocultos sobre su pasado.`,
      genero: ['Acción', 'Suspense', 'Crimen'],
      calificacion: 7.326,
      duracion: "125 min",
      elenco: ['Ana de Armas', 'Keanu Reeves', 'Ian McShane', 'Anjelica Huston', 'Gabriel Byrne'],
      portada: "https://image.tmdb.org/t/p/original/llpNGX1H5sQdGRHeteyFXELuoMz.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Crepúsculo",
      sinopsis: `La joven Bella Swan (Kristen Stewart) siempre fue una chica muy diferente ya en sus años de niña en Phoenix. Cuando su madre se volvió a casar, la mandó a vivir con su padre, a la pequeña y lluviosa ciudad de Forks, Washington, una población sin ningún aliciente para Bella. Pero entonces conoce en el instituo al misterioso y atractivo Edward Cullen (Robert Pattinson), un joven distinto a los demás que esconde un secreto.`,
      genero: ['Fantasía', 'Drama', 'Romance'],
      calificacion: 6.285,
      duracion: "122 min",
      elenco: ['Kristen Stewart', 'Robert Pattinson', 'Billy Burke', 'Peter Facinelli', 'Ashley Greene'],
      portada: "https://image.tmdb.org/t/p/original/40ollvfwHaVF85lkkg522SIl3Qc.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Crepúsculo: Luna nueva",
      sinopsis: `En esta segunda entrega de la Saga Crepúsculo, Edward Cullen (Robert Pattinson) decide abandonar a Bella Swan (Kristen Stewart) para mantenerla alejada de los peligros del mundo vampírico. Con la ayuda de Jacob Black (Taylor Lautner), su amigo de la infancia y miembro de la misteriosa tribu quileute, Bella intentará superar el abandono de Edward, que la ha dejado sumida en el mayor de los desconsuelos. Pero los peligros siguen acechando a la joven; nuevas y asombrosas criaturas sobrenaturales se cruzarán en su camino, y Bella sólo contará con el apoyo del cada vez más cercano e irresistible Jacob. Repentinamente, Bella se encuentra inmersa en el mundo de los hombres lobo, ancestrales enemigos de los vampiros, y su lealtad es puesta a prueba.`,
      genero: ['Aventura', 'Fantasía', 'Drama', 'Romance'],
      calificacion: 5.994,
      duracion: "131 min",
      elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Dakota Fanning', 'Michael Sheen'],
      portada: "https://image.tmdb.org/t/p/original/l5lF8VHTO5QKObAKE3Wp2QQfGZJ.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Crepúsculo: Eclipse",
      sinopsis: `Tercera entrega de la popular saga de vampiros basada en las novelas de Stephenie Meyer. Bella (Kristen Stewart) tendrá que elegir entre Edward (Robert Pattinson) y Jacob (Taylor Lautner). La ciudad de Seattle es devastada por una serie de misteriosos asesinatos que va en aumento, mientras una vampiresa busca venganza. Bella debe escoger entre su amor por Edward y su amistad con Jacob, consciente de que su decisión puede originar una batalla entre vampiros y licántropos. Rodeada de peligros y con su graduación acercándose, ahora se enfrenta a la decisión más importante de su vida... Dirige David Slade (30 Days of Night, Hard Candy).`,
      genero: ['Aventura', 'Fantasía', 'Drama', 'Romance'],
      calificacion: 6.201,
      duracion: "124 min",
      elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Bryce Dallas Howard', 'Dakota Fanning'],
      portada: "https://image.tmdb.org/t/p/original/mckJPxNAQ51beBQw82evAa9a2Wd.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Crepúsculo:  Amanecer - Parte 1",
      sinopsis: `El amor que Edward y Bella sienten el uno por el otro se sella con la celebración de una gran ceremonia organizada por Alice. Durante la luna de miel, los recién casados tienen relaciones sexuales y Bella queda embarazada. El rápido crecimiento del feto, mitad humano mitad vampiro, afecta gravemente a su salud, llevándola al borde de la muerte... Primera parte de la adaptación de "Amanecer" que supone la cuarta entrega de la saga cinematográfica Crepúsculo, basada en las novelas de Stephenie Meyer.`,
      genero: ['Aventura', 'Fantasía', 'Romance'],
      calificacion: 6.194,
      duracion: "117 min",
      elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Billy Burke', 'Peter Facinelli'],
      portada: "https://image.tmdb.org/t/p/original/27WlKKz9f3vMr6JvSf0LDBVdtaZ.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Crepúsculo:  Amanecer - Parte 2",
      sinopsis: `Tras convertirse en vampiro, Bella debe adaptarse a su nueva naturaleza. Cuando nace Renesmee, la familia Cullen tendrá que protegerse de la amenaza de los Volturi, pues existe una ley que prohíbe transformar a los niños en vampiros, ya que son difíciles de controlar y pueden provocar desastres que pongan en peligro la secreta existencia de los vampiros. Segunda parte de "Amanecer" y quinta entrega de la franquicia cinematográfica Crepúsculo, basada en las novelas de Stephenie Meyer.`,
      genero: ['Aventura', 'Fantasía', 'Drama', 'Romance'],
      calificacion: 6.461,
      duracion: "115 min",
      elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Peter Facinelli', 'Elizabeth Reaser'],
      portada: "https://image.tmdb.org/t/p/original/pPB3rQx0oBOmj5CHZxLWgexo5nS.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "El legado del diablo",
      sinopsis: `Tras la muerte de la matriarca de la familia Leigh, Annie y sus hijos descubren secretos inquietantes sobre su herencia. Su vida cotidiana no solo se ve afectada, sino que también se ven envueltos en un destino aterrador del que no pueden escapar, llevándolos al borde de la locura.`,
      genero: ['Terror', 'Misterio', 'Suspense'],
      calificacion: 7.287,
      duracion: "126 min",
      elenco: ['Toni Collette', 'Alex Wolff', 'Gabriel Byrne', 'Milly Shapiro', 'Ann Dowd'], 
      portada: "https://image.tmdb.org/t/p/original/6chE8jSfzggAudaHmKodzBz8Sl.jpg",
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "Stranger Things",
      sinopsis: `Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.`,
      genero: ['Drama', 'Sci-Fi & Fantasy', 'Misterio'],
      calificacion: 8.593,
      duracion: "5 temporadas",
      elenco: ['Millie Bobby Brown', 'Finn Wolfhard', 'Noah Schnapp', 'Gaten Matarazzo', 'Caleb McLaughlin'],
      portada: "https://image.tmdb.org/t/p/original/1sRJ8D1vpXE5WQBGrUBky3uUwvX.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "París, Texas",
      sinopsis: `Un hombre camina por el desierto de Texas sin recordar quién es. Su hermano lo busca e intenta que recuerde cómo era su vida cuatro años antes, cuando abandonó a su mujer y a su hijo. A medida que va recuperando la memoria y se relaciona con personas de su pasado, se plantea la necesidad de rehacer su vida.`,
      genero: ['Drama'],
      calificacion: 8.093,
      duracion: "145 min",
      elenco: ['Harry Dean Stanton', 'Nastassja Kinski', 'Dean Stockwell', 'Hunter Carson', 'Aurore Clément'],
      portada: "https://image.tmdb.org/t/p/original/ba8edzVOul1uDHaLgDImALqhsN1.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
    {
      titulo: "El hombre que conocía el infinito",
      sinopsis: `Creciendo pobre en Madras, India, Srinivasa Ramanujan Iyengar obtiene la admisión a la Universidad de Cambridge durante la Primera Guerra Mundial, donde se convierte en un pionero en las teorías matemáticas con la guía de su profesor, G.H. Resistente.`,     
      genero: ['Drama', 'Historia'],
      calificacion: 7.158,
      duracion: "108 min",
      elenco: ['Dev Patel', 'Jeremy Irons', 'Toby Jones', 'Devika Bhise', 'Stephen Fry'],    
      portada: "https://image.tmdb.org/t/p/original/sUnBAIZwvtLgAucRe9PixhYEvec.jpg",        
      enlaceTelegram: "https://t.me/vanacue/"
    },
  ];

  // Secciones
  const secciones = ["Recién agregadas", "Terror", "Acción", "Romance", "Drama", "Animadas", "Suspenso"];

  secciones.forEach(seccion => {
    const seccionDiv = document.createElement("div");
    seccionDiv.classList.add("seccion-catalogo");

    const tituloSeccion = document.createElement("h2");
    tituloSeccion.textContent = seccion;
    seccionDiv.appendChild(tituloSeccion);

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

    // Filtrar según sección
    let peliculasSeccion = [];
    if(seccion === "Recién agregadas"){
      peliculasSeccion = catalogoPeliculas.sort((a,b)=> new Date(b.fecha || Date.now()) - new Date(a.fecha || Date.now())).slice(0,6);
    } else {
      peliculasSeccion = catalogoPeliculas.filter(p => p.genero.includes(seccion)).slice(0,6);
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
