const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: /.*_sprite\.svg/,
          loader: "svg-sprite-loader",
          options: {
            extract: true,
            publicPath: "images/"
          }
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin({
        plainSprite: true
      })
    ]
  };
};

// const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
// const path = require("path");
// module.exports = function() {
//   return {
//     module: {
//       rules: [
//         {
//           test: /\.svg$/,
//           loader: "svg-sprite-loader",
//           options: {
//             extract: true,
//             spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`,
//             publicPath: "sprites/"
//           }
//         }
//       ]
//     },
//     plugins: [new SpriteLoaderPlugin()]
//   };
// };
