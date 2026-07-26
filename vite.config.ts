import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      // Split framer-motion out so the first paint doesn't wait on it.
      output: { manualChunks: { motion: ["framer-motion"] } },
    },
  },
});
