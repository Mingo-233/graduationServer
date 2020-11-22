var express = require('express');
var personRouter = express.Router();
var mongoose = require('mongoose');
// lean属性的作用：转换mongoose查询结果类型，从MongooseDocuments转换为JS Object，从而便于我们修改查询结果。
// 查询返回的数据实际上是MongooseDocuments对象（mongoose自己封装的一个对象）。 
var patchMongoose = require('mongoose-lean');
patchMongoose(mongoose);
// 导入url系统模块 用于处理url地址 
// const url = require('url');
const { Form } = require('../database/formData');

const { Form1 } = require('../database/formData1');
const { Form2 } = require('../database/formData2');
const { Form3 } = require('../database/formData3');
const { Form4 } = require('../database/formData4');
const { Form5 } = require('../database/formData5');


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
// (async () => {
//     let result1 = await handle1()
//     let result2 = await handle2()
//     let result3 = await handle3()
//     let result4 = await handle4()
//     let result5 = await handle5()
//     const resultSummary = Object.assign({}, result1, result2, result3, result4, result5)
//     console.log(resultSummary);
//     Form.create(resultSummary).then(() => {
//         console.log('合并表单创建成功');
//     })
//         .catch((err) => {
//             console.log(err);
//         })
// })()

// (async () => {
//     let Result = await Form.findOne({ StudentID: 2017010888 }).lean()
//     let score = 0
//     let array = Result.Q21.concat(Result.Q23, Result.Q24, Result.Q25, Result.Q26)
//     array.forEach(item => {
//         score += Number(item)
//     });
//     console.log(array);
//     console.log(score);

// })()
personRouter.get('/personCheck1/:id', async (req, res) => {
    const id = req.params.id;
    let Result = await Form1.findOne({ StudentID: id }).lean()
    let score = 0
    let array = Result.Q9.concat(Result.Q10)
    array.forEach(item => {
        score += Number(item)
    });
    console.log(score);
    const data = {
        'score': score,
        'total': 50
    }
    res.send(data)
})
personRouter.get('/personCheck2/:id', async (req, res) => {
    const id = req.params.id;
    let Result = await Form2.findOne({ StudentID: id }).lean()
    let score = 0
    let array = Result.Q12.concat(Result.Q13, Result.Q14, Result.Q15, Result.Q16, Result.Q17)
    array.forEach(item => {
        score += Number(item)
    });
    const data = {
        'score': score,
        'total': 47
    }
    console.log(data);
    res.send(data)
})
personRouter.get('/personCheck3/:id', async (req, res) => {
    const id = req.params.id;
    let Result = await Form3.findOne({ StudentID: id }).lean()
    let score = 0
    let array = Result.Q21.concat(Result.Q23, Result.Q24, Result.Q25, Result.Q26)
    array.forEach(item => {
        score += Number(item)
    });
    const data = {
        'score': score,
        'total': 79
    }
    console.log(data);
    res.send(data)
})
module.exports = personRouter;
