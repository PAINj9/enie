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
  action: "Copiar",
  // The lowercase ñ is the primary button: it's the one people need in the
  // middle of a word. The uppercase sits next to it, one tap away.
  primaryChar: "ñ",
  primaryLabel: "Copiar la eñe minúscula al portapapeles",
  secondaryChar: "Ñ",
  secondaryLabel: "Copiar la eñe mayúscula al portapapeles",
  hint: "O apretá la barra espaciadora para la ñ minúscula",
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

export const DAILY_SECTION = {
  label: "Palabras con Ñ",
} as const;

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
    withN: "Moño",
    withoutN: "Mono",
    meaningWith: "Lazo, o el pelo recogido.",
    meaningWithout: "Primate.",
    note: "«Se hizo un moño» y «se hizo un mono» describen mañanas muy distintas.",
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
  builtBy: "Hecho con una sola Ñ de más.",
  legal: "Proyecto concepto. Sin cookies, sin tracking, sin servidor.",
} as const;
