(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductRevenue~f71cff67"],{2118:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("ac1f"),r("25f0"),r("5319");function a(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,r="x"===t?e:3&e|8;return r.toString(16)}))}},"48fb":function(t,e,r){"use strict";r.d(e,"e",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return s}));var a=r("a27e");function n(t){return Object(a["a"])({url:"year_reports",params:t})}function o(){return Object(a["a"])({url:"year_reports_chart"})}function l(t){return Object(a["a"])({url:"new_client",params:t})}function u(t){return Object(a["a"])({url:"product_income",params:t})}function s(t){return Object(a["a"])({url:"forward_client",params:t})}},"593a":function(t,e,r){"use strict";var a=r("793d"),n=r.n(a);n.a},"793d":function(t,e,r){},e46f:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("h5",{staticClass:"mt-0"},[t._v("指定月份系统中所有产品收入数据，包括新订购收入、数量，续费收入、数量，总金额统计。 ")]),r("el-row",{style:{marginBottom:"10px"}},[r("div",{staticClass:"my--col"},[r("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择年",clearable:""},on:{change:t.getMonth},model:{value:t.query.year,callback:function(e){t.$set(t.query,"year",e)},expression:"query.year"}},t._l(t.yearOptions,(function(t,e){return r("el-option",{key:e,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)],1),r("div",{staticClass:"my--col"},[r("el-select",{style:{width:"100%"},attrs:{size:"small",placeholder:"请选择月",clearable:""},model:{value:t.query.month,callback:function(e){t.$set(t.query,"month",e)},expression:"query.month"}},t._l(t.monthOptions,(function(t,e){return r("el-option",{key:e,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1)],1),r("div",{staticClass:"my--col my--col_btn"},[r("el-button",{attrs:{disabled:!t.query.month||!t.query.year,type:"primary",size:"small"},on:{click:t.getProduct}},[t._v("搜索")])],1)]),r("el-table",{staticClass:"productserver_sTable",staticStyle:{width:"100%"},attrs:{"row-class-name":t.tableRowClassName,data:t.tableData,border:""}},[r("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?r("span",[r("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():r("span",[t._v("暂无数据")])]),r("el-table-column",{attrs:{prop:"name",label:"产品"}}),r("el-table-column",{attrs:{prop:"new_order_amount",label:"新订购收入"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[r("div",[t._v(" "+t._s(a.renew_order_prefix)+t._s(a.new_order_amount)+t._s(a.renew_order_suffix)+" ")])]}}])}),r("el-table-column",{attrs:{prop:"new_order_num",label:"新订购数量"}}),r("el-table-column",{attrs:{prop:"renew_order_amount",label:"续费收入"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[r("div",[t._v(" "+t._s(a.renew_order_prefix)+t._s(a.renew_order_amount)+t._s(a.renew_order_suffix)+" ")])]}}])}),r("el-table-column",{attrs:{prop:"renew_order_num",label:"续费数量"}}),r("el-table-column",{attrs:{prop:"total_amount",label:"总金额"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[r("div",[t._v(" "+t._s(a.renew_order_prefix)+t._s(a.total_amount)+t._s(a.renew_order_suffix)+" ")])]}}])})],1),r("el-pagination",{attrs:{"current-page":t.query.page,"page-sizes":[10,15,20,25,50,100],"page-size":t.query.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.currentChange}})],1)},n=[],o=(r("4160"),r("159b"),r("96cf"),r("1da1")),l=r("2118"),u=r("48fb"),s={metaInfo:{title:"产品收入"},data:function(){return{tableLoading:!1,monthNum:0,tableData:[],monthList:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],monthOptions:[],yearOptions:[{label:"2019年",value:2019},{label:"2020年",value:2020}],query:{year:void 0,month:parseInt(this.$moment().format("MM")),search_type:void 0,limit:50,page:void 0},total:void 0}},created:function(){this.getProduct(),this.getMonth()},mounted:function(){},methods:{tableRowClassName:function(t){var e=t.row;t.rowIndex;return e.products?"group-row":"product-row"},getMonth:function(){this.monthNum=parseInt(this.query.year)===parseInt(this.$moment().format("YYYY"))?parseInt(this.$moment().format("MM")):12,this.monthOptions=[];for(var t=0;t<this.monthNum;t++){var e=this.monthList[t],r={value:t+1,label:e};this.monthOptions.push(r)}},currentChange:function(t){this.query.page=t,this.getProduct()},handleSizeChange:function(t){this.query.limit=t,this.getProduct()},getProduct:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(u["c"])(t.query);case 3:if(r=e.sent,a=r.data,t.total=a.total,n=[],200===a.status){e.next=9;break}return e.abrupt("return",!1);case 9:(a.data||[]).forEach((function(t){t.uid=Object(l["a"])(),n.push(t),t.products?(t.products||[]).forEach((function(t){t.uid=Object(l["a"])(),n.push(t)})):t.products=[]})),t.total=a.groups_count,t.yearOptions=a.years,t.query.year=a.years[a.years.length-1].value,t.tableData=n,t.tableLoading=!1;case 15:case"end":return e.stop()}}),e)})))()}},computed:{},watch:{}},i=s,c=(r("593a"),r("2877")),d=Object(c["a"])(i,a,n,!1,null,"762ee7d3",null);e["default"]=d.exports}}]);