import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO } from "../data/content";
import { useCopy } from "../lib/copy-context";
import CopyButton from "../components/CopyButton";
import EnieMark from "../components/EnieMark";
import { EASE } from "../components/ui/primitives";

export default function Hero() {
  const { count } = useCopy();

  return (
    <header id="top" className="relative overflow-hidden bg-ink">
      {/* Single accent glow behind the mark. The only "colour field" on the site. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18%] h-[42vh] w-[42vh] -translate-x-1/2 rounded-full bg-lime/15 blur-[110px]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-shell flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/60 sm:text-[11px]"
        >
          {HERO.eyebrow}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="mt-6 text-bone"
          style={{ fontSize: "clamp(6.5rem, 25vw, 15rem)" }}
        >
          <EnieMark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="mt-8 font-display text-hero text-bone"
        >
          {HERO.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="mt-5 max-w-md text-[15px] leading-relaxed text-bone/60 sm:text-base"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <CopyButton char="Ñ" label={HERO.primary} />
          <CopyButton char="ñ" label={HERO.secondary} variant="secondary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55"
        >
          {HERO.hint}
        </motion.p>

        {count > 0 && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-lime"
          >
            {count === 1
              ? "Copiaste 1 Ñ. Buen comienzo."
              : `Copiaste ${count} caracteres desde acá.`}
          </motion.p>
        )}

        <motion.a
          href="#caracteres"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55 transition-colors hover:text-lime"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex"
          >
            <ArrowDown size={13} />
          </motion.span>
          Hay más
        </motion.a>
      </div>
    </header>
  );
}
