(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d876853","chunk-f71cb348"],{3462:function(e,t,r){"use strict";var n=r("8162"),o=r.n(n);o.a},"53ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}},6062:function(e,t,r){"use strict";var n=r("6d61"),o=r("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},6566:function(e,t,r){"use strict";var n=r("9bf2").f,o=r("7c73"),a=r("e2cc"),i=r("0366"),s=r("19aa"),l=r("2266"),c=r("7dd0"),u=r("2626"),d=r("83ab"),f=r("f183").fastKey,g=r("69f3"),m=g.set,p=g.getterFor;e.exports={getConstructor:function(e,t,r,c){var u=e((function(e,n){s(e,u,t),m(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=n&&l(n,e[c],e,r)})),g=p(t),h=function(e,t,r){var n,o,a=g(e),i=v(e,t);return i?i.value=r:(a.last=i={index:o=f(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=i),n&&(n.next=i),d?a.size++:e.size++,"F"!==o&&(a.index[o]=i)),e},v=function(e,t){var r,n=g(e),o=f(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return a(u.prototype,{clear:function(){var e=this,t=g(e),r=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,r=g(t),n=v(t,e);if(n){var o=n.next,a=n.previous;delete r.index[n.index],n.removed=!0,a&&(a.next=o),o&&(o.previous=a),r.first==n&&(r.first=o),r.last==n&&(r.last=a),d?r.size--:t.size--}return!!n},forEach:function(e){var t,r=g(this),n=i(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:r.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!v(this,e)}}),a(u.prototype,r?{get:function(e){var t=v(this,e);return t&&t.value},set:function(e,t){return h(this,0===e?0:e,t)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),d&&n(u.prototype,"size",{get:function(){return g(this).size}}),u},setStrong:function(e,t,r){var n=t+" Iterator",o=p(t),a=p(n);c(e,t,(function(e,t){m(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(t)}}},"6d61":function(e,t,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("94ca"),i=r("6eeb"),s=r("f183"),l=r("2266"),c=r("19aa"),u=r("861d"),d=r("d039"),f=r("1c7e"),g=r("d44e"),m=r("7156");e.exports=function(e,t,r){var p=-1!==e.indexOf("Map"),h=-1!==e.indexOf("Weak"),v=p?"set":"add",b=o[e],x=b&&b.prototype,y=b,k={},w=function(e){var t=x[e];i(x,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(h&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(h&&!u(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(a(e,"function"!=typeof b||!(h||x.forEach&&!d((function(){(new b).entries().next()})))))y=r.getConstructor(t,e,p,v),s.REQUIRED=!0;else if(a(e,!0)){var F=new y,S=F[v](h?{}:-0,1)!=F,Q=d((function(){F.has(1)})),_=f((function(e){new b(e)})),D=!h&&d((function(){var e=new b,t=5;while(t--)e[v](t,t);return!e.has(-0)}));_||(y=t((function(t,r){c(t,y,e);var n=m(new b,t,y);return void 0!=r&&l(r,n[v],n,p),n})),y.prototype=x,x.constructor=y),(Q||D)&&(w("delete"),w("has"),p&&w("get")),(D||S)&&w(v),h&&x.clear&&delete x.clear}return k[e]=y,n({global:!0,forced:y!=b},k),g(y,e),h||r.setStrong(y,e,p),y}},7039:function(e,t,r){var n=r("23e7"),o=r("d039"),a=r("057f").f,i=o((function(){return!Object.getOwnPropertyNames(1)}));n({target:"Object",stat:!0,forced:i},{getOwnPropertyNames:a})},"7afa":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"score"},[r("span",[e._v("感谢您的参与，您在该模块的测试得分为：")]),r("number-counter",{staticClass:"nums",attrs:{value:this.score,time:.1,denominator:this.total}},[e._v("/")]),this.ratio>80?r("div",[e._v("分数等级为优秀。")]):this.ratio>50?r("div",[e._v("分数等级为良好。")]):r("div",[e._v("分数等级为一般。")]),r("div",[e._v("您可以继续参与其他模块测试。")]),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleClose}},[e._v("确 定")])],1)],1)},o=[],a=(r("99af"),r("a9e3"),r("96cf"),r("1da1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"number-grow-warp"},[r("span",{ref:"numberGrow",staticClass:"number-grow"},[e._v("0")])])},s=[],l=(r("d3b7"),r("ac1f"),r("25f0"),r("5319"),{props:{time:{type:Number,default:1},value:{type:Number,default:0},denominator:{type:Number,default:1}},data:function(){return{}},mounted:function(){this.numberGrow(this.$refs.numberGrow)},methods:{numberGrow:function(e){var t=this,r=parseInt(this.value/(100*this.time)),n=0,o=0,a=setInterval((function(){o+=r+10,o>=t.value&&(clearInterval(a),o=t.value,a=null),n!==o&&(n=o+"/".concat(t.denominator),e.innerHTML=n.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g,"$1,"))}),150)}}}),c=l,u=r("2877"),d=Object(u["a"])(c,i,s,!1,null,null,null),f=d.exports,g={props:{id:{type:String,dafault:function(){return""}},type:{type:Number,dafault:function(){return 0}}},data:function(){return{score:0,total:0}},methods:{handleClose:function(){this.$emit("dialogClose"),this.$router.push("question")},getScore:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("person/personCheck".concat(e.type,"/").concat(e.id));case 2:r=t.sent,n=r.data,e.score=n.score,e.total=n.total,console.log(n);case 7:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getScore();case 2:console.log(e.type);case 3:case"end":return t.stop()}}),t)})))()},computed:{ratio:function(){return this.score/this.total*100}},components:{NumberCounter:f}},m=g,p=(r("3462"),Object(u["a"])(m,n,o,!1,null,null,null));t["default"]=p.exports},8162:function(e,t,r){},"8f76":function(e,t,r){"use strict";var n=r("cd38"),o=r.n(n);o.a},9166:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"title",rawName:"v-title"}],staticClass:"box",attrs:{"data-title":"问卷 "}},[r("div",{staticClass:"main"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("div",[e._v("大学生学情情况与能力调查问卷")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.backHome}},[e._v("返回")])],1),r("div",[e._v(" 基本信息 "),e.isRecord?r("el-link",{attrs:{type:"primary"},on:{click:e.recovery}},[e._v("读取个人信息数据")]):e._e()],1),r("el-divider"),r("el-form",{ref:"ruleForm",staticClass:"demoForm",attrs:{model:e.Form,rules:e.rules,"label-width":"100px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"sex",label:"1你的性别",id:"a1"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("sex",1)}},model:{value:e.Form.sex,callback:function(t){e.$set(e.Form,"sex",t)},expression:"Form.sex"}},[r("el-radio",{attrs:{label:"男",value:"boy",border:""}}),r("el-radio",{attrs:{label:"女",value:"girl",border:""}})],1)],1),r("el-form-item",{attrs:{prop:"age",label:"2您的年龄",id:"a2"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("age",2)}},model:{value:e.Form.age,callback:function(t){e.$set(e.Form,"age",t)},expression:"Form.age"}})],1),r("el-form-item",{attrs:{prop:"grade",label:"3您的年级",id:"a3"}},[r("el-radio-group",{on:{change:function(t){return e.handleSelect("grade",3)}},model:{value:e.Form.grade,callback:function(t){e.$set(e.Form,"grade",t)},expression:"Form.grade"}},[r("el-radio",{attrs:{label:"大一",value:"大一",border:""}}),r("el-radio",{attrs:{label:"大二",value:"大二",border:""}}),r("el-radio",{attrs:{label:"大三",value:"大三",border:""}}),r("el-radio",{attrs:{label:"大四",value:"大四",border:""}})],1)],1),r("el-form-item",{attrs:{prop:"school",label:"4您的学校",id:"a4"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("school",4)}},model:{value:e.Form.school,callback:function(t){e.$set(e.Form,"school",t)},expression:"Form.school"}})],1),r("el-form-item",{attrs:{prop:"college",label:"5您的学院",id:"a5"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("college",5)}},model:{value:e.Form.college,callback:function(t){e.$set(e.Form,"college",t)},expression:"Form.college"}})],1),r("el-form-item",{attrs:{prop:"major",label:"6您的专业",id:"a6"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("major",6)}},model:{value:e.Form.major,callback:function(t){e.$set(e.Form,"major",t)},expression:"Form.major"}})],1),r("el-form-item",{attrs:{prop:"StudentID",label:"7您的学号",id:"a7"}},[r("el-input",{attrs:{placeholder:"请输入内容"},on:{change:function(t){return e.handleSelect("StudentID",7)}},model:{value:e.Form.StudentID,callback:function(t){e.$set(e.Form,"StudentID",t)},expression:"Form.StudentID"}})],1),r("el-form-item",{attrs:{prop:"profession",label:"8您父母所属的主要职业阶层是",id:"a8"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.handleSelect("profession",8)}},model:{value:e.Form.profession,callback:function(t){e.$set(e.Form,"profession",t)},expression:"Form.profession"}},e._l(e.professionArray,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("div",[e._v("模块一、专业认知")]),r("el-divider"),e._l(e.arrQueList,(function(t){return r("div",{key:t.index},[r("div",{staticClass:"Firstlevel",attrs:{id:"a"+t.index}},[e._v(" "+e._s(t.title)+" ")]),e._l(t.Subtitle,(function(n,o){return r("el-form-item",{key:n.question,attrs:{prop:"Q"+t.index,label:n.question}},[r("el-radio-group",{on:{change:function(r){return e.handleSelect("Q"+t.index,t.index)}},model:{value:e.Form["Q"+t.index][o],callback:function(r){e.$set(e.Form["Q"+t.index],o,r)},expression:"Form['Q' + item1.index][index2]"}},e._l(n.options,(function(t){return r("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.name))])})),1)],1)}))],2)})),r("el-form-item",{attrs:{label:"11您是通过以下哪些途径了解本专业的<多选>",prop:"Q11",id:"a11"}},[r("el-checkbox-group",{on:{change:function(t){return e.handleSelect("Q11",11)}},model:{value:e.Form.Q11,callback:function(t){e.$set(e.Form,"Q11",t)},expression:"Form.Q11"}},[r("el-checkbox",{attrs:{label:"与专业老师交流",name:"type"}}),r("el-checkbox",{attrs:{label:"高年级在校生介绍",name:"type"}}),r("el-checkbox",{attrs:{label:"专业认知讲座与课程",name:"type"}}),r("el-checkbox",{attrs:{label:"专业相关网站和论坛",name:"type"}}),r("el-checkbox",{attrs:{label:"专业相关书籍",name:"type"}}),r("el-checkbox",{attrs:{label:"与校外专业人士交流",name:"type"}})],1)],1),r("div",{staticClass:"btn"},[r("el-button",{staticClass:"submit",attrs:{"el-button":"",type:"primary"},on:{click:e.save}},[e._v("提交")]),r("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?r("score-dialog",{attrs:{id:this.Form.StudentID,type:1},on:{dialogClose:e.closeDialog}}):e._e()],1)],1)],2)],1)],1),r("div",{staticClass:"tips"},[r("div",{staticClass:"btnBox"},[r("div",{staticClass:"title"},[e._v(" 基本信息 "),r("div",{ref:"btnQues",staticClass:"btnQues"},e._l(e.arrQuebtnNum,(function(t,n){return r("el-button",{key:n,staticClass:"singleBtn",attrs:{id:n},on:{click:function(r){return e.btnclick(t)}}},[e._v(e._s(t))])})),1)]),r("div",{staticClass:"title"},[e._v(" 模块一 专业认知 "),r("div",{ref:"btnQues1",staticClass:"btnQues"},e._l(e.arrQuebtnNum2,(function(t,n){return r("el-button",{key:n,staticClass:"singleBtn",attrs:{id:n},on:{click:function(r){return e.btnclick(t)}}},[e._v(e._s(t))])})),1)]),r("el-progress",{attrs:{"text-inside":"",percentage:e.percentage>100?100:e.percentage,color:e.customColors,"stroke-width":24}}),r("div",{staticClass:"backTop"},[r("el-tooltip",{attrs:{effect:"dark",content:"返回顶部",placement:"right-start"}},[r("el-button",{attrs:{icon:"el-icon-caret-top"},on:{click:e.backTophandle}})],1)],1)],1)])])},o=[],a=(r("4160"),r("c975"),r("a9e3"),r("7039"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("96cf"),r("1da1")),i=r("53ca"),s=r("ed08"),l=r("7afa"),c={data:function(){return{rules:{sex:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],age:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],grade:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],school:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],college:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],major:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],StudentID:[{required:!0,message:"您还有未选择的选项",trigger:"change"}],profession:[{required:!0,message:"您还有未选择的选项",trigger:"change"}]},percentage:0,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],professionArray:["国家与社会管理者","企业经理人员","私营企业主","专业人士与技术人员","办事人员阶层","个体工商户阶层","商业服务人员阶层","产业工人阶层","农业劳动者阶层","城市无业、失业和半失业人员阶层"]}}},u={name:"Que1",mixins:[c],data:function(){return{Form:{sex:"",age:"",grade:"",school:"",college:"",major:"",StudentID:"",profession:"",Q9:[],Q10:[],Q11:[]},dialogVisible:!1,queSetArr:[],singlePercentage:"",arrQuebtnNum:[1,2,3,4,5,6,7,8],arrQuebtnNum2:[9,10,11],arrQuebtn:[],arrQuebtn2:[],arrQueList:[],isRecord:!1,btnFlag:!1}},mounted:function(){var e=new Set([]);this.queSetArr=e,console.log(this.queSetArr),console.log(Object(i["a"])(this.queSetArr)),this.arrQuebtn=this.$refs.btnQues.children,this.arrQuebtn1=this.$refs.btnQues1.children;var t=Object.getOwnPropertyNames(this.Form).length-1,r=parseInt(Math.ceil(1e4/t));this.singlePercentage=r/100,this.getQuestionList(),this.checkRecord()},methods:{save:function(){var e=this;console.log(this.Form);var t=this.Form;this.$refs.ruleForm.validate(function(){var r=Object(a["a"])(regeneratorRuntime.mark((function r(n){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n){r.next=2;break}return r.abrupt("return");case 2:return o={sex:t.sex,age:t.age,grade:t.grade,school:t.school,college:t.college,major:t.major,StudentID:t.StudentID,profession:t.profession},window.localStorage.setItem("PersonData",JSON.stringify(o)),r.next=6,e.$post("form/form1",e.$Qs.stringify(t));case 6:a=r.sent,console.log(a),a.data.errMessage?e.$message({type:"error",message:"系统异常"}):e.$alert("提交成功，您可以查看本次测试得分情况。","提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"success",message:"添加成功"}),e.openDialog()}});case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},openDialog:function(){console.log(this.Form),this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1},resetForm:function(){this.$refs.ruleForm.resetFields(),this.arrQuebtn.forEach((function(e){e.style.background="rgb(255,255,255)"})),this.percentage=0},recovery:function(){if(!this.btnFlag){var e=JSON.parse(window.localStorage.getItem("PersonData"));this.Form.sex=e.sex,this.Form.age=e.age,this.Form.grade=e.grade,this.Form.school=e.school,this.Form.college=e.college,this.Form.major=e.major,this.Form.StudentID=e.StudentID,this.Form.profession=e.profession;var t=this.singlePercentage;this.percentage+=8*t,this.queSetArr.add("sex","age","grade","school","college","major","Student","profession");for(var r=0;r<8;r++)this.arrQuebtn[r].style.background="rgb(72,162,255)";this.btnFlag=!0}},handleSelect:function(e,t){t-=1;var r=this.singlePercentage;if(!this.queSetArr.has(e))if(this.percentage+=r,this.percentage=Math.round(100*this.percentage)/100,this.queSetArr.add(e),t<8)this.arrQuebtn[t].style.background="rgb(72,162,255)";else{t+=1;var n=Number(t),o=this.arrQuebtnNum2.indexOf(n);this.arrQuebtn1[o].style.background="rgb(72,162,255)"}},getQuestionList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$get("formData/questions");case 2:r=t.sent,n=r.data,e.arrQueList=n;case 5:case"end":return t.stop()}}),t)})))()},btnclick:function(e){location.href="#a"+e},backHome:function(){this.$router.push("/question")},backTophandle:function(){Object(s["a"])(window,0)},checkRecord:function(){window.localStorage.getItem("PersonData")?this.isRecord=!0:this.isRecord=!1}},components:{ScoreDialog:l["default"]}},d=u,f=(r("8f76"),r("2877")),g=Object(f["a"])(d,n,o,!1,null,"f8e6f098",null);t["default"]=g.exports},bb2f:function(e,t,r){var n=r("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cd38:function(e,t,r){},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return i}));r("ac1f"),r("5319");var n=r("53ca");function o(e,t,r){clearInterval(e.timer),e.timer=setInterval((function(){var n=(t-window.pageYOffset)/10;n=n>0?Math.ceil(n):Math.floor(n),window.pageYOffset===t&&(clearInterval(e.timer),r&&r()),window.scroll(0,window.pageYOffset+n)}),15)}function a(e,t){if(0===arguments.length)return null;var r,o=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(n["a"])(e)?r=e:(10===(""+e).length&&(e=1e3*parseInt(e)),r=new Date(e));var a={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},i=o.replace(/{(y|m|d|h|i|s|a)+}/g,(function(e,t){var r=a[t];return"a"===t?["一","二","三","四","五","六","日"][r-1]:(e.length>0&&r<10&&(r="0"+r),r||0)}));return i}function i(e,t,r){var n,o,a,i,s,l=function l(){var c=+new Date-i;c<t&&c>0?n=setTimeout(l,t-c):(n=null,r||(s=e.apply(a,o),n||(a=o=null)))};return function(){for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];a=this,i=+new Date;var d=r&&!n;return n||(n=setTimeout(l,t)),d&&(s=e.apply(a,c),a=c=null),s}}},f183:function(e,t,r){var n=r("d012"),o=r("861d"),a=r("5135"),i=r("9bf2").f,s=r("90e3"),l=r("bb2f"),c=s("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(e){i(e,c,{value:{objectID:"O"+ ++u,weakData:{}}})},g=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,c)){if(!d(e))return"F";if(!t)return"E";f(e)}return e[c].objectID},m=function(e,t){if(!a(e,c)){if(!d(e))return!0;if(!t)return!1;f(e)}return e[c].weakData},p=function(e){return l&&h.REQUIRED&&d(e)&&!a(e,c)&&f(e),e},h=e.exports={REQUIRED:!1,fastKey:g,getWeakData:m,onFreeze:p};n[c]=!0}}]);