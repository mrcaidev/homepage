/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      transitionProperty: {
        bg: "background",
      },
    },
  },
  plugins: [],
};
