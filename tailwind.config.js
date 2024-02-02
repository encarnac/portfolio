export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          '"ui-sans-serif"',
          '"system-ui"',
          '"sans-serif"',
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        "custom-1": "71% 29% 44% 56% / 28% 65% 35% 72% ",
        "custom-2": "29% 71% 32% 68% / 64% 52% 48% 36% ",
      },
      colors: {
        // ...
      },
    },
  },
  plugins: [],
};
