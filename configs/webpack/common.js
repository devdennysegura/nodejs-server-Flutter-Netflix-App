const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src/app'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: 'configs/tsconfig-client.json'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
          'sass-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  performance: {
    hints: false
  },
  devServer: {
    port: 3000,
    contentBase: "./",
    historyApiFallback: true
  }
};
