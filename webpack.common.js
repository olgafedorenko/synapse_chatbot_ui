const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      package: path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
        { loader: 'eslint-loader' },
        ],
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './assets/[name].[hash:4].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    HtmlWebpackPluginConfig,
  ]
};

module.exports = config;
