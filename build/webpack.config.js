const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const baseDir = path.resolve(__dirname, '../');
const HelloWorldPlugin = require(path.resolve(baseDir, './webpack_plugins/hello-word'));

module.exports = {
    entry: {
        // index: './src/index.js',
        // print: './src/print.js',
        home: path.resolve(baseDir, 'src/pages/home/home.js'),
        vendor: [
            'vue'
        ]
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(baseDir, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': path.resolve(baseDir, 'src'),
            'pages': path.resolve(baseDir, 'src/pages')
        }
    },
    // devtool: 'inline-source-map',
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: './dist',
        publicPath: '/',
        port: 8008,
        open: true // 是否打开浏览器
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: baseDir,       　　　　　　　　　　//根目录
            verbose: true,        　　　　　　　　　　//开启在控制台输出信息
            dry: false
        }),
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new HtmlWebpackPlugin({
            template: path.resolve(baseDir, 'src/pages/home/home.html'),
            filename: 'home.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     // sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // new webpack.NamedModulesPlugin(),
        new webpack.HashedModuleIdsPlugin(), // 与NamedModulesPlugin插件功能一样，但生成的名字比NamedModulesPlugin短很多，建议使用
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // Specify the common bundle's name.
        }),
        new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
    }),
        // 提取css到独立文件
        new ExtractTextPlugin('home.css'),
        // 自定义插件
        new HelloWorldPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue/, // vue-loader配置 https://vue-loader.vuejs.org/zh-cn/
                use: {
                    loader: 'vue-loader',
                    options: {
                        postcss: [require('autoprefixer')],
                        loaders: {
                            less: 'vue-style-loader!css-loader!less-loader',
                            postcss: 'vue-style-loader!css-loader',
                            css: 'vue-style-loader!css-loader',
                            stylus: 'vue-style-loader!css-loader!stylus-loader',
                            styl: 'vue-style-loader!css-loader!stylus-loader'
                        },
                        // 提取css到独立文件配置
                        extractCSS: true
                    }
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['env'],
                    //     cacheDirectory: true
                    // }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
}
