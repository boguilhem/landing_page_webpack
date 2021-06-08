const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

module.exports = {
    mode: mode,

    entry: './app/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
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
    devServer: {
        // contentBase: "./app",
        hot: true,
    }

};