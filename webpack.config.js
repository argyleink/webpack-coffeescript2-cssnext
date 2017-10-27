const webpack             = require('webpack')
const path                = require('path')
const HtmlWebpackPlugin   = require('html-webpack-plugin')
const ExtractTextPlugin   = require('extract-text-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './js/app.coffee'
  },
  module: {
    rules: [
      // coffeescript
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
            options: { sourceMap: true }
          }
        ]
      },
      // cssnext
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Starter'
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ],
  devtool: 'inline-source-map',
  devServer: { 
    contentBase: './public'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/')
  }
}