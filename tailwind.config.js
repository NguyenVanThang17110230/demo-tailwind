/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "485px",
      },
      keyframes: {
        toUp: {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        toUpScale: {
          "0%": { transform: "scale(110%) translate(-10px,10px)" },
          "100%": { transform: "scale(100%) translate(0,0)" },
        },
      },
      animation: {
        toUp: "toUp 0.6s",
        toUpScale: "toUpScale 0.6s",
      },
    },
  },
  plugins: [],
};
