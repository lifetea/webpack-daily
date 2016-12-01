/**
 * Created by lifetea on 2016/12/1.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */

module.exports = {
    context:__dirname +'/src',
    entry:'./entry',
    output:{
        path:__dirname + '/dist',
        filename:'[name].js'
    },
    externals:[
        {
            'moment':'moment'
        }
    ]
}