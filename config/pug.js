module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          // loader: 'pug-loader',
          // options: {
          //   pretty: true,
          // },
          oneOf: [
            // это применяется к `<template lang="pug">` в компонентах Vue
            {
              resourceQuery: /^\?vue/,
              use: ["pug-plain-loader"]
            },
            // это применяется к импортам pug внутри JavaScript
            {
              use: ["pug-loader"]
            }
          ]
        }
      ]
    }
  };
};
