const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.lightBlue,
      red: colors.rose,
      yellow: colors.amber,
    },
    textColor: {
      DEFAULT: colors.blueGray["900"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
