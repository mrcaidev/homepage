import { defineConfig, presetIcons, presetUno } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "ui-sans-serif", "system-ui"],
    },
  },
  presets: [
    presetUno(),
    presetIcons({ extraProperties: { display: "block" } }),
    presetScrollbar(),
  ],
});
