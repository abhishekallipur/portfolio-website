/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./contact.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "mono-black": "#000000",
        "mono-dark": "#1A1A1A",
        "mono-medium": "#333333",
        "mono-light": "#A1A1A1",
        "mono-offwhite": "#EFEFEF",
        "terminal-border": "#333333",
      },
      fontFamily: {
        display: ["Space Grotesk", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
