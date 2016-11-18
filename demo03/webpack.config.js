/**
 * Created by lifetea on 2016/11/17.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
module.exports = {
    entry:{
        main:'./entry.js',
    },
    output:{
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
};