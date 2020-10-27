const express = require('express')
// 引入body-parser模块 
var bodyParser = require('body-parser')
// 引入数据库模块
require('./database/conncet')
var app = express()
// 配置body-parser模块 
app.use(bodyParser.urlencoded({ extended: true }));
// require('./database/formData');
const formRouter = require('./route/formRouter');
const QueRouter = require('./route/QueRouter');
const AnalyRouter = require('./route/analysisRouter');
require('./handle')
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
    next()
})
//为路由匹配请求路径
//form为表单提交
app.use('/api/form',formRouter);
//formData为请求表单路径
app.use('/api/formData',QueRouter)

app.use('/api/analysis',AnalyRouter)

app.listen(3000)
console.log('服务器启动成功');