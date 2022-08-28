const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = webpackMerge.merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true, // 启动gzip压缩
    port: 8888,
    historyApiFallback: {
      index: '/', // 重定向
    },
  },
});
