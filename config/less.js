const autoprefixer = require("autoprefixer");

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.less$/,
          include: paths,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer()],
                sourceMap: true
              }
            },
            {
              loader: "resolve-url-loader"
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  };
};
