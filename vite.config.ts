import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
