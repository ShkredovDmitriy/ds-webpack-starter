const postCSSConfig = {
  ident: 'postcss',
  // <= this line
  plugins() {
    return [autoprefixer({ browsers: ['last 2 versions'] })];
  },
};
