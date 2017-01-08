+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.alert");r||n.data("bs.alert",r=new i(this)),"string"==typeof e&&r[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)};i.VERSION="3.2.0",i.prototype.close=function(e){function n(){o.detach().trigger("closed.bs.alert").remove()}var i=t(this),r=i.attr("data-target");r||(r=i.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var o=t(r);e&&e.preventDefault(),o.length||(o=i.hasClass("alert")?i:i.parent()),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(150):n())};var r=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=r,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),r=i.data("bs.carousel"),o=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),s="string"==typeof e?e:o.slide;r||i.data("bs.carousel",r=new n(this,o)),"number"==typeof e?r.to(e):s?r[s]():o.interval&&r.pause().cycle()})}var n=function(e,n){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.to=function(e){var n=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,n){var i=this.$element.find(".item.active"),r=n||i[e](),o=this.interval,s="next"==e?"left":"right",a="next"==e?"first":"last",u=this;if(!r.length){if(!this.options.wrap)return;r=this.$element.find(".item")[a]()}if(r.hasClass("active"))return this.sliding=!1;var l=r[0],c=t.Event("slide.bs.carousel",{relatedTarget:l,direction:s});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=t(this.$indicators.children()[this.getItemIndex(r)]);h&&h.addClass("active")}var f=t.Event("slid.bs.carousel",{relatedTarget:l,direction:s});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(e),r[0].offsetWidth,i.addClass(s),r.addClass(s),i.one("bsTransitionEnd",function(){r.removeClass([e,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger(f)},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(f)),o&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(n){var i,r=t(this),o=t(r.attr("data-target")||(i=r.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(o.hasClass("carousel")){var s=t.extend({},o.data(),r.data()),a=r.attr("data-slide-to");a&&(s.interval=!1),e.call(o,s),a&&o.data("bs.carousel").to(a),n.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),r=i.data("bs.collapse"),o=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!r&&o.toggle&&"show"==e&&(e=!e),r||i.data("bs.collapse",r=new n(this,o)),"string"==typeof e&&r[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};n.VERSION="3.2.0",n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var r=i.data("bs.collapse");if(r&&r.transitioning)return;e.call(i,"hide"),r||i.data("bs.collapse",null)}var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var a=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(350)[o](this.$element[0][a])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(350):i.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var i=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var i,r=t(this),o=r.attr("data-target")||n.preventDefault()||(i=r.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=t(o),a=s.data("bs.collapse"),u=a?"toggle":r.data(),l=r.attr("data-parent"),c=l&&t(l);a&&a.transitioning||(c&&c.find('[data-toggle="collapse"][data-parent="'+l+'"]').not(r).addClass("collapsed"),r[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(s,u)})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(r).remove(),t(o).each(function(){var i=n(t(this)),r={relatedTarget:this};i.hasClass("open")&&(i.trigger(e=t.Event("hide.bs.dropdown",r)),e.isDefaultPrevented()||i.removeClass("open").trigger("hidden.bs.dropdown",r))}))}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this)),"string"==typeof e&&i[e].call(n)})}var r=".dropdown-backdrop",o='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.2.0",s.prototype.toggle=function(i){var r=t(this);if(!r.is(".disabled, :disabled")){var o=n(r),s=o.hasClass("open");if(e(),!s){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var a={relatedTarget:this};if(o.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;r.trigger("focus"),o.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var i=t(this);if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var r=n(i),s=r.hasClass("open");if(!s||s&&27==e.keyCode)return 27==e.which&&r.find(o).trigger("focus"),i.trigger("click");var a=" li:not(.divider):visible a",u=r.find('[role="menu"]'+a+', [role="listbox"]'+a);if(u.length){var l=u.index(u.filter(":focus"));38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<u.length-1&&l++,~l||(l=0),u.eq(l).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,s.prototype.toggle).on("keydown.bs.dropdown.data-api",o+', [role="menu"], [role="listbox"]',s.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),r=i.data("bs.tab");r||i.data("bs.tab",r=new n(this)),"string"==typeof e&&r[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.2.0",n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=n.find(".active:last a")[0],o=t.Event("show.bs.tab",{relatedTarget:r});if(e.trigger(o),!o.isDefaultPrevented()){var s=t(i);this.activate(e.closest("li"),n),this.activate(s,s.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:r})})}}},n.prototype.activate=function(e,n,i){function r(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),s?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),i&&i()}var o=n.find("> .active"),s=i&&t.support.transition&&o.hasClass("fade");s?o.one("bsTransitionEnd",r).emulateTransitionEnd(150):r(),o.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(n){n.preventDefault(),e.call(t(this),"show")})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var r=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(r,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}(this,function(t){"use strict";var e,n,i,r,o={},s=!!document.querySelector&&!!t.addEventListener,a={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},u=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(n,t[i],i,t);else for(var r=0,o=t.length;o>r;r++)e.call(n,t[r],r,t)},l=function(t,e){var n={};return u(t,function(e,i){n[i]=t[i]}),u(e,function(t,i){n[i]=e[i]}),n},c=function(t,e){for(var n=e.charAt(0);t&&t!==document;t=t.parentNode)if("."===n){if(t.classList.contains(e.substr(1)))return t}else if("#"===n){if(t.id===e.substr(1))return t}else if("["===n&&t.hasAttribute(e.substr(1,e.length-2)))return t;return!1},h=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},f=function(t){for(var e,n=String(t),i=n.length,r=-1,o="",s=n.charCodeAt(0);++r<i;){if(e=n.charCodeAt(r),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=e>=1&&31>=e||127==e||0===r&&e>=48&&57>=e||1===r&&e>=48&&57>=e&&45===s?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e?n.charAt(r):"\\"+n.charAt(r)}return o},p=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=.5>e?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=.5>e?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},d=function(t,e,n){var i=0;if(t.offsetParent)do i+=t.offsetTop,t=t.offsetParent;while(t);return i=i-e-n,i>=0?i:0},g=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},v=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},m=function(e,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[t.location.protocol,"//",t.location.host,t.location.pathname,t.location.search,e].join(""))},y=function(t){return null===t?0:h(t)+t.offsetTop};o.animateScroll=function(e,n,o){var s=l(s||a,o||{}),u=v(e?e.getAttribute("data-options"):null);s=l(s,u),n="#"+f(n.substr(1));var c="#"===n?document.documentElement:document.querySelector(n),h=t.pageYOffset;i||(i=document.querySelector("[data-scroll-header]")),r||(r=y(i));var w,_,b,C=d(c,r,parseInt(s.offset,10)),x=C-h,S=g(),T=0;m(n,s.updateURL);var O=function(i,r,o){var a=t.pageYOffset;(i==r||a==r||t.innerHeight+a>=S)&&(clearInterval(o),c.focus(),s.callbackAfter(e,n))},E=function(){T+=16,_=T/parseInt(s.speed,10),_=_>1?1:_,b=h+x*p(s.easing,_),t.scrollTo(0,Math.floor(b)),O(b,C,w)},k=function(){s.callbackBefore(e,n),w=setInterval(E,16)};0===t.pageYOffset&&t.scrollTo(0,0),k()};var w=function(t){var n=c(t.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(t.preventDefault(),o.animateScroll(n,n.hash,e))},_=function(){n||(n=setTimeout(function(){n=null,r=y(i)},66))};return o.destroy=function(){e&&(document.removeEventListener("click",w,!1),t.removeEventListener("resize",_,!1),e=null,n=null,i=null,r=null)},o.init=function(n){s&&(o.destroy(),e=l(a,n||{}),i=document.querySelector("[data-scroll-header]"),r=y(i),document.addEventListener("click",w,!1),i&&t.addEventListener("resize",_,!1))},o}),!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.ProgressBar=t()}}(function(){var t;return function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,n,i){(function(){var e=this||Function("return this")(),r=function(){"use strict";function r(){}function o(t,e){var n;for(n in t)Object.hasOwnProperty.call(t,n)&&e(n)}function s(t,e){return o(e,function(n){t[n]=e[n]}),t}function a(t,e){o(e,function(n){"undefined"==typeof t[n]&&(t[n]=e[n])})}function u(t,e,n,i,r,o,s){var a,u,c,h=o>t?0:(t-o)/r;for(a in e)e.hasOwnProperty(a)&&(u=s[a],c="function"==typeof u?u:d[u],e[a]=l(n[a],i[a],c,h));return e}function l(t,e,n,i){return t+(e-t)*n(i)}function c(t,e){var n=p.prototype.filter,i=t._filterArgs;o(n,function(r){"undefined"!=typeof n[r][e]&&n[r][e].apply(t,i)})}function h(t,e,n,i,r,o,s,a,l,h,f){b=e+n+i,C=Math.min(f||_(),b),x=C>=b,S=i-(b-C),t.isPlaying()&&(x?(l(s,t._attachment,S),t.stop(!0)):(t._scheduleId=h(t._timeoutHandler,y),c(t,"beforeTween"),e+n>C?u(1,r,o,s,1,1,a):u(C,r,o,s,i,e+n,a),c(t,"afterTween"),l(r,t._attachment,S)))}function f(t,e){var n={},i=typeof e;return"string"===i||"function"===i?o(t,function(t){n[t]=e}):o(t,function(t){n[t]||(n[t]=e[t]||v)}),n}function p(t,e){this._currentState=t||{},this._configured=!1,this._scheduleFunction=g,"undefined"!=typeof e&&this.setConfig(e)}var d,g,v="linear",m=500,y=1e3/60,w=Date.now?Date.now:function(){return+new Date},_="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:w;g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var b,C,x,S;return p.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=_(),this._start(this.get(),this._attachment),this.resume())},p.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||r,this._step=t.step||r,this._finish=t.finish||r,this._duration=t.duration||m,this._currentState=s({},t.from)||this.get(),this._originalState=this.get(),this._targetState=s({},t.to)||this.get();var e=this;this._timeoutHandler=function(){h(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var n=this._currentState,i=this._targetState;return a(i,n),this._easing=f(n,t.easing||v),this._filterArgs=[n,this._originalState,i,this._easing],c(this,"tweenCreated"),this},p.prototype.get=function(){return s({},this._currentState)},p.prototype.set=function(t){this._currentState=t},p.prototype.pause=function(){return this._pausedAtTime=_(),this._isPaused=!0,this},p.prototype.resume=function(){return this._isPaused&&(this._timestamp+=_()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},p.prototype.seek=function(t){t=Math.max(t,0);var e=_();return this._timestamp+t===0?this:(this._timestamp=e-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,h(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,e),this.pause()),this)},p.prototype.stop=function(t){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=r,(e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||e.mozCancelRequestAnimationFrame||e.clearTimeout)(this._scheduleId),t&&(c(this,"beforeTween"),u(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),c(this,"afterTween"),c(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},p.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},p.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},p.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},p.prototype.filter={},p.prototype.formula={linear:function(t){return t}},d=p.prototype.formula,s(p,{now:_,each:o,tweenProps:u,tweenProp:l,applyFilter:c,shallowCopy:s,defaults:a,composeEasingObject:f}),"function"==typeof SHIFTY_DEBUG_NOW&&(e.timeoutHandler=h),"object"==typeof i?n.exports=p:"function"==typeof t&&t.amd?t(function(){return p}):"undefined"==typeof e.Tweenable&&(e.Tweenable=p),p}();!function(){r.shallowCopy(r.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return-Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},swingFromTo:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},swingFrom:function(t){var e=1.70158;return t*t*((e+1)*t-e)},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?2-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}})}(),function(){function t(t,e,n,i,r,o){function s(t){return((p*t+d)*t+g)*t}function a(t){return((v*t+m)*t+y)*t}function u(t){return(3*p*t+2*d)*t+g}function l(t){return 1/(200*t)}function c(t,e){return a(f(t,e))}function h(t){return t>=0?t:0-t}function f(t,e){var n,i,r,o,a,l;for(r=t,l=0;8>l;l++){if(o=s(r)-t,h(o)<e)return r;if(a=u(r),h(a)<1e-6)break;r-=o/a}if(n=0,i=1,r=t,n>r)return n;if(r>i)return i;for(;i>n;){if(o=s(r),h(o-t)<e)return r;t>o?n=r:i=r,r=.5*(i-n)+n}return r}var p=0,d=0,g=0,v=0,m=0,y=0;return g=3*e,d=3*(i-e)-g,p=1-g-d,y=3*n,m=3*(r-n)-y,v=1-y-m,c(t,l(o))}function e(e,n,i,r){return function(o){return t(o,e,n,i,r,1)}}r.setBezierFunction=function(t,n,i,o,s){var a=e(n,i,o,s);return a.displayName=t,a.x1=n,a.y1=i,a.x2=o,a.y2=s,r.prototype.formula[t]=a},r.unsetBezierFunction=function(t){delete r.prototype.formula[t]}}(),function(){function t(t,e,n,i,o,s){return r.tweenProps(i,e,t,n,1,s,o)}var e=new r;e._filterArgs=[],r.interpolate=function(n,i,o,s,a){var u=r.shallowCopy({},n),l=a||0,c=r.composeEasingObject(n,s||"linear");e.set({});var h=e._filterArgs;h.length=0,h[0]=u,h[1]=n,h[2]=i,h[3]=c,r.applyFilter(e,"tweenCreated"),r.applyFilter(e,"beforeTween");var f=t(n,u,i,o,c,l);return r.applyFilter(e,"afterTween"),f}}(),function(t){function e(t,e){var n,i=[],r=t.length;for(n=0;r>n;n++)i.push("_"+e+"_"+n);return i}function n(t){var e=t.match(b);return e?(1===e.length||t[0].match(_))&&e.unshift(""):e=["",""],e.join(O)}function i(e){t.each(e,function(t){var n=e[t];"string"==typeof n&&n.match(T)&&(e[t]=r(n))})}function r(t){return u(T,t,o)}function o(t){var e=s(t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"}function s(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),E[0]=a(t.substr(0,2)),E[1]=a(t.substr(2,2)),E[2]=a(t.substr(4,2)),E}function a(t){return parseInt(t,16)}function u(t,e,n){var i=e.match(t),r=e.replace(t,O);if(i)for(var o,s=i.length,a=0;s>a;a++)o=i.shift(),r=r.replace(O,n(o));return r}function l(t){return u(x,t,c)}function c(t){for(var e=t.match(C),n=e.length,i=t.match(S)[0],r=0;n>r;r++)i+=parseInt(e[r],10)+",";return i=i.slice(0,-1)+")"}function h(i){var r={};return t.each(i,function(t){var o=i[t];if("string"==typeof o){var s=m(o);r[t]={formatString:n(o),chunkNames:e(s,t)}}}),r}function f(e,n){t.each(n,function(t){for(var i=e[t],r=m(i),o=r.length,s=0;o>s;s++)e[n[t].chunkNames[s]]=+r[s];delete e[t]})}function p(e,n){t.each(n,function(t){var i=e[t],r=d(e,n[t].chunkNames),o=g(r,n[t].chunkNames);i=v(n[t].formatString,o),e[t]=l(i)})}function d(t,e){for(var n,i={},r=e.length,o=0;r>o;o++)n=e[o],i[n]=t[n],delete t[n];return i}function g(t,e){k.length=0;for(var n=e.length,i=0;n>i;i++)k.push(t[e[i]]);return k}function v(t,e){for(var n=t,i=e.length,r=0;i>r;r++)n=n.replace(O,+e[r].toFixed(4));return n}function m(t){return t.match(C)}function y(e,n){t.each(n,function(t){var i,r=n[t],o=r.chunkNames,s=o.length,a=e[t];if("string"==typeof a){var u=a.split(" "),l=u[u.length-1];for(i=0;s>i;i++)e[o[i]]=u[i]||l}else for(i=0;s>i;i++)e[o[i]]=a;delete e[t]})}function w(e,n){t.each(n,function(t){var i=n[t],r=i.chunkNames,o=r.length,s=e[r[0]],a=typeof s;if("string"===a){for(var u="",l=0;o>l;l++)u+=" "+e[r[l]],delete e[r[l]];e[t]=u.substr(1)}else e[t]=s})}var _=/(\d|\-|\.)/,b=/([^\-0-9\.]+)/g,C=/[0-9.\-]+/g,x=new RegExp("rgb\\("+C.source+/,\s*/.source+C.source+/,\s*/.source+C.source+"\\)","g"),S=/^.*\(/,T=/#([0-9]|[a-f]){3,6}/gi,O="VAL",E=[],k=[];t.prototype.filter.token={tweenCreated:function(t,e,n,r){i(t),i(e),i(n),this._tokenData=h(t)},beforeTween:function(t,e,n,i){y(i,this._tokenData),f(t,this._tokenData),f(e,this._tokenData),f(n,this._tokenData)},afterTween:function(t,e,n,i){p(t,this._tokenData),p(e,this._tokenData),p(n,this._tokenData),w(i,this._tokenData)}}}(r)}).call(null)},{}],2:[function(t,e,n){var i=t("./shape"),r=t("./utils"),o=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,i.apply(this,arguments)};o.prototype=new i,o.prototype.constructor=o,o.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var n=50-e/2;return r.render(this._pathTemplate,{radius:n,"2radius":2*n})},o.prototype._trailString=function(t){return this._pathString(t)},e.exports=o},{"./shape":7,"./utils":8}],3:[function(t,e,n){var i=t("./shape"),r=t("./utils"),o=function(t,e){this._pathTemplate="M 0,{center} L 100,{center}",i.apply(this,arguments)};o.prototype=new i,o.prototype.constructor=o,o.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},o.prototype._pathString=function(t){return r.render(this._pathTemplate,{center:t.strokeWidth/2})},o.prototype._trailString=function(t){return this._pathString(t)},e.exports=o},{"./shape":7,"./utils":8}],4:[function(t,e,n){e.exports={Line:t("./line"),Circle:t("./circle"),SemiCircle:t("./semicircle"),Path:t("./path"),Shape:t("./shape"),utils:t("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./utils":8}],5:[function(t,e,n){var i=t("shifty"),r=t("./utils"),o={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},s=function(t,e){e=r.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},e);var n;n=r.isString(t)?document.querySelector(t):t,this.path=n,this._opts=e,this._tweenable=null;var i=this.path.getTotalLength();this.path.style.strokeDasharray=i+" "+i,this.set(0)};s.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength(),n=1-t/e;return parseFloat(n.toFixed(6),10)},s.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(r.isFunction(e)){var n=this._easing(this._opts.easing),i=this._calculateTo(t,n),o=this._opts.shape||this;e(i,o,this._opts.attachment)}},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},s.prototype.animate=function(t,e,n){e=e||{},r.isFunction(e)&&(n=e,e={});var o=r.extend({},e),s=r.extend({},this._opts);e=r.extend(s,e);var a=this._easing(e.easing),u=this._resolveFromAndTo(t,a,o);this.stop(),this.path.getBoundingClientRect();var l=this._getComputedDashOffset(),c=this._progressToOffset(t),h=this;this._tweenable=new i,this._tweenable.tween({from:r.extend({offset:l},u.from),to:r.extend({offset:c},u.to),duration:e.duration,easing:a,step:function(t){h.path.style.strokeDashoffset=t.offset;var n=e.shape||h;e.step(t,n,e.attachment)},finish:function(t){r.isFunction(n)&&n()}})},s.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},s.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},s.prototype._resolveFromAndTo=function(t,e,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},s.prototype._calculateFrom=function(t){return i.interpolate(this._opts.from,this._opts.to,this.value(),t)},s.prototype._calculateTo=function(t,e){return i.interpolate(this._opts.from,this._opts.to,t,e)},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null)},s.prototype._easing=function(t){return o.hasOwnProperty(t)?o[t]:t},e.exports=s},{"./utils":8,shifty:1}],6:[function(t,e,n){var i=t("./shape"),r=t("./circle"),o=t("./utils"),s=function(t,e){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,i.apply(this,arguments)};s.prototype=new i,s.prototype.constructor=s,s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 50")},s.prototype._initializeTextContainer=function(t,e,n){t.text.style&&(n.style.top="auto",n.style.bottom="0",t.text.alignToBottom?o.setStyle(n,"transform","translate(-50%, 0)"):o.setStyle(n,"transform","translate(-50%, 50%)"))},s.prototype._pathString=r.prototype._pathString,s.prototype._trailString=r.prototype._trailString,e.exports=s},{"./circle":2,"./shape":7,"./utils":8}],7:[function(t,e,n){var i=t("./path"),r=t("./utils"),o="Object is destroyed",s=function a(t,e){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=r.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:"",className:"progressbar-text"},svgStyle:{display:"block",width:"100%"}},e,!0),r.isObject(e)&&void 0!==e.svgStyle&&(this._opts.svgStyle=e.svgStyle),r.isObject(e)&&r.isObject(e.text)&&void 0!==e.text.style&&(this._opts.text.style=e.text.style);var n,o=this._createSvgView(this._opts);if(n=r.isString(t)?document.querySelector(t):t,!n)throw new Error("Container does not exist: "+t);this._container=n,this._container.appendChild(o.svg),this._warnContainerAspectRatio(this._container),
this._opts.svgStyle&&r.setStyles(o.svg,this._opts.svgStyle),this.svg=o.svg,this.path=o.path,this.trail=o.trail,this.text=null;var s=r.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new i(o.path,s),r.isObject(this._opts.text)&&this._opts.text.value&&this.setText(this._opts.text.value)}};s.prototype.animate=function(t,e,n){if(null===this._progressPath)throw new Error(o);this._progressPath.animate(t,e,n)},s.prototype.stop=function(){if(null===this._progressPath)throw new Error(o);void 0!==this._progressPath&&this._progressPath.stop()},s.prototype.destroy=function(){if(null===this._progressPath)throw new Error(o);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},s.prototype.set=function(t){if(null===this._progressPath)throw new Error(o);this._progressPath.set(t)},s.prototype.value=function(){if(null===this._progressPath)throw new Error(o);return void 0===this._progressPath?0:this._progressPath.value()},s.prototype.setText=function(t){if(null===this._progressPath)throw new Error(o);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),r.isObject(t)?(r.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},s.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var n=null;(t.trailColor||t.trailWidth)&&(n=this._createTrail(t),e.appendChild(n));var i=this._createPath(t);return e.appendChild(i),{svg:e,path:i,trail:n}},s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},s.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},s.prototype._createTrail=function(t){var e=this._trailString(t),n=r.extend({},t);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(e,n)},s.prototype._createPathElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("stroke",e.color),n.setAttribute("stroke-width",e.strokeWidth),e.fill?n.setAttribute("fill",e.fill):n.setAttribute("fill-opacity","0"),n},s.prototype._createTextContainer=function(t,e){var n=document.createElement("div");n.className=t.text.className;var i=t.text.style;return i&&(t.text.autoStyleContainer&&(e.style.position="relative"),r.setStyles(n,i),i.color||(n.style.color=t.color)),this._initializeTextContainer(t,e,n),n},s.prototype._initializeTextContainer=function(t,e,n){},s.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},s.prototype._warnContainerAspectRatio=function(t){if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),n=parseFloat(e.getPropertyValue("width"),10),i=parseFloat(e.getPropertyValue("height"),10);r.floatEquals(this.containerAspectRatio,n/i)||(console.warn("Incorrect aspect ratio of container",this._container,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",n/i),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},e.exports=s},{"./path":5,"./utils":8}],8:[function(t,e,n){function i(t,e,n){t=t||{},e=e||{},n=n||!1;for(var r in e)if(e.hasOwnProperty(r)){var o=t[r],s=e[r];n&&h(o)&&h(s)?t[r]=i(o,s,n):t[r]=s}return t}function r(t,e){var n=t;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i],o="\\{"+i+"\\}",s=new RegExp(o,"g");n=n.replace(s,r)}return n}function o(t,e,n){for(var i=t.style,r=0;r<g.length;++r){var o=g[r];i[o+a(e)]=n}i[e]=n}function s(t,e){f(e,function(e,n){null!==e&&void 0!==e&&(h(e)&&e.prefix===!0?o(t,n,e.value):t.style[n]=e)})}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function u(t){return"string"==typeof t||t instanceof String}function l(t){return"function"==typeof t}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(t){if(c(t))return!1;var e=typeof t;return"object"===e&&!!t}function f(t,e){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e(i,n)}}function p(t,e){return Math.abs(t-e)<v}function d(t){for(;t.firstChild;)t.removeChild(t.firstChild)}var g="Webkit Moz O ms".split(" "),v=.001;e.exports={extend:i,render:r,setStyle:o,setStyles:s,capitalize:a,isString:u,isFunction:l,isObject:h,forEachObject:f,floatEquals:p,removeChildren:d}},{}]},{},[4])(4)}),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.transformicons=e()}(this||window,function(){"use strict";var t={},e="tcon-transform",n={transform:["click"],revert:["click"]},i=function(t){return"string"==typeof t?Array.prototype.slice.call(document.querySelectorAll(t)):"undefined"==typeof t||t instanceof Array?t:[t]},r=function(t){return"string"==typeof t?t.toLowerCase().split(" "):t},o=function(t,e,o){var a=(o?"remove":"add")+"EventListener",u=i(t),l=u.length,c={};for(var h in n)c[h]=e&&e[h]?r(e[h]):n[h];for(;l--;)for(var f in c)for(var p=c[f].length;p--;)u[l][a](c[f][p],s)},s=function(e){t.toggle(e.currentTarget)};return t.add=function(e,n){return o(e,n),t},t.remove=function(e,n){return o(e,n,!0),t},t.transform=function(n){return i(n).forEach(function(t){t.classList.add(e)}),t},t.revert=function(n){return i(n).forEach(function(t){t.classList.remove(e)}),t},t.toggle=function(n){return i(n).forEach(function(n){t[n.classList.contains(e)?"revert":"transform"](n)}),t},t});
//# sourceMappingURL=compiled-plugins-script.js.map