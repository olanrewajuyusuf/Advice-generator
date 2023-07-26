/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        "dice": "#52FFA8",
        "text": "#CEE3E9",
        "background": "#1F2632",
        "frame": "#323A49",
        "line": "#4E5D73",
      },
      fontFamily: {
        "manrope": ["'Manrope'", 'sans-serif'],
      },
      fontSize: {
        "size": "28px",
      },
      maxWidth: {
        "max": "1440px",
      }
    },
  },
  plugins: [],
}

