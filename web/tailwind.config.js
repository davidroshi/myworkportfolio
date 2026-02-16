/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6', // Example minimal blue
        background: '#ffffff',
        surface: '#f3f4f6',
      }
    },
  },
  plugins: [],
}
