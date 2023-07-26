/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gold': '#B97C3B'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
