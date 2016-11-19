# 设置执行环境


###context:

设置执行环境会影响读取(entry)目录 并不影响输出目录

    module.exports = {
        context:'./app',
        entry:'./entry',
        output:{
            filename:'[name].js',
            // path:'./dist'
        }
    };
    