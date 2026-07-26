import {
  ANIMALS,
  ANIMAL_SECTION,
  WORDS,
  WORD_SECTION,
} from "../data/content";
import { formatDate, pickOfTheDay } from "../lib/daily";
import CopyButton from "../components/CopyButton";
import { Reveal, Rule } from "../components/ui/primitives";

export default function DailyDuo() {
  const word = pickOfTheDay(WORDS, 0);
  const animal = pickOfTheDay(ANIMALS, 2);
  const today = formatDate();

  return (
    <section id="del-dia" className="border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
            Hoy en la Ñ
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            {today}
          </span>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {/* Word of the day — the wide one */}
          <Reveal className="rounded-3xl border border-bone/15 bg-ink-soft p-7 sm:p-9 lg:col-span-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              {WORD_SECTION.label}
            </span>

            <h3
              className="mt-5 break-words font-display leading-[0.95]"
              style={{ fontSize: "clamp(2.6rem, 7.5vw, 5rem)" }}
            >
              {word.word}
            </h3>

            <p className="mt-3 font-mono text-xs tracking-wide text-lime">
              {word.pronunciation}
            </p>

            <div className="mt-8">
              <Rule />
            </div>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                  {WORD_SECTION.meaningLabel}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-bone/80">
                  {word.meaning}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
                  {WORD_SECTION.curiosityLabel}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-bone/60">
                  {word.curiosity}
                </dd>
              </div>
            </dl>

            <div className="mt-8 sm:max-w-xs">
              <CopyButton
                char={word.word}
                label={`Copiar «${word.word}»`}
                variant="secondary"
              />
            </div>
          </Reveal>

          {/* Animal of the day — the narrow one */}
          <Reveal
            delay={0.08}
            className="flex flex-col rounded-3xl border border-bone/15 bg-ink-soft p-7 sm:p-9"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/60">
              {ANIMAL_SECTION.label}
            </span>

            <span className="mt-6 text-5xl" role="img" aria-label={animal.name}>
              {animal.emoji}
            </span>

            <h3
              className="mt-4 break-words font-display leading-[1]"
              style={{ fontSize: "clamp(2.1rem, 5vw, 2.9rem)" }}
            >
              {animal.name}
            </h3>

            <p className="mt-2 font-mono text-[11px] italic tracking-wide text-bone/60">
              {animal.scientific}
            </p>

            <div className="mt-7">
              <Rule />
            </div>

            <p className="mt-6 flex-1 text-[15px] leading-relaxed text-bone/70">
              {animal.fact}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
