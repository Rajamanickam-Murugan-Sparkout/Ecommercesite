/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
   
    extend: {
      colors: {
        primary: {

         "50":"#ffea00",
          "100":"#ffa200",
          "200":"#dc2626",
          "300":"#ff8800",
          "400":"#ff7b00",
          "500":"#ff7b00",
          "600":"#ff7b00",
          "700":"#f26419",
          "800":"#f97316",
          "900":"#f26419",
          "950":"#22c55e"
      }
      }
     

    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans':
       [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
      ]
  },
  plugins: [
    require('flowbite/plugin')({
    }),
  ],
}
}

