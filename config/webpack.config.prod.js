const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const Constants = require('./constants');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [Constants.ScriptEntry],
  },
  output: {
    path: Constants.Build,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'chunk-[id].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, '..', 'src/components/'),
      '@styles': path.resolve(__dirname, '..', 'src/styles/'),
      '@views': path.resolve(__dirname, '..', 'src/views/'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: Constants.Source,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: Constants.Source,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Intro to Webpack',
      template: Constants.HtmlEntry,
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      as: 'script',
      include: 'asyncChunks',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash].js',
      minChunks: chunk => /node_modules/.test(chunk.resource),
    }),
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true },
      compress: {
        warnings: false, // Suppress uglification warnings
        screw_ie8: true,
      },
      comments: false,
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html',
      generateStatsFile: true,
    }),
  ],
};
