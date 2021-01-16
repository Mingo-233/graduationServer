// const mongoose = require('mongoose');
// const menusSchema = new mongoose.Schema({
//     menuName: {
//         type: Array,
//         required: true
//     }
// })

// const Menus = mongoose.model('Menus', menusSchema);
// // Menus.create({
// //     menuName: [{
// //         uname: '基础信息',
// //         Component: 'Layout',
// //         path: "/basicss",
// //         id: '100',
// //         meta: {
// //             icon: 'el-icon-user-solid',
// //             title: '基础信息'
// //         },
// //         children: [
// //             {
// //                 uname: "信息",
// //                 Component: 'basics/index',
// //                 path: '/basics',
// //                 id: '101',
// //                 meta: {
// //                     icon: 'el-icon-menu',
// //                     title: '信息'
// //                 },
// //             },
// //         ]
// //     },
// //     {
// //         uname: '图表数据',
// //         Component: 'Layout',
// //         id: '200',
// //         path: "/table",
// //         meta: {
// //             icon: 'el-icon-pie-chart',
// //             title: '图表数据'
// //         },
// //         children: [
// //             {
// //                 uname: '专业认知模块',
// //                 Component: 'table/chart1/index',
// //                 id: '201',
// //                 path: "/chart1",
// //                 children: [],
// //                 meta: {
// //                     icon: 'example',
// //                     title: '专业认知模块'
// //                 }
// //             },
// //             {
// //                 uname: '学习投入模块',
// //                 Component: 'table/chart2/index',
// //                 id: '202',
// //                 path: "/chart2",
// //                 children: [],
// //                 meta: {
// //                     icon: 'example',
// //                     title: '学习投入模块'
// //                 }
// //             },
// //             {
// //                 uname: '教育培养模块',
// //                 Component: 'table/chart3/index',
// //                 id: '203',
// //                 path: "/chart3",
// //                 children: [],
// //                 meta: {
// //                     icon: 'example',
// //                     title: '教育培养模块'
// //                 }
// //             },
// //             {
// //                 uname: '德育与能力模块',
// //                 Component: 'table/chart4/index',
// //                 id: '204',
// //                 path: "/chart4",
// //                 children: [],
// //                 meta: {
// //                     icon: 'example',
// //                     title: '德育与能力模块'
// //                 }
// //             },
// //             {
// //                 uname: '在校体验',
// //                 Component: 'table/chart5/index',
// //                 id: '205',
// //                 path: "/chart5",
// //                 children: [],
// //                 meta: {
// //                     icon: 'example',
// //                     title: '在校体验'
// //                 }
// //             },
// //         ],
// //     },
// //     {
// //         uname: "分析结论",
// //         Component: 'Layout',
// //         path: '/summary',
// //         id: '300',
// //         meta: {
// //             icon: 'el-icon-data-analysis',
// //             title: '分析结论'
// //         },
// //         children: [
// //             {
// //                 uname: "结论",
// //                 Component: 'summary/conclusion/index',
// //                 path: "/conclusion",
// //                 id: '301',
// //                 meta: {
// //                     icon: 'el-icon-menu',
// //                     title: '结论'
// //                 },
// //             },
// //             {
// //                 uname: "反馈建议",
// //                 Component: 'summary/suggestion/index',
// //                 path: "/suggestion",
// //                 id: "302",
// //                 meta: {
// //                     icon: 'el-icon-menu',
// //                     title: '反馈建议'
// //                 },
// //             }
// //         ]
// //     }
// //     ]
// // }).then(() => { console.log('分类创建成功'); })
// //     .catch((err) => { console.log('分类创建失败', err); })

// module.exports = {
//     Menus
// }


// //     {
// //         uname: '采样问卷',
// //         Component: 'Layout',
// //         path: '/questions',
// //         id: '400',
// //         meta: {
// //             icon: 'el-icon-notebook-1',
// //             title: '采样问卷'
// //         },
// //         children: [
// //             {
// //                 uname: "问卷",
// //                 Component: 'Question',
// //                 path: "/question",
// //                 id: '401',
// //                 meta: {
// //                     icon: 'el-icon-menu',
// //                     title: '问卷'
// //                 },
// //             },
// //         ]
// //     },