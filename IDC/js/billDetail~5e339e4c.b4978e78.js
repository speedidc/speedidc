(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["billDetail~5e339e4c"],{1723:function(t,a,e){"use strict";var i=e("fdbe"),s=e.n(i);s.a},2231:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"pdfCentent",staticClass:"layout_card p-20"},[e("div",{staticClass:"breadcrumb"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/finance"}}},[e("i",{staticClass:"iconfont icon-caiwuzhongxin"}),t._v(" 财务 ")]),e("el-breadcrumb-item",[t._v("账单详情")])],1)],1),e("section",{ref:"print"},[e("img",{attrs:{src:t.imgUrl,id:"printImg",alt:"",width:"595px"}})]),e("div",{staticClass:"bill_wrap",attrs:{id:"pdfCentent"}},[e("div",{staticClass:"bill_wrap_top"},[e("div",{staticClass:"wrap_top_row1"},[e("div",{staticClass:"top_row1_left"},[e("div",[e("div",{staticClass:"fz-24 color-fff"},[t._v(t._s(t.pageData.detail.username||"-"))]),e("div",{staticClass:"row1_left_company fz-20"},[t._v(t._s(t.pageData.detail.companyname||"-"))])])]),e("div",{staticClass:"top_row1_right flexc",style:{color:"Unpaid"===t.pageData.detail.status?"#f00":"#2f54ea"}},[t._v(" "+t._s(t._f("realStatus")(t.pageData.detail.status)))])]),e("div",{staticClass:"wrap_top_row2"},[e("div",{staticClass:"top_row2_right flexc-v"},[t._v("账单编号 #"+t._s(t.$route.query.id||"-"))])]),e("div",{staticClass:"wrap_top_leftblock"})]),e("div",{staticClass:"bill_wrap_bottom"},[e("div",{staticClass:"wrap_bottom_inner"},[t._m(0),e("div",{staticClass:"bottom_inner_row flex-between mb-60"},[e("div",{staticClass:"fz-14"},[t._v(t._s(t.pageData.detail.username||"-"))]),e("div",{staticClass:"fz-14"},[t._v(t._s(t.pageData.payee||"-"))])]),t._m(1),e("div",{staticClass:"bottom_inner_row flex-between mb-60"},[e("div",{staticClass:"fz-14"},[t._v(" "+t._s(t.pageData.detail.paid_time?t.$moment(1e3*t.pageData.detail.paid_time).format("YYYY-MM-DD HH:mm"):"-")+" ")]),e("div",{staticClass:"fz-14"},[t._v(" "+t._s(t.pageData.detail.payment_zh||"-")+" ")])]),e("div",{staticClass:"mb-40",staticStyle:{height:"6px","background-color":"#2f54ea"}}),t._m(2),e("el-divider"),t._l(t.pageData.invoice_items,(function(a,i){return e("div",{key:i,staticClass:"bottom_inner_row flex-between mb-10 "},[e("div",{staticClass:"fz-14 "},[e("pre",{staticClass:"order_item"},[t._v(t._s(a.description))])]),e("div",{staticClass:"fz-16"},[t._v(" "+t._s(t.pageData.currency.prefix||"-")+" "+t._s(a.amount||"-")+" ")])])})),e("div",{staticClass:"bottom_inner_row clearfix"},[e("div",{staticClass:"flex-between fr",staticStyle:{width:"40%"}},[e("div",{staticClass:"inner_row_label"},[t._v("小计")]),e("div",{staticClass:"fz-23 font-bold pr-20"},[t._v(" "+t._s(t.pageData.currency.prefix||"-")+" "+t._s(t.pageData.detail.subtotal||"-")+" ")])])]),e("div",{staticClass:"bottom_inner_row clearfix"},[e("div",{staticClass:"flex-between fr",staticStyle:{width:"40%"}},[e("el-divider")],1)]),"Paid"!==t.pageData.detail.status?e("div",{staticClass:"bottom_inner_row clearfix mb-20"},[e("div",{staticClass:"flex-between fr",staticStyle:{width:"40%"}},[e("div",{staticClass:"inner_row_label"},[t._v("使用余额")]),e("div",{staticClass:"fz-23 font-bold pr-20"},[t._v(" "+t._s(t.pageData.currency.prefix||"-")+" "+t._s(t.pageData.detail.credit||"-")+" ")])])]):t._e(),t.pageData.detail.total&&"Paid"===t.pageData.detail.status?t._e():e("div",{staticClass:"bottom_inner_row clearfix mb-20"},[e("div",{staticClass:"inner_row_paycount flex-between fr",staticStyle:{width:"40%"}},[e("div",{staticClass:"inner_row_label"},[t._v("付款金额")]),e("div",{staticClass:"fz-23 font-bold pr-20",staticStyle:{color:"#ed2324"}},[t._v(t._s(t.pageData.detail.total||"-"))])])]),e("div",{staticClass:"bottom_inner_row clearfix mb-20"},["Unpaid"===t.pageData.detail.status?e("div",{staticClass:"flex-xend fr",staticStyle:{width:"40%"}},[e("el-button",{attrs:{type:"danger"},on:{click:t.useCredit}},[t._v("去支付")])],1):t._e()]),t.pageData.accounts.length?e("el-table",{attrs:{data:t.tableData,border:"","row-key":"id","default-expand-all":"","tree-props":{children:"items"}}},[e("el-table-column",{attrs:{prop:"pay_time",label:"交易日期"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.row;return[e("span",[t._v(t._s(i.pay_time?t.$moment(1e3*i.pay_time).format("YYYY-MM-DD HH:mm"):"-"))])]}}],null,!1,3453788608)}),e("el-table-column",{attrs:{prop:"gateway",label:"付款方式"}}),e("el-table-column",{attrs:{prop:"trans_id",label:"交易流水号"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.row;return[t._v(" "+t._s(e.trans_id||"-")+" ")]}}],null,!1,2955109914)}),e("el-table-column",{attrs:{prop:"amount_in",label:"金额"}})],1):t._e()],2),e("div",{staticClass:"wrap_bottom_bottomblock"})])]),e("div",{staticClass:"bottom_inner_opt tar mt-40"},[e("span",{staticClass:"inner_opt_print mr-10",on:{click:t.backOrder}},[e("i",{staticClass:"el-icon-back"}),t._v(" 返回 ")]),e("span",{staticClass:"inner_opt_download",on:{click:function(a){return t.ExportSavePdf(t.htmlTitle,t.nowTime)}}},[e("i",{staticClass:"el-icon-download"}),t._v("下载 ")])]),e("payDia",{ref:"control",attrs:{title:"结算"},on:{"pay-success":t.payCallBack}})],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom_inner_row flex-between mb-20"},[e("div",{staticClass:"fz-16 font-bold"},[t._v("账单支付人")]),e("div",{staticClass:"fz-16 font-bold"},[t._v("支付给")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom_inner_row flex-between mb-20"},[e("div",{staticClass:"fz-16 font-bold"},[t._v("账单日期")]),e("div",{staticClass:"fz-16 font-bold"},[t._v("付款方式")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom_inner_row flex-between mb-20"},[e("div",{staticClass:"fz-16"},[t._v("账单详情")]),e("div",{staticClass:"fz-16"},[t._v("小计")])])}],r=(e("96cf"),e("1da1")),n=e("c0e9"),l=e.n(n),o=e("cf81"),c=e("e81f"),d={components:{payDia:o["default"]},metaInfo:function(){return{title:"账单内页"}},filters:{realStatus:function(t){switch(t){case"Paid":return"已付款";case"Unpaid":return"待支付";case"Refunded":return"已退款"}}},data:function(){return{imgUrl:"",htmlTitle:"",nowTime:"",tableData:[],id:"",pageData:{detail:{},currency:{},accounts:[]}}},created:function(){this.id=this.$route.query.id,this.getData()},mounted:function(){},methods:{backOrder:function(){this.$router.push({name:"Finance"})},payCallBack:function(t){t&&this.getData()},useCredit:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.$refs.control.main({id:a.$route.query.id});case 1:case"end":return t.stop()}}),t)})))()},doPrint:function(){var t=this;l()(this.$refs.pdfCentent).then((function(a){t.imgUrl=a.toDataURL(),t.$nextTick((function(){t.$print(t.$refs.print)}))}))},getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={id:t.id},a.next=3,Object(c["i"])(e);case 3:if(i=a.sent,s=i.data,200===s.status){a.next=8;break}return t.$message.error(s.msg),a.abrupt("return");case 8:t.pageData=s.data,t.tableData=s.data.accounts,t.htmlTitle="账单#"+t.$route.query.id+"_",t.nowTime=t.$moment().format("YYYY-MM-DD HH:mm:ss");case 12:case"end":return a.stop()}}),a)})))()}},computed:{},watch:{}},_=d,f=(e("1723"),e("2877")),u=Object(f["a"])(_,i,s,!1,null,"2a7b107e",null);a["default"]=u.exports},fdbe:function(t,a,e){}}]);