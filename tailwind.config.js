/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: "24px",
        l: "18px",
        m: "15px",
        s: "12px",
      },
      colors: {
        "dark-blue": "#1E1E1E",
        purple: "#7303C0",
        pink: "#EC38BC",
        "desaturated-white": "#FDEFF9",
        white: "#ffffff",
        black: "#000000",
      },
    },

    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
  },

  plugins: [],
};
