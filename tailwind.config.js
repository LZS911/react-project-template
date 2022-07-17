/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    textColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ...colors,
    },
    borderColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ...colors,
    },
    backgroundColor: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ...colors,
    },
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        '.water-wave-hide': {
          display: 'block',
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          'border-radius': theme('borderRadius.md'),
          opacity: '0',
          transition: 'all 0.8s ease 0s',
          'box-shadow': 'rgb(140 140 140 / 80%) 0px 0px 6px 6px',
        },
        '.water-wave-show': {
          position: 'absolute',
          'border-radius': theme('borderRadius.md'),
          left: '0px',
          top: '0px',
          opacity: '1',
          transition: ' all 0s ease 0s',
          'box-shadow': 'rgb(140 140 140 / 90%) 0px 0px 0px 0px',
        },
      });
      matchUtilities({});
    }),
  ],
};
