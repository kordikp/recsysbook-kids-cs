---
id: ch3-cf-build
topic: zpusoby
title: Postav si vlastní systém pro párování vkusu
teaser: Průzkum mezi spolužáky, tabulka hodnocení a skryté vkusové dvojníky.
hook: Kdo je tvůj vkusový dvojník?
---

Na kolaborativní filtrování nepotřebuješ počítač. Vyber 8 populárních filmů. Zeptej se 10 spolužáků: „Líbil se ti tento film? Ano nebo ne?" Udělej tabulku — jména po straně, filmy nahoře.

Pro každou dvojici spolužáků spočítej, u kolika filmů se shodli. Spolužák A a B souhlasili u 6 ze 7? Silná shoda! A a C u 2 ze 6? Slabá shoda.

Teď dělej předpovědi: najdi spolužáka, který NEVIDĚL jeden film. Podívej se na jeho nejlepší shodu. Líbil se té shodě onen film? Předpověz, že se bude líbit i tvému spolužákovi. Otestuj přesnost na 10 předpovědích.

? Lze kolaborativní filtrování vyzkoušet bez počítače?
- Ne, potřebuješ výkonný server
- Jen s tabulkovým procesorem
* Ano — průzkum, tabulka hodnocení a ruční výpočet podobnosti stačí
- Ne, potřebuješ alespoň 1000 uživatelů
! Ano! Základní kolaborativní filtrování zvládneš na papíře. Velké systémy dělají to samé — jen s miliony uživatelů a výkonnými počítači.

+++
Tento ruční experiment s kolaborativním filtrováním je přesně to, co v 90. letech dělali výzkumníci z GroupLens projektu na University of Minnesota. Oni sbírali hodnocení filmů od tisíců lidí e-mailem — v době před internetem jako ho znáš — a ručně hledali vzory. Jejich práce je základem moderního doporučování. Takže i ručně dělaný experiment má přímé historické kořeny.

Zajímavé je, jak malá skupina stačí k tomu, aby kolaborativní filtrování začalo fungovat. Výzkumy ukazují, že s pouhými 30–50 uživateli, kteří hodnotili alespoň 10 společných položek, začíná algoritmus dávat smysluplné výsledky. Proto i malé komunitní weby (fóra, malé e-shopy) mohou mít funkční doporučovací systém bez milionů dat.

Ručně tabulku dělat je taky skvělé cvičení pro pochopení sparsity — řídkosti dat. Pokud každý tvůj spolužák viděl jiné filmy, tabulka bude mít hodně prázdných políček. Netflix má 99 % prázdných buněk, přesto algorithmus funguje. Výzva je tedy ne jen najít podobné uživatele, ale najít je i přes to, že viděli jen zlomek stejného obsahu — a přesto odhadnout, zda by se jim líbilo to, co druhý viděl a oni ne.
