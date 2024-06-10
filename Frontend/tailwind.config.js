/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  purge: {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    safelist: [
      'hover:text-yellow-300', 
      'hover:bg-gray-100',
      'hover:bg-blue-600',
      'hover:text-gray-300 ',
      'hover:shadow-lg',' hover:shadow-gray-900/20'
    ],
  },
};
