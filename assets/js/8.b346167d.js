(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));const s=e(0).a.extend({data:()=>({sizeBase:{width:"0",height:"0"},sizeLg:{width:"0",height:"0"}}),mounted(){window.addEventListener("resize",this.emitSize,!1),this.emitSize()},beforeDestroy(){window.removeEventListener("resize",this.emitSize)},methods:{emitSize(){document.body.clientWidth>=1285?(this.$emit("request-width",this.sizeLg.width),this.$emit("request-height",this.sizeLg.height)):(this.$emit("request-width",this.sizeBase.width),this.$emit("request-height",this.sizeBase.height))}}})},356:function(t,i,e){},419:function(t,i,e){"use strict";e(356)},443:function(t,i,e){"use strict";e.r(i);var s=e(0),a=e(312),n=s.a.extend({extends:a.a,data:()=>({sizeBase:{width:"755px",height:"570px"},sizeLg:{width:"755px",height:"690px"},trackWidth:15,maxWidthIn:18,clipVisualTrackWidth:12}),computed:{clippedWidth(){return Math.max(0,Math.min(this.maxWidthIn,this.trackWidth))},botWidthEm(){return Math.max(this.clippedWidth,this.clipVisualTrackWidth)/this.maxWidthIn*15}},methods:{decrement(){this.trackWidth>0&&this.trackWidth--,this.trackWidth=Math.max(this.trackWidth,0),this.$emit("input",this.trackWidth)},increment(){this.trackWidth<18&&this.trackWidth++,this.trackWidth=Math.min(this.trackWidth,this.maxWidthIn),this.$emit("input",this.trackWidth)}}}),h=(e(419),e(46)),r=Object(h.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"flex flex-col justify-center px-8 py-4 pb-0 h-full"},[t._m(0),t._v(" "),e("div",{staticClass:"bot-container flex justify-center items-center h-64"},[e("div",{staticClass:"bot",style:{width:t.botWidthEm+"em",height:t.botWidthEm+"em"}},[e("div",{staticClass:"wheel top-left"}),t._v(" "),e("div",{staticClass:"wheel top-right"}),t._v(" "),e("div",{staticClass:"wheel bottom-right"}),t._v(" "),e("div",{staticClass:"wheel bottom-left"}),t._v(" "),e("div",{staticClass:"indicator"},[e("div",{staticClass:"p-2 mb-2 bg-gray-300 relative"},[e("span",{staticClass:"text-xl font-semibold"},[t._v(t._s(t.clippedWidth.toFixed(2)))]),t._v(" "),e("span",{staticClass:"unit"},[t._v("in")])])]),t._v(" "),e("div",{staticClass:"arrow"},[e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M8 7l4-4m0 0l4 4m-4-4v18"}})])])])]),t._v(" "),e("div",{staticClass:"flex flex-row justify-center items-center xl:mt-8 mt-0"},[e("button",{staticClass:"number-button minus-button mr-4",class:{"dont-click":t.trackWidth<=0},on:{click:t.decrement}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.trackWidth,expression:"trackWidth",modifiers:{number:!0}}],staticClass:"number-input",attrs:{type:"number",min:"0",max:"18"},domProps:{value:t.trackWidth},on:{change:function(i){return t.$emit("input",t.trackWidth)},input:function(i){i.target.composing||(t.trackWidth=t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}}),t._v(" "),e("button",{staticClass:"number-button plus-button ml-3",class:{"dont-click":t.trackWidth>=t.maxWidthIn},on:{click:t.increment}})]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("h2",{staticClass:"border-none mt-0 xl:mb-10 mb-0 text-center"},[this._v("\n    Track Width Estimate\n    "),i("h4",{staticClass:"block text-gray-500 m-0 text-2xl"},[this._v("(inches)")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"xl:mt-6 mt-0"},[i("p",{staticClass:"text-gray-800 max-w-3xl xl:mb-4 mb-0"},[this._v("\n      *Track width = distance from the center of one wheel to the center of\n      its parallel wheel\n    ")]),this._v(" "),i("p",{staticClass:"text-gray-800 max-w-3xl xl:mt-2 mt-0 xl:mb-8 mb-0"},[this._v("\n      **Track width need only be an estimate. It will be empirically tuned\n      later.\n    ")])])}],!1,null,"4c1e1236",null);i.default=r.exports}}]);