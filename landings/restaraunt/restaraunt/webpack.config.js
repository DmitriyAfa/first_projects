const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + " mode");

module.exports = {
    stats: {
        children: true,
        errorDetails: true,
    },
    mode: mode,
    entry: { //входные точки
        scripts: path.resolve(__dirname, './src2/entry.js'),
    },
    output: { //выходные точки
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/[name].js', // 'scripts/[name].[contenthash].js'
        assetModuleFilename: 'fonts/[name][ext][query]', // 'fonts/[hash][ext][query]'
        clean: true, // очистка конечной папки
    },
    optimization: {
        minimize: false,
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style/style.[contenthash].css", // "style/style.[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: "./src2/index.pug"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
                exclude: /(node_modules|bower_components)/,

            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
}