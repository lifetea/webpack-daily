/**
 * Created by lifetea on 2016/11/29.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
var path = require('path')
module.exports = {
    context:path.resolve('./','src'),
    entry:{
        entry:'./entry.js',
    },
    output:{
        path:'./dist',
        filename:'[name]-[hash:6].js?',
    }
}
