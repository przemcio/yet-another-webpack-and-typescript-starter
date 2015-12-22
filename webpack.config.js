var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');  

module.exports = {  
  context: __dirname + "/app",
  entry: './app.ts',
  output: {
    path: __dirname + "/dist",
    filename: './bundle.js'
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.optimize.UglifyJsPlugin()],
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}