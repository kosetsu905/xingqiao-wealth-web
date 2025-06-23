/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#36D399',
        dark: '#1E293B',
        light: '#F8FAFC'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px'
      }
    },
  },
  plugins: [],
}