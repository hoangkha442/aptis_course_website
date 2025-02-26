/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
      },
      colors: {
        customPurple: '#430486', 
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveUnderline: {
          "0%": { left: "0%" },
          "50%": { left: "50%" },
          "100%": { left: "0%" },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        scroll: 'scroll 20s linear infinite',
        scrollReverse: 'scrollReverse 20s linear infinite',
        moveUnderline: "moveUnderline 8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
}