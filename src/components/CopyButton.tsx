import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useCopy } from "../lib/copy-context";
import { useFlash } from "../lib/hooks";
import EnieBurst from "./EnieBurst";

type Props = {
  char: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * The one button that matters. Keeps its own "just copied" flash so two
 * buttons on screen don't both light up when only one was pressed.
 */
export default function CopyButton({
  char,
  label,
  variant = "primary",
  className = "",
}: Props) {
  const { copy } = useCopy();
  const [flashed, flash] = useFlash(1500);
  // Monotonic counter used to re-key the particle burst on every press.
  const [bursts, setBursts] = useState(0);

  const isPrimary = variant === "primary";

  const handleClick = () => {
    copy(char);
    flash();
    setBursts((n) => n + 1);
  };

  const base =
    "relative inline-flex items-center justify-center gap-3 rounded-full font-medium transition-colors duration-300 focus-visible:outline-none";
  const skin = isPrimary
    ? "bg-lime text-ink hover:bg-bone px-9 py-5 text-lg sm:text-xl w-full sm:w-auto"
    : "border border-bone/25 text-bone hover:border-lime hover:text-lime px-7 py-4 text-base w-full sm:w-auto";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={`${label} al portapapeles`}
      className={`${base} ${skin} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {isPrimary && <EnieBurst trigger={bursts} char={char} />}

      <span className="relative flex h-6 w-6 items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          {flashed ? (
            <motion.span
              key="check"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              <Check size={isPrimary ? 22 : 18} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute"
            >
              <Copy size={isPrimary ? 20 : 17} strokeWidth={2} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      <span>{label}</span>
    </motion.button>
  );
}
