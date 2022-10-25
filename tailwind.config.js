/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{components,layouts,pages}/**/*.{astro,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      keyframes: {
        menu: {
          from: {
            transform: "translateY(-100vh)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        avatarring: {
          from: {
            transform: "translateX(-50%) translateY(-50%) scale(1)",
            opacity: 1,
          },
          to: {
            transform: "translateX(-50%) translateY(-50%) scale(1.1)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
