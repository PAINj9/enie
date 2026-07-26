import { Coffee } from "lucide-react";
import { FOOTER, SITE } from "../data/content";
import { Reveal } from "./ui/primitives";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="max-w-lg font-display text-section">{FOOTER.title}</h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bone/60">
              {FOOTER.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-start gap-3">
              {/* Placeholder on purpose: no donation account is wired up yet,
                  and a dead link that pretends to work is worse than none. */}
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-bone/20 px-7 py-4 text-base text-bone/50"
              >
                <Coffee size={18} />
                {FOOTER.coffee}
              </button>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
                {FOOTER.coffeeNote}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-bone/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl leading-none text-lime">Ñ</span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em]">
                {SITE.name}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
                {SITE.tagline} · {SITE.slogan}
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[13px] text-bone/60">{FOOTER.builtBy}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/55">
              {year} · {FOOTER.legal}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
