(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CustomerTransactions~31ecd969"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"19d6":function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return u}));var r=a("a27e");function s(t){return Object(r["a"])({url:"accounts",params:t})}function l(){return Object(r["a"])({url:"search_page"})}function o(t){return Object(r["a"])({url:"accounts/create?uid="+t})}function i(t){return Object(r["a"])({url:"accounts",method:"post",data:t})}function n(t){return Object(r["a"])({url:"accounts/".concat(t),method:"delete"})}function c(t){return Object(r["a"])({url:"accounts/".concat(t)})}function u(t,e){return Object(r["a"])({url:"accounts/".concat(t),method:"put",data:e})}},"2e73":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[t._l(t.totalMoneyArr,(function(e,r){return a("el-row",{key:r,staticClass:"mb-20",attrs:{gutter:15}},[a("el-col",{attrs:{span:6,xs:24,sm:12,md:6}},[a("el-card",{staticClass:"tac"},[a("div",{staticClass:"count"},[t._v(t._s(e.amount_in||"0"))]),a("div",[t._v("总收入")])])],1),a("el-col",{attrs:{span:6,xs:24,sm:12,md:6}},[a("el-card",{staticClass:"tac mtxs-20"},[a("div",{staticClass:"count"},[t._v(t._s(e.fees||"0"))]),a("div",[t._v("手续费总计")])])],1),a("el-col",{attrs:{span:6,xs:24,sm:12,md:6}},[a("el-card",{staticClass:"tac mtsm-20"},[a("div",{staticClass:"count "},[t._v(t._s(e.amount_out||"0"))]),a("div",[t._v("总支出")])])],1),a("el-col",{attrs:{span:6,xs:24,sm:12,md:6}},[a("el-card",{staticClass:"tac mtsm-20"},[a("div",{staticClass:"count"},[t._v(t._s(e.surplus||"0"))]),a("div",[t._v("结余")])])],1)],1)})),a("el-button",{staticClass:"mt-20",attrs:{size:"small",type:"success",icon:"el-icon-plus"},on:{click:function(e){t.DialogVisiable=!0}}},[t._v("添加交易记录 ")]),a("el-table",{staticClass:"mt-20",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.sortChange}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v("暂无数据")])]),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"70",sortable:"",align:"center"}}),a("el-table-column",{attrs:{prop:"trans_id",label:"交易记录号"}}),a("el-table-column",{attrs:{prop:"create_time",label:"交易记录生成日",width:"135",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v(" "+t._s(0===a.pay_time?"-":t.$moment(1e3*a.pay_time).format("YYYY-MM-DD HH:mm"))+" ")]}}])}),a("el-table-column",{attrs:{prop:"gateway",label:"付款方式","min-width":"110"}}),a("el-table-column",{attrs:{prop:"description",label:"描述"}}),a("el-table-column",{attrs:{prop:"amount_in",label:"收入",width:"110"}}),a("el-table-column",{attrs:{prop:"fees",label:"手续费",width:"110"}}),a("el-table-column",{attrs:{prop:"amount_out",label:"支出",width:"110"}}),a("el-table-column",{attrs:{label:"操作",width:"135",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("el-button",{staticClass:"span-primary",attrs:{size:"small",type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.editHandleClick(r.id)}}},[t._v(" 编辑 ")]),a("el-button",{staticClass:"span-danger",attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.deleteHandleClick(r.id)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{staticClass:"mt-10",attrs:{"current-page":t.search.page,"page-sizes":[10,15,20,25,50,100],"page-size":t.search.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.search,"page",e)},"update:current-page":function(e){return t.$set(t.search,"page",e)},"update:pageSize":function(e){return t.$set(t.search,"limit",e)},"update:page-size":function(e){return t.$set(t.search,"limit",e)}}}),a("el-dialog",{attrs:{title:this.formData.id?"编辑交易记录":"添加交易记录",visible:t.DialogVisiable},on:{"update:visible":function(e){t.DialogVisiable=e},open:t.getAddPageInfo,closed:t.resetForm}},[a("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.addrules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"支付时间",prop:"pay_time"}},[a("el-date-picker",{style:{width:"100%"},attrs:{size:"small",format:"yyyy-MM-dd","value-format":"timestamp",placeholder:"请选择时间",clearable:""},model:{value:t.formData.pay_time,callback:function(e){t.$set(t.formData,"pay_time",e)},expression:"formData.pay_time"}})],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{style:{width:"100%"},attrs:{size:"small",placeholder:"请输入描述",clearable:""},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"付款流水号",prop:"trans_id"}},[a("el-input",{style:{width:"100%"},attrs:{size:"small",placeholder:"请输入付款流水号",clearable:""},model:{value:t.formData.trans_id,callback:function(e){t.$set(t.formData,"trans_id",e)},expression:"formData.trans_id"}})],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"账单编号",prop:"invoice_id"}},[a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择账单编号",filterable:"",clearable:""},model:{value:t.formData.invoice_id,callback:function(e){t.$set(t.formData,"invoice_id",e)},expression:"formData.invoice_id"}},t._l(t.invoiceOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"付款方式",prop:"gateway"}},[a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择付款方式",clearable:""},model:{value:t.formData.gateway,callback:function(e){t.$set(t.formData,"gateway",e)},expression:"formData.gateway"}},t._l(t.gatewayOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.name,disabled:t.disabled}})})),1)],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"收入",prop:"amount_in"}},[a("el-input-number",{style:{width:"100%"},attrs:{size:"small",controls:!1,precision:2,placeholder:"请输入收入",clearable:""},model:{value:t.formData.amount_in,callback:function(e){t.$set(t.formData,"amount_in",e)},expression:"formData.amount_in"}})],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"支出",prop:"amount_out"}},[a("el-input-number",{style:{width:"100%"},attrs:{size:"small",controls:!1,precision:2,placeholder:"请输入支出",clearable:""},model:{value:t.formData.amount_out,callback:function(e){t.$set(t.formData,"amount_out",e)},expression:"formData.amount_out"}})],1)],1),a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"手续费",prop:"fees"}},[a("el-input-number",{style:{width:"100%"},attrs:{size:"small",controls:!1,precision:2,placeholder:"请输入手续费",clearable:""},model:{value:t.formData.fees,callback:function(e){t.$set(t.formData,"fees",e)},expression:"formData.fees"}})],1)],1),t.formData.id?t._e():a("el-col",{attrs:{span:12,xs:24,sm:24,md:12}},[a("el-form-item",{attrs:{label:"货币类型",prop:"currency"}},[a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择货币类型",clearable:""},model:{value:t.formData.currency,callback:function(e){t.$set(t.formData,"currency",e)},expression:"formData.currency"}},t._l(t.currencyOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.code,value:t.code,disabled:t.disabled}})})),1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.DialogVisiable=!1}}},[t._v("取消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.submitForm}},[t._v("确定")])],1)],1),a("el-dialog",{attrs:{title:"编辑交易记录",visible:t.editDialogVisiable},on:{"update:visible":function(e){t.editDialogVisiable=e},open:t.getAddPageInfo,closed:t.resetForm}},[a("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.addrules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"支付时间",prop:"pay_time"}},[a("el-date-picker",{style:{width:"100%"},attrs:{size:"small",format:"yyyy-MM-dd","value-format":"timestamp",placeholder:"请选择时间",clearable:""},model:{value:t.formData.pay_time,callback:function(e){t.$set(t.formData,"pay_time",e)},expression:"formData.pay_time"}})],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{style:{width:"100%"},attrs:{size:"small",placeholder:"请输入描述",clearable:""},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"付款流水号",prop:"trans_id"}},[a("el-input",{style:{width:"100%"},attrs:{size:"small",placeholder:"请输入付款流水号",clearable:""},model:{value:t.formData.trans_id,callback:function(e){t.$set(t.formData,"trans_id",e)},expression:"formData.trans_id"}})],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"账单编号",prop:"invoice_id"}},[a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择账单编号",filterable:"",clearable:""},model:{value:t.formData.invoice_id,callback:function(e){t.$set(t.formData,"invoice_id",e)},expression:"formData.invoice_id"}},t._l(t.invoiceOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"付款方式",prop:"gateway"}},[a("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择付款方式",clearable:""},model:{value:t.formData.gateway,callback:function(e){t.$set(t.formData,"gateway",e)},expression:"formData.gateway"}},t._l(t.gatewayOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.name,disabled:t.disabled}})})),1)],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"收入",prop:"amount_in"}},[a("el-input-number",{style:{width:"100%"},attrs:{size:"small",controls:!1,precision:2,placeholder:"请输入收入",clearable:""},model:{value:t.formData.amount_in,callback:function(e){t.$set(t.formData,"amount_in",e)},expression:"formData.amount_in"}})],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"支出",prop:"amount_out"}},[a("el-input-number",{style:{width:"100%"},attrs:{size:"small",controls:!1,precision:2,placeholder:"请输入支出",clearable:""},model:{value:t.formData.amount_out,callback:function(e){t.$set(t.formData,"amount_out",e)},expression:"formData.amount_out"}})],1)],1),a("el-col",{attrs:{md:23,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"手续费",prop:"fees"}},[a("el-input-number",{style:{width:"100%"},attrs:{size:"small",controls:!1,precision:2,placeholder:"请输入手续费",clearable:""},model:{value:t.formData.fees,callback:function(e){t.$set(t.formData,"fees",e)},expression:"formData.fees"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.editDialogVisiable=!1}}},[t._v("取消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.submitForm}},[t._v("确定")])],1)],1)],2)},s=[],l=(a("a9e3"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),o=a("19d6"),i={data:function(){return{tableLoading:!1,id:this.$route.query.id,totalMoneyArr:{CNY:{amount_in:"",amount_out:"",fees:"",surplus:""}},tableData:[],total:0,usernameOptions:[],pay_statusOptions:[],paymentOptions:[],search:{uid:Number(this.$route.query.id),page:1,limit:Number(localStorage.getItem("limit"))||50,order:"id",sort:"DESC",payment:void 0,status:void 0,create_time:void 0,due_time:void 0,paid_time:void 0,subtotal_small:void 0,subtotal_big:void 0},DialogVisiable:!1,formData:{uid:Number(this.$route.query.id),pay_time:null,description:void 0,trans_id:void 0,invoice_id:"无",gateway:void 0,amount_in:0,amount_out:0,fees:0,currency:void 0,refund:!1,id:void 0},addrules:{uid:[],pay_time:[{required:!0,message:"请选择时间",trigger:"change"}],description:[{required:!1,message:"请输入描述",trigger:"change"}],trans_id:[],invoice_id:[{required:!1,message:"请选择账单编号",trigger:"change"}],gateway:[],amount_in:[],amount_out:[],currency:[],fees:[]},invoiceOptions:[],gatewayOptions:[],currencyOptions:[],isEdit:!1,editDialogVisiable:!1}},methods:{resetForm:function(){this.isEdit=!1,this.formData.id=void 0,this.$refs.elForm.resetFields()},getTableData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("{}"===JSON.stringify(t.$store.state.flowList)){e.next=6;break}t.tableData=t.$store.state.flowList.data,t.total=t.$store.state.flowList.page.total,t.totalMoneyArr=t.$store.state.flowList.count,e.next=20;break;case 6:return t.tableLoading=!0,e.next=9,Object(o["g"])(t.search);case 9:if(a=e.sent,r=a.data,200===r.status){e.next=16;break}return t.$message.error(r.msg),e.abrupt("return",!1);case 16:t.tableData=r.data,t.total=r.page.total,t.totalMoneyArr=r.count;case 19:t.tableLoading=!1;case 20:case"end":return e.stop()}}),e)})))()},sortChange:function(t,e,a){this.search.order=t.prop,"ascending"===t.order?this.search.sort="AESC":this.search.sort="DESC",this.getTableData()},handleSizeChange:function(){this.getTableData()},handleCurrentChange:function(){this.getTableData()},getAddPageInfo:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["e"])(t.id);case 2:if(a=e.sent,r=a.data,200===r.status){e.next=7;break}return t.$message.error(r.msg),e.abrupt("return");case 7:t.invoiceOptions=r.data.users.length?r.data.users[0].invoices:[],t.gatewayOptions=r.data.gateways,t.currencyOptions=r.data.currency,t.formData.pay_time=new Date,t.formData.currency=r.data.currency.length?r.data.currency[0].code:void 0;case 12:case"end":return e.stop()}}),e)})))()},submitForm:function(){var t=this;this.$refs.elForm.validate(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(a){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return",!1);case 2:if(t.formData.pay_time/=1e3,t.formData.id){e.next=10;break}return e.next=6,Object(o["a"])(t.formData);case 6:r=e.sent,200===r.data.status?(t.getTableData(),t.$message.success(r.data.msg),t.DialogVisiable=!1):(t.formData.pay_time*=1e3,t.$message.error(r.data.msg)),e.next=14;break;case 10:return e.next=12,Object(o["d"])(t.formData.id,t.formData);case 12:s=e.sent,200!==s.status?(t.$message.error(s.data.msg),t.formData.pay_time*=1e3):(t.getTableData(),t.$message.success(s.data.msg),t.editDialogVisiable=!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},editHandleClick:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isEdit=!0,e.editDialogVisiable=!0,a.next=4,Object(o["c"])(t);case 4:r=a.sent,200!==r.status?e.$message.error(r.data.msg):(r.data.list.pay_time*=1e3,e.formData=r.data.list);case 6:case"end":return a.stop()}}),a)})))()},deleteHandleClick:function(t){var e=this;this.$confirm("将删除此条流水记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["b"])(t).then((function(t){200!==t.data.status?e.$message.error(t.data.msg):(e.$message.success(t.data.msg),e.getTableData())}))})).catch((function(){}))}},created:function(){this.getTableData(),this.$store.commit("setFlow",{})}},n=i,c=(a("72e5"),a("2877")),u=Object(c["a"])(n,r,s,!1,null,"5996ee2e",null);e["default"]=u.exports},"4cc5":function(t,e,a){},"72e5":function(t,e,a){"use strict";var r=a("4cc5"),s=a.n(r);s.a},"841c":function(t,e,a){"use strict";var r=a("d784"),s=a("825a"),l=a("1d80"),o=a("129f"),i=a("14c3");r("search",1,(function(t,e,a){return[function(e){var a=l(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a):new RegExp(e)[t](String(a))},function(t){var r=a(e,t,this);if(r.done)return r.value;var l=s(t),n=String(this),c=l.lastIndex;o(c,0)||(l.lastIndex=0);var u=i(l,n);return o(l.lastIndex,c)||(l.lastIndex=c),null===u?-1:u.index}]}))}}]);