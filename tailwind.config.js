/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8A0026",
          dark: "#0D0D10",
          light: "#F5F5F5",
          text: "#EDEDED",
          gray: "#A0A0A0",
        },
      },
    },
  },

  plugins: [],
};
