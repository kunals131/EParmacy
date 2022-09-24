module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#003b82',
        background : '#F9FAFA',
        backgroundSecondary : '##FFFFFF',
        secondary : '#FFC618',
        secondaryLight : '#FFFAF3',
        accent : '#FF5A5A',
        accentLight : '#E8D8D8',
        grayX : '#4E4E4E'

      },
      fontFamily : {
        poppins : ['Poppins','san-serif'],
        lato : ['Lato','san-serif'],
        default : ['Open Sans', 'sans-serif']
    },
      screens : {
        'xl' : '1120px',
        '2xl' : '1250px',
        '3xl' : '1370px', 
        '4xl' : '1400px'
      }
    },
  },
  plugins: [],
}