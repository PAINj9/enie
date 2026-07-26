import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { TRIVIA, TRIVIA_SECTION } from "../data/content";
import { usePrefersReducedMotion } from "../lib/hooks";
import { EASE, Reveal, Section, SectionHead } from "../components/ui/primitives";

const AUTOPLAY_MS = 7000;

export default function Trivia() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  const go = useCallback((direction: 1 | -1) => {
    setIndex((i) => (i + direction + TRIVIA.length) % TRIVIA.length);
  }, []);

  // Autoplay pauses on hover and focus so nobody loses the card mid-sentence.
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced, go, index]);

  const card = TRIVIA[index];

  return (
    <Section id="curiosidades" className="border-t border-bone/10">
      <SectionHead label={TRIVIA_SECTION.label} title={TRIVIA_SECTION.title} />

      <div
        className="mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Reveal>
          {/* min-height, not height: a card that jumps around between slides
              feels cheap, but a hard height would clip the longest card on a
              narrow phone — and clipped text is worse than a small jump. */}
          <div
            className="relative flex min-h-[380px] flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-bone/15 bg-ink-soft p-7 sm:min-h-[300px] sm:p-10"
            aria-roledescription="carrusel"
            aria-label={TRIVIA_SECTION.title}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-16 font-display text-[14rem] leading-none text-bone/[0.04] sm:text-[18rem]"
            >
              Ñ
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="relative"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
                  {String(index + 1).padStart(2, "0")} / {String(TRIVIA.length).padStart(2, "0")}
                </span>
                <h3 className="mt-4 max-w-xl font-display text-[clamp(1.6rem,3.6vw,2.4rem)] leading-tight">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-bone/65">
                  {card.body}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="relative flex items-center justify-between gap-4">
              {/* Progress bar — restarts on every index change */}
              <div className="h-px flex-1 bg-bone/15">
                {!reduced && !paused && (
                  <motion.div
                    key={index}
                    className="h-px bg-lime"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  />
                )}
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={TRIVIA_SECTION.prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-lime hover:text-lime"
                >
                  <ArrowLeft size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={TRIVIA_SECTION.next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone transition-colors hover:border-lime hover:text-lime"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The visible dot is 8px, but the hit area is 44px tall — thumbs
            need room even when the indicator is small. */}
        <div className="mt-2 flex flex-wrap">
          {TRIVIA.map((t, i) => (
            <button
              key={t.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver curiosidad ${i + 1}: ${t.title}`}
              aria-pressed={i === index}
              className="group flex h-11 items-center px-1.5"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-lime" : "w-2 bg-bone/40 group-hover:bg-bone/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
