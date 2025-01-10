import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7A24A1",
        darkpurple: "#281b32",
        orange: "#FEAA53",
        purple2: "#C749E4",
        purple3: "#332C3F",
        gold: "#DFAf37",
        purple4: "#261738",
        purple5: "#41264E",
        purple6: "#B65FCF",
        purple7: "#4a044e",
        red: "#b45309",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    }
  },
  plugins: [scrollbar],
};
