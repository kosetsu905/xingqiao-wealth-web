/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  mode: 'jit',
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
        secondary1:"#F8F9FA",
        success: '#00B42A',
        danger: '#F53F3F',
        dark: '#1D2129',
        accent: "#28A745",
        border: "#DCDCDC",
        wealth: {
          light: "#F6FFED",
          DEFAULT: "#52C41A",
          dark: "#135200"
        },
        warning: {
          light: "#ffc107",
          DEFAULT: "#ffc107",
          dark: "#ffc107"
        },
        'dark-2': '#4E5969',
        'dark-3': '#86909C',
        'light-1': '#F2F3F5',
        'light-2': '#F7F8FA',
        'light-3': '#FFFFFF'
      },
      fontFamily: {
        sans: [
          "Inter",
          "sans-serif"
        ],
        inter: [
          "Inter",
          "sans-serif"
        ]

      }
    },
  },
  plugins: [addDynamicIconSelectors()],
}

