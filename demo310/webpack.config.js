/**
 * Created by lifetea on 2016/12/2.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */

module.exports = {
    context:__dirname +'/src',
    entry:'./entry.js',
    output:{
        path:'./dist',
        filename:'[name].js'
    },
    profile:true,
    cache:true,
}