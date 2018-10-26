var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var WebpackEnv = require('./webpack.env.js');
// READ ENV
require('dotenv').config();

var settings = {
  plugins: {
    'UglifyJSPlugin': new UglifyJSPlugin(
      {
        sourceMap: true
      }
    ),
    'ignore-moment-locales': new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    'define': new webpack.DefinePlugin({
      'ENV': JSON.stringify(WebpackEnv(process.env.BUILD))
    }),
    'define-direct': new webpack.DefinePlugin(WebpackEnv(process.env.BUILD)),
    'es6': new webpack.ProvidePlugin({
      Promise: 'es6-promise-promise'
    })
  },
  rules: {
    'tsx': {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    },
    'html': {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },
    'mustache': {
      test: /\.mustache$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },
    'yaml': {
      test: /\.ya?ml$/,
      loader: 'yml-loader',
      query: {
        keysToRemove: ['private_key'],
      },
    },
    'svg': {
      test: /\.(svg)$/i,
      loaders: [
        'html-loader'
      ]
    },
    'scss': {
      test: /\.scss$/,
      use: [{
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }
  }
}

module.exports = {
  devServer: {
    contentBase: __dirname + "/dist",
    inline: false,
    host: "0.0.0.0",
    port: 4200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: function(filename, context) {
    return {
      globalObject: "this",
      filename: filename,
      path: context ? __dirname + "/dist/" + context : __dirname + "/dist/",
      libraryTarget: 'umd'
    }
  },
  devtool: function(mode){
    if(mode === 'production'){
      return undefined;
    } else if (mode === 'development'){
      return 'eval-source-map';
    } else {
      return 'source-map'
    }
  },
  loadRules: function(rules) {
    return rules.map(function(rule) {
      return settings.rules[rule];
    });
  },
  loadPlugins: function(plugins) {
    return plugins.map(function(plugin) {
      return settings.plugins[plugin];
    });
  }
}
