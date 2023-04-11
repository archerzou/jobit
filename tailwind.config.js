/** @type {import('tailwindcss').Config} */
module.exports = {
  // Added darkMode for dark mode
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Added more colors from Figma File
      colors: {
        primary: '#0BAB7C',
        secondary: '#F5F5F8',
        secondary_bg: '#F9FAFC',
        black_BG: '#13131A',
        black_1: '#171725',
        black_2: '#1C1C24',
        black_3: '#21212B',
        natural: '#92929D',
        natural_2: '#F1F1F5',
        natural_3: '#696974',
        natural_4: '#FAFAFB',
        natural_5: '#92929D',
        natural_6: '#E2E2EA',
        natural_color: '#44444F',
      },
      fontFamily: {
        manrope: ['Manrope', 'DM Sans'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
