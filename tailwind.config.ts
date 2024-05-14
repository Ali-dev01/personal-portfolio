import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/images/mern-logo.png')",
      },
      colors: {
        primary: {
          main: "#ff9100",
          "100": "#87510b",
          "200": "#ffc87f",
          "300": "#ffb24c",
          "400": "#ff9c19",
        },
        grey: {
          main: "#0c0c14",
          light: "#0e0e17",
          dark: "#0a0a12",
          "100": "#cfcfd1",
        },
      },
    },
  },
  plugins: [],
};
export default config;
