/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{vue,js,ts,jsx,tsx}"
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        gray: {
          900: "#0F1112",
          800: "#151718",
          700: "#181A1E",
          400: "#55565C",
        },
        indigo: {
          400: "#927CFF",
          700: "#4D3E97",
        },
        green: {
          400: "#01F0C8",
          700: "#009C80",
        },
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
