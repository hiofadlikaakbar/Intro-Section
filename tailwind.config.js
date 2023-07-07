const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      epi: ["Epilogue"],
    },
    extend: {
      colors: {
        almWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almBlack: " hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
