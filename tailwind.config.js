/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [
    plugin(({ addUtilities, matchUtilities, config, e, theme }) => {
      console.log(config, e, theme);
      addUtilities({
        '.test-demo': {
          display: 'block',
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
          'border-radius': '12px',
          opacity: '0',
          transition: 'all 1s ease 0s',
          'box-shadow': 'rgb(140 140 140 / 90%) 0px 0px 6px 6px',
        },
        '.test-demo2': {
          position: 'absolute',
          'border-radius': '12px',
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
