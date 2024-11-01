/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "375px",
        xs: "425px",
      },
      colors: {
        "primary-green": "#12E39C",
        "primary-text": "#4C4C4C",
        "primary-text-100": "#333333",
        "gray-100": "#BBBBBB",
        "gray-200": "#202020",
        "gray-300": "#4D4D4D",
        "gray-400": "#3C3C3C",
        "white-200": "#F7F7F7"
      },
    },
  },
  plugins: [],
}
