const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: "development",

    entry: './app/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    'css-loader', 
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map",
    // devServer: {
    //     contentBase: "./dist",
    //     hot: true,
    // }

};