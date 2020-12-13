"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arrayAddition = arrayAddition;
exports.arrayAdditionSwitch = arrayAdditionSwitch;
exports.arrayAdditionBar = arrayAdditionBar;
exports.arrayThreePin = arrayThreePin;
exports.arreyMergeFunc = arreyMergeFunc;

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
// 柱状图 多个数组的对应项相加 转化为百分比 percentage选项最高分
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
    }, {
        name: '不同意',
        value: 0
    }]
    const b = JSON.parse(JSON.stringify(a))
    const c = JSON.parse(JSON.stringify(a))
    for (const key in data) {
        data[key].forEach((item, index) => {
            if (index === 0) {
                if (item == 2) {
                    a[0].value += 1
                } else {
                    a[1].value += 1
                }
            } else if (index === 1) {
                if (item == 2) {
                    b[0].value += 1
                } else {
                    b[1].value += 1
                }
            } else {
                if (item == 2) {
                    c[0].value += 1
                } else {
                    c[1].value += 1
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