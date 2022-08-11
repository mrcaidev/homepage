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
      keyframes: {
        sidemenu: {
          from: {
            transform: "translateX(300px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
