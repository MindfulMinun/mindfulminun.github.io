---
title: About me
layout: default
description: >
    Hi, I’m Benji. I like programming and playing piano.
image:
    src: /assets/retrato-1-1.jpeg
    alt: Benji
scripts:
    - async: true
      src: "https://platform.twitter.com/widgets.js"
    - async: true
      src: "/scripts/audio-player.js"
afterHead: >
    <style>h2 {font-size: 1.75rem;}</style>
    <script src="/scripts/xyz-player.js" onload="XyzPlayer.register()"></script>
---

# Hi, I’m Benji.
I like programming and playing piano. I should probably be studying.
<hr>

<section>
    <h2>Projects</h2>
    <p>Some <a href="/p/">projects</a> I’ve worked on.</p>

    {% include scroller.html %}
</section>

<section markdown="1">
## About me

Hi, I'm Benji. You might know me as [@MindfulMinun][twitter] online. I graduated from both [Legacy ECHS](https://lechs.taylorisd.org) and [Temple College](https://templejc.edu) late this spring with my HS diploma and an Associate of Arts respectively. I’m currently a first-year sophomore at [UT Dallas](https://utdallas.edu), majoring in Computer Science. I like to write code and play the piano.

{% include image.html
    caption="This is what I look like."
    id="pfp" class="small"
    suppressLink="true"
    src="/assets/retrato-1-1.jpeg"
    style="padding-top: 100%; background: #759b86; background: radial-gradient(#a06642, #306bad);" %}

In my leisure time, I like to [write code][github], [tweet tweets][twitter], and play piano and Smash. I can solve a Rubik's cube under 2 minutes, and I speak both English and Spanish fluently.
</section>

<figure>
    <div class="media-box">
        <xyz-player
            srcset="
                https://benjic.xyz/assets/goodbye/goodbye.webm video/webm,
                https://benjic.xyz/assets/goodbye/goodbye.mp4 video/mp4"
        ></xyz-player>
    </div>
    <noscript>
        <div class="block-warn">
            <p>JavaScript must be enabled to play this video</p>
        </div>
    </noscript>
    <figcaption>An excerpt of <em>Don't Ever Forget</em>.</figcaption>
</figure>

<figure>
    <div class="audio-player" hidden>
        <audio>
            <source src="/assets/goodbye/Don't_Ever_Forget--Musescore-2018-11-23.ogg" type="audio/ogg">
            <source src="/assets/goodbye/Don't_Ever_Forget--Musescore-2018-11-23.mp3" type="audio/mpeg">
        </audio>
        <div class="audio-player__content">
            <span class="title">Don’t Ever Forget &mdash; Arata Iiyoshi</span>
            <span class="song-data">
                <!-- <a href="/assets/goodbye/Copia de Goodbye.zip" class="txt-alike"
                    download="Don't Ever Forget.zip"
                    title="Download Garageband Project file (zipped)"
                    aria-label="Download Garageband Project file (zipped)">
                    <span class="txt-u">Garageband</span>
                    <i class="material-icons audio-player__icon">get_app</i>
                </a> -->
                <a href="https://musescore.com/user/16771186/scores/5222447"
                    class="txt-alike" target="_blank"
                    aria-label="View in Musescore (opens new tab)"
                    >
                    View in Musescore
                    <i class="material-icons audio-player__icon">open_in_new</i>
                </a>
                <a href="/assets/goodbye/Don't_Ever_Forget--Musescore-2018-11-23.mp3" class="txt-alike"
                    download="Don't Ever Forget.mp3"
                    title="Download mp3"
                    aria-label="Download mp3">
                    .mp3
                    <i class="material-icons audio-player__icon">get_app</i>
                </a>
                <a href="/assets/goodbye/Don't_Ever_Forget--Musescore-2018-11-23.ogg" class="txt-alike"
                    download="Don't Ever Forget.ogg"
                    title="Download ogg"
                    aria-label="Download ogg">
                    .ogg
                    <i class="material-icons audio-player__icon">get_app</i>
                </a>
            </span>
        </div>
    </div>
    <noscript>
        <div class="block-warn">
            <p>JavaScript must be enabled to play audio.</p>
        </div>
    </noscript>
</figure>

<section markdown="1">
## Code &amp; stuff

I love to code. It’s my dream to write code for a living. I picked up JavaScript during my freshman year of high school while messing around with Firefox Scratchpad. I naturally went on to learn the other two web languages: HTML and CSS. I'm now fluent in front-end workflow, combining technologies ranging from ServiceWorker, Jekyll, Vue, GitHub, Netlify, Heroku, you name it.

The [video](https://github.com/MindfulMinun/xyz-custom-elements) and [audio](https://codepen.io/MindfulMinun/pen/vRjPwP) players above were both created by yours truly. I've also made [layouts][layout] and other [HTML things][projects].

Near the end of my Sophomore year, I went on to focus on Node.js, a back-end JavaScript runtime. Here, I picked up CoffeeScript, a Python-esque language that transpiles to JavaScript. With these, I created [Haruka][haruka], a Discord bot.

Last summer, I've worked some more with Node.js and created [@NichijouEbooks][NichijouEbooks], a Twitter bot that posts randomly-formulated strings from quotes taken from the Nichijou anime. [Her repository is also on GitHub.](https://github.com/MindfulMinun/nichijouebooks)
</section>

<section markdown="1">
## Contact

You can find me all over the Internet as MindfulMinun, I can [prove it][keybase]. For business inquiries, [send me an email](mailto:benji@utdallas.edu). For pretty much anything else, get it touch with me via [Twitter][twitter] or Discord (MindfulMinun#3386). I'm also on [GitHub][github], [CodePen][codepen], [Glitch][glitch], [Keybase][keybase], [Mastodon][mastodon], and many other places. Feel free to say hi.

[Tweet to @MindfulMinun][twitter-intent]
</section>

<!-- References -->
[twitter]: https://twitter.com/MindfulMinun

[twitter-intent]: https://twitter.com/intent/tweet?screen_name=MindfulMinun&ref_src=twsrc%5Etfw "Tweet to @MindfulMinun"
{: class="twitter-mention-button" data-size="large" data-show-count="true" }

[haruka]: https://github.com/MindfulMinun/discord-haruka
[NichijouEbooks]: https://twitter.com/NichijouEbooks
[github]: https://github.com/MindfulMinun
{: rel="me" }
[codepen]: https://codepen.io/MindfulMinun
[glitch]: https://glitch.com/@MindfulMinun
{: rel="me" }
[keybase]: https://keybase.io/mindfulminun
{: rel="me" }
[mastodon]: https://mastodon.social/@mindfulminun
{: rel="me" }
[projects]: /p/
[layout]: /p/default/
