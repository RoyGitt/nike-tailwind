/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
