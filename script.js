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

const catalogoPeliculas = [
    {
        titulo: "Superman",
        tipo: "Película",
        sinopsis: `Mientras el mundo pierde la fe en la bondad, Clark Kent, un periodista en Metrópolis, se embarca en un viaje para reconciliar su herencia kryptoniana con su educación humana como Superman.`,
        genero: ['Ciencia ficción', 'Aventura', 'Acción'],
        calificacion: 7.43,
        duracion: "129 min",
        elenco: ['David Corenswet', 'Rachel Brosnahan', 'Nicholas Hoult', 'Edi Gathegi', 'Nathan Fillion'],
        portada: "https://image.tmdb.org/t/p/original/fvUJb08yatV2b3NUSwuYdQKYoFd.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/415",
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
        enlaceTelegram: "https://t.me/c/2990770379/474",
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
        enlaceTelegram: "https://t.me/c/2990770379/427",
        fecha: "2018-11-16"
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
        enlaceTelegram: "https://t.me/c/2990770379/2",
        fecha: "2011-05-10"
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
        enlaceTelegram: "https://t.me/c/2990770379/11",
        fecha: "2005-03-24"
    },

    {
        titulo: "John Wick: Otro Día para Matar",
        tipo: "Película",
        sinopsis: `La ciudad de Nueva York se convierte en el patio acribillado a balazos de un ex-asesino mientras él elimina a los gánsteres que destruyeron todo lo que él quería.`,
        genero: ['Acción', 'Suspense'],
        calificacion: 7.452,
        duracion: "101 min",
        elenco: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen', 'Willem Dafoe', 'Dean Winters'],
        portada: "https://image.tmdb.org/t/p/original/tDl5ac1VJwMRvlgINDCsDCqg9CE.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/327",
        fecha: "2014-10-22"
    },

    {
        titulo: "John Wick 2: Un Nuevo Día para Matar",
        tipo: "Película",
        sinopsis: `En esta secuela del éxito de 2014, el legendario asesino John Wick (Keanu Reeves) se ve obligado a salir del retiro por un ex-asociado que planea obtener el control de un misterioso grupo internacional de asesinos. Obligado a ayudarlo por un juramento de sangre, John emprende un viaje a Roma lleno de adrenalina estremecedora para pelear contra los asesinos más peligrosos del mundo.`,
        genero: ['Acción', 'Suspense', 'Crimen'],
        calificacion: 7.338,
        duracion: "122 min",
        elenco: ['Keanu Reeves', 'Common', 'Laurence Fishburne', 'Riccardo Scamarcio', 'Ruby Rose'],
        portada: "https://image.tmdb.org/t/p/original/jiNJdE6F9Gf7c0ZnrQMSJNXQnrd.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/327",
        fecha: "2017-02-08"
    },

    {
        titulo: "John Wick 3: Parabellum",
        tipo: "Película",
        sinopsis: `Después de matar a un miembro del misterioso gremio internacional de asesinos, la Mesa Alta, John Wick está excomulgado, pero los hombres y mujeres más despiadados del mundo esperan cada  uno su turno.`,
        genero: ['Acción', 'Suspense', 'Crimen'],
        calificacion: 7.4,
        duracion: "131 min",
        elenco: ['Keanu Reeves', 'Halle Berry', 'Ian McShane', 'Laurence Fishburne', 'Mark Dacascos'],
        portada: "https://image.tmdb.org/t/p/original/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/327",
        fecha: "2019-05-15"
    },

    {
        titulo: "John Wick 4",
        tipo: "Película",
        sinopsis: `John Wick descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.`,
        genero: ['Acción', 'Suspense', 'Crimen'],
        calificacion: 7.717,
        duracion: "170 min",
        elenco: ['Keanu Reeves', '甄子丹', 'Bill Skarsgård', 'Ian McShane', 'Laurence Fishburne'],
        portada: "https://image.tmdb.org/t/p/original/mj2Z9HnRSIEk3n7yVPoOY4Uzzfh.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/327",
        fecha: "2023-03-22"
    },

    {
        titulo: "El Continental: Del mundo de John Wick",
        tipo: "Serie",
        sinopsis: `Serie precuela de la franquicia cinematográfica John Wick, centrada en la historia de Winston Scott. Muestra su camino para llegar a su posición como propietario de la sucursal neoyorquina de la cadena de Hoteles Continental, refugios seguros para asesinos en cuyos terrenos no se puede matar ni dejar de pagar una deuda.`,
        genero: ['Crimen', 'Drama', 'Action & Adventure'],
        calificacion: 7.364,
        duracion: "3 episodios",
        elenco: ['Colin Woodell', 'Mel Gibson', 'Mishel Prada', 'Ben Robson', 'Hubert Point-Du Jour'],
        portada: "https://image.tmdb.org/t/p/original/sDasxXov8BvqWCSA0BJvvMmQNdr.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/334",
        fecha: "2023-09-22"
    },

    {
        titulo: "El desafio de Marguerite",
        tipo: "Película",
        sinopsis: `Una brillante estudiante de matemáticas de la Escuela Nacional Superior de Francia, el día de la presentación de su tesis, comete un error que hace tambalear todas las certezas de su planificada vida. Así que decide dejarlo todo y empezar de nuevo.`,
        genero: ['Drama', 'Misterio'],
        calificacion: 6.847,
        duracion: "114 min",
        elenco: ['Ella Rumpf', 'Julien Frison', 'Jean-Pierre Darroussin', 'Sonia Bonny', 'Clotilde Courau'],
        portada: "https://image.tmdb.org/t/p/original/s3hngjvkwOWfU7aJbHQVJitsfrF.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/339",
        fecha: "2023-11-01"
    },

    {
        titulo: "Bailarina",
        tipo: "Película",
        sinopsis: `Eve Macarro es una asesina entrenada por la Ruska Roma desde su infancia, la misma organización criminal encargada del adiestramiento de John Wick. En esta violenta historia de venganza, Eve intentará por todos los medios averiguar quién está detrás del asesinato de su padre. En su lucha por conocer la verdad, tendrá que atenerse a las normas de la Alta Mesa y, por supuesto, a las del Hotel Continental, donde descubrirá que existen secretos ocultos sobre su pasado.`,
        genero: ['Acción', 'Suspense', 'Crimen'],
        calificacion: 7.323,
        duracion: "125 min",
        elenco: ['Ana de Armas', 'Keanu Reeves', 'Ian McShane', 'Anjelica Huston', 'Gabriel Byrne'],
        portada: "https://image.tmdb.org/t/p/original/llpNGX1H5sQdGRHeteyFXELuoMz.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/341",
        fecha: "2025-06-04"
    },

    {
        titulo: "Crepúsculo",
        tipo: "Película",
        sinopsis: `La joven Bella Swan (Kristen Stewart) siempre fue una chica muy diferente ya en sus años de niña en Phoenix. Cuando su madre se volvió a casar, la mandó a vivir con su padre, a la pequeña y lluviosa ciudad de Forks, Washington, una población sin ningún aliciente para Bella. Pero entonces conoce en el instituo al misterioso y atractivo Edward Cullen (Robert Pattinson), un joven distinto a los demás que esconde un secreto.`,
        genero: ['Fantasía', 'Drama', 'Romance'],
        calificacion: 6.3,
        duracion: "122 min",
        elenco: ['Kristen Stewart', 'Robert Pattinson', 'Billy Burke', 'Peter Facinelli', 'Ashley Greene'],
        portada: "https://image.tmdb.org/t/p/original/40ollvfwHaVF85lkkg522SIl3Qc.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/364",
        fecha: "2008-11-20"
    },

    {
        titulo: "Crepúsculo: Luna nueva",
        tipo: "Película",
        sinopsis: `En esta segunda entrega de la Saga Crepúsculo, Edward Cullen (Robert Pattinson) decide abandonar a Bella Swan (Kristen Stewart) para mantenerla alejada de los peligros del mundo vampírico. Con la ayuda de Jacob Black (Taylor Lautner), su amigo de la infancia y miembro de la misteriosa tribu quileute, Bella intentará superar el abandono de Edward, que la ha dejado sumida en el mayor de los desconsuelos. Pero los peligros siguen acechando a la joven; nuevas y asombrosas criaturas sobrenaturales se cruzarán en su camino, y Bella sólo contará con el apoyo del cada vez más cercano e irresistible Jacob. Repentinamente, Bella se encuentra inmersa en el mundo de los hombres lobo, ancestrales enemigos de los vampiros, y su lealtad es puesta a prueba.`,
        genero: ['Aventura', 'Fantasía', 'Drama', 'Romance'],
        calificacion: 6.0,
        duracion: "131 min",
        elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Dakota Fanning', 'Michael Sheen'],
        portada: "https://image.tmdb.org/t/p/original/l5lF8VHTO5QKObAKE3Wp2QQfGZJ.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/364",
        fecha: "2009-11-18"
    },

    {
        titulo: "Crepúsculo: Eclipse",
        tipo: "Película",
        sinopsis: `Tercera entrega de la popular saga de vampiros basada en las novelas de Stephenie Meyer. Bella (Kristen Stewart) tendrá que elegir entre Edward (Robert Pattinson) y Jacob (Taylor Lautner). La ciudad de Seattle es devastada por una serie de misteriosos asesinatos que va en aumento, mientras una vampiresa busca venganza. Bella debe escoger entre su amor por Edward y su amistad con Jacob, consciente de que su decisión puede originar una batalla entre vampiros y licántropos. Rodeada de peligros y con su graduación acercándose, ahora se enfrenta a la decisión más importante de su vida... Dirige David Slade (30 Days of Night, Hard Candy).`,
        genero: ['Aventura', 'Fantasía', 'Drama', 'Romance'],
        calificacion: 6.2,
        duracion: "124 min",
        elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Bryce Dallas Howard', 'Dakota Fanning'],
        portada: "https://image.tmdb.org/t/p/original/mckJPxNAQ51beBQw82evAa9a2Wd.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/364",
        fecha: "2010-06-23"
    },

    {
        titulo: "Crepúsculo:  Amanecer - Parte 1",
        tipo: "Película",
        sinopsis: `El amor que Edward y Bella sienten el uno por el otro se sella con la celebración de una gran ceremonia organizada por Alice. Durante la luna de miel, los recién casados tienen relaciones sexuales y Bella queda embarazada. El rápido crecimiento del feto, mitad humano mitad vampiro, afecta gravemente a su salud, llevándola al borde de la muerte... Primera parte de la adaptación de "Amanecer" que supone la cuarta entrega de la saga cinematográfica Crepúsculo, basada en las novelas de Stephenie Meyer.`,
        genero: ['Aventura', 'Fantasía', 'Romance'],
        calificacion: 6.2,
        duracion: "117 min",
        elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Billy Burke', 'Peter Facinelli'],
        portada: "https://image.tmdb.org/t/p/original/27WlKKz9f3vMr6JvSf0LDBVdtaZ.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/364",
        fecha: "2011-11-16"
    },

    {
        titulo: "Crepúsculo:  Amanecer - Parte 2",
        tipo: "Película",
        sinopsis: `Quinta y última pelicula de la saga Crepúsculo. Tras convertirse en vampiro, Bella debe adaptarse a su nueva naturaleza. Cuando nace Renesmee, la familia Cullen tendrá que protegerse de la amenaza de los Volturi, pues existe una ley que prohíbe transformar a los niños en vampiros, ya que son difíciles de controlar y pueden provocar desastres que pongan en peligro la secreta existencia de los vampiros. Segunda parte de "Amanecer" y quinta entrega de la franquicia cinematográfica Crepúsculo, basada en las novelas de Stephenie Meyer`,
        genero: ['Aventura', 'Fantasía', 'Drama', 'Romance'],
        calificacion: 6.461,
        duracion: "115 min",
        elenco: ['Kristen Stewart', 'Robert Pattinson', 'Taylor Lautner', 'Peter Facinelli', 'Elizabeth Reaser'],
        portada: "https://image.tmdb.org/t/p/original/pPB3rQx0oBOmj5CHZxLWgexo5nS.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/364",
        fecha: "2012-11-13"
    },

    {
        titulo: "El legado del diablo",
        tipo: "Película",
        sinopsis: `Tras la muerte de la matriarca de la familia Leigh, Annie y sus hijos descubren secretos inquietantes sobre su herencia. Su vida cotidiana no solo se ve afectada, sino que también se ven envueltos en un destino aterrador del que no pueden escapar, llevándolos al borde de la locura.`,
        genero: ['Terror', 'Misterio', 'Suspense'],
        calificacion: 7.288,
        duracion: "126 min",
        elenco: ['Toni Collette', 'Alex Wolff', 'Gabriel Byrne', 'Milly Shapiro', 'Ann Dowd'],
        portada: "https://image.tmdb.org/t/p/original/6chE8jSfzggAudaHmKodzBz8Sl.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/370",
        fecha: "2018-06-07"
    },

    {
        titulo: "Stranger Things",
        tipo: "Serie",
        sinopsis: `Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.`,
        genero: ['Drama', 'Sci-Fi & Fantasy', 'Misterio'],
        calificacion: 8.6,
        duracion: "5 temporadas",
        elenco: ['Millie Bobby Brown', 'Finn Wolfhard', 'Noah Schnapp', 'Gaten Matarazzo', 'Caleb McLaughlin'],
        portada: "https://image.tmdb.org/t/p/original/1sRJ8D1vpXE5WQBGrUBky3uUwvX.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/264",
        fecha: "2016-07-15"
    },

    {
        titulo: "París, Texas",
        tipo: "Película",
        sinopsis: `Un hombre camina por el desierto de Texas sin recordar quién es. Su hermano lo busca e intenta que recuerde cómo era su vida cuatro años antes, cuando abandonó a su mujer y a su hijo. A medida que va recuperando la memoria y se relaciona con personas de su pasado, se plantea la necesidad de rehacer su vida.`,
        genero: ['Drama'],
        calificacion: 8.093,
        duracion: "145 min",
        elenco: ['Harry Dean Stanton', 'Nastassja Kinski', 'Dean Stockwell', 'Hunter Carson', 'Aurore Clément'],
        portada: "https://image.tmdb.org/t/p/original/ba8edzVOul1uDHaLgDImALqhsN1.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/383",
        fecha: "1984-07-16"
    },

    {
        titulo: "El hombre que conocía el infinito",
        tipo: "Película",
        sinopsis: `Creciendo pobre en Madras, India, Srinivasa Ramanujan Iyengar obtiene la admisión a la Universidad de Cambridge durante la Primera Guerra Mundial, donde se convierte en un pionero en las teorías matemáticas con la guía de su profesor, G.H. Resistente.`,
        genero: ['Drama', 'Historia'],
        calificacion: 7.158,
        duracion: "108 min",
        elenco: ['Dev Patel', 'Jeremy Irons', 'Toby Jones', 'Devika Bhise', 'Stephen Fry'],
        portada: "https://image.tmdb.org/t/p/original/sUnBAIZwvtLgAucRe9PixhYEvec.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/387",
        fecha: "2016-04-08"
    },

    {
        titulo: "Mente siniestra",
        tipo: "Película",
        sinopsis: `David Callaway es un padre viudo con una pequeña hija llamada Emily. Alison, la esposa de David, muere repentinamente, traumatizando a ambos. Padre e hija se mudan al norte del estado de Nueva York, para distanciar a la niña de los recuerdos de su vida con su madre en Manhattan.`,
        genero: ['Terror', 'Misterio'],
        calificacion: 6.331,
        duracion: "101 min",
        elenco: ['Robert De Niro', 'Dakota Fanning', 'Famke Janssen', 'Elisabeth Shue', 'Amy Irving'],
        portada: "https://image.tmdb.org/t/p/original/bzpCwz8KoVzb0yIr7BI6W4LQjM2.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/389",
        fecha: "2005-01-27"
    },

    {
        titulo: "Así en la Tierra como en el Infierno",
        tipo: "Película",
        sinopsis: `A lo largo de los kilómetros y kilómetros de tortuosas catacumbas que hay bajo las calles de París, un grupo de exploradores se aventura entre los cientos de miles de huesos sin catalogar y acaba averiguando cuál era la verdadera función de esta ciudad de los muertos. El recorrido se convierte en un viaje al corazón del terror.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.734,
        duracion: "93 min",
        elenco: ['Perdita Weeks', 'Ben Feldman', 'Edwin Hodge', 'François Civil', 'Marion Lambert'],
        portada: "https://image.tmdb.org/t/p/original/vyDIDxwMQP8UG9bpAeckURPK0Vq.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/391",
        fecha: "2014-08-14"
    },

    {
        titulo: "300",
        tipo: "Película",
        sinopsis: `En el año 480 antes de Cristo, existe un estado de guerra entre Persia, dirigida por el rey Jerjes, y Grecia. En la batalla de la Termópilas, Leonidas, rey de la ciudad griega de Esparta, encabeza a sus 300 bravos soldados en contra del numeroso ejército persa. A pesar de que la muerte aguarda a los espartanos, su sacrificio inspira a toda Grecia para unirla en contra de su enemigo común.`,
        genero: ['Acción', 'Aventura', 'Bélica'],
        calificacion: 7.189,
        duracion: "116 min",
        elenco: ['Gerard Butler', 'Lena Headey', 'Dominic West', 'David Wenham', 'Vincent Regan'],
        portada: "https://image.tmdb.org/t/p/original/h7Lcio0c9ohxPhSZg42eTlKIVVY.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/395",
        fecha: "2007-03-07"
    },

    {
        titulo: "300: El Nacimiento de un Imperio",
        tipo: "Película",
        sinopsis: `Este nuevo capítulo de la saga épica lleva la acción a un nuevo campo de batalla, en el mar, mientras el general griego Themistokles intenta unir toda Grecia liderando la carga que cambiará el curso de la guerra. "300: El Nacimiento de un Imperio" enfrenta a Themistokles contra las masivas fuerzas invasoras persas lideradas por el mortal convertido en dios Xerxes y Artemesia, el vengativo comandante de la armada persa.`,
        genero: ['Acción', 'Drama', 'Bélica'],
        calificacion: 6.113,
        duracion: "102 min",
        elenco: ['Sullivan Stapleton', 'Eva Green', 'Lena Headey', 'Callan Mulvey', 'David Wenham'],
        portada: "https://image.tmdb.org/t/p/original/cbt5wY4rCe63JBmNYnJytJpFhnm.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/395",
        fecha: "2014-03-05"
    },

    {
        titulo: "El laberinto del fauno",
        tipo: "Película",
        sinopsis: `Un cuento oscuro y mágico ambientado en la posguerra española. La joven Ofelia se adentra en un mundo de fantasía lleno de criaturas extrañas mientras lucha contra la brutalidad del mundo real. Con una mezcla de horror y maravilla, la película explora la lucha por la inocencia y la esperanza en tiempos de oscuridad.`,
        genero: ['Fantasía', 'Drama', 'Bélica'],
        calificacion: 7.8,
        duracion: "118 min",
        elenco: ['Ivana Baquero', 'Sergi López', 'Maribel Verdú', 'Ariadna Gil', 'Doug Jones'],
        portada: "https://image.tmdb.org/t/p/original/953ZprqPxXSfhHvjBVRiIv7fSP6.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/404",
        fecha: "2006-10-11"
    },

    {
        titulo: "Misión: Imposible - La sentencia final",
        tipo: "Película",
        sinopsis: `La Entidad, la IA experimental que se ha convertido en el villano de la historia, sigue activa y cuenta con el apoyo del malvado Gabriel en el mundo de los cárnicos. Por suerte, Ethan y su equipo tienen la llave que les podría dar el control de la Entidad, algo que les obligará a arriesgarse para eliminar a esa IA que descansa en el fondo del mar.`,
        genero: ['Acción', 'Aventura', 'Suspense'],
        calificacion: 7.279,
        duracion: "170 min",
        elenco: ['Tom Cruise', 'Hayley Atwell', 'Ving Rhames', 'Simon Pegg', 'Esai Morales'],
        portada: "https://image.tmdb.org/t/p/original/haOjJGUV00dKlZaJWgjM1UD1cJV.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2025-05-17"
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
        enlaceTelegram: "https://t.me/c/2990770379/491",
        fecha: "2025-07-24"
    },

    {
        titulo: "Mascotas al Rescate",
        tipo: "Película",
        sinopsis: `En un tren a punto de salir de la estación, suena la alarma que obliga a todos los pasajeros a bajar. Pero entonces el tren arranca de manera imprevista, llevándose a bordo a los viajeros que no han tenido tiempo de descender: los animales de compañía. Asombrados, estos descubren que el tren está bajo el control de Hans, un tejón manipulador y rencoroso que busca vengarse de Rex, el perro policía que lo envió a la cárcel años atrás. Como los servicios de rescate no logran intervenir en el trayecto montañoso del tren, que avanza a toda velocidad, los animales de compañía solo pueden contar con Falcon, un mapache algo tramposo que hará todo lo posible por salvarlos.`,
        genero: ['Animación', 'Comedia', 'Aventura', 'Suspense'],
        calificacion: 7.1,
        duracion: "87 min",
        elenco: ['Damien Ferrette', 'Hervé Jolly', 'Kaycie Chase', 'Frantz Confiac', 'Emmanuel Garijo'],
        portada: "https://image.tmdb.org/t/p/original/7B22kTVnkXhpKhaKDGOQ7bIvDXW.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/413",
        fecha: "2025-07-02"
    },

    {
        titulo: "Halloween",
        tipo: "Película",
        sinopsis: `Durante la noche de Halloween, Michael, un niño de seis años, asesina a su familia con un cuchillo de cocina. Es internado en un psiquiátrico del que huye quince años más tarde, precisamente la víspera de Halloween. El psicópata vuelve a su pueblo y comete una serie de asesinatos. Mientras, uno de los médicos del psiquiátrico le sigue la pista.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 7.6,
        duracion: "90 min",
        elenco: ['Donald Pleasence', 'Jamie Lee Curtis', 'Nancy Kyes', 'P. J. Soles', 'Charles Cyphers'],
        portada: "https://image.tmdb.org/t/p/original/6bsDpDL312h6vEGPOPWoweaZWUG.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1978-10-24"
    },

    {
        titulo: "Halloween II",
        tipo: "Película",
        sinopsis: `El psicópata Michael Myers sigue vivo y vuelve a ponerse en acción. Ahora se dirige a un pequeño hospital donde se encuentra Laurie Strode, la única víctima que logró sobrevivir a su primer ataque. Mientras tanto, el doctor Loomis sigue buscando a su sanguinario paciente.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.579,
        duracion: "92 min",
        elenco: ['Jamie Lee Curtis', 'Donald Pleasence', 'Charles Cyphers', 'Jeffrey Kramer', 'Lance Guest'],
        portada: "https://image.tmdb.org/t/p/original/apMPhXFMkqfBHx8ltZKMDB9JuAi.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1981-10-30"
    },

    {
        titulo: "Halloween III: El imperio de las brujas",
        tipo: "Película",
        sinopsis: `En realidad no es una continuación de las andanzas del siniestro Michael Myers, pues de los films anteriores sólo toma prestado el título. Aquí, una pesadillas se vuelven realidad cuando un maníaco y propietario de una tienda de juguetes, Conal Cochran, empieza a fabricar unas máscaras que convierten las almas y los cuerpos de los niños en seres diabólicos.`,
        genero: ['Terror', 'Ciencia ficción'],
        calificacion: 5.2,
        duracion: "99 min",
        elenco: ['Tom Atkins', 'Stacey Nelkin', "Dan O'Herlihy", 'Michael Currie', 'Ralph Strait'],
        portada: "https://image.tmdb.org/t/p/original/hbnLPuazrrUqHxbm2Tsd22tHdHQ.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1982-10-22"
    },

    {
        titulo: "Halloween 4: El regreso de Michael Myers",
        tipo: "Película",
        sinopsis: `Michael Myers, un psicópata que mató a dieciséis personas, acabó siendo capturado por su propio médico, el doctor Lomis. Tras pasar diez años encarcelado en una prisión de máxima seguridad, Myers es trasladado, en estado catatónico, al Instituto Mental de Richmond. Pero inexplicablemente se vuelve a escapar con el fin de asesinar a su único familiar vivo, su sobrina Jamie Lloyd. De nuevo el doctor Lomis intentará atraparlo.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.171,
        duracion: "88 min",
        elenco: ['Donald Pleasence', 'Ellie Cornell', 'Danielle Harris', 'George P. Wilbur', 'Michael Pataki'],
        portada: "https://image.tmdb.org/t/p/original/dajbRAwMb2hLGrTQwOHeCc6ouPR.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1988-10-21"
    },

    {
        titulo: "Halloween 5: La venganza de Michael Myers",
        tipo: "Película",
        sinopsis: `Michael Myers, el psicópata asesino ha vuelto a sobrevivir a las heridas de bala después de la persecución policial y, obsesionado por la venganza, continua buscando a su pequeña sobrina para asesinarla. Jamie ha sido hospitalizada y debido a un shock traumático ha perdido la capacidad del habla. Sin embargo ha desarrollado un vínculo telepático con su tío Michael y sabe que sigue vivo y que la está buscando para vengarse.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 5.307,
        duracion: "98 min",
        elenco: ['Donald Pleasence', 'Danielle Harris', 'Ellie Cornell', 'Wendy Foxworth', 'Beau Starr'],
        portada: "https://image.tmdb.org/t/p/original/aYW5YLdTQQ8taHCo8ezblLATCOB.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1989-10-12"
    },

    {
        titulo: "Halloween 6: La maldición de Michael Myers",
        tipo: "Película",
        sinopsis: `Cuando Michael Myers tenía seis años, apuñaló a su hermana hasta la muerte. Durante muchos años fue encerrado en el centro psiquiátrico Smiths Groves, pero logró escapar y, súbitamente, Halloween se convirtió en un sinónimo de locura. Uno a uno, cada miembro de su familia fue asesinado hasta que sólo quedó Jamie Lloyd, su sobrina de nueve años. En Haddonfield, la noche de Halloween no es una fiesta cualquiera porque siempre durante dicha celebración, Michael decide visitar su pueblo natal con un único objetivo; el asesinato premeditado. Ya han pasado seis años desde que Michael muriera, presumiblemente, consumido por las llamas. Haddonfield, por fin, puede celebrar Halloween... pero Michael Myers también está listo para la fiesta.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 5.2,
        duracion: "88 min",
        elenco: ['Donald Pleasence', 'Paul Rudd', 'Marianne Hagan', 'Mitchell Ryan', 'Kim Darby'],
        portada: "https://image.tmdb.org/t/p/original/gZTdirlRJUAJz36ex46VF1kUrpJ.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1995-09-29"
    },

    {
        titulo: "Halloween H2O: Veinte años después",
        tipo: "Película",
        sinopsis: `Veinte años después de ser acosada por un psicópata, Laurie Strode vive apartada en una pequeña ciudad con el recuerdo permanente de aquella pesadilla. Tiene un hijo de 17 años, trabaja como jefa de estudios en una escuela privada y la fiesta de Halloween está a punto de celebrarse una vez más.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.046,
        duracion: "86 min",
        elenco: ['Jamie Lee Curtis', 'Josh Hartnett', 'Adam Arkin', 'Michelle Williams', 'Adam Hann-Byrd'],
        portada: "https://image.tmdb.org/t/p/original/2xj2z8qqs6r5FTSe4tAuqCrYjK5.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "1998-08-05"
    },

    {
        titulo: "Halloween: Resurrección",
        tipo: "Película",
        sinopsis: `Un grupo de adolescentes gana un concurso para pasar una noche en la casa donde creció Michael Myers, el cual será emitido en directo por Internet. Ellos esperan vivir una fiesta y obtener publicidad gratuita, pero las cosas acaban muy mal.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 4.611,
        duracion: "94 min",
        elenco: ['Jamie Lee Curtis', 'Brad Loree', 'Busta Rhymes', 'Bianca Kajlich', 'Katee Sackhoff'],
        portada: "https://image.tmdb.org/t/p/original/oY7zaqkuiO7uVvKzl1yL7iIHauR.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "2002-07-01"
    },

    {
        titulo: "Halloween",
        tipo: "Película",
        sinopsis: `Jamie Lee Curtis regresa a su papel icónico como Laurie Strode, quien llega a su enfrentamiento final con Michael Myers, la figura enmascarada que la ha perseguido desde que escapó por poco de su juerga de asesinatos en la noche de Halloween de hace cuatro décadas. Esta película, la undécima película de la serie "Halloween", ignorará los eventos de todas las secuelas anteriores, retomando 40 años después de los eventos de la película original.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.6,
        duracion: "105 min",
        elenco: ['Jamie Lee Curtis', 'Judy Greer', 'Andi Matichak', 'James Jude Courtney', 'Nick Castle'],
        portada: "https://image.tmdb.org/t/p/original/tRwuTL3KhU03MA2EkXNdRXhH49V.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "2018-10-18"
    },

    {
        titulo: "Halloween Kills: La Noche Aún No Termina",
        tipo: "Película",
        sinopsis: `Minutos después de que Laurie Strode, su hija Karen y su nieta Allyson dejaran al despiadado asesino Michael Myers encerrado y ardiendo en el sótano, Laurie es llevada de urgencia al hospital con heridas que ponen en peligro su vida, creyendo haber acabado por fin con quien ha convertido su vida en un infierno. Pero cuando Michael consigue liberarse de la trampa de Laurie, reinicia su ritual de baño de sangre. Mientras Laurie lucha contra su dolor y se prepara para defenderse de él, inspira a toda la población de Haddonfield a rebelarse contra su imparable monstruo. Las Strode se unen a un grupo de supervivientes de la primera masacre de Michael quienes deciden hacer justicia por su propia mano y forman una patrulla ciudadana con el objetivo de cazar a Michael de una vez por todas.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.431,
        duracion: "105 min",
        elenco: ['Jamie Lee Curtis', 'Judy Greer', 'Andi Matichak', 'James Jude Courtney', 'Nick Castle'],
        portada: "https://image.tmdb.org/t/p/original/j1Jf5OCpjCDBCp4K7Nnh8JlvNUJ.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "2021-10-14"
    },

    {
        titulo: "Halloween: La noche final",
        tipo: "Película",
        sinopsis: `Cuatro años después de los acontecimientos de Halloween Kills, Laurie vive con su nieta Allyson (Andi Matichak) y está a punto de terminar de escribir sus memorias. Nadie ha vuelto a ver a Michael Myers desde entonces. Laurie, después de permitir que el espectro de Myers controlara su realidad durante décadas, ha decidido por fin dejar atrás el miedo y la rabia para dedicarse a vivir. Pero cuando acusan a Corey Cunningham (Rohan Campbell) de matar al niño al que cuidaba, se desencadena una cascada de violencia que obligará a Laurie a enfrentarse de una vez por todas con una maldad que no puede controlar.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.062,
        duracion: "111 min",
        elenco: ['Jamie Lee Curtis', 'Andi Matichak', 'James Jude Courtney', 'Rohan Campbell', 'Will Patton'],
        portada: "https://image.tmdb.org/t/p/original/9J2CQk79hu9oiLUUbODq640eVYe.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "2022-10-12"
    },

    {
        titulo: "Halloween: El inicio",
        tipo: "Película",
        sinopsis: `Después de estar recluido durante 17 años en una institución mental, Michael Myers, convertido ya en un hombre adulto y muy peligroso, logra escaparse y regresa a Haddonfield para buscar a su hermana. Todo aquel que se cruce en su camino corre un peligro mortal.`,
        genero: ['Terror'],
        calificacion: 6.217,
        duracion: "121 min",
        elenco: ['Malcolm McDowell', 'Sheri Moon Zombie', 'Tyler Mane', 'Scout Taylor-Compton', 'Brad Dourif'],
        portada: "https://image.tmdb.org/t/p/original/dVum9ZhWGARGiZgb185I76qriPc.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/400",
        fecha: "2007-08-31"
    },

    {
        titulo: "El teléfono negro",
        tipo: "Película",
        sinopsis: `El tímido pero inteligente Finney Blake, de 13 años, es secuestrado por un asesino sádico. En el sótano insonorizado, un teléfono desconectado en la pared empieza a sonar.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 7.551,
        duracion: "103 min",
        elenco: ['Mason Thames', 'Madeleine McGraw', 'Ethan Hawke', 'Jeremy Davies', 'E. Roger Mitchell'],
        portada: "https://image.tmdb.org/t/p/original/1D2R2wIgbTyXTPzmyJIKSbVN9wG.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/457",
        fecha: "2022-06-16"
    },

    {
        titulo: "Los 4 Fantásticos: Primeros pasos",
        tipo: "Película",
        sinopsis: `Con un estruendoso trasfondo en un mundo retrofuturista inspirado en los años 60, la Primera Familia de Marvel enfrenta su desafío más intimidante hasta ahora. Obligados a equilibrar sus roles como héroes con la fuerza de su vínculo familiar, deben defender la Tierra de un voraz dios espacial llamado Galactus y su enigmático heraldo, Silver Surfer.`,
        genero: ['Ciencia ficción', 'Aventura'],
        calificacion: 7.105,
        duracion: "130 min",
        elenco: ['Pedro Pascal', 'Vanessa Kirby', 'Ebon Moss-Bachrach', 'Joseph Quinn', 'Ralph Ineson'],
        portada: "https://image.tmdb.org/t/p/original/ckfiXWGEMWrUP53cc6QyHijLlhl.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/461",
        fecha: "2025-07-23"
    },

    {
        titulo: "Red Social",
        tipo: "Película",
        sinopsis: `Durante una noche de otoño de 2003, el genio de la programación de computación de la Universidad de Harvard, Mark Zuckerberg, se sienta en su computadora y comienza a trabajar en una nueva idea: una red social global. A sólo seis años y 500 millones de amigos más tarde, Mark es el multimillonario más joven de la historia... pero también su éxito conduce a complicaciones tanto personales como legales.`,
        genero: ['Drama'],
        calificacion: 7.371,
        duracion: "121 min",
        elenco: ['Jesse Eisenberg', 'Andrew Garfield', 'Armie Hammer', 'Josh Pence', 'Justin Timberlake'],
        portada: "https://image.tmdb.org/t/p/original/5T10eqfa8UgK0LF80040oFrHZk7.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/478",
        fecha: "2010-10-01"
    },

    {
        titulo: "No miren arriba",
        tipo: "Película",
        sinopsis: `Dos astrónomos realizan una gira mediática para advertirle a la humanidad de un cometa mortal que está en rumbo de colisión con la Tierra. La respuesta del mundo: ¿Y?`,
        genero: ['Comedia', 'Ciencia ficción'],
        calificacion: 7.068,
        duracion: "138 min",
        elenco: ['Leonardo DiCaprio', 'Jennifer Lawrence', 'Meryl Streep', 'Cate Blanchett', 'Rob Morgan'],
        portada: "https://image.tmdb.org/t/p/original/hHT5LZndNW8qDI57niDU4M0lGOj.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/481",
        fecha: "2021-12-08"
    },

    {
        titulo: "Las Brujas",
        tipo: "Película",
        sinopsis: `Una anciana noruega Helga le explica a su nieto Luke que las brujas no solo existen, sino que quieren eliminar a todos los niños. Las describe como calvas -aunque usan pelucas-, manos deformes -que esconden bajo unos guantes- y pies cuadrados, con repugnantes muñones en sus dedos. También le cuenta que una amiga de la infancia, llamada Erica, fue víctima del ataque de una bruja y nunca más la volvió a ver. Tras la muerte de sus padres, Luke se muda a Inglaterra junto a su abuela y allí descubre a una mujer con los ojos morados, signo de que es una bruja. Ésta, con una serpiente en la mano, intenta convencer al niño de que baje de la casa del árbol en la que se encuentra, pero es Helga quien descubre lo que está ocurriendo y sale en ayuda de su nieto.`,
        genero: ['Fantasía', 'Familia', 'Terror'],
        calificacion: 6.9,
        duracion: "91 min",
        elenco: ['Jasen Fisher', 'Mai Zetterling', 'Anjelica Huston', 'Charlie Potter', 'Rowan Atkinson'],
        portada: "https://image.tmdb.org/t/p/original/ptNCuitioUVcJz6RhYMuk5HBWX8.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/484",
        fecha: "1990-05-25"
    },

    {
        titulo: "Sobre-Natural",
        tipo: "Película",
        sinopsis: `Una extraña tormenta libera a una especie de criaturas sedientas de sangre en un pequeño pueblo, donde una pequeña banda de ciudadanos se esconde en un supermercado y lucha por sus vidas.`,
        genero: ['Terror', 'Ciencia ficción', 'Suspense'],
        calificacion: 6.937,
        duracion: "126 min",
        elenco: ['Thomas Jane', 'Laurie Holden', 'Toby Jones', 'Marcia Gay Harden', 'Andre Braugher'],
        portada: "https://image.tmdb.org/t/p/original/6qXs5z9bsJSIUpeMzn1SVX0z3zV.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/487",
        fecha: "2007-11-21"
    },

    {
        titulo: "Hereje",
        tipo: "Película",
        sinopsis: `Dos jóvenes misioneras se ven obligadas a demostrar su fe cuando llaman a la puerta equivocada y son recibidas por el diabólico Sr. Reed (Hugh Grant). Los tres se verán envueltos en un brutal juego del gato y el ratón durante una larga noche de tormenta.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 6.976,
        duracion: "111 min",
        elenco: ['Hugh Grant', 'Sophie Thatcher', 'Chloe East', 'Topher Grace', 'Elle Young'],
        portada: "https://image.tmdb.org/t/p/original/rpo3DJFMOSAz27gDwxJ5LIwIFni.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/455",
        fecha: "2024-10-31"
    },

    {
        titulo: "Cuando acecha la maldad",
        tipo: "Película",
        sinopsis: `Los vecinos de un pequeño pueblo rural descubren que un demonio está a punto de nacer entre ellos. Intentan desesperadamente escapar antes de que nazca el mal, pero puede que sea demasiado tarde.`,
        genero: ['Terror', 'Suspense'],
        calificacion: 7.219,
        duracion: "100 min",
        elenco: ['Ezequiel Rodríguez', 'Demián Salomón', 'Silvina Sabater', 'Luis Ziembrowski', 'Marcelo Michinaux'],
        portada: "https://image.tmdb.org/t/p/original/9Ly4S99McgnhO50XikTGguPFNvo.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/494",
        fecha: "2023-10-05"
    },

    {
        titulo: "La hora de la desaparición",
        tipo: "Película",
        sinopsis: `Cuando todos los niños de una secundaria, menos uno, desaparecen misteriosamente la misma noche y exactamente a la misma hora, toda la comunidad de un pequeño pueblo se pregunta quién (o qué) es responsable de su desaparición.`,
        genero: ['Terror', 'Misterio'],
        calificacion: 7.359,
        duracion: "128 min",
        elenco: ['Julia Garner', 'Josh Brolin', 'Alden Ehrenreich', 'Austin Abrams', 'Benedict Wong'],
        portada: "https://image.tmdb.org/t/p/original/6Gw2eH2SkANYXC7mDjtYMppOXiL.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/497",
        fecha: "2025-08-04"
    },

    {
        titulo: "Tren bala",
        tipo: "Película",
        sinopsis: `El desafortunado asesino "Catarina" está decidido a hacer su trabajo pacíficamente después de que demasiados conciertos se descarrilaron. El destino, sin embargo, puede tener otros planes, ya que la última misión de Catarina lo pone en curso de colisión con adversarios letales de todo el mundo, todos con objetivos conectados, pero conflictivos, en el tren más rápido del mundo.`,
        genero: ['Acción', 'Comedia', 'Suspense'],
        calificacion: 7.422,
        duracion: "127 min",
        elenco: ['Brad Pitt', 'Joey King', 'Aaron Taylor-Johnson', 'Brian Tyree Henry', 'Andrew Koji'],
        portada: "https://image.tmdb.org/t/p/original/ybSIUt48PsM08F4UZwHdjL9ZVG2.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/505",
        fecha: "2022-08-03"
    },

    {
        titulo: "Viejos",
        tipo: "Película",
        sinopsis: `Una familia pone rumbo a una remota y paradisiaca playa para pasar un día de vacaciones. El lugar se encuentra en un recóndito paraje y esconde algo que está a punto de cambiarle la vida a todos y cada uno de los presentes. A medida que pasan las horas, cada uno de ellos irá envejeciendo más y más, hasta el punto de que su vida se verá reducida a ese día.`,
        genero: ['Suspense', 'Misterio', 'Terror'],
        calificacion: 6.321,
        duracion: "108 min",
        elenco: ['Gael García Bernal', 'Vicky Krieps', 'Rufus Sewell', 'Alex Wolff', 'Thomasin McKenzie'],
        portada: "https://image.tmdb.org/t/p/original/hwZ0d29xTh7BvJZfolLffRR6iVr.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/510",
        fecha: "2021-07-21"
    },

    {
        titulo: "Misión: Imposible",
        tipo: "Película",
        sinopsis: `Un agente estadounidense, bajo la falsa sospecha de deslealtad, debe descubrir y exponer al verdadero espía sin la ayuda de su organización.`,
        genero: ['Aventura', 'Acción', 'Suspense'],
        calificacion: 7.011,
        duracion: "105 min",
        elenco: ['Tom Cruise', 'Jon Voight', 'Emmanuelle Béart', 'Henry Czerny', 'Jean Reno'],
        portada: "https://image.tmdb.org/t/p/original/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "1996-05-22"
    },

    {
        titulo: "Misión: Imposible 2",
        tipo: "Película",
        sinopsis: `El agente del FMI Ethan Hunt es enviado a Sydney para encontrar y destruir una enfermedad genéticamente modificada llamada «Quimera».`,
        genero: ['Aventura', 'Acción', 'Suspense'],
        calificacion: 6.133,
        duracion: "118 min",
        elenco: ['Tom Cruise', 'Dougray Scott', 'Thandiwe Newton', 'Ving Rhames', 'Richard Roxburgh'],
        portada: "https://image.tmdb.org/t/p/original/mskE3W88cjMRrnKQye8pjmJu3O1.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2000-05-24"
    },

    {
        titulo: "Misión: Imposible 3",
        tipo: "Película",
        sinopsis: `El agente del FMI Ethan Hunt entra en conflicto con un peligroso y sádico traficante de armas que, en respuesta, amenaza su vida y la de su prometida.`,
        genero: ['Aventura', 'Acción', 'Suspense'],
        calificacion: 6.7,
        duracion: "126 min",
        elenco: ['Tom Cruise', 'Philip Seymour Hoffman', 'Ving Rhames', 'Billy Crudup', 'Michelle Monaghan'],
        portada: "https://image.tmdb.org/t/p/original/w61xBgFOfP8Z6uHKIKn1sl1TI8j.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2006-04-25"
    },

    {
        titulo: "Misión Imposible 4: Protocolo fantasma",
        tipo: "Película",
        sinopsis: `El FMI es clausurado cuando está implicado en el atentado del Kremlin, lo que hace que Ethan Hunt y su nuevo equipo se vuelvan rebeldes para limpiar el nombre de su organización.`,
        genero: ['Acción', 'Suspense', 'Aventura'],
        calificacion: 7.1,
        duracion: "133 min",
        elenco: ['Tom Cruise', 'Paula Patton', 'Simon Pegg', 'Jeremy Renner', 'Michael Nyqvist'],
        portada: "https://image.tmdb.org/t/p/original/y0hjsPyieqxcunEcAxb9mrrE09c.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2011-12-07"
    },

    {
        titulo: "Misión Imposible 5: Nación Secreta",
        tipo: "Película",
        sinopsis: `Ethan y su equipo se enfrentan a su misión más imposible hasta el momento cuando tienen que erradicar una organización internacional de delincuentes tan hábil como ellos y comprometida con la destrucción del FMI.`,
        genero: ['Acción', 'Aventura'],
        calificacion: 7.217,
        duracion: "131 min",
        elenco: ['Tom Cruise', 'Jeremy Renner', 'Simon Pegg', 'Rebecca Ferguson', 'Ving Rhames'],
        portada: "https://image.tmdb.org/t/p/original/q5twcJdIx9Swtl7CyzfvgQckWVK.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2015-07-28"
    },

    {
        titulo: "Misión Imposible 6: Repercusión",
        tipo: "Película",
        sinopsis: `Ethan Hunt y su equipo del FMI, junto con algunos aliados conocidos, corren contrarreloj tras una misión que salió mal.`,
        genero: ['Acción', 'Aventura'],
        calificacion: 7.443,
        duracion: "147 min",
        elenco: ['Tom Cruise', 'Henry Cavill', 'Ving Rhames', 'Simon Pegg', 'Rebecca Ferguson'],
        portada: "https://image.tmdb.org/t/p/original/d9UfJwY5jwdS9rB7hhhwYIEu0Vb.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2018-07-25"
    },

    {
        titulo: "Misión: Imposible - Sentencia mortal parte uno",
        tipo: "Película",
        sinopsis: `Ethan Hunt y su equipo del FMI, se embarcan en su misión más peligrosa hasta la fecha: localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta. Enfrentado a un enemigo misterioso y todopoderoso, Ethan se ve obligado a considerar que nada puede anteponerse a su misión, ni siquiera las vidas de aquellos que más le importan.`,
        genero: ['Acción', 'Aventura', 'Suspense'],
        calificacion: 7.518,
        duracion: "164 min",
        elenco: ['Tom Cruise', 'Hayley Atwell', 'Ving Rhames', 'Simon Pegg', 'Rebecca Ferguson'],
        portada: "https://image.tmdb.org/t/p/original/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/500",
        fecha: "2023-07-08"
    },

    {
        titulo: "El asesino",
        tipo: "Película",
        sinopsis: `Tras un fatídico cuasiaccidente, un asesino se enfrenta a sus jefes y a sí mismo en una cacería internacional en busca de venganza que, según él, no es personal.`,
        genero: ['Crimen', 'Suspense'],
        calificacion: 6.58,
        duracion: "119 min",
        elenco: ['Michael Fassbender', 'Tilda Swinton', 'Charles Parnell', 'Arliss Howard', "Kerry O'Malley"],
        portada: "https://image.tmdb.org/t/p/original/wXbAPrZTqJzlqmmRaUh95DJ5Lv1.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/515",
        fecha: "2023-10-25"
    },

    {
        titulo: "Contraataque",
        tipo: "Película",
        sinopsis: `Tras rescatar a dos rehenes y hacerse de un nuevo enemigo, el capitán Guerrero y su escuadrón de élite se enfrentan a la emboscada de un grupo criminal.`,
        genero: ['Acción', 'Aventura', 'Suspense'],
        calificacion: 8.29,
        duracion: "85 min",
        elenco: ['Luis Alberti', 'Noé Hernández', 'Leonardo Alonso', 'Luis Curiel', 'Guillermo Nava'],
        portada: "https://image.tmdb.org/t/p/original/kxnFdLJhi37ZVFDCL1ka0yeQVU5.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/518",
        fecha: "2025-02-27"
    },

    {
        titulo: "Demolición",
        tipo: "Película",
        sinopsis: `Davis Mitchell es un exitoso ejecutivo que sufre una grave desconexión emocional tras la repentina y trágica muerte de su mujer en un accidente de coche. Aunque su suegro intenta por todos los medios que se recupere, continúa bloqueado y se dedica a desmontar compulsivamente toda clase de objetos. Gracias a la ayuda de Karen y de su hijo, a los que acaba de conocer, Davis empieza a reconstruir su vida.`,
        genero: ['Comedia', 'Drama'],
        calificacion: 6.832,
        duracion: "101 min",
        elenco: ['Jake Gyllenhaal', 'Naomi Watts', 'Chris Cooper', 'Judah Lewis', 'C.J. Wilson'],
        portada: "https://image.tmdb.org/t/p/original/vGAQasaiocRmXkabQuvM2o1kjBB.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/532",
        fecha: "2016-04-06"
    },

    {
        titulo: "Balto: La leyenda del perro esquimal",
        tipo: "Película",
        sinopsis: `Balto, un perro lobo siberiano, mezcla de husky y lobo, se siente confundido en cuanto a sus orígenes y está marginado en Alaska, excepto por sus verdaderos amigos. Un día, se extiende una epidemia de difteria entre los niños de Nome, pero una violenta tormenta de nieve bloquea todas las rutas de transporte y la obtención de las medicinas necesarias se hace imposible... a menos que un grupo de perros pueda cruzar mil kilómetros tirando de un trineo a través de la atroz tormenta ártica y volver con la antitoxina. Y sólo Balto puede rescatar a los perros y salvar a los niños.`,
        genero: ['Familia', 'Animación', 'Aventura'],
        calificacion: 7.3,
        duracion: "78 min",
        elenco: ['Kevin Bacon', 'Bob Hoskins', 'Bridget Fonda', 'Jim Cummings', 'Phil Collins'],
        portada: "https://image.tmdb.org/t/p/original/wAZ7dMCNWDxylwtz70J1WvEuXFt.jpg",
        enlaceTelegram: "https://t.me/c/2990770379/540",
        fecha: "1995-12-22"
    },
];

document.addEventListener("DOMContentLoaded", () => {
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
        peliculasSeccion = [...catalogoPeliculas].slice(-8).reverse();
      } else {
        const key = seccion.toLowerCase();

        if (key === "suspenso") {
          // usar aliases para buscar tanto "Suspenso" como "Suspense"
          const aliases = generoAliases["suspenso"];
          peliculasSeccion = catalogoPeliculas
            .filter(p => p.genero.some(g => aliases.includes(g.toLowerCase())))
            .slice(-8)
            .reverse();
        } else {
          // búsqueda case-insensitive exacta en el array de géneros
          peliculasSeccion = catalogoPeliculas
            .filter(p => p.genero.some(g => g.toLowerCase() === key))
            .slice(-8)
            .reverse();
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
});

// === PÁGINA DE GÉNERO ===
document.addEventListener("DOMContentLoaded", () => {
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
      .slice()      // copia del array
      .reverse();   // invertir: últimas agregadas primero

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
      contenedor.appendChild(card);
    });
  }
});

// === FUNCIONALIDAD DE BOTONES DE MENÚ (Inicio / Series / Películas) ===
document.addEventListener("DOMContentLoaded", () => {
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

    // Filtrar según tipo ("Serie" o "Película") y ordenar descendente por fecha
    const elementos = catalogoPeliculas
      .filter(item => item.tipo === tipo)
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

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
});

// === BUSCADOR EMERGENTE ===
document.addEventListener("DOMContentLoaded", () => {
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
    const coincidencias = catalogoPeliculas.filter(p =>
      p.titulo.toLowerCase().includes(texto)
    );

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
      card.addEventListener("click", () => {
        console.log(`Seleccionaste: ${pelicula.titulo}`);
        // Aquí podrías redirigir a su página o abrir modal
        // window.location.href = pelicula.enlaceTelegram;
      });
      resultados.appendChild(card);
    });
  });
});


// === CLICK GLOBAL EN TARJETAS ===
document.addEventListener("click", e => {
  const card = e.target.closest(".tarjeta");
  if (!card) return; // si no se hizo clic sobre una tarjeta, salir

  // Intentar obtener la info del dataset o buscar por título
  let pelicula;
  if (card.dataset.info) {
    pelicula = JSON.parse(card.dataset.info);
  } else {
    // fallback: buscar por el título en el texto de la tarjeta
    const titulo = card.querySelector("h3")?.textContent?.trim();
    pelicula = catalogoPeliculas.find(p => p.titulo === titulo);
  }

  if (pelicula && pelicula.enlaceTelegram) {
    window.open(pelicula.enlaceTelegram, "_blank"); // abrir en nueva pestaña
  }
});


// === BOTONES DE REPRODUCIR DEL HERO ===
document.addEventListener("DOMContentLoaded", () => {
  const botonesHero = document.querySelectorAll(".hero-slide .hero-btn");

  // Define los enlaces personalizados para cada slide (en el mismo orden que aparecen en el HTML)
  const enlacesHero = [
    "https://t.me/c/2990770379/415", // Superman
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
