import js from "@eslint/js";
import unocss from "@unocss/eslint-config/flat";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import ts from "typescript-eslint";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  ...astro.configs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  ...astro.configs["jsx-a11y-recommended"],
  unocss,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: ["dist", ".astro", "src/env.d.ts"] },
);
