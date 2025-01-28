/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite IN"', "sans-serif"], // Add Playwrite IN font
      },
    },
  },
  plugins: [],
};
