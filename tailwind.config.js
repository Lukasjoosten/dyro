
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter'],
        },
        colors: {
            dark: '#141E30',
            lightdark: '#243B55',
            paars: "#D2447A",
            oranje: "#F85E00",
            rood: "#E14E4B",
          }
    },
},
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
