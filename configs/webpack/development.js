const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const {resolve} = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    library: 'UserList',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve(__dirname, 'dist/app'),
    filename: 'index.js',
    publicPath: '/'
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.tsx'
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new uglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
});
