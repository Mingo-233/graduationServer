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
    Q12: {
        type: Array,
        required: true
    },
    Q13: {
        type: Array,
        required: true
    },
    Q15: {
        type: Array,
        required: true
    },
    Q16: {
        type: Array,
        required: true
    },
    Q17: {
        type: Array,
        required: true
    },
    Q18: {
        type: Array,
        required: true
    },
    Q19: {
        type: Array,
        required: true
    }
})


const Form2 = mongoose.model('Form2', formSchema);
// Form.create({
//     sex:'男',
//     nation:'汉族',
//     major:'物联网工程'
// }).then(() => {console.log('表单数据库创建成功');})
// .catch((err)=>{console.log('表单数据库创建失败',err)})

module.exports = {
    Form2
}