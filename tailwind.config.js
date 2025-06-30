/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E6F7FF",
          DEFAULT: "#1890FF",
          dark: "#0050B3"
        },
        secondary: {
          light: "#FFF7E6",
          DEFAULT: "#FAAD14",
          dark: "#AD6800"
        },
        wealth: {
          light: "#F6FFED",
          DEFAULT: "#52C41A",
          dark: "#135200"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "sans-serif"
        ]
      }
    },
  },
  plugins: [],
}