/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgbluer: "rgba(255, 255, 255, 0.144)" 
      },
    },
  },
  plugins: [],
}
