import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/design-tokens/' : '/',
  resolve: {
    alias: [
      {
        find: /^@asafarim\/design-tokens$/,
        replacement: fileURLToPath(new URL("../src/index.ts", import.meta.url))
      },
      {
        find: /^@asafarim\/design-tokens\/css$/,
        replacement: fileURLToPath(new URL("../css/index.css", import.meta.url))
      }
    ]
  },
  server: {
    port: 3000,
    open: true
  }
});
