/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{components,layouts,icons,pages}/**/*.astro"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        cursor: "cursor ease 1s infinite",
      },
      keyframes: {
        cursor: {
          "0%": {
            opacity: 1,
          },
          "49%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
          "99%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
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
  plugins: [require("tailwindcss-radix-colors")],
};
