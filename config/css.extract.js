// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// module.exports = function(paths) {
//   return {
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           include: paths,
//           use: ExtractTextPlugin.extract({
//             publicPath: '../',
//             fallback: 'style-loader',
//             use: ['css-loader','sass-loader'],
//           }),
//         },
//         {
//           test: /\.css$/,
//           include: paths,
//           use: ExtractTextPlugin.extract({
//             fallback: 'style-loader',
//             use: 'css-loader',
//           }),
//         },
//       ],
//     },
//     plugins: [
//       new ExtractTextPlugin({filename:'./css/[name].css', ignoreOrder: false}),
//     ],
//   };
// };

const path = require('path');
const ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            // ExtractTextPlugin.loader,
            {
              loader: ExtractTextPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, 'postcss.config.js'),
                },
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: './css/[name].css?[hash]',
      }),
    ],
  };
};
