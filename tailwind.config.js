/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: '#d2b48c',
        darkBrown: '#5e503f',
        taupe: '#8c6d57',
        slateBlueGray: '#4a6572',
        warmIvory: '#f7f0e7',
        steelBlue: '#8cbcd4',
      },
    },
  },
  plugins: [],
}

