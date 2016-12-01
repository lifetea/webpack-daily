# Output（输出）

###filename 输出文件
指定路径和文件名
    
    filename: '/javascripts/[name].js'
###path 输出路径
webpack打包后，生成的文件会打包放在path字段所指定的目录中。

    
###publicPath 
        module.exports = {
            entry:'./entry.js',
            output:{
                filename:'main.js'
            }
        };
    
###安装插件
    

        npm i extract-text-webpack-plugin --save-dev
        
代码
