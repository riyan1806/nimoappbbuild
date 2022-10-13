/** @type {import('tailwindcss').Config} */
module.exports = {   
  mode: 'jit',
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
}