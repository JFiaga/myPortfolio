/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainGreen: '#F2D95C',
        mainBlack:'#181C26',
        secondBlack:'#181C26',
        opacityColor:'#8892b0'
      },
      fontSize: {
        clampSm: "clamp(1rem, -0.1429rem + 5.7143vw, 1.5rem);",
        clampLg: "clamp(2.4rem, -0.1429rem + 5.7143vw, 5rem);",
      },
    
      },
    },
  
};


/*
#F2D95C yellow

#4F5873 soft gray

#181C26 dark

#415CF2 blue

#414AF2 deep blue


mainGreen: '#00bd97',
        mainBlack:'#21272f',
        secondBlack:'#171c23',
*/