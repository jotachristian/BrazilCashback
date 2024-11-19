module.exports = {
  darkMode: 'media', // Use 'class' se preferir alternar manualmente
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'gradient-teste': 'linear-gradient(37deg, rgba(245, 245, 245, 0) 53%, rgba(0, 128, 0, 1) 100%)',
        'gradient-teste2': 'linear-gradient(37deg, rgba(245, 245, 245, 0) 53%, rgba(255, 204, 0, 1) 100%)',
      },
    },
  },
  plugins: [],
};
