/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'gt':['gistesy'],
      'open':['Open Sans'],
      'moresugar':['moresugar']
    },
    extend: {
      backgroundImage: {
        'ps':'url(./assests/PSBackground.png)',
      }
    },
  },
  plugins: [],
}

