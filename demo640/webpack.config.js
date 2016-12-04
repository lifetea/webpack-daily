/**
 * Created by lifetea on 2016/11/26.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
let webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./src/entry.js',
    output:{
        path:'./dist',
        filename:'bundle.js',
    },
    module: {
        loaders: [
        ]
    },
    plugins: [

    ]
}
