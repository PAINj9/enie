/**
 * Everything that changes "once per day" derives from the local date.
 * Same day = same result for everyone, no server needed, no Math.random()
 * flicker on re-render.
 */

/** Days elapsed since the epoch, in the visitor's own timezone. */
export function dayNumber(date = new Date()): number {
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

/** How much of the day has already gone by, from 0 at midnight to 1 at 23:59. */
export function dayProgress(date = new Date()): number {
  const seconds =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  return seconds / 86_400;
}

/**
 * A counter that starts at 0 each midnight and climbs through the day.
 * The per-day jitter keeps consecutive days from looking copy-pasted.
 */
export function simulatedCounter(
  base: number,
  perDay: number,
  salt: number,
  date = new Date(),
): number {
  const jitter = 0.85 + dailyRandom(salt, date) * 0.3;
  // Ease-in-out so the curve looks like human activity, not a straight line:
  // slow overnight, steep during the day.
  const p = dayProgress(date);
  const shaped = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
  return Math.floor(base + perDay * jitter * shaped);
}

export function formatNumber(value: number, locale = "es-AR"): string {
  return new Intl.NumberFormat(locale).format(value);
}

export function formatDate(date = new Date(), locale = "es-AR"): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}
