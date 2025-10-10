import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Todo-List/",  // ⚡ THIS IS THE KEY
  plugins: [react()],
});
