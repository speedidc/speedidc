(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AnnualStatistics~31ecd969"],{"1d08":function(t,e,a){},"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),i=a("2d00"),s=n("species");t.exports=function(t){return i>=51||!r((function(){var e=[],a=e.constructor={};return a[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"48fb":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return o}));var r=a("a27e");function n(t){return Object(r["a"])({url:"year_reports",params:t})}function i(){return Object(r["a"])({url:"year_reports_chart"})}function s(t){return Object(r["a"])({url:"new_client",params:t})}function c(t){return Object(r["a"])({url:"product_income",params:t})}function o(t){return Object(r["a"])({url:"forward_client",params:t})}},"4ce9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h5",{staticClass:"mt-0"},[t._v("统计本年每月的收益总额=收入-支出，可和上一年每月的收入进行比较。 ")]),a("div",[a("div",{staticClass:"chart-limit"},[t.loading?a("div",{staticClass:"charts_loading clearfix"},[a("div",{staticClass:"limit"},[a("svg",{staticStyle:{margin:"auto",background:"#fff",display:"block"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("circle",{attrs:{cx:"27.5",cy:"51.2574",r:"5",fill:"#fe718d"}},[a("animate",{attrs:{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.6s"}})]),a("circle",{attrs:{cx:"42.5",cy:"43.951",r:"5",fill:"#f47e60"}},[a("animate",{attrs:{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.44999999999999996s"}})]),a("circle",{attrs:{cx:"57.5",cy:"42.6193",r:"5",fill:"#f8b26a"}},[a("animate",{attrs:{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.3s"}})]),a("circle",{attrs:{cx:"72.5",cy:"46.1283",r:"5",fill:"#abbd81"}},[a("animate",{attrs:{attributeName:"cy",calcMode:"spline",keySplines:"0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5",repeatCount:"indefinite",values:"57.5;42.5;57.5;57.5",keyTimes:"0;0.3;0.6;1",dur:"1s",begin:"-0.15s"}})])]),a("span",[t._v("正在加载数据...")])])]):t._e(),t._m(0)]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("div",{attrs:{slot:"empty"},slot:"empty"},[!t.tableData.length&&t.tableLoading?a("span",[a("i",{staticClass:"el-icon-loading"}),t._v(" 正在加载 ... ")]):t._e(),t.tableData.length||t.tableLoading?t._e():a("span",[t._v("暂无数据")])]),a("el-table-column",{attrs:{prop:"date",label:"时间"}}),a("el-table-column",{attrs:{prop:"income",label:"收入"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("div",[t._v(" "+t._s(t.all.currency_prefix)+t._s(r.income)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"expenses",label:"支出"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("div",[t._v(" "+t._s(t.all.currency_prefix)+t._s(r.expenses)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"last",label:"剩余"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("div",[t._v(" "+t._s(t.all.currency_prefix)+t._s(r.last)+" ")])]}}])})],1),a("div",{staticClass:"total_box"},[a("span",{staticStyle:{"margin-right":"10px"}},[t._v("收入总额："+t._s(t.all.currency_prefix)+t._s(t.all.income?t.all.income:"- "))]),a("span",{staticStyle:{"margin-right":"10px"}},[t._v("支出总额："+t._s(t.all.currency_prefix)+t._s(t.all.expenses?t.all.expenses:"- "))]),a("span",[t._v("剩余："+t._s(t.all.currency_prefix)+t._s(t.all.last?t.all.last:"- "))])]),a("el-pagination",{attrs:{"current-page":t.query.page,"page-sizes":[10,15,20,25,50,100],"page-size":t.query.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.currentChange}})],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myChartR clearfix"},[a("div",{staticClass:"chart",staticStyle:{height:"500px"},attrs:{id:"yearsChart"}})])}],i=(a("99af"),a("b0c0"),a("96cf"),a("1da1")),s=a("48fb"),c={metaInfo:{title:"年度收入统计"},data:function(){return{tableLoading:!1,total:0,monthList:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],loading:!0,text:"",currentPage:1,query:{page:void 0,limit:50},tableData:[],all:{},arrX:[],arrIncome:[],arrExpenses:[],myChart:void 0,yearOptions:[]}},created:function(){this.getYearDataChart()},mounted:function(){var t=this;this.getYearData(),window.addEventListener("resize",this.resize),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",t.resize)}))},methods:{resize:function(){this.myChart.resize()},handleSizeChange:function(t){this.query.limit=t,this.getYearData()},currentChange:function(t){this.query.page=t,this.getYearData()},getYearDataChart:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["d"])();case 2:if(a=e.sent,r=a.data,200===r.status){e.next=7;break}return t.$message.error(r.msg),e.abrupt("return");case 7:for(t.loading=!1,t.all=r.data.all,n=[],i=0;i<r.data.chart.list.length;i++)c=r.data.chart.list[i],o={type:"bar",barGap:"0%",barWidth:20,label:{show:!0,position:"top",textStyle:{color:"#666",fontSize:10}}},o.name=c.year+"年",o.data=c.data,o.prefix=c.prefix,n.push(o);t.chartFunc(1,r.data.chart.years,t.monthList,n);case 12:case"end":return e.stop()}}),e)})))()},chartFunc:function(t,e,a,r){var n=this;this.myChart=this.$echarts.init(document.getElementById("yearsChart"));var i={color:["#3673ff","#ff9065","#ffcb41","#43cb7f"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(var e="".concat(t[0].name,"<br>"),a=0;a<t.length;a++){var r=t[a];e+="\n                  ".concat(r.seriesName,"：").concat(n.all.currency_prefix).concat(r.data,"<br>\n                ")}return e}},legend:{x:"100px",y:"30px",data:e},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:a},yAxis:{type:"value",boundaryGap:[0,.01]},series:r};this.myChart.setOption(i,!0)},getYearData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.tableLoading=!0,e.next=3,Object(s["e"])(t.query);case 3:if(a=e.sent,r=a.data,200===r.status){e.next=9;break}return t.$message.error(r.msg),t.tableLoading=!1,e.abrupt("return");case 9:t.total=r.data.year_count_num,t.tableData=r.data.year_count,t.tableLoading=!1;case 12:case"end":return e.stop()}}),e)})))()}},computed:{},watch:{}},o=c,l=(a("e2ea"),a("2877")),u=Object(l["a"])(o,r,n,!1,null,"e2eaf052",null);e["default"]=u.exports},8418:function(t,e,a){"use strict";var r=a("c04e"),n=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var s=r(e);s in t?n.f(t,s,i(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),i=a("e8b5"),s=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),h=f("isConcatSpreadable"),m=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),y=d("concat"),v=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},x=!g||!y;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,r,n,i,s=c(this),d=u(s,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?s:arguments[e],v(i)){if(n=o(i.length),f+n>m)throw TypeError(b);for(a=0;a<n;a++,f++)a in i&&l(d,f,i[a])}else{if(f>=m)throw TypeError(b);l(d,f++,i)}return d.length=f,d}})},e2ea:function(t,e,a){"use strict";var r=a("1d08"),n=a.n(r);n.a}}]);