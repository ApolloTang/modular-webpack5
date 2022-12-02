const path = require('path')
const glob = require('glob')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')

// PurgeCssPlugin will scan files specified in the following
// glob patterns to look for class names. The class names found during
// this scan will not be elimentated from the output bundles.
const ALL_FILES = [
  ...glob.sync( path.resolve(__dirname, '../', 'src/**/*.html')),
  ...glob.sync( path.resolve(__dirname, '../', 'src/**/*.js'))
]

eliminateUnusedCSS = () => ({
  plugins: [
    new PurgeCSSPlugin({
      paths: ALL_FILES, // Consider extracting as a parameter
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['html'],
        },
      ],
    }),
  ],
});

module.exports = eliminateUnusedCSS;
