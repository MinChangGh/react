var webpack = require('webpack');
var path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: [
   './app.js'
  ],
  output: {
    publicPath:'/',
    path: __dirname + '/build',
    filename: "app.js"
  },
  resolve: {
    alias: {
      '@': resolve('app'),
    }
  },
  devServer: {
    historyApiFallback: true,
    port:'9000'
    // proxy: {
    //   '/': {
    //     target: 'http://192.168.1.123:90/',
    //     changeOrigin: true,
    //     secure: false
    //   }
    // },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  }
};
