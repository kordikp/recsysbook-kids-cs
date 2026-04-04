---
id: ch4-ab-test
topic: lepsi
title: Spusť si vlastní A/B test
teaser: Experiment s hudební aplikací — která strategie doporučení zvítězí?
hook: Zkus to zjistit →
---

Jsi hlavní inženýr v hudební aplikaci TuneUp. Strategie A: ukaž všem 30 nejpřehrávanějších písniček týdne. Strategie B: analyzuj poslechovou historii každého člověka a doporuč písničky, které lidé s podobným vkusem milovali, ale tento člověk ještě neslyšel.

Po dvou týdnech na 10 000 uživatelích: Strategie B vyhrává ve VŠEM. Lidé poslouchali o 37 % více písniček, přeskakovali méně (15 % vs. 35 %), objevili 4× více nových umělců, více se vracelo denně (78 % vs. 60 %).

Ale pozor — Strategie B je mnohem dražší na provoz. Vyplatí se? V tomto případě jednoznačně ano. Ale někdy jsou výsledky blíž u sebe a musíš se rozhodnout, jestli malé zlepšení stojí za extra složitost.

? Fungují personalizovaná doporučení skutečně lépe než „ukaž populární"?
- Ne, uživatelé preferují oblíbené hity
- Záleží na žánru hudby
* Ano! Testy ukazují o 37 % více přehraných písniček, 4× více objevených umělců a vyšší zapojení
- Výsledky jsou vždy stejné
! Ano! Data jasně ukazují, že personalizovaná doporučení vyhrávají — ale za cenu vyšší výpočetní náročnosti. A/B test poskytl přesvědčivé důkazy místo pouhého hádání.

+++
A/B testování je standard v celé tech industrii — a je fascinující, jak moc ho firmy využívají. Netflix v každém okamžiku provádí stovky A/B testů najednou — testuje barvy tlačítek, pořadí obsahu, formáty miniatur, typ písma. Každý uživatel Netflixu je pravděpodobně součástí desítek experimentů, aniž by o tom věděl. Výsledky těchto testů určují, jak produkt vypadá.

Nejznámější A/B test v historii internetu spustil Google v roce 2000: testoval, jestli zobrazit 10 nebo 30 výsledků vyhledávání na stránce. 30 výsledků bylo intuitivně „lepší" — víc informací, víc výběru. Výsledek testu byl překvapivý: stránka s 30 výsledky načítala o 0,5 sekundy pomaleji a míra vracejících se uživatelů klesla o 20 %. Google zůstal u 10 výsledků. To je síla dat nad intuicí.

A/B testy mají ale i etický rozměr. Pokud testujete doporučení na živých uživatelích bez jejich vědomí, provádíte v podstatě psychologický experiment bez souhlasu. V roce 2014 Facebook přiznal, že prováděl A/B test, kde záměrně ukazoval různým uživatelům více negativních nebo pozitivních příspěvků — aby zjistil, jak to ovlivní jejich náladu a chování. Veřejné pobouření bylo obrovské, protože nikdo nesouhlasil s tím, aby byl subjektem psychologického experimentu.
