const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '46': '4.6rem',
        '81/1':'81.1%',
        '94/5':'94.5%'
      },
      margin:{
        '46':'4.6rem',
        '14/5':'3.55rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
