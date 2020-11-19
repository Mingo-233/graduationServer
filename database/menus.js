const mongoose = require('mongoose');
const menusSchema = new mongoose.Schema({
    menuName:{
        type:Array,
        required:true
    }
})

const Menus = mongoose.model('Menus',menusSchema);
// Menus.create({
//     menuName:[{
//         name:'基础指标',
//         id:001,
//         children:[{
//             uname:'基础指数',
//             path:'basics',
//             id:011
//         }]
//     },
//     {
//         name:'图表数据',
//         id:002,
//         children:[{
//             uname:'基础指数1',
//             path:'chart1',
//             id:021,
//         },{
//             uname:'基础指数2',
//             path:'chart2',
//             id:022,
//         },{
//             uname:'基础指数2',
//             path:'chart2',
//             id:023,
//         }]
//     },{
//         name:'分析结论',
//         id:003,
//         children:[{
//             uname:'结论',
//             path:'conclusion',
//             id:031
//         }]
//     },
//     {
//         name:'采样问卷',
//         id:004,
//         children:[{
//             uname:'问卷详情',
//             path:'question',
//             id:041
//         }]
//     }]
// }).then(()=>{console.log('分类创建成功');})
//  .catch((err)=>{console.log('分类创建失败',err);})

 module.exports = {
    Menus
 }