(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CustomerCancelReq~31ecd969"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),c=n("2d00"),o=a("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"551f2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h5",{staticClass:"mt-0 mb-10"},[t._v("查看取消的订单，添加客户端取消原因。"),n("el-link",{on:{click:t.openDoc}},[t._v("帮助文档")])],1),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("el-button",{attrs:{type:"primary",size:"small",loading:t.loading},on:{click:t.cancelReason}},[t._v("取消原因管理")]),n("el-dialog",t._g(t._b({attrs:{visible:t.diaVisible,title:"取消原因管理",width:"500px"},on:{"update:visible":function(e){t.diaVisible=e},open:t.onOpen,close:t.onClose}},"el-dialog",t.$attrs,!1),t.$listeners),[n("div",{staticClass:"limit_reason"},t._l(t.cancelReasonOptions,(function(e,r){return n("el-row",{key:r,style:{marginBottom:"10px"},attrs:{gutter:15}},[n("el-col",{attrs:{span:21}},[n("el-input",{style:{width:"100%"},attrs:{size:"small",placeholder:"请输入原因"},model:{value:e.reason,callback:function(n){t.$set(e,"reason",n)},expression:"item.reason"}})],1),1!==e.id&&2!==e.id?n("el-col",{staticClass:"removeIcon",attrs:{span:1}},[n("i",{staticClass:"el-icon-remove",on:{click:function(n){return t.removeReason(e,r)}}})]):t._e(),r===t.cancelReasonOptions.length-1?n("el-col",{staticClass:"addIcon",attrs:{span:1}},[n("i",{staticClass:"el-icon-circle-plus",on:{click:t.addReason}})]):t._e()],1)})),1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:t.close}},[t._v("取消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.handelConfirm}},[t._v("确定")])],1)])],1),n("el-table",{staticClass:"mt-10",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.sortChange}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?n("span",[n("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():n("span",[t._v("暂无数据")])]),n("el-table-column",{attrs:{prop:"username",label:"用户(公司)",sortable:"","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("router-link",{attrs:{to:{path:"/customer-view/abstract",query:{id:r.uid}}}},[n("el-link",[n("span",[t._v(t._s(r.username))]),n("span",[t._v(t._s(r.companyname?"("+r.companyname+")":""))])])],1)]}}])}),n("el-table-column",{attrs:{prop:"create_time",label:"请求时间",sortable:"",width:"135",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.create_time?t.$moment(1e3*r.create_time).format("YYYY-MM-DD HH:mm"):"-"))])]}}])}),n("el-table-column",{attrs:{prop:"domain",label:"产品(主机名)",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("router-link",{attrs:{to:{name:"productInnerpage",query:{id:r.uid,hid:r.hid}}}},[n("el-link",[n("span",[t._v(t._s(r.name))])])],1),n("div",{staticClass:"second-row"},[t._v(t._s(r.domain||""))])]}}])}),n("el-table-column",{attrs:{prop:"dedicatedip",label:"IP",sortable:"",width:"120"}}),n("el-table-column",{attrs:{prop:"type",label:"类型(立即、到期)",sortable:"",width:"165",align:"center"}}),n("el-table-column",{attrs:{prop:"reason",label:"原因",sortable:""}}),n("el-table-column",{attrs:{prop:"nextduedate",label:"删除时间",sortable:"",width:"135",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",[t._v(t._s(r.nextduedate?t.$moment(1e3*r.nextduedate).format("YYYY-MM-DD HH:mm"):"-"))])]}}])}),n("el-table-column",{attrs:{prop:"domainstatus",label:"状态",width:"100",sortable:"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("span",{style:{color:r.domainstatus.color}},[t._v(t._s(r.domainstatus.name))])]}}])}),n("el-table-column",{attrs:{prop:"",label:"操作",sortable:"",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return["被删除"!==r.domainstatus.name?n("el-button",{staticClass:"span-danger",attrs:{size:"small",type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.deleteHanleClick(r)}}},[t._v("删除")]):t._e()]}}])})],1),n("el-pagination",{attrs:{"current-page":t.search.page,"page-sizes":[10,15,20,25,50,100],"page-size":t.search.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.getData,"update:currentPage":function(e){return t.$set(t.search,"page",e)},"update:current-page":function(e){return t.$set(t.search,"page",e)},"update:pageSize":function(e){return t.$set(t.search,"limit",e)},"update:page-size":function(e){return t.$set(t.search,"limit",e)}}})],1)},a=[],c=(n("a434"),n("a9e3"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),o=n("c2b8"),i=n("f6b0"),s={metaInfo:{title:"取消请求"},data:function(){return{tableLoading:!1,loading:!1,delArr:[],cancelReasonOptions:[],diaVisible:!1,search:{page:1,limit:Number(localStorage.getItem("limit"))||50,order:"id",sort:"desc"},tableData:[],total:0}},methods:{openDoc:function(){open("https://www.idcsmart.com/wiki_list/393.html")},removeReason:function(t,e){0!==e&&1!==e?(this.delArr.push(t.id),this.cancelReasonOptions.splice(e,1)):this.$message.error("该原因只能修改，不可删除")},addReason:function(){var t={id:"",reason:""};this.cancelReasonOptions.push(t)},onOpen:function(){this.delArr=[]},onClose:function(){this.$emit("update:visible",!1),this.diaVisible=!1,this.delArr=[]},close:function(){this.diaVisible=!1,this.delArr=[]},handelConfirm:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.lodash.pullAllWith(t.cancelReasonOptions,[{id:"",reason:""}],t.lodash.isEqual),n.length){e.next=4;break}return t.$message.error("请输入原因后再提交"),e.abrupt("return");case 4:return r={reason:n,del:t.delArr},e.next=7,Object(o["c"])(r);case 7:a=e.sent,c=a.data,200!==c.status?t.$message.error(c.msg):(t.$message.success(c.msg),t.diaVisible=!1);case 10:case"end":return e.stop()}}),e)})))()},cancelReason:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,Object(o["a"])();case 3:n=e.sent,r=n.data,t.cancelReasonOptions=r.data,t.diaVisible=!0,t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(i["A"])(t.search);case 3:n=e.sent,r=n.data,200!==r.status?t.$message.error(r.msg):(t.tableData=r.data.list,t.total=r.data.total),t.tableLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.search.page=1,this.getData()},sortChange:function(t,e,n){this.search.order=t.prop,"ascending"===t.order?this.search.sort="asc":this.search.sort="desc",this.getData()},deleteHanleClick:function(t){var e=this;this.$confirm("将删除此条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["k"])(t.id);case 2:r=n.sent,a=r.data,200!==a.status?e.$message.error(a.msg):(e.$message.success(a.msg),e.getData());case 5:case"end":return n.stop()}}),n)})))).catch((function(){}))}},created:function(){this.getData()}},u=s,l=(n("e30c"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"07ba1dfc",null);e["default"]=d.exports},5955:function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,c(0,n)):t[o]=n}},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),c=n("1d80"),o=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=a(t),s=String(this),u=c.lastIndex;o(u,0)||(c.lastIndex=0);var l=i(c,s);return o(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]}))},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),c=n("a691"),o=n("50c4"),i=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,b=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,r,l,d,f,p,_=i(this),v=o(_.length),O=a(t,v),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=v-O):(n=w-2,r=b(m(c(e),0),v-O)),v+n-r>h)throw TypeError(g);for(l=s(_,r),d=0;d<r;d++)f=O+d,f in _&&u(l,d,_[f]);if(l.length=r,n<r){for(d=O;d<v-r;d++)f=d+r,p=d+n,f in _?_[p]=_[f]:delete _[p];for(d=v;d>v-r+n;d--)delete _[d-1]}else if(n>r)for(d=v-r;d>O;d--)f=d+r-1,p=d+n-1,f in _?_[p]=_[f]:delete _[p];for(d=0;d<n;d++)_[d+O]=arguments[d+2];return _.length=v-r+n,l}})},c2b8:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s}));var r=n("a27e");function a(){return Object(r["a"])({url:"cancel_request/list"})}function c(){return Object(r["a"])({url:"cancel_request/cancellist"})}function o(t){return Object(r["a"])({url:"cancel_request/list",method:"delete",params:{id:t}})}function i(){return Object(r["a"])({url:"request_cancel_reason"})}function s(t){return Object(r["a"])({url:"request_cancel_reason_post",method:"post",data:t})}},e30c:function(t,e,n){"use strict";var r=n("5955"),a=n.n(r);a.a},f6b0:function(t,e,n){"use strict";n.d(e,"q",(function(){return a})),n.d(e,"s",(function(){return c})),n.d(e,"n",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"r",(function(){return s})),n.d(e,"m",(function(){return u})),n.d(e,"l",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"h",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"e",(function(){return b})),n.d(e,"u",(function(){return h})),n.d(e,"x",(function(){return g})),n.d(e,"c",(function(){return _})),n.d(e,"b",(function(){return v})),n.d(e,"p",(function(){return O})),n.d(e,"A",(function(){return w})),n.d(e,"k",(function(){return j})),n.d(e,"B",(function(){return x})),n.d(e,"t",(function(){return y})),n.d(e,"y",(function(){return k})),n.d(e,"z",(function(){return C})),n.d(e,"d",(function(){return R})),n.d(e,"v",(function(){return $})),n.d(e,"o",(function(){return D})),n.d(e,"i",(function(){return S})),n.d(e,"w",(function(){return z}));var r=n("a27e");function a(t){return Object(r["a"])({url:"client_list",method:"post",data:t})}function c(t){return Object(r["a"])({url:"summary?client_id=".concat(t)})}function o(){return Object(r["a"])({url:"create_client"})}function i(t){return Object(r["a"])({url:"create_client_post",method:"post",data:t})}function s(t){return Object(r["a"])({url:"profile/".concat(t)})}function u(t){return Object(r["a"])({url:"profile_post",method:"post",data:t})}function l(t){return Object(r["a"])({url:"delete_client/".concat(t)})}function d(t){return Object(r["a"])({url:"close_client/".concat(t)})}function f(t){return Object(r["a"])({url:"user_invoice",params:t})}function p(t,e){return Object(r["a"])({url:"close_client/".concat(t),params:e})}function m(t){return Object(r["a"])({url:"client_ticket",params:t})}function b(t){return Object(r["a"])({url:"log_record",params:t})}function h(t){return Object(r["a"])({url:"login_by_user/"+t})}function g(t){return Object(r["a"])({url:"certifi_person_detail/".concat(t)})}function _(t){return Object(r["a"])({url:"add_user_invoice",method:"post",data:t})}function v(t){return Object(r["a"])({url:"add_recharge_invoice/"+t.uid,method:"post",data:t})}function O(t){return Object(r["a"])({url:"get_user",params:t})}function w(t){return Object(r["a"])({url:"request_cancel_list",params:t})}function j(t){return Object(r["a"])({url:"request_cancel_list/".concat(t),method:"delete"})}function x(t){return Object(r["a"])({url:"searchlist",params:{value:t}})}function y(t){return Object(r["a"])({url:"hostbyuid",params:t})}function k(t){return Object(r["a"])({url:"clients_services/host_batch_renew_page",method:"post",data:t})}function C(t){return Object(r["a"])({url:"clients_services/host_batch_renew",method:"post",data:t})}function R(t){return Object(r["a"])({url:"clients_services/apply_credit",method:"post",data:t})}function $(t){return Object(r["a"])({url:"invoice/paid",params:t})}function D(t){return Object(r["a"])({url:"get_combine_invoices",params:t})}function S(t){return Object(r["a"])({url:"combine_invoices",method:"post",data:t})}function z(t){return Object(r["a"])({url:"post_client_notes",method:"post",data:t})}}}]);