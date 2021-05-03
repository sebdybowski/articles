const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './root.html'
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    optimization: {
        usedExports: true,
    },
};
