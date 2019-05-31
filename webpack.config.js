var webpack = require('webpack');
module.exports = {
    entry: [
        './app.page'
    ],
    output: {
        path: __dirname + '/build',
        filename: "app.page"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};
