/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'slate-700': '#000F1E',
        'transparent-red': 'rgba(188, 71, 73, 0.00)',
      },
    },
  },
  plugins: [],
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // ...other configuration options
};
// tailwind.config.js

