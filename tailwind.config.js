/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
      },
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}

