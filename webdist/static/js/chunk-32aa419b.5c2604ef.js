(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32aa419b"],{c9a9:function(t,e,a){},e166:function(t,e,a){"use strict";var r=a("c9a9"),l=a.n(r);l.a},e8da:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basics"},[a("div",{staticClass:"title"},[t._v("数据样本的基础信息")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"30px"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"50px"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"50px"}}),a("el-table-column",{attrs:{prop:"grade",label:"年级",width:"50px"}}),a("el-table-column",{attrs:{prop:"school",label:"学校"}}),a("el-table-column",{attrs:{prop:"college",label:"学院"}}),a("el-table-column",{attrs:{prop:"major",label:"专业",filters:t.filtersArray,"filter-method":t.filterHandler}}),a("el-table-column",{attrs:{prop:"StudentID",label:"学号"}}),a("el-table-column",{attrs:{prop:"profession",label:"父母职业"}}),a("el-table-column",{attrs:{prop:"GPA",label:"绩点",formatter:t.formatterGPA}}),a("el-table-column",{attrs:{prop:"match",label:"参与过的创新创业比赛","min-width":"140px","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"matchTime",label:"每周在实验室花费时间",formatter:t.formatterTime}}),a("el-table-column",{attrs:{prop:"matchResult",label:"获得级别奖项",formatter:t.formatterResult}})],1)],1)},l=[],s=(a("d3b7"),a("25f0"),a("96cf"),a("1da1")),n={data:function(){return{tableData:[],formatterGPA:function(t,e,a,r){var l=t.GPA.toString(),s="";switch(l){case"5":s="3.7以上";break;case"4":s="3.3-3.7";break;case"3":s="3.0-3.3";break;case"2":s="2.6-3.0";break;case"1":s="2-2.6";break;case"0":s="2.0以下";break;default:break}return s},formatterTime:function(t,e,a,r){var l=t.matchTime.toString(),s="";switch(l){case"4":s="24小时以上";break;case"3":s="16-24小时";break;case"2":s="8-16小时";break;case"1":s="8小时以下";break;default:break}return s},formatterResult:function(t,e,a,r){var l=t.matchResult.toString(),s="";switch(l){case"4":s="国家级奖项";break;case"3":s="省级奖项";break;case"2":s="市级奖项";break;case"1":s="无";break;default:break}return s},filtersArray:[{text:"物联网工程",value:"物联网工程"},{text:"机械电子工程",value:"机械电子工程"},{text:"通信工程",value:"通信工程"}],filterHandler:function(t,e,a){var r=a["property"];return e[r]===t}}},methods:{getBasicsData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis0");case 2:a=e.sent,r=a.data,console.log(r),t.tableData=r;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getBasicsData()}},o=n,c=(a("e166"),a("2877")),i=Object(c["a"])(o,r,l,!1,null,null,null);e["default"]=i.exports}}]);