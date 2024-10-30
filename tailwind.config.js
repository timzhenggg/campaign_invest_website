/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#12E39C",
        "primary-text": "#4C4C4C",
        "primary-text-100": "#333333",
        "gray-100": "#BBBBBB",
        "gray-200": "#202020",
        "gray-300": "#4D4D4D",
      }
    },
  },
  plugins: [],
}
