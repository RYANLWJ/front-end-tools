const TerserPlugin = require("terser-webpack-plugin"); // 引入压缩插件
const path = require("path");
module.exports = {
  mode: "none", // 因为默认是production 默认会进行压缩

  entry: {
    index: [
      "babel-polyfill",
      "./lib/Array.js", 
    ],
    "index.min": [
      "babel-polyfill",
      "./lib/Array.js", 
    ],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 使用压缩插件
        include: /\.min\.js$/,
      }),
    ],
  },
};
