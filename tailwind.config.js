/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "DC4492",
        yellow: "#FDCC49",
        grey: "EDEDED",
        green: "#AFF91C",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        brown: "#3e2723",
        "dark-pink": "rgb(189, 171, 175)",
        "darker-pink": "rgb(207, 192, 195)",
      },
      keyframes: {
        headShake: {
          "0%": { transform: "translateX(0)" },
          "6.5%": { transform: "translateX(-6px) rotateY(-9deg)" },
          "18.5%": { transform: "translateX(5px) rotateY(7deg)" },
          "31.5%": { transform: "translateX(-3px) rotateY(-5deg)" },
          "43.5%": { transform: "translateX(2px) rotateY(3deg)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        headShake: "headShake 2s infinite",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("flowbite/plugin")],
};
