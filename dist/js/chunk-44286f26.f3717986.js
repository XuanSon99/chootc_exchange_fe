(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44286f26"],{"0cb2":function(t,e,r){var a=r("7b0b"),n=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,l,c,d){var u=r+t.length,v=l.length,f=s;return void 0!==c&&(c=a(c),f=o),i.call(d,f,(function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":o=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return a;if(s>v){var d=n(s/10);return 0===d?a:d<=v?void 0===l[d-1]?i.charAt(1):l[d-1]+i.charAt(1):a}o=l[s-1]}return void 0===o?"":o}))}},1148:function(t,e,r){"use strict";var a=r("a691"),n=r("577e"),i=r("1d80");t.exports=function(t){var e=n(i(this)),r="",o=a(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(r+=e);return r}},"25f0":function(t,e,r){"use strict";var a=r("6eeb"),n=r("825a"),i=r("577e"),o=r("d039"),s=r("ad6d"),l="toString",c=RegExp.prototype,d=c[l],u=o((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),v=d.name!=l;(u||v)&&a(RegExp.prototype,l,(function(){var t=n(this),e=i(t.source),r=t.flags,a=i(void 0===r&&t instanceof RegExp&&!("flags"in c)?s.call(t):r);return"/"+e+"/"+a}),{unsafe:!0})},"408a":function(t,e,r){var a=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,r){"use strict";var a=r("d784"),n=r("d039"),i=r("825a"),o=r("a691"),s=r("50c4"),l=r("577e"),c=r("1d80"),d=r("8aa5"),u=r("0cb2"),v=r("14c3"),f=r("b622"),_=f("replace"),h=Math.max,m=Math.min,b=function(t){return void 0===t?t:String(t)},p=function(){return"$0"==="a".replace(/./,"$0")}(),g=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),y=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,r){var a=g?"$":"$0";return[function(t,r){var a=c(this),n=void 0==t?void 0:t[_];return void 0!==n?n.call(t,a,r):e.call(l(a),t,r)},function(t,n){var c=i(this),f=l(t);if("string"===typeof n&&-1===n.indexOf(a)&&-1===n.indexOf("$<")){var _=r(e,c,f,n);if(_.done)return _.value}var p="function"===typeof n;p||(n=l(n));var g=c.global;if(g){var y=c.unicode;c.lastIndex=0}var x=[];while(1){var k=v(c,f);if(null===k)break;if(x.push(k),!g)break;var w=l(k[0]);""===w&&(c.lastIndex=d(f,s(c.lastIndex),y))}for(var M="",D=0,S=0;S<x.length;S++){k=x[S];for(var $=l(k[0]),C=h(m(o(k.index),f.length),0),T=[],O=1;O<k.length;O++)T.push(b(k[O]));var F=k.groups;if(p){var I=[$].concat(T,C,f);void 0!==F&&I.push(F);var E=l(n.apply(void 0,I))}else E=u($,f,C,T,F,n);C>=D&&(M+=f.slice(D,C)+E,D=C+$.length)}return M+f.slice(D)}]}),!y||!p||g)},b680:function(t,e,r){"use strict";var a=r("23e7"),n=r("a691"),i=r("408a"),o=r("1148"),s=r("d039"),l=1..toFixed,c=Math.floor,d=function(t,e,r){return 0===e?r:e%2===1?d(t,e-1,r*t):d(t*t,e/2,r)},u=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},v=function(t,e,r){var a=-1,n=r;while(++a<6)n+=e*t[a],t[a]=n%1e7,n=c(n/1e7)},f=function(t,e){var r=6,a=0;while(--r>=0)a+=t[r],t[r]=c(a/e),a=a%e*1e7},_=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var a=String(t[e]);r=""===r?a:r+o.call("0",7-a.length)+a}return r},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,r,a,s,l=i(this),c=n(t),h=[0,0,0,0,0,0],m="",b="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(m="-",l=-l),l>1e-21)if(e=u(l*d(2,69,1))-69,r=e<0?l*d(2,-e,1):l/d(2,e,1),r*=4503599627370496,e=52-e,e>0){v(h,0,r),a=c;while(a>=7)v(h,1e7,0),a-=7;v(h,d(10,a,1),0),a=e-1;while(a>=23)f(h,1<<23),a-=23;f(h,1<<a),v(h,1,1),f(h,2),b=_(h)}else v(h,0,r),v(h,1<<-e,0),b=_(h)+o.call("0",c);return c>0?(s=b.length,b=m+(s<=c?"0."+o.call("0",c-s)+b:b.slice(0,s-c)+"."+b.slice(s-c))):b=m+b,b}})},e4bb:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("v-container",[r("v-card",[r("v-tabs",{staticClass:"px-4 pt-4",attrs:{color:t.tab?"error":"primary","background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{attrs:{value:"0"}},[t._v("Giao dịch mua")]),r("v-tab",{attrs:{value:"1"}},[t._v("Giao dịch bán")])],1),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("v-card-title",[t._v(" Lịch sử giao dịch "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Tìm kiếm","single-line":"","hide-details":""},model:{value:t.buy_search,callback:function(e){t.buy_search=e},expression:"buy_search"}})],1),r("v-data-table",{attrs:{headers:t.headers,items:t.buy_order},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatDate(r.created_at))+" ")]}},{key:"item.status",fn:function(e){var a=e.item;return[t.stateDetail(a.status)?r("span",{style:{color:""+t.stateDetail(a.status).color}},[t._v(" "+t._s(t.stateDetail(a.status).status)+" ")]):t._e()]}},{key:"item.money",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatMoney(r.money))+" ₫ ")]}},{key:"item.rate",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatMoney(r.rate))+" ₫ ")]}},{key:"item.amount",fn:function(e){var r=e.item;return[t._v(" "+t._s(r.amount)+" "+t._s(r.token.toUpperCase())+" ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[r("v-btn",{attrs:{color:"default",small:""},on:{click:function(e){return t.detailOrder(a)}}},[t._v("Chi tiết")])]}}],null,!0)})],1),r("v-tab-item",[r("v-card-title",[t._v(" Lịch sử giao dịch "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Tìm kiếm","single-line":"","hide-details":""},model:{value:t.sell_search,callback:function(e){t.sell_search=e},expression:"sell_search"}})],1),r("v-data-table",{attrs:{headers:t.headers,items:t.sell_order},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatDate(r.created_at))+" ")]}},{key:"item.status",fn:function(e){var a=e.item;return[t.stateDetail(a.status)?r("span",{style:{color:""+t.stateDetail(a.status).color}},[t._v(" "+t._s(t.stateDetail(a.status).status)+" ")]):t._e()]}},{key:"item.rate",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatMoney(r.rate))+" ₫ ")]}},{key:"item.money",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.formatMoney(r.money))+" ₫ ")]}},{key:"item.amount",fn:function(e){var r=e.item;return[t._v(" "+t._s(r.amount)+" "+t._s(r.token.toUpperCase())+" ")]}},{key:"item.actions",fn:function(e){var a=e.item;return[r("v-btn",{attrs:{color:"default",small:""},on:{click:function(e){return t.detailOrder(a)}}},[t._v("Chi tiết")])]}}],null,!0)})],1)],1)],1)],1),r("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",[t._v("Chi tiết giao dịch")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("v-divider"),r("div",{staticClass:"pa-6"},[r("v-simple-table",[r("tbody",[r("tr",[r("td",[t._v("Mã giao dịch:")]),r("td",[t._v(t._s(t.detail_order.code))])]),r("tr",[r("td",{staticStyle:{width:"150px"}},[t._v("Số lượng:")]),r("td",{staticClass:"upper-case"},[t._v(t._s(t.formatMoney(t.detail_order.amount))+" "+t._s(t.detail_order.token)+" ("+t._s(t.detail_order.network)+")")])]),r("tr",[r("td",[t._v("Tỷ giá:")]),r("td",[t._v(t._s(t.formatMoney(t.detail_order.rate))+" ₫")])]),r("tr",[r("td",[t._v("Thành tiền:")]),r("td",[t._v(t._s(t.formatMoney(t.detail_order.money))+" ₫")])]),r("tr",[r("td",[t._v("Phí blockchain:")]),r("td",[t._v(t._s(t.formatMoney(t.detail_order.fee))+" ₫")])]),t.detail_order.address?r("tr",[r("td",[t._v("Ví nhận:")]),r("td",[t._v(t._s(t.detail_order.address))])]):t._e(),t.detail_order.account_number?r("tr",[r("td",[t._v("Ngân hàng nhận:")]),r("td",[t._v(" "+t._s(t.detail_order.account_number)+" - "+t._s(t.detail_order.bank_name)+" "),r("br"),t._v(" "+t._s(t.detail_order.owner_name)+" ")])]):t._e(),r("tr",[r("td",[t._v("Thời gian:")]),r("td",[t._v(t._s(t.formatDate(t.detail_order.created_at)))])]),t.detail_order.description?r("tr",[r("td",[t._v("Mô tả:")]),r("td",[t._v(t._s(t.detail_order.description))])]):t._e(),r("tr",[r("td",[t._v("Trạng thái:")]),r("td",[t.stateDetail(t.detail_order.status)?r("span",{style:{color:""+t.stateDetail(t.detail_order.status).color}},[t._v(" "+t._s(t.stateDetail(t.detail_order.status).status)+" ")]):t._e()])])])])],1)],1)],1)],1)},n=[],i=(r("4de4"),r("ac1f"),r("5319"),r("d3b7"),r("25f0"),r("b680"),{data:function(){return{dialog:!1,buy_search:"",sell_search:"",tab:0,headers:[{text:"Mã giao dịch",value:"code",sortable:!1},{text:"Số lượng",value:"amount",sortable:!1},{text:"Tỷ giá",value:"rate",sortable:!1},{text:"Thành tiền",value:"money",sortable:!1},{text:"Thời gian",value:"created_at",sortable:!1},{text:"Trạng thái",value:"status",sortable:!1},{text:"Hoạt động",value:"actions",sortable:!1}],buy_order:[],sell_order:[],state_list:"",detail_order:""}},mounted:function(){var t=this;this.getBuyOrder(),this.getSellOrder(),this.CallAPI("get","states",{},(function(e){t.state_list=e.data}))},methods:{stateDetail:function(t){if(!this.state_list)return"";var e=this.state_list.filter((function(e){return e.id==t}));return e[0]},getBuyOrder:function(){var t=this;this.CallAPI("get","buy-order",{},(function(e){t.buy_order=e.data}))},getSellOrder:function(){var t=this;this.CallAPI("get","sell-order",{},(function(e){t.sell_order=e.data}))},detailOrder:function(t){this.dialog=!0,this.detail_order=t},formatDate:function(t){var e=new Date(t);return e.toLocaleString()},formatMoney:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0}}}),o=i,s=r("2877"),l=Object(s["a"])(o,a,n,!1,null,null,null);e["default"]=l.exports}}]);