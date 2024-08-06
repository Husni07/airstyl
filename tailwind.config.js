/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Lora", "serif"],
        heading: ["Montserrat", "sans-serif"],
        subheading: ["Playfair Display", "serif"],
        caption: ["Open Sans", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
