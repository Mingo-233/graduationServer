const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const loginRouter = express.Router();
const { Accounts } = require('../database/account');
var mongoose = require('mongoose');
const { Menus } = require('../database/menus');
// lean属性的作用：转换mongoose查询结果类型，从MongooseDocuments转换为JS Object，从而便于我们修改查询结果。
// 查询返回的数据实际上是MongooseDocuments对象（mongoose自己封装的一个对象）。 
var patchMongoose = require('mongoose-lean');
patchMongoose(mongoose);

// (async () => {
//     Accounts.find().populate('menuName').then(doc => {
//         console.log(doc);
//     })
// }
// )()
loginRouter.post('/', async (req, res, next) => {
    const { username, password, token } = req.body
    const data = await Accounts.findOne({ username: username, password: password }).lean()
    if (data) {
        //不存在token
        if (!token) {
            let token = generateToken(data.username, data.password)
            res.send({ 'status': 1, 'msg': '登陆成功', 'token': token, 'user_name': req.body.username })     //反给前台
        } else {
            console.log('存在token 验证失败');
        }
    } else {
        res.status(202).send({ 'status': 0, 'msg': '登录失败,该账号不存在' });
    }
})
loginRouter.post('/DetailsByKey', async (req, res, next) => {
    //{token:xxxx}
    console.log(req.body);
    const { token } = req.body
    console.log('执行了获取信息');

    if (token) {
        fs.readFile(path.join(__dirname, '../rsa/public_key.pem'), 'utf8', (error, public_doc) => {
            if (error) throw error
            /*
            iss：Issuer，发行者
            exp：Expiration time，过期时间
            iat：Issued at，发行时间 
            */
            var deencode = jwt.verify(token, public_doc, (err, decode) => {
                if (err) {
                    //失效
                    res.status(202).send({ 'status': 0, 'msg': '登录失效,请重新登录' })
                } else {
                    Accounts.findOne({ username: decode.username }).lean().then((result) => {
                        res.status(200).send({
                            'status': 1, 'msg': '登陆成功', 'info': {
                                Name: result.name,
                                Key: token,
                                Id: token
                            }
                        })
                    })
                        .catch(() => {
                            console.log('loginRouter接口出现意外错误');
                        })

                    //console.log(decode);

                    // {
                    //     username: 'admin',
                    //     password: 'qwer1',
                    //     iat: 1609848427,
                    //     exp: 1609852027
                    //   }
                }
            })
        })
    }
})
loginRouter.post('/UserMenu', async (req, res, next) => {
    console.log(req.body);
    const { Key ,} = req.body
    if (Key) {
        const menuList = await Menus.findOne().lean()
        console.log(menuList);
        res.send(menuList.menuName)
    }
})
//生成token的方法
function generateToken(username, password) {
    // let created = Math.floor(Date.now() / 1000);
    //读取生成的私钥文件
    let private_key = fs.readFileSync(path.join(__dirname, '../rsa/private_key.pem'))
    let token = jwt.sign({ username, password }, private_key, {
        algorithm: 'RS256',
        expiresIn: 60 * 60 * 1 //1小时过期
    });
    return token;
}

module.exports = loginRouter;