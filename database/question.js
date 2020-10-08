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


const Question = mongoose.model('Question',queSchema);
// Question.create({
//     index:'6',
//     title:'6您对本专业以下各项情况是否了解',
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
        
//     },{
//         question:'Ⅱ专业的知识体系',
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
//     },
//     {
//         question:'Ⅲ专业技能要求',
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
//     },
//     {
//         question:'Ⅳ专业职业素养要求',
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
//     },
//     {
//         question:'Ⅴ专业的课程设置',
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
// }).then(() => {console.log('表单问题创建成功');})
// .catch((err)=>{console.log('表单问题创建失败',err)})

module.exports = {
    Question
}