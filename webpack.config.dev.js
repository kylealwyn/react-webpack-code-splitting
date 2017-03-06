const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  stats: 'minimal',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/app.js'
    ]
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].[hash:12].js',
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
      template: 'src/index.html'
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
