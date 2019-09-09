const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: {
      app: './src/index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Test',
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hotOnly: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
      extensions: [ '.js', '.jsx', '.css' ]
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        }
      ]
  }
};