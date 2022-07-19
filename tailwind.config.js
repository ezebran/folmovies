const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#682d89',
        secondary: '#75b9a9'
      },
      padding: {
        'space': '0 5%',
      }
    },
    fontFamily: {
      'body': ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.7xl'), color: 'rgb(250 250 250);' },
        'h2': { fontSize: theme('fontSize.6xl'), color:'rgb(250 250 250);' },
        'h3': { fontSize: theme('fontSize.5xl'), color:'rgb(250 250 250);' },
        'h4': { fontSize: theme('fontSize.4xl'), color:'rgb(250 250 250);' },
        'h5': { fontSize: theme('fontSize.3xl'), color:'rgb(250 250 250);' },
        'h6': { fontSize: '0.8rem', color:'rgb(250 250 250);' },
        'p': { fontSize: '1em', color:'rgb(250 250 250);'}
      })
    })
  ],
}