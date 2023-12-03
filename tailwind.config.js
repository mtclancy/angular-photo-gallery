/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Nova Square', 'sans-serif']
      },
      colors: {
        'blue': '#2563EB',
        'purple': '#9333EA',
        'gray-lt': '#F6F6F6',
        'gray-md': '#B2B2B2',
        'gray-dk': '#585858'
      },
      zIndex: {
        'header': '999',
        'modal': '9999',
        'modal-shader': '998',
      }
    },
  },
  plugins: [],
}
