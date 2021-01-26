(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e50e32ea"],{"02c4":function(t,e,a){"use strict";var r=a("df72"),n=a.n(r);n.a},"718b":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:t.id,data:t.data}})},n=[],s=a("313e"),i=a.n(s),o={name:"EchartsComponent",props:["id","data"],data:function(){return{myChart:null}},watch:{data:{handler:function(t,e){this.drawLineGraph(this.id,t)},deep:!0}},mounted:function(){this.drawLineGraph(this.id,this.data)},methods:{drawLineGraph:function(t,e){var a=this;this.myChart=i.a.init(document.getElementById(t)),this.myChart.setOption(e,!0),window.addEventListener("resize",(function(){a.myChart.resize()}))}},beforeDestroy:function(){this.myChart&&this.myChart.clear()}},l=o,c=a("2877"),u=Object(c["a"])(l,r,n,!1,null,"0f878019",null);e["a"]=u.exports},"9d59":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select"},[a("el-form",[a("el-form-item",{attrs:{label:"学院："}},[a("el-select",{attrs:{placeholder:"请选择学院",clearable:""},on:{change:function(e){return t.getClassesName(t.formModel.college)}},model:{value:t.formModel.college,callback:function(e){t.$set(t.formModel,"college",e)},expression:"formModel.college"}},t._l(t.collegesName,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-form-item",{staticClass:"majorSelect",attrs:{label:"专业："}},[a("el-select",{staticStyle:{"margin-right":"20px"},attrs:{multiple:"",clearable:"",placeholder:"请选择专业"},on:{clear:t.clearMajor},model:{value:t.formModel.major,callback:function(e){t.$set(t.formModel,"major",e)},expression:"formModel.major"}},t._l(t.classesName,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit(t.url,t.Qnumber)}}},[t._v("查询")])],1)],1)],1)},n=[],s=(a("d81d"),a("96cf"),a("1da1")),i={name:"Search",props:{url:{type:String,default:function(){return""}},Qnumber:{type:String,default:function(){return""}},optionData:{type:Object,default:function(){}},Type:{type:String,default:function(){return"radar"}}},data:function(){return{collegesName:[],classesName:[],formModel:{college:"",major:[]}}},methods:{getCollegeName:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("formData/collegeNames");case 2:a=e.sent,r=a.data,t.collegesName=r;case 5:case"end":return e.stop()}}),e)})))()},getClassesName:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$get("formData/majorClasses",{collegeName:t});case 2:r=a.sent,n=r.data,e.formModel.major=[],e.classesName=n;case 6:case"end":return a.stop()}}),a)})))()},onSubmit:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,s,i,o,l,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==a.formModel.major.length){r.next=3;break}return a.$message({type:"warning",message:"请先选择查询专业"}),r.abrupt("return");case 3:return n={colleges:a.formModel.college,classes:a.formModel.major,Qnumber:e,percentage:4},r.next=6,a.$get(t,n);case 6:if(s=r.sent,i=s.data,console.log(i),0!==i.status){r.next=12;break}return a.$message({type:"warning",message:i.msg}),r.abrupt("return");case 12:n.classes=JSON.parse(JSON.stringify(n.classes)),n.classes.unshift("学院平均指数"),"bar"===a.Type?(o=n.classes.map((function(t,e){return{name:t,type:"bar",data:i[e]}})),a.optionData.legend.data=n.classes,a.optionData.series=o,a.optionData.legend.selected={},a.$emit("update:optionData",a.optionData)):"radar"===a.Type?(l=n.classes.map((function(t,e){return{name:t,value:i[e]}})),a.optionData.legend.data=n.classes,a.optionData.series[0].data=l,a.optionData.legend.selected={}):"polar"===a.Type&&(c=n.classes.map((function(t,e){return{name:t,type:"bar",data:i[e],coordinateSystem:"polar",animation:!0,stack:"a"}})),a.optionData.legend.data=n.classes,a.optionData.series=c,a.optionData.legend.selected={});case 15:case"end":return r.stop()}}),r)})))()},clearMajor:function(){this.formModel.major=[]}},mounted:function(){this.getCollegeName()}},o=i,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,"4f493d97",null);e["a"]=c.exports},df72:function(t,e,a){},eeeb:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"chart1Mode",attrs:{"data-title":"教育培养模块",id:"pdfDom"}},[a("div",{staticClass:"body"},[a("div",{staticClass:"topic"},[a("svg",{staticClass:"icon",attrs:{t:"1606024523939",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2443",width:"32",height:"32"}},[a("path",{attrs:{d:"M494.1 221.6l18.2 91.4-40.9-77.5c-31.6 19.9-64 42.2-96.9 67.3l26.8 134.4-58-109.9c-25.6 20.7-51.4 43.2-77.3 67.4L295.6 543l-61.8-117.1c-26.6 26.4-53.2 54.7-79.8 85.2l35.9 180-72.3-136.9c-17.5 21.4-34.9 43.6-52.2 66.9-13.3 49.3 79.5 232.6 79.5 232.6l-44.5 90.5 96.5-67.8s205.9-7 234.3-31.7c10.5-26.5 21.5-52.5 33.1-78.1l-122.5 1.8L486.1 720c17.4-35.8 35.8-70.6 54.9-104.3l-135.8 1.9 167.5-56c19.6-32.4 39.8-63.7 60.1-93.7L511 469.6l157.4-52.7c24.5-34.1 49-66.4 73.3-96.7l-90.5 1.3 123-41.1c71-85.3 137.1-152.5 185.8-197.7-3.7-6.2-207.3-15.7-465.9 138.9zM210.7 851c-22.9-1.7-40.5 5.7-38.8-22.5 239.7-470.6 763.6-746 763.6-746S339.4 498.5 210.7 851z",fill:"#040000","p-id":"2444"}})]),a("span",[t._v("数据分析报告")])]),a("div",{staticClass:"part"},[a("div",{staticClass:"content"},[a("h3",[t._v("1课程教学内容")]),a("div",[t._v(" 分析了当前学院下不同专业课程教学内容蕴含的教学特点。可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该课程设计质量越好。 ")]),a("span",{staticClass:"tips"},[t._v("注：平均指数为该院校下所有专业的平均分数")]),a("major-search",{attrs:{url:"analysis/analysisRadarForm3",Qnumber:"Q21",optionData:t.option},on:{"update:optionData":function(e){t.option=e},"update:option-data":function(e){t.option=e}}})],1),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartRadar",attrs:{id:"main",data:t.option}})],1)]),a("div",{staticClass:"part"},[t._m(0),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartPie",attrs:{id:"main2",data:t.option2}})],1)]),a("div",{staticClass:"part"},[a("div",{staticClass:"content"},[a("h3",[t._v("3教师教学")]),a("div",[t._v(" 分析了大学期间任课教师的教学行为，可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该方面教师教学质量越好。 ")]),a("span",{staticClass:"tips"},[t._v("注：平均指数为该院校下所有专业的平均分数")]),a("major-search",{attrs:{url:"analysis/analysisRadarForm3",Qnumber:"Q23",optionData:t.option3},on:{"update:optionData":function(e){t.option3=e},"update:option-data":function(e){t.option3=e}}})],1),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartRadar2",attrs:{id:"main3",data:t.option3}})],1)]),a("div",{staticClass:"part"},[t._m(1),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartbar",attrs:{id:"main4",data:t.option4}})],1)]),a("div",{staticClass:"part"},[t._m(2),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartbar2",attrs:{id:"main5",data:t.option5}})],1)]),a("div",{staticClass:"part"},[t._m(3),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartbar3",attrs:{id:"main6",data:t.option6}})],1)]),a("div",{staticClass:"part"},[t._m(4),a("div",{staticClass:"chart"},[a("chart-show",{staticClass:"chartbar4",attrs:{id:"main7",data:t.option7}})],1)]),a("div",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary round plain"},on:{click:function(e){return t.backTop()}}},[t._v("回到顶部 ")]),a("el-button",{attrs:{type:"primary round plain"},on:{click:function(e){return t.getPdf()}}},[t._v("保存本地")])],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",[t._v("2专业课程的难度")]),a("div",[t._v(" 分析了学生认为的专业课程的难度情况，通过课程内容、课程要求、课程作业等角度，分为同意，较为同意，不太同意，不同意四个程度。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",[t._v("4院校组织的实习实践")]),a("div",[t._v(" 分析了院校组织的实习实践的效果，条形图中某一轴长度越长，说明该轴所对应实习实践的效果好，满分为100。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",[t._v("5与任课教师交流")]),a("div",[t._v(" 分析了大学期间学生任课教师交流情况，条形图中某一轴长度越长，说明学生在该方面内容与任课老师交流越多。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",[t._v("6学业指导服务")]),a("div",[t._v(" 分析了大学期间学生接受过本校提供的学业指导服务，学生在需学业指导方面的参与程度。参与程度较高的服务，学校应继续提供稳定有效的指导服务，参与程度较低的服务，学校应该在其方面进行改善。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",[t._v("7实习实践")]),a("div",[t._v(" 分析了院校的实习实践应该改进的方面，以下均为学生不满意的地方，需要校验审查真实性，并进行整改。 ")])])}],s=(a("96cf"),a("1da1")),i=a("718b"),o=a("9d59"),l={data:function(){var t=[{name:"同意",value:70},{name:"较为同意",value:50},{name:"不太同意",value:40},{name:"不同意",value:68}];return{htmlTitle:"教育培养模块",option:{title:{text:"课程教学",subtext:"数据来自本网站系统数据采集",top:0,left:0},tooltip:{trigger:"axis"},legend:{left:"center",top:10,data:["平均指数","物联网工程","通信工程","机械电子工程"],selected:{"通信工程":!1,"机械电子工程":!1}},radar:[{indicator:[{name:"注重（外语、数学等）基础知识的教育",max:4,color:"rgb(194,53,49)"},{name:"专业基础课教学内容充实",max:4,color:"rgb(194,53,49)"},{name:"教学内容有利于拓宽自己的知识面",max:4,color:"rgb(194,53,49)"},{name:"教学内容介绍了本专业发展的前沿动向",max:4,color:"rgb(194,53,49)"},{name:"教学内容注重学科间的交叉与融合",max:4,color:"rgb(194,53,49)"},{name:"教学内容重视实践与理论的结合",max:4,color:"rgb(194,53,49)"},{name:"实践教学课程充实，注重培养学生的动手能力",max:4,color:"rgb(194,53,49)"}],center:["50%","50%"],radius:150}],series:[{type:"radar",tooltip:{trigger:"item"},areaStyle:{},data:[{value:[3,3,2,1,2,2,1],name:"平均指数"},{value:[2,3,2,2,2,1,1],name:"物联网工程"},{value:[1,3,2,2,1,2,2],name:"通信工程"},{value:[2,2,2,3,1,3,2],name:"机械电子工程"}]}]},option2:{title:[{top:"10%",right:"10%",text:"专业课程难度"},{subtext:"对于课程内容，我经常感到难以理解",left:"16.67%",top:"75%",textAlign:"center",subtextStyle:{color:"#000"}},{subtext:"需要非常努力才能达到课程要求",left:"50%",top:"75%",textAlign:"center",subtextStyle:{color:"#000"}},{subtext:"我在课外花很多时间来完成老师布置的作业",left:"83.33%",top:"75%",textAlign:"center",subtextStyle:{color:"#000"}}],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"课程难度",type:"pie",radius:"50%",center:["50%","50%"],data:t,animation:!0,label:{position:"outer",alignTo:"none",bleedMargin:5},left:0,right:"66.6667%",top:0,bottom:0},{name:"课程要求",type:"pie",radius:"50%",center:["50%","50%"],data:t,animation:!0,label:{position:"outer",alignTo:"labelLine",bleedMargin:5},left:"33.3333%",right:"33.3333%",top:0,bottom:0},{name:"课程作业",type:"pie",radius:"50%",center:["50%","50%"],data:t,animation:!0,label:{position:"outer",alignTo:"edge",margin:20},left:"66.6667%",right:0,top:0,bottom:0}],color:["#2f4554","#61a0a8","#d48265","#91c7ae"]},option3:{title:{text:"教师教学",subtext:"数据来自本网站系统数据采集",top:0,left:0},tooltip:{trigger:"axis"},legend:{left:"center",top:10,data:["平均指数","物联网工程","通信工程","机械电子工程"],selected:{"通信工程":!1,"机械电子工程":!1}},radar:[{indicator:[{name:"清楚地向学生解释了所学课程的目标和要求",max:3,color:"rgb(194,53,49)"},{name:"有组织和计划地进行课堂教学",max:3,color:"rgb(194,53,49)"},{name:"使用插图或举例的方式来解释教学难点",max:3,color:"rgb(194,53,49)"},{name:"提供案例或事例讨论",max:3,color:"rgb(194,53,49)"},{name:"课堂中加入互动环节，注重学生参与〔提问、讨论)",max:3,color:"rgb(194,53,49)"},{name:"课堂上激发学生的学习兴趣",max:3,color:"rgb(194,53,49)"},{name:"使用信息技术辅助课堂教学",max:3,color:"rgb(194,53,49)"},{name:"课后为学生提供辅导答疑",max:3,color:"rgb(194,53,49)"}],center:["50%","50%"],radius:150}],series:[{type:"radar",tooltip:{trigger:"item"},areaStyle:{},data:[{value:[3,3,2,1,2,2,1,2],name:"平均指数"},{value:[2,3,2,2,2,1,1,2],name:"物联网工程"},{value:[1,3,2,2,1,2,2,2],name:"通信工程"},{value:[2,2,2,3,1,3,2,2],name:"机械电子工程"}]}],color:["#c23531","#2f4554","#61a0a8","#d48265"]},option4:{title:{text:"实习实践",subtext:"数据来自本网站系统数据采集  "},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"1%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["使我更了解本专业的职业发展","对所学知识技能有了更深的理解","与我所学专业及能力目标相匹配","有充分的学习机会","帮助职场准备做的更好","实习的成绩客观地反映能力"]},series:[{name:"平均指数",type:"bar",data:[30,9,4,7,4,3]}]},option5:{xAxis:{type:"category",data:["课程内容及专业知识","学期论文或项目","职业规划、职业从业指导","人生观、价值观等问题","以上均没有"],axisLabel:{interval:0,rotate:20,textStyle:{color:"black"}}},yAxis:{type:"value"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} "},series:[{data:[120,200,150,80,10],type:"bar",barMaxWidth:"50px",name:"与任课教师的交流"}],color:["#61a0a8"]},option6:{xAxis:{type:"category",data:["学校提供辅导课程或活动","学业指导网站相关服务","任课教师帮助","本科生导师帮助","辅导员帮助","没有接受过学业指导"],axisLabel:{interval:0,rotate:20,textStyle:{color:"black"}}},yAxis:{type:"value"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} "},series:[{data:[120,200,150,80,80,80],type:"bar",barMaxWidth:"50px",name:"接收过本校提供的哪些学业指导服务"}],color:["#d48265"]},option7:{xAxis:{type:"category",data:["专业结合度低","老师指导反馈不足","动手操作机会少","实习内容陈旧","场地、设备不完善","同学间交流机会少","考核方式不完善"],axisLabel:{interval:0,rotate:20,textStyle:{color:"black"}}},yAxis:{type:"value"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} "},series:[{data:[120,200,150,80,80,80,90],type:"bar",barMaxWidth:"50px",name:"认为所在院校的实习实践应该改进的方面"}],color:["#ca8622"]}}},methods:{backTop:function(){var t=document.getElementById("pdfDom");t.scrollIntoView(!0)},getAnalysisData21:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis21Default");case 2:a=e.sent,r=a.data,t.option.series[0].data[0].value=r.sumQ21,t.option.series[0].data[1].value=r.sumQ21Wlw,t.option.series[0].data[2].value=r.sumQ21Tx,t.option.series[0].data[3].value=r.sumQ21Jxdz,console.log(r);case 9:case"end":return e.stop()}}),e)})))()},getAnalysisData22:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis22");case 2:a=e.sent,r=a.data,console.log(r),t.option2.series[0].data=r[0],t.option2.series[1].data=r[1],t.option2.series[2].data=r[2];case 8:case"end":return e.stop()}}),e)})))()},getAnalysisData23:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis23Default");case 2:a=e.sent,r=a.data,t.option3.series[0].data[0].value=r.sumQ23,t.option3.series[0].data[1].value=r.sumQ23Wlw,t.option3.series[0].data[2].value=r.sumQ23Tx,t.option3.series[0].data[3].value=r.sumQ23Jxdz,console.log(r);case 9:case"end":return e.stop()}}),e)})))()},getAnalysisData26:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis26");case 2:a=e.sent,r=a.data,console.log(r),t.option4.series[0].data=r;case 6:case"end":return e.stop()}}),e)})))()},getAnalysisData27:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis27");case 2:a=e.sent,r=a.data,t.option5.series[0].data=r;case 5:case"end":return e.stop()}}),e)})))()},getAnalysisData28:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis28");case 2:a=e.sent,r=a.data,t.option6.series[0].data=r;case 5:case"end":return e.stop()}}),e)})))()},getAnalysisData29:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$get("analysis/analysis29");case 2:a=e.sent,r=a.data,t.option7.series[0].data=r;case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getAnalysisData21(),this.getAnalysisData22(),this.getAnalysisData23(),this.getAnalysisData26(),this.getAnalysisData27(),this.getAnalysisData28(),this.getAnalysisData29()},components:{chartShow:i["a"],majorSearch:o["a"]}},c=l,u=(a("02c4"),a("2877")),d=Object(u["a"])(c,r,n,!1,null,null,null);e["default"]=d.exports}}]);