import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mrcai.dev",
  integrations: [
    preact(),
    tailwind({ config: { applyBaseStyles: false } }),
    sitemap(),
  ],
});
