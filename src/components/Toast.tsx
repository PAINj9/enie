import { AnimatePresence, motion } from "framer-motion";
import { useCopy } from "../lib/copy-context";
import { EASE } from "./ui/primitives";

/**
 * Fixed confirmation pill. aria-live="polite" so screen readers announce the
 * copy without stealing focus — the whole interaction is one click, and it
 * should stay that way.
 */
export default function Toast() {
  const { toast } = useCopy();

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-5"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.34, ease: EASE }}
            className={`flex max-w-[92vw] items-center gap-3 rounded-full border px-5 py-3 backdrop-blur-md ${
              toast.ok
                ? "border-lime/40 bg-ink/90 text-bone"
                : "border-bone/25 bg-ink/95 text-bone"
            }`}
          >
            {toast.ok && (
              <span className="font-display text-2xl leading-none text-lime">
                {toast.char}
              </span>
            )}
            <span className="text-sm sm:text-[15px]">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
