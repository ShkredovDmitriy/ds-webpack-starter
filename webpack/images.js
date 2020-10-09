module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|webp|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      ],
    },
  };
};
