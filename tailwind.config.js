/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f7fb",
          100: "#e8eef6",
          200: "#cbddec",
          300: "#9ec0db",
          400: "#6aa0c6",
          500: "#4784b0",
          600: "#356a94",
          700: "#2c5578",
          800: "#284864",
          900: "#263e54",
          950: "#192938",
        },
      },
    },
  },
  plugins: [],
};
