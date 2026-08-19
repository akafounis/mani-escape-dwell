import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env["BASE_URL"] || "/",
  },
  nitro: {
    preset: "github-pages",
    output: {
      dir: ".output",
      publicDir: ".output/public",
    },
  },
});
