var SITE_URL=aa_ajax_var.site_url,AJAXURL=aa_ajax_var.ajax_url,THEME_URI=aa_ajax_var.template_uri,IMG_DIR=THEME_URI+"/img/",LOAD_LINE="#global-load-line",_COLORS={purple:"#684fb6",red:"#d9534f"},Loaders={bouncingAbsolute:'<div id="loader-absolute" class="labsolut"><div class="preview-area"><div class="spinner-jx"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',bouncingStatic:'<div id="loader-static"><div class="preview-area"><div class="spinner-jx"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',infiniteSpinner:'<div class="loader-backdrop"><div class="loader-infinite-spinner"><div class="lt"></div><div class="rt"></div><div class="lb"></div><div class="rb"></div></div></div>',svgLoader:'<img id="svg-loader-process" src="'+THEME_URI+'/svg/loader_svg.svg" width="40" alt="loadersvg"/>'};jQuery(document).ready(function(e){e.fn.waitUntilExists=function(a,t,n){var o="found",s=e(this.selector),i=s.not(function(){return e(this).data(o)}).each(a).data(o,!0);return n?t&&i.length&&window.clearInterval(window.waitUntilExists_Intervals[this.selector]):(window.waitUntilExists_Intervals=window.waitUntilExists_Intervals||{})[this.selector]=window.setInterval(function(){s.waitUntilExists(a,t,!0)},500),s};var a=function(e,a){return"<div class='alert alert-"+e+"'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h3 class='text-center'>"+a+"</h3></div>"},t=function(e,a){return e.className&&new RegExp("(\\s|^)"+a+"(\\s|$)").test(e.className)};e(".alert-backdrop").waitUntilExists(function(){var a=e(this);a.on("click",function(e){e.stopPropagation(),t(e.target,"alert-backdrop")&&(a.removeClass("show"),setTimeout(function(){a.remove()},300))})}),e('.modal-backdrop[itemscope="aa-modal"]').waitUntilExists(function(){var a=e(this);a.on("click",function(n){t(n.target,"modal-backdrop")&&(a.removeClass("show"),e(window).trigger("aaModalClosed"),setTimeout(function(){a.css({display:"none"})},400))})}),function(){var t="Your message has been successfully sended",n="Fill Correct all required fields!",o="Fill Correct Captha",s="Something Wrong, try again later",i=function(i){e("form.alice-ajax-contact-form").on("submit",function(){var r=e(this),l=r.attr("method"),d={action:i};return r.find("[name]").each(function(){d[e(this).attr("name")]=e(this).val()}),e.ajax({url:AJAXURL,type:l,data:d,error:function(){alert("Something wrong! Try again later.")},beforeSend:function(){e("body").prepend(Loaders.infiniteSpinner),e("body .loader-backdrop").animate({opacity:1},500)},success:function(i){var l=e("body"),d=e(".ghostly-wrap");switch(i){case"success":l.find(".loader-backdrop").remove(),d.find(".alert").remove(),r.before(a("success",t)),r.find("[name]").each(function(){e(this).val("")});break;case"error":l.find(".loader-backdrop").remove(),d.find(".alert").remove(),r.before(a("danger",n));break;case"error captcha":l.find(".loader-backdrop").remove(),d.find(".alert").remove(),r.before(a("warning",o));break;default:l.find(".loader-backdrop").remove(),d.find(".alert").remove(),r.before(a("info",s))}},complete:function(){}}),!1})};i("aa_contact_form");var r=function(){var a=1,t=!0,n=e(window),o=e("#ajax-posts-loop"),s=function(){e(LOAD_LINE).empty(),e(LOAD_LINE).fadeIn();var n=new ProgressBar.Line(LOAD_LINE,{color:_COLORS.purple});n.animate(.2),e.ajax({url:AJAXURL,type:"POST",data:{alice_ajax_posts:!0,pageNumber:a,action:"alice_ajax_posts"},dataType:"html",beforeSend:function(){1!==a&&o.append(Loaders.bouncingStatic),n.animate(.5)},success:function(a){var s=e(a);s.length?(s.hide(),o.append(s),s.fadeIn(),e("#loader-static").remove(),t=!1):e("#loader-static").remove(),n.animate(1),setTimeout(function(){e(LOAD_LINE).fadeOut()},500)},error:function(a,t,n){e("#loader-static").remove(),alert(a+" :: "+t+" :: "+n)}})};n.on("scroll",function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&t===!1&&(t=!0,a++,s())}),s()};null!==document.getElementById("ajax-posts-loop")&&r()}();var n=function(t,n){e(t).on("click",function(t){var o=(e(this),e(n)),s=o.find("[data-progress]").attr("id"),i=o.find("[name=login]"),r=o.find("[name=pass]"),l=e("#"+s);l.empty(),l.fadeIn();var d=new ProgressBar.Line("#"+s,{color:_COLORS.red});d.animate(.2),e.ajax({url:AJAXURL,type:"POST",data:{action:"ajx20161223091233",login:i.val(),pass:r.val()},beforeSend:function(){d.animate(.7)},success:function(e){if(o.find(".alert").remove(),e)switch(e){case"wrong-pass":o.prepend(a("warning","Wrong pass")),setTimeout(function(){o.find(".alert").fadeOut()},4e3);break;case"not-found":o.prepend(a("danger","User not found")),setTimeout(function(){o.find(".alert").fadeOut()},4e3);break;case"success":o.prepend(a("success","Success")),setTimeout(function(){location.reload()},1e3);break;default:console.log("unknown")}d.animate(1),setTimeout(function(){l.fadeOut()},500)},error:function(e,a,t){alert(e+" :: "+a+" :: "+t)}})})};n("#login-trigger","#aa-loginform-container");var o=function(t,n){e(t).on("click",function(t){var o=(e(this),e(n)),s=o.find("[data-progress]").attr("id"),i=e("#"+s),r=o.find("[name=first_name]"),l=o.find("[name=last_name]"),d=o.find("[name=email]"),c=o.find("[name=pass]"),u=o.find("[name=pass_confirm]");i.empty(),i.fadeIn();var m=new ProgressBar.Line("#"+s,{color:_COLORS.red});m.animate(.2),e.ajax({url:AJAXURL,type:"POST",data:{action:"ajx20161023111004",first_name:r.val(),last_name:l.val(),email:d.val(),pass:c.val(),pass_confirm:u.val()},beforeSend:function(){m.animate(.7)},success:function(e){if(o.find(".alert").remove(),e)switch(console.log(e),e){case"user-exists":o.prepend(a("danger","User already exists")),setTimeout(function(){o.find(".alert").fadeOut()},4e3);break;case"password-missmatch":o.prepend(a("warning","Password Mismatch or empty")),setTimeout(function(){o.find(".alert").fadeOut()},4e3);break;case"email-error":o.prepend(a("warning","Not valid email")),setTimeout(function(){o.find(".alert").fadeOut()},4e3);break;case"success":o.prepend(a("success","Check your email"));break;default:console.log("unknown")}m.animate(1),setTimeout(function(){i.fadeOut()},500)},error:function(e,a,t){alert(e+" :: "+a+" :: "+t)}})})};o("#register-trigger","#aa-register-container"),e("[data-trig]").on("click",function(a){a.preventDefault();var t=(e(this),wp.media({title:"Add your title here",frame:"post",multiple:!0,library:{type:"image"},button:{text:"Add Image"}}));t.open()})});var _BODY=document.body,_HTML=document.documentElement,_DOCUMENT_HEIGHT=Math.max(_BODY.scrollHeight,_BODY.offsetHeight,_HTML.clientHeight,_HTML.scrollHeight,_HTML.offsetHeight),_TOP_OFFSET=document.documentElement.scrollTop||document.body.scrollTop,_LEFT_OFFSET=document.documentElement.scrollLeft||document.body.scrollLeft;window.onload=function(){"use strict";var e=function(e,a){return e.className&&new RegExp("(\\s|^)"+a+"(\\s|$)").test(e.className)},a=function(){var e,a,t,n,o;if(e=document.getElementsByClassName("wp-pagenavi"),void 0!==e){o=function(e){if(void 0!==e.childNodes){var o;for(n=e.childNodes.length,a=document.createElement("ul"),a.classList.add("pagination"),e.insertBefore(a,e.firstChild);n--;)o=e.childNodes[n],void 0!==o.tagName&&"UL"!==o.tagName&&(t=document.createElement("li"),t.appendChild(o),a.insertBefore(t,a.firstChild))}};for(var s=0;s<e.length;s++){var i=e[s];i.innerHtml=o(i)}}};a();var t=function(){var a=document.getElementById("alicelf-commentform");if(a){var t=a.elements.author,n=a.elements.email,o=a.elements.comment,s=document.getElementById("respond");a.onsubmit=function(i){var r,l,d,c=a.elements.length,u=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,m='<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4>Fill correct all required fields!</h4><p>Note: name cannot be blank, email must be a valid mail, comment field also must be filled</p>';if(""===t.value||""===n.value||-1===n.value.search(u)||""===o.value){for(i.preventDefault(),e(s.firstChild,"alert-danger")||s.insertAdjacentHTML("afterbegin",m);c--;)r=a.elements[c],l=r.type,d=!("text"!==l&&"textarea"!==l),d&&(""===r.value?(r.parentNode.classList.remove("has-success"),r.parentNode.classList.add("has-error")):""!==r.value&&"email"===r.name&&-1===r.value.search(u)?(r.parentNode.classList.remove("has-success"),r.parentNode.classList.add("has-error")):(r.parentNode.classList.remove("has-error"),r.parentNode.classList.add("has-success")));return alert("Fill Correct All required Fields!"),!1}}}};t();var n=function(){var e=document.getElementById("footer-angle-arrow");window.document.addEventListener("scroll",function(){var a=document.documentElement.scrollTop||document.body.scrollTop;a>300?e.classList.add("visible-arrow"):e.classList.remove("visible-arrow")})};if(n(),"object"==typeof smoothScroll){var o=document.querySelector("#footer-angle-arrow"),s={speed:700,easing:"easeOutQuart"};o.onclick=function(e){e.preventDefault(),smoothScroll.animateScroll(o,"#scroll-trigger-top",s)}}},jQuery(document).ready(function(e){e(window).on("scroll",function(){var a=document.documentElement.scrollTop||document.body.scrollTop,t=e("header.site-header"),n=t.height();a>n?t.addClass("header-with-bg"):t.removeClass("header-with-bg")});var a=function(){e(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),e(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!0,focusOnSelect:!0})};"function"==typeof e.fn.slick&&a(),transformicons.add(".tcon"),function(){var a=function(a,t){a.hasClass("tcon-transform")?(e("body").addClass("disable-scroll"),t.css("display","block"),setTimeout(function(){t.addClass("open-menu")},10)):(e("body").removeClass("disable-scroll"),t.removeClass("open-menu"),setTimeout(function(){t.css("display","none")},300))},t=e("#mobile-menu-trigger").find("> button"),n=e("#main-alicelf-nav");a(t,n),t.on("click",function(){a(e(this),n)}),n.find(".caret").on("click",function(a){a.stopPropagation(),a.preventDefault();var t=e(this),n=t.parent();t.toggleClass("fa-minus"),n.siblings(".sub-menu").toggleClass("shown-submenu")}),n.on("click",function(a){a.stopPropagation(),e(a.target).hasClass("main-navigation")&&(n.removeClass("open-menu"),e("body").removeClass("disable-scroll"),setTimeout(function(){n.css("display","none")},300),t.removeClass("tcon-transform"))})}(),e("[data-modal-trigger]").on("click",function(a){a.preventDefault();var t=e(this),n=t.attr("data-modal-trigger"),o=e("body"),s=t.attr("data-related-modal");o.find(s).css({display:"block"}),setTimeout(function(){o.find(s).addClass("show")},10),e(s).trigger("aaModalOpened",[n,s])});var t=e("[data-destroy-modal]");t.on("click",function(a){a.preventDefault();var t=e(this),n=e(t.attr("data-destroy-modal"));n.removeClass("show"),setTimeout(function(){n.css("display","none"),e(window).trigger("aaModalClosed")},300)}),e(window).on("aaModalOpened",function(a){e(_BODY).addClass("aa-modal-overlay")}),e(window).on("aaModalClosed",function(a){e(_BODY).removeClass("aa-modal-overlay")})});
//# sourceMappingURL=uglify.js.map
