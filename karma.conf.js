var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ]

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'dots' ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!cssnext-loader'
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
        ],
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
