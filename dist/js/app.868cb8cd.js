(function(e){function t(t){for(var a,l,s=t[0],o=t[1],r=t[2],m=0,c=[];m<s.length;m++)l=s[m],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&c.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);h&&h(t);while(c.length)c.shift()();return u.push.apply(u,r||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},u=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/multi-range-slider-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var h=o;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2523:function(e,t,n){"use strict";n("c6e5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),i=n("cf05"),u=n.n(i),l={id:"app"},s=Object(a["f"])("img",{alt:"Vue logo",src:u.a},null,-1),o=Object(a["f"])("h1",null,"MultiRangeSlider-Demo-1",-1),r={class:"MultiRangeSliderContainer"},h=Object(a["f"])("br",null,null,-1),m=Object(a["f"])("br",null,null,-1),c=Object(a["f"])("br",null,null,-1),p=Object(a["f"])("br",null,null,-1),b={class:"MultiRangeSliderContainer"},f=Object(a["f"])("br",null,null,-1),v=Object(a["f"])("hr",null,null,-1),M=Object(a["f"])("br",null,null,-1),d={class:"MultiRangeSliderContainer"},x=Object(a["f"])("br",null,null,-1),g=Object(a["f"])("hr",null,null,-1),V=Object(a["f"])("br",null,null,-1),j={class:"MultiRangeSliderContainer",style:{width:"700px"}},O=Object(a["f"])("br",null,null,-1),y=Object(a["f"])("hr",null,null,-1),C=Object(a["f"])("br",null,null,-1),w={class:"MultiRangeSliderContainer",style:{width:"700px"}};function B(e,t,n,i,u,B){var L=Object(a["i"])("MultiRangeSlider");return Object(a["g"])(),Object(a["c"])("div",l,[s,o,Object(a["f"])("div",r,[Object(a["f"])(L,{min:0,max:100,step:10,ruler:!0,label:!0,minValue:u.barMinValue,maxValue:u.barMaxValue,onInput:B.UpdateValues},null,8,["minValue","maxValue","onInput"])]),Object(a["f"])("div",null,[h,Object(a["e"])(" minValue="+Object(a["j"])(u.barMinValue)+" ",1),m,Object(a["e"])(" maxValue="+Object(a["j"])(u.barMaxValue)+" ",1),c,p]),Object(a["f"])("div",b,[Object(a["f"])(L,{baseClassName:"multi-range-slider-black",min:0,max:100,step:10,ruler:!0,label:!0,minValue:u.barMinValue,maxValue:u.barMaxValue,onInput:B.UpdateValues},null,8,["minValue","maxValue","onInput"])]),f,v,M,Object(a["f"])("div",d,[Object(a["f"])(L,{labels:B.weekNames,minValue:u.wBarMinValue,maxValue:u.wBarMaxValue,"min-caption":B.wBarMinCaption,"max-caption":B.wBarMaxCaption,onInput:B.updateWeekValues},null,8,["labels","minValue","maxValue","min-caption","max-caption","onInput"])]),x,g,V,Object(a["f"])("div",j,[Object(a["f"])(L,{min:1,max:365,minValue:u.dayBarMinValue,maxValue:u.dayBarMaxValue,labels:B.monthNames,"min-caption":B.dayMinCaption,"max-caption":B.dayMaxCaption,step:1,onInput:B.updateDayValues},null,8,["minValue","maxValue","labels","min-caption","max-caption","onInput"])]),O,y,C,Object(a["f"])("div",w,[Object(a["f"])(L,{min:0,max:720,minValue:u.hBarMinValue,maxValue:u.hBarMaxValue,labels:B.hoursLabel,"min-caption":B.hoursMinCaption,"max-caption":B.hoursMaxCaption,step:5,onInput:B.updateHoursValues},null,8,["minValue","maxValue","labels","min-caption","max-caption","onInput"])])])}n("99af"),n("d3b7"),n("25f0");var L={class:"bar"},T={class:"caption"},k={class:"min-caption"},R={class:"bar-inner"},S={class:"caption"},I={class:"max-caption"},N={key:0,class:"ruler"},E={key:1,class:"sub-ruler"},D={key:2,class:"labels"};function F(e,t,n,i,u,l){return Object(a["g"])(),Object(a["c"])("div",{class:n.baseClassName,onMousewheel:t[11]||(t[11]=Object(a["k"])((function(){return l.onMouseWheel&&l.onMouseWheel.apply(l,arguments)}),["prevent","stop"]))},[Object(a["f"])("div",L,[Object(a["f"])("div",{class:"bar-left",style:{width:l.barMin+"%"},onClick:t[1]||(t[1]=function(){return l.onBarLeftClick&&l.onBarLeftClick.apply(l,arguments)})},null,4),Object(a["f"])("input",{class:"input-type-range input-type-range-min",type:"range",min:l.minimum,max:l.maximum,step:n.step,value:u.valueMin,onInput:t[2]||(t[2]=Object(a["k"])((function(){return l.onInputMinChange&&l.onInputMinChange.apply(l,arguments)}),["stop","prevent"]))},null,40,["min","max","step","value"]),Object(a["f"])("div",{class:"thumb thumb-left",onMousedown:t[3]||(t[3]=function(){return l.onLeftThumbMousedown&&l.onLeftThumbMousedown.apply(l,arguments)}),onTouchstart:t[4]||(t[4]=function(){return l.onLeftThumbMousedown&&l.onLeftThumbMousedown.apply(l,arguments)})},[Object(a["f"])("div",T,[Object(a["f"])("span",k,Object(a["j"])(n.minCaption||l.barMinVal),1)])],32),Object(a["f"])("div",R,[Object(a["f"])("div",{class:"bar-inner-left",onClick:t[5]||(t[5]=function(){return l.onInnerBarLeftClick&&l.onInnerBarLeftClick.apply(l,arguments)})}),Object(a["f"])("div",{class:"bar-inner-right",onClick:t[6]||(t[6]=function(){return l.onInnerBarRightClick&&l.onInnerBarRightClick.apply(l,arguments)})})]),Object(a["f"])("input",{class:"input-type-range input-type-range-max",type:"range",min:l.minimum,max:l.maximum,step:n.step,value:u.valueMax,onInput:t[7]||(t[7]=Object(a["k"])((function(){return l.onInputMaxChange&&l.onInputMaxChange.apply(l,arguments)}),["stop","prevent"]))},null,40,["min","max","step","value"]),Object(a["f"])("div",{class:"thumb thumb-right",onMousedown:t[8]||(t[8]=function(){return l.onRightThumbMousedown&&l.onRightThumbMousedown.apply(l,arguments)}),onTouchstart:t[9]||(t[9]=function(){return l.onRightThumbMousedown&&l.onRightThumbMousedown.apply(l,arguments)})},[Object(a["f"])("div",S,[Object(a["f"])("span",I,Object(a["j"])(n.maxCaption||l.barMaxVal),1)])],32),Object(a["f"])("div",{class:"bar-right",style:{width:l.barMax+"%"},onClick:t[10]||(t[10]=function(){return l.onBarRightClick&&l.onBarRightClick.apply(l,arguments)})},null,4)]),n.ruler?(Object(a["g"])(),Object(a["c"])("div",N,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(l.stepCount,(function(e){return Object(a["g"])(),Object(a["c"])("div",{key:e,class:"ruler-rule"})})),128))])):Object(a["d"])("",!0),l.subStepCount?(Object(a["g"])(),Object(a["c"])("div",E,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(l.subStepCount,(function(e){return Object(a["g"])(),Object(a["c"])("div",{key:e,class:"ruler-sub-rule"})})),128))])):Object(a["d"])("",!0),n.label?(Object(a["g"])(),Object(a["c"])("div",D,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(l.scaleLabels,(function(e){return Object(a["g"])(),Object(a["c"])("div",{class:"label",key:e},Object(a["j"])(e),1)})),128))])):Object(a["d"])("",!0)],34)}n("a9e3"),n("b680");var X={name:"MultiRangeSlider",props:{baseClassName:{type:String,default:"multi-range-slider"},min:{type:Number},max:{type:Number},minValue:{type:Number},maxValue:{type:Number},step:{type:Number,default:1},preventWheel:{type:Boolean,default:!1},ruler:{type:Boolean,default:!0},label:{type:Boolean,default:!0},labels:{type:Array,default:function(){return[]}},minCaption:{type:String},maxCaption:{type:String}},data:function(){var e=void 0===this.min?0:this.min,t=void 0===this.max?this.labels.length?this.labels.length-1:100:this.max,n=this.minValue||25;this.labels.length&&void 0===this.minValue&&(n=1);var a=this.maxValue||75;return this.labels.length&&void 0===this.maxValue&&(a=this.labels.length-2),{valueMin:n<e?e:n,valueMax:a>t?t:a,interVal:null,startX:null,mouseMoveCounter:null,barBox:null,barValue:0}},methods:{onBarLeftClick:function(){this.valueMin-this.step>=this.minimum?this.valueMin-=this.step:this.valueMin=this.minimum},onInnerBarLeftClick:function(){this.valueMin+this.step<this.valueMax&&(this.valueMin+=this.step)},onBarRightClick:function(){this.valueMax+this.step<=this.maximum?this.valueMax+=this.step:this.valueMax=this.maximum},onInnerBarRightClick:function(){this.valueMax-this.step>this.valueMin&&(this.valueMax-=this.step)},onInputMinChange:function(e){var t=parseFloat(e.target.value);t<this.valueMax&&t>=this.minimum?this.valueMin=t:e.target.value=this.valueMin},onInputMaxChange:function(e){var t=parseFloat(e.target.value);t>this.valueMin&&t<=this.maximum?this.valueMax=t:e.target.value=this.valueMax},onLeftThumbMousedown:function(e){if(e.preventDefault(),this.startX=e.clientX,"touchstart"===e.type){if(1!==e.touches.length)return;this.startX=e.touches[0].clientX}this.mouseMoveCounter=0,this.barValue=this.valueMin,this.barBox=e.target.parentNode.getBoundingClientRect(),document.addEventListener("mousemove",this.onLeftThumbMousemove),document.addEventListener("mouseup",this.onLeftThumbMouseup),document.addEventListener("touchmove",this.onLeftThumbMousemove),document.addEventListener("touchend",this.onLeftThumbMouseup)},onLeftThumbMousemove:function(e){this.mouseMoveCounter++;var t=e.clientX;"touchmove"===e.type&&(t=e.touches[0].clientX);var n=t-this.startX,a=n/this.barBox.width,i=this.barValue+(this.maximum-this.minimum)*a,u=""+this.step,l=0;u.indexOf(".")>=0&&(l=2),i=parseFloat(i.toFixed(l)),i<this.minimum?i=this.minimum:i>this.valueMax-this.step&&(i=this.valueMax-this.step),this.valueMin=i},onLeftThumbMouseup:function(){document.removeEventListener("mousemove",this.onLeftThumbMousemove),document.removeEventListener("mouseup",this.onLeftThumbMouseup),document.removeEventListener("touchmove",this.onLeftThumbMousemove),document.removeEventListener("touchend",this.onLeftThumbMouseup)},onRightThumbMousedown:function(e){if(e.preventDefault(),this.startX=e.clientX,"touchstart"===e.type){if(1!==e.touches.length)return;this.startX=e.touches[0].clientX}this.mouseMoveCounter=0,this.barValue=this.valueMax,this.barBox=e.target.parentNode.getBoundingClientRect(),document.addEventListener("mousemove",this.onRightThumbMousemove),document.addEventListener("mouseup",this.onRightThumbMouseup),document.addEventListener("touchmove",this.onRightThumbMousemove),document.addEventListener("touchend",this.onRightThumbMouseup)},onRightThumbMousemove:function(e){this.mouseMoveCounter++;var t=e.clientX;"touchmove"===e.type&&(t=e.touches[0].clientX);var n=t-this.startX,a=n/this.barBox.width,i=this.barValue+(this.maximum-this.minimum)*a,u=""+this.step,l=0;u.indexOf(".")>=0&&(l=2),i=parseFloat(i.toFixed(l)),i<this.valueMin+this.step?i=this.valueMin+this.step:i>this.maximum&&(i=this.maximum),this.valueMax=i},onRightThumbMouseup:function(){document.removeEventListener("mousemove",this.onRightThumbMousemove),document.removeEventListener("mouseup",this.onRightThumbMouseup),document.removeEventListener("touchmove",this.onRightThumbMousemove),document.removeEventListener("touchend",this.onRightThumbMouseup)},onMouseWheel:function(e){if(!0!==this.preventWheel&&(e.shiftKey||e.ctrlKey)){var t=1;t>1&&(t=1),e.deltaY<0&&(t=-t),e.shiftKey&&e.ctrlKey?this.valueMin+t>=this.minimum&&this.valueMax+t<=this.maximum&&(this.valueMin=this.valueMin+t,this.valueMax=this.valueMax+t):e.ctrlKey?(t=this.valueMax+t,t<this.valueMin+this.step?t=this.valueMin+this.step:t>this.maximum&&(t=this.maximum),this.valueMax=t):e.shiftKey&&(t=this.valueMin+t,t<this.minimum?t=this.minimum:t>this.valueMax-this.step&&(t=this.valueMax-this.step),this.valueMin=t)}},triggerInput:function(){var e={min:this.minimum,max:this.maximum,minValue:this.valueMin,maxValue:this.valueMax};this.$emit("input",e)}},computed:{minimum:function(){return void 0===this.min?0:this.min},maximum:function(){var e=this.labels.length-1||100;return void 0===this.max?e:this.max},stepCount:function(){return this.labels.length?this.labels.length-1:(this.maximum-this.minimum)/this.step},subStepCount:function(){return this.labels.length&&this.step>1?(this.maximum-this.minimum)/this.step:0},barMin:function(){var e=(this.valueMin-this.minimum)/(this.maximum-this.minimum)*100;return e},barMax:function(){var e=100-(this.valueMax-this.minimum)/(this.maximum-this.minimum)*100;return e},barMinVal:function(){return parseFloat((this.valueMin||0).toFixed(2))},barMaxVal:function(){return parseFloat((this.valueMax||100).toFixed(2))},scaleLabels:function(){var e=this.labels;return 0===e.length&&(e=[],e.push(this.minimum),e.push(this.maximum)),e}},watch:{valueMin:function(){this.triggerInput()},valueMax:function(){this.triggerInput()},minValue:function(e){this.valueMin=e<this.minimum?this.minimum:e},maxValue:function(e){this.valueMax=e>this.maximum?this.maximum:e}},mounted:function(){}};n("ea86");X.render=F;var J=X,W=(n("f633"),{name:"App",components:{MultiRangeSlider:J},data:function(){return{barMinValue:10,barMaxValue:90,dayBarMinValue:32,dayBarMaxValue:333,wBarMinValue:1,wBarMaxValue:5,hBarMinValue:120,hBarMaxValue:600}},methods:{UpdateValues:function(e){this.barMinValue=e.minValue,this.barMaxValue=e.maxValue},updateWeekValues:function(e){this.wBarMinValue=e.minValue,this.wBarMaxValue=e.maxValue},updateDayValues:function(e){this.dayBarMinValue=e.minValue,this.dayBarMaxValue=e.maxValue},updateHoursValues:function(e){this.hBarMinValue=e.minValue,this.hBarMaxValue=e.maxValue}},computed:{weekNames:function(){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},wBarMinCaption:function(){return this.weekNames[this.wBarMinValue]},wBarMaxCaption:function(){return this.weekNames[this.wBarMaxValue]},monthNames:function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},hoursLabel:function(){for(var e=[],t=0;t<=12;t++)e.push("".concat(1===t.toString().length?"0":"").concat(t,":00"));return e},startDate:function(){var e=new Date;return new Date("1-Jan-"+e.getFullYear())},dayMinCaption:function(){var e=new Date,t=new Date("1-Jan-"+e.getFullYear());return t.setDate(this.dayBarMinValue),t.toString()},dayMaxCaption:function(){var e=new Date,t=new Date("1-Jan-"+e.getFullYear());return t.setDate(this.dayBarMaxValue),t.toString()},hoursMinCaption:function(){var e=Math.floor(this.hBarMinValue/60),t=this.hBarMinValue%60,n=1===e.toString().length?"0":"",a=1===t.toString().length?"0":"";return"".concat(n).concat(e,":").concat(a).concat(t)},hoursMaxCaption:function(){var e=Math.floor(this.hBarMaxValue/60),t=this.hBarMaxValue%60,n=1===e.toString().length?"0":"",a=1===t.toString().length?"0":"";return"".concat(n).concat(e,":").concat(a).concat(t)}}});n("2523");W.render=B;var P=W;Object(a["b"])(P).mount("#app")},"62ee":function(e,t,n){},c6e5:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ea86:function(e,t,n){"use strict";n("62ee")},f633:function(e,t,n){}});
//# sourceMappingURL=app.868cb8cd.js.map