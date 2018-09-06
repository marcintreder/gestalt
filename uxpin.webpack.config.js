const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./packages/gestalt/src/Button/button.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        test: /\.js?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-cssnext')({
                  features: {
                    customMedia: {
                      extensions: './packages/gestalt/src/breakpoints.json',
                    },
                  },
                }),
              ],
            },
          },
        ],
      },
      {
        use: ['file-loader'],
        test: /\.(jpe?g|png|gif)$/i,
      },
      {
        test: /\.svg$/,
        loader: 'svg-path-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './fonts/',
            },
          },
        ],
      },
    ],
  },
};
