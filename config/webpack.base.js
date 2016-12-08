const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./config');
const baseConfig = {
  _entry: {
    app: config.srcDir + '/app.js'
  },
  _output: {
    filename: 'js/[name].js',
    path: config.buildDir + '/assets/'
  },
  _module: {
    rules: [{
      test: /\.vue?$/,
      include: [
        path.resolve(config.srcDir)
      ],
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            loader: 'css-loader',
            fallbackLoader: 'vue-style-loader'
          })
        }
      }
    },
    {
      test: /\.(woff|woff2|svg|eot|ttf)?$/,
      include: [
        path.resolve(config.srcDir)
      ],
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      loader: 'file-loader',
      options: {
        name:'[name].[ext]'
      }
    },
    {
      test: /\.(png|gif|jpg|jpeg)?$/,
      include: [
        path.resolve(config.srcDir)
      ],
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ],
      loader: 'file-loader',
      options: {
        name:'../assets/[name].[ext]'
      }
    }
    ]
  },
  _resolve: {
    alias:{
      vue: 'vue/dist/vue.js'
    }
  }
};
module.exports = baseConfig;
