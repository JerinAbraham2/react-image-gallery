const tailwindcss = require("tailwindcss");
const autoPrefixer = require("autoprefixer");

module.exports = {
  plugins: [
    // these are plugins
    tailwindcss('./tailwind.js'), // pass in the location of the tailwindcss config file
    autoPrefixer,
  ]
}