// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://sasan-soroush.github.io",
  base: "/appstudio-portfolio.git",
  build: {
    assets: "assets",
  },
});
