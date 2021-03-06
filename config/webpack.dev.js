var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var commonConfig = require('./webpack.common.js');

const ENV = process.env.BUILD_DEV = process.env.NODE_ENV = process.env.ENV = 'dev';

module.exports = webpackMerge(commonConfig, {

  output: {
    path: './dist',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    compress: true,
    contentBase: './',
    historyApiFallback: true,
    stats: 'minimal'
  }

});