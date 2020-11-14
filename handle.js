var express = require('express');
var mergeRouter = express.Router();
var mongoose = require('mongoose');
// lean属性的作用：转换mongoose查询结果类型，从MongooseDocuments转换为JS Object，从而便于我们修改查询结果。
// 查询返回的数据实际上是MongooseDocuments对象（mongoose自己封装的一个对象）。 
var patchMongoose = require('mongoose-lean');
patchMongoose(mongoose);
const { Form1 } = require('./database/formData1');
const { Form2 } = require('./database/formData2');

let handle1 = async () => {
    return new Promise((resolve, reject) => {
        Form1.findOne({ StudentID: 2017010888 }).lean()
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

let handle2 = async () => {
    return await Form2.findOne({ StudentID: 2017010888 }).lean()

}

(async () => {
    let result1 = await handle1()
    let result2 = await handle2()

    // console.log(result1);
    // console.log(result2);
    const resultSummary = Object.assign({}, result1, result2)
    console.log(resultSummary);
})()
module.exports = mergeRouter;

