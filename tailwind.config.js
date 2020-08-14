const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        brand: {
          lighter: "#F55555",
          default: "#F54F4F",
          dark: "#FF3434",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
