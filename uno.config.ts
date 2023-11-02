import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
      },
    }),
  ],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "system-ui", "sans-serif"],
    },
  },
});
