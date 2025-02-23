import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': { 'min': '1920px' }, 
      },
      colors: {
        primary: '#000000', // Make sure the variable is correctly referenced
        secondary: '#ffffff',
        contrast: '#00ff00',
      },
      fontFamily: {
        // Local fonts
        humaneBold: ['humane-bold', 'sans-serif'],
        humaneSemiBold: ['humane-semibold', 'sans-serif'],
        humaneMedium: ['humane-medium', 'sans-serif'],
        humaneRegular: ['humane-regular', 'sans-serif'],
        humaneLight: ['humane-light', 'sans-serif'],
        humaneExtraLight: ['humane-extralight', 'sans-serif'],
        humaneThin: ['humane-thin', 'sans-serif'],
        lucidaRegular: ['lucida-regular', 'sans-serif'],
        lucidaBold: ['lucida-bold', 'sans-serif'],
        lucidaOblique: ['lucida-oblique', 'sans-serif'],
        lucidaBoldOblique: ['lucida-bold-oblique', 'sans-serif'],
        geist: [''],
        dm_sans: ["DM Sans", 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
