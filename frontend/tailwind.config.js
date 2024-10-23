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
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
    animation: {
      float: 'float 3s ease-in-out infinite',
    },
  },
  },
  plugins: [],
}
