url-loader
===========================
##安装
    作者:lifetea
    邮箱:494886251@qq.com

    安装 url-loader :  
    npm install url-loader --save-dev

##介绍
###css-loader
####作用:
    
    通过css-loader读取 *.css 文件中的内容并返回
####用法:
    1.js中引入:
    var css = require("css!./app.css");
    2.在webpack配置中loader:
    loaders:[
        {
            test:/\.css$/,
            loader:'style-loader'
        }

    