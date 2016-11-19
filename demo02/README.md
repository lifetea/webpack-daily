# 多个文件


###output:
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
    