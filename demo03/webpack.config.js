/**
 * Created by lifetea on 2016/11/17.
 * email: 494886251@qq.com
 * github: https://github.com/lifetea
 */
module.exports = {
    context:'./app',
    entry:{
        page1:'./index.js',
        page2:['./bundle-1.js','./bundle-2.js']
    },
    output:{
        filename:'[name].js',
        path:'./dist',
        chunkFilename:'[id].bundle.js'
    }
};