/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './web/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#F1F1F1', 
        'yellow': '#FAC70C',
      },
      borderRadius: {
        'customBorderRadius': '0.75rem'
      },
      fontFamily: {
        custom: ['Bricolage Grotesque', 'sans-serif'],
      },
      boxShadow: {
        shadowcustom: '4px 3px 0px 2px #FAC70C',
        shadowbutton: '0px 2px 0px 0px black'
      },
    },
  },
  plugins: [],
}

