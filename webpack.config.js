var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: __dirname + "/src/App.js",
    output: {
        path: __dirname + "/dist",
        filename: "App.js"
    },
    watch: true,
    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        colors: true,
        inline: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({mangle: false, compress: {warnings: false}}),
    ]
};