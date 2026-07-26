/**
 * Single source of truth for every piece of text on the site.
 * Components never hardcode copy — they read from here.
 */

/** Title, description and canonical URL live in index.html — social scrapers
 *  don't run JavaScript, so they can't come from here. */
export const SITE = {
  name: "ENIE",
  tagline: "The home of Ñ",
  slogan: "One click. One Ñ.",
} as const;

/* ── Hero ─────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: "La letra más defendida del alfabeto",
  title: "¿Necesitás una Ñ?",
  subtitle:
    "El camino más rápido a la Ñ. Un clic, al portapapeles, y seguís con tu vida.",
  primary: "Copiar Ñ",
  secondary: "Copiar ñ",
  hint: "También podés apretar la barra espaciadora",
} as const;

/** Rotating success messages. The first one is the default. */
export const COPY_MESSAGES = [
  "¡Ñ copiada!",
  "Una Ñ más rescatada.",
  "Nadie va a escribir «Espana» hoy.",
  "Ñ en el portapapeles. De nada.",
  "Andá, pegala en algún lado.",
  "Servida como el primer día: 1250 d. C.",
] as const;

/* ── Quick characters ─────────────────────────────────────────────── */

export type QuickChar = { char: string; name: string };

export const QUICK_CHARS: QuickChar[] = [
  { char: "Ñ", name: "eñe mayúscula" },
  { char: "ñ", name: "eñe minúscula" },
  { char: "Á", name: "a con acento" },
  { char: "É", name: "e con acento" },
  { char: "Í", name: "i con acento" },
  { char: "Ó", name: "o con acento" },
  { char: "Ú", name: "u con acento" },
  { char: "Ü", name: "u con diéresis" },
  { char: "¿", name: "apertura de interrogación" },
  { char: "¡", name: "apertura de exclamación" },
];

export const CHARS_SECTION = {
  label: "Bonus track",
  title: "Y todo lo demás que tu teclado se olvidó",
  note: "Un clic y está copiado. Mantené apretado para copiar varios seguidos... mentira, con un clic alcanza.",
} as const;

/* ── Stats ────────────────────────────────────────────────────────── */

export const STATS_SECTION = {
  label: "Números",
  title: "El estado de la Ñ hoy",
  disclaimer:
    "Estimados con mucho cariño y cero rigor científico. Tu contador, en cambio, es completamente real y vive en tu navegador.",
} as const;

export type StatDef = {
  id: string;
  label: string;
  /** Base value at midnight, before the day's simulated growth. */
  base: number;
  /** How much it grows over a full day. */
  perDay: number;
  suffix?: string;
};

export const SIMULATED_STATS: StatDef[] = [
  { id: "copies", label: "Ñ copiadas hoy", base: 0, perDay: 18400 },
  {
    id: "espana",
    label: "Personas salvadas de escribir «Espana»",
    base: 0,
    perDay: 4200,
  },
  {
    id: "ano",
    label: "Veces que alguien escribió «Ano» queriendo decir «Año»",
    base: 0,
    perDay: 1370,
  },
];

export const TOP_COUNTRIES = [
  "México",
  "España",
  "Argentina",
  "Colombia",
  "Filipinas",
  "Estados Unidos",
  "Perú",
  "Chile",
] as const;

export const PERSONAL_STAT_LABEL = "Ñ que copiaste vos";

/* ── Word of the day ──────────────────────────────────────────────── */

export type Word = {
  word: string;
  meaning: string;
  pronunciation: string;
  curiosity: string;
};

