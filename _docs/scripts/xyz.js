(function(){this.xyz={},xyz.addEventListeners=function(e,t,n){var o,r,a,i,d,s,u,c;if(Array.isArray(t))for(r=0,d=e.length;r<d;r++)for(c=e[r],a=0,s=t.length;a<s;a++)o=t[a],c.addEventListener(o,n);for(i=0,u=e.length;i<u;i++)c=e[i],c.addEventListener(t,n);return e},xyz.download=function(e,t,n,o){var r;null==n&&(n=""),null==o&&(o="base64"),(r=function(e,t){var n;n=document.createElement("a"),n.setAttribute("download",e),n.setAttribute("style","display:none"),n.setAttribute("href",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)})(e,["data:"+n+";",("base64"===o?"base64":"charset="+o)+",",""+encodeURIComponent(t)].join(""))},xyz.downloadBlob=function(e,t,n){var o,r;o=function(t,n){var o;o=new FileReader,o.onload=function(t){return xyz.download(e,t.target.result.replace(/^data:\S*?;\S*?,/g,""),n)},o.readAsDataURL(t)},"string"==typeof t?(r=new XMLHttpRequest,r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){var e;if(200<=(e=this.status)&&e<400)return console.log(this.response),o(new Blob([this.response],{type:n}),n);throw new Error("An error occurred while fetching blob URL.")},r.send()):o(t,t.type)},xyz.escapeHTML=function(e){var t;if("string"!=typeof e)throw new Error("Expected first argument `string` to be of type string.");return t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},String(e).replace(/[&<>"'`=\/]/g,function(e){return t[e]})},xyz.hashUpdate=function(e){window.addEventListener("hashchange",function(){return e(location.hash)}),e(location.hash)},xyz.parseHTML=function(e){var t;return t=document.implementation.createHTMLDocument(),t.body.innerHTML=e,1===t.body.childNodes.length?t.body.firstChild:t.body.childNodes},xyz.randomInt=function(e,t){return 1===arguments.length&&(t=e,e=0),Math.floor(Math.random()*(~~t-~~e+1))+~~e},xyz.ready=function(e){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)},xyz.wait=function(e){if(!isFinite(e)||Math.abs(e)!==e)throw new Error("Expected first argument `ms` to be a positive finite value.");return new Promise(function(t){return window.setTimeout(function(){t()},e)})}}).call(this);