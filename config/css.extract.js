const ExtractTextPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: ExtractTextPlugin.loader,
              options: {
                publicPath: "../"
              }
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer()],
                sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: ExtractTextPlugin.loader,
              options: {
                publicPath: "../"
              }
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer()],
                sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "./css/[name].css?[hash]"
      })
    ]
  };
};
