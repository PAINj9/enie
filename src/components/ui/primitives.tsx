import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Typed as a mutable tuple on purpose: framer-motion's bezier type is
// [number, number, number, number], and `as const` would make it readonly.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Reveal by opacity, never by mask. A masked reveal that fails to trigger
 * leaves the text permanently invisible; this one always ends up visible.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Inverted sections carry the rhythm: light block on a dark site. */
  tone?: "dark" | "light";
};

export function Section({ id, children, className = "", tone = "dark" }: SectionProps) {
  return (
    <section
      id={id}
      className={`${
        tone === "light" ? "bg-bone text-ink" : "bg-ink text-bone"
      } ${className}`}
    >
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28">{children}</div>
    </section>
  );
}

export function SectionHead({
  label,
  title,
  body,
  tone = "dark",
}: {
  label: string;
  title: string;
  body?: string;
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-ink/60" : "text-bone/60";
  const labelTone = tone === "light" ? "text-ink/65" : "text-bone/50";
  return (
    <Reveal className="max-w-2xl">
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${labelTone}`}
      >
        {label}
      </span>
      <h2 className="mt-4 font-display text-section">{title}</h2>
      {body && <p className={`mt-5 text-[15px] leading-relaxed ${muted} sm:text-base`}>{body}</p>}
    </Reveal>
  );
}

/** Hairline used to separate blocks without adding another colour. */
export function Rule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      className={`h-px w-full ${tone === "light" ? "bg-ink/10" : "bg-bone/10"}`}
      aria-hidden="true"
    />
  );
}
