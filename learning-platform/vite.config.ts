import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/hoc",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "hoc-answer-key": resolve(__dirname, "hoc-answer-key.html"),
      },
    },
  },
});
