import { useEffect } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Toast from "./components/Toast";
import Characters from "./sections/Characters";
import DailyDuo from "./sections/DailyDuo";
import Hero from "./sections/Hero";
import Pairs from "./sections/Pairs";
import Stats from "./sections/Stats";
import Trivia from "./sections/Trivia";
import WhereItLives from "./sections/WhereItLives";
import { useCopy } from "./lib/copy-context";

/** The lowercase ñ is what people actually need mid-sentence. */
const SHORTCUT_CHAR = "ñ";

/**
 * Spacebar copies the ñ — but only while the hero is on screen. Past that,
 * space goes back to scrolling the page, which is what everyone expects.
 *
 * Also guarded to the document body: if a button already has focus the
 * browser's own "space activates the button" behaviour should win, and typing
 * in a field must never be hijacked.
 */
function useSpacebarShortcut() {
  const { copy } = useCopy();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && target !== document.body) return;
      if (window.scrollY > window.innerHeight * 0.6) return;
      event.preventDefault();
      copy(SHORTCUT_CHAR);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [copy]);
}

export default function App() {
  useSpacebarShortcut();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2.5 focus:text-ink"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Characters />
        <Stats />
        <DailyDuo />
        <Trivia />
        <WhereItLives />
        <Pairs />
      </main>

      <Footer />
      <Toast />
    </>
  );
}
