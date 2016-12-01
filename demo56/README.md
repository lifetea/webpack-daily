url-loader
===========================
##安装
    作者:lifetea
    邮箱:494886251@qq.com

    安装 url-loader :  
    npm install url-loader --save-dev

##介绍
###url-loader
####作用:
    
    通过css-loader读取 *.css 文件中的内容并返回
####用法:
    module.exports = {
        entry:{
            main:'./src/entry.js',
        },
        output:{
            filename:'[name].js',
            path:'./dist'
        },
        module:{
            loaders:[
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192'
                }
            ]
        }
    };

    