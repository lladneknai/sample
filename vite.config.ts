import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { config } from "dotenv";

// Load dotenv config
config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@code",
        replacement: fileURLToPath(
          new URL("./src/features/code", import.meta.url)
        ),
      },
      {
        find: "@global",
        replacement: fileURLToPath(new URL("./src/global", import.meta.url)),
      },
      {
        find: "@features",
        replacement: fileURLToPath(new URL("./src/features", import.meta.url)),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      },
      {
        find: "@theme",
        replacement: fileURLToPath(
          new URL("./src/features/theme", import.meta.url)
        ),
      },
    ],
  },
});
