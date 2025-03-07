import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": { min: "1920px" },
      },
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        contrast: "#00ff00",
      },
      fontFamily: {
        humaneBold: ["humane-bold", "sans-serif"],
        humaneSemiBold: ["humane-semibold", "sans-serif"],
        humaneMedium: ["humane-medium", "sans-serif"],
        humaneRegular: ["humane-regular", "sans-serif"],
        humaneLight: ["humane-light", "sans-serif"],
        humaneExtraLight: ["humane-extralight", "sans-serif"],
        humaneThin: ["humane-thin", "sans-serif"],
        lucidaRegular: ["lucida-regular", "sans-serif"],
        lucidaBold: ["lucida-bold", "sans-serif"],
        lucidaOblique: ["lucida-oblique", "sans-serif"],
        lucidaBoldOblique: ["lucida-bold-oblique", "sans-serif"],
        dm_sans: ["DM Sans", "serif"], // Corrected syntax
      },
    },
  },
  plugins: [],
};

export default config;
