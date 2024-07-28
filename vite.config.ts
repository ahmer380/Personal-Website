import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Personal-Website/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
