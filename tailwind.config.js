/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' // Include all Vue components inside the 'src' directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a6ff00',
        body: '#666',
        dark1: '#101010',
        dark2: '#080305'
      }
    },
    fontFamily: {
      sans: ['Urbanist Variable', ...defaultTheme.fontFamily.sans],
      'source-pro': ['Source Code Pro Variable', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif']
    },
    backgroundImage:{
      'gradient-1':'linear-gradient(102.22deg, #FF007B 3.4%, #00BFBF 30.93%, #FF6600 57.01%, #959370 76.82%, #A6FF00 100%)'
    }
  },
  plugins: []
}
