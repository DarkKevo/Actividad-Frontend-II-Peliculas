/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Source: ["Source Sans Pro"] },
      colors:{
        morado: '#58287F',
        azul : '#89C4E1',
        salmon: '#F5EDCE',
        oscuro: '#1A0000'
      }
    },
  },
  plugins: [],
};
