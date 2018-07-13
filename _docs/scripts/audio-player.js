(function(){"use strict";var a,e,t,i,r,o,l,n;for(n=".audio-player{overflow:hidden;background-color:#fff;color:#000;border:1px solid rgba(0,0,0,0.13);padding:8px;display:flex;flex-direction:row;align-items:center}.audio-player .audio-player__content{flex:1;padding:0.5rem 1rem;color:#727272;transition:color 0.2s cubic-bezier(0.4, 0, 0.2, 1);border-left:1px solid rgba(0,0,0,0.13)}.audio-player .audio-player__content:hover{color:#212121}.audio-player .audio-player__content .title{display:block}.audio-player .audio-player__content .song-data{display:block;font-size:0.75em}.audio-player .audio-player__content *{margin:0}.audio-player .audio-player__controls{order:-1;padding-right:8px;display:flex;flex-direction:row;align-items:center}.audio-player .audio-player__controls .audio-player__time-display{font-size:12px;width:auto;border-radius:4px;color:#424242;cursor:default}.audio-player .audio-player__controls .audio-player__time-display:active,.audio-player .audio-player__controls .audio-player__time-display:hover,.audio-player .audio-player__controls .audio-player__time-display:focus{color:#424242}.audio-player .audio-player__controls button{transition:color 0.2s cubic-bezier(0.4, 0, 0.2, 1),opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),background 0.2s cubic-bezier(0.4, 0, 0.2, 1);margin-right:8px;font-family:inherit;background:0;border:0;height:40px;width:40px;outline:0;border-radius:50%;cursor:pointer;color:#000;opacity:0.52}.audio-player .audio-player__controls button:hover,.audio-player .audio-player__controls button:focus{background-color:rgba(0,0,0,0.13)}.audio-player .audio-player__controls button:active{opacity:1}.audio-player .audio-player__controls button i.material-icons{position:relative;right:0px;top:2px}",e=document.createElement("style"),e.type="text/css",e.innerHTML=n,document.head.appendChild(e),t=function(a){var e,t,i,r;return e=~~(a/3600),t=~~(a%3600/60),r=~~(a%60),i="",e>0&&(i+=e+":"+(t<10?"0":"")),i+=t+":"+(r<10?"0":""),i+=r},a=function(a){var e,i,r,o;return a.appendChild(xyz.parseHTML('<div class="audio-player__controls"> <button aria-label="Play"> <i class="material-icons">play_arrow</i> </button> <button class="audio-player__time-display" aria-label="Timestamp not loaded.">0:00 / ?:??</button> </div>')),e=a.querySelector("audio"),i=a.querySelector("button"),r=a.querySelector(".audio-player__time-display"),a.removeAttribute("hidden"),o=function(){return r.setAttribute("aria-label",t(e.currentTime)+" out of "+t(e.duration)),r.textContent=t(e.currentTime)+" / "+t(e.duration)},a.dataset.playbackState="unstarted",i.addEventListener("click",function(){return e.paused?(e.play()["catch"](function(){}),i.setAttribute("aria-label","Playback not resumed. Click to play.")):e.pause()}),e.addEventListener("playing",function(){return"unstarted"===a.dataset.playbackState&&"undefined"!=typeof ga&&null!==ga&&ga("send","event","Media","Audio played"),a.dataset.playbackState="playing",i.setAttribute("aria-label","Playing. Click to Pause."),i.innerHTML='<i class="material-icons">pause</i>'}),e.addEventListener("pause",function(){return a.dataset.playbackState="pause",i.setAttribute("aria-label","Paused. Click to Play."),i.innerHTML='<i class="material-icons">play_arrow</i>'}),e.addEventListener("ended",function(){if(a.dataset.playbackState="end",i.setAttribute("aria-label","Playback ended. Click to restart."),"undefined"!=typeof ga&&null!==ga)return ga("send","event","Media","Audio played to end")}),e.addEventListener("waiting",function(){return a.dataset.playbackState="buffering",i.setAttribute("aria-label","Loading...")}),xyz.addEventListeners([e],["timeupdate","loadedmetadata","durationchange"],o)},l=document.querySelectorAll(".audio-player"),i=0,r=l.length;i<r;i++)o=l[i],a(o)}).call(this);