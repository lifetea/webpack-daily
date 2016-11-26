/**
 * Created by lifetea on 2016/11/19.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
var path = require('path')
module.exports = {
    context:path.resolve('./','app'),
    entry:'./entry',
    output:{
        filename:'[name].js',
        path:'./dist'
    }
};