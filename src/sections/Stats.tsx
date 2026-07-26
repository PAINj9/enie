import { motion } from "framer-motion";
import {
  PERSONAL_STAT_LABEL,
  SIMULATED_STATS,
  STATS_SECTION,
  TOP_COUNTRIES,
} from "../data/content";
import { formatNumber, pickOfTheDay, simulatedCounter } from "../lib/daily";
import { useCopy } from "../lib/copy-context";
import { useTicker } from "../lib/hooks";
import { Reveal, Section, SectionHead } from "../components/ui/primitives";

function StatCard({
  value,
  label,
  accent = false,
  delay = 0,
}: {
  value: string;
  label: string;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-7 ${
        accent ? "border-ink bg-ink text-bone" : "border-ink/12 bg-ink/[0.03] text-ink"
      }`}
    >
      {/* tabular-nums so the live counters don't jiggle every time a digit
          changes width. */}
      <span
        className={`font-display tabular-nums leading-[0.95] ${
          accent ? "text-lime" : "text-ink"
        }`}
        style={{ fontSize: "clamp(2rem, 4.6vw, 2.9rem)" }}
      >
        {value}
      </span>
      <span
        className={`mt-6 text-[13px] leading-snug ${accent ? "text-bone/70" : "text-ink/60"}`}
      >
        {label}
      </span>
    </Reveal>
  );
}

export default function Stats() {
  // Re-render every few seconds so the simulated counters visibly climb.
  useTicker(3000);
  const { count } = useCopy();
  const country = pickOfTheDay(TOP_COUNTRIES, 3);

  return (
    <Section id="numeros" tone="light">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          label={STATS_SECTION.label}
          title={STATS_SECTION.title}
          tone="light"
        />
        <Reveal delay={0.1} className="flex items-center gap-2">
          <motion.span
            className="block h-2 w-2 rounded-full bg-lime ring-1 ring-ink/45"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/65">
            Actualizando
          </span>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SIMULATED_STATS.map((stat, i) => (
          <StatCard
            key={stat.id}
            value={formatNumber(simulatedCounter(stat.base, stat.perDay, i))}
            label={stat.label}
            delay={i * 0.06}
          />
        ))}
        <StatCard
          value={formatNumber(count)}
          label={`${PERSONAL_STAT_LABEL} — este sí es real y vive en tu navegador.`}
          accent
          delay={0.18}
        />
      </div>

      <Reveal
        delay={0.1}
        className="mt-3 flex flex-col justify-between gap-4 rounded-3xl border border-ink/12 bg-ink/[0.03] p-6 sm:flex-row sm:items-center sm:p-7"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/65">
          País con más copias hoy
        </span>
        <span className="font-display text-big text-ink">{country}</span>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-xl text-[13px] leading-relaxed text-ink/65">
          {STATS_SECTION.disclaimer}
        </p>
      </Reveal>
    </Section>
  );
}
