var express = require('express');
var QueRouter = express.Router();

const {Menus} = require('../database/menus');
const {Question} = require('../database/question');
const {Question2} = require('../database/question2');
const {Question3} = require('../database/question3');
const {Question4} = require('../database/question4');
const {Question5} = require('../database/question5');
QueRouter.get('/menus',async(req,res)=>{
        const result = await Menus.find()
        res.send(result)
    })
QueRouter.get('/questions',async(req,res)=>{
        const result = await Question.find()
        res.send(result)
    })   
QueRouter.get('/questions2',async(req,res)=>{
        const result = await Question2.find()
        res.send(result)
    })   
QueRouter.get('/questions3',async(req,res)=>{
    // 对查询的数据进行排序，1为正序，-1为倒叙
        const result = await Question3.find().sort({'index':1})
        res.send(result)
    })   
QueRouter.get('/questions4',async(req,res)=>{
        const result = await Question4.find()
        res.send(result)
    })   
QueRouter.get('/questions5',async(req,res)=>{
        const result = await Question5.find()
        res.send(result)
    })   
module.exports = QueRouter ;