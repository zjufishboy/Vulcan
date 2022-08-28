const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/entry/index.tsx',
  // 输出文件
  output: {
    filename: '[contenthash:12].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  // 插件配置
  plugins: [
    // html打包插件
    new HtmlWebpackPlugin({
      template: './src/entry/index.html',
      // favicon: './public/favicon.ico',
    }),
    // 复制插件
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: 'static',
    //     },
    //   ],
    // }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        include: contentPath => /icon/.test(contentPath),
        exclude: contentPath => /image/.test(contentPath),
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/,
        include: contentPath => /image/.test(contentPath),
        exclude: contentPath => /icon/.test(contentPath),
        use: ['file-loader'],
      },
    ],
  },
};
