import { PAIRS, PAIRS_SECTION } from "../data/content";
import { Reveal, Section, SectionHead } from "../components/ui/primitives";

/** Renders a word with its eñe picked out in the accent colour. */
function HighlightEnie({ word }: { word: string }) {
  return (
    <>
      {[...word].map((letter, i) =>
        letter === "ñ" || letter === "Ñ" ? (
          <span key={i} className="text-lime">
            {letter}
          </span>
        ) : (
          <span key={i}>{letter}</span>
        ),
      )}
    </>
  );
}

export default function Pairs() {
  return (
    <Section id="pares" className="border-t border-bone/10">
      <SectionHead
        label={PAIRS_SECTION.label}
        title={PAIRS_SECTION.title}
        body={PAIRS_SECTION.body}
      />

      <ul className="mt-12 space-y-3">
        {PAIRS.map((pair, i) => (
          <li key={pair.withN}>
            <Reveal
              delay={i * 0.05}
              className="grid gap-8 rounded-3xl border border-bone/15 bg-ink-soft p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-12"
            >
              {/* Stacked on phones: two words of this size side by side blow
                  past 375px and force a horizontal scroll. */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                    {PAIRS_SECTION.withLabel}
                  </span>
                  <p
                    className="mt-2 font-display leading-none"
                    style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)" }}
                  >
                    <HighlightEnie word={pair.withN} />
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="font-display text-2xl leading-none text-bone/40 sm:text-3xl"
                >
                  ≠
                </span>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                    {PAIRS_SECTION.withoutLabel}
                  </span>
                  <p
                    className="mt-2 font-display leading-none text-bone/40"
                    style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)" }}
                  >
                    {pair.withoutN}
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-bone/10 pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-[14px] leading-relaxed text-bone/75">
                  <strong className="font-medium text-bone">{pair.withN}:</strong>{" "}
                  {pair.meaningWith}
                </p>
                <p className="text-[14px] leading-relaxed text-bone/50">
                  <strong className="font-medium text-bone/70">{pair.withoutN}:</strong>{" "}
                  {pair.meaningWithout}
                </p>
                <p className="pt-2 text-[13px] leading-relaxed text-bone/60">{pair.note}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
