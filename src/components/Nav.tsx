import { useEffect, useState } from "react";
import { SITE } from "../data/content";
import { useCopy } from "../lib/copy-context";

const LINKS = [
  { href: "#palabras", label: "Palabras" },
  { href: "#pares", label: "Pares" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { copy } = useCopy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled ? "border-b border-bone/10 bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-2.5 text-bone transition-colors hover:text-lime"
        >
          <span className="font-display text-2xl leading-none">Ñ</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em]">
            {SITE.name}
          </span>
        </a>

        {/* Three links fit on a phone now that the menu is shorter. */}
        <ul className="hidden items-center gap-5 sm:flex sm:gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/50 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Always-available copy, so nobody has to scroll back up for it. */}
        <button
          type="button"
          onClick={() => copy("Ñ")}
          aria-label="Copiar Ñ al portapapeles"
          className="flex h-10 items-center gap-2 rounded-full border border-lime/40 px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-lime transition-colors hover:bg-lime hover:text-ink"
        >
          <span className="font-display text-base normal-case tracking-normal">Ñ</span>
          Copiar
        </button>
      </div>
    </nav>
  );
}
