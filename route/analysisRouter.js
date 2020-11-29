var express = require('express');
var AnalyRouter = express.Router();

const { Form } = require('../database/formData');
const { Form1 } = require('../database/formData1');

(async () => {
    const result = await Form1.find()
    const resultWlw = await Form1.find({ major: '物联网工程' })
    const resultTx = await Form1.find({ major: '通信工程' })
    const resultJxdz = await Form1.find({ major: '机械电子工程' })
    let sumQ9 = arrayAddition(result, 'Q9')
    let sumQ9Wlw = arrayAddition(resultWlw, 'Q9')
    let sumQ9Tx = arrayAddition(resultTx, 'Q9')
    let sumQ9Jxdz = arrayAddition(resultJxdz, 'Q9')
    let average = []
    let averageWlw = []
    let averageTx = []
    let averageJxdz = []

    sumQ9.forEach((item, index) => {
        average.push(item[0])
        averageWlw.push(item[0])
        averageTx.push(item[0])
        averageJxdz.push(item[0])
    });
    console.log(sumQ9);
    // const SUM9 = {
    //     sumQ9: sumQ9,
    //     sumQ9Wlw: sumQ9Wlw,
    //     sumQ9Tx: sumQ9Tx,
    //     sumQ9Jxdz: sumQ9Jxdz
    // }
    // res.send(SUM9)
}
)()
//基础信息表格
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
// Q9
AnalyRouter.get('/analysis1', async (req, res) => {
    const result = await Form1.find()
    const resultWlw = await Form1.find({ major: '物联网工程' })
    const resultTx = await Form1.find({ major: '通信工程' })
    const resultJxdz = await Form1.find({ major: '机械电子工程' })
    let sumQ9 = arrayAddition(result, 'Q9')
    //物联网
    let sumQ9Wlw = arrayAddition(resultWlw, 'Q9')
    let sumQ9Tx = arrayAddition(resultTx, 'Q9')
    let sumQ9Jxdz = arrayAddition(resultJxdz, 'Q9')
    let average = []
    let averageWlw = []
    let averageTx = []
    let averageJxdz = []

    sumQ9.forEach((item, index) => {
        average.push(item[0])
        averageWlw.push(item[0])
        averageTx.push(item[0])
        averageJxdz.push(item[0])


    });
    const SUM9 = {
        sumQ9: sumQ9,
        sumQ9Wlw: sumQ9Wlw,
        sumQ9Tx: sumQ9Tx,
        sumQ9Jxdz: sumQ9Jxdz
    }
    res.send(SUM9)
})
// Q10
AnalyRouter.get('/analysis2', async (req, res) => {
    const result = await Form1.find()
    const resultWlw = await Form1.find({ major: '物联网工程' })
    const resultTx = await Form1.find({ major: '通信工程' })
    const resultJxdz = await Form1.find({ major: '机械电子工程' })
    let sumQ10 = arrayAddition(result, 'Q10')
    let sumQ10Wlw = arrayAddition(resultWlw, 'Q10')
    let sumQ10Tx = arrayAddition(resultTx, 'Q10')
    let sumQ10Jxdz = arrayAddition(resultJxdz, 'Q10')
    const SUM10 = {
        sumQ10: sumQ10,
        sumQ10Wlw: sumQ10Wlw,
        sumQ10Tx: sumQ10Tx,
        sumQ10Jxdz: sumQ10Jxdz
    }
    res.send(SUM10)
})
// Q11
AnalyRouter.get('/analysis3', async (req, res) => {
    const result = await Form1.find()
    const sumQ11 = arrayAdditionBar(result, 'Q11')
    res.send(sumQ11)
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

function arrayAddition(array, Qnumber) {
    var newArr = []
    array.forEach((item) => {
        newArr.push(item[Qnumber])
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
    return sum
}

function arrayAdditionBar(array, Qnumber) {
    var newArr = []
    array.forEach((item) => {
        newArr.push(item[Qnumber])
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
    return sum
}
module.exports = AnalyRouter;


