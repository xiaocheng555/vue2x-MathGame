// cnpm install --save-dev babel-core  babel-loader babel-plugin-transform-object-rest-spread babel-plugin-transform-runtime babel-preset-es2015 css-loader style-loader webpack

const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js'   // --入口文件
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: resolve(__dirname, 'dist')
    },
    devtool: '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                            css: 'vue-style-loader!css-loader'
                        }
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.vue'
        ],
        alias: {
            vue: resolve(__dirname, 'node_modules', 'vue', 'dist', 'vue.min.js')
        }
    },
    devServer:{
        inline:true,
        port:8081 //端口你可以自定义
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',   // --模版文件
            favicon: 'img/favicon.ico',  // --网页图标
            hash: false
        })
    ]
};