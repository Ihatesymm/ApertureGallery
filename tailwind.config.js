module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'backgroundtop': '#201a30',
        'backgroundbottom': '#1a1528',
        'tabletop': '#241d36',
        'tablebottom': '#201333',
        '2xtabletop': '#0ef5e3',
        '2xtablebottom': '#0077ff',
        'main': '#0ef5e3',
        'header': "#181324",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
