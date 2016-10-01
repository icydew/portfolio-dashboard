module.exports = {
  entry: './css/scss/main.scss',
  output: {
    filename: 'main.css',
    path: './css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};