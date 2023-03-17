/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Source: ["Source Sans Pro"], oswald:['Oswald'] },
      colors:{
        morado: '#58287F',
        azul : '#89C4E1',
        salmon: '#F5EDCE',
        oscuro: '#1A0000'
      },
      dropShadow: {
        '3xl': '35px 35px 35px rgba(88, 40, 127)'
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};
