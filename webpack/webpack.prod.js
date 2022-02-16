const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = webpackMerge.merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    // 打包后自动生成分析报告
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      //提取css
      filename: '[hash:12].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
