+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),r=n.data("bs.alert");r||n.data("bs.alert",r=new s(this)),"string"==typeof t&&r[t].call(n)})}var n='[data-dismiss="alert"]',s=function(t){e(t).on("click",n,this.close)};s.VERSION="3.2.0",s.prototype.close=function(t){function n(){i.detach().trigger("closed.bs.alert").remove()}var s=e(this),r=s.attr("data-target");r||(r=s.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var i=e(r);t&&t.preventDefault(),i.length||(i=s.hasClass("alert")?s:s.parent()),i.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(150):n())};var r=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=s,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.bs.alert.data-api",n,s.prototype.close)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var s=e(this),r=s.data("bs.carousel"),i=e.extend({},n.DEFAULTS,s.data(),"object"==typeof t&&t),o="string"==typeof t?t:i.slide;r||s.data("bs.carousel",r=new n(this,i)),"number"==typeof t?r.to(t):o?r[o]():i.interval&&r.pause().cycle()})}var n=function(t,n){this.$element=e(t).on("keydown.bs.carousel",e.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};n.VERSION="3.2.0",n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},n.prototype.keydown=function(e){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},n.prototype.to=function(t){var n=this,s=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){n.to(t)}):s==t?this.pause().cycle():this.slide(t>s?"next":"prev",e(this.$items[t]))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(t,n){var s=this.$element.find(".item.active"),r=n||s[t](),i=this.interval,o="next"==t?"left":"right",a="next"==t?"first":"last",l=this;if(!r.length){if(!this.options.wrap)return;r=this.$element.find(".item")[a]()}if(r.hasClass("active"))return this.sliding=!1;var c=r[0],d=e.Event("slide.bs.carousel",{relatedTarget:c,direction:o});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,i&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var u=e(this.$indicators.children()[this.getItemIndex(r)]);u&&u.addClass("active")}var f=e.Event("slid.bs.carousel",{relatedTarget:c,direction:o});return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,s.addClass(o),r.addClass(o),s.one("bsTransitionEnd",function(){r.removeClass([t,o].join(" ")).addClass("active"),s.removeClass(["active",o].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(f)},0)}).emulateTransitionEnd(1e3*s.css("transition-duration").slice(0,-1))):(s.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(f)),i&&this.cycle(),this}};var s=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=s,this},e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(n){var s,r=e(this),i=e(r.attr("data-target")||(s=r.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""));if(i.hasClass("carousel")){var o=e.extend({},i.data(),r.data()),a=r.attr("data-slide-to");a&&(o.interval=!1),t.call(i,o),a&&i.data("bs.carousel").to(a),n.preventDefault()}}),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this);t.call(n,n.data())})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var s=e(this),r=s.data("bs.collapse"),i=e.extend({},n.DEFAULTS,s.data(),"object"==typeof t&&t);!r&&i.toggle&&"show"==t&&(t=!t),r||s.data("bs.collapse",r=new n(this,i)),"string"==typeof t&&r[t]()})}var n=function(t,s){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,s),this.transitioning=null,this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};n.VERSION="3.2.0",n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var n=e.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){var s=this.$parent&&this.$parent.find("> .panel > .in");if(s&&s.length){var r=s.data("bs.collapse");if(r&&r.transitioning)return;t.call(s,"hide"),r||s.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return o.call(this);var a=e.camelCase(["scroll",i].join("-"));this.$element.one("bsTransitionEnd",e.proxy(o,this)).emulateTransitionEnd(350)[i](this.$element[0][a])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return e.support.transition?void this.$element[n](0).one("bsTransitionEnd",e.proxy(s,this)).emulateTransitionEnd(350):s.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var s=e.fn.collapse;e.fn.collapse=t,e.fn.collapse.Constructor=n,e.fn.collapse.noConflict=function(){return e.fn.collapse=s,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var s,r=e(this),i=r.attr("data-target")||n.preventDefault()||(s=r.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,""),o=e(i),a=o.data("bs.collapse"),l=a?"toggle":r.data(),c=r.attr("data-parent"),d=c&&e(c);a&&a.transitioning||(d&&d.find('[data-toggle="collapse"][data-parent="'+c+'"]').not(r).addClass("collapsed"),r[o.hasClass("in")?"addClass":"removeClass"]("collapsed")),t.call(o,l)})}(jQuery),+function(e){"use strict";function t(t){t&&3===t.which||(e(r).remove(),e(i).each(function(){var s=n(e(this)),r={relatedTarget:this};s.hasClass("open")&&(s.trigger(t=e.Event("hide.bs.dropdown",r)),t.isDefaultPrevented()||s.removeClass("open").trigger("hidden.bs.dropdown",r))}))}function n(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var s=n&&e(n);return s&&s.length?s:t.parent()}function s(t){return this.each(function(){var n=e(this),s=n.data("bs.dropdown");s||n.data("bs.dropdown",s=new o(this)),"string"==typeof t&&s[t].call(n)})}var r=".dropdown-backdrop",i='[data-toggle="dropdown"]',o=function(t){e(t).on("click.bs.dropdown",this.toggle)};o.VERSION="3.2.0",o.prototype.toggle=function(s){var r=e(this);if(!r.is(".disabled, :disabled")){var i=n(r),o=i.hasClass("open");if(t(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",t);var a={relatedTarget:this};if(i.trigger(s=e.Event("show.bs.dropdown",a)),s.isDefaultPrevented())return;r.trigger("focus"),i.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},o.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var s=e(this);if(t.preventDefault(),t.stopPropagation(),!s.is(".disabled, :disabled")){var r=n(s),o=r.hasClass("open");if(!o||o&&27==t.keyCode)return 27==t.which&&r.find(i).trigger("focus"),s.trigger("click");var a=" li:not(.divider):visible a",l=r.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var c=l.index(l.filter(":focus"));38==t.keyCode&&c>0&&c--,40==t.keyCode&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}};var a=e.fn.dropdown;e.fn.dropdown=s,e.fn.dropdown.Constructor=o,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",i,o.prototype.toggle).on("keydown.bs.dropdown.data-api",i+', [role="menu"], [role="listbox"]',o.prototype.keydown)}(jQuery),+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,s=this;e(this).one("bsTransitionEnd",function(){n=!0});var r=function(){n||e(s).trigger(e.support.transition.end)};return setTimeout(r,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(this,function(e){"use strict";var t,n,s,r,i={},o=!!document.querySelector&&!!e.addEventListener,a={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},l=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(n,e[s],s,e);else for(var r=0,i=e.length;i>r;r++)t.call(n,e[r],r,e)},c=function(e,t){var n={};return l(e,function(t,s){n[s]=e[s]}),l(t,function(e,s){n[s]=t[s]}),n},d=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},u=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),s=n.length,r=-1,i="",o=n.charCodeAt(0);++r<s;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===o?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return i},p=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var s=0;if(e.offsetParent)do s+=e.offsetTop,e=e.offsetParent;while(e);return s=s-t-n,s>=0?s:0},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},g=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},m=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},b=function(e){return null===e?0:u(e)+e.offsetTop};i.animateScroll=function(t,n,i){var o=c(o||a,i||{}),l=g(t?t.getAttribute("data-options"):null);o=c(o,l),n="#"+f(n.substr(1));var d="#"===n?document.documentElement:document.querySelector(n),u=e.pageYOffset;s||(s=document.querySelector("[data-scroll-header]")),r||(r=b(s));var y,w,C,E=h(d,r,parseInt(o.offset,10)),j=E-u,k=v(),T=0;m(n,o.updateURL);var I=function(s,r,i){var a=e.pageYOffset;(s==r||a==r||e.innerHeight+a>=k)&&(clearInterval(i),d.focus(),o.callbackAfter(t,n))},_=function(){T+=16,w=T/parseInt(o.speed,10),w=w>1?1:w,C=u+j*p(o.easing,w),e.scrollTo(0,Math.floor(C)),I(C,E,y)},x=function(){o.callbackBefore(t,n),y=setInterval(_,16)};0===e.pageYOffset&&e.scrollTo(0,0),x()};var y=function(e){var n=d(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),i.animateScroll(n,n.hash,t))},w=function(){n||(n=setTimeout(function(){n=null,r=b(s)},66))};return i.destroy=function(){t&&(document.removeEventListener("click",y,!1),e.removeEventListener("resize",w,!1),t=null,n=null,s=null,r=null)},i.init=function(n){o&&(i.destroy(),t=c(a,n||{}),s=document.querySelector("[data-scroll-header]"),r=b(s),document.addEventListener("click",y,!1),s&&e.addEventListener("resize",w,!1))},i}),function(e,t){"object"==typeof exports?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e)}(this,function(e){function t(e){this._targetElement="undefined"!=typeof e.length?e:[e],"undefined"==typeof window._progressjsId&&(window._progressjsId=1),"undefined"==typeof window._progressjsIntervals&&(window._progressjsIntervals={}),this._options={theme:"blue",overlayMode:!1,considerTransition:!0}}function n(e,t){var n=this;t>=100&&(t=100),e.hasAttribute("data-progressjs")&&setTimeout(function(){"undefined"!=typeof n._onProgressCallback&&n._onProgressCallback.call(n,e,t);var r=s(e);r.style.width=parseInt(t)+"%";var r=r.querySelector(".progressjs-percent"),i=parseInt(r.innerHTML.replace("%","")),o=parseInt(t),a=function(e,t,n){var s=Math.abs(t-n);3>s?c=30:20>s?c=20:intervanIn=1,0!=t-n&&(e.innerHTML=(l?++t:--t)+"%",setTimeout(function(){a(e,t,n)},c))},l=!0;i>o&&(l=!1);var c=10;a(r,i,o)},50)}function s(e){return e=parseInt(e.getAttribute("data-progressjs")),document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="'+e+'"] > .progressjs-inner')}function r(e){for(var t=0,r=this._targetElement.length;r>t;t++){var i=this._targetElement[t];if(i.hasAttribute("data-progressjs")){var o=s(i);(o=parseInt(o.style.width.replace("%","")))&&n.call(this,i,o+(e||1))}}}function i(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]}var o=function(e){if("object"==typeof e)return new t(e);if("string"==typeof e){if(e=document.querySelectorAll(e))return new t(e);throw Error("There is no element with given selector.")}return new t(document.body)};return o.version="0.1.0",o.fn=t.prototype={clone:function(){return new t(this)},setOption:function(e,t){return this._options[e]=t,this},setOptions:function(e){var t,n=this._options,s={};for(t in n)s[t]=n[t];for(t in e)s[t]=e[t];return this._options=s,this},start:function(){if("undefined"!=typeof this._onBeforeStartCallback&&this._onBeforeStartCallback.call(this),!document.querySelector(".progressjs-container")){var e=document.createElement("div");e.className="progressjs-container",document.body.appendChild(e)}for(var e=0,t=this._targetElement.length;t>e;e++){var s=this._targetElement[e];if(!s.hasAttribute("data-progressjs")){var r,i,o,a=s;"body"===a.tagName.toLowerCase()?(r=a.clientWidth,i=a.clientHeight):(r=a.offsetWidth,i=a.offsetHeight);for(var l=o=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft,l+=a.offsetTop,a=a.offsetParent;a=l,s.setAttribute("data-progressjs",window._progressjsId),l=document.createElement("div"),l.className="progressjs-progress progressjs-theme-"+this._options.theme,l.style.position="body"===s.tagName.toLowerCase()?"fixed":"absolute",l.setAttribute("data-progressjs",window._progressjsId);var c=document.createElement("div");c.className="progressjs-inner";var d=document.createElement("div");d.className="progressjs-percent",d.innerHTML="1%",c.appendChild(d),this._options.overlayMode&&"body"===s.tagName.toLowerCase()?(l.style.left=0,l.style.right=0,l.style.top=0,l.style.bottom=0):(l.style.left=o+"px",l.style.top=a+"px",l.style.width=r+"px",this._options.overlayMode&&(l.style.height=i+"px")),l.appendChild(c),document.querySelector(".progressjs-container").appendChild(l),n(s,1),++window._progressjsId}}return this},set:function(e){for(var t=0,s=this._targetElement.length;s>t;t++)n.call(this,this._targetElement[t],e);return this},increase:function(e){return r.call(this,e),this},autoIncrease:function(e,t){var n=this,s=parseInt(this._targetElement[0].getAttribute("data-progressjs"));return"undefined"!=typeof window._progressjsIntervals[s]&&clearInterval(window._progressjsIntervals[s]),window._progressjsIntervals[s]=setInterval(function(){r.call(n,e)},t),this},end:function(){e:{"undefined"!=typeof this._onBeforeEndCallback&&(!0===this._options.considerTransition?s(this._targetElement[0]).addEventListener(i(),this._onBeforeEndCallback,!1):this._onBeforeEndCallback.call(this));for(var e=parseInt(this._targetElement[0].getAttribute("data-progressjs")),t=0,r=this._targetElement.length;r>t;t++){var o=this._targetElement[t],a=s(o);if(!a)break e;var l=1;100>parseInt(a.style.width.replace("%",""))&&(n.call(this,o,100),l=500),function(e,t){setTimeout(function(){e.parentNode.className+=" progressjs-end",setTimeout(function(){e.parentNode.parentNode.removeChild(e.parentNode),t.removeAttribute("data-progressjs")},1e3)},l)}(a,o)}if(window._progressjsIntervals[e])try{clearInterval(window._progressjsIntervals[e]),window._progressjsIntervals[e]=null,delete window._progressjsIntervals[e]}catch(c){}}return this},onbeforeend:function(e){if("function"!=typeof e)throw Error("Provided callback for onbeforeend was not a function");return this._onBeforeEndCallback=e,this},onbeforestart:function(e){if("function"!=typeof e)throw Error("Provided callback for onbeforestart was not a function");return this._onBeforeStartCallback=e,this},onprogress:function(e){if("function"!=typeof e)throw Error("Provided callback for onprogress was not a function");return this._onProgressCallback=e,this}},e.progressJs=o});var SITE_URL=aa_ajax_var.site_url,AJAXURL=aa_ajax_var.ajax_url,THEME_URI=aa_ajax_var.template_uri,IMG_DIR=THEME_URI+"/img/";jQuery(document).ready(function(e){var t={bouncingAbsolute:'<div id="loader-absolute"><div class="preview-area"><div class="spinner-jx"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',bouncingStatic:'<div id="loader-static"><div class="preview-area"><div class="spinner-jx"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',infiniteSpinner:'<div class="loader-backdrop"><div class="loader-infinite-spinner"><div class="lt"></div><div class="rt"></div><div class="lb"></div><div class="rb"></div></div></div>',svgLoader:'<img id="svg-loader-process" src="'+THEME_URI+'/svg/loader_svg.svg" width="40" alt="loadersvg"/>'};!function(){var n="Your message has been successfully sended",s="Fill Correct all required fields!",r="Fill Correct Captha",i="Something Wrong, try again later",o=function(e,t){return"<div class='alert alert-"+e+"'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h3 class='text-center'>"+t+"</h3></div>"},a=function(a){e("form.alice-ajax-contact-form").on("submit",function(){var l=e(this),c=l.attr("method"),d={action:a};return l.find("[name]").each(function(){d[e(this).attr("name")]=e(this).val()}),e.ajax({url:AJAXURL,type:c,data:d,error:function(){alert("Something wrong! Try again later.")},beforeSend:function(){e("body").prepend(t.infiniteSpinner),e("body .loader-backdrop").animate({opacity:1},500)},success:function(t){var a=e("body"),c=e(".ghostly-wrap");switch(t){case"success":a.find(".loader-backdrop").remove(),c.find(".alert").remove(),l.before(o("success",n)),l.find("[name]").each(function(){e(this).val("")});break;case"error":a.find(".loader-backdrop").remove(),c.find(".alert").remove(),l.before(o("danger",s));break;case"error captcha":a.find(".loader-backdrop").remove(),c.find(".alert").remove(),l.before(o("warning",r));break;default:a.find(".loader-backdrop").remove(),c.find(".alert").remove(),l.before(o("info",i))}},complete:function(){}}),!1})};a("aa_contact_form");var l=function(){var n=1,s=!0,r=e(window),i=e("#ajax-posts-loop");1===n&&progressJs().start();var o=function(){e.ajax({url:AJAXURL,type:"POST",data:{alice_ajax_posts:!0,pageNumber:n,action:"alice_ajax_posts"},dataType:"html",beforeSend:function(){1!==n&&i.append(t.bouncingStatic),1===n&&progressJs().set(50)},success:function(t){var r=e(t);r.length?(r.hide(),i.append(r),r.fadeIn(),e("#loader-static").remove(),s=!1):e("#loader-static").remove(),1===n&&progressJs().end()},error:function(t,n,s){e("#loader-static").remove(),alert(t+" :: "+n+" :: "+s)}})};r.on("scroll",function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&s===!1&&(s=!0,n++,o())}),o()};null!==document.getElementById("ajax-posts-loop")&&l()}()}),window.onload=function(){"use strict";var e=function(e,t){return e.className&&new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},t=function(){var e,t,n,s,r;return e=document.getElementsByClassName("wp-pagenavi")[0],void 0!==e?(r=function(){var r;for(s=e.childNodes.length,t=document.createElement("ul"),t.classList.add("pagination"),e.insertBefore(t,e.firstChild);s--;)r=e.childNodes[s],void 0!==r.tagName&&"UL"!==r.tagName&&(n=document.createElement("li"),n.appendChild(r),t.insertBefore(n,t.firstChild))},e.innerHtml=r()):void 0};t();var n=function(){var t=document.getElementById("alicelf-commentform");if(t){var n=t.elements.author,s=t.elements.email,r=t.elements.comment,i=document.getElementById("respond");t.onsubmit=function(o){var a,l,c,d=t.elements.length,u=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,f='<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4>Fill correct all required fields!</h4><p>Note: name cannot be blank, email must be a valid mail, comment field also must be filled</p>';if(""===n.value||""===s.value||-1===s.value.search(u)||""===r.value){for(o.preventDefault(),e(i.firstChild,"alert-danger")||i.insertAdjacentHTML("afterbegin",f);d--;)a=t.elements[d],l=a.type,c=!("text"!==l&&"textarea"!==l),c&&(""===a.value?(a.parentNode.classList.remove("has-success"),a.parentNode.classList.add("has-error")):""!==a.value&&"email"===a.name&&-1===a.value.search(u)?(a.parentNode.classList.remove("has-success"),a.parentNode.classList.add("has-error")):(a.parentNode.classList.remove("has-error"),a.parentNode.classList.add("has-success")));return alert("Fill Correct All required Fields!"),!1}}}};n();var s=function(){var e=document.getElementById("footer-angle-arrow");window.document.addEventListener("scroll",function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>300?e.classList.add("visible-arrow"):e.classList.remove("visible-arrow")})};if(s(),"object"==typeof smoothScroll){var r=document.querySelector("#footer-angle-arrow"),i={speed:700,easing:"easeOutQuart"};r.onclick=function(e){e.preventDefault(),smoothScroll.animateScroll(r,"#scroll-trigger-top",i)}}},jQuery(document).ready(function(e){var t=function(){e(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),e(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!0,focusOnSelect:!0})};"function"==typeof e.fn.slick&&t();var n=function(){e(window).on("scroll",function(){var t=document.documentElement.scrollTop||document.body.scrollTop,n=e(".stick-to-top").find(">.container > header"),s=e("#wpadminbar").height(),r=n.height();e(window).width()<600&&(s=0),e(window).on("resize",function(){e(window).width()<600&&(s=0),r=e(".stick-to-top").find(">.container > header").height()}),t>r?(n.css({position:"fixed",width:"100%",top:0+s+"px","z-index":"999"}),n.hasClass("header-touch-top")||(n.css({top:-r+"px",opacity:"0"}),n.animate({top:0+s+"px",opacity:1},500)),n.addClass("header-touch-top"),e("#shock-absorber").css({height:r+"px"})):(n.css({position:"static",width:"auto"}),n.removeClass("header-touch-top"),e("#shock-absorber").css({height:0}))})};n()});
//# sourceMappingURL=uglify.js.map
