import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

export default defineConfig({
  site: "https://mrcai.dev",
  integrations: [unocss({ injectReset: true })],
  redirects: {
    "/blog": "/blog/1",
  },
});
