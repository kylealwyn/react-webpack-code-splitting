const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].[chunkhash:12].js',
    chunkFilename: "[id].[chunkhash:12].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: `${__dirname}/src`
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Intro to Webpack',
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8 : true },
      compress: { screw_ie8: true, warnings: false },
      comments: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:12].js',
      minChunks: (chunk) => /node_modules/.test(chunk.resource)
    }),
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new ExtractTextPlugin('[name].[contenthash:12].css'),
  ]
};
