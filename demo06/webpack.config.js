/**
 * Created by lifetea on 2016/11/17.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
module.exports = {
    entry:{
        main:'./src/entry.js',
    },
    output:{
        filename:'[name].js',
        path:'./dist'
    },
    module:{
        loaders:[
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};