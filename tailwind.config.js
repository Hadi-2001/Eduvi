/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container:{
      center : true,
      padding: "1.25rem",
      screens:{
        xs:"480px",
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      },
    },
    extend: {
      colors:{
        "primary":"#FF6652",
        "secondary":"#9C4DF4",
        "midGray":"#5D5A6F",
        "blackRock":"#0A033C",
        "blueChalk":"#EFEBF5"
      },
      screens:{
        xs:"480px"
      },
      fontFamily:{
        "Metropolis":"Metropolis",
        "Metropolis-SemiBold":"Metropolis SemiBold",
        "Metropolis-Bold":"Metropolis Bold",
        "Metropolis-Medium":"Metropolis Medium",
        "Inter":"Inter",
        "Inter-Medium":"Inter Medium",
        "Inter-SemiBold":"Inter SemiBold",
      },
      borderRadius:{
        xl:"0.625rem"
      },
      backgroundImage : {
        "mentor": "url('/images/Group 754.svg')",
        "gradient-register":"linear-gradient(180deg,rgba(10,3,60,0.00) 0%, #0A033C 51.56%,rgba(10,3,60,0.00) 100%)"
      }
    },
  },
  plugins: [],
}