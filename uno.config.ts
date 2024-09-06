import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "ui-sans-serif", "system-ui"],
    },
  },
  presets: [presetUno(), presetIcons()],
});
