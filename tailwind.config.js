/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
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
      sans: ["'Urbanist Variable'", ...defaultTheme.fontFamily.sans],
      'source-pro': ["'Source Code Pro Variable'", ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', 'sans-serif'],
      
    }
  },
  plugins: []
}
