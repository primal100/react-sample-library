const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
    devtool: "source-map",
  entry: [
    './src/index.js'
  ],
  output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'react-sample-library'
   },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ] }
    ,
    {
     test: /\.(png|j?g|svg|gif)?$/,
     use: 'file-loader'
    }]
  },
    optimization: {
        minimize: false
    }
}
