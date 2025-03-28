const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    'app/**/*.{js,ts,jsx,tsx}', 
    'components/**/*.{js,ts,jsx,tsx}',
    '*.{js,ts,jsx,tsx}',
    'ThemeProvider.tsx',
    'ThemeToggle.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        homepageIcon: '#225da5',
        accent: colors.fuchsia['400'],
        darkBackground: '#020617', // Dark background
        lightBackground: '#ffffff', // True white for light mode
        darkText: '#ffffff', // White text for dark mode
        lightText: '#000000', // Black text for light mode
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 255, 0, 0.8)', // Glow effect for light mode
        darkGlow: '0 0 15px rgba(0, 0, 255, 0.8)', // Glow effect for dark mode
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
