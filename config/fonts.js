module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: [/\.woff$/, /\.woff2$/, /\.eot$/, /\.ttf$/],
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash:8]',
            outputPath: 'fonts',
            publicPath: '../fonts',
          },
        },
      ],
    },
  };
};