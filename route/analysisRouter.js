var express = require('express');
var AnalyRouter = express.Router();
//import { arrayAddition, arrayAdditionSwitch, arrayAdditionBar } from '../lib/compiled'
const { arrayAddition, arrayAdditionSwitch, arrayAdditionBar, arrayThreePin,
    arreyMergeFunc, foreachClasses } = require('../lib/compiled')

const { Form } = require('../database/formData');
const { Form1 } = require('../database/formData1');
const { Form2 } = require('../database/formData2');
const { Form3 } = require('../database/formData3');
const { Form4 } = require('../database/formData4');
const { Form5 } = require('../database/formData5');
(async () => {
    const query = {
        colleges: '信息与智能工程学院', classes: ['物联网工程', '通信工程'],
        Qnumber: 'Q13'
    }
    // const XYresult = await Form2.find({ college: query.colleges })
    // let sumXYresult = arreyMergeFunc(XYresult)
    // console.log(sumXYresult);
    // let sum = await foreachClasses(query, 'Form2', 'polar')
    // sum.unshift(sumXYresult)
    // console.log(sum);

}
)()
//基础信息表格
AnalyRouter.get('/analysis0', async (req, res) => {
    console.log(req.query);
    let query = req.query;
    let result
    if (query.college === 'All') {
        result = await Form.find()
    } else {
        result = await Form.find({ college: query.college })
    }
    var newArr = []
    result.forEach((item) => {
        const params = {
            sex: item.sex,
            age: item.age,
            grade: item.grade,
            school: item.school,
            college: item.college,
            major: item.major,
            StudentID: item.StudentID,
            profession: item.profession,
            GPA: item.Q17,
            match: item.Q33,
            matchTime: item.Q34,
            matchResult: item.Q35
        }
        newArr.push(params)
    })
    res.send(newArr)
})
//评论
AnalyRouter.get('/comment', async (req, res) => {
    const result = await Form5.find()
    var newArr = []
    result.forEach((item) => {
        if (item.Q45 && item.Q45switch) {
            newArr.push(item.Q45)
        }
    })
    res.send(newArr)
})
// Q9
AnalyRouter.get('/analysis1', async (req, res) => {
    console.log(req.query);
    let query = req.query
    if (query.colleges) {
        const XYresult = await Form1.find({ college: query.colleges })
        if (XYresult.length === 0) {
            res.send({
                status: 0,
                msg: '该学院下暂未数据,请重新选择'
            })
            return
        }
        let sumXYresult = arrayAddition(XYresult, query.Qnumber)
        let sum = await foreachClasses(query, 'Form1', 'radar')
        if (sum.status === 0) {
            res.send(sum)
            return
        }
        sum.unshift(sumXYresult)
        res.send(sum)
    } else {
        res.send({ msg: '传入参数为空，请重新选择' })
    }
})
AnalyRouter.get('/analysis1Default', async (req, res) => {
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

// Q10 条形
AnalyRouter.get('/analysis2', async (req, res) => {
    console.log(req.query);
    let query = req.query
    if (query.colleges) {
        const XYresult = await Form1.find({ college: query.colleges })
        if (XYresult.length === 0) {
            res.send({
                status: 0,
                msg: '该学院下暂未数据,请重新选择'
            })
            return
        }
        let sumXYresult = arrayAdditionBar(XYresult, query.Qnumber, query.percentage)
        console.log(sumXYresult);
        let sum = await foreachClasses(query, 'Form1', 'bar')
        if (sum.status === 0) {
            res.send(sum)
            return
        }
        sum.unshift(sumXYresult)
        res.send(sum)
    } else {
        res.send({ msg: '传入参数为空，请重新选择' })
    }
})
AnalyRouter.get('/analysis2Default', async (req, res) => {
    const result = await Form1.find()
    const resultWlw = await Form1.find({ major: '物联网工程' })
    const resultTx = await Form1.find({ major: '通信工程' })
    const resultJxdz = await Form1.find({ major: '机械电子工程' })

    let sumQ10 = arrayAdditionBar(result, 'Q10', 4)
    let sumQ10Wlw = arrayAdditionBar(resultWlw, 'Q10', 4)
    let sumQ10Tx = arrayAdditionBar(resultTx, 'Q10', 4)
    let sumQ10Jxdz = arrayAdditionBar(resultJxdz, 'Q10', 4)


    const SUM10 = {
        sumQ10: sumQ10,
        sumQ10Wlw: sumQ10Wlw,
        sumQ10Tx: sumQ10Tx,
        sumQ10Jxdz: sumQ10Jxdz
    }
    res.send(SUM10)
})
// Q11 饼图
AnalyRouter.get('/analysis3', async (req, res) => {
    const result = await Form1.find()
    var sum = [{ value: 0, name: "与专业老师交流" }, { value: 0, name: "高年级在校生介绍" }, { value: 0, name: "专业认知讲座与课程" }, { value: 0, name: "专业相关网站和论坛" }, { value: 0, name: "专业相关书籍" }, { value: 0, name: "与校外专业人士交流" }];
    const sumQ11 = arrayAdditionSwitch(result, 'Q11', sum)
    res.send(sumQ11)
})
// Q12 3个饼图
AnalyRouter.get('/analysis12', async (req, res) => {
    const result = await Form2.find()
    var newArr = []
    result.forEach((item) => {
        newArr.push(item['Q12'])
    })
    const sumQ12 = arrayThreePin(newArr)
    res.send(sumQ12)
})
// Q13-15
AnalyRouter.get('/analysis13', async (req, res) => {
    console.log(req.query);
    let query = req.query
    if (query.colleges) {
        const XYresult = await Form2.find({ college: query.colleges })
        if (XYresult.length === 0) {
            res.send({
                status: 0,
                msg: '该学院下暂未数据,请重新选择'
            })
            return
        }
        let sumXYresult = arreyMergeFunc(XYresult)
        let sum = await foreachClasses(query, 'Form2', 'polar')
        if (sum.status === 0) {
            res.send(sum)
            return
        }
        sum.unshift(sumXYresult)
        console.log(sum);
        res.send(sum)
    } else {
        res.send({ msg: '传入参数为空，请重新选择' })
    }
})
AnalyRouter.get('/analysis13Default', async (req, res) => {
    // const result = await Form2.find()
    const resultWlw = await Form2.find({ major: '物联网工程' })
    const resultTx = await Form2.find({ major: '通信工程' })
    const resultJxdz = await Form2.find({ major: '机械电子工程' })
    const sumQ13Wlw = arreyMergeFunc(resultWlw)
    const sumQ13TX = arreyMergeFunc(resultTx)
    const sumQ13Jxdz = arreyMergeFunc(resultJxdz)
    const sumQ13 = {
        sumQ13Wlw: sumQ13Wlw,
        sumQ13TX: sumQ13TX,
        sumQ13Jxdz, sumQ13Jxdz
    }
    res.send(sumQ13)
})
// Q18
AnalyRouter.get('/analysis18', async (req, res) => {
    const result = await Form2.find()
    const params = [{ value: 0, name: '完成作业' }, { value: 0, name: '除作业外的自习' }, { value: 0, name: '接受校内学习指导' }, { value: 0, name: '接受校外培训' }]
    const sumQ18 = arrayAdditionSwitch(result, 'Q18', params)
    res.send(sumQ18)
})
// Q19
AnalyRouter.get('/analysis19', async (req, res) => {
    const result = await Form2.find()
    const params = [{ value: 0, name: '对所学内容缺乏学习动力' }, { value: 0, name: '缺乏老师的督促和指导' }, { value: 0, name: '缺乏自学方法' }, { value: 0, name: '贪玩旷课较多' },
    { value: 0, name: '跟不上课程进度' }, { value: 0, name: '竞争强，学习压力大' }, { value: 0, name: '学习氛围不浓' }, { value: 0, name: '没有遇到学习问题' }]
    const sumQ19 = arrayAdditionSwitch(result, 'Q19', params)
    res.send(sumQ19)
})
// Q21
AnalyRouter.get('/analysisRadarForm3', async (req, res) => {
    console.log(req.query);
    let query = req.query
    if (query.colleges) {
        const XYresult = await Form3.find({ college: query.colleges })
        if (XYresult.length === 0) {
            res.send({
                status: 0,
                msg: '该学院下暂未数据,请重新选择'
            })
            return
        }
        let sumXYresult = arrayAddition(XYresult, query.Qnumber)
        let sum = await foreachClasses(query, 'Form3', 'radar')
        if (sum.status === 0) {
            res.send(sum)
            return
        }
        sum.unshift(sumXYresult)
        res.send(sum)
    } else {
        res.send({ msg: '传入参数为空，请重新选择' })
    }
})
AnalyRouter.get('/analysis21Default', async (req, res) => {
    const result = await Form3.find()
    const resultWlw = await Form3.find({ major: '物联网工程' })
    const resultTx = await Form3.find({ major: '通信工程' })
    const resultJxdz = await Form3.find({ major: '机械电子工程' })
    let sumQ21 = arrayAddition(result, 'Q21')
    let sumQ21Wlw = arrayAddition(resultWlw, 'Q21')
    let sumQ21Tx = arrayAddition(resultTx, 'Q21')
    let sumQ21Jxdz = arrayAddition(resultJxdz, 'Q21')
    let average = []
    let averageWlw = []
    let averageTx = []
    let averageJxdz = []
    sumQ21.forEach((item, index) => {
        average.push(item[0])
        averageWlw.push(item[0])
        averageTx.push(item[0])
        averageJxdz.push(item[0])
    });
    const SUM21 = {
        sumQ21: sumQ21,
        sumQ21Wlw: sumQ21Wlw,
        sumQ21Tx: sumQ21Tx,
        sumQ21Jxdz: sumQ21Jxdz
    }
    console.log(SUM21);
    res.send(SUM21)
})

// Q22
AnalyRouter.get('/analysis22', async (req, res) => {
    const result = await Form3.find()
    var newArr = []
    result.forEach((item) => {
        newArr.push(item['Q22'])
    })
    const sumQ22 = arrayThreePin(newArr)
    console.log(sumQ22);
    res.send(sumQ22)
})

// Q23
AnalyRouter.get('/analysis23Default', async (req, res) => {
    const result = await Form3.find()
    const resultWlw = await Form3.find({ major: '物联网工程' })
    const resultTx = await Form3.find({ major: '通信工程' })
    const resultJxdz = await Form3.find({ major: '机械电子工程' })
    let sumQ23 = arrayAddition(result, 'Q23')
    let sumQ23Wlw = arrayAddition(resultWlw, 'Q23')
    let sumQ23Tx = arrayAddition(resultTx, 'Q23')
    let sumQ23Jxdz = arrayAddition(resultJxdz, 'Q23')
    let average = []
    let averageWlw = []
    let averageTx = []
    let averageJxdz = []
    sumQ23.forEach((item, index) => {
        average.push(item[0])
        averageWlw.push(item[0])
        averageTx.push(item[0])
        averageJxdz.push(item[0])
    });
    const SUM23 = {
        sumQ23: sumQ23,
        sumQ23Wlw: sumQ23Wlw,
        sumQ23Tx: sumQ23Tx,
        sumQ23Jxdz: sumQ23Jxdz
    }
    console.log(SUM23);
    res.send(SUM23)
})

// Q26
AnalyRouter.get('/analysis26', async (req, res) => {
    const result = await Form3.find()
    let sumQ26 = arrayAdditionBar(result, 'Q26', 2)
    console.log(sumQ26);
    res.send(sumQ26)
})

// Q27
AnalyRouter.get('/analysis27', async (req, res) => {
    const result = await Form3.find()
    const params = [{ value: 0, name: '课程内容及专业知识' }, { value: 0, name: '讨论学期论文或项目的想法' }, { value: 0, name: '职业规划、职业从业指导' }, { value: 0, name: '人生观、价值观等问题' },
    { value: 0, name: '以上均没有' }]
    const sumQ27 = arrayAdditionSwitch(result, 'Q27', params)
    res.send(sumQ27)
})
// Q28
AnalyRouter.get('/analysis28', async (req, res) => {
    const result = await Form3.find()
    const params = [{ value: 0, name: '学校或学院提供的辅导课程或相关活动' }, { value: 0, name: '学业指导网站相关服务' }, { value: 0, name: '任课教师在授课过程中帮助解决相关问题' }, { value: 0, name: '本科生导师帮助解决相关问题' },
    { value: 0, name: '辅导员帮助解决相关问题' }, { value: 0, name: '没有接受过任何学业指导' }]
    const sumQ28 = arrayAdditionSwitch(result, 'Q28', params)
    res.send(sumQ28)
})
// Q29
AnalyRouter.get('/analysis29', async (req, res) => {
    const result = await Form3.find()
    const params = [{ value: 0, name: '与专业实际结合度低' }, { value: 0, name: '老师指导反馈不足' }, { value: 0, name: '动手操作机会少' }, { value: 0, name: '实习实践内容陈旧' },
    { value: 0, name: '实习实践场地、设备不完善' }, { value: 0, name: '与同学间交流讨论机会少' }, { value: 0, name: '最终成果考核方式不完善' }]
    const sumQ29 = arrayAdditionSwitch(result, 'Q29', params)
    res.send(sumQ29)
})
//Q30
AnalyRouter.get('/analysisRadarForm4', async (req, res) => {
    console.log(req.query);
    let query = req.query
    if (query.colleges) {
        const XYresult = await Form4.find({ college: query.colleges })
        if (XYresult.length === 0) {
            res.send({
                status: 0,
                msg: '该学院下暂未数据,请重新选择'
            })
            return
        }
        let sumXYresult = arrayAddition(XYresult, query.Qnumber)
        let sum = await foreachClasses(query, 'Form4', 'radar')
        if (sum.status === 0) {
            res.send(sum)
            return
        }
        sum.unshift(sumXYresult)
        res.send(sum)
    } else {
        res.send({ msg: '传入参数为空，请重新选择' })
    }
})
AnalyRouter.get('/analysis30Default', async (req, res) => {
    const result = await Form4.find()
    const resultWlw = await Form4.find({ major: '物联网工程' })
    const resultTx = await Form4.find({ major: '通信工程' })
    const resultJxdz = await Form4.find({ major: '机械电子工程' })
    let sumQ30 = arrayAddition(result, 'Q30')
    let sumQ30Wlw = arrayAddition(resultWlw, 'Q30')
    let sumQ30Tx = arrayAddition(resultTx, 'Q30')
    let sumQ30Jxdz = arrayAddition(resultJxdz, 'Q30')
    let average = []
    let averageWlw = []
    let averageTx = []
    let averageJxdz = []
    sumQ30.forEach((item, index) => {
        average.push(item[0])
        averageWlw.push(item[0])
        averageTx.push(item[0])
        averageJxdz.push(item[0])
    });
    const SUM30 = {
        sumQ30,
        sumQ30Wlw,
        sumQ30Tx,
        sumQ30Jxdz
    }
    res.send(SUM30)
})

// Q31
AnalyRouter.get('/analysis31', async (req, res) => {
    const result = await Form4.find()
    const params = [{ value: 0, name: '社会活动教育类的通识课程' }, { value: 0, name: '本专业领域的实习实践' }, { value: 0, name: '勤工助学' }, { value: 0, name: '助教助研' },
    { value: 0, name: '校园清洁' }, { value: 0, name: '社会公益活动' }, { value: 0, name: '没有参加任何劳动教育' }]
    const sumQ31 = arrayAdditionSwitch(result, 'Q31', params)
    res.send(sumQ31)
})

// Q32
AnalyRouter.get('/analysis32', async (req, res) => {
    const result = await Form4.find()
    const params = [{ value: 0, name: '形成坚定意志' }, { value: 0, name: '增强身体素质' }, { value: 0, name: '培养良好习惯' }, { value: 0, name: '增强社会责任感' },
    { value: 0, name: '形成团结合作意识' }, { value: 0, name: '了解相关知识和技能' }, { value: 0, name: '维护校园卫生环境' }]
    const sumQ32 = arrayAdditionSwitch(result, 'Q32', params)
    res.send(sumQ32)
})


//Q36-39
AnalyRouter.get('/analysisRadarForm5', async (req, res) => {
    console.log(req.query);
    let query = req.query
    if (query.colleges) {
        const XYresult = await Form5.find({ college: query.colleges })
        if (XYresult.length === 0) {
            res.send({
                status: 0,
                msg: '该学院下暂未数据,请重新选择'
            })
            return
        }
        let sumXYresult = arrayAddition(XYresult, query.Qnumber)
        let sum = await foreachClasses(query, 'Form5', 'radar')
        if (sum.status === 0) {
            res.send(sum)
            return
        }
        sum.unshift(sumXYresult)
        res.send(sum)
    } else {
        res.send({ msg: '传入参数为空，请重新选择' })
    }
})



// Q42
AnalyRouter.get('/analysis42', async (req, res) => {
    const result = await Form5.find()
    const params = [{ value: 0, name: '数量满足教学需求' }, { value: 0, name: '功能满足教学需求' }, { value: 0, name: '管理与维护方便使用' }, { value: 0, name: '设施更新及时' },
    { value: 0, name: '以上均不满足' }]
    const sumQ42 = arrayAdditionSwitch(result, 'Q42', params)
    res.send(sumQ42)
})
// Q43
AnalyRouter.get('/analysis43', async (req, res) => {
    const result = await Form5.find()
    const params = [{ value: 0, name: '数量满足实践需求（如满足实验的安排和分组情况等)' }, { value: 0, name: '功能满足实践需求' }, { value: 0, name: '有良好的管理与运行维护机制，方便使用' }, { value: 0, name: '设备或材料更新及时' },
    { value: 0, name: '以上均不满足' }]
    const sumQ43 = arrayAdditionSwitch(result, 'Q43', params)
    res.send(sumQ43)
})
// Q44
AnalyRouter.get('/analysis44', async (req, res) => {
    const result = await Form5.find()
    const params = [{ value: 0, name: '满足日常学习需求' }, { value: 0, name: '管理规范' }, { value: 0, name: '共享程度高' }, { value: 0, name: '设备及资源更新及时' },
    { value: 0, name: '以上均不满足' }]
    const sumQ44 = arrayAdditionSwitch(result, 'Q44', params)
    res.send(sumQ44)
})
module.exports = AnalyRouter;


