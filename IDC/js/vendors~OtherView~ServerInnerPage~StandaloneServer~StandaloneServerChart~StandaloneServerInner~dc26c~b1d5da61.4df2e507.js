(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~OtherView~ServerInnerPage~StandaloneServer~StandaloneServerChart~StandaloneServerInner~dc26c~b1d5da61"],{"0156":function(t,e,n){var i=n("6d8b");function a(t,e,n){n=n||{};var a=t.coordinateSystem,o=e.axis,r={},s=o.getAxesOnZeroOf()[0],l=o.position,c=s?"onZero":l,u=o.dim,h=a.getRect(),d=[h.x,h.x+h.width,h.y,h.y+h.height],f={left:0,right:1,top:0,bottom:1,onZero:2},g=e.get("offset")||0,m="x"===u?[d[2]-g,d[3]+g]:[d[0]-g,d[1]+g];if(s){var x=s.toGlobalCoord(s.dataToCoord(0));m[f.onZero]=Math.max(Math.min(x,m[1]),m[0])}r.position=["y"===u?m[f[c]]:d[0],"x"===u?m[f[c]]:d[3]],r.rotation=Math.PI/2*("x"===u?0:1);var p={top:-1,bottom:1,left:-1,right:1};r.labelDirection=r.tickDirection=r.nameDirection=p[l],r.labelOffset=s?m[f[l]]-m[f.onZero]:0,e.get("axisTick.inside")&&(r.tickDirection=-r.tickDirection),i.retrieve(n.labelInside,e.get("axisLabel.inside"))&&(r.labelDirection=-r.labelDirection);var v=e.get("axisLabel.rotate");return r.labelRotate="top"===c?-v:v,r.z2=1,r}e.layout=a},2023:function(t,e,n){var i=n("6d8b"),a={getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart;return this.axis&&null!=n&&"dataMin"!==n&&"function"!==typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd;return this.axis&&null!=n&&"dataMax"!==n&&"function"!==typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option;return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:i.noop,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}};t.exports=a},"471e":function(t,e){function n(t){var e=t.getRect(),n=t.getRangeInfo();return{coordSys:{type:"calendar",x:e.x,y:e.y,width:e.width,height:e.height,cellWidth:t.getCellWidth(),cellHeight:t.getCellHeight(),rangeInfo:{start:n.start,end:n.end,weeks:n.weeks,dayCount:n.allDay}},api:{coord:function(e,n){return t.dataToPoint(e,n)}}}}t.exports=n},"48c7":function(t,e,n){var i=n("6d8b"),a=n("6cb7"),o=n("9e47"),r=n("2023"),s=a.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});function l(t,e){return e.type||(e.data?"category":"value")}i.merge(s.prototype,r);var c={offset:0};o("x",s,l,c),o("y",s,l,c);var u=s;t.exports=u},"4e08":function(t,e,n){(function(t){var n;"undefined"!==typeof window?n=window.__DEV__:"undefined"!==typeof t&&(n=t.__DEV__),"undefined"===typeof n&&(n=!0);var i=n;e.__DEV__=i}).call(this,n("c8ba"))},"5aa9":function(t,e,n){var i=n("4e08"),a=(i.__DEV__,n("6d8b")),o=a.isObject,r=a.each,s=a.map,l=a.indexOf,c=(a.retrieve,n("f934")),u=c.getLayoutRect,h=n("697e"),d=h.createScaleByModel,f=h.ifAxisCrossZero,g=h.niceScaleExtent,m=h.estimateLabelUnionRect,x=n("cbe9"),p=n("ec02"),v=n("2039"),y=n("ee1a"),_=y.getStackedDimension;function b(t,e,n){return t.getCoordSysModel()===e}function M(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}n("8ed2");var w=M.prototype;function T(t,e,n,i){n.getAxesOnZeroOf=function(){return a?[a]:[]};var a,o=t[e],r=n.model,s=r.get("axisLine.onZero"),l=r.get("axisLine.onZeroAxisIndex");if(s){if(null!=l)A(o[l])&&(a=o[l]);else for(var c in o)if(o.hasOwnProperty(c)&&A(o[c])&&!i[u(o[c])]){a=o[c];break}a&&(i[u(a)]=!0)}function u(t){return t.dim+"_"+t.index}}function A(t){return t&&"category"!==t.type&&"time"!==t.type&&f(t)}function C(t,e){var n=t.getExtent(),i=n[0]+n[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}w.type="grid",w.axisPointerEnabled=!0,w.getRect=function(){return this._rect},w.update=function(t,e){var n=this._axesMap;this._updateScale(t,this.model),r(n.x,(function(t){g(t.scale,t.model)})),r(n.y,(function(t){g(t.scale,t.model)}));var i={};r(n.x,(function(t){T(n,"y",t,i)})),r(n.y,(function(t){T(n,"x",t,i)})),this.resize(this.model,e)},w.resize=function(t,e,n){var i=u(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=i;var a=this._axesList;function o(){r(a,(function(t){var e=t.isHorizontal(),n=e?[0,i.width]:[0,i.height],a=t.inverse?1:0;t.setExtent(n[a],n[1-a]),C(t,e?i.x:i.y)}))}o(),!n&&t.get("containLabel")&&(r(a,(function(t){if(!t.model.get("axisLabel.inside")){var e=m(t);if(e){var n=t.isHorizontal()?"height":"width",a=t.model.get("axisLabel.margin");i[n]-=e[n]+a,"top"===t.position?i.y+=e.height+a:"left"===t.position&&(i.x+=e.width+a)}}})),o())},w.getAxis=function(t,e){var n=this._axesMap[t];if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i];return n[e]}},w.getAxes=function(){return this._axesList.slice()},w.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e;return this._coordsMap[n]}o(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,a=this._coordsList;i<a.length;i++)if(a[i].getAxis("x").index===t||a[i].getAxis("y").index===e)return a[i]},w.getCartesians=function(){return this._coordsList.slice()},w.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},w.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e);return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},w._findConvertTarget=function(t,e){var n,i,a=e.seriesModel,o=e.xAxisModel||a&&a.getReferringComponents("xAxis")[0],r=e.yAxisModel||a&&a.getReferringComponents("yAxis")[0],s=e.gridModel,c=this._coordsList;if(a)n=a.coordinateSystem,l(c,n)<0&&(n=null);else if(o&&r)n=this.getCartesian(o.componentIndex,r.componentIndex);else if(o)i=this.getAxis("x",o.componentIndex);else if(r)i=this.getAxis("y",r.componentIndex);else if(s){var u=s.coordinateSystem;u===this&&(n=this._coordsList[0])}return{cartesian:n,axis:i}},w.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},w._initCartesian=function(t,e,n){var i={left:!1,right:!1,top:!1,bottom:!1},a={x:{},y:{}},o={x:0,y:0};if(e.eachComponent("xAxis",s("x"),this),e.eachComponent("yAxis",s("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[]);function s(n){return function(r,s){if(b(r,t,e)){var l=r.get("position");"x"===n?"top"!==l&&"bottom"!==l&&(l=i.bottom?"top":"bottom"):"left"!==l&&"right"!==l&&(l=i.left?"right":"left"),i[l]=!0;var c=new p(n,d(r),[0,0],r.get("type"),l),u="category"===c.type;c.onBand=u&&r.get("boundaryGap"),c.inverse=r.get("inverse"),r.axis=c,c.model=r,c.grid=this,c.index=s,this._axesList.push(c),a[n][s]=c,o[n]++}}}this._axesMap=a,r(a.x,(function(e,n){r(a.y,(function(i,a){var o="x"+n+"y"+a,r=new x(o);r.grid=this,r.model=t,this._coordsMap[o]=r,this._coordsList.push(r),r.addAxis(e),r.addAxis(i)}),this)}),this)},w._updateScale=function(t,e){function n(t,e,n){r(t.mapDimension(e.dim,!0),(function(n){e.scale.unionExtentFromData(t,_(t,n))}))}r(this._axesList,(function(t){t.scale.setExtent(1/0,-1/0)})),t.eachSeries((function(i){if(S(i)){var a=D(i,t),o=a[0],r=a[1];if(!b(o,e,t)||!b(r,e,t))return;var s=this.getCartesian(o.componentIndex,r.componentIndex),l=i.getData(),c=s.getAxis("x"),u=s.getAxis("y");"list"===l.type&&(n(l,c,i),n(l,u,i))}}),this)},w.getTooltipAxes=function(t){var e=[],n=[];return r(this.getCartesians(),(function(i){var a=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),o=i.getOtherAxis(a);l(e,a)<0&&e.push(a),l(n,o)<0&&n.push(o)})),{baseAxes:e,otherAxes:n}};var L=["xAxis","yAxis"];function D(t,e){return s(L,(function(e){var n=t.getReferringComponents(e)[0];return n}))}function S(t){return"cartesian2d"===t.get("coordinateSystem")}M.create=function(t,e){var n=[];return t.eachComponent("grid",(function(i,a){var o=new M(i,t,e);o.name="grid_"+a,o.resize(i,e,!0),i.coordinateSystem=o,n.push(o)})),t.eachSeries((function(e){if(S(e)){var n=D(e,t),i=n[0],a=n[1],o=i.getCoordSysModel(),r=o.coordinateSystem;e.coordinateSystem=r.getCartesian(i.componentIndex,a.componentIndex)}})),n},M.dimensions=M.prototype.dimensions=x.prototype.dimensions,v.register("cartesian2d",M);var k=M;t.exports=k},"697e":function(t,e,n){var i=n("4e08"),a=(i.__DEV__,n("6d8b")),o=n("18c0"),r=n("89e3"),s=n("e0d8"),l=n("3842"),c=n("9d57"),u=c.prepareLayoutBarSeries,h=c.makeColumnLayout,d=c.retrieveColumnLayout,f=n("9850");function g(t,e){var n,i,o,r=t.type,s=e.getMin(),c=e.getMax(),d=null!=s,f=null!=c,g=t.getExtent();"ordinal"===r?n=e.getCategories().length:(i=e.get("boundaryGap"),a.isArray(i)||(i=[i||0,i||0]),"boolean"===typeof i[0]&&(i=[0,0]),i[0]=l.parsePercent(i[0],1),i[1]=l.parsePercent(i[1],1),o=g[1]-g[0]||Math.abs(g[0])),null==s&&(s="ordinal"===r?n?0:NaN:g[0]-i[0]*o),null==c&&(c="ordinal"===r?n?n-1:NaN:g[1]+i[1]*o),"dataMin"===s?s=g[0]:"function"===typeof s&&(s=s({min:g[0],max:g[1]})),"dataMax"===c?c=g[1]:"function"===typeof c&&(c=c({min:g[0],max:g[1]})),(null==s||!isFinite(s))&&(s=NaN),(null==c||!isFinite(c))&&(c=NaN),t.setBlank(a.eqNaN(s)||a.eqNaN(c)||"ordinal"===r&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(s>0&&c>0&&!d&&(s=0),s<0&&c<0&&!f&&(c=0));var x=e.ecModel;if(x&&"time"===r){var p,v=u("bar",x);if(a.each(v,(function(t){p|=t.getBaseAxis()===e.axis})),p){var y=h(v),_=m(s,c,e,y);s=_.min,c=_.max}}return[s,c]}function m(t,e,n,i){var o=n.axis.getExtent(),r=o[1]-o[0],s=d(i,n.axis);if(void 0===s)return{min:t,max:e};var l=1/0;a.each(s,(function(t){l=Math.min(t.offset,l)}));var c=-1/0;a.each(s,(function(t){c=Math.max(t.offset+t.width,c)})),l=Math.abs(l),c=Math.abs(c);var u=l+c,h=e-t,f=1-(l+c)/r,g=h/f-h;return e+=g*(c/u),t-=g*(l/u),{min:t,max:e}}function x(t,e){var n=g(t,e),i=null!=e.getMin(),a=null!=e.getMax(),o=e.get("splitNumber");"log"===t.type&&(t.base=e.get("logBase"));var r=t.type;t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:o,fixMin:i,fixMax:a,minInterval:"interval"===r||"time"===r?e.get("minInterval"):null,maxInterval:"interval"===r||"time"===r?e.get("maxInterval"):null});var s=e.get("interval");null!=s&&t.setInterval&&t.setInterval(s)}function p(t,e){if(e=e||t.get("type"),e)switch(e){case"category":return new o(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0]);case"value":return new r;default:return(s.getClass(e)||r).create(t)}}function v(t){var e=t.scale.getExtent(),n=e[0],i=e[1];return!(n>0&&i>0||n<0&&i<0)}function y(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null;return"string"===typeof e?(e=function(e){return function(n){return n=t.scale.getLabel(n),e.replace("{value}",null!=n?n:"")}}(e),e):"function"===typeof e?function(i,a){return null!=n&&(a=i-n),e(_(t,i),a)}:function(e){return t.scale.getLabel(e)}}function _(t,e){return"category"===t.type?t.scale.getLabel(e):e}function b(t){var e=t.model,n=t.scale;if(e.get("axisLabel.show")&&!n.isBlank()){var i,a,o="category"===t.type,r=n.getExtent();o?a=n.count():(i=n.getTicks(),a=i.length);var s,l=t.getLabelModel(),c=y(t),u=1;a>40&&(u=Math.ceil(a/40));for(var h=0;h<a;h+=u){var d=i?i[h]:r[0]+h,f=c(d),g=l.getTextRect(f),m=M(g,l.get("rotate")||0);s?s.union(m):s=m}return s}}function M(t,e){var n=e*Math.PI/180,i=t.plain(),a=i.width,o=i.height,r=a*Math.cos(n)+o*Math.sin(n),s=a*Math.sin(n)+o*Math.cos(n),l=new f(i.x,i.y,r,s);return l}function w(t){var e=t.get("interval");return null==e?"auto":e}function T(t){return"category"===t.type&&0===w(t.getLabelModel())}n("216a"),n("8c2a"),e.getScaleExtent=g,e.niceScaleExtent=x,e.createScaleByModel=p,e.ifAxisCrossZero=v,e.makeLabelFormatter=y,e.getAxisRawValue=_,e.estimateLabelUnionRect=b,e.getOptionCategoryInterval=w,e.shouldShowAllLabels=T},"6cc5":function(t,e,n){var i=n("6d8b"),a=n("401b"),o=n("1687"),r=n("9850"),s=n("0cde"),l=a.applyTransform;function c(){s.call(this)}function u(t){this.name=t,this.zoomLimit,s.call(this),this._roamTransformable=new c,this._rawTransformable=new c,this._center,this._zoom}function h(t,e,n,i){var a=n.seriesModel,o=a?a.coordinateSystem:null;return o===this?o[t](i):null}i.mixin(c,s),u.prototype={constructor:u,type:"view",dimensions:["x","y"],setBoundingRect:function(t,e,n,i){return this._rect=new r(t,e,n,i),this._rect},getBoundingRect:function(){return this._rect},setViewRect:function(t,e,n,i){this.transformTo(t,e,n,i),this._viewRect=new r(t,e,n,i)},transformTo:function(t,e,n,i){var a=this.getBoundingRect(),o=this._rawTransformable;o.transform=a.calculateTransform(new r(t,e,n,i)),o.decomposeTransform(),this._updateTransform()},setCenter:function(t){t&&(this._center=t,this._updateCenterAndZoom())},setZoom:function(t){t=t||1;var e=this.zoomLimit;e&&(null!=e.max&&(t=Math.min(e.max,t)),null!=e.min&&(t=Math.max(e.min,t))),this._zoom=t,this._updateCenterAndZoom()},getDefaultCenter:function(){var t=this.getBoundingRect(),e=t.x+t.width/2,n=t.y+t.height/2;return[e,n]},getCenter:function(){return this._center||this.getDefaultCenter()},getZoom:function(){return this._zoom||1},getRoamTransform:function(){return this._roamTransformable.getLocalTransform()},_updateCenterAndZoom:function(){var t=this._rawTransformable.getLocalTransform(),e=this._roamTransformable,n=this.getDefaultCenter(),i=this.getCenter(),o=this.getZoom();i=a.applyTransform([],i,t),n=a.applyTransform([],n,t),e.origin=i,e.position=[n[0]-i[0],n[1]-i[1]],e.scale=[o,o],this._updateTransform()},_updateTransform:function(){var t=this._roamTransformable,e=this._rawTransformable;e.parent=t,t.updateTransform(),e.updateTransform(),o.copy(this.transform||(this.transform=[]),e.transform||o.create()),this._rawTransform=e.getLocalTransform(),this.invTransform=this.invTransform||[],o.invert(this.invTransform,this.transform),this.decomposeTransform()},getTransformInfo:function(){var t=this._roamTransformable.transform,e=this._rawTransformable;return{roamTransform:t?i.slice(t):o.create(),rawScale:i.slice(e.scale),rawPosition:i.slice(e.position)}},getViewRect:function(){return this._viewRect},getViewRectAfterRoam:function(){var t=this.getBoundingRect().clone();return t.applyTransform(this.transform),t},dataToPoint:function(t,e,n){var i=e?this._rawTransform:this.transform;return n=n||[],i?l(n,t,i):a.copy(n,t)},pointToData:function(t){var e=this.invTransform;return e?l([],t,e):[t[0],t[1]]},convertToPixel:i.curry(h,"dataToPoint"),convertFromPixel:i.curry(h,"pointToData"),containPoint:function(t){return this.getViewRectAfterRoam().contain(t[0],t[1])}},i.mixin(u,s);var d=u;t.exports=d},"71ad":function(t,e,n){var i=n("6d8b"),a={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},o={};o.categoryAxis=i.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},a),o.valueAxis=i.merge({boundaryGap:[0,0],splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#eee",width:1}}},a),o.timeAxis=i.defaults({scale:!0,min:"dataMin",max:"dataMax"},o.valueAxis),o.logAxis=i.defaults({scale:!0,logBase:10},o.valueAxis);var r=o;t.exports=r},"83ba":function(t,e,n){var i=n("6d8b"),a=n("6cb7"),o=n("f934"),r=o.getLayoutParams,s=o.sizeCalculable,l=o.mergeLayoutParam,c=a.extend({type:"calendar",coordinateSystem:null,defaultOption:{zlevel:0,z:2,left:80,top:60,cellSize:20,orient:"horizontal",splitLine:{show:!0,lineStyle:{color:"#000",width:1,type:"solid"}},itemStyle:{color:"#fff",borderWidth:1,borderColor:"#ccc"},dayLabel:{show:!0,firstDay:0,position:"start",margin:"50%",nameMap:"en",color:"#000"},monthLabel:{show:!0,position:"start",margin:5,align:"center",nameMap:"en",formatter:null,color:"#000"},yearLabel:{show:!0,position:null,margin:30,formatter:null,color:"#ccc",fontFamily:"sans-serif",fontWeight:"bolder",fontSize:20}},init:function(t,e,n,i){var a=r(t);c.superApply(this,"init",arguments),u(t,a)},mergeOption:function(t,e){c.superApply(this,"mergeOption",arguments),u(this.option,t)}});function u(t,e){var n=t.cellSize;i.isArray(n)?1===n.length&&(n[1]=n[0]):n=t.cellSize=[n,n];var a=i.map([0,1],(function(t){return s(e,t)&&(n[t]="auto"),null!=n[t]&&"auto"!==n[t]}));l(t,e,{type:"box",ignoreSize:a})}var h=c;t.exports=h},"84ce":function(t,e,n){var i=n("6d8b"),a=i.each,o=i.map,r=n("3842"),s=r.linearMap,l=r.getPixelPrecision,c=r.round,u=n("e073"),h=u.createAxisTicks,d=u.createAxisLabels,f=u.calculateCategoryInterval,g=[0,1],m=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1};function x(t,e){var n=t[1]-t[0],i=e,a=n/i/2;t[0]+=a,t[1]-=a}function p(t,e,n,i){var o=e.length;if(t.onBand&&!n&&o){var r,s,l=t.getExtent();if(1===o)e[0].coord=l[0],r=e[1]={coord:l[0]};else{var u=e[o-1].tickValue-e[0].tickValue,h=(e[o-1].coord-e[0].coord)/u;a(e,(function(t){t.coord-=h/2}));var d=t.scale.getExtent();s=1+d[1]-e[o-1].tickValue,r={coord:e[o-1].coord+h*s},e.push(r)}var f=l[0]>l[1];g(e[0].coord,l[0])&&(i?e[0].coord=l[0]:e.shift()),i&&g(l[0],e[0].coord)&&e.unshift({coord:l[0]}),g(l[1],r.coord)&&(i?r.coord=l[1]:e.pop()),i&&g(r.coord,l[1])&&e.push({coord:l[1]})}function g(t,e){return t=c(t),e=c(e),f?t>e:t<e}}m.prototype={constructor:m,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1]);return t>=n&&t<=i},containData:function(t){return this.scale.contain(t)},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return l(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent;n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale;return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&(n=n.slice(),x(n,i.count())),s(t,g,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale;this.onBand&&"ordinal"===i.type&&(n=n.slice(),x(n,i.count()));var a=s(t,n,g,e);return this.scale.scale(a)},pointToData:function(t,e){},getTicksCoords:function(t){t=t||{};var e=t.tickModel||this.getTickModel(),n=h(this,e),i=n.ticks,a=o(i,(function(t){return{coord:this.dataToCoord(t),tickValue:t}}),this),r=e.get("alignWithLabel");return p(this,a,r,t.clamp),a},getMinorTicksCoords:function(){if("ordinal"===this.scale.type)return[];var t=this.model.getModel("minorTick"),e=t.get("splitNumber");e>0&&e<100||(e=5);var n=this.scale.getMinorTicks(e),i=o(n,(function(t){return o(t,(function(t){return{coord:this.dataToCoord(t),tickValue:t}}),this)}),this);return i},getViewLabels:function(){return d(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0);0===n&&(n=1);var i=Math.abs(t[1]-t[0]);return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return f(this)}};var v=m;t.exports=v},"8ed2":function(t,e,n){n("48c7");var i=n("6cb7"),a=i.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});t.exports=a},"9e47":function(t,e,n){var i=n("6d8b"),a=n("71ad"),o=n("6cb7"),r=n("f934"),s=r.getLayoutParams,l=r.mergeLayoutParam,c=n("8e43"),u=["value","category","time","log"];function h(t,e,n,r){i.each(u,(function(o){e.extend({type:t+"Axis."+o,mergeDefaultAndTheme:function(e,a){var r=this.layoutMode,c=r?s(e):{},u=a.getTheme();i.merge(e,u.get(o+"Axis")),i.merge(e,this.getDefaultOption()),e.type=n(t,e),r&&l(e,c,r)},optionUpdated:function(){var t=this.option;"category"===t.type&&(this.__ordinalMeta=c.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:i.mergeAll([{},a[o+"Axis"],r],!0)})})),o.registerSubTypeDefaulter(t+"Axis",i.curry(n,t))}t.exports=h},aa3e:function(t,e,n){var i=n("6d8b");function a(t,e){return e=e||[0,0],i.map(["x","y"],(function(n,i){var a=this.getAxis(n),o=e[i],r=t[i]/2;return"category"===a.type?a.getBandWidth():Math.abs(a.dataToCoord(o-r)-a.dataToCoord(o+r))}),this)}function o(t){var e=t.grid.getRect();return{coordSys:{type:"cartesian2d",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:function(e){return t.dataToPoint(e)},size:i.bind(a,t)}}}t.exports=o},cbe9:function(t,e,n){var i=n("6d8b"),a=n("9850"),o=n("cf7e");function r(t){o.call(this,t)}r.prototype={constructor:r,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),a=this.getAxis("y");return n=n||[],n[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=a.toGlobalCoord(a.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,a=n.getExtent(),o=i.getExtent(),r=n.parse(t[0]),s=i.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(a[0],a[1]),r),Math.max(a[0],a[1])),e[1]=Math.min(Math.max(Math.min(o[0],o[1]),s),Math.max(o[0],o[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y");return e=e||[],e[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")},getArea:function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),n=Math.min(t[0],t[1]),i=Math.min(e[0],e[1]),o=Math.max(t[0],t[1])-n,r=Math.max(e[0],e[1])-i,s=new a(n,i,o,r);return s}},i.inherits(r,o);var s=r;t.exports=s},cf7e:function(t,e,n){var i=n("6d8b");function a(t){return this._axes[t]}var o=function(t){this._axes={},this._dimList=[],this.name=t||""};o.prototype={constructor:o,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return i.map(this._dimList,a,this)},getAxesByScale:function(t){return t=t.toLowerCase(),i.filter(this.getAxes(),(function(e){return e.scale.type===t}))},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},a=0;a<n.length;a++){var o=n[a],r=this._axes[o];i[o]=r[e](t[o])}return i}};var r=o;t.exports=r},d090:function(t,e,n){var i=n("6d8b"),a=n("f934"),o=n("3842"),r=n("2039"),s=864e5;function l(t,e,n){this._model=t}function c(t,e,n,i){var a=n.calendarModel,o=n.seriesModel,r=a?a.coordinateSystem:o?o.coordinateSystem:null;return r===this?r[t](i):null}l.prototype={constructor:l,type:"calendar",dimensions:["time","value"],getDimensionsInfo:function(){return[{name:"time",type:"time"},"value"]},getRangeInfo:function(){return this._rangeInfo},getModel:function(){return this._model},getRect:function(){return this._rect},getCellWidth:function(){return this._sw},getCellHeight:function(){return this._sh},getOrient:function(){return this._orient},getFirstDayOfWeek:function(){return this._firstDayOfWeek},getDateInfo:function(t){t=o.parseDate(t);var e=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;var i=t.getDate();i=i<10?"0"+i:i;var a=t.getDay();return a=Math.abs((a+7-this.getFirstDayOfWeek())%7),{y:e,m:n,d:i,day:a,time:t.getTime(),formatedDate:e+"-"+n+"-"+i,date:t}},getNextNDay:function(t,e){return e=e||0,0===e||(t=new Date(this.getDateInfo(t).time),t.setDate(t.getDate()+e)),this.getDateInfo(t)},update:function(t,e){this._firstDayOfWeek=+this._model.getModel("dayLabel").get("firstDay"),this._orient=this._model.get("orient"),this._lineWidth=this._model.getModel("itemStyle").getItemStyle().lineWidth||0,this._rangeInfo=this._getRangeInfo(this._initRangeOption());var n=this._rangeInfo.weeks||1,o=["width","height"],r=this._model.get("cellSize").slice(),s=this._model.getBoxLayoutParams(),l="horizontal"===this._orient?[n,7]:[7,n];i.each([0,1],(function(t){h(r,t)&&(s[o[t]]=r[t]*l[t])}));var c={width:e.getWidth(),height:e.getHeight()},u=this._rect=a.getLayoutRect(s,c);function h(t,e){return null!=t[e]&&"auto"!==t[e]}i.each([0,1],(function(t){h(r,t)||(r[t]=u[o[t]]/l[t])})),this._sw=r[0],this._sh=r[1]},dataToPoint:function(t,e){i.isArray(t)&&(t=t[0]),null==e&&(e=!0);var n=this.getDateInfo(t),a=this._rangeInfo,o=n.formatedDate;if(e&&!(n.time>=a.start.time&&n.time<a.end.time+s))return[NaN,NaN];var r=n.day,l=this._getRangeInfo([a.start.time,o]).nthWeek;return"vertical"===this._orient?[this._rect.x+r*this._sw+this._sw/2,this._rect.y+l*this._sh+this._sh/2]:[this._rect.x+l*this._sw+this._sw/2,this._rect.y+r*this._sh+this._sh/2]},pointToData:function(t){var e=this.pointToDate(t);return e&&e.time},dataToRect:function(t,e){var n=this.dataToPoint(t,e);return{contentShape:{x:n[0]-(this._sw-this._lineWidth)/2,y:n[1]-(this._sh-this._lineWidth)/2,width:this._sw-this._lineWidth,height:this._sh-this._lineWidth},center:n,tl:[n[0]-this._sw/2,n[1]-this._sh/2],tr:[n[0]+this._sw/2,n[1]-this._sh/2],br:[n[0]+this._sw/2,n[1]+this._sh/2],bl:[n[0]-this._sw/2,n[1]+this._sh/2]}},pointToDate:function(t){var e=Math.floor((t[0]-this._rect.x)/this._sw)+1,n=Math.floor((t[1]-this._rect.y)/this._sh)+1,i=this._rangeInfo.range;return"vertical"===this._orient?this._getDateByWeeksAndDay(n,e-1,i):this._getDateByWeeksAndDay(e,n-1,i)},convertToPixel:i.curry(c,"dataToPoint"),convertFromPixel:i.curry(c,"pointToData"),_initRangeOption:function(){var t=this._model.get("range"),e=t;if(i.isArray(e)&&1===e.length&&(e=e[0]),/^\d{4}$/.test(e)&&(t=[e+"-01-01",e+"-12-31"]),/^\d{4}[\/|-]\d{1,2}$/.test(e)){var n=this.getDateInfo(e),a=n.date;a.setMonth(a.getMonth()+1);var o=this.getNextNDay(a,-1);t=[n.formatedDate,o.formatedDate]}/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e)&&(t=[e,e]);var r=this._getRangeInfo(t);return r.start.time>r.end.time&&t.reverse(),t},_getRangeInfo:function(t){var e;t=[this.getDateInfo(t[0]),this.getDateInfo(t[1])],t[0].time>t[1].time&&(e=!0,t.reverse());var n=Math.floor(t[1].time/s)-Math.floor(t[0].time/s)+1,i=new Date(t[0].time),a=i.getDate(),o=t[1].date.getDate();if(i.setDate(a+n-1),i.getDate()!==o){var r=i.getTime()-t[1].time>0?1:-1;while(i.getDate()!==o&&(i.getTime()-t[1].time)*r>0)n-=r,i.setDate(a+n-1)}var l=Math.floor((n+t[0].day+6)/7),c=e?1-l:l-1;return e&&t.reverse(),{range:[t[0].formatedDate,t[1].formatedDate],start:t[0],end:t[1],allDay:n,weeks:l,nthWeek:c,fweek:t[0].day,lweek:t[1].day}},_getDateByWeeksAndDay:function(t,e,n){var i=this._getRangeInfo(n);if(t>i.weeks||0===t&&e<i.fweek||t===i.weeks&&e>i.lweek)return!1;var a=7*(t-1)-i.fweek+e,o=new Date(i.start.time);return o.setDate(i.start.d+a),this.getDateInfo(o)}},l.dimensions=l.prototype.dimensions,l.getDimensionsInfo=l.prototype.getDimensionsInfo,l.create=function(t,e){var n=[];return t.eachComponent("calendar",(function(i){var a=new l(i,t,e);n.push(a),i.coordinateSystem=a})),t.eachSeries((function(t){"calendar"===t.get("coordinateSystem")&&(t.coordinateSystem=n[t.get("calendarIndex")||0])})),n},r.register("calendar",l);var u=l;t.exports=u},e073:function(t,e,n){var i=n("6d8b"),a=n("e86a"),o=n("e0d3"),r=o.makeInner,s=n("697e"),l=s.makeLabelFormatter,c=s.getOptionCategoryInterval,u=s.shouldShowAllLabels,h=r();function d(t){return"category"===t.type?g(t):p(t)}function f(t,e){return"category"===t.type?x(t,e):{ticks:t.scale.getTicks()}}function g(t){var e=t.getLabelModel(),n=m(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}function m(t,e){var n,a,o=v(t,"labels"),r=c(e),s=y(o,r);return s||(i.isFunction(r)?n=A(t,r):(a="auto"===r?b(t):r,n=T(t,a)),_(o,r,{labels:n,labelCategoryInterval:a}))}function x(t,e){var n,a,o=v(t,"ticks"),r=c(e),s=y(o,r);if(s)return s;if(e.get("show")&&!t.scale.isBlank()||(n=[]),i.isFunction(r))n=A(t,r,!0);else if("auto"===r){var l=m(t,t.getLabelModel());a=l.labelCategoryInterval,n=i.map(l.labels,(function(t){return t.tickValue}))}else a=r,n=T(t,a,!0);return _(o,r,{ticks:n,tickCategoryInterval:a})}function p(t){var e=t.scale.getTicks(),n=l(t);return{labels:i.map(e,(function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}}))}}function v(t,e){return h(t)[e]||(h(t)[e]=[])}function y(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function _(t,e,n){return t.push({key:e,value:n}),n}function b(t){var e=h(t).autoInterval;return null!=e?e:h(t).autoInterval=t.calculateCategoryInterval()}function M(t){var e=w(t),n=l(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,o=t.scale,r=o.getExtent(),s=o.count();if(r[1]-r[0]<1)return 0;var c=1;s>40&&(c=Math.max(1,Math.floor(s/40)));for(var u=r[0],d=t.dataToCoord(u+1)-t.dataToCoord(u),f=Math.abs(d*Math.cos(i)),g=Math.abs(d*Math.sin(i)),m=0,x=0;u<=r[1];u+=c){var p=0,v=0,y=a.getBoundingRect(n(u),e.font,"center","top");p=1.3*y.width,v=1.3*y.height,m=Math.max(m,p,7),x=Math.max(x,v,7)}var _=m/f,b=x/g;isNaN(_)&&(_=1/0),isNaN(b)&&(b=1/0);var M=Math.max(0,Math.floor(Math.min(_,b))),T=h(t.model),A=t.getExtent(),C=T.lastAutoInterval,L=T.lastTickCount;return null!=C&&null!=L&&Math.abs(C-M)<=1&&Math.abs(L-s)<=1&&C>M&&T.axisExtend0===A[0]&&T.axisExtend1===A[1]?M=C:(T.lastTickCount=s,T.lastAutoInterval=M,T.axisExtend0=A[0],T.axisExtend1=A[1]),M}function w(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}function T(t,e,n){var i=l(t),a=t.scale,o=a.getExtent(),r=t.getLabelModel(),s=[],c=Math.max((e||0)+1,1),h=o[0],d=a.count();0!==h&&c>1&&d/c>2&&(h=Math.round(Math.ceil(h/c)*c));var f=u(t),g=r.get("showMinLabel")||f,m=r.get("showMaxLabel")||f;g&&h!==o[0]&&p(o[0]);for(var x=h;x<=o[1];x+=c)p(x);function p(t){s.push(n?t:{formattedLabel:i(t),rawLabel:a.getLabel(t),tickValue:t})}return m&&x-c!==o[1]&&p(o[1]),s}function A(t,e,n){var a=t.scale,o=l(t),r=[];return i.each(a.getTicks(),(function(t){var i=a.getLabel(t);e(t,i)&&r.push(n?t:{formattedLabel:o(t),rawLabel:i,tickValue:t})})),r}e.createAxisLabels=d,e.createAxisTicks=f,e.calculateCategoryInterval=M},ec02:function(t,e,n){var i=n("6d8b"),a=n("84ce"),o=function(t,e,n,i,o){a.call(this,t,e,n),this.type=i||"value",this.position=o||"bottom"};o.prototype={constructor:o,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},i.inherits(o,a);var r=o;t.exports=r}}]);