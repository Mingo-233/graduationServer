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
        Form1.find().lean()
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/* 查询数据库 
  参数 :第一个参数为查询条件，无传false，第二个参数为查询的表格名
  用法 ：
查询具体某条数据 let data = await search(2017010888, Form1)   
查询全部数据  let data = await search(false, Form1)  */
async function search(id, FormName) {
    if (id) {
        return await FormName.findOne({ StudentID: id }).lean()
    } else {
        return await FormName.find().lean()
    }
}
(async () => {

    /*    遍历所有5个答题记录的数据库取出所有学号，并去重 */
    // let result1 = await search(false, Form1)
    // let result2 = await search(false, Form2)
    // let result3 = await search(false, Form3)
    // let result4 = await search(false, Form4)
    // let result5 = await search(false, Form5)
    // let id1 = result1.map(item => {
    //     return item.StudentID
    // });
    // let id2 = result2.map(item => {
    //     return item.StudentID
    // });
    // let id3 = result3.map(item => {
    //     return item.StudentID
    // });
    // let id4 = result4.map(item => {
    //     return item.StudentID
    // });
    // let id5 = result5.map(item => {
    //     return item.StudentID
    // });
    // let idsSum = [...id1, ...id2, ...id3, ...id4, ...id5]
    // let SetArrayLike = new Set(idsSum)
    // let studentidArray = Array.from(SetArrayLike)
    // studentidArray.forEach(async (item) => {
    //     let personData1 = await search(item, Form1)
    //     let personData2 = await search(item, Form2)
    //     let personData3 = await search(item, Form3)
    //     let personData4 = await search(item, Form4)
    //     let personData5 = await search(item, Form5)
    //     const personDataSummary = Object.assign({}, personData1, personData2, personData3, personData4, personData5)
    //     console.log(personDataSummary);
    //     Form.create(personDataSummary).then(() => {
    //         console.log('合并表单创建成功');
    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // });




    //删除所有数据 慎用！！！
    // Form.deleteMany({}).then((result) => {
    //     console.log(result);
    // })

})()
module.exports = mergeRouter;

