import { defineConfig } from "vite";
import { params } from "@ampt/sdk";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
import { config } from "dotenv";

// Load dotenv config
config();

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    strictPort: true,
    // This proxies all outgoing requests from the app to your live Ampt environment
    proxy: {
      "/api": {
        target: params("AMPT_URL"),
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: "static",
    reportCompressedSize: true,
    rollupOptions: {
      maxParallelFileOps: 10,
    },
  },
  define: {
    "process.env": process.env,
  },
  // Path aliases
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
