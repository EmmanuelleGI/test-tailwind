Installation Tailwind (with Vite)
https://tailwindcss.com/docs/guides/vite

cmd : 
yarn install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


tailwind.config.js :
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './web/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

main.css :
@tailwind base;
@tailwind components;
@tailwind utilities;


Catalyst :
https://catalyst.tailwindui.com/docs => download the latest version 

cmd:
yarn add @headlessui/react framer-motion clsx

icon: 
yarn add @heroicons/react






