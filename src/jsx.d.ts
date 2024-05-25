// https://ota-meshi.github.io/eslint-plugin-astro/user-guide/#resolving-error-in-jsx-unsafe-return-of-an-any-typed-value

import "astro/astro-jsx";

declare global {
  namespace JSX {
    type Element = HTMLElement;
  }
}
