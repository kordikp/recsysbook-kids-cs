---
id: ch3-deep-similarity
type: spine
title: "Jak počítače chápou podobnost"
readingTime: 3
standalone: true
core: true
teaser: "Rocková a jazzová písnička mohou znít podobně — teplé, uklidňující, akustické. Jak se to počítač naučí cítit?"
voice: universal
parent: null
diagram: diagram-embedding-space
recallQ: "Co jsou embeddingy v doporučovacích systémech?"
recallA: "Položky převedené na seznamy čísel (vektory). Blízké vektory = podobné položky. Neuronové sítě se tyto vzory naučí."
status: accepted
---

Hned poznáš, že dvě písničky „zní podobně", i když jsou z různých žánrů. Počítač nic necítí — jak tedy rozumí podobnosti?

## Starý způsob: tagy a kategorie

Dřívější systémy používaly štítky: „Tento film je Akce + Sci-fi, tamten film je Akce + Thriller — sdílejí Akci, takže jsou z 60 % podobné."

Problém? Štítky jsou hrubé. Dva „komedie" filmy mohou být úplně jiné. A kdo ty štítky vlastně určuje?

## Nový způsob: embeddingy (vektorové reprezentace)

Moderní systémy používají **embeddingy** — to je anglický termín, který znamená „vnoření" nebo „vektorová reprezentace". V praxi jde o převod čehokoliv (písničky, videa, uživatele) na **seznam čísel** (vektor), který zachycuje jeho „podstatu". Podobné věci dostanou podobné seznamy čísel.

Představ si každou písničku jako bod v místnosti:
- Osa X představuje energii (klidná → intenzivní)
- Osa Y představuje náladu (smutná → veselá)
- Osa Z představuje akustičnost vs. elektroničnost

Dvě písničky blízko sebe v této „místnosti" jsou si podobné — i když jsou z různých žánrů. Klidná akustická folk písnička může být blízko klidné akustické jazzové písničce.

## Jak hluboké učení tato čísla nachází

**Neuronové sítě** se tato čísla naučí prohlédnutím milionů příkladů:

1. Síť dostane páry: „Tyto dvě položky měl rád stejný uživatel" nebo „Tento obrázek vypadá jako tamten"
2. Síť se naučí dávat podobné položky blízko sebe a různé položky daleko od sebe
3. Po trénování dostane každá položka **vektor** — svoji adresu v prostoru podobnosti

Tak Spotify's „Discover Weekly" nachází písničky, které jsi nikdy neslyšel, a které dokonale odpovídají tvému vkusu. Nesrovnává žánrové štítky — srovnává matematický *pocit* hudby.

## Proč to řeší studený start

Moderní doporučovací systémy jako [Recombee](https://www.recombee.com/blog/modern-recommender-systems-part-2-data) vytvářejí embeddingy z popisů položek, obrázků a chování uživatelů najednou. To znamená, že nová položka jen s názvem a popisem může být okamžitě spárována s uživateli, kteří by ji měli rádi — bez jakýchkoli hodnocení.

**Proč na tom záleží pro tebe**: Když doporučení působí neuvěřitelně přesně — jako by aplikace tě „chápala" — je to proto, že hluboké učení našlo skryté vzory spojující tvůj vkus s novým obsahem. Nečte tvoje myšlenky. Čte chování milionů lidí a nachází matematickou strukturu preferencí.

![ANN vyhledávání](/images/diagram-ann-search.svg)
