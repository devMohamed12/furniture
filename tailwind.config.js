const daisyui = require("daisyui");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#895C30", // Orange
        // secondary: "#FEF9F8", // Light beige
        secondary: "#f6f6f6", // Light beige
        tertiary: "#1b1b1b", // Black
        /* Add a new color here: */
        accent: "#137A63",
        subText: "#333",
      },
      fontFamily: {
        anton: ['"Anton SC"', "sans-serif"],
        jost: ['"Jost"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
