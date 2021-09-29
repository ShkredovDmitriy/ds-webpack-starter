//спрайт генерировался, но не вставлялся в html webpack plugin
// const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
// const path = require("path");
// module.exports = function() {
//   return {
//     module: {
//       rules: [
//         {
//           test: /\.svg$/,
//           include: /.*_sprite\.svg/,
//           loader: "svg-sprite-loader",
//           options: {
//             extract: true,
//             publicPath: "images/"
//           }
//         }
//       ]
//     },
//     plugins: [
//       new SpriteLoaderPlugin({
//         plainSprite: true
//       })
//     ]
//   };
// };

const SvgSpriteHtmlWebpackPlugin = require("svg-sprite-html-webpack");

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: SvgSpriteHtmlWebpackPlugin.getLoader()
        }
      ]
    },
    plugins: [
      new SvgSpriteHtmlWebpackPlugin({
        includeFiles: ["dev/assets/sprites/*.svg"]
      })
    ]
  };
};
