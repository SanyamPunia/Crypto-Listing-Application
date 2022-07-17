const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    fontFamily: {
      raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
    },
    container: {
      screens: {
        "2xl": "1279px",
        'xl': "1279px",
        'lg': "1023px",
        'md': "767px",
        'sm': "639px",
      },
    },
    colors: {
      backgroundPrimary: "#212121",
      backgroundSecondary: "#2B2B2B",
      borderPrimary: "#5B5A5A",
      textList: "#18978F",
      textListPrimary: "#11756F",
      textListSecondary: "#0C635D",
      textPrimary: "#fff",
      textSecondary: "rgb(156 163 175)",
      backgroundSecondaryLight: '#F6F6F6',
    },
    extend: {},
  },
  plugins: [],
};
