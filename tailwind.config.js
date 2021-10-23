module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        colorsOne: "#FFFBF0",
        colorFour: "#F1F1F1",
      }),
      textColor: (theme) => theme("colors"),
      textColor: {
        colorTwo: "#FABE4C",
        colorThree: "#363958",
        colorFive: "#FABE4C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
