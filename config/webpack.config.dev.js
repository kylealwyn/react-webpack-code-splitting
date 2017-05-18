const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');
const Constants = require('./constants');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      Constants.ScriptEntry,
    ]
  },
  output: {
    path: Constants.Build,
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: "[id].[chunkhash].js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: Constants.Source,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    host: 'localhost',
    hot: true,
    open: true,
    historyApiFallback: true,
    stats: 'minimal',
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Intro to Webpack',
      template: Constants.HtmlEntry
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (chunk) => /node_modules/.test(chunk.resource)
    }),
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin()
  ]
};
