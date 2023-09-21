/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        my_flex: "1 0 100%",
      },
      gridAutoColumns: {
        my_cols: "calc(100% / 3)",
      },
      gridAutoRows: {
        my_rows: "minmax(15rem, auto)",
      },
      translate: {
        px70: "-44.6875rem",
        px96: "-96rem",
        px144: "-144rem",
      },
      fontSize: {
        px35: ["2.188rem"],
        px20: ["1.250rem"],
        px30: ["1.875rem"],
        px18: ["1.125rem"],
        px12: ["0.75rem"],
      },
      height: {
        calc: "calc(100vh - 2rem);",
        px245: "15.313rem",
      },
      width: {
        px710: "44.375rem",
        px3400: "212.5rem",
      },
      colors: {
        main_color: "#8467fd",
        back_color: "#ededed",
        border_text_color: "#8a8a8a",
      },
    },
  },
  plugins: [withMT],
};
