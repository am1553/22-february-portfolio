/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxl: "36px",
        xl: "24px",
        l: "18px",
        m: "16px",
        s: "12px",
        special: ["14px", { letterSpacing: "1em", fontWeight: 600 }],
        specialXL: ["20px", { letterSpacing: "1em", fontWeight: 600 }],
      },
      colors: {
        "light-blue": "#12C2E9",
        purple: "#C471ED",
        red: "#F64F59",
        "desaturated-white": "#FDEFF9",
        white: "#ffffff",
        black: "#000000",
        "bg-dark-blue": "#001419",
      },
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },

  plugins: [],
};
