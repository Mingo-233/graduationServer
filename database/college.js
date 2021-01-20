const mongoose = require('mongoose');
const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true
    },
    majorClass: {
        type: Array,
        required: true
    }
})


const collegeData = mongoose.model('collegeData', collegeSchema);
// collegeData.create({
//     collegeName: '大数据与软件工程学院',
//     majorClass: ['数据科学与大数据技术', '数据科学与大数据技术（专升本）', '计算机科学与技术', '统计学', '软件工程', '软件工程（专升本）', '计算机科学与技术（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })

// collegeData.create({
//     collegeName: '法学院',
//     majorClass: ['法学', '电子商务及法律', '社会工作', '法学（专升本）',]
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '商学院',
//     majorClass: ['国际经济与贸易', '会计学', '金融学', '财务管理', '会展经济与管理', '国际商务', '金融工程', '资产评估', '金融学（专升本）', '财务管理（专升本）',]
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '设计艺术与建筑学院',
//     majorClass: ['建筑学', '动画', '视觉传达设计', '环境设计', '产品设计', '风景园林', '产品设计（专升本）', '环境设计（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '生物与环境学院',
//     majorClass: ['生物技术', '环境科学', '生物工程', '食品科学与工程', '食品质量与安全', '环境工程', '生物制药', '食品质量与安全（专升本）', '生物制药（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '外语学院',
//     majorClass: ['英语', '日语', '商务英语', '商务英语（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '文化与传播学院',
//     majorClass: ['汉语言文学', '新闻学', '广告学', '编辑出版学', '网络与新媒体', '新闻学（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '物流与电子商务学院',
//     majorClass: ['市场营销（本）', '工商管理（本）', '物流管理', '电子商务', '供应链管理', '跨境电子商务', '电子商务（专升本）', '物流管理（专升本）', '工商管理（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '信息与智能学院',
//     majorClass: ['通信工程', '电子信息工程（本）', '电气工程及其自动化', '物联网工程', '机械电子工程', '网络空间安全', '机械电子工程（专升本）', '电子信息工程（专升本）', '电气工程及其自动化（专升本）']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })
// collegeData.create({
//     collegeName: '中德设计与传播学院',
//     majorClass: ['视觉传达设计（2+2中德双学位）', '广告学（2+2中德双学位）', '会展经济与管理（2+2中德双学位）', '国际经济与贸易（2+2中外双学位)']
// }).then(() => { console.log('学院专业数据集创建成功'); })
//     .catch((err) => { console.log('学院专业数据集创建失败', err) })

// ['大数据与软件工程学院','法学院','商学院','设计艺术与建筑学院','生物与环境学院','外语学院','文化与传播学院','物流与电子商务学院','信息与智能学院','中德设计与传播学院',]
module.exports = {
    collegeData
}