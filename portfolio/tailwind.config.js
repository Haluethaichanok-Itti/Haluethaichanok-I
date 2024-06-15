/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ORB: ["Oranienbaum", "sans-serif"]
      },

      animation: {
        'animation': 'slide infinite 5s alternate',
      },
    },
  },
  plugins: [],
}