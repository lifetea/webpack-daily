/**
 * Created by lifetea on 2016/11/26.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:'./src/entry.js',
    output:{
        path:'./dist',
        filename:'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader"
            }) }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}
