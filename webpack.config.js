var settings = require('./webpack.settings.js');
var path = require('path');
// READ ENV
require('dotenv').config();


function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

var front = function(argv) {

  let plugins = ['es6', 'ignore-moment-locales', 'define'];
  let rules = ['tsx', 'html', 'mustache', 'yaml', 'svg', 'scss'];

  if(argv.mode !== 'development'){
    plugins.push('UglifyJSPlugin')
  }

  return {
    entry: {
      webcomponent: './src/webcomponent.js',
    },
    devtool: settings.devtool(argv.mode),
    output: settings.output('[name]/[name].js'),
    node: {
      fs: 'empty'
    },
    devServer: settings.devServer,
    module: {
      rules: settings.loadRules(rules)
    },
    plugins: settings.loadPlugins(plugins),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@component": srcPath("src")
      },
    },
  }
};

module.exports = function(env, argv){
  return front(argv || env);
}
