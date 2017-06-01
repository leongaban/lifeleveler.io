const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const dist = path.resolve(__dirname, "dist");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: [
    "./index.js"
    // the entry point of our app
  ],
  output: {
    path: dist,
    filename: "lifeleveler.bundle.js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ["css-loader", "sass-loader"],
          publicPath: dist
        })
      }
    ]
  },
  devServer: {
    hot: false,
    quiet: true,
    publicPath: "",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LifeLeveler",
      hash: true,
      template: "index.html"
    }),
    new ExtractTextPlugin({
      filename: "LifeLeveler.css",
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([{ from: 'static' }])
  ]
};