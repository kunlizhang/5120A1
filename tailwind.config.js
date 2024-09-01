/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        'warning-orange': '#FFB956',
        'sun-yellow': '#FDD020',
        'low-blue': '#38D4FF',
        'hot-orange': '#FF9326',
        'soft-blue': 'rgba(176, 240, 254, 0.75)',
      }
    },
  },
  plugins: [],
}

