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
    Q20: {
        type: Array,
        required: true
    },
    Q21: {
        type: Array,
        required: true
    },
    Q22: {
        type: Array,
        required: true
    },
    Q23: {
        type: Array,
        required: true
    },
    Q24: {
        type: Array,
        required: true
    },
    Q25: {
        type: Array,
        required: true
    },
    Q26: {
        type: Array,
        required: true
    },
    Q27: {
        type: Array,
        required: true
    },
    Q28: {
        type: Array,
        required: true
    },
    Q29: {
        type: Array,
        required: true
    }
})


const Form3 = mongoose.model('Form3', formSchema);
// Form.create({
//     sex:'男',
//     nation:'汉族',
//     major:'物联网工程'
// }).then(() => {console.log('表单数据库创建成功');})
// .catch((err)=>{console.log('表单数据库创建失败',err)})

module.exports = {
    Form3
}