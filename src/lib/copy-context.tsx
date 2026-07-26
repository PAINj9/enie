import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { COPY_MESSAGES } from "../data/content";
import { usePersistent, writeToClipboard } from "./hooks";

type Toast = {
  /** Bumped on every copy so the same message can re-animate. */
  id: number;
  char: string;
  message: string;
  ok: boolean;
};

type CopyState = {
  /** Total characters this visitor has copied, ever. Real number. */
  count: number;
  /** Increments on every successful copy — components use it to re-trigger animations. */
  pulse: number;
  /** The most recently copied character, or null. */
  lastChar: string | null;
  toast: Toast | null;
  copy: (char: string) => void;
};

const CopyContext = createContext<CopyState | null>(null);

const TOAST_MS = 2200;

const FAILURE_MESSAGE =
  "Tu navegador no me dejó tocar el portapapeles. Copiala a mano, perdón.";

/**
 * The playful messages are written about the Ñ, so they'd read wrong for an Ü.
 * Anything that isn't an eñe gets a neutral confirmation instead.
 */
function successMessage(char: string, nth: number): string {
  const isEnie = char === "Ñ" || char === "ñ";
  if (!isEnie) return `«${char}» copiado.`;
  return COPY_MESSAGES[(nth - 1) % COPY_MESSAGES.length];
}

export function CopyProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = usePersistent<number>("enie:count", 0);
  const [pulse, setPulse] = useState(0);
  const [lastChar, setLastChar] = useState<string | null>(null);
  const [toast, setToast] = useState<Toast | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const seq = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    (char: string) => {
      // Fire and forget: the UI reacts optimistically, then corrects itself
      // if the clipboard write actually failed.
      void writeToClipboard(char).then((ok) => {
        seq.current += 1;
        if (ok) {
          setCount((c) => c + 1);
          setPulse((p) => p + 1);
          setLastChar(char);
        }
        setToast({
          id: seq.current,
          char,
          ok,
          message: ok ? successMessage(char, seq.current) : FAILURE_MESSAGE,
        });
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setToast(null), TOAST_MS);
      });
    },
    [setCount],
  );

  const value = useMemo(
    () => ({ count, pulse, lastChar, toast, copy }),
    [count, pulse, lastChar, toast, copy],
  );

  return <CopyContext.Provider value={value}>{children}</CopyContext.Provider>;
}

export function useCopy(): CopyState {
  const ctx = useContext(CopyContext);
  if (!ctx) throw new Error("useCopy must be used inside <CopyProvider>");
  return ctx;
}
