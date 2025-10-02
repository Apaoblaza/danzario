/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#D94865", dark: "#B83250", soft: "#F7E8EC" },
        background: { DEFAULT: "#FBF8FA", alt: "#F3EEF1" },
        ink: { DEFAULT: "#2D2A2E", soft: "#6B6468" },
        line: "#E7E0E4",
      },
      fontFamily: {
        sans: ["Nunito Sans", "system-ui", "sans-serif"],
        fancy: ["Parisienne", "cursive"],
      },
      boxShadow: { soft: "0 8px 30px rgba(45,42,46,.06)" },
      borderRadius: { xl2: "1rem" },
    },
  },
  plugins: [],
};
