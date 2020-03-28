---
layout: default
permalink: /
title: Altid kæmpende, undertiden slagen, aldrig modløs
hide_default_header: true
---
<style type="text/css">
    .side-by-side-view {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: stretch;
        border-left: 20px solid #003366;
        border-right: 20px solid #003366;
        background: rgb(240, 240, 240);
    }
    @media (max-width: 1000px) {
        .side-by-side-view {
            flex-direction: column;
        }
    }
    @media (max-width: 560px) {
        .side-by-side-view {
            border-left: none;
            border-right: none;
        }
    }

    .group-introduction {
        border-top: 20px solid #003366;
        width: 0;
        flex-grow: 10;
    }
    @media(max-width: 1000px) {
        .group-introduction {
            width: auto;
            min-height: 100vh;
        }
    }
    .group-focus {
        background-color: rgb(210, 193, 165);
        background-image: url("/img/soeborggruppe-gruppefoto-2018-resized-2000.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        overflow: hidden;
        height: 100%;
    }
    @media (max-width: 1000px) {
        .group-focus {
            padding: 0;
            background-image: none;
        }
    }

    .group-focus:before {
        content: '';
        position: absolute;
        bottom: -50px;
        left: 0;
        right: 0;
        height: 220px;
        background: rgba(145, 56, 0, 0.3); /*rgba(0, 51, 102, 0.6);*/
        box-shadow: 0 -80px 30px rgba(145, 56, 0, 0.3); /*rgba(0, 51, 102, 0.6);*/
        filter: blur(40px);
    }

    .group-focus-title {
        font-size: 1.4em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        color: white;
        padding: 25px;
        z-index: 3;
    }
    @media (max-width: 1000px) {
        .group-focus-title {
            position: absolute;
            font-size: 1.1em;
        }
    }
    @media (max-width: 800px) {
        .group-focus-title {
            font-size: 0.95em;
        }
    }

    .group-focus-title > * {
        background: #003366;
        padding: 10px;
    }
    .group-focus h2 {
        font-family: "Krub", sans-serif;
        margin-left: 25px;
        margin-top: -10px;
    }

    .group-image-spacer {
        height: 350px;
        flex-shrink: 0;
    }
    @media (max-width: 1000px) {
        .group-image-spacer {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            background-image: url("/img/soeborggruppe-gruppefoto-2018-resized-1000.jpg");
            background-size: cover;
            background-position: top center;
            height: 600px;
        }
    }
    @media (max-width: 800px) {
        .group-image-spacer {
            height: 500px;
        }
    }
    @media (max-width: 560px) {
        .group-image-spacer {
            height: 550px;
        }
    }

    .group-age-groups {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
        padding: 25px;
        box-sizing: border-box;
    }
    @media (max-width: 1000px) {
        .group-age-groups {
            background: rgb(240, 240, 240);
            margin-top: 500px;
        }
    }
    @media (max-width: 800px) {
        .group-age-groups {
            margin-top: 400px;
        }
    }
    @media (max-width: 560px) {
        .group-age-groups {
            margin-top: 450px;
        }
    }
    @media (max-width: 400px) {
        .group-age-groups {
            font-size: 0.85em;
        }
    }
    .group-age-groups .age-group {
        color: inherit;
        text-decoration: none;
        margin: 15px;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .group-age-groups .age-group img {
        border-radius: 100%;
        width: 110px;
        height: 110px;
        object-fit: cover;
        border: 4px solid #003366;
        background: rgb(240,240,240);
        box-shadow: 0 0 25px rgb(0,0,0,1);
    }
    .group-age-groups .age-group .age-group-name {
        font-size: 0.9em;
        background: #003366;
        padding: 0px 2px;
        box-shadow: 0 0 25px rgb(0,0,0,1);
        box-sizing: border-box;
    }
    .group-age-groups .age-group .age-group-age {
        background: #003366;
        padding: 1px 2px;
    }
    @media (max-width: 1000px) {
        .group-age-groups .age-group img {
            width: 100px;
            height: 100px;
            box-shadow: none;
        }

        .group-age-groups .age-group .age-group-name {
            box-shadow: none;
        }
    }
    @media (max-width: 400px) {
        .group-age-groups .age-group img {
            width: 90px;
            height: 90px;
            box-shadow: none;
        }
        .group-age-groups .age-group .age-group-name {
            max-width: 98px;
            overflow: hidden;
        }
    }

    .group-information {
        padding-top: 75px;
        background: rgb(240, 240, 240);
        color: #2C3A47;
        padding-left: 20px;
        width: 0;
        flex-grow: 4;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .group-description {
        font-family: "Krub", sans-serif;
        font-size: 0.9em;
        margin-bottom: 50px;
        margin-right: 8px;
    }
    .group-description ul {
        padding-left: 15px;
    }
    .group-description a {
        color: #003366;
        font-weight: bold;
    }
    @media (max-width: 1000px) {
        .group-information {
            width: auto;
            padding-top: 0;
            border-bottom: 20px solid #003366;
        }
        .group-description {
            max-width: 500px;
            font-size: 1em;
            color: white;
            background: #003366;
            padding: 10px 40px;
            margin-left: -20px;
            box-sizing: border-box;
        }
        .group-description a {
            color: white;
        }
    }

    .significant-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 15px;
    }
    .significant-links a {
        flex-basis: 170px;
        box-sizing: border-box;
        flex-grow: 1;
        flex-shrink: 1;
        color: white;
        text-decoration: none;
        font-family: "Krub", sans-serif;
        padding: 15px 0 14px 10px;
        border: 1px solid #003366;
        border-bottom-width: 2px;
        border-right-width: 3px;
        background: rgb(240, 240, 240);
        transition: background-color 0.4s, border-color 0.4s, border-width 0.4s, color 0.4s;
        color: #003366;
        margin: 5px 10px 5px 0;
    }
    .significant-links a:hover {
        border-right-width: 15px;
        border-color: rgb(240, 240, 240);
        background: #003366;
        color: rgb(240, 240, 240);
    }

    @media (max-width: 1350px) {
        .significant-links a {
            padding: 10px 0 9px 10px;
        }
    }

    .initiatives {
        background: rgb(240, 240, 240);
        padding: 45px 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .initiative {
        flex-basis: 350px;
        flex-grow: 1;
        max-width: 450px;
        margin: 15px;
        padding: 10px;
        background: #CAD3C8;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 0.85em;
        height: 450px;
        box-sizing: border-box;
    }
    .initiative:nth-child(2) {
        background: #ffc5ad;
    }
    .initiative:nth-child(3) {
        background: #F8EFBA;
    }
    .initiative a {
        color: #5582f4;
    }
    .initiative .img-link {
        height: 0;
        flex-grow: 1;
        width: 100%;
    }
    .initiative img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: rgb(240, 240, 240);
    }
    .initiative h1 {
        line-height: 1.8em;
        font-size: 1.1em;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 0;
    }
    .initiative p {
        margin: 0;
    }
    @media (max-width: 400px) {
        .initiatives {
            padding: 45px 2px;
        }
        .initiative {
            margin: 4px;
        }
    }

    .group-intro-video {
        width: 0;
        flex-grow: 5;
        border-top: 20px solid #003366;
    }
    .group-intro-video iframe {
        width: 100%;
        height: 100%;
    }

    .facebook-feed {
        width: 520px;
        height: 640px;
        flex-grow: 0;
        flex-shrink: 0;
        box-sizing: border-box;
        border-right: 20px solid #003366;
        border-top: 20px solid #003366;
        border-bottom: 20px solid #003366;
        max-width: 100%;
    }
    @media (max-width: 1000px) {
        .group-intro-video {
            width: 100%;
            height: 80vh;
            border-top: none;
            border-bottom: 20px solid #003366;
        }
    }
    @media (max-width: 400px) {
        .facebook-feed {
            border-right: none;
        }
        .group-intro-video {
            border-top: 20px solid #003366;
            border-left: none;
        }
    }

    footer {
        margin-top: 100px;
    }
</style>
<div class="side-by-side-view">
    <div class="group-introduction">
        <div class="group-focus">
            <div class="group-focus-title">
                <h1>1. Søborg Gruppe</h1>
                <h2>En spejdergruppe i Det Danske Spejderkorps</h2>
            </div>
            <div class="group-image-spacer"></div>
            <div class="group-age-groups">
                <a class="age-group" href="/familie">
                    <img src="/img/familieflok-thumb.jpg">
                    <span class="age-group-name">Familieflokken</span>
                    <span class="age-group-age">3-6 år</span>
                </a>
                <a class="age-group" href="/mikroflok">
                    <img src="/img/mikro-thumb.jpg">
                    <span class="age-group-name">Mikroflokken</span>
                    <span class="age-group-age">0.-1. klasse</span>
                </a>
                <a class="age-group" href="/miniflok">
                    <img src="/img/mini-thumb.jpg">
                    <span class="age-group-name">Miniflokken</span>
                    <span class="age-group-age">2.-3. klasse</span>
                </a>
                <a class="age-group" href="/juniorflok">
                    <img src="/img/junior-thumb.jpg">
                    <span class="age-group-name">Juniorflokken</span>
                    <span class="age-group-age">4.-5. klasse</span>
                </a>
                <a class="age-group" href="/trop">
                    <img src="/img/trop-thumb.jpg">
                    <span class="age-group-name">Troppen</span>
                    <span class="age-group-age">6.-9. klasse</span>
                </a>
                <a class="age-group" href="/skumbaklan">
                    <img src="/img/skumbaklan-thumb.jpg">
                    <span class="age-group-name">Skumbaklan</span>
                    <span class="age-group-age">16-19 år</span>
                </a>
                <a class="age-group" href="/vatiklanet">
                    <img src="/img/vatiklanet-thumb.jpg">
                    <span class="age-group-name">Vatiklanet</span>
                    <span class="age-group-age">20-26 år</span>
                </a>
                <a class="age-group" href="/peliklan">
                    <img src="/img/peliklan-thumb.jpg">
                    <span class="age-group-name">Peliklan</span>
                    <span class="age-group-age">25-29 år</span>
                </a>
                <a class="age-group" href="/kleptoklan">
                    <img src="/img/kleptoklan-thumb.jpg">
                    <span class="age-group-name">Kleptoklan</span>
                    <span class="age-group-age">30-39 år</span>
                </a>
                <a class="age-group" href="/foraeldrepatruljen">
                    <img src="/img/foraeldrepatruljen-thumb.jpg">
                    <span class="age-group-name">Forældrepatruljen</span>
                    <span class="age-group-age">for forældre</span>
                </a>
            </div>
        </div>
    </div>
    <div class="group-information">
        <div class="group-description">
            <p>1. Søborg Gruppe er en velfungerende spejdergruppe med engagerede ledere, et stærkt sammenhold og:</p>
            <ul>
                <li>Fællesskab med plads til alle.</li>
                <li>Udfordringer der rykker grænser.</li>
                <li>Samarbejde og lederkompetencer.</li>
                <li>Sjov, hygge og festivitas.</li>
            </ul>
            <p>Læs mere under <a href="/gruppen">Gruppen</a>.</p>
        </div>
        <div class="significant-links">
            <a href="/rekruttering">Bliv leder</a>
            <a href="/blivspejder">Bliv spejder</a>
            <a href="/hjaelp">Hjælp</a>
            <a href="/faq">FAQ</a>
            <a href="/kontingent">Kontingent</a>
            <a href="/foraeldrejobs">Ledige forældrejobs</a>
            <a href="/velkommen">Ny spejderforælder?</a>
            <a href="/kalender">Kalender</a>
            <a href="https://medlem.dds.dk/event" target="_blank" rel="noopener">Kommende ture</a>
            <a href="/gruppen">Gruppen</a>
            <a href="/bestyrelsen">Bestyrelsen</a>
            <a href="https://facebook.com/soeborggruppe" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com/1.soborggruppe" target="_blank" rel="noopener">Instagram</a>
            <a href="https://medlem.dds.dk/" target="_blank" rel="noopener">Medlemsservice</a>
            <a href="/hjemmespejd">Hjemmespejd</a>
        </div>
    </div>
</div>

<div class="initiatives">
    <div class="initiative">
        <a href="/100" class="img-link">
            <img src="/photos/gamle-billeder/Foto 148-resized-600.jpg">
        </a>
        <h1>100 års jubilæum</h1>
        <p>
            D. 4. oktober 2019 fylder gruppen 100 år.
            I den anledning har vi startet <a href="/museum">et digitalt museum</a>.
            Hvis du <a href="/museum/tidligere-spejder">tidligere har været spejder i gruppen</a>, vil vi meget gerne høre fra dig, og du er velkommen til vores <a href="/kalender/2019-jubilaeum">åbent hus-arrangement</a> i forbindelse med jubilæet.
            <a href="/100">Læs mere</a>.
        </p>
    </div>
    <div class="initiative">
        <a href="/loppe" class="img-link">
            <img src="/img/genbrugslopperne.jpg">
        </a>
        <h1>Genbrugslopperne</h1>
        <p>
            Vi deltager i Gladsaxe Kommunes projekt, Genbrugslopperne, hvor vi hjælper med genbrug i kommunen, og samtidig tjener penge til gruppen.
            Udover kontingentindtægter er dette den primære indkomstkilde for gruppen.
            <a href="/loppe">Læs mere</a>.
        </p>
    </div>
    <div class="initiative">
        <a href="/foerstehjaelp" class="img-link">
            <img src="/img/foerstehjaelp.jpg">
        </a>
        <h1>Gratis førstehjælp</h1>
        <p>
            Med støtte for Trygfonden afholder vi gratis førstehjælpskurser for spejderledere i Gladsaxe Kommune og Bernstorff Division i perioden 2019-2022.
            Hvis du passer ind i den gruppe, kan du tilmelde dig lige nu!
            <a href="/foerstehjaelp">Læs mere</a>.
        </p>
    </div>
</div>

<div class="side-by-side-view">
    <div class="facebook-feed">
        <div class="fb-page" data-href="https://www.facebook.com/soeborggruppe" data-width="500" data-height="600" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="false" data-show-posts="true"></div>
        <script>
            (function() {
                var fbpage = document.querySelector(".fb-page");
                var width = getWidth();
                console.log("width", width);

                if(width < 400) {
                    fbpage.dataset.width = "" + getWidth();
                }
                else if(width <= 540) {
                    fbpage.dataset.width = "" + (getWidth() - 20);
                }
                else if(width <= 560) {
                    fbpage.dataset.width = "" + (getWidth() - 40);
                }
                else {
                    fbpage.dataset.width = "560";
                }

                setInterval(() => {
                    let newWidth = getWidth();
                    console.log("newWidth", newWidth);
                    if(newWidth != width) {
                        width = newWidth;
                        if(width < 400) {
                            fbpage.dataset.width = "" + getWidth();
                        }
                        else if(width <= 560) {
                            fbpage.dataset.width = "" + (getWidth() - 20);
                        }
                        else if(width <= 560) {
                            fbpage.dataset.width = "" + (getWidth() - 40);
                        }
                        else {
                            fbpage.dataset.width = "560";
                        }
                        FB.XFBML.parse();
                    }
                }, 2500);

                function getWidth() {
                    return Math.max(
                        document.body.scrollWidth,
                        document.documentElement.scrollWidth,
                        document.body.offsetWidth,
                        document.documentElement.offsetWidth,
                        document.documentElement.clientWidth
                    );
                }

                function getHeight() {
                    return Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.documentElement.clientHeight
                    );
                }
            })();
        </script>
        <script type="text/javascript">
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.3";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
    </div>
    <div class="group-intro-video">
        <iframe src="//www.youtube.com/embed/V1mQ6qK0nbc" frameborder="0"></iframe>
    </div>
</div>
