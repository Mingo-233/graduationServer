var express = require('express');
var mergeRouter = express.Router();
const { Form1 } = require('../database/formData1');
const { Form2 } = require('../database/formData2');

const result1 = Form1.find({ StudentID: 2017010888 })
console.log(result);
module.exports = mergeRouter;

