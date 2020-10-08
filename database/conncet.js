// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost/GraduateDatabase',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log('数据库连接成功'))
.catch(()=>console.log('数据库连接失败'))


// require('./menus')

// require('./question')