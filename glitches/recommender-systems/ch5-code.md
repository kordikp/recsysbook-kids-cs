---
id: ch5-code
topic: postav
title: Nakóduj to!
teaser: Jednoduchý Python skript, který dělá vše, co ses naučil — ve 20 řádcích.
hook: Zkus to zjistit →
---

Python skript na kolaborativní filtrování. Ulož data jako ratings.csv: jméno v prvním sloupci, hodnocení filmů v dalších. Prázdná buňka = neviděl.

Funkce similarity: projdi filmy, které oba hodnotili, spočítej průměrný absolutní rozdíl. Funkce recommend: najdi nejpodobnějšího uživatele a doporuč filmy, které dosud neviděl. Celkem asi 20 řádků — stejná logika jako Netflix.

? Kolik řádků Pythonu stačí na základní kolaborativní filtrování?
- Alespoň 500 řádků
- Kolem 200 řádků
* Asi 20! Načítání dat, výpočet podobnosti a předpověď — základní logika je překvapivě jednoduchá
- Potřebuješ specializovanou knihovnu, ne vlastní kód
! Přesně! Základní kolaborativní filtrování je překvapivě jednoduché implementovat. Velké systémy přidávají optimalizace pro škálování, ale základní myšlenka je stejná.

+++
20 řádků Pythonu je hezký příklad, jak matematická myšlenka se dá elegantně vyjádřit kódem. Python byl záměrně navržen tak, aby kód byl čitelný — proto je tak populární v datové vědě a ML. Kód pro kolaborativní filtrování, který by v C++ nebo Javě zabral stovky řádků, je v Pythonu přehledný a srozumitelný. To je jeden z důvodů, proč se Python stal dominantním jazykem v ML světě.

Přechod z 20 řádků na produkční systém pro miliony uživatelů je zajímavá cesta. Základní logika zůstane stejná, ale přibudou vrstvy: načítání dat z databáze místo CSV souboru, paralelní výpočty na více procesorech, cachování výsledků, fallback strategie pro cold start, monitoring výkonu. Každý z těchto kroků přidá 10–100× více kódu. Netflix a YouTube mají týmy stovek inženýrů jen pro doporučovací systémy.

Pokud tě programování zajímá, Kaggle.com je skvělé místo kde začít. Je to platforma ML soutěží s tisíci notebooků kde lidé sdílejí kód pro různé problémy — včetně doporučovacích systémů. Najdeš tam plnohodnotné implementace kolaborativního filtrování, maticové faktorizace i neuronových sítí, s daty a vysvětlením. Stahovat, studovat a upravovat cizí kód je jedním z nejlepších způsobů, jak se naučit programovat.
