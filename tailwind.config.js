const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').content} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{jsx,tsx,ts,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
});
