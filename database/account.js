const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menus'
    }
})
const menusSchema = new mongoose.Schema({
    menuName: {
        type: Array,
        required: true
    }
})
const Accounts = mongoose.model('Accounts', accountSchema);

const Menus = mongoose.model('Menus', menusSchema);
// Menus.create({
//     menuName: [{
//         uname: '基础信息',
//         Component: 'Layout',
//         path: "/basicss",
//         id: '100',
//         meta: {
//             icon: 'el-icon-user-solid',
//             title: '基础信息'
//         },
//         children: [
//             {
//                 uname: "信息",
//                 Component: 'basics/index',
//                 path: '/basics',
//                 id: '101',
//                 meta: {
//                     icon: 'el-icon-menu',
//                     title: '信息'
//                 },
//             },
//         ]
//     },
//     {
//         uname: '图表数据',
//         Component: 'Layout',
//         id: '200',
//         path: "/table",
//         meta: {
//             icon: 'el-icon-pie-chart',
//             title: '图表数据'
//         },
//         children: [
//             {
//                 uname: '专业认知模块',
//                 Component: 'table/chart1/index',
//                 id: '201',
//                 path: "/chart1",
//                 children: [],
//                 meta: {
//                     icon: 'example',
//                     title: '专业认知模块'
//                 }
//             },
//             {
//                 uname: '学习投入模块',
//                 Component: 'table/chart2/index',
//                 id: '202',
//                 path: "/chart2",
//                 children: [],
//                 meta: {
//                     icon: 'example',
//                     title: '学习投入模块'
//                 }
//             },
//             {
//                 uname: '教育培养模块',
//                 Component: 'table/chart3/index',
//                 id: '203',
//                 path: "/chart3",
//                 children: [],
//                 meta: {
//                     icon: 'example',
//                     title: '教育培养模块'
//                 }
//             },
//             {
//                 uname: '德育与能力模块',
//                 Component: 'table/chart4/index',
//                 id: '204',
//                 path: "/chart4",
//                 children: [],
//                 meta: {
//                     icon: 'example',
//                     title: '德育与能力模块'
//                 }
//             },
//             {
//                 uname: '在校体验',
//                 Component: 'table/chart5/index',
//                 id: '205',
//                 path: "/chart5",
//                 children: [],
//                 meta: {
//                     icon: 'example',
//                     title: '在校体验'
//                 }
//             },
//         ],
//     }]
// }).then(() => { console.log('分类创建成功'); })
//     .catch((err) => { console.log('分类创建失败', err); })

// Accounts.create({
//     name: '校级管理员',
//     username: 'Admin',
//     password: 'admin',
//     role: 'qwer1',
//     menu: '5ffab95c4e3aa34960f8192f'
// }).then(() => { console.log('账号创建成功'); })
//     .catch((err) => { console.log('账号创建失败', err); })

module.exports = {
    Accounts
}