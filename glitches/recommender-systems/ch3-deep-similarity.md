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
