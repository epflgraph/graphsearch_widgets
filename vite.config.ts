import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
});
