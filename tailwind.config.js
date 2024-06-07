const { buildErrorMessage } = require('vite');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './web/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#D9D9D9', 
        'orange': '#FAC70C',
      },
      borderRadius: {
        'customBorderRadius': '3.5rem'
      },
      fontFamily: {
        custom: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

