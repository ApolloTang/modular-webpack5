const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const path_tailwindConfig = __dirname + '/tailwind.config.js'

postcss = () => ({
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        [
          'tailwindcss', { config: path_tailwindConfig }
        ],
        [
          'autoprefixer', {  }
        ],
      ]
    }
  }
});

module.exports = postcss;
