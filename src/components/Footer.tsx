import { FOOTER, SITE } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
