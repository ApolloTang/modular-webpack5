const loadJs_esbuildLoader = () => {

  const module = {
    rules: [
      {
        test: /\.m?(t|j)sx?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015'
            }
          },
        ],
        exclude: [/node_modules/]
      }
    ]
  }

  return {
    module
  }
}


module.exports = loadJs_esbuildLoader
