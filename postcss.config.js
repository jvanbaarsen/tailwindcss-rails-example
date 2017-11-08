var tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    // ...
    tailwindcss('./app/javascript/src/tailwind.js'),
    require('autoprefixer'),
    // ...
  ]
}
