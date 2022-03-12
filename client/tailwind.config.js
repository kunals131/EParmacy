module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#37B9C5',
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
        lato : ['Lato','san-serif']
    },
      screens : {
        'xl' : '1100px',
        '2xl' : '1250px',
        '3xl' : '1370px', 
        '4xl' : '1400px'
      }
    },
  },
  plugins: [],
}