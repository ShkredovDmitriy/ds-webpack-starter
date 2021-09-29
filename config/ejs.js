module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.ejs$/,
          loader: "ejs-loader",
          options: {
            esModule: false
          }
        }
      ]
    }
  };
};
