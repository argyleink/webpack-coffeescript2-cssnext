const webpack             = require('webpack')
const path                = require('path')
const HtmlWebpackPlugin   = require('html-webpack-plugin')
// const ExtractTextPlugin   = require('extract-text-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const postcssImport       = require('postcss-import')
const Dashboard           = require('webpack-dashboard/plugin')

module.exports = {
  context:  path.resolve(__dirname, 'app'),
  entry:    { app: './js/app.coffee' },
  module: {rules:[
    {
      test: /\.coffee$/,
      use: [{
        loader: 'coffee-loader',
        options: { sourceMap: true }
      }]
    },
    {
      test: /\.css$/,
      // use: ExtractTextPlugin.extract({
      //   use: [
      //     'style-loader',
      //     { loader: 'css-loader', options: { importLoaders: 1 } },
      //     'postcss-loader'
      //   ]
      // })
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
      ]
    }
  ]},
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({ title: 'Starter' }),
    // new ExtractTextPlugin('[name].bundle.css'),
    new webpack.HotModuleReplacementPlugin(),
    new Dashboard()
  ],
  devtool: '#eval-cheap-module-source-map', //inline-source-map
  devServer: { 
    contentBase: './public',
    hot: true
  },
  cache: true,
  output: {
    filename: '[name].bundle.js',
    path:     path.resolve(__dirname, 'public/'),
    pathinfo: true
  }
}