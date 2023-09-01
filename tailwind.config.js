/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        BrightRed: 'hsl(12, 88%, 59%)',
        DarkBlue: 'hsl(228, 39%, 23%)',
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VeryPaleRed: 'hsl(13, 100%, 96%)',
        VaryLightGray: 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        sans: '"Be Vietnam Pro"',
        serif: 'sans-serif'
      },
      backgroundImage: {
        'bg-pattern': "url('./src/assets/images/bg-tablet-pattern.svg')",
        'bg-illustration': "url('./src/assets/images/illustration-intro.svg')",
        'bg-simplify-mobile': "url('./src/assets/images/bg-simplify-section-mobile.svg')",
        'bg-simplify-desktop': "url('./src/assets/images/bg-simplify-section-desktop.svg')"
      }
    }
  },
  plugins: []
}
