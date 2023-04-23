/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserratFont: ["Montserrat", "sans-serif"],
        interFont: ["Inter", "sans-serif"]
      },
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px"
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        bodyColor: "#262626",
        textGreen: "#14b8a6", 
        textLight: "#CCD6F6",
        textDark: "#8892B0",
        hoverColor: "rgba(100, 255, 218, 0.1)"
      } 
    },
  },
  plugins: [],
}
