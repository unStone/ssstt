const path = require('path')
const merge = require('webpack-merge');
const defaultWebpackConfig = require('./webpack.config.js');

module.exports = merge(defaultWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ssstt.min.js',
    libraryTarget: 'umd'
  }
})