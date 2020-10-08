var express = require('express');
var formRouter = express.Router();
const {Form} = require('../database/formData');
formRouter.post('/',
    async function (req,res,next) {
        res.send('表单数据接受成功')
        console.log(req.body);
        const params = req.body
        await Form.create({
            sex:params.sex,
            nation:params.nations,
            major:params.major,
            education:params.education,
            profession:params.profession,
            Q6:params.Q6,
            Q7:params.Q7,
            Q8:params.Q8,
            Q9:params.Q9,
            Q10:params.Q10,
            Q11:params.Q11,
            Q12:params.Q12,
            Q13:params.Q13,
            Q14:params.Q14,
            Q15:params.Q15,
            Q16:params.Q16,
            Q17:params.Q17,
            Q18:params.Q18,
            Q19:params.Q19,
            Q20:params.Q20,
            Q21:params.Q21,
            Q22:params.Q22,
            Q23:params.Q23,
            Q24:params.Q24,
            Q25:params.Q25,
            Q26:params.Q26,
            Q27:params.Q27,
            Q28:params.Q28,
            Q29:params.Q29,
            Q30:params.Q30,
            Q31:params.Q31,
            Q32:params.Q32,
            Q33:params.Q33,
            Q34:params.Q34,
            Q35:params.Q35,
            Q36:params.Q36,
            Q37:params.Q37,
            Q38:params.Q38,
            Q39:params.Q39,
            Q40:params.Q40,
            Q41:params.Q41,
            Q42:params.Q42,
            Q43:params.Q43,
            Q44:params.Q44,
            Q45:params.Q45
        })
        console.log('创建成功咯');
    }
)


module.exports = formRouter ;