---
id: ch5-code
topic: postav
title: Nakóduj to!
teaser: Jednoduchý Python skript, který dělá vše, co ses naučil — ve 20 řádcích.
---

Python skript na kolaborativní filtrování. Nejprve ulož data jako ratings.csv: jméno v prvním sloupci, hodnocení filmů v dalších. Prázdná buňka = neviděl.

Funkce similarity(person1, person2): projdi filmy, které oba hodnotili, spočítej průměrný absolutní rozdíl. Čím nižší, tím podobnější.

Funkce recommend(person): najdi nejpodobnějšího uživatele, projdi jeho filmy, doporuč ty s vysokým hodnocením, které daná osoba neviděla. Celý základ: asi 20 řádků. Stejná logika jako Netflix — jen v menším měřítku.

? Kolik řádků Pythonu stačí na základní kolaborativní filtrování?
- Alespoň 500 řádků
- Kolem 200 řádků
* Asi 20! Načítání dat, výpočet podobnosti a předpověď — základní logika je překvapivě jednoduchá
- Potřebuješ specializovanou knihovnu, ne vlastní kód
! Přesně! Základní kolaborativní filtrování je překvapivě jednoduché implementovat. Velké systémy přidávají optimalizace pro škálování, ale základní myšlenka je stejná.