export const WORDS: Word[] = [
  {
    word: "Año",
    meaning: "Período de doce meses, o una vuelta completa de la Tierra al Sol.",
    pronunciation: "/ˈa.ɲo/ · A-ño",
    curiosity:
      "La palabra que mejor demuestra para qué sirve la Ñ: sin ella, dice algo muy distinto.",
  },
  {
    word: "Añoranza",
    meaning: "Pena por la ausencia de algo o alguien querido.",
    pronunciation: "/a.ɲoˈɾan.θa/ · a-ño-RAN-za",
    curiosity:
      "Llegó al castellano desde el catalán «enyorança», y esa a su vez del latín «ignorare»: extrañás lo que ya no sabés dónde está.",
  },
  {
    word: "Mañana",
    meaning:
      "El día siguiente. También la primera parte del día. Y, a veces, «nunca».",
    pronunciation: "/maˈɲa.na/ · ma-ÑA-na",
    curiosity:
      "Tiene dos Ñ... no, tiene una sola, pero la usás dos veces al hablar de postergar algo.",
  },
  {
    word: "Sueño",
    meaning: "Lo que pasa mientras dormís, o lo que querés que pase despierto.",
    pronunciation: "/ˈswe.ɲo/ · SUE-ño",
    curiosity:
      "El castellano usa la misma palabra para «dream» y «sleep». El inglés necesita dos; nosotros resolvimos con una Ñ.",
  },
  {
    word: "Compañero",
    meaning:
      "Quien te acompaña. Del latín «cum panis»: alguien con quien compartís el pan.",
    pronunciation: "/kom.paˈɲe.ɾo/ · com-pa-ÑE-ro",
    curiosity:
      "La etimología es literal: compañía era, originalmente, comer del mismo pan.",
  },
  {
    word: "Pequeño",
    meaning: "De tamaño reducido.",
    pronunciation: "/peˈke.ɲo/ · pe-QUE-ño",
    curiosity:
      "Una de esas palabras que el autocorrector convierte en «pequeno» y arruina el mensaje entero.",
  },
  {
    word: "Señal",
    meaning: "Marca o indicio que sirve para advertir, avisar o recordar algo.",
    pronunciation: "/seˈɲal/ · se-ÑAL",
    curiosity:
      "La virgulilla de la Ñ es, ella misma, una señal: avisa que ahí antes había dos N.",
  },
  {
    word: "Cariño",
    meaning: "Afecto o inclinación hacia alguien o algo.",
    pronunciation: "/kaˈɾi.ɲo/ · ca-RI-ño",
    curiosity:
      "Casi imposible de traducir con precisión: está entre «affection», «fondness» y «love», y no es ninguna de las tres.",
  },
  {
    word: "Otoño",
    meaning: "La estación entre el verano y el invierno.",
    pronunciation: "/oˈto.ɲo/ · o-TO-ño",
    curiosity:
      "Del latín «autumnus». Esa «mn» latina es exactamente el tipo de grupo consonántico que terminó colapsando en Ñ.",
  },
  {
    word: "Muñeca",
    meaning: "Juguete con forma de persona. También la articulación de la mano.",
    pronunciation: "/muˈɲe.ka/ · mu-ÑE-ca",
    curiosity:
      "Dos significados sin relación evidente, y los dos dependen de la misma Ñ.",
  },
  {
    word: "Español",
    meaning: "El idioma. Y también quien nació en España.",
    pronunciation: "/es.paˈɲol/ · es-pa-ÑOL",
    curiosity:
      "El nombre del idioma lleva la letra que ningún otro idioma tiene igual. No es casualidad que sea el símbolo.",
  },
  {
    word: "Ñoño",
    meaning: "Soso, sin gracia. En algunos países, alguien tímido o mimado.",
    pronunciation: "/ˈɲo.ɲo/ · ÑO-ño",
    curiosity:
      "Dos Ñ en cuatro letras: densidad récord. Casi ninguna palabra del castellano lo logra.",
  },
  {
    word: "Enseñar",
    meaning: "Transmitir conocimiento. También, mostrar algo.",
    pronunciation: "/en.seˈɲaɾ/ · en-se-ÑAR",
    curiosity:
      "Del latín «insignare», marcar con un signo. Enseñar es, etimológicamente, dejar una marca.",
  },
  {
    word: "Puñado",
    meaning: "Lo que cabe en el puño. Por extensión, una cantidad pequeña.",
    pronunciation: "/puˈɲa.ðo/ · pu-ÑA-do",
    curiosity:
      "Es una unidad de medida legítima en cualquier receta de abuela del mundo hispanohablante.",
  },
];

