const mongoose = require('mongoose');
const queSchema = new mongoose.Schema({
    index:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    Subtitle:{
        type:Array,
        required:true
    }
})


const Question4 = mongoose.model('Question4',queSchema);
// Question4.create({
//     index:'6',
//     title:'33您对本专业以下各项情况是否了解',
//     Subtitle: [{
//         question:'I专业的就业及发展',
//         options:[{
//             name:'完全了解',
//             value:3
//         },{
//             name:'了解',
//             value:2
//         },{
//             name:'不了解',
//             value:1
//         },{
//             name:'完全不了解',
//             value:0
//         }]
        
//     }]
// }).then(() => {console.log('表单问题4创建成功');})
// .catch((err)=>{console.log('表单问题4创建失败',err)})

module.exports = {
    Question4
}