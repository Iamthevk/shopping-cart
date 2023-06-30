/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          500: "rgb(219 39 119)"
        },
        secondary:{
          300: "rgb(147 197 253)"
        }
      }
    },
  },
  plugins: [],
}

