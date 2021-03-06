(function() {

  var webpack = require('webpack');
  var path = require('path');
  var $ = require('./webpack.base');
  var config = require('./webpack_config.json');
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var PurifyCSSPlugin = require('purifycss-webpack-plugin');
  var CopyWebpackPlugin = require('copy-webpack-plugin');
  var productPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: config.venderName,
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.(js|css|less|scss)$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, 'node_modules')
          ) === 0
        )
      }
    }),
    new PurifyCSSPlugin({
      paths: [
        'app/index.html'
      ],
      purifyOptions: {
        minify: true,
        info: true
      }
    }),
    new CopyWebpackPlugin([{
        from: __dirname + '/scripts/components/ckeditor',
        to:'../dist/scripts/components/ckeditor',
        toType:'dir'
    }])
  ];

  $.initMultiHtmlWebpackPlugins();

  productPlugins = $.plugins.concat(productPlugins);

  module.exports = {
    entry: $.entry,
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name]-[hash:6].js',
      chunkFilename: '[id]-[hash:6].js',
      minify: false,
      publicPath: '/'
    },
    plugins: productPlugins,
    module: $.module,
    vue: $.vue,
    babel: $.babel,
    resolve: $.resolve
  };


}());
