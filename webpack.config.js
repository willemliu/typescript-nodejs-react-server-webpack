const webpack = require("webpack");
const path = require('path');

module.exports = {

  devtool: "source-map",
  entry: {
    main: "./src/main.tsx?"
  },
  output: {
    path       : path.join(__dirname, 'dist'),
    filename   : '[name].js',
    publicPath : './dist'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};