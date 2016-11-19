# 多个文件


###output:
多文件输出的时候需要在output.filename 中设置 [name]或[id]


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
    