const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = webpackMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://10.214.242.225:8309',
    //     pathRewrite: { '^/api': '' },
    //     changeOrigin: true,
    //   },
    // },
    contentBase: '../dist',
    publicPath: '/',
    compress: true,
    port: 8888,
    historyApiFallback: {
      index: '/',
    },
  },
});
