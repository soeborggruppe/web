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
    }

    .group-introduction {
        border-top: 20px solid #003366;
        width: 0;
        flex-grow: 10;
    }
    .group-focus {
        background-color: rgb(210, 193, 165);
        background-image: url("/img/soeborggruppe-gruppefoto-2018-resized-2000.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 500px;
        max-height: 1000px;
        padding: 25px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        overflow: hidden;
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

    .group-age-groups {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        position: relative;
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
    }
    .group-age-groups .age-group .age-group-age {
        background: #003366;
        padding: 1px 2px;
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
    }
    .group-description ul {
        padding-left: 15px;
    }
    .group-description a {
        color: #003366;
        font-weight: bold;
    }

    .significant-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 15px;
    }
    .significant-links a {
        flex-basis: 150px;
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

    .initiatives {
        background: rgb(240, 240, 240);
        padding: 45px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .initiative {
        max-width: 450px;
        margin: 15px;
        padding: 10px;
        background: #CAD3C8;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 0.85em;
        height: 450px;
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
    .initiative img {
        width: 100%;
        object-fit: cover;
        height: 0;
        flex-grow: 1;
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
                <a class="age-group" href="/familieflok">
                    <img src="/img/familieflok.jpg">
                    <span class="age-group-name">Familieflokken</span>
                    <span class="age-group-age">3-6 år</span>
                </a>
                <a class="age-group" href="/mikro">
                    <img src="/img/mikro.jpg">
                    <span class="age-group-name">Mikroflokken</span>
                    <span class="age-group-age">0.-1. klasse</span>
                </a>
                <a class="age-group" href="/mini">
                    <img src="/img/mini.jpg">
                    <span class="age-group-name">Miniflokken</span>
                    <span class="age-group-age">2.-3. klasse</span>
                </a>
                <a class="age-group" href="/junior">
                    <img src="/img/junior.jpg">
                    <span class="age-group-name">Juniorflokken</span>
                    <span class="age-group-age">4.-5. klasse</span>
                </a>
                <a class="age-group" href="/trop">
                    <img src="/img/trop.jpg">
                    <span class="age-group-name">Troppen</span>
                    <span class="age-group-age">6.-9. klasse</span>
                </a>
                <a class="age-group" href="/skumba">
                    <img src="/img/skumbaklan.jpg">
                    <span class="age-group-name">Skumbaklan</span>
                    <span class="age-group-age">16-19 år</span>
                </a>
                <a class="age-group" href="/vati">
                    <img src="/img/vatiklanet.jpg">
                    <span class="age-group-name">Vatiklanet</span>
                    <span class="age-group-age">20-26 år</span>
                </a>
                <a class="age-group" href="/peli">
                    <img src="/img/peliklan.jpg">
                    <span class="age-group-name">Peliklan</span>
                    <span class="age-group-age">25-29 år</span>
                </a>
                <a class="age-group" href="/klepto">
                    <img src="/img/kleptoklan.jpg">
                    <span class="age-group-name">Kleptoklan</span>
                    <span class="age-group-age">30-39 år</span>
                </a>
                <a class="age-group" href="/foraeldrepatruljen">
                    <img src="/img/foraeldrepatruljen.jpg">
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
            <a href="/bliv-leder">Bliv leder</a>
            <a href="/bliv-spejder">Bliv spejder</a>
            <a href="/hjaelp">Hjælp</a>
            <a href="/faq">FAQ</a>
            <a href="/kontingent">Kontingent</a>
            <a href="/ledige-foraeldrejobs">Ledige forældrejobs</a>
            <a href="/ny-foraelder">Ny spejderforælder?</a>
            <a href="https://medlem.dds.dk/event" target="_blank" rel="noopener">Kommende events</a>
            <a href="/gruppen">Gruppen</a>
            <a href="/bestyrelsen">Bestyrelsen</a>
            <a href="https://facebook.com/soeborggruppe" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com/1.soborggruppe" target="_blank" rel="noopener">Instagram</a>
            <a href="https://medlem.dds.dk/" target="_blank" rel="noopener">Medlemsservice</a>
            <a href="/kalender">Kalender</a>
        </div>
    </div>
</div>

<div class="initiatives">
    <div class="initiative">
        <img src="/photos/gamle-billeder/Foto 148-resized-600.jpg">
        <h1>100 års jubilæum</h1>
        <p>
            D. 4. oktober 2019 fylder gruppen 100 år.
            I den anledning har vi startet <a href="/museum">et digitalt museum</a>.
            Hvis du <a href="/museum/tidligere-spejder">tidligere har været spejder i gruppen</a>, vil vi meget gerne høre fra dig, og du er velkommen til vores <a href="/event/2019-jubilaeum">åbent hus-arrangement</a> i forbindelse med jubilæet.
            <a href="/100">Læs mere</a>.
        </p>
    </div>
    <div class="initiative">
        <img src="/img/genbrugslopperne.jpg">
        <h1>Genbrugslopperne</h1>
        <p>
            Vi deltager i Gladsaxe Kommunes projekt, Genbrugslopperne, hvor vi hjælper med genbrug i kommunen, og samtidig tjener penge til gruppen.
            Udover kontingentindtægter er dette den primære indkomstkilde for gruppen.
            <a href="/genbrugslopperne">Læs mere</a>.
        </p>
    </div>
    <div class="initiative">
        <img src="/img/foerstehjaelp.jpg">
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
        <script type="text/javascript">
            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.3";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>
        <div class="fb-page" data-href="https://www.facebook.com/soeborggruppe" data-width="500" data-height="600" data-small-header="true" data-adapt-container-width="false" data-hide-cover="true" data-show-facepile="false" data-show-posts="true"></div>
    </div>
    <div class="group-intro-video">
        <iframe src="//www.youtube.com/embed/V1mQ6qK0nbc" frameborder="0"></iframe>
    </div>
</div>
