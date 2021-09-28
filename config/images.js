const path = require("path");
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|webp)$/,
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]"
          }
        }
      ]
    }
  };
};
