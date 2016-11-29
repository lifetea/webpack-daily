/**
 * Created by lifetea on 2016/11/29.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */

module.exports = {
    entry:'./src/entry.js',
    output:{
        path:'./dist',
        filename:'bundle.js',
    },
    module: {
        noParse: [/moment/],
        loaders: [
        ]
    },
    resolve:{
        alias:{
            moment : 'moment/min/moment.min.js'
        }
    }
}
