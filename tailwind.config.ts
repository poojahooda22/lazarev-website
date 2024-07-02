import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1840px',     
    },
    colors: {
      white: '#ffffff',
      black: '#111111',
      blue: '#4f5bff',
      green: '#0da34e',
      grey: '#686875',
      transparent: 'transparent',
    },
    fontSize: {
      xs: '0.75vw',
      sm: '1vw',
      md: '1.6vw',
      lg: '6vw',
      xl: '8vw',
      '2xl': '14vw',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
