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
const html = require("./config/html");
const ejs = require("./config/ejs");
const aliases = require("./config/aliases");
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
const vue = require("./config/vue");
const favicon = require("./config/favicon");
const typescript = require("./config/typescript");

const PATHS = {
  source: path.join(__dirname, "dev"),
  build: path.join(__dirname, "build")
};

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    let extension = "pug";
    const templateFiles = fs.readdirSync(
      path.resolve(__dirname, templateDir, item)
    );
    if (templateFiles.includes(name + ".html")) {
      extension = "html";
    } else if (templateFiles.includes(name + ".ejs")) {
      extension = "ejs";
    }
    const html = new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(
        __dirname,
        `${templateDir}/${name}/${name}.${extension}`
      ),
      chunks: [`${name}`],
      inject: true
    });
    return html;
  });
}

function generateEntryPoints(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  const entryObject = {};
  for (let i = 0; i < templateFiles.length; i++) {
    const pageDirName = templateFiles[i];
    const jsFiles = fs.readdirSync(
      path.resolve(__dirname, templateDir + "/" + pageDirName)
    );
    for (let j = 0; j < jsFiles.length; j++) {
      const parts = jsFiles[j].split(".");
      const name = parts[0];
      const ext = parts[1];
      if (ext === "js" || ext === "ts") {
        entryObject[name] = path.resolve(
          __dirname,
          `${templateDir}/${pageDirName}/${name}.${ext}`
        );
      }
    }
  }
  return entryObject;
}

const htmlPages = generateHtmlPlugins("./dev/pages");
const entriesObject = generateEntryPoints("./dev/pages");

const commonDev = merge([
  {
    entry: entriesObject,
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
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "dev/"),
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: [".ts", ".tsx", ".js"]
    }
  },
  pug(),
  html(),
  ejs(),
  images(),
  sprites(),
  fonts(),
  babel(),
  vue()
]);

const commonProd = merge([
  {
    entry: entriesObject,
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
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "dev/"),
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: [".ts", ".tsx", ".js"]
    }
  },
  pug(),
  html(),
  ejs(),
  images(),
  sprites(),
  fonts(),
  babel(),
  vue()
]);

module.exports = function(env, argv) {
  if (argv.mode === "production") {
    return merge([commonProd, typescript(), extractCSS(), favicon()]);
  }
  if (argv.mode === "development") {
    return merge([
      commonDev,
      typescript(),
      devserver(),
      sass(),
      less(),
      css(),
      sourceMap()
    ]);
  }
};
