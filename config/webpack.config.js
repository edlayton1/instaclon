const path = require('path') ;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');



module.exports = {
    entry: {
        home: path.resolve(__dirname,'../src/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
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
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.js$/,
                use: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            }
        ]
    },
        plugins: [
        new HtmlWebpackPlugin({
            title: 'babel_example',
            inject:true,
            template: './src/public/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin({
            title: 'hot_module',
            inject:true,
            template: './src/public/index.html',
            filename: './index.html'
        })
    ]
}