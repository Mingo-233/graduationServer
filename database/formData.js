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
    Q9: {
        type: Array,
        required: true
    },
    Q10: {
        type: Array,
        required: true
    },
    Q11: {
        type: Array,
        required: true
    },
    careerPlan: {
        type: String,
        required: false
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
    },
    Q30: {
        type: Array,
        required: true
    },
    Q31: {
        type: Array,
        required: true
    },
    Q32: {
        type: Array,
        required: true
    },
    Q33: {
        type: Array,
        required: true
    },
    Q34: {
        type: Array,
        required: true
    },
    Q35: {
        type: Array,
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


const Form = mongoose.model('Form', formSchema);
// Form.create({
//     sex:'男',
//     nation:'汉族',
//     major:'物联网工程'
// }).then(() => {console.log('表单数据库创建成功');})
// .catch((err)=>{console.log('表单数据库创建失败',err)})

module.exports = {
    Form
}