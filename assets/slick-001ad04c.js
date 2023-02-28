(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();(()=>{const n=document.querySelector("[js-menu-container]"),r=document.querySelector("[js-open-menu]"),t=document.querySelectorAll("[js-close-menu]"),l=()=>{const e=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!e),n.classList.toggle("is-hidden");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};r.addEventListener("click",l),t.forEach(e=>e.addEventListener("click",l)),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();window.onscroll=function(){window.screen.width>=768?scrollY<=70?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll"):scrollY<=120?document.getElementById("header").classList.remove("header-scroll"):document.getElementById("header").classList.add("header-scroll")};(function(n){typeof n.matches!="function"&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(r){for(var t=this,l=(t.document||t.ownerDocument).querySelectorAll(r),e=0;l[e]&&l[e]!==t;)++e;return Boolean(l[e])}),typeof n.closest!="function"&&(n.closest=function(r){for(var t=this;t&&t.nodeType===1;){if(t.matches(r))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),r=document.querySelector(".js-backdrop-modal"),t=document.querySelectorAll(".js-modal-close"),l=document.querySelector("body");n.forEach(function(e){e.addEventListener("click",function(o){o.preventDefault(),document.body.classList.add("modal-open");var s=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+s+'"]');c.classList.add("active"),r.classList.add("active"),l.classList.add("no-scroll")})}),t.forEach(function(e){e.addEventListener("click",function(o){var s=this.closest(".modal");document.body.classList.remove("modal-open"),s.classList.remove("active"),r.classList.remove("active"),l.classList.remove("no-scroll")})}),document.body.addEventListener("keyup",function(e){var o=e.keyCode;o==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".js-backdrop-modal").classList.remove("active"),document.body.classList.remove("modal-open"))},!1),r.addEventListener("click",function(e){e.target===e.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"))})});document.addEventListener("DOMContentLoaded",function(){var n=function(t){var l=t.target,e=l.dataset.phoneClear,o=l.dataset.phonePattern,s="+38(0__) ___-__-__",c=o||s,i=0,d=c.replace(/\D/g,""),a=t.target.value.replace(/\D/g,"");if(e!=="false"&&t.type==="blur"&&a.length<c.match(/([\_\d])/g).length){t.target.value="";return}d.length>=a.length&&(a=d),t.target.value=c.replace(/./g,function(u){return/[_\d]/.test(u)&&i<a.length?a.charAt(i++):i>=a.length?"":u})},r=document.querySelectorAll("[data-phone-pattern]");for(let t of r)for(let l of["input","blur","focus"])t.addEventListener(l,n)});let m=1e3;document.getElementById("nights").addEventListener("change",n=>{document.getElementById("money").innerHTML=n.target.value*m});$(".room-page-hero-slider").slick({prevArrow:'<img class="room-page-slick-prev" src="../img/icons/angle-left.svg" alt="">',nextArrow:'<img class="room-page-slick-next" src="../img/icons/angle-right.svg" alt="">',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:2,variableWidth:!0});$(".restaurant-page-hero-slider").slick({prevArrow:'<img class="restaurant-page-slick-prev" src="../img/icons/angle-left.svg" alt="">',nextArrow:'<img class="restaurant-page-slick-next" src="../img/icons/angle-right.svg" alt="">',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!0,slidesToShow:2,variableWidth:!0});$(".full-menu").slick({prevArrow:'<img class="full-menu-slick-prev" src="../img/icons/menu-angle-left.svg" alt="">',nextArrow:'<img class="full-menu-slick-next" src="../img/icons/menu-angle-right.svg" alt="">',infinite:!0,speed:300,slidesToScroll:1,adaptiveHeight:!1,slidesToShow:1,variableWidth:!1,responsive:[{breakpoint:1440,settings:"unslick"},{breakpoint:1399,settings:{slidesToShow:1}}]});
