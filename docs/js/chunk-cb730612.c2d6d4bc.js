(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb730612"],{"0845":function(t,i,e){"use strict";e("ab33")},"955f":function(t,i,e){},ab33:function(t,i,e){},f4e3:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"visual"},[n("hooper",{staticClass:"visual-wrap",attrs:{settings:t.hooperSettings}},[n("slide",{staticClass:"slide"},[n("div",{staticClass:"video-wrap"},[n("video",{staticClass:"video",attrs:{src:e("f65e"),autoplay:"",muted:"",loop:""},domProps:{muted:!0}}),n("div",{staticClass:"video-words"},[n("strong",[t._v("비즈니스, 톡처럼 쉬워지다"),n("br")]),n("strong",[t._v("카카오비즈니스")])])])]),n("slide",{staticClass:"slide"}),n("slide",{staticClass:"slide"})],1)],1)},s=[],o=e("2b0e");
/**
  * Hopper 0.3.4
  * (c) 2019
    * @license MIT
    */
function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),n.forEach((function(i){r(t,i,e[i])}))}return t}function h(t){return l(t)||c(t)||u()}function l(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t,i,e){return Math.max(Math.min(t,e),i)}function f(){return Date.now()}function p(t,i){this.create=function(){return window.setInterval(t,i)},this.stop=function(){this.timer&&(window.clearInterval(this.timer),this.timer=null)},this.start=function(){this.timer||(this.timer=this.create())},this.restart=function(t){i=t||i,this.stop(),this.start()},this.timer=this.create()}function g(t,i){var e;return e=t<0?(t+i)%i:t%i,e!==e?0:e}function v(t,i){var e=i.children||i.componentOptions.children||i.text,n=i.componentOptions.Ctor;return t(n,i.data,e)}function m(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var i=Object(t),e=1;e<arguments.length;e++){var n=arguments[e];if(void 0!==n&&null!==n){n=Object(n);for(var s=Object.keys(Object(n)),o=0,r=s.length;o<r;o++){var a=s[o],h=Object.getOwnPropertyDescriptor(n,a);void 0!==h&&h.enumerable&&(i[a]=n[a])}}}return i}var y=Object.assign||m;function S(t){return t<0?-1:t>0?1:0}var w=Math.sign||S;function b(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.$scopedSlots.default?t.$scopedSlots.default(i)||[]:t.$slots.default||[]}var T=new o["a"],x={name:"Hooper",provide:function(){return{$hooper:this}},props:{itemsToShow:{default:1,type:Number},itemsToSlide:{default:1,type:Number},initialSlide:{default:0,type:Number},infiniteScroll:{default:!1,type:Boolean},centerMode:{default:!1,type:Boolean},vertical:{default:!1,type:Boolean},rtl:{default:null,type:Boolean},autoPlay:{default:!1,type:Boolean},playSpeed:{default:2e3,type:Number},mouseDrag:{default:!0,type:Boolean},touchDrag:{default:!0,type:Boolean},wheelControl:{default:!0,type:Boolean},keysControl:{default:!0,type:Boolean},shortDrag:{default:!0,type:Boolean},transition:{default:300,type:Number},hoverPause:{default:!0,type:Boolean},trimWhiteSpace:{default:!1,type:Boolean},settings:{default:function(){return{}},type:Object},group:{type:String,default:null}},data:function(){return{isDragging:!1,isSliding:!1,isTouch:!1,isHover:!1,isFocus:!1,initialized:!1,slideWidth:0,slideHeight:0,slidesCount:0,trimStart:0,trimEnd:1,currentSlide:null,timer:null,defaults:{},breakpoints:{},delta:{x:0,y:0},config:{}}},computed:{slideBounds:function(){var t=this.config,i=this.currentSlide,e=t.itemsToShow,n=t.centerMode?Math.ceil(i-e/2):i,s=t.centerMode?Math.floor(i+e/2):Math.floor(i+e-1);return{lower:n,upper:s}},trackTransform:function(){var t=this.config,i=t.infiniteScroll,e=t.vertical,n=t.rtl,s=t.centerMode,o=n?-1:1,r=e?this.slideHeight:this.slideWidth,a=e?this.containerHeight:this.containerWidth,h=e?this.delta.y:this.delta.x,l=i?r*this.slidesCount:0,c=s?(a-r)/2:0,u=h+o*(c-l-this.currentSlide*r);return e?"transform: translate(0, ".concat(u,"px);"):"transform: translate(".concat(u,"px, 0);")},trackTransition:function(){return this.initialized&&this.isSliding?"transition: ".concat(this.config.transition,"ms"):""}},watch:{group:function(t,i){t!==i&&(T.$off("slideGroup:".concat(i),this._groupSlideHandler),this.addGroupListeners())}},methods:{slideTo:function(t){var i=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.isSliding&&t!==this.currentSlide){this.$emit("beforeSlide",{currentSlide:this.currentSlide,slideTo:a});var n=this.config,s=n.infiniteScroll,o=n.transition,r=this.currentSlide,a=s?t:d(t,this.trimStart,this.slidesCount-this.trimEnd);this.group&&e&&T.$emit("slideGroup:".concat(this.group),t),this.currentSlide=a,this.isSliding=!0,window.setTimeout((function(){i.isSliding=!1,i.currentSlide=g(a,i.slidesCount)}),o),this.$emit("slide",{currentSlide:this.currentSlide,slideFrom:r})}},slideNext:function(){this.slideTo(this.currentSlide+this.config.itemsToSlide)},slidePrev:function(){this.slideTo(this.currentSlide-this.config.itemsToSlide)},initEvents:function(){null===this.defaults.rtl&&(this.defaults.rtl="rtl"===getComputedStyle(this.$el).direction),this.config.autoPlay&&this.initAutoPlay(),this.config.mouseDrag&&this.$refs.list.addEventListener("mousedown",this.onDragStart),this.config.touchDrag&&this.$refs.list.addEventListener("touchstart",this.onDragStart,{passive:!0}),this.config.keysControl&&this.$el.addEventListener("keydown",this.onKeypress),this.config.wheelControl&&(this.lastScrollTime=f(),this.$el.addEventListener("wheel",this.onWheel,{passive:!1})),window.addEventListener("resize",this.update)},initAutoPlay:function(){var t=this;this.timer=new p((function(){t.isSliding||t.isDragging||t.isHover&&t.config.hoverPause||t.isFocus||(t.currentSlide!==t.slidesCount-1||t.config.infiniteScroll?t.slideNext():t.slideTo(0))}),this.config.playSpeed)},initDefaults:function(){this.breakpoints=this.settings.breakpoints,this.defaults=y({},this.$props,this.settings),this.config=y({},this.defaults)},update:function(){this.breakpoints&&this.updateConfig(),this.updateWidth(),this.updateTrim(),this.$emit("updated",{containerWidth:this.containerWidth,containerHeight:this.containerHeight,slideWidth:this.slideWidth,slideHeight:this.slideHeight,settings:this.config})},updateTrim:function(){var t=this.config,i=t.trimWhiteSpace,e=t.itemsToShow,n=t.centerMode,s=t.infiniteScroll;if(!i||s)return this.trimStart=0,void(this.trimEnd=1);this.trimStart=n?Math.floor((e-1)/2):0,this.trimEnd=n?Math.ceil(e/2):e},updateWidth:function(){var t=this.$el.getBoundingClientRect();this.containerWidth=t.width,this.containerHeight=t.height,this.config.vertical?this.slideHeight=this.containerHeight/this.config.itemsToShow:this.slideWidth=this.containerWidth/this.config.itemsToShow},updateConfig:function(){var t,i=this,e=Object.keys(this.breakpoints).sort((function(t,i){return i-t}));e.some((function(e){if(t=window.matchMedia("(min-width: ".concat(e,"px)")).matches,t)return i.config=y({},i.config,i.defaults,i.breakpoints[e]),!0})),t||(this.config=y(this.config,this.defaults))},restartTimer:function(){this.timer&&this.timer.restart()},restart:function(){var t=this;this.$nextTick((function(){t.update()}))},onDragStart:function(t){this.isTouch="touchstart"===t.type,(this.isTouch||0===t.button)&&(this.startPosition={x:0,y:0},this.endPosition={x:0,y:0},this.isDragging=!0,this.startPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.startPosition.y=this.isTouch?t.touches[0].clientY:t.clientY,document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.addEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd))},isInvalidDirection:function(t,i){return this.config.vertical?!!this.config.vertical&&Math.abs(i)<=Math.abs(t):Math.abs(t)<=Math.abs(i)},onDrag:function(t){if(!this.isSliding){this.endPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.endPosition.y=this.isTouch?t.touches[0].clientY:t.clientY;var i=this.endPosition.x-this.startPosition.x,e=this.endPosition.y-this.startPosition.y;this.isInvalidDirection(i,e)||(this.delta.y=e,this.delta.x=i,this.isTouch||t.preventDefault())}},onDragEnd:function(){var t=this.config.shortDrag?.5:.15;if(this.isDragging=!1,this.config.vertical){var i=Math.round(Math.abs(this.delta.y/this.slideHeight)+t);this.slideTo(this.currentSlide-w(this.delta.y)*i)}if(!this.config.vertical){var e=(this.config.rtl?-1:1)*w(this.delta.x),n=Math.round(Math.abs(this.delta.x/this.slideWidth)+t);this.slideTo(this.currentSlide-e*n)}this.delta.x=0,this.delta.y=0,document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd),this.restartTimer()},onTransitionend:function(){this.isSliding=!1,this.$emit("afterSlide",{currentSlide:this.currentSlide})},onKeypress:function(t){var i=t.key;return i.startsWith("Arrow")&&t.preventDefault(),this.config.vertical?("ArrowUp"===i&&this.slidePrev(),void("ArrowDown"===i&&this.slideNext())):this.config.rtl?("ArrowRight"===i&&this.slidePrev(),void("ArrowLeft"===i&&this.slideNext())):("ArrowRight"===i&&this.slideNext(),void("ArrowLeft"===i&&this.slidePrev()))},onWheel:function(t){if(t.preventDefault(),!(f()-this.lastScrollTime<200)){this.lastScrollTime=f();var i=t.wheelDelta||-t.deltaY,e=w(i);-1===e&&this.slideNext(),1===e&&this.slidePrev()}},addGroupListeners:function(){var t=this;this.group&&(this._groupSlideHandler=function(i){t.slideTo(i,!1)},T.$on("slideGroup:".concat(this.group),this._groupSlideHandler))}},created:function(){this.initDefaults()},mounted:function(){var t=this;this.initEvents(),this.addGroupListeners(),this.$nextTick((function(){t.update(),t.slideTo(t.config.initialSlide||0),setTimeout((function(){t.$emit("loaded"),t.initialized=!0}),t.transition)}))},beforeDestroy:function(){window.removeEventListener("resize",this.update),this.group&&T.$off("slideGroup:".concat(this.group),this._groupSlideHandler),this.timer&&this.timer.stop()},render:function(t){var i=this,e=k.call(this,t);return t("section",{class:{hooper:!0,"is-vertical":this.config.vertical,"is-rtl":this.config.rtl},attrs:{tabindex:"0"},on:{focusin:function(){return i.isFocus=!0},focusout:function(){return i.isFocus=!1},mouseover:function(){return i.isHover=!0},mouseleave:function(){return i.isHover=!1}}},e)}};function D(t,i){for(var e=[],n=[],s=i.length,o=0;o<s;o++){var r=i[o],a=v(t,r),l=o-s;a.data.key="before_".concat(o),a.key=a.data.key,a.componentOptions.propsData.index=l,a.data.props={index:l,isClone:!0},e.push(a);var c=v(t,r);l=o+s,c.data.key="after_".concat(l),c.componentOptions.propsData.index=l,c.key=c.data.key,c.data.props={index:l,isClone:!0},n.push(c)}return[].concat(e,h(i),n)}function C(t){for(var i=b(this),e=i.length,n=0,s=[],o=0;o<e;o++){var r=i[o],h=r.componentOptions&&r.componentOptions.Ctor;h&&"HooperSlide"===h.options.name&&(r.componentOptions.propsData.index=n,r.data.key=n,r.key=n,r.data.props=a({},r.data.props||{},{isClone:!1,index:n++}),s.push(r))}return this.slidesCount=s.length,this.config.infiniteScroll&&(s=D(t,s)),t("ul",{class:{"hooper-track":!0,"is-dragging":this.isDragging},style:this.trackTransform+this.trackTransition,ref:"track",on:{transitionend:this.onTransitionend}},s)}function k(t){var i=C.call(this,t),e=this.$slots["hooper-addons"]||[],n=t("div",{class:"hooper-liveregion hooper-sr-only",attrs:{"aria-live":"polite","aria-atomic":"true"}},"Item ".concat(this.currentSlide+1," of ").concat(this.slidesCount)),s=[i].concat(h(e),[n]);return[t("div",{class:"hooper-list",ref:"list"},s)]}var $={name:"HooperSlide",inject:["$hooper"],props:{isClone:{type:Boolean,default:!1},index:{type:Number,required:!0}},computed:{style:function(){var t=this.$hooper||{},i=t.config,e=t.slideHeight,n=t.slideWidth;return i.vertical?"height: ".concat(e,"px"):"width: ".concat(n,"px")},isActive:function(){var t=this.$hooper.slideBounds,i=t.upper,e=t.lower;return this.index>=e&&this.index<=i},isPrev:function(){var t=this.$hooper.slideBounds.lower,i=this.$hooper.config.itemsToSlide;return this.index<t&&this.index>=t-i},isNext:function(){var t=this.$hooper.slideBounds.upper,i=this.$hooper.config.itemsToSlide;return this.index>t&&this.index<=t+i},isCurrent:function(){return this.index===this.$hooper.currentSlide}},render:function(t){var i={"hooper-slide":!0,"is-clone":this.isClone,"is-active":this.isActive,"is-prev":this.isPrev,"is-next":this.isNext,"is-current":this.isCurrent},e=b(this);return t("li",{class:i,style:this.style,attrs:{"aria-hidden":!this.isActive}},e)}};e("955f");var P={name:"Intro",data:function(){return{hooperSettings:{wheelControl:!1}}},components:{Hooper:x,Slide:$},mounted:function(){},methods:{}},O=P,H=(e("0845"),e("2877")),E=Object(H["a"])(O,n,s,!1,null,null,null);i["default"]=E.exports},f65e:function(t,i,e){t.exports=e.p+"media/main_visual_210525.73513f94.mp4"}}]);
//# sourceMappingURL=chunk-cb730612.c2d6d4bc.js.map