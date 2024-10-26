/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#E2BBE9",   // light pink
        "secondary":"#2F3C7E",  //  blue
        "tertiary" : "#AF0171"   // cream
      }  
    },
    screens: {
      'sm': {max:'1000px'},   // Small devices
     // 'md': '768px',   // Medium devices
    'lg':{max: '2024px'},  // Large devices
      //'xl': '1280px',  // Extra large devices
      //'2xl': '1536px', // Double extra large devices
    },
  },
  plugins: [],
}

