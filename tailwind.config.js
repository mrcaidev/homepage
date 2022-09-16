/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{components,pages}/**/*.{astro,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};
