/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(31, 54, 65)",
        "light-yellow": "#F2B137",
        "light-blue": "#31C3BD",
      },
    },
  },
  plugins: [],
}
