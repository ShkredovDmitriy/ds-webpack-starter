const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './dev/assets/favicon/favicon.png',
        cache: true,
        publicPath: '/build',
        outputPath: '',
        prefix: 'favicon/',
        inject: true,
        icons: {
          android: [
            "android-chrome-96x96.png"
          ],
          appleIcon: [
            "apple-touch-icon-120x120.png",
            "apple-touch-icon-precomposed.png",
            "apple-touch-icon.png"
          ],
          appleStartup: false,
          coast: [
            "coast-228x228.png"
          ],
          favicons: [
            "favicon-16x16.png",
            "favicon-32x32.png",
            "favicon-48x48.png",
            "favicon.ico"
          ],
          firefox: [
            "firefox_app_128x128.png",
          ],
          windows: [
            "mstile-144x144.png",
          ],
          yandex: [
            "yandex-browser-50x50.png"
          ]
        }
      }),
    ],
  };
};
