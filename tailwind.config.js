/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridAutoRows: {
        my_rows: "minmax(15rem, auto)",
      },
      fontSize: {
        rem2_5: ["2.5rem"],
        rem1_5: ["1.5rem"],
        rem1_8: ["1.8rem"],
        rem1_3: ["1.3rem"],
        rem1_2: ["1.2rem"],
      },
      colors: {
        main_color: "#8467fd",
        back_color: "#ededed",
        border_text_color: "#8a8a8a",
      },
    },
  },
  plugins: [],
};
