(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-747f5e75"],{"0cb2":function(t,e,n){var o=n("7b0b"),r=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,p,u,c){var d=n+t.length,l=p.length,h=s;return void 0!==u&&(u=o(u),h=i),a.call(c,h,(function(o,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":i=u[a.slice(1,-1)];break;default:var s=+a;if(0===s)return o;if(s>l){var c=r(s/10);return 0===c?o:c<=l?void 0===p[c-1]?a.charAt(1):p[c-1]+a.charAt(1):o}i=p[s-1]}return void 0===i?"":i}))}},1148:function(t,e,n){"use strict";var o=n("a691"),r=n("577e"),a=n("1d80");t.exports=function(t){var e=r(a(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),r=n("825a"),a=n("577e"),i=n("d039"),s=n("ad6d"),p="toString",u=RegExp.prototype,c=u[p],d=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),l=c.name!=p;(d||l)&&o(RegExp.prototype,p,(function(){var t=r(this),e=a(t.source),n=t.flags,o=a(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n);return"/"+e+"/"+o}),{unsafe:!0})},"408a":function(t,e,n){var o=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},"4a84":function(t){t.exports=JSON.parse('[{"id":17,"name":"Ngân hàng TMCP Công thương Việt Nam","code":"ICB","bin":"970415","shortName":"VietinBank","logo":"https://api.vietqr.io/img/ICB.png","transferSupported":1,"lookupSupported":1,"short_name":"VietinBank","support":3,"isTransfer":1,"swift_code":"ICBVVNVX"},{"id":43,"name":"Ngân hàng TMCP Ngoại Thương Việt Nam","code":"VCB","bin":"970436","shortName":"Vietcombank","logo":"https://api.vietqr.io/img/VCB.png","transferSupported":1,"lookupSupported":1,"short_name":"Vietcombank","support":3,"isTransfer":1,"swift_code":"BFTVVNVX"},{"id":4,"name":"Ngân hàng TMCP Đầu tư và Phát triển Việt Nam","code":"BIDV","bin":"970418","shortName":"BIDV","logo":"https://api.vietqr.io/img/BIDV.png","transferSupported":1,"lookupSupported":1,"short_name":"BIDV","support":3,"isTransfer":1,"swift_code":"BIDVVNVX"},{"id":42,"name":"Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam","code":"VBA","bin":"970405","shortName":"Agribank","logo":"https://api.vietqr.io/img/VBA.png","transferSupported":1,"lookupSupported":1,"short_name":"Agribank","support":3,"isTransfer":1,"swift_code":"VBAAVNVX"},{"id":26,"name":"Ngân hàng TMCP Phương Đông","code":"OCB","bin":"970448","shortName":"OCB","logo":"https://api.vietqr.io/img/OCB.png","transferSupported":1,"lookupSupported":1,"short_name":"OCB","support":3,"isTransfer":1,"swift_code":"ORCOVNVX"},{"id":21,"name":"Ngân hàng TMCP Quân đội","code":"MB","bin":"970422","shortName":"MBBank","logo":"https://api.vietqr.io/img/MB.png","transferSupported":1,"lookupSupported":1,"short_name":"MBBank","support":3,"isTransfer":1,"swift_code":"MSCBVNVX"},{"id":38,"name":"Ngân hàng TMCP Kỹ thương Việt Nam","code":"TCB","bin":"970407","shortName":"Techcombank","logo":"https://api.vietqr.io/img/TCB.png","transferSupported":1,"lookupSupported":1,"short_name":"Techcombank","support":3,"isTransfer":1,"swift_code":"VTCBVNVX"},{"id":2,"name":"Ngân hàng TMCP Á Châu","code":"ACB","bin":"970416","shortName":"ACB","logo":"https://api.vietqr.io/img/ACB.png","transferSupported":1,"lookupSupported":1,"short_name":"ACB","support":3,"isTransfer":1,"swift_code":"ASCBVNVX"},{"id":47,"name":"Ngân hàng TMCP Việt Nam Thịnh Vượng","code":"VPB","bin":"970432","shortName":"VPBank","logo":"https://api.vietqr.io/img/VPB.png","transferSupported":1,"lookupSupported":1,"short_name":"VPBank","support":3,"isTransfer":1,"swift_code":"VPBKVNVX"},{"id":39,"name":"Ngân hàng TMCP Tiên Phong","code":"TPB","bin":"970423","shortName":"TPBank","logo":"https://api.vietqr.io/img/TPB.png","transferSupported":1,"lookupSupported":1,"short_name":"TPBank","support":3,"isTransfer":1,"swift_code":"TPBVVNVX"},{"id":36,"name":"Ngân hàng TMCP Sài Gòn Thương Tín","code":"STB","bin":"970403","shortName":"Sacombank","logo":"https://api.vietqr.io/img/STB.png","transferSupported":1,"lookupSupported":1,"short_name":"Sacombank","support":3,"isTransfer":1,"swift_code":"SGTTVNVX"},{"id":12,"name":"Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh","code":"HDB","bin":"970437","shortName":"HDBank","logo":"https://api.vietqr.io/img/HDB.png","transferSupported":1,"lookupSupported":1,"short_name":"HDBank","support":3,"isTransfer":1,"swift_code":"HDBCVNVX"},{"id":44,"name":"Ngân hàng TMCP Bản Việt","code":"VCCB","bin":"970454","shortName":"VietCapitalBank","logo":"https://api.vietqr.io/img/VCCB.png","transferSupported":1,"lookupSupported":1,"short_name":"VietCapitalBank","support":3,"isTransfer":1,"swift_code":"VCBCVNVX"},{"id":31,"name":"Ngân hàng TMCP Sài Gòn","code":"SCB","bin":"970429","shortName":"SCB","logo":"https://api.vietqr.io/img/SCB.png","transferSupported":1,"lookupSupported":1,"short_name":"SCB","support":3,"isTransfer":1,"swift_code":"SACLVNVX"},{"id":45,"name":"Ngân hàng TMCP Quốc tế Việt Nam","code":"VIB","bin":"970441","shortName":"VIB","logo":"https://api.vietqr.io/img/VIB.png","transferSupported":1,"lookupSupported":1,"short_name":"VIB","support":3,"isTransfer":1,"swift_code":"VNIBVNVX"},{"id":35,"name":"Ngân hàng TMCP Sài Gòn - Hà Nội","code":"SHB","bin":"970443","shortName":"SHB","logo":"https://api.vietqr.io/img/SHB.png","transferSupported":1,"lookupSupported":1,"short_name":"SHB","support":3,"isTransfer":1,"swift_code":"SHBAVNVX"},{"id":10,"name":"Ngân hàng TMCP Xuất Nhập khẩu Việt Nam","code":"EIB","bin":"970431","shortName":"Eximbank","logo":"https://api.vietqr.io/img/EIB.png","transferSupported":1,"lookupSupported":1,"short_name":"Eximbank","support":3,"isTransfer":1,"swift_code":"EBVIVNVX"},{"id":22,"name":"Ngân hàng TMCP Hàng Hải","code":"MSB","bin":"970426","shortName":"MSB","logo":"https://api.vietqr.io/img/MSB.png","transferSupported":1,"lookupSupported":1,"short_name":"MSB","support":3,"isTransfer":1,"swift_code":"MCOBVNVX"},{"id":53,"name":"TMCP Việt Nam Thịnh Vượng - Ngân hàng số CAKE by VPBank","code":"CAKE","bin":"546034","shortName":"CAKE","logo":"https://api.vietqr.io/img/CAKE.png","transferSupported":1,"lookupSupported":1,"short_name":"CAKE","support":3,"isTransfer":1,"swift_code":null},{"id":54,"name":"TMCP Việt Nam Thịnh Vượng - Ngân hàng số Ubank by VPBank","code":"Ubank","bin":"546035","shortName":"Ubank","logo":"https://api.vietqr.io/img/UBANK.png","transferSupported":1,"lookupSupported":1,"short_name":"Ubank","support":3,"isTransfer":1,"swift_code":null},{"id":58,"name":"Ngân hàng số Timo by Ban Viet Bank (Timo by Ban Viet Bank)","code":"TIMO","bin":"963388","shortName":"Timo","logo":"https://vietqr.net/portal-service/resources/icons/TIMO.png","transferSupported":1,"lookupSupported":0,"short_name":"Timo","support":0,"isTransfer":1,"swift_code":null},{"id":57,"name":"Viettel Money","code":"VTLMONEY","bin":"971005","shortName":"ViettelMoney","logo":"https://api.vietqr.io/img/VIETTELMONEY.png","transferSupported":0,"lookupSupported":1,"short_name":"ViettelMoney","support":0,"isTransfer":0,"swift_code":null},{"id":56,"name":"VNPT Money","code":"VNPTMONEY","bin":"971011","shortName":"VNPTMoney","logo":"https://api.vietqr.io/img/VNPTMONEY.png","transferSupported":0,"lookupSupported":1,"short_name":"VNPTMoney","support":0,"isTransfer":0,"swift_code":null},{"id":34,"name":"Ngân hàng TMCP Sài Gòn Công Thương","code":"SGICB","bin":"970400","shortName":"SaigonBank","logo":"https://api.vietqr.io/img/SGICB.png","transferSupported":1,"lookupSupported":1,"short_name":"SaigonBank","support":3,"isTransfer":1,"swift_code":"SBITVNVX"},{"id":3,"name":"Ngân hàng TMCP Bắc Á","code":"BAB","bin":"970409","shortName":"BacABank","logo":"https://api.vietqr.io/img/BAB.png","transferSupported":1,"lookupSupported":1,"short_name":"BacABank","support":3,"isTransfer":1,"swift_code":"NASCVNVX"},{"id":30,"name":"Ngân hàng TMCP Đại Chúng Việt Nam","code":"PVCB","bin":"970412","shortName":"PVcomBank","logo":"https://api.vietqr.io/img/PVCB.png","transferSupported":1,"lookupSupported":1,"short_name":"PVcomBank","support":3,"isTransfer":1,"swift_code":"WBVNVNVX"},{"id":27,"name":"Ngân hàng Thương mại TNHH MTV Đại Dương","code":"Oceanbank","bin":"970414","shortName":"Oceanbank","logo":"https://api.vietqr.io/img/OCEANBANK.png","transferSupported":1,"lookupSupported":1,"short_name":"Oceanbank","support":3,"isTransfer":1,"swift_code":"OCBKUS3M"},{"id":24,"name":"Ngân hàng TMCP Quốc Dân","code":"NCB","bin":"970419","shortName":"NCB","logo":"https://api.vietqr.io/img/NCB.png","transferSupported":1,"lookupSupported":1,"short_name":"NCB","support":3,"isTransfer":1,"swift_code":"NVBAVNVX"},{"id":37,"name":"Ngân hàng TNHH MTV Shinhan Việt Nam","code":"SHBVN","bin":"970424","shortName":"ShinhanBank","logo":"https://api.vietqr.io/img/SHBVN.png","transferSupported":1,"lookupSupported":1,"short_name":"ShinhanBank","support":3,"isTransfer":1,"swift_code":"SHBKVNVX"},{"id":1,"name":"Ngân hàng TMCP An Bình","code":"ABB","bin":"970425","shortName":"ABBANK","logo":"https://api.vietqr.io/img/ABB.png","transferSupported":1,"lookupSupported":1,"short_name":"ABBANK","support":3,"isTransfer":1,"swift_code":"ABBKVNVX"},{"id":41,"name":"Ngân hàng TMCP Việt Á","code":"VAB","bin":"970427","shortName":"VietABank","logo":"https://api.vietqr.io/img/VAB.png","transferSupported":1,"lookupSupported":1,"short_name":"VietABank","support":3,"isTransfer":1,"swift_code":"VNACVNVX"},{"id":23,"name":"Ngân hàng TMCP Nam Á","code":"NAB","bin":"970428","shortName":"NamABank","logo":"https://api.vietqr.io/img/NAB.png","transferSupported":1,"lookupSupported":1,"short_name":"NamABank","support":3,"isTransfer":1,"swift_code":"NAMAVNVX"},{"id":29,"name":"Ngân hàng TMCP Xăng dầu Petrolimex","code":"PGB","bin":"970430","shortName":"PGBank","logo":"https://api.vietqr.io/img/PGB.png","transferSupported":1,"lookupSupported":1,"short_name":"PGBank","support":3,"isTransfer":1,"swift_code":"PGBLVNVX"},{"id":46,"name":"Ngân hàng TMCP Việt Nam Thương Tín","code":"VIETBANK","bin":"970433","shortName":"VietBank","logo":"https://api.vietqr.io/img/VIETBANK.png","transferSupported":1,"lookupSupported":1,"short_name":"VietBank","support":3,"isTransfer":1,"swift_code":"VNTTVNVX"},{"id":5,"name":"Ngân hàng TMCP Bảo Việt","code":"BVB","bin":"970438","shortName":"BaoVietBank","logo":"https://api.vietqr.io/img/BVB.png","transferSupported":1,"lookupSupported":1,"short_name":"BaoVietBank","support":3,"isTransfer":1,"swift_code":"BVBVVNVX"},{"id":33,"name":"Ngân hàng TMCP Đông Nam Á","code":"SEAB","bin":"970440","shortName":"SeABank","logo":"https://api.vietqr.io/img/SEAB.png","transferSupported":1,"lookupSupported":1,"short_name":"SeABank","support":3,"isTransfer":1,"swift_code":"SEAVVNVX"},{"id":52,"name":"Ngân hàng Hợp tác xã Việt Nam","code":"COOPBANK","bin":"970446","shortName":"COOPBANK","logo":"https://api.vietqr.io/img/COOPBANK.png","transferSupported":1,"lookupSupported":1,"short_name":"COOPBANK","support":3,"isTransfer":1,"swift_code":null},{"id":20,"name":"Ngân hàng TMCP Bưu Điện Liên Việt","code":"LPB","bin":"970449","shortName":"LienVietPostBank","logo":"https://api.vietqr.io/img/LPB.png","transferSupported":1,"lookupSupported":1,"short_name":"LienVietPostBank","support":3,"isTransfer":1,"swift_code":"LVBKVNVX"},{"id":19,"name":"Ngân hàng TMCP Kiên Long","code":"KLB","bin":"970452","shortName":"KienLongBank","logo":"https://api.vietqr.io/img/KLB.png","transferSupported":1,"lookupSupported":1,"short_name":"KienLongBank","support":3,"isTransfer":1,"swift_code":"KLBKVNVX"},{"id":55,"name":"Ngân hàng Đại chúng TNHH Kasikornbank","code":"KBank","bin":"668888","shortName":"KBank","logo":"https://api.vietqr.io/img/KBANK.png","transferSupported":1,"lookupSupported":1,"short_name":"KBank","support":3,"isTransfer":1,"swift_code":"KASIVNVX"},{"id":48,"name":"Ngân hàng Liên doanh Việt - Nga","code":"VRB","bin":"970421","shortName":"VRB","logo":"https://api.vietqr.io/img/VRB.png","transferSupported":0,"lookupSupported":1,"short_name":"VRB","support":0,"isTransfer":0,"swift_code":null},{"id":8,"name":"DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh","code":"DBS","bin":"796500","shortName":"DBSBank","logo":"https://api.vietqr.io/img/DBS.png","transferSupported":0,"lookupSupported":0,"short_name":"DBSBank","support":0,"isTransfer":0,"swift_code":"DBSSVNVX"},{"id":49,"name":"Ngân hàng TNHH MTV Woori Việt Nam","code":"WVN","bin":"970457","shortName":"Woori","logo":"https://api.vietqr.io/img/WVN.png","transferSupported":1,"lookupSupported":1,"short_name":"Woori","support":0,"isTransfer":1,"swift_code":null},{"id":50,"name":"Ngân hàng Kookmin - Chi nhánh Hà Nội","code":"KBHN","bin":"970462","shortName":"KookminHN","logo":"https://api.vietqr.io/img/KBHN.png","transferSupported":0,"lookupSupported":0,"short_name":"KookminHN","support":0,"isTransfer":0,"swift_code":null},{"id":51,"name":"Ngân hàng Kookmin - Chi nhánh Thành phố Hồ Chí Minh","code":"KBHCM","bin":"970463","shortName":"KookminHCM","logo":"https://api.vietqr.io/img/KBHCM.png","transferSupported":0,"lookupSupported":0,"short_name":"KookminHCM","support":0,"isTransfer":0,"swift_code":null},{"id":6,"name":"Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam","code":"CBB","bin":"970444","shortName":"CBBank","logo":"https://api.vietqr.io/img/CBB.png","transferSupported":0,"lookupSupported":1,"short_name":"CBBank","support":0,"isTransfer":0,"swift_code":"GTBAVNVX"},{"id":25,"name":"Ngân hàng Nonghyup - Chi nhánh Hà Nội","code":"NHB HN","bin":"801011","shortName":"Nonghyup","logo":"https://api.vietqr.io/img/NHB.png","transferSupported":0,"lookupSupported":0,"short_name":"Nonghyup","support":0,"isTransfer":0,"swift_code":null},{"id":7,"name":"Ngân hàng TNHH MTV CIMB Việt Nam","code":"CIMB","bin":"422589","shortName":"CIMB","logo":"https://api.vietqr.io/img/CIMB.png","transferSupported":1,"lookupSupported":1,"short_name":"CIMB","support":0,"isTransfer":1,"swift_code":"CIBBVNVN"},{"id":9,"name":"Ngân hàng TMCP Đông Á","code":"DOB","bin":"970406","shortName":"DongABank","logo":"https://api.vietqr.io/img/DOB.png","transferSupported":0,"lookupSupported":1,"short_name":"DongABank","support":0,"isTransfer":0,"swift_code":"EACBVNVX"},{"id":11,"name":"Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu","code":"GPB","bin":"970408","shortName":"GPBank","logo":"https://api.vietqr.io/img/GPB.png","transferSupported":0,"lookupSupported":1,"short_name":"GPBank","support":0,"isTransfer":0,"swift_code":"GBNKVNVX"},{"id":13,"name":"Ngân hàng TNHH MTV Hong Leong Việt Nam","code":"HLBVN","bin":"970442","shortName":"HongLeong","logo":"https://api.vietqr.io/img/HLBVN.png","transferSupported":0,"lookupSupported":1,"short_name":"HongLeong","support":0,"isTransfer":0,"swift_code":"HLBBVNVX"},{"id":40,"name":"Ngân hàng United Overseas - Chi nhánh TP. Hồ Chí Minh","code":"UOB","bin":"970458","shortName":"UnitedOverseas","logo":"https://api.vietqr.io/img/UOB.png","transferSupported":0,"lookupSupported":1,"short_name":"UnitedOverseas","support":0,"isTransfer":0,"swift_code":null},{"id":14,"name":"Ngân hàng TNHH MTV HSBC (Việt Nam)","code":"HSBC","bin":"458761","shortName":"HSBC","logo":"https://api.vietqr.io/img/HSBC.png","transferSupported":0,"lookupSupported":1,"short_name":"HSBC","support":0,"isTransfer":0,"swift_code":"HSBCVNVX"},{"id":15,"name":"Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội","code":"IBK - HN","bin":"970455","shortName":"IBKHN","logo":"https://api.vietqr.io/img/IBK.png","transferSupported":0,"lookupSupported":0,"short_name":"IBKHN","support":0,"isTransfer":0,"swift_code":null},{"id":28,"name":"Ngân hàng TNHH MTV Public Việt Nam","code":"PBVN","bin":"970439","shortName":"PublicBank","logo":"https://api.vietqr.io/img/PBVN.png","transferSupported":0,"lookupSupported":1,"short_name":"PublicBank","support":0,"isTransfer":0,"swift_code":"VIDPVNVX"},{"id":16,"name":"Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh","code":"IBK - HCM","bin":"970456","shortName":"IBKHCM","logo":"https://api.vietqr.io/img/IBK.png","transferSupported":0,"lookupSupported":0,"short_name":"IBKHCM","support":0,"isTransfer":0,"swift_code":null},{"id":18,"name":"Ngân hàng TNHH Indovina","code":"IVB","bin":"970434","shortName":"IndovinaBank","logo":"https://api.vietqr.io/img/IVB.png","transferSupported":0,"lookupSupported":1,"short_name":"IndovinaBank","support":0,"isTransfer":0,"swift_code":null},{"id":32,"name":"Ngân hàng TNHH MTV Standard Chartered Bank Việt Nam","code":"SCVN","bin":"970410","shortName":"StandardChartered","logo":"https://api.vietqr.io/img/SCVN.png","transferSupported":0,"lookupSupported":1,"short_name":"StandardChartered","support":0,"isTransfer":0,"swift_code":"SCBLVNVX"}]')},5319:function(t,e,n){"use strict";var o=n("d784"),r=n("d039"),a=n("825a"),i=n("a691"),s=n("50c4"),p=n("577e"),u=n("1d80"),c=n("8aa5"),d=n("0cb2"),l=n("14c3"),h=n("b622"),m=h("replace"),g=Math.max,f=Math.min,v=function(t){return void 0===t?t:String(t)},N=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[m]&&""===/./[m]("a","$0")}(),b=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));o("replace",(function(t,e,n){var o=_?"$":"$0";return[function(t,n){var o=u(this),r=void 0==t?void 0:t[m];return void 0!==r?r.call(t,o,n):e.call(p(o),t,n)},function(t,r){var u=a(this),h=p(t);if("string"===typeof r&&-1===r.indexOf(o)&&-1===r.indexOf("$<")){var m=n(e,u,h,r);if(m.done)return m.value}var N="function"===typeof r;N||(r=p(r));var _=u.global;if(_){var b=u.unicode;u.lastIndex=0}var B=[];while(1){var k=l(u,h);if(null===k)break;if(B.push(k),!_)break;var V=p(k[0]);""===V&&(u.lastIndex=c(h,s(u.lastIndex),b))}for(var S="",T=0,C=0;C<B.length;C++){k=B[C];for(var w=p(k[0]),y=g(f(i(k.index),h.length),0),M=[],P=1;P<k.length;P++)M.push(v(k[P]));var A=k.groups;if(N){var H=[w].concat(M,y,h);void 0!==A&&H.push(A);var I=p(r.apply(void 0,H))}else I=d(w,h,y,M,A,r);y>=T&&(S+=h.slice(T,y)+I,T=y+w.length)}return S+h.slice(T)}]}),!b||!N||_)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var o=n("1d80"),r=n("577e"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),u=function(t){return function(e){var n=r(o(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(p,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,n){var o=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var a,i;return r&&"function"==typeof(a=e.constructor)&&a!==n&&o(i=a.prototype)&&i!==n.prototype&&r(t,i),t}},"753a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"ml-6"},[n("v-tabs",{attrs:{color:t.tab?"error":"primary","background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{attrs:{value:"0"},on:{click:function(e){return t.$router.push("/buy/usdt")}}},[t._v("Tôi muốn mua")]),n("v-tab",{attrs:{value:"1"},on:{click:function(e){return t.$router.push("/sell/usdt")}}},[t._v("Tôi muốn bán")])],1)],1),n("v-stepper",{staticClass:"elevation-0",attrs:{vertical:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[n("v-stepper-step",{attrs:{complete:t.step>1,step:"1"}},[t._v(" BÁN "+t._s(t.token.toUpperCase())+" ")]),n("v-stepper-content",{attrs:{step:"1"}},[n("div",{staticClass:"mb-6"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("div",{staticClass:"d-flex align-center"},[n("label",[t._v("Số lượng cần bán")]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"ml-1 mb-1",attrs:{size:"16"}},"v-icon",r,!1),o),[t._v(" mdi-help-circle-outline ")])]}}])},[n("div",{staticClass:"tooltip my-1"},[t._v(" Hạn mức giao dịch tối thiểu là 1 triệu ")])])],1),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"exchange-input",attrs:{type:"number"},domProps:{value:t.amount},on:{input:[function(e){e.target.composing||(t.amount=e.target.value)},t.inputAmount]}}),n("div",{staticClass:"unit"},[n("v-select",{attrs:{dense:"",solo:"",items:t.token_list,"menu-props":{offsetY:!0}},scopedSlots:t._u([{key:"selection",fn:function(e){return[n("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}},{key:"item",fn:function(e){return[n("img",{attrs:{src:"/img/p2p/"+e.item+".svg",alt:""}}),t._v(" "+t._s(e.item.toUpperCase())+" ")]}}]),model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1)]),n("div",{staticClass:"estimated"},[t._v(" Ước tính: "),n("span",[t._v("1 "+t._s(t.token)+" ≈ "+t._s(t.formatMoney(t.price))+" VND")])])]),n("v-col",{attrs:{cols:"12",md:"7"}},[n("div",{staticClass:"d-flex align-center"},[n("label",[t._v("Số tiền nhận được")]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"ml-1 mb-1",attrs:{size:"16"}},"v-icon",r,!1),o),[t._v(" mdi-help-circle-outline ")])]}}])},[n("div",{staticClass:"tooltip my-1"},[t._v(" Số tiền cần thanh toán có thể bị thay đổi "),n("br"),t._v(" do tỷ giá được cập nhật liên tục ")])])],1),n("v-text-field",{staticClass:"money",attrs:{outlined:"",value:t.money_pay,disabled:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("img",{attrs:{width:"20",height:"20",src:"/img/p2p/vnd.png",alt:""}})]},proxy:!0}])}),n("div",{staticClass:"estimated"},[t._v(" Phí blockchain: "),n("span",[t._v(t._s(t.transfer_fee)+" USDT ≈ "+t._s(t.formatMoney(t.transfer_fee*t.usdt_price))+" VND")])])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("label",[t._v("Mạng lưới")]),n("v-select",{attrs:{items:t.network_list,outlined:"","item-text":function(t){return t.name},"menu-props":{offsetY:!0},"return-object":""},model:{value:t.network,callback:function(e){t.network=e},expression:"network"}})],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Ngân hàng nhận")]),n("v-autocomplete",{attrs:{items:t.bank_list,outlined:"","return-object":"","item-text":function(t){return t.code+" - "+t.name},placeholder:"Chọn ngân hàng của bạn"},model:{value:t.bank.info,callback:function(e){t.$set(t.bank,"info",e)},expression:"bank.info"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"5"}},[n("label",[t._v("Số tài khoản nhận")]),n("v-text-field",{attrs:{type:"number",outlined:"",placeholder:"Nhập số tài khoản nhận"},model:{value:t.bank.account,callback:function(e){t.$set(t.bank,"account",e)},expression:"bank.account"}})],1),n("v-col",{attrs:{cols:"12",md:"7"}},[n("label",[t._v("Tên chủ tài khoản")]),n("v-text-field",{attrs:{outlined:"",placeholder:"Tên chủ tài khoản"},on:{focus:t.getBankInfo},model:{value:t.bank.owner,callback:function(e){t.$set(t.bank,"owner",e)},expression:"bank.owner"}})],1)],1),t.error?n("div",{staticClass:"error-msg"},[t._v(t._s(t.error))]):t._e()],1),n("v-btn",{attrs:{color:"primary",disabled:t.loading,width:"120px"},on:{click:t.orderHandle}},[t.loading?n("v-progress-circular",{attrs:{indeterminate:"",width:3,size:20}}):n("span",[t._v("Xác nhận")])],1)],1),n("v-stepper-step",{attrs:{complete:t.step>2,step:"2"}},[t._v(" THANH TOÁN ")]),n("v-stepper-content",{attrs:{step:"2"}},[n("div",{staticClass:"mb-8 pay-table"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-simple-table",{attrs:{dense:""}},[n("tbody",[n("tr",[n("td",{staticStyle:{"min-width":"130px"}},[t._v("Mã giao dịch:")]),n("td",[t._v(t._s(t.order_data.code))])]),n("tr",[n("td",[t._v("Số lượng bán:")]),n("td",[t._v(t._s(t.amount)+" "+t._s(t.token.toUpperCase()))])]),n("tr",[n("td",[t._v("Tỷ giá:")]),n("td",[t._v(t._s(t.formatMoney(t.order_data.rate))+" VNĐ")])]),n("tr",[n("td",[t._v("Số tiền nhận:")]),n("td",[t._v(t._s(t.formatMoney(t.order_data.money))+" VNĐ")])]),n("tr",[n("td",[t._v("Tài khoản nhận:")]),n("td",[t._v(" "+t._s(t.bank.account)+" - "+t._s(t.bank.owner)+" "),n("br"),t._v(" "+t._s(t.bank.info.name)+" ("+t._s(t.bank.info.code)+") ")])]),n("tr",[n("td",[t._v("Ví thanh toán:")]),n("td",[t._v(t._s(t.wallet_address))])])])]),n("div",{staticClass:"note"},[t._v(" * Vui lòng chuyển "+t._s(t.formatMoney(t.amount))+" "+t._s(t.token.toUpperCase())+" giao thức "+t._s(t.network.name)+" vào địa chỉ ví hoặc mã QR bên trên. ")])],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("vue-qr",{staticClass:"img-qr",attrs:{text:t.wallet_address,size:"235"}})],1)],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.step=3}}},[t._v(" Tôi đã thanh toán ")]),n("v-btn",{staticClass:"ml-3",attrs:{text:""},on:{click:function(e){t.step=1}}},[t._v(" Quay lại ")])],1),n("v-stepper-step",{attrs:{complete:t.step>3,step:"3"}},[t._v(" HOÀN THÀNH ")]),n("v-stepper-content",{attrs:{step:"3"}},[n("div",{staticClass:"mb-8"},[n("label",[t._v("Địa chỉ ví bạn vừa chuyển "+t._s(t.token.toUpperCase()))]),n("v-text-field",{attrs:{outlined:"",placeholder:"Nhập địa chỉ ví bạn vừa chuyển "+t.token.toUpperCase()},model:{value:t.customer_address,callback:function(e){t.customer_address=e},expression:"customer_address"}})],1),n("v-btn",{attrs:{color:"primary"},on:{click:t.completeHandle}},[t._v(" Hoàn thành ")])],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",[n("div",{staticClass:"px-6 py-5 title d-flex align-center"},[n("v-icon",{staticClass:"mr-1",attrs:{color:"primary"}},[t._v("mdi-chart-box-outline ")]),n("span",[t._v("Tỷ giá trực tuyến")])],1),n("v-divider"),n("div",{staticClass:"pa-6"},[n("v-tabs",{attrs:{color:t.tab?"error":"primary","fixed-tabs":"","background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{attrs:{value:"0"}},[t._v("Mua")]),n("v-tab",{attrs:{value:"1"}},[t._v("Bán")])],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",t._l(t.asset_list,(function(e,o){return n("div",{key:o,staticClass:"asset",on:{click:function(n){return t.$router.push("/buy/"+e.symbol)}}},[n("img",{attrs:{src:"/img/p2p/"+e.symbol+".svg",alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(e.symbol))]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",width:"150px"}},[t._v(" "+t._s(t.formatMoney(e.buy_rate))+" ₫ ")])],1)})),0),n("v-tab-item",[t._l(t.asset_list,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.symbol!=t.token,expression:"item.symbol != token"}],key:o,staticClass:"asset",on:{click:function(n){return t.$router.push("/sell/"+e.symbol)}}},[n("img",{attrs:{src:"/img/p2p/"+e.symbol+".svg",alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(e.symbol))]),n("v-spacer"),n("v-btn",{attrs:{color:"error",width:"150px"}},[t._v(" "+t._s(t.formatMoney(e.sell_rate))+" ₫ ")])],1)})),n("div",{staticClass:"asset",on:{click:function(e){return t.$router.push("/sell/"+t.token)}}},[n("img",{attrs:{src:"/img/p2p/"+t.token+".svg",alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(t.token))]),n("v-spacer"),n("v-btn",{attrs:{color:"error",width:"150px"}},[t._v(" "+t._s(t.formatMoney(t.price))+" ₫ ")])],1)],2)],1)],1)],1)],1)],1)],1)],1)},r=[],a=n("5530"),i=(n("ac1f"),n("5319"),n("99af"),n("b680"),n("a9e3"),n("d3b7"),n("25f0"),n("159b"),n("caad"),n("fb6a"),n("4a84")),s=n("658f"),p=n.n(s),u=n("2f62"),c={components:{VueQr:p.a},data:function(){return{tab:1,step:1,amount:100,token_list:["usdt","btc","eth","busd","bnb"],token:"usdt",money:"",price:0,usdt_price:0,order_data:"",asset_list:[],bank_list:i,customer_address:"",bank:{info:"",account:"",owner:""},network_list:[{name:"Tron (TRC20)",value:"trc20",fee:1},{name:"BNB Smartchain (BEP20)",value:"bep20",fee:1},{name:"Ethereum (ERC20)",value:"erc20",fee:4.18}],network:{name:"Tron (TRC20)",value:"trc20",fee:1},wallet_address:"",interval:"",error:"",loading:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["account"])),{},{money_pay:function(){return this.$vuetify.breakpoint.width<1025?this.formatMoney(this.money):"".concat(this.amount," * ").concat(this.formatMoney(this.price)," - ").concat(this.formatMoney(this.transfer_fee*this.usdt_price)," = ").concat(this.formatMoney(this.money)).replace("- 0 ","")},transfer_fee:function(){return"usdt"==this.token||"busd"==this.token?this.amount<1e4?this.network.fee:0:(this.network.fee-1).toFixed(2)}}),mounted:function(){this.getPrice(),this.getUsdtPrice(),this.getAsset()},methods:{orderHandle:function(){var t=this;if(this.money<1e6)this.error="Hạn mức giao dịch tối thiểu là 1 triệu";else if(this.amount)if(this.bank.account&&this.bank.owner){this.loading=!0;var e={phone:this.account.phone,amount:this.amount,token:this.token,fee:Math.round(this.transfer_fee*this.usdt_price),network:this.network.value,bank_name:this.bank.info.short_name,account_number:this.bank.account,owner_name:this.bank.owner};this.CallAPI("post","sell-order",e,(function(e){t.order_data=e.data.data,t.price=t.order_data.rate,t.CallAPI("get","setup/"+t.network.value,{},(function(e){t.wallet_address=e.data.value,t.loading=!1,t.step=2}))}))}else this.error="Vui lòng Đủ thông tin";else this.error="Vui lòng nhập số lượng cần mua"},completeHandle:function(){var t=this;this.customer_address?("trc20"!=this.network.value||this.validateTrc(this.customer_address))&&("trc20"==this.network.value||this.validateErc(this.customer_address))?this.CallAPI("put","update-address",{code:this.order_data.code,customer_address:this.customer_address},(function(e){t.step=1,t.$toast.success("Giao dịch đang được xử lý")})):this.$toast.error("Địa chỉ ví không chính xác"):this.$toast.error("Vui lòng nhập địa chỉ ví")},getPrice:function(){var t=this;this.price=0,this.token=this.$route.params.id;var e="p2p?type=sell&asset=".concat(this.$route.params.id,"&fiat=vnd");this.CallAPI("get",e,{},(function(e){t.price=Number(e.data.data[4].adv.price),"btc"==t.token&&(t.price=Number(e.data.data[4].adv.price)-5e6),"eth"==t.token&&(t.price=Number(e.data.data[4].adv.price)-3e5),"bnb"==t.token&&(t.price=Number(e.data.data[4].adv.price)-5e4),"usdt"==t.token&&(t.usdt_price=Number(e.data.data[4].adv.price)),t.inputAmount()}))},getUsdtPrice:function(){var t=this,e="p2p?type=sell&asset=usdt&fiat=vnd";this.CallAPI("get",e,{},(function(e){t.usdt_price=Number(e.data.data[4].adv.price)}))},inputAmount:function(){this.money=Number(this.amount)*this.price-this.transfer_fee*this.usdt_price},formatMoney:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},randomNum:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},getAsset:function(){var t=this;this.CallAPI("get","asset",{},(function(e){t.asset_list=e.data,t.interval=setInterval((function(){t.asset_list=[],e.data.forEach((function(e){var n=e.buy_rate,o=e.sell_rate;["btc","eth","bnb"].includes(e.symbol)&&(n=t.dynamicNum(e.buy_rate),o=t.dynamicNum(e.sell_rate)),t.asset_list.push({symbol:e.symbol,buy_rate:n,sell_rate:o})}))}),5e3)}))},dynamicNum:function(t){var e=String(t),n=e.length<8?this.randomNum(1,3):this.randomNum(2,4),o=e.slice(0,-n-1);return o+this.randomNum(Math.pow(10,n),9*Math.pow(10,n))},validateErc:function(t){var e=/^0x[a-fA-F0-9]{40}$/g;return e.test(t)},validateTrc:function(t){var e=/^T[A-Za-z1-9]{33}$/g;return e.test(t)}},watch:{network:function(){this.inputAmount()},token:function(){this.token!=this.$route.params.id&&this.$router.push("/sell/"+this.token)},$route:function(){this.token=this.$route.params.id?this.$route.params.id:"usdt",this.step=1,this.getPrice(),"usdt"!=this.token&&"busd"!=this.token||(this.amount=100),"btc"==this.token&&(this.amount=.01),"bnb"==this.token&&(this.amount=1),"eth"==this.token&&(this.amount=.1),this.money=0}},beforeDestroy:function(){clearInterval(this.interval)}},d=c,l=n("2877"),h=Object(l["a"])(d,o,r,!1,null,null,null);e["default"]=h.exports},a9e3:function(t,e,n){"use strict";var o=n("83ab"),r=n("da84"),a=n("94ca"),i=n("6eeb"),s=n("5135"),p=n("c6b6"),u=n("7156"),c=n("d9b5"),d=n("c04e"),l=n("d039"),h=n("7c73"),m=n("241c").f,g=n("06cf").f,f=n("9bf2").f,v=n("58a8").trim,N="Number",_=r[N],b=_.prototype,B=p(h(b))==N,k=function(t){if(c(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,o,r,a,i,s,p,u=d(t,"number");if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+u}for(a=u.slice(2),i=a.length,s=0;s<i;s++)if(p=a.charCodeAt(s),p<48||p>r)return NaN;return parseInt(a,o)}return+u};if(a(N,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var V,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(B?l((function(){b.valueOf.call(n)})):p(n)!=N)?u(new _(k(e)),n,S):k(e)},T=o?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;T.length>C;C++)s(_,V=T[C])&&!s(S,V)&&f(S,V,g(_,V));S.prototype=b,b.constructor=S,i(r,N,S)}},b680:function(t,e,n){"use strict";var o=n("23e7"),r=n("a691"),a=n("408a"),i=n("1148"),s=n("d039"),p=1..toFixed,u=Math.floor,c=function(t,e,n){return 0===e?n:e%2===1?c(t,e-1,n*t):c(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},l=function(t,e,n){var o=-1,r=n;while(++o<6)r+=e*t[o],t[o]=r%1e7,r=u(r/1e7)},h=function(t,e){var n=6,o=0;while(--n>=0)o+=t[n],t[n]=u(o/e),o=o%e*1e7},m=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var o=String(t[e]);n=""===n?o:n+i.call("0",7-o.length)+o}return n},g=p&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){p.call({})}));o({target:"Number",proto:!0,forced:g},{toFixed:function(t){var e,n,o,s,p=a(this),u=r(t),g=[0,0,0,0,0,0],f="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(p!=p)return"NaN";if(p<=-1e21||p>=1e21)return String(p);if(p<0&&(f="-",p=-p),p>1e-21)if(e=d(p*c(2,69,1))-69,n=e<0?p*c(2,-e,1):p/c(2,e,1),n*=4503599627370496,e=52-e,e>0){l(g,0,n),o=u;while(o>=7)l(g,1e7,0),o-=7;l(g,c(10,o,1),0),o=e-1;while(o>=23)h(g,1<<23),o-=23;h(g,1<<o),l(g,1,1),h(g,2),v=m(g)}else l(g,0,n),l(g,1<<-e,0),v=m(g)+i.call("0",u);return u>0?(s=v.length,v=f+(s<=u?"0."+i.call("0",u-s)+v:v.slice(0,s-u)+"."+v.slice(s-u))):v=f+v,v}})},caad:function(t,e,n){"use strict";var o=n("23e7"),r=n("4d64").includes,a=n("44d2");o({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},fb6a:function(t,e,n){"use strict";var o=n("23e7"),r=n("861d"),a=n("e8b5"),i=n("23cb"),s=n("50c4"),p=n("fc6a"),u=n("8418"),c=n("b622"),d=n("1dde"),l=d("slice"),h=c("species"),m=[].slice,g=Math.max;o({target:"Array",proto:!0,forced:!l},{slice:function(t,e){var n,o,c,d=p(this),l=s(d.length),f=i(t,l),v=i(void 0===e?l:e,l);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,f,v);for(o=new(void 0===n?Array:n)(g(v-f,0)),c=0;f<v;f++,c++)f in d&&u(o,c,d[f]);return o.length=c,o}})}}]);