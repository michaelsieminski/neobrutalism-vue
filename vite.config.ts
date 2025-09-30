import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "NeobrutalisVue",
      formats: ["es", "cjs"],
      fileName: (format) => `neobrutalism-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "reka-ui", "@vueuse/core", "@tanstack/vue-table"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
});
