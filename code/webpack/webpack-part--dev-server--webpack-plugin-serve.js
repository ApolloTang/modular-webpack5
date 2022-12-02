const { WebpackPluginServe } = require("webpack-plugin-serve")

const devServer = (
  _port = 8080,
  _host = '127.0.0.1'
) => {
  const out = {
    entry: [ 'webpack-plugin-serve/client' ],
    watch: true,
    plugins: [
     new WebpackPluginServe(
       {
         port: process.env.PORT || _port,
         static: './dist',
         liveReload: true,
         waitForBuild: true,
         host: _host // you have set host if you use Safary
       }
     )
   ]
  }
  return out
}

module.exports = devServer
