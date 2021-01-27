(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6527549e","chunk-f71cb348"],{"15d1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"box",attrs:{"data-title":"问卷 "}},[r("div",{staticClass:"main"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("div",[e._v("大学生学情情况与能力调查问卷")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.backHome}},[e._v("返回")])],1),r("div",[e._v(" 基本信息 "),e.isRecord?r("el-link",{attrs:{type:"primary"},on:{click:e.recovery}},[e._v("读取个人信息数据")]):e._e()],1),r("el-divider"),r("el-form",{ref:"ruleForm",staticClass:"demoForm",attrs:{model:e.Form,rules:e.rules,"label-width":"100px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"sex",label:"1你的性别",id:"a1"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("sex",1)}},model:{value:e.Form.sex,callback:function(t){e.$set(e.Form,"sex",t)},expression:"Form.sex"}},[r("el-radio",{attrs:{label:"男",value:"boy",border:""}}),r("el-radio",{attrs:{label:"女",value:"girl",border:""}})],1)],1),r("el-form-item",{attrs:{prop:"age",label:"2您的年龄",id:"a2"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("age",2)}},model:{value:e.Form.age,callback:function(t){e.$set(e.Form,"age",t)},expression:"Form.age"}})],1),r("el-form-item",{attrs:{prop:"grade",label:"3您的年级",id:"a3"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("grade",3)}},model:{value:e.Form.grade,callback:function(t){e.$set(e.Form,"grade",t)},expression:"Form.grade"}},[r("el-radio",{attrs:{label:"大一",value:"大一",border:""}}),r("el-radio",{attrs:{label:"大二",value:"大二",border:""}}),r("el-radio",{attrs:{label:"大三",value:"大三",border:""}}),r("el-radio",{attrs:{label:"大四",value:"大四",border:""}})],1)],1),r("el-form-item",{attrs:{prop:"school",label:"4您的学校",id:"a4"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("school",4)}},model:{value:e.Form.school,callback:function(t){e.$set(e.Form,"school",t)},expression:"Form.school"}})],1),r("el-form-item",{attrs:{prop:"college",label:"5您的学院",id:"a5"}},[r("el-select",{attrs:{placeholder:"请选择学院"},on:{change:function(t){e.handleSelect("college",5),e.getClassesName(e.Form.college)}},model:{value:e.Form.college,callback:function(t){e.$set(e.Form,"college",t)},expression:"Form.college"}},e._l(e.collegesName,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{prop:"major",label:"6您的专业",id:"a6"}},[r("el-select",{attrs:{placeholder:"请选择专业"},on:{change:function(t){return e.handleSelect("major",6)}},model:{value:e.Form.major,callback:function(t){e.$set(e.Form,"major",t)},expression:"Form.major"}},e._l(e.classesName,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{attrs:{prop:"StudentID",label:"7您的学号",id:"a7"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("StudentID",7)}},model:{value:e.Form.StudentID,callback:function(t){e.$set(e.Form,"StudentID",t)},expression:"Form.StudentID"}})],1),r("el-form-item",{attrs:{prop:"profession",label:"8您父母所属的主要职业阶层是",id:"a8"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleSelect("profession",8)}},model:{value:e.Form.profession,callback:function(t){e.$set(e.Form,"profession",t)},expression:"Form.profession"}},e._l(e.professionArray,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("div",[e._v("模块五、在校体验")]),r("el-divider"),e._l(e.arrQueList2,(function(t){return r("div",{key:t.index},[r("div",{staticClass:"Firstlevel",attrs:{id:"a"+t.index}},[e._v(" "+e._s(t.title)+" ")]),e._l(t.Subtitle,(function(n,a){return r("el-form-item",{key:n.question,attrs:{prop:"Q"+t.index,label:n.question}},[r("el-radio-group",{on:{change:function(r){return e.handleSelect("Q"+t.index,t.index)}},model:{value:e.Form["Q"+t.index][a],callback:function(r){e.$set(e.Form["Q"+t.index],a,r)},expression:"Form['Q' + item1.index][index2]"}},e._l(n.options,(function(t){return r("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.name))])})),1)],1)}))],2)})),r("el-form-item",{attrs:{label:"41您认为本校学风方面主要强调了哪些方面<多选>",prop:"Q41",id:"a41"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q41",41)}},model:{value:e.Form.Q41,callback:function(t){e.$set(e.Form,"Q41",t)},expression:"Form.Q41"}},[r("el-checkbox",{attrs:{label:"在学业方面投入大量时间",name:"type"}}),r("el-checkbox",{attrs:{label:"端正学习态度，严肃课堂纪律",name:"type"}}),r("el-checkbox",{attrs:{label:"严格规范考试管理",name:"type"}}),r("el-checkbox",{attrs:{label:"以上均未强调",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"42请您对本校提供的教室及教学设备进行评价<多选>",prop:"Q42",id:"a42"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q42",42)}},model:{value:e.Form.Q42,callback:function(t){e.$set(e.Form,"Q42",t)},expression:"Form.Q42"}},[r("el-checkbox",{attrs:{label:"数量满足教学需求",name:"type"}}),r("el-checkbox",{attrs:{label:"功能满足教学需求",name:"type"}}),r("el-checkbox",{attrs:{label:"管理与维护方便使用",name:"type"}}),r("el-checkbox",{attrs:{label:"设施更新及时",name:"type"}}),r("el-checkbox",{attrs:{label:"以上均不满足",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"43请您对本校提供的实验室及设备进行评价<多选>",prop:"Q43",id:"a43"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q43",43)}},model:{value:e.Form.Q43,callback:function(t){e.$set(e.Form,"Q43",t)},expression:"Form.Q43"}},[r("el-checkbox",{attrs:{label:"数量满足实践需求（如满足实验的安排和分组情况等)",name:"type"}}),r("el-checkbox",{attrs:{label:"功能满足实践需求",name:"type"}}),r("el-checkbox",{attrs:{label:"有良好的管理与运行维护机制，方便使用",name:"type"}}),r("el-checkbox",{attrs:{label:"设备或材料更新及时",name:"type"}}),r("el-checkbox",{attrs:{label:"以上均不满足",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"44请您对本校提供的计算机、网络及图书资源进行评价<多选>",prop:"Q44",id:"a44"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q44",44)}},model:{value:e.Form.Q44,callback:function(t){e.$set(e.Form,"Q44",t)},expression:"Form.Q44"}},[r("el-checkbox",{attrs:{label:"满足日常学习需求",name:"type"}}),r("el-checkbox",{attrs:{label:"管理规范",name:"type"}}),r("el-checkbox",{attrs:{label:"共享程度高",name:"type"}}),r("el-checkbox",{attrs:{label:"设备及资源更新及时",name:"type"}}),r("el-checkbox",{attrs:{label:"以上均不满足",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"45感谢您认真完成了问卷，对于本学院，您有什么建议",prop:"Q45",id:"a45"}},[r("el-input",{attrs:{placeholder:"请输入",type:"textarea"},on:{change:function(t){return e.handleSelect("Q45",45)}},model:{value:e.Form.Q45,callback:function(t){e.$set(e.Form,"Q45",t)},expression:"Form.Q45"}})],1),r("div",{staticClass:"btn"},[r("el-button",{staticClass:"submit",attrs:{"el-button":"",type:"primary"},on:{click:e.save}},[e._v("提交")]),r("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?r("score-dialog",{attrs:{id:this.Form.StudentID,type:5},on:{dialogClose:e.closeDialog}}):e._e()],1)],1)],2)],1)],1),r("div",{staticClass:"tips"},[r("div",{staticClass:"btnBox"},[r("div",{staticClass:"title"},[e._v(" 基本信息 "),r("div",{ref:"btnQues",staticClass:"btnQues"},e._l(e.arrQuebtnNum,(function(t,n){return r("el-button",{key:n,staticClass:"singleBtn",attrs:{id:n},on:{click:function(r){return e.btnclick(t)}}},[e._v(e._s(t))])})),1)]),r("div",{staticClass:"title"},[e._v(" 模块五 在校体验 "),r("div",{ref:"btnQues2",staticClass:"btnQues"},e._l(e.arrQuebtnNum2,(function(t,n){return r("el-button",{key:n,staticClass:"singleBtn",attrs:{id:n},on:{click:function(r){return e.btnclick(t)}}},[e._v(e._s(t))])})),1)]),r("el-progress",{attrs:{"text-inside":"",percentage:e.percentage>100?100:e.percentage,color:e.customColors,"stroke-width":24}}),r("div",{staticClass:"backTop"},[r("el-tooltip",{attrs:{effect:"dark",content:"返回顶部",placement:"right-start"}},[r("el-button",{attrs:{icon:"el-icon-caret-top"},on:{click:e.backTophandle}})],1)],1)],1)])])},a=[],o=(r("c975"),r("a9e3"),r("7039"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("96cf"),r("1da1")),s=r("7afa"),i=r("c6f7"),l={name:"Que5",mixins:[i["a"]],data:function(){return{Form:{sex:"",age:"",grade:"",school:"",college:"",major:"",StudentID:"",profession:"",Q35:[],Q36:[],Q37:[],Q38:[],Q39:[],Q40:[],Q41:[],Q42:[],Q43:[],Q44:[],Q45:"",Q45switch:!1},dialogVisible:!1,queSetArr:[],singlePercentage:"",arrQuebtnNum:[1,2,3,4,5,6,7,8],arrQuebtnNum2:[36,37,38,39,40,41,42,43,44,45],arrQuebtn:[],arrQuebtn2:[],arrQueList2:[],isRecord:!1,btnFlag:!1}},mounted:function(){var e=new Set([]);this.queSetArr=e,this.arrQuebtn=this.$refs.btnQues.children,this.arrQuebtn2=this.$refs.btnQues2.children;var t=Object.getOwnPropertyNames(this.Form).length-1,r=parseInt(Math.ceil(1e4/t));this.singlePercentage=r/100,this.getQuestionList(),this.checkRecord()},methods:{save:function(){var e=this,t=this.Form;this.$refs.ruleForm.validate(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(n){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n){r.next=2;break}return r.abrupt("return");case 2:return a={sex:t.sex,age:t.age,grade:t.grade,school:t.school,college:t.college,major:t.major,StudentID:t.StudentID,profession:t.profession},window.localStorage.setItem("PersonData",JSON.stringify(a)),r.next=6,e.$post("form/form5",e.$Qs.stringify(t));case 6:o=r.sent,o.data.errMessage?e.$message({type:"error",message:"系统异常"}):e.$alert("提交成功，您可以查看本次测试得分情况。","提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"success",message:"添加成功"}),e.openDialog()}});case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},openDialog:function(){this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1},recovery:function(){if(!this.btnFlag){var e=JSON.parse(window.localStorage.getItem("PersonData"));this.Form.sex=e.sex,this.Form.age=e.age,this.Form.grade=e.grade,this.Form.school=e.school,this.Form.college=e.college,this.Form.major=e.major,this.Form.StudentID=e.StudentID,this.Form.profession=e.profession;var t=this.singlePercentage;this.percentage+=8*t,this.queSetArr.add("sex","age","grade","school","college","major","Student","profession");for(var r=0;r<8;r++)this.arrQuebtn[r].style.background="rgb(72,162,255)";this.btnFlag=!0}},handleSelect:function(e,t){t-=1;var r=this.singlePercentage;if(!this.queSetArr.has(e))if(this.percentage+=r,this.percentage=Math.round(100*this.percentage)/100,this.queSetArr.add(e),t<8)this.arrQuebtn[t].style.background="rgb(72,162,255)";else{t+=1;var n=Number(t),a=this.arrQuebtnNum2.indexOf(n);this.arrQuebtn2[a].style.background="rgb(72,162,255)"}},getQuestionList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("formData/questions5");case 2:r=t.sent,n=r.data,e.arrQueList2=n;case 6:case"end":return t.stop()}}),t)})))()},btnclick:function(e){location.href="#a"+e},backHome:function(){this.$router.push("/question")},backTophandle:function(){this.animate(window,0)},animate:function(e,t,r){clearInterval(e.timer),e.timer=setInterval((function(){var n=(t-window.pageYOffset)/10;n=n>0?Math.ceil(n):Math.floor(n),window.pageYOffset===t&&(clearInterval(e.timer),r&&r()),window.scroll(0,window.pageYOffset+n)}),15)},checkRecord:function(){window.localStorage.getItem("PersonData")?this.isRecord=!0:this.isRecord=!1}},components:{ScoreDialog:s["default"]}},c=l,u=(r("451e"),r("2877")),d=Object(u["a"])(c,n,a,!1,null,"3ddab980",null);t["default"]=d.exports},3462:function(e,t,r){"use strict";var n=r("8162"),a=r.n(n);a.a},"451e":function(e,t,r){"use strict";var n=r("cb28"),a=r.n(n);a.a},6062:function(e,t,r){"use strict";var n=r("6d61"),a=r("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(e,t,r){"use strict";var n=r("9bf2").f,a=r("7c73"),o=r("e2cc"),s=r("0366"),i=r("19aa"),l=r("2266"),c=r("7dd0"),u=r("2626"),d=r("83ab"),f=r("f183").fastKey,m=r("69f3"),p=m.set,h=m.getterFor;e.exports={getConstructor:function(e,t,r,c){var u=e((function(e,n){i(e,u,t),p(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=n&&l(n,e[c],e,r)})),m=h(t),g=function(e,t,r){var n,a,o=m(e),s=b(e,t);return s?s.value=r:(o.last=s={index:a=f(t,!0),key:t,value:r,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=s),n&&(n.next=s),d?o.size++:e.size++,"F"!==a&&(o.index[a]=s)),e},b=function(e,t){var r,n=m(e),a=f(t);if("F"!==a)return n.index[a];for(r=n.first;r;r=r.next)if(r.key==t)return r};return o(u.prototype,{clear:function(){var e=this,t=m(e),r=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,r=m(t),n=b(t,e);if(n){var a=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=a),a&&(a.previous=o),r.first==n&&(r.first=a),r.last==n&&(r.last=o),d?r.size--:t.size--}return!!n},forEach:function(e){var t,r=m(this),n=s(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:r.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),o(u.prototype,r?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),d&&n(u.prototype,"size",{get:function(){return m(this).size}}),u},setStrong:function(e,t,r){var n=t+" Iterator",a=h(t),o=h(n);c(e,t,(function(e,t){p(this,{type:n,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(t)}}},"6d61":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("94ca"),s=r("6eeb"),i=r("f183"),l=r("2266"),c=r("19aa"),u=r("861d"),d=r("d039"),f=r("1c7e"),m=r("d44e"),p=r("7156");e.exports=function(e,t,r){var h=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),b=h?"set":"add",v=a[e],x=v&&v.prototype,k=v,y={},Q=function(e){var t=x[e];s(x,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!u(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(o(e,"function"!=typeof v||!(g||x.forEach&&!d((function(){(new v).entries().next()})))))k=r.getConstructor(t,e,h,b),i.REQUIRED=!0;else if(o(e,!0)){var F=new k,w=F[b](g?{}:-0,1)!=F,S=d((function(){F.has(1)})),_=f((function(e){new v(e)})),C=!g&&d((function(){var e=new v,t=5;while(t--)e[b](t,t);return!e.has(-0)}));_||(k=t((function(t,r){c(t,k,e);var n=p(new v,t,k);return void 0!=r&&l(r,n[b],n,h),n})),k.prototype=x,x.constructor=k),(S||C)&&(Q("delete"),Q("has"),h&&Q("get")),(C||w)&&Q(b),g&&x.clear&&delete x.clear}return y[e]=k,n({global:!0,forced:k!=v},y),m(k,e),g||r.setStrong(k,e,h),k}},7039:function(e,t,r){var n=r("23e7"),a=r("d039"),o=r("057f").f,s=a((function(){return!Object.getOwnPropertyNames(1)}));n({target:"Object",stat:!0,forced:s},{getOwnPropertyNames:o})},"7afa":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"score"},[r("span",[e._v("感谢您的参与，您在该模块的测试得分为：")]),r("number-counter",{staticClass:"nums",attrs:{value:this.score,time:.1,denominator:this.total}},[e._v("/")]),this.ratio>80?r("div",[e._v("分数等级为优秀。")]):this.ratio>50?r("div",[e._v("分数等级为良好。")]):r("div",[e._v("分数等级为一般。")]),r("div",[e._v("您可以继续参与其他模块测试。")]),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1)},a=[],o=(r("99af"),r("a9e3"),r("96cf"),r("1da1")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"number-grow-warp"},[r("span",{ref:"numberGrow",staticClass:"number-grow"},[e._v("0")])])},i=[],l=(r("d3b7"),r("ac1f"),r("25f0"),r("5319"),{props:{time:{type:Number,default:1},value:{type:Number,default:0},denominator:{type:Number,default:1}},data:function(){return{}},mounted:function(){this.numberGrow(this.$refs.numberGrow)},methods:{numberGrow:function(e){var t=this,r=parseInt(this.value/(100*this.time)),n=0,a=0,o=setInterval((function(){a+=r+10,a>=t.value&&(clearInterval(o),a=t.value,o=null),n!==a&&(n=a+"/".concat(t.denominator),e.innerHTML=n.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g,"$1,"))}),150)}}}),c=l,u=r("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null),f=d.exports,m={props:{id:{type:String,dafault:function(){return""}},type:{type:Number,dafault:function(){return 0}}},data:function(){return{score:0,total:0}},methods:{handleClose:function(){this.$emit("dialogClose"),this.$router.push("question")},getScore:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("person/personCheck".concat(e.type,"/").concat(e.id));case 2:r=t.sent,n=r.data,e.score=n.score,e.total=n.total;case 7:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getScore();case 2:case 3:case"end":return t.stop()}}),t)})))()},computed:{ratio:function(){return this.score/this.total*100}},components:{NumberCounter:f}},p=m,h=(r("3462"),Object(u["a"])(p,n,a,!1,null,null,null));t["default"]=h.exports},8162:function(e,t,r){},bb2f:function(e,t,r){var n=r("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c6f7:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("96cf");var n=r("1da1"),a={data:function(){return{rules:{sex:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],age:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],grade:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],school:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],college:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],major:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],StudentID:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],profession:[{required:!0,message:"您还有未选择的选项",trigger:"change"}]},percentage:0,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],professionArray:["国家与社会管理者","企业经理人员","私营企业主","专业人士与技术人员","办事人员阶层","个体工商户阶层","商业服务人员阶层","产业工人阶层","农业劳动者阶层","城市无业、失业和半失业人员阶层"],collegesName:[],classesName:[]}},methods:{getCollegeName:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("formData/collegeNames");case 2:r=t.sent,n=r.data,e.collegesName=n;case 5:case"end":return t.stop()}}),t)})))()},getClassesName:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$get("formData/majorClasses",{collegeName:e});case 2:n=r.sent,a=n.data,t.Form.major="",t.classesName=a;case 6:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.getCollegeName()}}},cb28:function(e,t,r){},f183:function(e,t,r){var n=r("d012"),a=r("861d"),o=r("5135"),s=r("9bf2").f,i=r("90e3"),l=r("bb2f"),c=i("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(e){s(e,c,{value:{objectID:"O"+ ++u,weakData:{}}})},m=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,c)){if(!d(e))return"F";if(!t)return"E";f(e)}return e[c].objectID},p=function(e,t){if(!o(e,c)){if(!d(e))return!0;if(!t)return!1;f(e)}return e[c].weakData},h=function(e){return l&&g.REQUIRED&&d(e)&&!o(e,c)&&f(e),e},g=e.exports={REQUIRED:!1,fastKey:m,getWeakData:p,onFreeze:h};n[c]=!0}}]);