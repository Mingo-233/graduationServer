const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    sex: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    StudentID: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    Q36: {
        type: Array,
        required: true
    },
    Q37: {
        type: Array,
        required: true
    },
    Q38: {
        type: Array,
        required: true
    },
    Q39: {
        type: Array,
        required: true
    },
    Q40: {
        type: Array,
        required: true
    },
    Q41: {
        type: Array,
        required: true
    },
    Q42: {
        type: Array,
        required: true
    },
    Q43: {
        type: Array,
        required: true
    },
    Q44: {
        type: Array,
        required: true
    },
    Q45: {
        type: String
    }
})


const Form5 = mongoose.model('Form5', formSchema);
// Form.create({
//     sex:'男',
//     nation:'汉族',
//     major:'物联网工程'
// }).then(() => {console.log('表单数据库创建成功');})
// .catch((err)=>{console.log('表单数据库创建失败',err)})

module.exports = {
    Form5
}