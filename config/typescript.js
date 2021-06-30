const path = require("path");
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loaders: ["babel-loader", "ts-loader"],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    }
  };
};
