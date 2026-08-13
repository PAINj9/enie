/**
 * Everything that changes "once per day" derives from the local date.
 * Same day = same result for everyone, no server needed, no Math.random()
 * flicker between renders.
 */

/** Days elapsed since the epoch, in the visitor's own timezone. */
function dayNumber(date = new Date()): number {
  const local = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.floor(local.getTime() / 86_400_000);
}

/** Deterministic PRNG. Same seed in, same sequence out. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** One pseudo-random number in [0,1) per (day, salt) combination. */
export function dailyRandom(salt: number, date = new Date()): number {
  return mulberry32(dayNumber(date) * 2654435761 + salt)();
}

/** Picks a stable item from a list for the current day. */
export function pickOfTheDay<T>(list: readonly T[], salt = 0, date = new Date()): T {
  const index = (dayNumber(date) + salt) % list.length;
  return list[index];
}

export function formatDate(date = new Date(), locale = "es-AR"): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}
