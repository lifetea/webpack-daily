/**
 * Created by lifetea on 2016/11/19.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
var path = require('path');
module.exports = {
    context:'./app',
    entry:'./src/entry',
    output:{
        filename:'main.js',
        path:'./app/dist',
        publicPath:'./app/src'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};
