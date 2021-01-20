(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14a99d03"],{"4a7b6":function(t,a,e){"use strict";var n=e("ae8a"),r=e.n(n);r.a},"53ca":function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0");function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}},"718b":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:t.id,data:t.data}})},r=[],i=e("313e"),s=e.n(i),o={name:"EchartsComponent",props:["id","data"],data:function(){return{myChart:null}},watch:{data:{handler:function(t,a){this.drawLineGraph(this.id,t)},deep:!0}},mounted:function(){this.drawLineGraph(this.id,this.data)},methods:{drawLineGraph:function(t,a){var e=this;this.myChart=s.a.init(document.getElementById(t)),this.myChart.setOption(a),window.addEventListener("resize",(function(){e.myChart.resize()}))}},beforeDestroy:function(){this.myChart&&this.myChart.clear()}},c=o,l=e("2877"),u=Object(l["a"])(c,n,r,!1,null,"6899281c",null);a["a"]=u.exports},a2b0:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"chart1Mode",attrs:{"data-title":"德育与能力模块",id:"pdfDom"}},[e("div",{staticClass:"body"},[e("div",{staticClass:"topic"},[e("svg",{staticClass:"icon",attrs:{t:"1606024523939",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2443",width:"32",height:"32"}},[e("path",{attrs:{d:"M494.1 221.6l18.2 91.4-40.9-77.5c-31.6 19.9-64 42.2-96.9 67.3l26.8 134.4-58-109.9c-25.6 20.7-51.4 43.2-77.3 67.4L295.6 543l-61.8-117.1c-26.6 26.4-53.2 54.7-79.8 85.2l35.9 180-72.3-136.9c-17.5 21.4-34.9 43.6-52.2 66.9-13.3 49.3 79.5 232.6 79.5 232.6l-44.5 90.5 96.5-67.8s205.9-7 234.3-31.7c10.5-26.5 21.5-52.5 33.1-78.1l-122.5 1.8L486.1 720c17.4-35.8 35.8-70.6 54.9-104.3l-135.8 1.9 167.5-56c19.6-32.4 39.8-63.7 60.1-93.7L511 469.6l157.4-52.7c24.5-34.1 49-66.4 73.3-96.7l-90.5 1.3 123-41.1c71-85.3 137.1-152.5 185.8-197.7-3.7-6.2-207.3-15.7-465.9 138.9zM210.7 851c-22.9-1.7-40.5 5.7-38.8-22.5 239.7-470.6 763.6-746 763.6-746S339.4 498.5 210.7 851z",fill:"#040000","p-id":"2444"}})]),e("span",[t._v("数据分析报告")])]),t._m(0),e("div",{staticClass:"chart"},[e("chart-show",{staticClass:"chartRadar",attrs:{id:"main",data:t.option}})],1),t._m(1),e("div",{staticClass:"chart"},[e("chart-show",{staticClass:"chartbar2",attrs:{id:"main2",data:t.option2}})],1),t._m(2),e("div",{staticClass:"chart"},[e("chart-show",{staticClass:"chartbar3",attrs:{id:"main3",data:t.option3}})],1)]),e("div",{staticClass:"footer"},[e("el-button",{attrs:{type:"primary round plain"},on:{click:function(a){return t.backTop()}}},[t._v("回到顶部 ")]),e("el-button",{attrs:{type:"primary round plain"},on:{click:function(a){return t.getPdf()}}},[t._v("保存本地")])],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h3",[t._v("1能力提升")]),e("div",[t._v(" 分析了当前学院下不同专业学生在能力方面的提升情况。可以通过选择不同专业来进行横向比较，雷达图中某一轴覆盖面积越大，说明该方面能力提升越多。 ")]),e("span",{staticClass:"tips"},[t._v("注：平均指数为该院校下所有专业的平均分数")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h3",[t._v("2大学期间参与过的社会活动教育")]),e("div",[t._v(" 分析了大学期间学生参与社会活动教育情况，条形图中某一轴长度越长，说明学生在该类型的社会活动参与越多。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h3",[t._v("3社会活动教育帮助")]),e("div",[t._v("分析了大学生在大学期间参与社会活动教育带来的帮助。")])])}],i=(e("96cf"),e("1da1")),s=e("718b"),o=(e("ed08"),e("313e"),{data:function(){return{htmlTitle:"德育与能力模块",option:{title:{text:"能力提升",subtext:"数据来自本网站系统数据采集",top:0,left:0},tooltip:{trigger:"axis"},legend:{left:"center",top:10,data:["平均指数","物联网工程","通信工程","机械电子工程"],selected:{"通信工程":!1,"机械电子工程":!1}},radar:[{indicator:[{name:"信息搜索与处理能力",max:3,color:"rgb(194,53,49)"},{name:"与他人协同工作能力",max:3,color:"rgb(194,53,49)"},{name:"自我认知能力",max:3,color:"rgb(194,53,49)"},{name:"环境适应能力",max:3,color:"rgb(194,53,49)"},{name:"沟通能力",max:3,color:"rgb(194,53,49)"},{name:"创新能力",max:3,color:"rgb(194,53,49)"},{name:"理解能力",max:3,color:"rgb(194,53,49)"},{name:"逻辑推理能力",max:3,color:"rgb(194,53,49)"},{name:"社交能力",max:3,color:"rgb(194,53,49)"},{name:"自律能力",max:3,color:"rgb(194,53,49)"}],center:["50%","50%"],radius:150}],series:[{type:"radar",tooltip:{trigger:"item"},areaStyle:{},data:[{value:[3,3,2,1,2,2,1,2,2,2],name:"平均指数"},{value:[2,3,2,2,2,1,1,2,2,2],name:"物联网工程"},{value:[1,3,2,2,1,2,2,2,2,2],name:"通信工程"},{value:[2,2,2,3,1,3,2,2,2,2],name:"机械电子工程"}]}]},option2:{xAxis:{type:"category",data:["社会活动类通识课程","本专业领域实习","勤工助学","助教助研","校园清洁","社会公益活动","没有参加过"],axisLabel:{interval:0,rotate:20,textStyle:{color:"black"}}},yAxis:{type:"value"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} "},series:[{data:[120,200,150,80,10,40,40],type:"bar",barMaxWidth:"50px",name:"社会活动教育"}],color:["#61a0a8"]},option3:{xAxis:{type:"category",data:["形成坚定意志","增强身体素质","培养良好习惯","增强社会责任感","形成团结合作意识","了解相关知识和技能","维护校园卫生环境"],axisLabel:{interval:0,rotate:20,textStyle:{color:"black"}}},yAxis:{type:"value"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} "},series:[{data:[120,200,150,80,80,80,90],type:"bar",barMaxWidth:"50px",name:"社会活动教育的在哪些方面有帮助"}],color:["#d48265"]}}},methods:{backTop:function(){var t=document.getElementById("pdfDom");t.scrollIntoView(!0)},getAnalysisData30:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$get("analysis/analysis30");case 2:e=a.sent,n=e.data,t.option.series[0].data[0].value=n.sumQ30,t.option.series[0].data[1].value=n.sumQ30Wlw,t.option.series[0].data[2].value=n.sumQ30Tx,t.option.series[0].data[3].value=n.sumQ30Jxdz,console.log(n);case 9:case"end":return a.stop()}}),a)})))()},getAnalysisData31:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$get("analysis/analysis31");case 2:e=a.sent,n=e.data,t.option2.series[0].data=n;case 5:case"end":return a.stop()}}),a)})))()},getAnalysisData32:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$get("analysis/analysis32");case 2:e=a.sent,n=e.data,t.option3.series[0].data=n;case 5:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.getAnalysisData30(),this.getAnalysisData31(),this.getAnalysisData32()},components:{chartShow:s["a"]}}),c=o,l=(e("4a7b6"),e("2877")),u=Object(l["a"])(c,n,r,!1,null,null,null);a["default"]=u.exports},ae8a:function(t,a,e){},ed08:function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"b",(function(){return s}));e("ac1f"),e("5319");var n=e("53ca");function r(t,a,e){clearInterval(t.timer),t.timer=setInterval((function(){var n=(a-window.pageYOffset)/10;n=n>0?Math.ceil(n):Math.floor(n),window.pageYOffset===a&&(clearInterval(t.timer),e&&e()),window.scroll(0,window.pageYOffset+n)}),15)}function i(t,a){if(0===arguments.length)return null;var e,r=a||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(n["a"])(t)?e=t:(10===(""+t).length&&(t=1e3*parseInt(t)),e=new Date(t));var i={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()},s=r.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,a){var e=i[a];return"a"===a?["一","二","三","四","五","六","日"][e-1]:(t.length>0&&e<10&&(e="0"+e),e||0)}));return s}function s(t,a,e){var n,r,i,s,o,c=function c(){var l=+new Date-s;l<a&&l>0?n=setTimeout(c,a-l):(n=null,e||(o=t.apply(i,r),n||(i=r=null)))};return function(){for(var r=arguments.length,l=new Array(r),u=0;u<r;u++)l[u]=arguments[u];i=this,s=+new Date;var d=e&&!n;return n||(n=setTimeout(c,a)),d&&(o=t.apply(i,l),i=l=null),o}}}}]);