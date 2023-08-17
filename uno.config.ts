import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "system-ui", "sans-serif"],
    },
  },
});
