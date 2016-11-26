# 设置执行环境


###context:

运行webpack命令的目录（必须为绝对路径并不更改输出环境）

    var path = require('path')
    module.exports = {
        context:path.resolve('./','app'),
        entry:'./entry',
        output:{
            filename:'[name].js',
            path:'./dist'
        }
    };
    