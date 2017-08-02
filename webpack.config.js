const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // devtool: 'inline-source-map',
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: './dist',
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new HtmlWebpackPlugin({
            template: path.resolve(baseDir, 'src/page/home/home.html'),
            filename: 'home.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     // sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue/,
                use: ['vue-loader']
            }
        ]
    },
}