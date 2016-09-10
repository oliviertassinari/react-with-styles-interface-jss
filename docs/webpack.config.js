// @flow weak

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import UnusedFilesWebpackPlugin from 'unused-files-webpack-plugin';

export default function(options) {
  const webpackConfig = {
    profile: false,
    entry: [],
    output: {
      path: path.join(__dirname, 'dist'), // No used by webpack dev server
      publicPath: '',
      filename: 'app.js',
    },
    resolve: {
      extensions: ['', '.js'],
      root: path.join(__dirname, 'src'),
      alias: {
        'react-with-styles-interface-jss': path.resolve(__dirname, '../src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.config.environment),
        },
      }),
    ],
    module: {},
    devtool: (options.config.environment === 'development') ? 'eval' : null,
  };

  if (options.config.enableStats) {
    webpackConfig.profile = true;
    webpackConfig.plugins.push(new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: [/node_modules[\\\/]react/],
    }));
  }

  if (options.config.environment === 'development') {
    const ip = require('ip');

    webpackConfig.entry = [
      `webpack-dev-server/client?http://${ip.address()}:${options.port}`, // WebpackDevServer
      'webpack/hot/only-dev-server',
      './src/app.js',
    ];

    webpackConfig.plugins = webpackConfig.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new UnusedFilesWebpackPlugin({
        failOnUnused: options.config.failOnUnusedFile,
        pattern: 'src/**/*.*',
        globOptions: {
          ignore: [
            'src/**/*.native.js',
          ],
        },
      }),
    ]);

    webpackConfig.module.loaders = [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ];
  } else if (options.config.environment === 'production') {
    webpackConfig.entry = [
      './src/app.js',
    ];

    webpackConfig.plugins = webpackConfig.plugins.concat([
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      }),
    ]);

    webpackConfig.module.loaders = [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ];
  }

  return webpackConfig;
}
