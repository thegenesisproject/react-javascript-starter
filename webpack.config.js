const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/welcome.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/assets/', // the url to the output directory resolved relative to the HTML page
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
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // location of index.html final build
    port: 3030,
    historyApiFallback: true,
  },
};
