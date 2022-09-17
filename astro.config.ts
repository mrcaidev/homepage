import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.mrcai.space",
  integrations: [react(), image(), prefetch(), sitemap(), tailwind()],
});
