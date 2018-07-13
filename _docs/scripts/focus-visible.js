/**
 * focus-visible
 * https://github.com/WICG/focus-visible
 * Licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document)
*/
function init(){function e(e){return!(!e||e===document||"HTML"===e.nodeName||"BODY"===e.nodeName)}function t(e){var t=e.type,n=e.tagName;return!("INPUT"!=n||!E[t]||e.readonly)||("TEXTAREA"==n&&!e.readonly||("IFRAME"==n||"true"==e.contentEditable))}function n(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function o(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function d(){e(document.activeElement)&&n(document.activeElement),v=!0}function i(){v=!1}function u(o){e(o.target)&&(v||t(o.target))&&(n(o.target),v=!1)}function a(t){e(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(L=!0,window.clearTimeout(l),l=window.setTimeout(function(){L=!1,window.clearTimeout(l)},100),o(t.target))}function s(){"hidden"==document.visibilityState&&(L&&(v=!0),c())}function c(){document.addEventListener("mousemove",m),document.addEventListener("mousedown",m),document.addEventListener("mouseup",m),document.addEventListener("pointermove",m),document.addEventListener("pointerdown",m),document.addEventListener("pointerup",m),document.addEventListener("touchmove",m),document.addEventListener("touchstart",m),document.addEventListener("touchend",m)}function r(){document.removeEventListener("mousemove",m),document.removeEventListener("mousedown",m),document.removeEventListener("mouseup",m),document.removeEventListener("pointermove",m),document.removeEventListener("pointerdown",m),document.removeEventListener("pointerup",m),document.removeEventListener("touchmove",m),document.removeEventListener("touchstart",m),document.removeEventListener("touchend",m)}function m(e){"html"!==e.target.nodeName.toLowerCase()&&(v=!1,r())}var v=!0,L=!1,l=null,E={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};document.addEventListener("keydown",d,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerdown",i,!0),document.addEventListener("touchstart",i,!0),document.addEventListener("focus",u,!0),document.addEventListener("blur",a,!0),document.addEventListener("visibilitychange",s,!0),c(),document.body.classList.add("js-focus-visible")}function onDOMReady(e){function t(){n||(n=!0,e())}var n;["interactive","complete"].indexOf(document.readyState)>=0?e():(n=!1,document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1))}"undefined"!=typeof document&&onDOMReady(init);