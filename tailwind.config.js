/** @type {import('tailwindcss').Config} */
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
      montserrat: ['Montserrat', 'sans-serif'],
      urban: ['Urbanist', 'sans-serif']
    }
  },
  plugins: []
}
