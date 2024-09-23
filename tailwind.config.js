// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      gold: {
        light: '#FFD700', // Gold light
        DEFAULT: '#DAA520', // Gold dark (darker variation)
      },
    },},
  },
  plugins: [],
}
