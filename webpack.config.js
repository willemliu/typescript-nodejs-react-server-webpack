const webpack = require("webpack");
const path = require('path');

console.info('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));

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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'react-redux': 'preact-redux'
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }/*,
      { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }*/
    ]
  },
  externals: {
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*"react": "React",
    "react-dom": "ReactDOM",
    "react-redux": "ReactRedux"*/
  }
};