var tablet=767<=window.innerWidth,laptop=1140<=window.innerWidth,desktop=1440<=window.innerWidth,_hd=1700<=window.innerWidth,_2k=2e3<=window.innerWidth,wow=new WOW({mobile:!0,offset:50});wow.init(),$(document).ready(function(){var e=$(".is-header"),a=$("body"),i=$("#navBtn"),o=($(".is-main"),$("#footer")),s=$("#splashVideo"),n=$("#splashVideo video").get(0);$("#splashVideo video").hide(),laptop&&$(n).show(),$(".is-logo").click(function(e){localStorage.removeItem("video_showed"),window.location.href="/"}),setTimeout(function(){function e(){o.addEventListener("transitionend",t),o.classList.add("is-hidden"),document.querySelector("body").classList.remove("overflow-hidden")}var i,o=document.getElementById("preloading"),t=function(){o.style.display="none",o.removeEventListener("transitionend",t)};laptop&&"true"!==localStorage.getItem("video_showed")?s.length&&(s.show(),a.addClass("video-is-playing"),a.addClass("overflow-hidden"),i=setInterval(function(){3<=n.readyState&&(e(),n.play(),localStorage.setItem("video_showed","true"),clearInterval(i))},5),n.addEventListener("ended",function(){jQuery("#splashVideo").fadeOut(),a.removeClass("overflow-hidden"),a.removeClass("video-is-playing")})):e()},1500);e=$(".is-header"),a=$("body"),i=$("#navBtn"),$(".is-main"),o=$("#footer");function t(){e.removeClass("is-active"),a.removeClass("is-nav-opened"),clearTimeout(void 0);setTimeout(function(){e.removeClass("is-closing")},1500)}20<$(document).scrollTop()&&e.addClass("is-scrolled"),$(window).scroll(function(){20<$(document).scrollTop()?e.addClass("is-scrolled"):e.removeClass("is-scrolled")}),i.click(function(){e.hasClass("is-closing")&&!e.hasClass("is-active")||(e.hasClass("is-active")?t():(e.addClass("is-active"),e.addClass("is-closing"),a.addClass("is-nav-opened"),a.addClass("nav-anim-running"),clearTimeout(void 0),setTimeout(function(){a.removeClass("nav-anim-running")},1500)))}),$('[href="#footer"]').click(function(){t()});var r=$(".with-video-bg "),c=r.find("video");[].forEach.call(r,function(e,i){e.addEventListener("mouseover",function(e,i){0<!c[e].currentTime&&c[e].play()}.bind(e,i),!1),e.addEventListener("mouseout",function(e,i){c[e].pause(),c[e].currentTime=0}.bind(e,i),!1)});$(".is-catalog__project");var d,l,m=$(".is-block__expanded-description"),v=$(".is-block__expanded-toggler");$(".is-block__expanded-description > *").length<=1?v.hide():(d=$(".is-block__expanded-description p:nth-child(1)").outerHeight(),m.css("maxHeight",d),l=0,m.children().each(function(){l+=$(this).outerHeight(!0)}),v.click(function(){m.hasClass("is-expanded")?m.css("maxHeight",d):m.css("maxHeight",l),m.toggleClass("is-expanded")}));var h=$(".is-credit"),u=$(".is-credit__toggler"),p=$(".is-credit__wrapper"),g=$(".is-credit__content");u.click(function(){h.hasClass("is-expanded")?g.css("maxHeight",0):g.css("maxHeight",p.outerHeight()),h.toggleClass("is-expanded")});var f=$(".is-block__video"),_=$(".is-block__video iframe");f.click(function(){$(this).addClass("is-active"),a.addClass("overflow-hidden"),console.log("1",$(this).find("iframe").attr("src"));var e=$(this).find("iframe").attr("src")+"&autoplay=1";$(this).find("iframe").attr("src",e)});var w=$(".is-block__video-overlay"),C=$(".close-modal-btn");function T(e){e.stopPropagation(),f.removeClass("is-active"),a.removeClass("overflow-hidden"),_.each(function(){var e=$(this).attr("src");$(this).attr("src",e.replace("&autoplay=1",""))})}w.click(function(e){T(e)}),C.click(function(e){T(e)});var b=$(".is-slider");b.length&&b.slick({infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:4e3,prevArrow:$(".slider-prev"),nextArrow:$(".slider-next"),cssEase:"cubic-bezier(0.9, 0.06, 0.68, 0.99)"});for(var k=[$(".is-homepage"),$(".is-director__page"),$(".is-creative__page"),$(".is-post__page")],y=0;y<k.length;y++)k[y].length&&e.addClass("header-transparent");for(var x=[$(".is-about__page"),$(".is-post__page"),$(".is-project__page")],L=$(".is-logo__name"),y=0;y<x.length;y++)x[y].length&&(L.hide(),e.addClass("with-white-logo"));var E=$("#mainPage"),H=$("#creativeLink"),W=$("#directorLink"),B=$("#homepageLinkFromCreative"),S=$("#homepageLinkFromDirector"),I=$("#creativeLinkBottom"),D=$("#directorLinkBottom"),F=$("#homepageLinkFromCreativeBottom"),V=$("#homepageLinkFromDirectorBottom");function j(e,i){laptop&&e.hover(function(){E.addClass("main-hovered "+i)},function(){E.removeClass("main-hovered"),E.removeClass(i)})}j(W,"dir-hovered"),j(H,"creative-hovered"),j(B,"dir-hovered"),j(S,"creative-hovered");L=$(".is-logo__name");function A(){return laptop?750:1e3}function M(){E.addClass("is-creative__page"),E.removeClass("is-homepage-from-creative"),L.addClass("without-opacity"),E.addClass("is-animating"),o.addClass("is-footer__white"),wow.init(),clearTimeout(void 0);setTimeout(function(){$(".is-homepage__content").hide(),$(".is-creative__content").show(),$(".is-director__content").hide()},A());clearTimeout(void 0);setTimeout(function(){E.removeClass("is-animating")},1600)}function O(){E.addClass("is-director__page"),E.removeClass("is-homepage-from-creative"),L.addClass("without-opacity"),E.addClass("is-animating"),o.addClass("is-footer__black"),a.addClass("dark-bg"),wow.init(),clearTimeout(void 0);setTimeout(function(){$(".is-homepage__content").hide(),$(".is-creative__content").hide(),$(".is-director__content").show()},A());clearTimeout(void 0);setTimeout(function(){E.removeClass("is-animating")},1600)}function q(){E.removeClass("is-creative__page"),E.addClass("is-homepage-from-creative"),E.addClass("is-animating"),o.removeClass("is-footer__white"),L.removeClass("without-opacity"),wow.init(),clearTimeout(void 0);setTimeout(function(){$(".is-homepage__content").show(),$(".is-creative__content").hide(),$(".is-director__content").hide()},A());clearTimeout(void 0);setTimeout(function(){E.removeClass("is-animating")},1600);clearTimeout(void 0);setTimeout(function(){E.removeClass("is-homepage-from-creative")},2e3)}function P(){E.removeClass("is-director__page"),E.addClass("is-homepage-from-director"),E.addClass("is-animating"),o.removeClass("is-footer__black"),L.removeClass("without-opacity"),a.removeClass("dark-bg"),wow.init(),clearTimeout(void 0);setTimeout(function(){$(".is-homepage__content").show(),$(".is-creative__content").hide(),$(".is-director__content").hide()},A());clearTimeout(void 0);setTimeout(function(){E.removeClass("is-animating")},1600);clearTimeout(void 0);setTimeout(function(){E.removeClass("is-homepage-from-director")},2e3)}laptop&&$(window).scroll(function(){$(document).scrollTop()>$(window).height()/2?$(".is-mainpage__content").addClass("unblocked"):$(".is-mainpage__content").removeClass("unblocked")}),$(".is-creative__content").hide(),$(".is-director__content").hide(),$(".is-homepage__content").hide(),E.length&&E.not(".is-director__page.is-creative__page")&&$(".is-homepage__content").show(),E.length&&(o.addClass("is-translated"),H.click(function(){M()}),I.click(function(){laptop?(a.addClass("bottom-nav-is-animating"),a.addClass("from-bottom-creative"),clearTimeout(void 0),setTimeout(function(){$(window).scrollTop(0),M(),a.removeClass("bottom-nav-is-animating")},700),clearTimeout(void 0),setTimeout(function(){a.removeClass("from-bottom-creative")},2e3)):($("html, body").animate({scrollTop:0},500),M())}),W.click(function(){O()}),D.click(function(){laptop?(a.addClass("bottom-nav-is-animating"),a.addClass("from-bottom-director"),clearTimeout(void 0),setTimeout(function(){$(window).scrollTop(0),O(),a.removeClass("bottom-nav-is-animating")},700),clearTimeout(void 0),setTimeout(function(){a.removeClass("from-bottom-director")},2e3)):($("html, body").animate({scrollTop:0},500),O())}),B.click(function(){q()}),F.click(function(){laptop?(a.addClass("bottom-nav-is-animating"),a.addClass("from-bottom-creative-to-homepage"),clearTimeout(void 0),setTimeout(function(){$(window).scrollTop(0),q(),a.removeClass("bottom-nav-is-animating")},650),clearTimeout(void 0),setTimeout(function(){a.removeClass("from-bottom-creative-to-homepage")},2e3)):($("html, body").animate({scrollTop:0},500),q())}),S.click(function(){P()}),V.click(function(){laptop?(a.addClass("bottom-nav-is-animating"),a.addClass("from-bottom-director-to-homepage"),clearTimeout(void 0),setTimeout(function(){$(window).scrollTop(0),P(),a.removeClass("bottom-nav-is-animating")},800),clearTimeout(void 0),setTimeout(function(){a.removeClass("from-bottom-director-to-homepage")},2e3)):($("html, body").animate({scrollTop:0},500),P())}),laptop||(H.touchwipe({wipeRight:function(){$(".is-creative__page").length||($(".is-director__page").length?P:M)()},wipeLeft:function(){$(".is-creative__page").length&&q()},min_move_x:20,min_move_y:20,preventDefaultEvents:!0}),W.touchwipe({wipeLeft:function(){$(".is-director__page").length||($(".is-creative__page").length?q:O)()},wipeRight:function(){$(".is-director__page").length&&P()},min_move_x:20,min_move_y:20,preventDefaultEvents:!0}))),$(window).scrollTop()+$(window).height()/2>$(document).height()&&$(".is-navigation").addClass("contact-is-active"),$(window).scroll(function(){$(window).scrollTop()+$(window).height()/2>$(document).height()-$(window).height()?$(".is-navigation").addClass("contact-is-active"):$(".is-navigation").removeClass("contact-is-active")})}),$(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),1140<window.innerWidth?$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},1500):$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},10)});var isMac=0<=navigator.platform.toUpperCase().indexOf("MAC");isMac||document.querySelector("html").classList.add("custom-scroll");