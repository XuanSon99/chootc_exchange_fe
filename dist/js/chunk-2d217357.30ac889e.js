(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("main",{staticClass:"profile"},[a("v-container",[a("div",{staticClass:"d-flex mb-6"},[a("v-avatar",{attrs:{color:"primary",size:"80"}},[a("v-icon",{attrs:{dark:"",size:"50"}},[t._v(" mdi-account-circle ")])],1),a("div",{staticClass:"account"},[a("h1",[t._v(t._s(t.account.phone))]),t.account.verify?a("div",{staticClass:"verify"},[a("v-icon",{staticClass:"mr-1",attrs:{color:"primary",size:"16"}},[t._v(" mdi-check ")]),t._v(" Đã xác minh ")],1):a("div",{staticClass:"unverify"},[a("v-icon",{staticClass:"mr-1",attrs:{color:"#ff5252",size:"16"}},[t._v(" mdi-alert-circle-outline ")]),t._v(" Chưa xác minh ")],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"5"}},[a("label",[t._v("Họ và tên")]),a("v-text-field",{attrs:{outlined:"",placeholder:"Họ và tên"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",md:"7"}},[a("label",[t._v("Ngày sinh")]),a("v-text-field",{attrs:{outlined:"",placeholder:t.gender_placeholder},model:{value:t.birthday,callback:function(n){t.birthday=n},expression:"birthday"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"5"}},[a("label",[t._v("Giới tính")]),a("v-select",{attrs:{items:["Nam","Nữ","Khác"],outlined:"",placeholder:"Giới tính"},model:{value:t.gender,callback:function(n){t.gender=n},expression:"gender"}})],1),a("v-col",{attrs:{cols:"12",md:"7"}},[a("label",[t._v("Địa chỉ")]),a("v-text-field",{attrs:{outlined:"",placeholder:"Địa chỉ"},model:{value:t.address,callback:function(n){t.address=n},expression:"address"}})],1)],1),a("v-btn",{staticClass:"my-6",attrs:{color:"primary","x-large":"",block:""},on:{click:t.updateProfile}},[t._v("Cập nhật")]),t.account.verify?t._e():a("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[a("div",{staticClass:"d-flex align-start"},[a("v-icon",{attrs:{color:"orange"}},[t._v("mdi-alert-outline")]),a("div",{staticClass:"warning-msg ml-3"},[t._v(" Vui lòng cập nhật thông tin cá nhân. Sau đó truy cập link bên dưới bằng thiết bị di động để xác minh danh tính. ")])],1),a("v-text-field",{staticClass:"mt-3",attrs:{value:t.kyc_link,outlined:"",readonly:"","append-icon":"mdi-content-copy"},on:{"click:append":t.copyText,click:t.copyText}})],1)],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("h3",{staticClass:"mb-3"},[t._v("Câu hỏi thường gặp")]),a("v-expansion-panels",t._l(t.faq,(function(n,e){return a("v-expansion-panel",{key:e},[a("v-expansion-panel-header",[t._v(" "+t._s(n.answer)+" ")]),a("v-expansion-panel-content",[t._v(" "+t._s(n.question)+" ")])],1)})),1)],1)],1)],1)],1)},i=[],c=a("5530"),s=(a("b0c0"),a("2f62")),l={data:function(){return{name:"",birthday:"",gender:"Nam",address:"",faq:[{answer:"Xác minh danh tính (KYC) để làm gì?",question:"Đối với giao dịch mua, bạn cần KYC để chúng tôi xác minh ngân hàng bạn sử dụng là ngân hàng chính chủ. Còn đối với giao dịch bán thì bạn không cần phải KYC."},{answer:"Thời gian xác minh KYC?",question:"Quá trình xác minh sẽ diễn ra trong khoảng 5-10 phút."},{answer:"Tôi có thể liên hệ ai để được hỗ trợ?",question:"Bạn có thể liên hệ qua telegram @ChoOTCVN_support để được hỗ trợ."}]}},computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["account"])),{},{gender_placeholder:function(){var t=new Date;return t.toLocaleDateString()},kyc_link:function(){return"https://exchange.chootc.com/kyc/".concat(this.account.phone)}}),mounted:function(){this.getProfile()},methods:{getProfile:function(){var t=this;this.CallAPI("get","profile",{},(function(n){t.name=n.data.name,t.birthday=n.data.birthday,t.gender=n.data.gender,t.address=n.data.address}),(function(t){return localStorage.clear()}))},copyText:function(){this.$toast.success("Copy thành công"),navigator.clipboard.writeText(this.kyc_link)},updateProfile:function(){var t=this,n={name:this.name,birthday:this.birthday,gender:this.gender,address:this.address};this.CallAPI("post","update-profile",n,(function(n){t.$toast.success("Cập nhật thành công")}))}}},r=l,o=a("2877"),d=Object(o["a"])(r,e,i,!1,null,null,null);n["default"]=d.exports}}]);