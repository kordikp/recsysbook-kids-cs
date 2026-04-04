---
id: ch3-deep-similarity
topic: zpusoby
title: Jak počítače chápou podobnost
teaser: Rocková a jazzová písnička mohou znít podobně. Jak se to počítač naučí cítit?
hook: Počítač cítí hudbu?!
---

Starší systémy používaly štítky: „Oba filmy mají tag Akce, takže jsou podobné." Problém? Dva filmy označené jako komedie mohou být úplně jiné.

Moderní systémy používají embeddingy — každou píseň, video nebo uživatele převedou na seznam čísel. Představ si každou píseň jako bod v místnosti: osa X je energie, osa Y je nálada, osa Z akustičnost. Dvě písničky blízko sebe v té „místnosti" jsou si podobné — i když jsou z různých žánrů.

Neuronové sítě se tato čísla naučí prohlédnutím milionů příkladů. Proto Spotify's Discover Weekly nachází písničky, které jsi nikdy neslyšel, ale které dokonale odpovídají tvému vkusu. Nesrovnává žánrové štítky — srovnává matematický pocit hudby.

? Co jsou embeddingy v doporučovacích systémech?
- Záložky pro oblíbené položky
- Hodnocení uživatelů v čísle od 0 do 1
* Položky převedené na seznamy čísel — blízké vektory znamenají podobné položky
- Reklamní sloty v aplikaci
! Přesně! Embedding je matematická reprezentace položky nebo uživatele. Podobné položky mají blízké vektory. Neuronové sítě tyto vzory nacházejí samy z dat.

+++
Embeddingy jsou jedním z nejdůležitějších vynálezů moderní AI. Myšlenka, že lze libovolný objekt — písničku, film, slovo, obrázek, uživatele — převést na seznam čísel (vektor) tak, aby podobné objekty měly blízké vektory, je základem celé moderní AI. ChatGPT ji používá pro slova, doporučovací systémy pro obsah. Je to v podstatě způsob, jak naučit počítač „cítit" podobnost.

Prostor embeddingů má fascinující geometrii. Pokud vezmeš vektor slova „král," odečteš vektor „muž" a přidáš vektor „žena," dostaneš vektor blízký slovu „královna." Stejná logika platí pro doporučovací systémy: embedding „akční film s Tomem Hanksem" − „akce" + „drama" = embedding blízký dramatickému filmu s Tomem Hanksem. Systém tuto matematiku nikdo nenaučil — naučil se ji sám z dat.

Neuronové sítě pro embeddingy potřebují obrovské množství dat k trénování. Proto mají velké platformy výhodu — Netflix s 230 miliony uživatelů a miliardami hodnocení může natrénovat embeddingy, které jsou nesrovnatelně přesnější než malý streaming. Tato datová nerovnost je jeden z důvodů, proč se velcí hráči stávají stále dominantnějšími — lepší data → lepší embeddingy → lepší doporučení → více uživatelů → ještě lepší data.
