/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002A48",
        neutral: "#667479",
        linear: "#FCEED5",
        bluesea: "#00A7E7",
        secondary: "#F1D092",
      },
    },
  },  
  plugins: [],
}

