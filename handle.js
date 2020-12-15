var express = require('express');
var mergeRouter = express.Router();
var mongoose = require('mongoose');
// lean属性的作用：转换mongoose查询结果类型，从MongooseDocuments转换为JS Object，从而便于我们修改查询结果。
// 查询返回的数据实际上是MongooseDocuments对象（mongoose自己封装的一个对象）。 
var patchMongoose = require('mongoose-lean');
patchMongoose(mongoose);
const { Form } = require('./database/formData');

const { Form1 } = require('./database/formData1');
const { Form2 } = require('./database/formData2');
const { Form3 } = require('./database/formData3');
const { Form4 } = require('./database/formData4');
const { Form5 } = require('./database/formData5');


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
let handle3 = async () => {
    return await Form3.findOne({ StudentID: 2017010888 }).lean()

}
let handle4 = async () => {
    return await Form4.findOne({ StudentID: 2017010888 }).lean()

}
let handle5 = async () => {
    return await Form5.findOne({ StudentID: 2017010888 }).lean()

}

(async () => {
    // let result1 = await handle1()
    // let result2 = await handle2()
    // let result3 = await handle3()
    // let result4 = await handle4()
    //let result5 = await handle5()

    //console.log(result5);
    // const resultSummary = Object.assign({}, result1, result2, result3, result4, result5)
    // console.log(resultSummary);
    // Form.create(resultSummary).then(() => {
    //     console.log('合并表单创建成功');
    // })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    let a = [1, 2, 3]
    let b = [2, 3, 4]
    let c = [3, 4, 5]
    let SetArray = new Set([...a, ...b, ...c])
    console.log(...a);
    // let test = SetArray.add()
    console.log(SetArray);
    console.log(typeof SetArray);
})()
module.exports = mergeRouter;

