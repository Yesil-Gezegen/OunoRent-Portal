/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "colorred": "#D60000",
        "colorgray": "#F7F6F6"
      },
      colors: {
        "qred": "#D60000",
        "qblack": "#000000",
        "qwhite": "#FFFFFF",
      },
      borderColor: {
        "qgray": "#f3f4f6"
      },
      flexGrow: {
        "1": 1,
        "2": 2,
        "3" :3
      }
    },
  },
  plugins: [],
}