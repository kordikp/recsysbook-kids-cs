---
id: ch4-testing
topic: lepsi
title: Testování, testování, 1-2-3
teaser: Jak zjistíš, jestli doporučovací systém skutečně funguje? Vědou!
hook: Jak to změříš?
---

Postavil sis doporučovací systém. MYSLÍŠ, že je dobrý. Ale jak to VÍŠ? Potřebuješ A/B test.

Rozdělíš uživatele náhodně do dvou skupin: Skupina A dostává verzi starého algoritmu, Skupina B dostává nový. Nikdo neví, ve které skupině je. Používají aplikaci normálně. Za kulisami měříš vše: kolik sledují, jak často se vrátí, jak moc přeskakují.

Po týdnu srovnáš čísla. Skupina B poslouchala o 40 % více? Vítěz je verze B! Netflix, YouTube, TikTok, Amazon neustále provádějí A/B testy — stovky experimentů najednou. Vyhazují hádání z rozhodování.

? Co je A/B test?
- Test dvou různých designů uživatelského rozhraní
- Porovnání dvou různých produktů od různých firem
* Ukáž verzi A polovině uživatelů, verzi B druhé polovině, porovnej jejich skutečné chování
- Průzkum spokojenosti mezi dvěma skupinami
! Přesně! A/B test nechá skutečné uživatele svým chováním ukázat, která verze je lepší. Žádné hádání, jen data. Proto velké platformy provádějí stovky testů najednou.

+++
A/B testování nevyžaduje velký tým ani miliony uživatelů. Statisticky smysluplný výsledek lze dostat i ze stovek uživatelů — záleží na tom, jak velký rozdíl chceš detekovat. Malé e-shopy A/B testují nadpisy nebo pořadí produktů s pouhými 500 návštěvníky. Velké platformy jako Netflix ho provádějí s miliony, protože hledají drobné zlepšení o desetiny procenta — a i ta mají obrovský dopad v měřítku.

Zajímavý problém A/B testování se jmenuje „novelty effect." Pokud uděláš jakoukoli změnu, uživatelé na ni reagují lépe jen proto, že je nová — ne proto, že je lepší. Za týden efekt opadne a data jsou přesnější. Proto dobré A/B testy běží alespoň 2 týdny a ignorují první dny dat. Netflix učil své inženýry toto pravidlo jako základní princip experimentování.

Samotné A/B testování je forma vědecké metody aplikovaná na produkt. Máš hypotézu (personalizace bude lepší), null hypotézu (nebude žádný rozdíl), experiment a statistické vyhodnocení. Firmy jako Booking.com dělají přes 1000 A/B testů najednou — takže jejich produkt se v podstatě neustále vyvíjí na základě dat. Každý prvek jejich webu byl v určitém okamžiku testován.
