(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f27d415"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var d=n+t.length,p=c.length,v=s;return void 0!==u&&(u=r(u),v=o),i.call(l,v,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":o=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>p){var l=a(s/10);return 0===l?r:l<=p?void 0===c[l-1]?i.charAt(1):c[l-1]+i.charAt(1):r}o=c[s-1]}return void 0===o?"":o}))}},1148:function(t,e,n){"use strict";var r=n("a691"),a=n("577e"),i=n("1d80");t.exports=function(t){var e=a(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("577e"),o=n("d039"),s=n("ad6d"),c="toString",u=RegExp.prototype,l=u[c],d=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=l.name!=c;(d||p)&&r(RegExp.prototype,c,(function(){var t=a(this),e=i(t.source),n=t.flags,r=i(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("d039"),i=n("825a"),o=n("a691"),s=n("50c4"),c=n("577e"),u=n("1d80"),l=n("8aa5"),d=n("0cb2"),p=n("14c3"),v=n("b622"),f=v("replace"),h=Math.max,m=Math.min,g=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),k=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=_?"$":"$0";return[function(t,n){var r=u(this),a=void 0==t?void 0:t[f];return void 0!==a?a.call(t,r,n):e.call(c(r),t,n)},function(t,a){var u=i(this),v=c(t);if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var f=n(e,u,v,a);if(f.done)return f.value}var b="function"===typeof a;b||(a=c(a));var _=u.global;if(_){var k=u.unicode;u.lastIndex=0}var y=[];while(1){var x=p(u,v);if(null===x)break;if(y.push(x),!_)break;var N=c(x[0]);""===N&&(u.lastIndex=l(v,s(u.lastIndex),k))}for(var w="",C=0,A=0;A<y.length;A++){x=y[A];for(var E=c(x[0]),I=h(m(o(x.index),v.length),0),S=[],T=1;T<x.length;T++)S.push(g(x[T]));var M=x.groups;if(b){var P=[E].concat(S,I,v);void 0!==M&&P.push(M);var $=c(a.apply(void 0,P))}else $=d(E,v,I,S,M,a);I>=C&&(w+=v.slice(C,I)+$,C=I+E.length)}return w+v.slice(C)}]}),!k||!b||_)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("577e"),i=n("5899"),o="["+i+"]",s=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var n=a(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&a(t,o),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),u=n("7156"),l=n("d9b5"),d=n("c04e"),p=n("d039"),v=n("7c73"),f=n("241c").f,h=n("06cf").f,m=n("9bf2").f,g=n("58a8").trim,b="Number",_=a[b],k=_.prototype,y=c(v(k))==b,x=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,a,i,o,s,c,u=d(t,"number");if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>a)return NaN;return parseInt(i,r)}return+u};if(i(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var N,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?p((function(){k.valueOf.call(n)})):c(n)!=b)?u(new _(x(e)),n,w):x(e)},C=r?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;C.length>A;A++)s(_,N=C[A])&&!s(w,N)&&m(w,N,h(_,N));w.prototype=k,k.constructor=w,o(a,b,w)}},b680:function(t,e,n){"use strict";var r=n("23e7"),a=n("a691"),i=n("408a"),o=n("1148"),s=n("d039"),c=1..toFixed,u=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},p=function(t,e,n){var r=-1,a=n;while(++r<6)a+=e*t[r],t[r]=a%1e7,a=u(a/1e7)},v=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=u(r/e),r=r%e*1e7},f=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+o.call("0",7-r.length)+r}return n},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,n,r,s,c=i(this),u=a(t),h=[0,0,0,0,0,0],m="",g="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=d(c*l(2,69,1))-69,n=e<0?c*l(2,-e,1):c/l(2,e,1),n*=4503599627370496,e=52-e,e>0){p(h,0,n),r=u;while(r>=7)p(h,1e7,0),r-=7;p(h,l(10,r,1),0),r=e-1;while(r>=23)v(h,1<<23),r-=23;v(h,1<<r),p(h,1,1),v(h,2),g=f(h)}else p(h,0,n),p(h,1<<-e,0),g=f(h)+o.call("0",u);return u>0?(s=g.length,g=m+(s<=u?"0."+o.call("0",u-s)+g:g.slice(0,s-u)+"."+g.slice(s-u))):g=m+g,g}})},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-stepper",{attrs:{vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-step",{attrs:{complete:t.step>1,step:"1"}},[t._v(" TẠO ĐƠN HÀNG ")]),n("v-stepper-content",{attrs:{step:"1"}},[n("div",{staticClass:"mb-8"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("div",{staticClass:"d-flex align-center"},[n("label",[t._v("Số lượng cần mua")]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"ml-1 mb-1",attrs:{size:"16"}},"v-icon",a,!1),r),[t._v(" mdi-help-circle-outline ")])]}}])},[n("div",{staticClass:"tooltip my-1"},[t._v(" Hạn mức giao dịch là 20 - 100 USDT "),n("br"),t._v(" Tạo tài khoản và xác minh danh tính "),n("br"),t._v(" để tăng hạn mức lên 10k USDT ")])])],1),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"exchange-input",attrs:{type:"number"},domProps:{value:t.amount},on:{input:[function(e){e.target.composing||(t.amount=e.target.value)},t.inputAmount]}}),n("div",{staticClass:"unit"},[n("v-select",{attrs:{dense:"",solo:"",items:t.token_list,"menu-props":{offsetY:!0}},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[n("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}]),model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)]),n("div",{staticClass:"estimated"},[t._v(" Ước tính: "),n("span",[t._v("1 "+t._s(t.token)+" ≈ "+t._s(t.formatMoney(t.price))+" VND")])])]),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Số tiền cần thanh toán")]),n("v-text-field",{attrs:{outlined:"",value:t.money_pay,readonly:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("img",{attrs:{width:"20",height:"20",src:"/img/p2p/vnd.png",alt:""}})]},proxy:!0}])}),n("div",{staticClass:"estimated"},[t._v(" Phí: "),n("span",[t._v(t._s(t.transfer_fee)+" USDT ≈ "+t._s(t.formatMoney(t.transfer_fee*t.usdt_price))+" VND")]),t.transfer_fee?n("b",[t._v(" (Bao gồm cả phí Blockchain)")]):t._e()])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("label",[t._v("Mạng lưới")]),n("v-autocomplete",{attrs:{items:t.network_list,outlined:"","item-text":function(t){return t.name},"menu-props":{offsetY:!0},"return-object":""},model:{value:t.network,callback:function(e){t.network=e},expression:"network"}})],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Địa chỉ ví")]),n("v-text-field",{attrs:{outlined:"",rules:[t.addressRules],placeholder:"Nhập địa chỉ ví nhận"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)],1)],1),n("v-btn",{attrs:{color:"primary",disabled:t.disableButton},on:{click:function(e){t.step=2}}},[t._v(" Xác nhận ")])],1),n("v-stepper-step",{attrs:{complete:t.step>2,step:"2"}},[t._v(" THANH TOÁN ")]),n("v-stepper-content",{attrs:{step:"2"}},[n("div",{staticClass:"mb-8 pay-table"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-simple-table",{attrs:{dense:""}},[n("tbody",[n("tr",[n("td",{attrs:{width:"180px"}},[t._v("Ngân hàng:")]),n("td",[t._v("ACB - Ngân hàng TMCP Á Châu")])]),n("tr",[n("td",[t._v("Số tài khoản:")]),n("td",[t._v("9988123")])]),n("tr",[n("td",[t._v("Chủ tài khoản:")]),n("td",[t._v("Nguyễn Văn A")])]),n("tr",[n("td",[t._v("Số tiền:")]),n("td",[t._v("255.151 VNĐ")])]),n("tr",[n("td",[t._v("Nội dung CK:")]),n("td",[t._v("M97966191")])])])]),n("div",{staticClass:"note"},[t._v(" * Vui lòng chuyển chính xác số tiền (kể cả số lẻ) và nội dung chuyển khoản. Liên hệ hỗ trợ để giao dịch nhanh. ")])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("img",{staticClass:"img-qr",attrs:{src:"https://img.vietqr.io/image/MBBank-0839575644-compact2.jpg?amount=1000000&addInfo=CK&accountName=QR",alt:""}})])],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=3}}},[t._v(" Tôi đã thanh toán ")]),n("v-btn",{staticClass:"ml-3",attrs:{text:""},on:{click:function(e){t.step=1}}},[t._v(" Quay lại ")])],1),n("v-stepper-step",{attrs:{complete:t.step>3,step:"3"}},[t._v(" HOÀN THÀNH ")]),n("v-stepper-content",{attrs:{step:"3"}},[n("div",{staticClass:"mb-8"},[n("div",{staticClass:"d-flex align-center"},[n("v-icon",{staticClass:"mr-1",attrs:{size:"20",color:"primary"}},[t._v("mdi-progress-check")]),t._v(" Đơn hàng của bạn đang được xử lý. Vui lòng chờ trong giây lát! ")],1)]),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=1}}},[t._v(" Mua thêm ")])],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card")],1)],1)],1)],1)},a=[],i=(n("ac1f"),n("5319"),n("99af"),n("a9e3"),n("d3b7"),n("25f0"),n("b680"),{data:function(){return{step:1,amount:1,token_list:["usdt","btc","eth","busd","bnb","ada"],token:"usdt",money:"",price:0,network_list:[{name:"BNB Smartchain (BEP20)",value:"bep20",fee:1},{name:"Tron (TRC20)",value:"trc20",fee:1},{name:"Ethereum (ERC20)",value:"erc20",fee:4.18},{name:"NEAR Protocol",value:"near",fee:1},{name:"AVAX C-Chain",value:"avax",fee:1},{name:"Arbitrum One",value:"arb",fee:1},{name:"Optimism",value:"op",fee:1},{name:"Polygon",value:"matic",fee:1},{name:"Polkadot",value:"dot",fee:1},{name:"Solana",value:"sol",fee:1}],network:{name:"BEP20",value:"bep20",fee:1},usdt_price:0,address:""}},computed:{money_pay:function(){return"".concat(this.amount," * ").concat(this.formatMoney(this.price)," + ").concat(this.formatMoney(this.transfer_fee*this.usdt_price)," = ").concat(this.formatMoney(this.money)).replace("+ 0 ","")},transfer_fee:function(){return"usdt"==this.token||"busd"==this.token||"ada"==this.token?this.amount<5e3?this.network.fee+1:this.amount<1e4?this.network.fee:0:this.network.fee-1},addressRules:function(){if(!this.address)return"err";if("erc20"==this.network.value||"bep20"==this.network.value){var t=/^0x[a-fA-F0-9]{40}$/g;return!!t.test(this.address)||"err"}if("trc20"==this.network.value){var e=/^T[A-Za-z1-9]{33}$/g;return!!e.test(this.address)||"err"}return!0},disableButton:function(){return this.amount<20||this.amount>100||"err"==this.addressRules}},mounted:function(){this.getPrice(),this.getUsdtPrice()},methods:{getPrice:function(){var t=this;this.price=0;var e="p2p?type=buy&asset=".concat(this.token,"&fiat=vnd&page=1");this.CallAPI("get",e,{},(function(e){t.price=Number(e.data.data[5].adv.price),"btc"==t.token&&(t.price=Number(e.data.data[5].adv.price)+5e6),"eth"==t.token&&(t.price=Number(e.data.data[5].adv.price)+3e5),"bnb"==t.token&&(t.price=Number(e.data.data[5].adv.price)+5e4),t.inputAmount()}))},getUsdtPrice:function(){var t=this,e="p2p?type=buy&asset=usdt&fiat=vnd&page=1";this.CallAPI("get",e,{},(function(e){t.usdt_price=Number(e.data.data[5].adv.price)}))},inputAmount:function(){this.money=Number(this.amount)*this.price+this.transfer_fee*this.usdt_price},formatMoney:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0}},watch:{network:function(){this.inputAmount()},token:function(){this.getPrice(),this.getUsdtPrice()}}}),o=i,s=n("2877"),c=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=c.exports}}]);