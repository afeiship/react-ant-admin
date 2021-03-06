(function() {

  var path = require('path');
  var webpack = require('webpack');
  var $ = require('./webpack.base');
  var config = require('./webpack_config.json');

  $.initMultiHtmlWebpackPlugins();

  var hotReloadEntries = {};
  var hotReloadPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ];

  hotReloadPlugins = hotReloadPlugins.concat($.plugins);

  module.exports = {
    entry: $.entry,
    output: {
      path: path.join(__dirname,'dist'),
      filename: '[name].js',
      chunkFilename: '[id].js',
      minify: false,
      publicPath: '/'
    },
    plugins: hotReloadPlugins,
    module: $.module,
    vue: $.vue,
    babel: $.babel,
    resolve: $.resolve,
    devtool: '#source-map',
    devServer: {
      hot: true,
      port: 8080,
      proxy: {
        '/helper': {
           //target: 'http://train.dcpai.cn:80',
          target: 'http://192.168.10.253:80',
          pathRewrite: { '^/helper': '/helper' },
          changeOrigin: true
        }
      }
    }
  };


}());
