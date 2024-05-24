import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
  },
  presets: [presetUno(), presetIcons()],
});
