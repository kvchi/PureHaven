/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 9s infinite",
        'move-left-right': 'moveLeftRight 5s infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: " translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: " translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: " translate(0px,0px) scale(1)",
          },
        },
        moveLeftRight: {  // Add this block
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(20%) translateY(-20px)'},
          '20%': { transform: 'translateX(40%) translateY(20px)'},
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        primary: "#FF9EAA",
        dark: "#005C78",
        secondary: "#F3F7EC",
      }
    },
  },
  plugins: [],
}