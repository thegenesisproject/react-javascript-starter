/* eslint no-undef: "off" */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/welcome.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'React JavaScript QuickStart',
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.png',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // location of index.html final build
    port: 3030,
    historyApiFallback: true,
  },
};
