(function(){"use strict";xyz.randomInt=function(e,t){return 1===arguments.length&&(t=e,e=0),Math.floor(Math.random()*(~~t-~~e+1))+~~e},xyz.parseHTML=function(e){var t;return t=document.implementation.createHTMLDocument(),t.body.innerHTML=e,1===t.body.childNodes.length?t.body.firstChild:t.body.childNodes},xyz.escapeHTML=function(e){var t;if("string"!=typeof e)throw new Error("Expected first argument `string` to be of type string.");return t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},String(e).replace(/[&<>"'`=\/]/g,function(e){return t[e]})},xyz.wait=function(e){if(!isFinite(e)||Math.abs(e)!==e)throw new Error("Expected first argument `ms` to be a positive finite value.");return new Promise(function(t){return window.setTimeout(function(){t()},e)})},xyz.addEventListeners=function(e,t,o){var n,a,s,i,r,l,u,d;if(Array.isArray(t))for(a=0,r=e.length;a<r;a++)for(d=e[a],s=0,l=t.length;s<l;s++)n=t[s],d.addEventListener(n,o);for(i=0,u=e.length;i<u;i++)d=e[i],d.addEventListener(t,o);return e},xyz.blobs={allBlobs:["hello world","smh my head","Kek","Bobby-kun!","\u201cDon\u2019t quote me on this.\u201d &mdash;&nbsp;Benji","Benji, the skinny legend.","Minerva.","w00t","It\u2019s a running joke.","Superb owl","r/animemes","\ud83d\ude09\ud83d\ude18\ud83d\ude43\ud83d\udc4c\ud83e\udd14\ud83d\ude02\u270c\ufe0f","Shoutouts to Alex.","Copyright &copy; 2017\u20132018 MindfulMinun All Rights Reserved.","\u201cNo, I\u2019ll pay.\u201d <em>*leaves crappy tip*</em>","Game over.","\u201cYou never know, y\u2019know?\u201d","\u201cY\u2019know, you never know.\u201d","&gt; Be me.","\u201cHola hola crayola\u201d","Red cup.","\u201cTaylor ISD Trustees agree to split THS, Legacy\u201d","<blockquote>There will be bad things that will happen in life. We cannot always avoid those. But what we can do is we can stand up.</blockquote>","hugs &gt; drugs","\uff5c\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uff5c<br>\n\uff5c\u3000\u3000\u3042\u3093\u305f\u306f\u5acc\u3044\u3000\u3000\uff5c<br>\n\uff5c\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff5c<br>\n(\\__/) ||<br>\n(\u2022\u3145\u2022) ||<br>\n/ \u3000 \u3065","\uff5c\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uffe3\uff5c<br>\n\uff5c\u3000\uff29\uff53\uff41\uff42\uff45\uff4c\uff4c\uff45\u3000\u3000\uff5c<br>\n\uff5c\u3000\uff46\uff4f\uff52\u3000\uff33\uff4d\uff41\uff53\uff48\u3000\uff5c<br>\n\uff5c\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff5c<br>\n(\\__/) ||<br>\n(\u2022\u3145\u2022) ||<br>\n/ \u3000 \u3065","Poor Waluigi.","Does anyone actually read these blobs?","bts stands for: <strong>b</strong>ig <strong>t</strong>ime ru<strong>s</strong>h","Made with love by MindfulMinun","Copied to clipboard successfully.","Projects, Tools, &amp; Gadgets","I like coding things for the Internet & playing the piano. I\u2019m also on Twitter and CodePen. Feel free to say hi.","Make your boring geometrical text more \uff41\uff45\uff53\uff54\uff48\uff45\uff54\uff49\uff43\u2122.","Convert an ASCII string to Base64 and vice versa.","An assorted list of small and useless projects, tools, and gadgets I\u2019ve worked on.","\u201cHey! I know why the lights went out! It\u2019s \u2018cause they liked each other!\u201d","\u201cComedy is best left to comedians.\u201d","Be there or be square \u2018cause you\u2019re never a-round.","It\u2019s transient humor.","\xbfLa viola? Ese instrumento me \u201cviola\u201d los o\xeddos.",'<em style="font-family:\'Comic Sans MS\', serif; font-weight: 100;" aria-hidden="true">Helvetica</em><span class="sr-only">Helvetica written in Comic Sans.</span>',"screen shot of quetion","Engineering Students","If everyone gets the joke, is it <em>really</em> an inside joke?","Mr. Markowski","Uncaught TypeError: Assignment to constant variable.","<pre style=\"background: 0; color: inherit; padding: 0;\">\nf = -> f arguments...\nf 'I love recursion'\n</pre>","\u201cYou are currently on a text element, inside of web content.\u201d","I become very self-conscious when people look at my code.","<strong>Note:</strong> XSS vectors most frequently appear where code from one language is interpolated incorrectly or carelessly into another language.","I can\u2019t drown my pm2 daemons, they know how to swim.","<code>document.body.style.setProperty('--accent', '#FF5252');</code>",'<code>window["xyz"];</code>',"The contents of <code>xyz.blobs.allBlobs</code> is appoximately 8kb compressed.","<em>La luna carmes\xed vuelve a brillar esta noche. Ten mucho cuidado, Link.</em>","\xa1Nooo, mi torta!",'<span lang="es-MX" class="tooltip" data-tp="above" data-tooltip="Reeding is important.">\u201cHay que ler.\u201d</span>','<em lang="es-MX">\n    <strong>Advertencia:</strong> Se ha ejecutado un virus y ha tomado control del sistema operativo. Para la seguridad de usted y de los dem\xe1s, su dispositivo ser\xe1 formateado en breve.\n</em>','<span lang="ja" class="tooltip" data-tp="above" data-tooltip="Pop Team Epic!">\u30dd\u30d7\u30c6\u30d4\u30d4\u30c3\u30af\uff01</span><span class="sr-only">Pop Team Epic!</span>','<span lang="ja" class="tooltip" data-tp="above" data-tooltip="Twitter!">\u30c4\u30a4\u30c3\u30bf\u30fc\uff01</span><span class="sr-only">Twitter!</span>','<span lang="ja" class="tooltip" data-tp="above" data-tooltip="It\u2019s a pun on the word \u201cHawaii\u201d">\n    \u306a\u3093\u304b\u30cf\u30ef\u30a4\u306b\u306f\u3001\u6b6f\u533b\u8005\u3055\u3093\u3072\u3068\u308a\u3082\u3044\u306a\u3044\u3002\u305d\u308c\u306f\u306d\u3001\u6b6f\u306f\u3044\u3044\u3002</span>\n<span class="sr-only">It\u2019s a Japanese pun on the word \u201cHawaii\u201d</span>','<span lang="ja" class="tooltip" data-tp="above" data-tooltip="I party for 24 hours.">\u4e8c\u5341\u56db\u6642\u9593\u30d1\u30fc\u30c6\u30a3\u30fc\u3092\u3057\u307e\u3059\u3002</span><span class="sr-only">I party for 24 hours.</span>','<span lang="ja" class="tooltip" data-tp="above" data-tooltip="You\u2019re gay.">\u304a\u524d\u306f\u30b2\u30a4\u3060\u3088\u3002</span>\n<span class="sr-only">You\u2019re gay.</span>','<span lang="ja" class="tooltip" data-tp="above" data-tooltip="Nice to meet you, call me Benji.">\n    \u306f\u3058\u3081\u307e\u3057\u3066\u3001\u30d9\u30f3\u30b8\u30fc\u3068\u7533\u3057\u307e\u3059\u3002\n</span><span class="sr-only">Nice to meet you, call me Benji.</span>',"\u4f55\u3067\u3082\u8a00\u3046\u3053\u3068\u3092\u805e\u3044\u3066\u304f\u308c\u308b\u30a2\u30ab\u30cd\u30c1\u30e3\u30f3","KissAnime","Error Code: 20110","Each time I hear this song","\u201cSo long, gay Bowser!\u201d","\u201cHow nice to see you again!\u201d",'<em class="tooltip" data-tp="above" data-tooltip="Beyond!">Plus ultra!</em>',"one two <br> two loss","Showdown!","Pok&eacute;mon Showdown!","Fear my Rattata!","Asada-san!","<strong>Step 1:</strong> Think of what you want to say.<br><strong>Step 2:</strong> Say it.","Hyperflex","Ah, the scalene triangle.","Sal from Khan Academy.","Peck.","Doki Doki Hat Club","A Monika in Time","She\u2019s omnipresent.","Just Monika.","\u201cManga is literature!\u201d","Amy Likes Spiders","\u201cYou kind of left her hanging this morning, you know?\u201d","I gently open the door.","Este juego no es apto para ni\xf1os ni para quienes son f\xe1cilmente perturbados.","An exception has occurred.\n<img src=\"/game/script-ch5.rpy\" onerror=\"throw Error(\n    'Oh jeez...I didn\\'t break anything, did I? ' +\n    'Hold on a sec, I can probably fix this...I think... ' +\n    'Actually, you know what? This would probably be a lot easier if I just deleted her. ' +\n    'She\\'s the one who\\'s making this so difficult. Ahaha! Well, here goes nothing.');\" hidden>",'<span class="block trunc">\n    Get out of my head. Get out of my head. Get out of my head.\n    Get out of my head. Get out of my head. Get out of my head.\n    Get out of my head. Get out of my head. Get out of my head.\n</span>',"Haruka","The world is not black and white.","i love you <del>watanabe</del>","<em>Love Live!</em> is the most anime-like anime I\u2019ve ever heard of.","Jojo\u2019s and Love Live are the same thing.","Spinning Popuko","Sorry, I was thinking about Hellshake Yano.","Smile! Sweet! Sister! Sadistic! Surprise! Service!","It\u2019s so good to see you.<br>Stay close to me and don\u2019t touch anything.",'<span lang="es" class="tooltip" data-tp="above" data-tooltip="Attempt itself invites failure.">El mero intento invita al fracaso.</span>','Hey, <span aria-hidden="true">\ud83c\udd71\ufe0f\ud83c\udd98</span><span class="sr-only">Vsauce</span>, Michael here.',"\u201cI\u2019ll take a potato chip, and eat it!\u201d",'<span lang="ms">\u201cSelamat pagi!\u201d</span>',"\u201cDid you know that the truth isn\u2019t always correct?\u201d","<em>\u201cSee? Fortune favors the upbeat. It\u2019s positive magic!\u201d</em>","\u201cTo live tomorrow with a smile, even though I cried yesterday.\u201d","Short Thoughts: \u201cIf you search for it, you\u2019ll find everything.\u201d","Short Thoughts: \u201cI respond to praise, but I never receive any.\u201d","\u266c <em>One, two, three! One, two, three! Okay, it\u2019s on! It\u2019s up to you!</em> \u266c","\u266c <em>Whoa! You go big guy!</em> \u266c","\u266c <em>Wubba-dubba-dub, is that true?</em> \u266c","Unova.","Aspertia City: The city of nostalgia!","Aspertia.","Lacunosa.","Castelia.","Kalos.","Lumiose City: The city of camera angles and being lost!","Hoenn.","Rustboro, Mauville, and Mossdeep","Hau\u2019oli City: At night it sounds like Paris.","Black &amp; White\u2019s rival battle theme was the best.","HeartGold &amp; SoulSilver did Kanto\u2019s theme better than it\u2019s own theme.","[in Lumiose @ night] <br>man: you can't pass there's a blackout <br>[lights on, npc passes by] <br> man: you can't pass.",'<em class="txt-u">Don\u2019t Ever Forget</em> and <em class="txt-u">I Don\u2019t Want To Say Goodbye</em> are both names for the same song.',"<em>Don\u2019t Ever Forget</em>","<em>I Don\u2019t Want To Say Goodbye</em>","Arata Iiyoshi","\u201cRegarding Snapstreaks: If you\u2019re gonna send me the letter S, you can go ahead and take this L.\u201d","\u201cThey\u2019re not gonna put your money to a cause, the money <em>is</em> the cause.\u201d \u2014 Uniquenameosaurus","Although \u201ccan solve a Rubik\u2019s Cube\u201d is a pretty neat skill, I don\u2019t think you should mention it in your r\xe9sum\xe9.","\u201cBe unique\u201d is such a normie thing to say.","Happiness isn\u2019t the absence of problems, but the ability to overcome them.","\u201cStop holding hands! No PDFs!\u201d","No one's around to help."],pull:function(e){var t;return t="number"==typeof e?e:xyz.randomInt(0,this.allBlobs.length-1),{blob:twemoji.parse(this.allBlobs[t]),index:t}}},xyz.dialog={open:function(e){return document.querySelector(e).dataset.dialogState="open"},close:function(e){return document.querySelector(e).dataset.dialogState="close"}},xyz.toast=function(e){var t,o,n;if(!e)throw new Error("An object with content is required to display a toast");if(!e.content)throw new Error("An object with content is required to display a toast");if(!e.actionText&&e.actionHandler)throw new Error("Provide some action text for the handler");if(!(n=document.getElementById("toast-container")))throw new Error("There\u2019s not a #toast-container on this page, you either forgot to add it or this page doesn\u2019t support toasts.");return e.timeout=e.timeout||4e3,e.actionHandler=e.actionHandler||function(){},e.toast=t,e.kill=function(){return t.classList.remove("showing")},t=xyz.parseHTML('<div class="toast">\n    <span class="toast-content">'+e.content+"</span>\n</div>"),e.actionText&&(o=xyz.parseHTML('<button class="toast-action">'+e.actionText+"</button>"),o.addEventListener("click",function(){return e.actionHandler.call(e)}),t.appendChild(o)),n.appendChild(t),requestAnimationFrame(function(){return requestAnimationFrame(function(){return t.classList.add("showing"),xyz.wait(e.timeout).then(function(){return t.classList.remove("showing")})})}),t.addEventListener("transitionend",function(e){if(!t.classList.contains("showing")&&"opacity"===e.propertyName)return t.parentNode.removeChild(t)}),e},xyz.ready(function(){var e,t,o,n,a;for(a=document.getElementsByClassName("e"),o=0,n=a.length;o<n;o++)e=a[o],e.innerHTML=twemoji.parse(e.innerHTML);if(location.href.match(/\?[\s\S]*(s=(1|permalink))/gi)&&ga("send","event","Acquisition","From share link"),t=document.getElementById("footer--blob"))return t.innerHTML=xyz.blobs.pull().blob}),xyz.addEventListeners([window],"message",function(e){var t;if("https://benjic.xyz"===e.origin&&e.data.hasOwnProperty("function"))return t=e.data["function"],window[t.name].apply(null,t.arguments||[])})}).call(this);