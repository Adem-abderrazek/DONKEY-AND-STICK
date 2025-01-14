/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        merienda: ['Merienda', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
      colors: {
        peach: '#fae0c1', 
        bloody:'#B73C21'
    },
  },
       
    },

  plugins: [],
};
