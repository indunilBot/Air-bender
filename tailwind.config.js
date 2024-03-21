/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        'csz' : "375px",
      },
      fontFamily : {
        avatar : ["avatar"],
        poppins : ["Poppins"],
        kotta : ["kotta"]
      },
      keyframes: {
        sliden: {
          from:{
            opacity:"0",
            transfrom:"translateX(-100%)"
          },
          to:{
            opacity:"1",
            transfrom:"translateX(0)"
        },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      sliden: "sliden 1s ease var(--slidein-delay, 0) forwards",
      wiggle: 'wiggle 1s ease-in-out infinite',
      spin_slow: 'spin 4s linear infinite'

    },
  },
  plugins: [],
}};