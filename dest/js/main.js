var tablet=767<=window.innerWidth,laptop=1140<=window.innerWidth,desktop=1440<=window.innerWidth,_hd=1700<=window.innerWidth,_2k=2e3<=window.innerWidth,wow=new WOW({mobile:!1,offset:50});wow.init(),$(document).ready(function(){Barba.Pjax.start(),Barba.BaseView.extend({namespace:"homepage",onEnter:function(){n(),$(window).scrollTop(0)}}).init(),Barba.BaseView.extend({namespace:"catalog",onEnter:function(){n(),$(window).scrollTop(0)}}).init(),Barba.BaseView.extend({namespace:"about",onEnter:function(){n(),$(window).scrollTop(0)}}).init(),Barba.BaseView.extend({namespace:"creativeish",onEnter:function(){n(),$(window).scrollTop(0)}}).init(),Barba.BaseView.extend({namespace:"post",onEnter:function(){$("body").removeClass("is-darken")},onLeave:function(){$("body").addClass("is-darken")}}).init(),Barba.BaseView.extend({namespace:"project",onEnter:function(){$(window).scrollTop(0)},onLeave:function(){$("body").addClass("is-darken")}}).init();var i=$(".is-header"),o=$("body"),e=$("#navBtn"),t=$(".is-main"),a=$("#footer");laptop||($(".fadeInUp").removeClass("fadeInUp"),$(".wow").removeClass("wow")),setTimeout(function(){$("body").addClass("is-loaded")},100);function n(){i.removeClass("is-active"),o.removeClass("is-nav-opened"),clearTimeout(e);var e=setTimeout(function(){i.removeClass("is-closing")},1500)}($(".is-project__page").length||$(".is-post__page").length)&&$(window).scroll(function(){$(document).scrollTop()>$("main").height()?i.addClass("is-scrolled"):i.removeClass("is-scrolled")}),e.click(function(){var e;i.hasClass("is-closing")&&!i.hasClass("is-active")||(i.hasClass("is-active")?n():(i.addClass("is-active"),i.addClass("is-closing"),o.addClass("is-nav-opened"),o.addClass("nav-anim-running"),clearTimeout(e),e=setTimeout(function(){o.removeClass("nav-anim-running")},1500)))}),$(".navigation-link__footer").click(function(){n()});var s=$(".with-video-bg "),r=s.find("video");[].forEach.call(s,function(e,i){e.addEventListener("mouseover",function(e,i){0<!r[e].currentTime&&r[e].play()}.bind(e,i),!1),e.addEventListener("mouseout",function(e,i){r[e].pause(),r[e].currentTime=0}.bind(e,i),!1)});$(".is-catalog__project");var c,d,l=$(".is-block__expanded-description"),m=$(".is-block__expanded-toggler");$(".is-block__expanded-description > *").length<=1?m.hide():(c=$(".is-block__expanded-description p:nth-child(1)").outerHeight(),l.css("maxHeight",c),d=0,l.children().each(function(){d+=$(this).outerHeight(!0)}),m.click(function(){l.hasClass("is-expanded")?l.css("maxHeight",c):l.css("maxHeight",d),l.toggleClass("is-expanded")}));var h=$(".is-credit");$(".is-credit__toggler").click(function(){h.toggleClass("is-expanded")});var v=$(".is-block__video"),p=$(".is-block__video iframe");v.click(function(){$(this).addClass("is-active"),$(body).addClass("overflow-hidden")});var u=$(".is-block__video-overlay"),_=$(".close-modal-btn");function g(e){e.stopPropagation(),v.removeClass("is-active"),$(body).removeClass("overflow-hidden"),p.each(function(){var e=$(this).attr("src");$(this).attr("src",e)})}u.click(function(e){g(e)}),_.click(function(e){g(e)});var f=$(".is-slider");f.length&&f.slick({infinite:!0,speed:1200,autoplay:!0,autoplaySpeed:4e3,prevArrow:$(".slider-prev"),nextArrow:$(".slider-next"),cssEase:"ease-in"}),$(".is-copyright span").text((new Date).getFullYear());for(var w=[$(".is-homepage"),$(".is-director__page"),$(".is-creative__page"),$(".is-post__page")],C=0;C<w.length;C++)w[C].length&&i.addClass("header-transparent");for(var k=[$(".is-about__page"),$(".is-post__page"),$(".is-project__page")],T=$(".is-logo__icon"),b=$(".is-logo__name"),C=0;C<k.length;C++)k[C].length&&(b.addClass("is-hidden"),T.addClass("is-white"));var y=$("#mainPage"),x=$("#creativeLink"),B=$("#directorLink"),L=$("#homepageLinkFromCreative"),E=$("#homepageLinkFromDirector");$("#creativeLinkBottom"),$("#directorLinkBottom"),$("homepageLinkFromCreativeBottom"),$("homepageLinkFromDirectorBottom");function W(e,i){laptop&&e.hover(function(){y.addClass("main-hovered "+i)},function(){y.removeClass("main-hovered"),y.removeClass(i)})}W(B,"dir-hovered"),W(x,"creative-hovered"),W(L,"dir-hovered"),W(E,"creative-hovered");b=$(".is-logo__name");function V(){return laptop?750:1e3}function j(){y.addClass("is-creative__page"),y.removeClass("is-homepage-from-creative"),b.addClass("without-opacity"),y.addClass("is-animating"),a.addClass("is-footer__white"),wow.init(),clearTimeout(e);var e=setTimeout(function(){$(".is-homepage__content").hide(),$(".is-creative__content").show(),$(".is-director__content").hide()},V());clearTimeout(i);var i=setTimeout(function(){y.removeClass("is-animating")},1600)}function D(){y.addClass("is-director__page"),y.removeClass("is-homepage-from-creative"),b.addClass("without-opacity"),y.addClass("is-animating"),a.addClass("is-footer__black"),wow.init(),clearTimeout(e);var e=setTimeout(function(){$(".is-homepage__content").hide(),$(".is-creative__content").hide(),$(".is-director__content").show()},V());clearTimeout(i);var i=setTimeout(function(){y.removeClass("is-animating")},1600)}function F(){y.removeClass("is-creative__page"),y.addClass("is-homepage-from-creative"),y.addClass("is-animating"),a.removeClass("is-footer__white"),b.removeClass("without-opacity"),wow.init(),clearTimeout(e);var e=setTimeout(function(){$(".is-homepage__content").show(),$(".is-creative__content").hide(),$(".is-director__content").hide()},V());clearTimeout(i);var i=setTimeout(function(){y.removeClass("is-animating")},1600);clearTimeout(o);var o=setTimeout(function(){y.removeClass("is-homepage-from-creative")},2e3)}function H(){y.removeClass("is-director__page"),y.addClass("is-homepage-from-director"),y.addClass("is-animating"),a.removeClass("is-footer__black"),b.removeClass("without-opacity"),wow.init(),clearTimeout(e);var e=setTimeout(function(){$(".is-homepage__content").show(),$(".is-creative__content").hide(),$(".is-director__content").hide()},V());clearTimeout(i);var i=setTimeout(function(){y.removeClass("is-animating")},1600);clearTimeout(o);var o=setTimeout(function(){y.removeClass("is-homepage-from-director")},2e3)}laptop&&$(window).scroll(function(){$(document).scrollTop()>$(window).height()/2?$(".is-mainpage__content").addClass("unblocked"):$(".is-mainpage__content").removeClass("unblocked")}),$(".is-creative__content").hide(),$(".is-director__content").hide(),$(".is-homepage__content").hide(),y.length&&y.not(".is-director__page.is-creative__page")&&$(".is-homepage__content").show(),y.length&&(a.addClass("is-translated"),x.click(function(){j()}),B.click(function(){D()}),L.click(function(){F()}),E.click(function(){H()}),laptop||t.touchwipe({wipeRight:function(){$(".is-creative__page").length||($(".is-director__page").length?H:j)()},wipeLeft:function(){$(".is-director__page").length||($(".is-creative__page").length?F:D)()},min_move_x:20,min_move_y:20,preventDefaultEvents:!0})),$(window).scrollTop()+$(window).height()/2>$(document).height()&&$(".is-navigation").addClass("contact-is-active"),$(window).scroll(function(){$(window).scrollTop()+$(window).height()/2>$(document).height()-$(window).height()?$(".is-navigation").addClass("contact-is-active"):$(".is-navigation").removeClass("contact-is-active")})}),$(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),1140<window.innerWidth?$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},1500):$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},10)});var timer,body=document.body,isMac=0<=navigator.platform.toUpperCase().indexOf("MAC");isMac||document.querySelector("html").classList.add("custom-scroll");