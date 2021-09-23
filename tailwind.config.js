
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
     screens: {
      pics: "1080px",
      ...defaultTheme.screens,
     },
     colors: {
      light: "#eeeeee",
      lightmedium: "#8e8e8e",
      medium: "#344246",
      medium50: "#34424679",
      dark: "#1E292A",
      primary: "#FFB900",
      secondary: "#00C2EF",
      red: "#FF0000",
      green: "#008000",
      blue: "#0000ff",
      skyblue: "#209fff",
      greenHue: "#28a74542",
      redHue: "#FF000042",
     },
    },
    variants: {
     extend: {
      backgroundColor: ["even"],
     },
    },
   
    plugins: [],
   };