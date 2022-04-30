module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, 70px)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, 70px)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
