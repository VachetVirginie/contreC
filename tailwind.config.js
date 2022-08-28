/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7f00ff",
        secondary: "#E92D8B",
        yellow_primary: "#FCD61D",
        yellow_secondary: "#D3A400",
        dark: "#151515",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
