/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2699FB',
        secondary: '#D8EDFF',
        linearBg: 'linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0%'
      },
      boxShadow: {
        1: '0px 1px 5px #00000026'
      }
    }
  },
  plugins: []
}
