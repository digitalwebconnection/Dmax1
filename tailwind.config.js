/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.ts",
    "./node_modules/flowbite/**/*.tsx",
    "./node_modules/flowbite/**/*.jsx",
    "./node_modules/flowbite/**/*.mdx",
    "./node_modules/flowbite/**/*.css",
    "./node_modules/flowbite/**/*.scss",
    "./node_modules/flowbite/**/*.sass",
    "./node_modules/flowbite/**/*.html",
    "./node_modules/flowbite/**/*.vue",
    "./node_modules/flowbite/**/*.php",
    "./node_modules/flowbite/**/*.ts",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.jsx",
    "./node_modules/flowbite/**/*.tsx",
    "./node_modules/flowbite/**/*.mdx",
    "./node_modules/flowbite/**/*.css",
    "./node_modules/flowbite/**/*.scss",
  ],
  theme: {
    extend: {
         keyframes: {
        'slow-spin': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slow-spin': 'slow-spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}

