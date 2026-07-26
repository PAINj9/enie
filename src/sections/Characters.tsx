import { CHARS_SECTION } from "../data/content";
import CharGrid from "../components/CharGrid";
import { Reveal, Section, SectionHead } from "../components/ui/primitives";

export default function Characters() {
  return (
    <Section id="caracteres" className="border-t border-bone/10">
      <SectionHead label={CHARS_SECTION.label} title={CHARS_SECTION.title} />

      <Reveal delay={0.1} className="mt-12">
        <CharGrid />
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-bone/60">
          {CHARS_SECTION.note}
        </p>
      </Reveal>
    </Section>
  );
}
