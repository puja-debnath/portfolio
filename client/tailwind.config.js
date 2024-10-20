/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#C75B7A",   // light pink
        "secondary":"#6b0f8d",  // dark pink
        "tertiary" : "#D9ABAB"   // cream
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
