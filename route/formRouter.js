var express = require('express');
var formRouter = express.Router();
// const {Form} = require('../database/formData');
const { Form1 } = require('../database/formData1');
const { Form2 } = require('../database/formData2');
const { Form3 } = require('../database/formData3');
const { Form4 } = require('../database/formData4');
const { Form5 } = require('../database/formData5');

formRouter.post('/form1',
    function (req, res, next) {

        console.log(req.body);
        const params = req.body
        Form1.create({
            sex: params.sex,
            age: params.age,
            grade: params.grade,
            school: params.school,
            college: params.college,
            major: params.major,
            StudentID: params.StudentID,
            profession: params.profession,
            Q9: params.Q9,
            Q10: params.Q10,
            Q11: params.Q11,
        }).then(() => {
            res.send('表单数据接受成功')
        })
            .catch((err) => {
                console.log(err)
                // // res.send(err.message)
                return res.send({ errMessage: err.message })
                //return res.status(400).send(err.message);

            })

    }
)
formRouter.post('/form2',
    function (req, res, next) {
        console.log(req.body);
        const params = req.body
        Form2.create({
            sex: params.sex,
            age: params.age,
            grade: params.grade,
            school: params.school,
            college: params.college,
            major: params.major,
            StudentID: params.StudentID,
            profession: params.profession,
            Q12: params.Q12,
            Q13: params.Q13,
            Q14: params.Q14,
            Q15: params.Q15,
            Q16: params.Q16,
            Q17: params.Q17,
            Q18: params.Q18,
            Q19: params.Q19
        }).then(() => {
            res.send('表单数据接受成功')
        })
            .catch((err) => {
                console.log(err)
                return res.send({ errMessage: err.message })
            })

    }
)
formRouter.post('/form3',
    function (req, res, next) {
        console.log(req.body);
        const params = req.body
        Form3.create({
            sex: params.sex,
            age: params.age,
            grade: params.grade,
            school: params.school,
            college: params.college,
            major: params.major,
            StudentID: params.StudentID,
            profession: params.profession,
            Q20: params.Q20,
            Q21: params.Q21,
            Q22: params.Q22,
            Q23: params.Q23,
            Q24: params.Q24,
            Q25: params.Q25,
            Q26: params.Q26,
            Q27: params.Q27,
            Q28: params.Q28,
            Q29: params.Q29
        }).then(() => {
            res.send('表单数据接受成功')
        })
            .catch((err) => {
                console.log(err)
                return res.send({ errMessage: err.message })
            })

    }
)
formRouter.post('/form4',
    function (req, res, next) {
        console.log(req.body);
        const params = req.body
        Form4.create({
            sex: params.sex,
            age: params.age,
            grade: params.grade,
            school: params.school,
            college: params.college,
            major: params.major,
            StudentID: params.StudentID,
            profession: params.profession,
            Q30: params.Q30,
            Q31: params.Q31,
            Q32: params.Q32,
            Q33: params.Q33,
            Q34: params.Q34,
            Q35: params.Q35
        }).then(() => {
            res.send('表单数据接受成功')
        })
            .catch((err) => {
                console.log(err)
                return res.send({ errMessage: err.message })
            })

    }
)
formRouter.post('/form5',
    function (req, res, next) {
        console.log(req.body);
        const params = req.body
        Form5.create({
            sex: params.sex,
            age: params.age,
            grade: params.grade,
            school: params.school,
            college: params.college,
            major: params.major,
            StudentID: params.StudentID,
            profession: params.profession,
            Q36: params.Q36,
            Q37: params.Q37,
            Q38: params.Q38,
            Q39: params.Q39,
            Q40: params.Q40,
            Q41: params.Q41,
            Q42: params.Q42,
            Q43: params.Q43,
            Q44: params.Q44,
            Q45: params.Q45
        }).then(() => {
            res.send('表单数据接受成功')
        })
            .catch((err) => {
                console.log(err)
                return res.send({ errMessage: err.message })
            })

    }
)
/* Q12:params.Q12,
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
 */
module.exports = formRouter;