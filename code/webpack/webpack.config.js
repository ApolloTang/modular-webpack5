const path = require('path')
const { mode } = require('webpack-nano/argv')
const { merge } = require('webpack-merge')

const part_page = require('./webpack-part--page.js')
const part_devServer = require('./webpack-part--dev-server--webpack-plugin-serve.js')
const part_loadCss = require('./webpack-part--load-css.js')
const part_extractCss = require('./webpack-part--extract-css.js')
const part_eliminateUnusedCSS = require('./webpack-part--eleminate-unused-css.js')
const part_loadImages = require('./webpack-part--load-images.js')
const part_loadFonts = require('./webpack-part--load-fonts.js')
const part_loadJs_esbuildLoader = require('./webpack-part--load-js--esbuild-loader.js')
const part_forkTsCheckerWebpackPlugin = require('./webpack-part--fork-ts-cheker-webpack-plugin.js')

const cssloader_postcss = require('./webpack-part--cssloader--postcss/')

const ABS_PATH_TO_FONTS_DEFAULT = path.resolve(__dirname, '..', 'src/fonts')
const ABS_PATH_TO_SRC = path.resolve(__dirname, '..', 'src')
const ABS_PATH_TO_TSCONFIG = path.resolve(__dirname, '..', 'tsconfig.json')

const commonConfig = merge([
  {
    context: ABS_PATH_TO_SRC,
    entry: [ 'main' ],
    resolve: {
      alias: {
        '~': ABS_PATH_TO_SRC
      },
      modules: [ABS_PATH_TO_SRC, 'node_modules'],
      extensions: ['*', '.ts', '.js', '...'],
      extensionAlias: {
       '.js': ['.js', '.ts'],
       '.cjs': ['.cjs', '.cts'],
       '.mjs': ['.mjs', '.mts']
      }
    },
  },
  part_page({title:'demo'}),
  part_extractCss({
    loaders: [cssloader_postcss()]
  }),
  part_loadImages(),
  // part_loadImages({ absPathToFonts: ABS_PATH_TO_FONTS_DEFAULT }),
  part_loadFonts({ absPathToFonts: ABS_PATH_TO_FONTS_DEFAULT }),
  part_loadJs_esbuildLoader(),
])


const productionConfig = merge([
  part_eliminateUnusedCSS()
])


const developmentConfig = merge([
  part_devServer(),
  part_forkTsCheckerWebpackPlugin({absPathToTsConfig: ABS_PATH_TO_TSCONFIG}),
  // part_loadCss({
  //   loaders: [cssloader_postcss()]
  // })
])


const getConfig = (mode, debug=false) => {
  switch (mode) {
    case 'production':
      return merge(commonConfig, productionConfig, {mode: !debug ? mode : 'none'})
    case 'development':
      return merge(commonConfig, developmentConfig, {mode})
    default:
      throw new Error(`Trying to use an unknow mode, ${mode}`)
  }
}


const config = getConfig(mode, true)
// console.dir(config, {depth: 8})

module.exports = config
