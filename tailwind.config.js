/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobilesm: "320px",
      mobilemd: "375px",
      mobilelg: "420px",
      tablet: "768px",
      laptop: "1024px",
      laptoplg: "1440px",
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ff6454",
      },
      backgroundImage: {
        card: "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
};
