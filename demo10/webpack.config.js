/**
 * Created by lifetea on 2016/11/19.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./src/entry',
    output:{
        filename:'main.js',
        path:'./dist',
        // publicPath:'./app/src'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader:"style-loader!css-loader"
            },
        ]
    }
};
