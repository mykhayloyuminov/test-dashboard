const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        ...defaultTheme.screens,
      },
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        body: ['Nunito Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        buttons: ['Poppins', 'sans-serif'],
      },
      colors: {
        darkBlue: 'var(--color-dark-blue)',
        blue: 'var(--color-blue)',
        tan: 'var(--color-tan)',
        charcoal: 'var(--color-charcoal)',
        gray: 'var(--color-accent-gray)',
      },
      textColor: {
        body: 'var(--color-dark-blue)',
        heading: 'var(--color-charcoal)',
      },

      maxWidth: {
        1920: '1920px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
};
