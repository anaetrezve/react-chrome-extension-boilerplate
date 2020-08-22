/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtensionReloader = require('webpack-extension-reloader');

const sourceRoot = path.join(__dirname, 'src');
const distRootPath = path.join(__dirname, 'dist');
const NODE_ENV = process.env.NODE_ENV || 'development';
const WEB_BROWSER = process.env.WEB_BROWSER || 'chrome';

const extensionReloader =
  NODE_ENV === 'watch'
    ? new ExtensionReloader({
        port: 9090,
        reloadPage: true,
        entries: {
          background: 'background',
          extensionPage: ['popup', 'options'],
          contentScript: 'content'
        }
      })
    : () => {
        this.apply = () => {};
      };

const cleanWebpackPlugin =
  NODE_ENV === 'production'
    ? new CleanWebpackPlugin()
    : () => {
        this.apply = () => {};
      };

module.exports = {
  watch: NODE_ENV === 'watch',
  entry: {
    background: path.join(sourceRoot, 'app', 'background', 'index.ts'),
    popup: path.join(sourceRoot, 'app', 'popup', 'index.tsx'),
    options: path.join(sourceRoot, 'app', 'options', 'index.tsx'),
    content: path.join(sourceRoot, 'app', 'contentScript', 'index.tsx')
  },
  output: {
    path: distRootPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(sourceRoot, 'pages', 'popup.html'),
      inject: 'body',
      filename: 'popup.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourceRoot, 'pages', 'options.html'),
      inject: 'body',
      filename: 'options.html',
      chunks: ['options']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(sourceRoot, 'assets', 'icons'),
          to: path.join(distRootPath, 'assets', 'icons')
        },
        {
          from: path.join(sourceRoot, 'manifest.json'),
          to: path.join(distRootPath, 'manifest.json'),
          toType: 'file'
        }
      ]
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      WEB_BROWSER: JSON.stringify(WEB_BROWSER)
    }),
    extensionReloader,
    cleanWebpackPlugin
  ]
};