export const WORD_SECTION = {
  label: "Palabra del día",
  meaningLabel: "Significado",
  curiosityLabel: "Dato",
} as const;

/* ── Animal of the day ────────────────────────────────────────────── */

export type Animal = {
  name: string;
  scientific: string;
  emoji: string;
  fact: string;
};

export const ANIMALS: Animal[] = [
  {
    name: "Ñandú",
    scientific: "Rhea americana",
    emoji: "🪶",
    fact: "No vuela, corre. El macho construye el nido, incuba los huevos de varias hembras y cría a los pichones solo.",
  },
  {
    name: "Ñu",
    scientific: "Connochaetes taurinus",
    emoji: "🐃",
    fact: "Protagoniza la migración terrestre más grande del planeta: más de un millón de ñus cruzando el Serengueti cada año.",
  },
  {
    name: "Piraña",
    scientific: "Serrasalmidae",
    emoji: "🐟",
    fact: "Su fama de devoradora está muy exagerada: la mayoría de las especies son omnívoras y se alimentan de restos y semillas.",
  },
  {
    name: "Araña",
    scientific: "Araneae",
    emoji: "🕷️",
    fact: "No es un insecto: tiene ocho patas y dos segmentos corporales. Hay más de 50.000 especies descritas.",
  },
  {
    name: "Cigüeña",
    scientific: "Ciconia ciconia",
    emoji: "🕊️",
    fact: "Prácticamente muda: no canta, se comunica haciendo sonar el pico. Se llama crotoreo.",
  },
  {
    name: "Musaraña",
    scientific: "Soricidae",
    emoji: "🐭",
    fact: "Entre los mamíferos más pequeños que existen. Su metabolismo es tan rápido que debe comer casi sin parar para no morir de hambre en horas.",
  },
];

export const ANIMAL_SECTION = {
  label: "Animal del día",
} as const;

/* ── Trivia cards ─────────────────────────────────────────────────── */

export type Trivia = { title: string; body: string };

export const TRIVIA: Trivia[] = [
  {
    title: "Nació para ahorrar pergamino",
    body: "Los copistas medievales escribían mucho y el pergamino costaba caro. Para abreviar la doble «nn» pusieron una raya encima de una sola N. Esa raya se curvó, se quedó, y hoy es una letra.",
  },
  {
    title: "Tiene más de ocho siglos",
    body: "La abreviatura ya aparece en manuscritos castellanos de la Edad Media. La Ñ es más vieja que casi cualquier país donde hoy se usa.",
  },
  {
    title: "Es una letra, no una N adornada",
    body: "Ocupa el puesto 15 del alfabeto español, entre la N y la O, con entrada propia en el diccionario. No es una variante: es otra letra.",
  },
  {
    title: "La raya tiene nombre",
    body: "Se llama virgulilla. Del latín «virgula», varita. Es el mismo signo que corona la ã y la õ del portugués.",
  },
  {
    title: "Cada idioma la resolvió a su manera",
    body: "El mismo sonido se escribe «nh» en portugués, «gn» en francés e italiano, «ny» en catalán y «ń» en polaco. Sólo el castellano lo comprimió en un carácter con sombrero.",
  },
  {
    title: "Hubo que defenderla por decreto",
    body: "A principios de los noventa una propuesta comunitaria de estandarizar teclados amenazaba con dejarla afuera. Hubo protesta pública —García Márquez entre las voces más fuertes— y España la protegió por ley.",
  },
  {
    title: "No es sólo del castellano",
    body: "También la usan el gallego, el euskera, el guaraní, el quechua, el aimara, el mapudungun, el chamorro, el tetun, el wolof y el filipino.",
  },
  {
    title: "Es un logo",
    body: "El Instituto Cervantes, el organismo que difunde el español en el mundo, eligió la Ñ como su símbolo. Una letra convertida en marca.",
  },
];

