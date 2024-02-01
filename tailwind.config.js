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
      borderRadius: { "custom-1": "61% 39% 61% 39% / 50% 64% 36% 50% " },
      colors: {
        // ...
      },
    },
  },
  plugins: [],
};
