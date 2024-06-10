 
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.optimization = {
        minimizer: [
         new  TerserPlugin({
            terserOptions: { keep_fnames: true } //this line is :muscle:
        })
        ]
    };
    return config;
  }