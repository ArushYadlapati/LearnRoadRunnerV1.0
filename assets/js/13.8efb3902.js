(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{344:function(e,c,t){},413:function(e,c,t){"use strict";t(344)},435:function(e,c,t){"use strict";t.r(c);var s=t(0).a.extend({data:()=>({checked:!0}),computed:{uuid:()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let c=16*Math.random()|0;return("x"==e?c:3&c|8).toString(16)})},mounted(){localStorage.isUsingDriveEncoders&&(this.checked="true"===localStorage.isUsingDriveEncoders)},watch:{checked(e){localStorage.isUsingDriveEncoders=e;let c=new CustomEvent("isUsingDriveEncodersChanged",{detail:e});document.dispatchEvent(c),this.$emit("input",e)}}}),i=(t(413),t(46)),a=Object(i.a)(s,(function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",{staticClass:"flex justify-center flex-col"},[t("h3",{staticClass:"text-center"},[e._v("Are you using drive encoders?")]),e._v(" "),t("div",{staticClass:"flex justify-center items-center flex-row"},[t("p",{staticClass:"indicator-text nope",class:{active:!e.checked}},[e._v("Nope")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:e.uuid},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(c){var t=e.checked,s=c.target,i=!!s.checked;if(Array.isArray(t)){var a=e._i(t,null);s.checked?a<0&&(e.checked=t.concat([null])):a>-1&&(e.checked=t.slice(0,a).concat(t.slice(a+1)))}else e.checked=i}}}),e._v(" "),t("label",{staticClass:"switch",attrs:{for:e.uuid}}),e._v(" "),t("p",{staticClass:"indicator-text yep",class:{active:e.checked}},[e._v("Yep")])])])}),[],!1,null,"44e0abca",null);c.default=a.exports}}]);