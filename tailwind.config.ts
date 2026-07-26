import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base + tinta + UN acento. Nada más.
        ink: "#0E0E0F",
        "ink-soft": "#17171A",
        "ink-line": "#26262B",
        bone: "#F4F1EA",
        lime: "#C8FF3D",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid scale — no breakpoint juggling for type.
        // Sized for Fraunces, which is noticeably wider and heavier than a
        // neutral serif: the same rem value reads about 20% bigger.
        hero: ["clamp(2.2rem, 7vw, 5.2rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        section: ["clamp(1.8rem, 4vw, 3rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        big: ["clamp(2.2rem, 5vw, 3.8rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
