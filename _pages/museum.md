---
layout: bigheader
permalink: museum
title: Museum
---
<section class="side-by-side-section">
    <div class="main-text">
        <p>
            Denne underside er et digitalt museum over 1. Søborg Gruppes historie.
            Den blev startet i anledning af gruppens 100 års jubilæum d. 4. oktober 2019.
        </p>
        <p>
            Gruppen kommer af 1. Søborg Gruppe og Dyssegaard Pigegruppe (tidligere Dyssegaard Trop i Det Danske Pigespejderkorps), der i 1978 blev lagt sammen, og vi forsøger at kortlægge <a href="/historie/">begge gruppers historie</a> før sammenlægningen.
        </p>
        <p>
            På siden kigger vi tilbage i hvordan gruppen har udviklet sig igennem tiden, og hvordan det var at være spejder i en anden tid.
            Museet er organiseret i udstillinger, hvor hver udstilling behandler et emne, man kan dykke nærmere ned i.
        </p>
    </div>
    <div class="side-bar">
        <div class="side-bar-art"></div>
        <img src="/img/soeborggruppe-gruppefoto-2018-resized.jpg">
        <p>
            <a href="http://soeborggruppe.dk" rel="noopener">1. Søborg Gruppe</a> er en spejdergruppe i <a href="https://dds.dk" rel="noopener">Det Danske Spejderkorps</a>, som ligger på Maglestien 9-11 i Søborg, hvor vi har vores egne hytter.
        </p>
        <p>
            <a href="/historie/">Gruppen er stiftet 4. oktober 1919</a> og er den ældste spejdergruppe i Gladsaxe. Vi er ca. 180 medlemmer i alderen 3-60 år, der har blå uniformer og røde tørklæder med grøn kant.
        </p>
    </div>
</section>
<section class="collection-previews">
    {% assign preview_collection=site.tidligere_spejder_billeder %}
    {%
        include collection-preview.html
        title="Tidligere spejder"
        text="Er du tidligere spejder? Find dine gamle spejderkammerater, kom til vores jubilæum, og hjælp os med at udbygge vores digitale museum."
        color="#BDC581"
        link="/museum/tidligere-spejder/"
    %}

```
{% assign preview_collection=site.gamle_billeder %}
{%
    include collection-preview.html
    title="Gamle billeder"
    text="I anledning af 50-års jubilæet i 1969 blev der samlet billeder sammen. Nu har vi digitaliseret samlingen."
    color="#9AECDB"
    link="/museum/gamle-billeder/"
%}
```

</section>
