/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile480: '480px',
      },
      colors: {
        primary: '#f8f8f8',
        primaryLight: 'EEF1F1',
        secondary: '#31796d',
        tertiary: '#ffbb38',
      },
      fontFamily: {
        logoFont: ['FACON'],
      },
    },
  },
  plugins: [],
};
