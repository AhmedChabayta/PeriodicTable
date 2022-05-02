module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 18 column grid
        18: "repeat(18, minmax(30px, 70px))",
      },
      gridTemplateRows: {
        // Simple 10 row grid
        10: "repeat(10, minmax(50px, 70px))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
