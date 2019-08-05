(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{195:function(t,e,i){},200:function(t,e,i){"use strict";var n=i(195);i.n(n).a},239:function(t,e,i){},240:function(t,e,i){},242:function(t,e,i){"use strict";var n={name:"HotsButton",components:{"h-icon":i(194).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return!("left"!==t&&"right"!==t)}}}},s=(i(200),i(1)),a=Object(s.a)(n,function(){var t,e=this,i=e.$createElement,n=e._self._c||i;return n("button",{staticClass:"h-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?n("h-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?n("h-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),n("div",{staticClass:"hots-button-content"},[e._t("default")],2)],1)},[],!1,null,"8ae16eec",null);e.a=a.exports},292:function(t,e,i){"use strict";var n=i(239);i.n(n).a},293:function(t,e,i){"use strict";var n=i(240);i.n(n).a},308:function(t,e,i){"use strict";i.r(e);i(48);var n=i(9),s={name:"HotsUploader",components:{HIcon:i(194).a},props:{name:{type:String,required:!0},action:{type:String,required:!0},method:{type:String,default:"POST"},parseResponse:{type:Function,required:!0},fileList:{type:Array,default:function(){return[]}}},data:function(){return{url:"about:blank"}},methods:{onClickUpload:function(){var t=this,e=this.createInput();e.addEventListener("change",function(){t.updateFile(e.files[0]),e.remove()}),e.click()},onRemoveFile:function(t){if(window.confirm("你确定要删除这玩意吗")){var e=Object(n.a)(this.fileList),i=e.indexOf(t);e.splice(i,1),this.$emit("update:fileList",e)}},beforeUploadFile:function(t,e,i){var s=t.size,a=t.type;this.$emit("update:fileList",Object(n.a)(this.fileList).concat([{name:e,type:a,size:s,status:"uploading"}]))},afterUploadFile:function(t,e){var i=this.fileList.filter(function(e){return e.name===t})[0],s=this.fileList.indexOf(i),a=JSON.parse(JSON.stringify(i));a.url=e,a.status="success";var o=Object(n.a)(this.fileList);o.splice(s,1,a),this.$emit("update:fileList",o)},updateFile:function(t){var e=this,i=t.name,n=(t.size,t.type,this.generateName(i));this.beforeUploadFile(t,n);var s=new FormData;s.append(this.name,t),this.doUploadFile(s,function(t){var i=e.parseResponse(t);e.url=i,e.afterUploadFile(n,i)},function(){e.uploadError(n)})},uploadError:function(t){var e=this.fileList.filter(function(e){return e.name===t})[0],i=this.fileList.indexOf(e),s=JSON.parse(JSON.stringify(e));s.status="fail";var a=Object(n.a)(this.fileList);a.splice(i,1,s),this.$emit("update:fileList",a)},generateName:function(t){for(;this.fileList.filter(function(e){return e.name===t}).length>0;){var e=t.lastIndexOf("."),i=t.substring(0,e),n=t.substring(e);t=i+"(1)"+n}return t},doUploadFile:function(t,e,i){var n=new XMLHttpRequest;n.open(this.method,this.action),n.onload=function(){e(n.response)},n.send(t)},createInput:function(){var t=document.createElement("input");return t.type="file",this.$refs.temp.appendChild(t),t}}},a=(i(292),i(1)),o={name:"use-tabs",components:{HotsUploader:Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hots-uploader"},[i("div",{on:{click:t.onClickUpload}},[t._t("default")],2),t._v(" "),i("ol",{staticClass:"hots-uploader-fileList"},t._l(t.fileList,function(e){var n;return i("li",{key:e.name},["uploading"===e.status?[i("h-icon",{staticClass:"hots-uploader-spin",attrs:{name:"loading"}})]:0===e.type.indexOf("image")?[i("img",{staticClass:"hots-uploader-image",attrs:{src:e.url,width:"32",height:"32",alt:""}})]:i("temaplte",[i("div",{staticClass:"hots-uploader-defaultImage"})]),t._v(" "),i("span",{staticClass:"hots-uploader-name",class:(n={},n[e.status]=e.status,n)},[t._v(t._s(e.name))]),t._v(" "),i("button",{staticClass:"hots-uploader-remove",on:{click:function(i){return t.onRemoveFile(e)}}},[t._v("x")])],2)}),0),t._v(" "),i("div",{ref:"temp",staticStyle:{width:"0",height:"0",overflow:"hidden"}})])},[],!1,null,"2bb1bb9c",null).exports,HotsButton:i(242).a},data:function(){return{fileList:[]}},methods:{parseResponse:function(t){return"https://uploader-server.herokuapp.com/preview/".concat(t)},yyy:function(t){console.log("yyy"),console.log(t)}}},r=(i(293),Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"20px"}},[i("div",[t._v("只能上传 300kb 以内的 png、jpeg 文件")]),t._v(" "),i("HotsUploader",{attrs:{accept:"image/*",method:"POST",action:"https://uploader-server.herokuapp.com/upload",name:"file",parseResponse:t.parseResponse,"file-list":t.fileList},on:{"update:fileList":[function(e){t.fileList=e},t.yyy],"update:file-list":function(e){t.fileList=e}}},[i("HotsButton",{attrs:{icon:"ow"}},[t._v("上传")])],1)],1)},[],!1,null,"0b7cd8b0",null));e.default=r.exports}}]);