const common = require("./webpack.common");
const { merge } = require("webpack-merge");
// const WriteFilePlugin = require("write-file-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
    output: {
        path: path.join(__dirname, "dev"),
    },
    // plugins: [new WriteFilePlugin()],
    devServer: {
        openPage: 'admin'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
});
