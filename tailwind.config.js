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
    },
  },
  plugins: [require("flowbite/plugin")],
};
