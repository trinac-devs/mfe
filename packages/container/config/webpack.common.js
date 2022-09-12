module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // NOTE: Makes sure that we want any file that ends with m or js to be processed by babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
