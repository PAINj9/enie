import { motion } from "framer-motion";
import { QUICK_CHARS } from "../data/content";
import { useCopy } from "../lib/copy-context";
import { useFlash } from "../lib/hooks";

/** One key. Minimum 56px tall so it stays a comfortable tap target on phones. */
function CharKey({ char, name, index }: { char: string; name: string; index: number }) {
  const { copy } = useCopy();
  const [flashed, flash] = useFlash(1100);

  return (
    <motion.button
      type="button"
      onClick={() => {
        copy(char);
        flash();
      }}
      aria-label={`Copiar ${name}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.035 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      className={`group relative flex h-16 items-center justify-center rounded-2xl border font-display text-3xl transition-colors duration-300 sm:h-20 sm:text-4xl ${
        flashed
          ? "border-lime bg-lime text-ink"
          : "border-bone/15 bg-ink-soft text-bone hover:border-lime/60 hover:text-lime"
      }`}
    >
      {char}
      <span className="pointer-events-none absolute -bottom-1 left-1/2 hidden -translate-x-1/2 translate-y-full whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        {flashed ? "copiado" : name}
      </span>
    </motion.button>
  );
}

export default function CharGrid() {
  return (
    <div className="grid grid-cols-5 gap-2.5 sm:gap-3 lg:grid-cols-10">
      {QUICK_CHARS.map((c, i) => (
        <CharKey key={c.char} char={c.char} name={c.name} index={i} />
      ))}
    </div>
  );
}
