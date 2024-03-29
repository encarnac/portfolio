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
        mono: [
          "Roboto Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      borderRadius: {
        "custom-1": "66% 34% 70% 30% / 30% 68% 32% 70% ",
        "custom-2": "63% 37% 51% 49% / 50% 52% 48% 50%    ",
        "custom-3": "41% 59% 47% 53% / 35% 45% 55% 65%  ",
        "custom-4": "50% 50% 36% 64% / 29% 52% 48% 71% ",
      },
      colors: {
        // ...
      },
    },
  },
  plugins: [],
};
