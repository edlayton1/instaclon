const path = require('path') ;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    entry: "../src/index.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    
                ]
            }
            ,
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader:'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath:'fonts/'
                    }
                }
            }
            ,{
                test:/\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
                enforce: 'pre'
            }
        ]
    },
        plugins: [
        new HtmlWebpackPlugin({
            title: 'babel_example',
            inject:true,
            template: '../src/public/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin({
            title: 'hot_module',
            inject:true,
            template: '../src/public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([{
            from: "./src/styles/style.css",
            to: ""
        }])
    ]
}