export const TRIVIA_SECTION = {
  label: "Curiosidades",
  title: "Ocho cosas sobre una sola letra",
  prev: "Curiosidad anterior",
  next: "Curiosidad siguiente",
} as const;

/* ── Where the Ñ lives ────────────────────────────────────────────── */

export const COUNTRIES = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "España",
  "Guatemala",
  "Guinea Ecuatorial",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
] as const;

export const OTHER_LANGUAGES = [
  "Gallego",
  "Euskera",
  "Asturiano",
  "Guaraní",
  "Quechua",
  "Aimara",
  "Mapudungun",
  "Chamorro",
  "Tetun",
  "Filipino",
  "Wolof",
  "Zapoteco",
] as const;

export const MAP_SECTION = {
  label: "Geografía",
  title: "¿Dónde vive la Ñ?",
  body: "El español es idioma oficial o cooficial en veinte países soberanos, más Puerto Rico. En todos ellos la Ñ no es un adorno: es la diferencia entre decir una cosa y decir otra.",
  countriesLabel: "Español oficial o cooficial",
  extraNote: "Y Puerto Rico, donde también es cooficial.",
  languagesLabel: "Otros idiomas que también usan la Ñ",
  languagesBody:
    "La letra se exportó. Cuando el castellano se cruzó con otras lenguas, muchas adoptaron el carácter para escribir el sonido que ya tenían.",
} as const;

/* ── Minimal pairs ────────────────────────────────────────────────── */

export type Pair = {
  withN: string;
  withoutN: string;
  meaningWith: string;
  meaningWithout: string;
  note: string;
};

export const PAIRS: Pair[] = [
  {
    withN: "Año",
    withoutN: "Ano",
    meaningWith: "Doce meses.",
    meaningWithout: "Orificio del final del tubo digestivo.",
    note: "El caso más famoso, y el motivo por el que «Feliz ano nuevo» arruinó más de un mensaje de fin de año.",
  },
  {
    withN: "Campaña",
    withoutN: "Campana",
    meaningWith: "Conjunto de acciones con un objetivo.",
    meaningWithout: "Objeto de metal que suena al golpearlo.",
    note: "Una se lanza, la otra se toca. Confundirlas cambia bastante el presupuesto.",
  },
  {
    withN: "Moño",
    withoutN: "Mono",
    meaningWith: "Lazo, o el pelo recogido.",
    meaningWithout: "Primate.",
    note: "«Se hizo un moño» y «se hizo un mono» describen mañanas muy distintas.",
  },
  {
    withN: "Cañón",
    withoutN: "Canon",
    meaningWith: "Arma de artillería, o un desfiladero.",
    meaningWithout: "Norma, modelo o conjunto de obras de referencia.",
    note: "El Gran Cañón y el gran canon literario no tienen nada que ver.",
  },
  {
    withN: "Peña",
    withoutN: "Pena",
    meaningWith: "Roca grande, o un grupo de amigos.",
    meaningWithout: "Tristeza, o castigo.",
    note: "Una peña se arma un sábado; una pena te la llevás el domingo.",
  },
];

export const PAIRS_SECTION = {
  label: "Lingüística aplicada",
  title: "Lo que te ahorra la Ñ",
  body: "No es una cuestión estética. Estas son palabras distintas, y la única diferencia es la virgulilla.",
  withLabel: "Con Ñ",
  withoutLabel: "Sin Ñ",
} as const;

/* ── Footer ───────────────────────────────────────────────────────── */

export const FOOTER = {
  title: "¿Te salvó esta Ñ?",
  body: "ENIE es gratis, no tiene anuncios, no te pide un mail y no guarda nada tuyo fuera de tu propio navegador. Si te sacó de un apuro, podés invitarme un café.",
  coffee: "Invitame un café",
  coffeeNote: "Link de donaciones pendiente de configurar.",
  builtBy: "Hecho con una sola Ñ de más.",
  legal: "Proyecto concepto. Sin cookies, sin tracking, sin servidor.",
} as const;
