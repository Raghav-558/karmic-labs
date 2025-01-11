/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-black": "#040404",
        "dark-blue": "#32C7F1",
        "light-gray": "#ffffff1a",
        "gray" : "#4D4D4D"
      },
      backgroundImage: {
        'hero-layer': "url('./assets/images/hero-gray-layer.webp')",
        'white-layer': "url('./assets/images/white-layer.webp')",
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px'
      },
      fontFamily: {
        "sunflower": ['Sunflower', 'sans-serif'],
        "spacegrotest": ['Space Grotest', 'sans-serif'],
      }
    },
  },
  plugins: [],
}