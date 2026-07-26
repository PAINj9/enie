import { motion } from "framer-motion";
import { useCopy } from "../lib/copy-context";
import { usePrefersReducedMotion } from "../lib/hooks";

const BONE = "#F4F1EA";
const LIME = "#C8FF3D";

/**
 * The hero Ñ.
 *
 * It renders the real Ñ glyph rather than an N plus a hand-placed tilde: the
 * font already knows exactly where the virgulilla goes, at every size, in
 * every browser. Faking it means eyeballing offsets that break the moment the
 * clamp() font-size changes.
 *
 * The personality comes from the reaction instead — squash and stretch, a lime
 * flash, and a glow that pulses on every successful copy.
 */
export default function EnieMark() {
  const { pulse } = useCopy();
  const reduced = usePrefersReducedMotion();
  const reacting = pulse > 0 && !reduced;

  return (
    <div className="relative inline-block leading-none">
      {/* Glow — sits behind the glyph and flares on copy */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 block rounded-full bg-lime/25 blur-[60px]"
        style={{ width: "0.9em", height: "0.9em", x: "-50%", y: "-50%" }}
        key={`glow-${pulse}`}
        animate={reacting ? { scale: [1, 1.7, 1], opacity: [0.7, 1, 0.7] } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      <motion.span
        className="relative z-10 block select-none font-display"
        // Squash on the way in, stretch on the way out: the glyph reacts like
        // it has weight instead of just changing colour.
        key={`mark-${pulse}`}
        initial={false}
        animate={
          reacting
            ? {
                scaleY: [1, 0.9, 1.05, 1],
                scaleX: [1, 1.07, 0.98, 1],
                color: [BONE, LIME, LIME, BONE],
              }
            : { color: BONE }
        }
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.span
          className="block"
          animate={reduced ? undefined : { y: ["0%", "-2.2%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          Ñ
        </motion.span>
      </motion.span>
    </div>
  );
}
