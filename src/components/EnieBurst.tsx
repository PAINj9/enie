import { AnimatePresence, motion } from "framer-motion";
import { dailyRandom } from "../lib/daily";
import { usePrefersReducedMotion } from "../lib/hooks";

const PARTICLES = 12;

/**
 * Little Ñ that fly out of the button on a successful copy.
 * Positions come from a deterministic sequence rather than Math.random() so
 * React's strict-mode double render doesn't produce two different bursts.
 */
export default function EnieBurst({
  trigger,
  char = "Ñ",
}: {
  trigger: number;
  char?: string;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced || trigger === 0) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-visible"
      aria-hidden="true"
    >
      <AnimatePresence>
        <div key={trigger} className="absolute left-1/2 top-1/2">
          {Array.from({ length: PARTICLES }).map((_, i) => {
            const angle = (i / PARTICLES) * Math.PI * 2 + trigger * 0.4;
            const spread = 70 + dailyRandom(i + trigger * 31) * 80;
            return (
              <motion.span
                key={i}
                className="absolute block font-display text-lime"
                style={{ fontSize: 20 + (i % 3) * 8 }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.4, rotate: 0 }}
                animate={{
                  x: Math.cos(angle) * spread,
                  y: Math.sin(angle) * spread - 18,
                  opacity: 0,
                  scale: 1,
                  rotate: (i % 2 ? 1 : -1) * 90,
                }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}
