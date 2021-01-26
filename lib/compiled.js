"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const { Form1 } = require('../database/formData1');
const { Form2 } = require('../database/formData2');
const { Form3 } = require('../database/formData3');
const { Form4 } = require('../database/formData4');
const { Form5 } = require('../database/formData5');
exports.arrayAddition = arrayAddition;
exports.arrayAdditionSwitch = arrayAdditionSwitch;
exports.arrayAdditionBar = arrayAdditionBar;
exports.arrayThreePin = arrayThreePin;
exports.arreyMergeFunc = arreyMergeFunc;
exports.foreachClasses = foreachClasses;



// 多个数组的对应项相加
function arrayAddition(array, Qnumber) {
    var newArr = [];
    array.forEach(function (item) {
        newArr.push(item[Qnumber]);
    });
    var sum = [];
    var n = newArr.length;

    for (var key in newArr) {
        newArr[key].forEach(function (value, i) {
            if (sum[i] == null || sum[i] == '') {
                sum[i] = 0;
            }
            sum[i] += parseInt(value) / n;
            // 保留2位小数
            sum[i] = Math.round(sum[i] * 100) / 100;
        });
    }
    return sum;
}
/* 柱状图 对应内容相加 switch语句
 参数格式 sum=[{value:x,name:'abc'}] */
function arrayAdditionSwitch(array, Qnumber, SUM) {
    var newArr = [];
    array.forEach(function (item) {
        newArr.push(item[Qnumber]);
    });
    let sum = SUM;
    for (var key in newArr) {
        newArr[key].forEach(function (value) {
            switch (value) {
                case sum[0].name:
                    sum[0].value += 1;
                    break;
                case sum[1].name:
                    sum[1].value += 1;
                    break;
                case sum[2].name:
                    sum[2].value += 1;
                    break;
                case sum[3].name:
                    sum[3].value += 1;
                    break;
                case sum[4].name:
                    sum[4].value += 1;
                    break;
                case sum[5].name:
                    sum[5].value += 1;
                    break;
                case sum[6].name:
                    sum[6].value += 1;
                    break;
                case sum[7].name:
                    sum[7].value += 1;
                    break;
                default:
                    break;
            }
        });
    }
    return sum;
}
/* 柱状图 多个数组的对应项相加 转化为百分比 percentage选项最高分 
percentage  选项分值
*/
function arrayAdditionBar(array, Qnumber, percentage) {
    var newArr = [];
    array.forEach(function (item) {
        newArr.push(item[Qnumber]);
    });
    var sum = [];
    var n = newArr.length;
    for (var key in newArr) {
        newArr[key].forEach(function (value, i) {
            if (sum[i] == null || sum[i] == '') {
                sum[i] = 0;
            }
            sum[i] += parseInt(value) / n / percentage * 100;
            // 保留2位小数
            sum[i] = Math.round(sum[i] * 100) / 100;
        });
    }
    return sum;
}
// 输出格式 a  [ { name: '同意', value: 4 }, { name: '不同意', value: 2 } ],
function arrayThreePin(data) {
    const a = [{
        name: '同意',
        value: 0
    },
    {
        name: '较为同意',
        value: 0
    },
    {
        name: '不太同意',
        value: 0
    }, {
        name: '不同意',
        value: 0
    }]
    //数组深拷贝
    const b = JSON.parse(JSON.stringify(a))
    const c = JSON.parse(JSON.stringify(a))
    for (const key in data) {
        data[key].forEach((item, index) => {
            if (index === 0) {
                switch (item) {
                    case '3':
                        a[0].value += 1
                        break;
                    case '2':
                        a[1].value += 1
                        break;
                    case '1':
                        a[2].value += 1
                        break;
                    default:
                        a[3].value += 1
                        break;
                }
            } else if (index === 1) {
                switch (item) {
                    case '3':
                        b[0].value += 1
                        break;
                    case '2':
                        b[1].value += 1
                        break;
                    case '1':
                        b[2].value += 1
                        break;
                    default:
                        b[3].value += 1
                        break;
                }
            } else {
                switch (item) {
                    case '3':
                        c[0].value += 1
                        break;
                    case '2':
                        c[1].value += 1
                        break;
                    case '1':
                        c[2].value += 1
                        break;
                    default:
                        c[3].value += 1
                        break;
                }
            }
        })
    }
    return [a, b, c]
}

//数组合并
function arreyMergeFunc(data) {
    var newArr = []
    data.forEach((item) => {
        newArr.push(item['Q13'])
        newArr.push(item['Q14'])
        newArr.push(item['Q15'])
    })
    //此时newArr  [ ["2","1"], ["2","1"], ["3","3","2","0","2"] ]
    const arreyMerge = newArr[0].concat(newArr[1], newArr[2])
    return arreyMerge
}
//返回 柱状图 数据 遍历参数，对每个参数进行数据库检索
function foreachClasses(data, databaseName, type) {
    let database
    switch (databaseName) {
        case 'Form1':
            database = Form1
            break;
        case 'Form2':
            database = Form2
            break;
        case 'Form3':
            database = Form3
            break;
        case 'Form4':
            database = Form4
            break;
        case 'Form5':
            database = Form5
            break;
        default:
            break;
    }
    return new Promise((resolve, reject) => {
        let n = data.classes.length
        let result = []
        data.classes.forEach(async (item, index) => {
            database.find({ major: item }).then((res) => {
                if (res.length === 0) {
                    resolve({
                        status: 0,
                        msg: item + "专业暂无数据，请重新选择"
                    })
                    return
                }
                if (type === 'bar') {
                    let barData = arrayAdditionBar(res, data.Qnumber, data.percentage)
                    result.push(barData)
                } else if (type === 'radar') {
                    let radarData = arrayAddition(res, data.Qnumber)
                    result.push(radarData)
                }
                //因现只出现三种类型需要调用 所有这边先写else 若出现第四种，再添加elseif判断
                //第三种为极坐标 polar
                else {
                    let polarData = arreyMergeFunc(res, data.Qnumber)
                    result.push(polarData)
                }
                if (index === n - 1) {
                    resolve(result)
                }
            })
                .catch((err) => {
                    reject(err)
                })
        })
    })
}

//返回 雷达图 数据 遍历参数，对每个参数进行数据库检索
