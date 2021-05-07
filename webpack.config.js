const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const fs = require("fs");
const pug = require("./config/pug");
const devserver = require("./config/devserver");
const sass = require("./config/sass");
const extractCSS = require("./config/css.extract");
const css = require("./config/css");
const sourceMap = require("./config/sourceMap");
const lintJS = require("./config/js.lint");
const lintCSS = require("./config/sass.lint");
const images = require("./config/images");
const filesLocations = require("./config/filesLocations");
const fonts = require("./config/fonts");
const babel = require("./config/babel");
const favicon = require("./config/favicon");

const PATHS = {
  source: path.join(__dirname, "dev"),
  build: path.join(__dirname, "build")
};

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = "pug";
    const html = new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(
        __dirname,
        `${templateDir}/${name}/${name}.${extension}`
      ),
      inject: true
    });
    return html;
  });
}

const htmlPages = generateHtmlPlugins("./dev/pages");

const commonDev = merge([
  {
    entry: {
      main: `${PATHS.source}/app/main.js`
    },
    output: {
      path: PATHS.build,
      filename: "./js/[name].js?[hash]"
    },
    plugins: [
      new webpack.ProvidePlugin({
        Promise: "es6-promise-promise"
      }),
      new Dotenv(),
      new WriteFilePlugin(),
      new CopyPlugin(filesLocations)
    ].concat(htmlPages),
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false
        })
      ]
    }
  },
  pug(),
  images(),
  fonts(),
  babel()
]);

const commonProd = merge([
  {
    entry: {
      main: `${PATHS.source}/app/main.js`
    },
    output: {
      path: PATHS.build,
      filename: "./js/[name].js?[hash]"
    },
    plugins: [
      new webpack.ProvidePlugin({
        Promise: "es6-promise-promise"
      }),
      new Dotenv(),
      new WriteFilePlugin(),
      new CopyPlugin(filesLocations)
    ].concat(htmlPages),
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  },
  pug(),
  images(),
  fonts(),
  babel(),
  favicon()
]);

module.exports = function(env, argv) {
  if (argv.mode === "production") {
    return merge([commonProd, extractCSS(), favicon()]);
  }
  if (argv.mode === "development") {
    return merge([commonDev, devserver(), sass(), css(), sourceMap()]);
  }
};
