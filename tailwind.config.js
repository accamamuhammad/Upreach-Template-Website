/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(10,34,40)",
        secondary: "rgb(114,197,128)",
        tertiary: "rgb(40,61,66)",
      },
      animation: {},
    },
  },
  plugins: [],
};
