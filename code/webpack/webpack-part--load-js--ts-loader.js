const loadJs_tsLoader = () => {

  const module = {
    rules: [
      {
        test: /\.m?(j|t)s$/,
        use: 'ts-loader',
        exclude: [/node_modules/]
      }
    ]
  }

  return {
    module
  }
}


module.exports = loadJs_tsLoader
