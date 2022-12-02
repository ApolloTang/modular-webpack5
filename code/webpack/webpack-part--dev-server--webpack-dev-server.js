const WebpackDevServer = require('webpack-dev-server');

const devServer = (
  _port = 8080,
  _host = '127.0.0.1'
) => {
  const devServerOptions = {
    port: _port,
    host: _host,
    // open: true,

    hot: true, // Dev server client for web socket transport, hot and live reload logic
    client : {
      logging: 'info',
      overlay: { errors: true, warnings: true }
    }
  }

  const out = {
    devServer: devServerOptions
  }
  return out
}

module.exports = devServer
