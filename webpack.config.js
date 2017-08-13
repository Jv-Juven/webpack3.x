const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const baseDir = path.resolve(__dirname);

module.exports = {
    entry: {
        // index: './src/index.js',
        // print: './src/print.js',
        home: path.resolve(baseDir, 'src/page/home/home.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist'
    // },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
}
