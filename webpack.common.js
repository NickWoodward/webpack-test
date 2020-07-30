const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        common: './src/js/common.js',
        index: './src/js/index.js',
        about: './src/js/about.js',
        admin: './src/js/admin.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.ejs',
            chunks: ['index', 'common']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.ejs',
            chunks: ['about', 'common']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin.html',
            template: './src/admin.ejs',
            chunks: ['admin', 'common']
        })
    ]
}