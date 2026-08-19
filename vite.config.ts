import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env["BASE_URL"] || "/",
  },
  nitro: {
    preset: "static",
    output: {
      dir: ".output",
      publicDir: ".output/public",
    },
  },
});
