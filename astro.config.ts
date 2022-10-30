import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { injectFrontmatter } from "./src/utils/remark";

// https://astro.build/config
export default defineConfig({
  site: "https://mrcai.dev",
  integrations: [
    preact(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [injectFrontmatter],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
