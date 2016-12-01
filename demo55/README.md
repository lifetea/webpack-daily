css-loader 和 style-loader
===========================
##安装
    作者:lifetea
    邮箱:494886251@qq.com

    安装 css-loader :  
    npm install css-loader --save-dev
    安装 style-loader :
    npm install style-loader --save-dev
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
###style-loader    
####作用:     
    通过style-loader把css内容插入到页面当中
####用法:    
    
    1.js中引入:
    var css = require("style!css!./app.css");
    2.在webpack配置中loader:
    loaders:[
     {
         test:/\.css$/,
         loader:'style-loader!css-loader'
     }   
    

    
    