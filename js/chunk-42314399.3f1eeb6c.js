(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42314399"],{"0cc1":function(t,s,e){"use strict";e("37b4")},"1dde":function(t,s,e){var c=e("d039"),a=e("b622"),n=e("2d00"),i=a("species");t.exports=function(t){return n>=51||!c((function(){var s=[],e=s.constructor={};return e[i]=function(){return{foo:1}},1!==s[t](Boolean).foo}))}},"2d3b":function(t,s,e){"use strict";e.r(s);var c=function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"pc"},[t._m(0),c("div",{staticClass:"bus-search"},[c("div",{staticClass:"head"},[c("router-link",{attrs:{to:"/"}},[c("i",{staticClass:"bx bx-chevron-left"})]),c("div",{staticClass:"search-box"},[c("i",{staticClass:"bx bx-search"}),c("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBus,expression:"searchBus"}],attrs:{type:"search",placeholder:"今天要搭哪輛公車呢？",disabled:""},domProps:{value:t.searchBus},on:{input:function(s){s.target.composing||(t.searchBus=s.target.value)}}})])],1),c("div",{staticClass:"bus-list"},[c("p",[t._v("台北")]),t._l(t.busList,(function(s,a){return c("div",{key:a,staticClass:"bus-item"},[c("div",[c("img",{attrs:{src:e("6d23"),alt:""}}),c("h2",[t._v(t._s(s.RouteName.Zh_tw))]),t._v(" \b"),c("p",[t._v(t._s(s.DepartureStopNameZh)+"-"+t._s(s.DestinationStopNameZh))])]),c("i",{staticClass:"bx bx-chevron-right"})])}))],2),c("footer",[c("Keyboard",{attrs:{clickKey:t.clickKey,clear:t.clear,back:t.back}})],1)])])},a=[function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"header"},[c("img",{attrs:{src:e("54d9"),alt:""}})])}],n=(e("fb6a"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"keyboard"},[e("div",{staticClass:"btn-text"},t._l(t.text,(function(s){return e("div",{key:s,staticClass:"key-text",on:{click:function(e){return t.clickKey(s)}}},[t._v(t._s(s))])})),0),e("div",{staticClass:"btn-num"},[t._l(t.num,(function(s){return e("div",{key:s,staticClass:"key-num",on:{click:function(e){return t.clickKey(s)}}},[t._v(t._s(s))])})),e("div",{staticClass:"key-num",on:{click:t.clear}},[t._v("重設")]),e("div",{staticClass:"key-num",on:{click:t.back}},[e("i",{staticClass:"bx bx-arrow-back"})])],2)])}),i=[],r={data:function(){return{text:["藍","紅","綠","棕","橘","黃","-","幹線"],num:["1","2","3","4","5","6","7","8","9","0"]}},props:{clickKey:Function,clear:Function,back:Function}},u=r,o=(e("0cc1"),e("2877")),l=Object(o["a"])(u,n,i,!1,null,"9be7e448",null),A=l.exports,f=e("7fe7"),d={components:{Keyboard:A},data:function(){return{searchBus:"",busList:[]}},mounted:function(){var t=this;f["a"].getRoute().then((function(s){t.busList=s}))},watch:{searchBus:function(t){var s=this;f["a"].getRoute(t).then((function(t){s.busList=t,console.log(t)}))}},methods:{clickKey:function(t){this.searchBus+=t},clear:function(){this.searchBus=""},back:function(){var t=this.searchBus.length;this.searchBus=this.searchBus.slice(0,t-1)}}},v=d,b=(e("c699"),Object(o["a"])(v,c,a,!1,null,"7aea3770",null));s["default"]=b.exports},"37b4":function(t,s,e){},"6d23":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBxZNRUsJADIaTWB0PgD7XG+iMg6/IQdQbYPUA1ANIz8BJfPHF+lBv4PrkjMhwAGDDZsuWAi1MCzN8D91t+idNslmEHFHy68P4uCV7zeznvyHSCIl/QGsVNM+/Mrs8evGwYzaPAMtO5bBiwvDputHH3uewi8wh1EBrHRCyfoCaEB11PFOFb6Mxv0AFCLErJWMU/7MYgmYDqwRwfgQ7cvgAntu8fgxCqEEWIO1qdfbZA1bpLLAql69rFgGmk9vnm7NQ1lL/Ak0ug9OVtYhMkw2dTOKbWVtpetAnhHs33sUlLGkSjN7/LuGEEqjDWF/ZVNxcC9suVf645f54LrU0JVa2SRuI4sGd0V4Y7bcNaK2mq/bPm07AMZ2059q2vM4ALe6BlyhfvbUAAAAASUVORK5CYII="},8418:function(t,s,e){"use strict";var c=e("a04b"),a=e("9bf2"),n=e("5c6c");t.exports=function(t,s,e){var i=c(s);i in t?a.f(t,i,n(0,e)):t[i]=e}},c699:function(t,s,e){"use strict";e("f71f")},e8b5:function(t,s,e){var c=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}},f71f:function(t,s,e){},fb6a:function(t,s,e){"use strict";var c=e("23e7"),a=e("da84"),n=e("e8b5"),i=e("68ee"),r=e("861d"),u=e("23cb"),o=e("07fa"),l=e("fc6a"),A=e("8418"),f=e("b622"),d=e("1dde"),v=e("f36a"),b=d("slice"),h=f("species"),p=a.Array,m=Math.max;c({target:"Array",proto:!0,forced:!b},{slice:function(t,s){var e,c,a,f=l(this),d=o(f),b=u(t,d),k=u(void 0===s?d:s,d);if(n(f)&&(e=f.constructor,i(e)&&(e===p||n(e.prototype))?e=void 0:r(e)&&(e=e[h],null===e&&(e=void 0)),e===p||void 0===e))return v(f,b,k);for(c=new(void 0===e?p:e)(m(k-b,0)),a=0;b<k;b++,a++)b in f&&A(c,a,f[b]);return c.length=a,c}})}}]);
//# sourceMappingURL=chunk-42314399.3f1eeb6c.js.map