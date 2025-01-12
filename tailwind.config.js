/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-purple": "radial-gradient(circle, #c084fc, #581c87, #581c87)", // Customize your colors
      },
    },
  },
  plugins: [],
};
