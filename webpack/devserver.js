module.exports = function() {
  return {
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      stats: 'errors-only',
      overlay: true,
    },
  };
};
