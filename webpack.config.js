const TerserPlugin = require("terser-webpack-plugin"); // 引入压缩插件
const path = require("path");
const glob = require("glob");
module.exports = {
  mode: "none", 

  entry: {
    index: glob.sync("./lib/index.js"),
    "index.min": glob.sync("./lib/index.js"),
  },
  output: {
    globalObject:"this",
    libraryTarget: "umd", // 
    // library:"tools",//输出库的对象名
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
