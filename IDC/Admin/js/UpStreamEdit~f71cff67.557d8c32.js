(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UpStreamEdit~f71cff67"],{"4e25":function(t,e,r){"use strict";r.d(e,"s",(function(){return a})),r.d(e,"l",(function(){return u})),r.d(e,"b",(function(){return o})),r.d(e,"o",(function(){return i})),r.d(e,"r",(function(){return c})),r.d(e,"a",(function(){return s})),r.d(e,"k",(function(){return d})),r.d(e,"n",(function(){return p})),r.d(e,"c",(function(){return l})),r.d(e,"y",(function(){return m})),r.d(e,"u",(function(){return f})),r.d(e,"t",(function(){return b})),r.d(e,"v",(function(){return h})),r.d(e,"w",(function(){return g})),r.d(e,"m",(function(){return j})),r.d(e,"g",(function(){return O})),r.d(e,"f",(function(){return v})),r.d(e,"h",(function(){return w})),r.d(e,"j",(function(){return x})),r.d(e,"i",(function(){return _})),r.d(e,"z",(function(){return k})),r.d(e,"p",(function(){return D})),r.d(e,"e",(function(){return $})),r.d(e,"q",(function(){return y})),r.d(e,"d",(function(){return z})),r.d(e,"x",(function(){return F}));var n=r("a27e");function a(t){return Object(n["a"])({url:"upper/index",params:t})}function u(t){return Object(n["a"])({url:"upper/del",method:"post",data:t})}function o(t){return Object(n["a"])({url:"upper/addpost",method:"post",data:t})}function i(t){return Object(n["a"])({url:"upper/edituppost",method:"post",data:t})}function c(t){return Object(n["a"])({url:"upper/upperindex",method:"get",params:t})}function s(t){return Object(n["a"])({url:"upper/addupperpost",method:"post",data:t})}function d(t){return Object(n["a"])({url:"upper/delupper",method:"post",data:t})}function p(t){return Object(n["a"])({url:"upper/editupperpost",method:"post",data:t})}function l(){return Object(n["a"])({url:"upper/addupperpage"})}function m(t){return Object(n["a"])({url:"upper/ipmi/status",params:{id:t}})}function f(t){return Object(n["a"])({url:"upper/ipmi/on",method:"post",data:{id:t}})}function b(t){return Object(n["a"])({url:"upper/ipmi/off",method:"post",data:{id:t}})}function h(t){return Object(n["a"])({url:"upper/ipmi/reboot",method:"post",data:{id:t}})}function g(t){return Object(n["a"])({url:"upper/ipmi/vnc",method:"post",data:{id:t}})}function j(t){return Object(n["a"])({url:"upper/editupperpage",params:{id:t}})}function O(t){return Object(n["a"])({url:"upper/dcim_client/on",method:"post",data:{id:t}})}function v(t){return Object(n["a"])({url:"upper/dcim_client/off",method:"post",data:{id:t}})}function w(t){return Object(n["a"])({url:"upper/dcim_client/reboot",method:"post",data:{id:t}})}function x(t){return Object(n["a"])({url:"upper/dcim_client/vnc",method:"post",data:{id:t}})}function _(t){return Object(n["a"])({url:"upper/dcim_client/status",params:{id:t}})}function k(t){return Object(n["a"])({url:"upper/dcim_client/reinstall",method:"post",data:t})}function D(t){return Object(n["a"])({url:"upper/dcim_client/get_os",method:"post",data:t})}function $(t){return Object(n["a"])({url:"upper/dcim_client/crack_pass",method:"post",data:t})}function y(t){return Object(n["a"])({url:"upper/dcim_client/resintall_status",method:"post",data:t})}function z(t){return Object(n["a"])({url:"upper/dcim_client/cancel_task",method:"post",data:t})}function F(t){return Object(n["a"])({url:"upper/dcim_client/cancel_task",method:"post",data:t})}},"524c":function(t,e,r){},"94d8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"admin_edit"},[r("h2",[t._v(t._s(t.$route.query.id?"编辑上游资料":"添加上游"))]),r("el-divider"),r("el-row",{staticClass:"topform_wrap"},[r("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.rules,"label-width":t.labelWidth,"label-position":"top"}},[r("el-form-item",{attrs:{label:"上游名称",prop:"name"}},[r("el-input",{style:{width:"260px"},attrs:{size:"small",autocomplete:"off",placeholder:"请输入上游名称",clearable:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[r("el-input",{style:{width:"260px"},attrs:{size:"small",autocomplete:"off",placeholder:"请输入联系方式",clearable:""},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),r("el-form-item",{attrs:{label:"备注",prop:"bz"}},[r("el-input",{style:{width:"260px"},attrs:{size:"small",autocomplete:"off",placeholder:"请输入备注",clearable:""},model:{value:t.formData.bz,callback:function(e){t.$set(t.formData,"bz",e)},expression:"formData.bz"}})],1)],1)],1),r("div",{staticClass:"bottomOperationAdd"},[r("el-button",{attrs:{size:"small",type:"primary",loading:t.btnLoading},on:{click:t.submitForm}},[t._v("提交")]),r("el-button",{attrs:{size:"small"},on:{click:t.goBack}},[t._v("返回")]),r("el-button",{attrs:{size:"small"},on:{click:t.resetForm}},[t._v("重置")])],1)],1)},a=[],u=(r("b0c0"),r("a9e3"),r("96cf"),r("1da1")),o=r("4e25"),i={metaInfo:{title:"管理员编辑"},data:function(){return{labelWidth:window.document.body.clientWidth>768?"140px":null,submitFormInfo:{},formData:{name:void 0,phone:void 0,bz:void 0},rules:{name:[{required:!0,message:"请输入上游名称",trigger:"blur"}],phone:[{required:!1,message:"请输入联系方式",trigger:"blur"},{required:!1,pattern:/^[0-9]{5,13}$/,message:"请输入正确的手机号",trigger:"blur"}]},btnLoading:!1}},methods:{submitForm:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.elForm.validate(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.abrupt("return",-1);case 4:if(t.$route.query.id){e.next=13;break}return t.btnLoading=!0,e.next=8,Object(o["b"])(t.formData);case 8:n=e.sent,200===n.data.status?(t.$message.success("添加成功"),t.$router.push({name:"munualResource",params:{tabIndex:2}})):t.$message.error("".concat(n.data.msg)),t.btnLoading=!1,e.next=22;break;case 13:if(!t.$route.query.id){e.next=22;break}return Object.assign(t.submitFormInfo,t.formData),t.submitFormInfo.id=Number(t.$route.query.id),t.btnLoading=!0,e.next=19,Object(o["o"])(t.submitFormInfo);case 19:a=e.sent,200===a.data.status?(t.editInit(),t.$message.success("更新数据成功"),t.$router.push({name:"munualResource",params:{tabIndex:2}})):t.$message.error("".concat(a.data.msg)),t.btnLoading=!1;case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},resetForm:function(){this.$refs.elForm.resetFields()},goBack:function(){this.$router.go(-1)},editInit:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$route.query.id,e.next=3,Object(o["s"])({id:r});case 3:if(n=e.sent,a=n.data,200===a.status){e.next=8;break}return a.msg&&t.$message.error(a.msg),e.abrupt("return");case 8:t.formData=a.data[0];case 9:case"end":return e.stop()}}),e)})))()},addInit:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.formData.name=void 0,t.formData.phone=void 0,t.formData.bz=void 0;case 3:case"end":return e.stop()}}),e)})))()},confirmPwdChange:function(){this.formData.confirmPwd!==this.formData.pwd?(this.pwdDiff=!0,this.pwdDiffMsg="两次密码不一致"):(this.pwdDiff=!1,this.pwdDiffMsg="")}},mounted:function(){this.$route.query.id?this.editInit():this.addInit()}},c=i,s=(r("c45d"),r("2877")),d=Object(s["a"])(c,n,a,!1,null,"3480a156",null);e["default"]=d.exports},c45d:function(t,e,r){"use strict";var n=r("524c"),a=r.n(n);a.a}}]);