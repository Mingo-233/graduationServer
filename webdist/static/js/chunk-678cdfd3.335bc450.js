(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-678cdfd3","chunk-f71cb348"],{"2dcb":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"box",attrs:{"data-title":"问卷 "}},[r("div",{staticClass:"main"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("div",[e._v("大学生学情情况与能力调查问卷")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.backHome}},[e._v("返回")])],1),r("div",[e._v(" 基本信息 "),e.isRecord?r("el-link",{attrs:{type:"primary"},on:{click:e.recovery}},[e._v("读取个人信息数据")]):e._e()],1),r("el-divider"),r("el-form",{ref:"ruleForm",staticClass:"demoForm",attrs:{model:e.Form,rules:e.rules,"label-width":"100px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"sex",label:"1你的性别",id:"a1"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("sex",1)}},model:{value:e.Form.sex,callback:function(t){e.$set(e.Form,"sex",t)},expression:"Form.sex"}},[r("el-radio",{attrs:{label:"男",value:"boy",border:""}}),r("el-radio",{attrs:{label:"女",value:"girl",border:""}})],1)],1),r("el-form-item",{attrs:{prop:"age",label:"2您的年龄",id:"a2"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("age",2)}},model:{value:e.Form.age,callback:function(t){e.$set(e.Form,"age",t)},expression:"Form.age"}})],1),r("el-form-item",{attrs:{prop:"grade",label:"3您的年级",id:"a3"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("grade",3)}},model:{value:e.Form.grade,callback:function(t){e.$set(e.Form,"grade",t)},expression:"Form.grade"}},[r("el-radio",{attrs:{label:"大一",value:"大一",border:""}}),r("el-radio",{attrs:{label:"大二",value:"大二",border:""}}),r("el-radio",{attrs:{label:"大三",value:"大三",border:""}}),r("el-radio",{attrs:{label:"大四",value:"大四",border:""}})],1)],1),r("el-form-item",{attrs:{prop:"school",label:"4您的学校",id:"a4"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("school",4)}},model:{value:e.Form.school,callback:function(t){e.$set(e.Form,"school",t)},expression:"Form.school"}})],1),r("el-form-item",{attrs:{prop:"college",label:"5您的学院",id:"a5"}},[r("el-select",{attrs:{placeholder:"请选择学院"},on:{change:function(t){e.handleSelect("college",5),e.getClassesName(e.Form.college)}},model:{value:e.Form.college,callback:function(t){e.$set(e.Form,"college",t)},expression:"Form.college"}},e._l(e.collegesName,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{prop:"major",label:"6您的专业",id:"a6"}},[r("el-select",{attrs:{placeholder:"请选择专业"},on:{change:function(t){return e.handleSelect("major",6)}},model:{value:e.Form.major,callback:function(t){e.$set(e.Form,"major",t)},expression:"Form.major"}},e._l(e.classesName,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{prop:"StudentID",label:"7您的学号",id:"a7"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("StudentID",7)}},model:{value:e.Form.StudentID,callback:function(t){e.$set(e.Form,"StudentID",t)},expression:"Form.StudentID"}})],1),r("el-form-item",{attrs:{prop:"profession",label:"8您父母所属的主要职业阶层是",id:"a8"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleSelect("profession",8)}},model:{value:e.Form.profession,callback:function(t){e.$set(e.Form,"profession",t)},expression:"Form.profession"}},e._l(e.professionArray,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("div",[e._v("模块四、德育与能力")]),r("el-divider"),e._l(e.arrQueList2,(function(t){return r("div",{key:t.index},[r("div",{staticClass:"Firstlevel",attrs:{id:"a"+t.index}},[e._v(" "+e._s(t.title)+" ")]),e._l(t.Subtitle,(function(a,n){return r("el-form-item",{key:a.question,attrs:{prop:"Q"+t.index,label:a.question}},[r("el-radio-group",{on:{change:function(r){return e.handleSelect("Q"+t.index,t.index)}},model:{value:e.Form["Q"+t.index][n],callback:function(r){e.$set(e.Form["Q"+t.index],n,r)},expression:"Form['Q' + item1.index][index2]"}},e._l(a.options,(function(t){return r("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.name))])})),1)],1)}))],2)})),r("el-form-item",{attrs:{label:"31本学年，您参加过哪些社会活动教育<多选>",prop:"Q31",id:"a31"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q31",31)}},model:{value:e.Form.Q31,callback:function(t){e.$set(e.Form,"Q31",t)},expression:"Form.Q31"}},[r("el-checkbox",{attrs:{label:"社会活动教育类的通识课程",name:"type"}}),r("el-checkbox",{attrs:{label:"本专业领域的实习实践",name:"type"}}),r("el-checkbox",{attrs:{label:"勤工助学",name:"type"}}),r("el-checkbox",{attrs:{label:"助教助研",name:"type"}}),r("el-checkbox",{attrs:{label:"校园清洁",name:"type"}}),r("el-checkbox",{attrs:{label:"社会公益活动",name:"type"}}),r("el-checkbox",{attrs:{label:"没有参加任何社会活动教育",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"32社会活动教育对您在以下哪些方面有帮助<多选>",prop:"Q32",id:"a32"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q32",32)}},model:{value:e.Form.Q32,callback:function(t){e.$set(e.Form,"Q32",t)},expression:"Form.Q32"}},[r("el-checkbox",{attrs:{label:"形成坚定意志",name:"type"}}),r("el-checkbox",{attrs:{label:"增强身体素质",name:"type"}}),r("el-checkbox",{attrs:{label:"培养良好习惯",name:"type"}}),r("el-checkbox",{attrs:{label:"增强社会责任感",name:"type"}}),r("el-checkbox",{attrs:{label:"形成团结合作意识",name:"type"}}),r("el-checkbox",{attrs:{label:"了解相关知识和技能",name:"type"}}),r("el-checkbox",{attrs:{label:"维护校园卫生环境",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"33你参加哪些创新创业比赛<多选>",prop:"Q33",id:"a33"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q33",33)}},model:{value:e.Form.Q33,callback:function(t){e.$set(e.Form,"Q33",t)},expression:"Form.Q33"}},[r("el-checkbox",{attrs:{label:"中国“互联网+”大学生创新创业大赛",name:"type"}}),r("el-checkbox",{attrs:{label:"“挑战杯”全国大学生课外学术科技作品（创业计划）竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"全国大学生节能减排社会实践与科技竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"“挑战杯”大学生课外学术科技作品（创业计划）竞赛浙江赛区",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生机械设计竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生多媒体作品设计竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生电子设计竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生智能汽车竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生电子商务竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生职业生涯规划与创业大赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省“互联网+”大学生创新创业大赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生机器人竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生物理科技创新竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"浙江省大学生网络与信息安全竞赛",name:"type"}}),r("el-checkbox",{attrs:{label:"以上均没有",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"34参与比赛时一周在实验室多长时间",prop:"Q34",id:"a34"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("Q34",34)}},model:{value:e.Form.Q34,callback:function(t){e.$set(e.Form,"Q34",t)},expression:"Form.Q34"}},[r("el-radio",{attrs:{label:"1",value:"1"}},[e._v("8小时以下")]),r("el-radio",{attrs:{label:"2",value:"2"}},[e._v("8-16小时")]),r("el-radio",{attrs:{label:"3",value:"3"}},[e._v("16-24小时")]),r("el-radio",{attrs:{label:"4",value:"4"}},[e._v("24小时以上")])],1)],1),r("el-form-item",{attrs:{label:"35获得过什么级别奖项",prop:"Q35",id:"a35"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("Q35",35)}},model:{value:e.Form.Q35,callback:function(t){e.$set(e.Form,"Q35",t)},expression:"Form.Q35"}},[r("el-radio",{attrs:{label:"1",value:"1"}},[e._v("无")]),r("el-radio",{attrs:{label:"2",value:"2"}},[e._v("市级奖项")]),r("el-radio",{attrs:{label:"3",value:"3"}},[e._v("省级奖项")]),r("el-radio",{attrs:{label:"4",value:"4"}},[e._v("国家级奖项")])],1)],1),r("div",{staticClass:"btn"},[r("el-button",{staticClass:"submit",attrs:{"el-button":"",type:"primary"},on:{click:e.save}},[e._v("提交")]),r("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?r("score-dialog",{attrs:{id:this.Form.StudentID,type:4},on:{dialogClose:e.closeDialog}}):e._e()],1)],1)],2)],1)],1),r("div",{staticClass:"tips"},[r("div",{staticClass:"btnBox"},[r("div",{staticClass:"title"},[e._v(" 基本信息 "),r("div",{ref:"btnQues",staticClass:"btnQues"},e._l(e.arrQuebtnNum,(function(t,a){return r("el-button",{key:a,staticClass:"singleBtn",attrs:{id:a},on:{click:function(r){return e.btnclick(t)}}},[e._v(e._s(t))])})),1)]),r("div",{staticClass:"title"},[e._v(" 模块四 德育与能力 "),r("div",{ref:"btnQues2",staticClass:"btnQues"},e._l(e.arrQuebtnNum2,(function(t,a){return r("el-button",{key:a,staticClass:"singleBtn",attrs:{id:a},on:{click:function(r){return e.btnclick(t)}}},[e._v(e._s(t))])})),1)]),r("el-progress",{attrs:{"text-inside":"",percentage:e.percentage>100?100:e.percentage,color:e.customColors,"stroke-width":24}}),r("div",{staticClass:"backTop"},[r("el-tooltip",{attrs:{effect:"dark",content:"返回顶部",placement:"right-start"}},[r("el-button",{attrs:{icon:"el-icon-caret-top"},on:{click:e.backTophandle}})],1)],1)],1)])])},n=[],o=(r("c975"),r("a9e3"),r("7039"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("96cf"),r("1da1")),l=r("7afa"),s=r("c6f7"),i={name:"Que4",mixins:[s["a"]],data:function(){return{Form:{sex:"",age:"",grade:"",school:"",college:"",major:"",StudentID:"",profession:"",Q30:[],Q31:[],Q32:[],Q33:[],Q34:[],Q35:[]},dialogVisible:!1,queSetArr:[],singlePercentage:"",arrQuebtnNum:[1,2,3,4,5,6,7,8],arrQuebtnNum2:[30,31,32,33,34,35],arrQuebtn:[],arrQuebtn2:[],arrQueList2:[],isRecord:!1,btnFlag:!1}},mounted:function(){var e=new Set([]);this.queSetArr=e,this.arrQuebtn=this.$refs.btnQues.children,this.arrQuebtn2=this.$refs.btnQues2.children;var t=Object.getOwnPropertyNames(this.Form).length-1,r=parseInt(Math.ceil(1e4/t));this.singlePercentage=r/100,this.getQuestionList(),this.checkRecord()},methods:{save:function(){var e=this,t=this.Form;this.$refs.ruleForm.validate(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(a){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a){r.next=2;break}return r.abrupt("return");case 2:return n={sex:t.sex,age:t.age,grade:t.grade,school:t.school,college:t.college,major:t.major,StudentID:t.StudentID,profession:t.profession},window.localStorage.setItem("PersonData",JSON.stringify(n)),r.next=6,e.$post("form/form4",e.$Qs.stringify(t));case 6:o=r.sent,o.data.errMessage?e.$message({type:"error",message:"系统异常"}):e.$alert("提交成功，您可以查看本次测试得分情况。","提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"success",message:"添加成功"}),e.openDialog()}});case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},openDialog:function(){this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1},recovery:function(){if(!this.btnFlag){var e=JSON.parse(window.localStorage.getItem("PersonData"));this.Form.sex=e.sex,this.Form.age=e.age,this.Form.grade=e.grade,this.Form.school=e.school,this.Form.college=e.college,this.Form.major=e.major,this.Form.StudentID=e.StudentID,this.Form.profession=e.profession;var t=this.singlePercentage;this.percentage+=8*t,this.queSetArr.add("sex","age","grade","school","college","major","Student","profession");for(var r=0;r<8;r++)this.arrQuebtn[r].style.background="rgb(72,162,255)";this.btnFlag=!0}},handleSelect:function(e,t){t-=1;var r=this.singlePercentage;if(!this.queSetArr.has(e))if(this.percentage+=r,this.percentage=Math.round(100*this.percentage)/100,this.queSetArr.add(e),t<8)this.arrQuebtn[t].style.background="rgb(72,162,255)";else{t+=1;var a=Number(t),n=this.arrQuebtnNum2.indexOf(a);this.arrQuebtn2[n].style.background="rgb(72,162,255)"}},getQuestionList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("formData/questions4");case 2:r=t.sent,a=r.data,e.arrQueList2=a;case 6:case"end":return t.stop()}}),t)})))()},btnclick:function(e){location.href="#a"+e},backHome:function(){this.$router.push("/question")},backTophandle:function(){this.animate(window,0)},animate:function(e,t,r){clearInterval(e.timer),e.timer=setInterval((function(){var a=(t-window.pageYOffset)/10;a=a>0?Math.ceil(a):Math.floor(a),window.pageYOffset===t&&(clearInterval(e.timer),r&&r()),window.scroll(0,window.pageYOffset+a)}),15)},checkRecord:function(){window.localStorage.getItem("PersonData")?this.isRecord=!0:this.isRecord=!1}},components:{ScoreDialog:l["default"]}},c=i,u=(r("693f"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,"d981d6b0",null);t["default"]=d.exports},3462:function(e,t,r){"use strict";var a=r("8162"),n=r.n(a);n.a},6062:function(e,t,r){"use strict";var a=r("6d61"),n=r("6566");e.exports=a("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(e,t,r){"use strict";var a=r("9bf2").f,n=r("7c73"),o=r("e2cc"),l=r("0366"),s=r("19aa"),i=r("2266"),c=r("7dd0"),u=r("2626"),d=r("83ab"),f=r("f183").fastKey,m=r("69f3"),p=m.set,h=m.getterFor;e.exports={getConstructor:function(e,t,r,c){var u=e((function(e,a){s(e,u,t),p(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=a&&i(a,e[c],e,r)})),m=h(t),b=function(e,t,r){var a,n,o=m(e),l=g(e,t);return l?l.value=r:(o.last=l={index:n=f(t,!0),key:t,value:r,previous:a=o.last,next:void 0,removed:!1},o.first||(o.first=l),a&&(a.next=l),d?o.size++:e.size++,"F"!==n&&(o.index[n]=l)),e},g=function(e,t){var r,a=m(e),n=f(t);if("F"!==n)return a.index[n];for(r=a.first;r;r=r.next)if(r.key==t)return r};return o(u.prototype,{clear:function(){var e=this,t=m(e),r=t.index,a=t.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete r[a.index],a=a.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,r=m(t),a=g(t,e);if(a){var n=a.next,o=a.previous;delete r.index[a.index],a.removed=!0,o&&(o.next=n),n&&(n.previous=o),r.first==a&&(r.first=n),r.last==a&&(r.last=o),d?r.size--:t.size--}return!!a},forEach:function(e){var t,r=m(this),a=l(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:r.first){a(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!g(this,e)}}),o(u.prototype,r?{get:function(e){var t=g(this,e);return t&&t.value},set:function(e,t){return b(this,0===e?0:e,t)}}:{add:function(e){return b(this,e=0===e?0:e,e)}}),d&&a(u.prototype,"size",{get:function(){return m(this).size}}),u},setStrong:function(e,t,r){var a=t+" Iterator",n=h(t),o=h(a);c(e,t,(function(e,t){p(this,{type:a,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(t)}}},"693f":function(e,t,r){"use strict";var a=r("8fe9"),n=r.n(a);n.a},"6d61":function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("94ca"),l=r("6eeb"),s=r("f183"),i=r("2266"),c=r("19aa"),u=r("861d"),d=r("d039"),f=r("1c7e"),m=r("d44e"),p=r("7156");e.exports=function(e,t,r){var h=-1!==e.indexOf("Map"),b=-1!==e.indexOf("Weak"),g=h?"set":"add",v=n[e],x=v&&v.prototype,k=v,y={},F=function(e){var t=x[e];l(x,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(b&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return b&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(b&&!u(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(o(e,"function"!=typeof v||!(b||x.forEach&&!d((function(){(new v).entries().next()})))))k=r.getConstructor(t,e,h,g),s.REQUIRED=!0;else if(o(e,!0)){var w=new k,Q=w[g](b?{}:-0,1)!=w,S=d((function(){w.has(1)})),_=f((function(e){new v(e)})),C=!b&&d((function(){var e=new v,t=5;while(t--)e[g](t,t);return!e.has(-0)}));_||(k=t((function(t,r){c(t,k,e);var a=p(new v,t,k);return void 0!=r&&i(r,a[g],a,h),a})),k.prototype=x,x.constructor=k),(S||C)&&(F("delete"),F("has"),h&&F("get")),(C||Q)&&F(g),b&&x.clear&&delete x.clear}return y[e]=k,a({global:!0,forced:k!=v},y),m(k,e),b||r.setStrong(k,e,h),k}},7039:function(e,t,r){var a=r("23e7"),n=r("d039"),o=r("057f").f,l=n((function(){return!Object.getOwnPropertyNames(1)}));a({target:"Object",stat:!0,forced:l},{getOwnPropertyNames:o})},"7afa":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"score"},[r("span",[e._v("感谢您的参与，您在该模块的测试得分为：")]),r("number-counter",{staticClass:"nums",attrs:{value:this.score,time:.1,denominator:this.total}},[e._v("/")]),this.ratio>80?r("div",[e._v("分数等级为优秀。")]):this.ratio>50?r("div",[e._v("分数等级为良好。")]):r("div",[e._v("分数等级为一般。")]),r("div",[e._v("您可以继续参与其他模块测试。")]),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1)},n=[],o=(r("99af"),r("a9e3"),r("96cf"),r("1da1")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"number-grow-warp"},[r("span",{ref:"numberGrow",staticClass:"number-grow"},[e._v("0")])])},s=[],i=(r("d3b7"),r("ac1f"),r("25f0"),r("5319"),{props:{time:{type:Number,default:1},value:{type:Number,default:0},denominator:{type:Number,default:1}},data:function(){return{}},mounted:function(){this.numberGrow(this.$refs.numberGrow)},methods:{numberGrow:function(e){var t=this,r=parseInt(this.value/(100*this.time)),a=0,n=0,o=setInterval((function(){n+=r+10,n>=t.value&&(clearInterval(o),n=t.value,o=null),a!==n&&(a=n+"/".concat(t.denominator),e.innerHTML=a.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g,"$1,"))}),150)}}}),c=i,u=r("2877"),d=Object(u["a"])(c,l,s,!1,null,null,null),f=d.exports,m={props:{id:{type:String,dafault:function(){return""}},type:{type:Number,dafault:function(){return 0}}},data:function(){return{score:0,total:0}},methods:{handleClose:function(){this.$emit("dialogClose"),this.$router.push("question")},getScore:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("person/personCheck".concat(e.type,"/").concat(e.id));case 2:r=t.sent,a=r.data,e.score=a.score,e.total=a.total;case 7:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getScore();case 2:case 3:case"end":return t.stop()}}),t)})))()},computed:{ratio:function(){return this.score/this.total*100}},components:{NumberCounter:f}},p=m,h=(r("3462"),Object(u["a"])(p,a,n,!1,null,null,null));t["default"]=h.exports},8162:function(e,t,r){},"8fe9":function(e,t,r){},bb2f:function(e,t,r){var a=r("d039");e.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c6f7:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("96cf");var a=r("1da1"),n={data:function(){return{rules:{sex:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],age:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],grade:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],school:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],college:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],major:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],StudentID:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],profession:[{required:!0,message:"您还有未选择的选项",trigger:"change"}]},percentage:0,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],professionArray:["国家与社会管理者","企业经理人员","私营企业主","专业人士与技术人员","办事人员阶层","个体工商户阶层","商业服务人员阶层","产业工人阶层","农业劳动者阶层","城市无业、失业和半失业人员阶层"],collegesName:[],classesName:[]}},methods:{getCollegeName:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("formData/collegeNames");case 2:r=t.sent,a=r.data,e.collegesName=a;case 5:case"end":return t.stop()}}),t)})))()},getClassesName:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$get("formData/majorClasses",{collegeName:e});case 2:a=r.sent,n=a.data,t.Form.major="",t.classesName=n;case 6:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.getCollegeName()}}},f183:function(e,t,r){var a=r("d012"),n=r("861d"),o=r("5135"),l=r("9bf2").f,s=r("90e3"),i=r("bb2f"),c=s("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(e){l(e,c,{value:{objectID:"O"+ ++u,weakData:{}}})},m=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,c)){if(!d(e))return"F";if(!t)return"E";f(e)}return e[c].objectID},p=function(e,t){if(!o(e,c)){if(!d(e))return!0;if(!t)return!1;f(e)}return e[c].weakData},h=function(e){return i&&b.REQUIRED&&d(e)&&!o(e,c)&&f(e),e},b=e.exports={REQUIRED:!1,fastKey:m,getWeakData:p,onFreeze:h};a[c]=!0}}]);