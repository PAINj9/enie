import { motion } from "framer-motion";
import { COUNTRIES, MAP_SECTION, OTHER_LANGUAGES } from "../data/content";
import { Reveal, Section, SectionHead } from "../components/ui/primitives";

export default function WhereItLives() {
  return (
    <Section id="donde" tone="light">
      <SectionHead
        label={MAP_SECTION.label}
        title={MAP_SECTION.title}
        body={MAP_SECTION.body}
        tone="light"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <Reveal className="flex items-baseline gap-4">
            <span className="font-display text-big text-ink">20</span>
            <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-ink/65">
              {MAP_SECTION.countriesLabel}
            </span>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {COUNTRIES.map((country, i) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.025 }}
                className="rounded-full border border-ink/15 px-4 py-2 text-[13px] text-ink/80"
              >
                {country}
              </motion.span>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65">
              {MAP_SECTION.extraNote}
            </p>
          </Reveal>
        </div>

        <div className="border-t border-ink/10 pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/65">
              {MAP_SECTION.languagesLabel}
            </span>
            <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
              {MAP_SECTION.languagesBody}
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-2">
            {OTHER_LANGUAGES.map((lang, i) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="flex items-center gap-3 border-b border-ink/10 py-3"
              >
                <span aria-hidden="true" className="font-display text-lg text-ink/35">Ñ</span>
                <span className="text-[14px] text-ink/80">{lang}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
