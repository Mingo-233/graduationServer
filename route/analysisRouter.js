var express = require('express');
var AnalyRouter = express.Router();

const { Form } = require('../database/formData');
AnalyRouter.get('/analysis0', async (req, res) => {
    const result = await Form.find()
    var newArr = []
    result.forEach((item) => {
        const params = {
            sex: item.sex,
            nation: item.nation,
            major: item.major,
            education: item.education,
            profession: item.profession
        }
        newArr.push(params)
    })
    res.send(newArr)
})
// Q6
AnalyRouter.get('/analysis1', async (req, res) => {
    const result = await Form.find()
    var newArr = []
    result.forEach((item) => {
        newArr.push(item.Q6)
    })
    var sum = []
    const n = newArr.length
    // 多个数组的对应项相加
    for (const key in newArr) {
        newArr[key].forEach((value, i) => {
            if (sum[i] == null || sum[i] == '') {
                sum[i] = 0
            }
            sum[i] += parseInt(value) / n
            // 保留2位小数
            sum[i] = Math.round(sum[i] * 100) / 100
        })
    }
    res.send(sum)
})
// Q7
AnalyRouter.get('/analysis2', async (req, res) => {
    const result = await Form.find()
    var newArr = []
    result.forEach((item) => {
        newArr.push(item.Q7)
    })
    var sum = []
    const n = newArr.length
    // 多个数组的对应项相加
    for (const key in newArr) {
        newArr[key].forEach((value, i) => {
            if (sum[i] == null || sum[i] == '') {
                sum[i] = 0
            }
            sum[i] += parseInt(value) / n
            // 保留2位小数
            sum[i] = Math.round(sum[i] * 100) / 100
        })
    }
    res.send(sum)
})
// Q8
AnalyRouter.get('/analysis3', async (req, res) => {
    const result = await Form.find()
    var newArr = []
    result.forEach((item) => {
        newArr.push(item.Q8)
    })
    const sum = [
        { value: 0, name: "与专业老师交流" },
        { value: 0, name: "高年级在校生介绍" },
        { value: 0, name: "专业认知讲座与课程" },
        { value: 0, name: "专业相关网站和论坛" },
        { value: 0, name: "专业相关书籍" },
        { value: 0, name: "与校外专业人士交流" }
    ]
    for (const key in newArr) {
        newArr[key].forEach((value) => {
            switch (value) {
                case '与专业老师交流':
                    sum[0].value += 1
                    break;
                case '高年级在校生介绍':
                    sum[1].value += 1
                    break;
                case '专业认知讲座与课程':
                    sum[2].value += 1
                    break;
                case '专业相关网站和论坛':
                    sum[3].value += 1
                    break;
                case '专业相关书籍':
                    sum[4].value += 1
                    break;
                case '与校外专业人士交流':
                    sum[5].value += 1
                    break;
                default:
                    break;
            }
        })
    }
    res.send(sum)
})
// Q12
AnalyRouter.get('/analysis12', async (req, res) => {
    const result = await Form.find()
    var newArr = []
    result.forEach((item) => {
        newArr.push(item.Q12)
    })
    var sum = []
    const n = newArr.length
    // 多个数组的对应项相加
    for (const key in newArr) {
        newArr[key].forEach((value, i) => {
            if (sum[i] == null || sum[i] == '') {
                sum[i] = 0
            }
            sum[i] += parseInt(value) / n
            // 保留2位小数
            sum[i] = Math.round(sum[i] * 100) / 100
        })
    }
    res.send(sum)
})



module.exports = AnalyRouter;


