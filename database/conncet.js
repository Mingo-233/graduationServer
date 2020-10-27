// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost/GraduateDatabase',{useNewUrlParser: true,useUnifiedTopology: true})
    .then((client)=> {
        console.log('数据库连接成功')
        // const collection = client.db('GraduateDatabase').collection('forms')
        // console.log(collection);
    }
)
.catch(()=>console.log('数据库连接失败'))


// require('./menus')

// require('./question')