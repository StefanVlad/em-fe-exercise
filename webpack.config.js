const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'EM front-end exercise',
      // Load a custom template (lodash by default)
      template: 'src/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    client: {
      progress: true
    },
    watchFiles: ['src'],
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: 'src/index.html'
    }
  },
};

module.exports = config;