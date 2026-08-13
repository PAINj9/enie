import { useCallback, useEffect, useRef, useState } from "react";

/**
 * localStorage-backed state. The try/catch is not paranoia: in private mode
 * some browsers throw on read AND on write, which would crash the render.
 */
export function usePersistent<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode — losing the counter is acceptable, crashing is not */
    }
  }, [key, value]);

  return [value, setValue] as const;
}

/**
 * Clipboard write with a fallback. navigator.clipboard needs a secure context
 * (https or localhost); on plain http it is simply undefined, so the old
 * textarea + execCommand trick still earns its keep.
 */
export async function writeToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path */
  }

  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    area.style.pointerEvents = "none";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

/** True when the visitor asked the OS to calm animations down. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Runs a callback and auto-resets a flag after a delay. Cleans up on unmount. */
export function useFlash(duration = 1800) {
  const [active, setActive] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const flash = useCallback(() => {
    setActive(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(false), duration);
  }, [duration]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return [active, flash] as const;
}
