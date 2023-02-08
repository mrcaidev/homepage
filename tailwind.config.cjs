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
        leftslide: "leftslide ease 0.5s backwards",
        rightslide: "rightslide ease 0.5s backwards",
        lift: "lift ease 0.5s backwards",
        pop: "pop ease 0.5s backwards",
        drop: "drop ease 0.5s backwards",
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
        leftslide: {
          from: {
            transform: "translateX(-30px)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        rightslide: {
          from: {
            transform: "translateX(30px)",
            opacity: 0,
          },
          to: {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        lift: {
          from: {
            transform: "translateY(30px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        drop: {
          from: {
            transform: "translateY(-30px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        pop: {
          from: {
            transform: "scale(0.8)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-radix-colors")],
};
