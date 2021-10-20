const { VueLoaderPlugin } = require("vue-loader");
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  };
};
