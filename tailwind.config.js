module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#BEE3DB",
          200: "#89B0AE",
        },
        cream: "#FBFEF6",
        secondary: {
          100: "#FFD6BA",
          200: "#F5A97A",
          300: "#EF782E",
        },
        text: "#555B6E",
      },
      fontFamily: {
        slogan: ["Courgette"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
