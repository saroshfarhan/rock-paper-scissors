/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        scissiorsStart: "hsl(39, 89%, 49%)",
        scissiorsEnd: "hsl(40, 84%, 53%)",
        rockStart: "hsl(349, 71%, 52%)",
        rockEnd: "hsl(349, 70%, 56%)",
        paperStart: "hsl(230, 89%, 62%)",
        paperEnd: "hsl(230, 89%, 65%)",
      },
    },
  },
  plugins: [],
};
