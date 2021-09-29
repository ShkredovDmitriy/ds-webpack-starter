module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: ["raw-loader"]
        }
      ]
    }
  };
};
