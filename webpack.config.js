const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/app.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()

    // new webpack.ProvidePlugin({
    //   $: "./node_modules/jquery/dist/jquery.min.js",
    //   jQuery: "./node_modules/jquery/dist/jquery.min.js",
    //   "window.jQuery": "./node_modules/jquery/dist/jquery.min.js"
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: ["css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: "file-loader",
        options: { name: "[name].[ext]?[hash]" }
      }
    ]
  },
  devServer: {
    port: 3005
  }
};
