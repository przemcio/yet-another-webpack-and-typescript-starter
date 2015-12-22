var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  context: __dirname + "/app",
  entry: './app.ts',
  output: {
    path: __dirname + "/dist",
    filename: './bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}