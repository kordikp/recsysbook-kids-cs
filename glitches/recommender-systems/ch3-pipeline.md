---
id: ch3-pipeline
topic: zpusoby
title: Doporučovací pipeline
teaser: Skutečné systémy nepoužívají jen jednu metodu. Používají VŠECHNY, ve třech chytrých krocích.
---

Skutečné systémy si nevybírají jednu metodu — používají všechno ve specifickém pořadí.

Krok 1 NAJDI: Z milionů položek rychle sesbírej pár stovek kandidátů pomocí kolaborativního filtrování, filtrování podle obsahu, popularity i sociálních signálů. Cíl není dokonalost, ale rychlost — zúžit miliony na ~500 kandidátů za milisekundy.

Krok 2 SEŘAĎ: Pro každého kandidáta pečlivě spočítej skóre. Jak pravděpodobné je kliknutí? Jak dlouho to bude sledovat? Každá položka dostane skóre a seřadí se od nejlepší po nejhorší.

Krok 3 ZKONTROLUJ: Nejlepší položky se na obrazovku jen tak nevysypou. Zkontroluj rozmanitost (ne 10 Minecraft videí za sebou), čerstvost, vhodnost a žádná opakování.

? Jaké jsou 3 fáze doporučovacího pipeline?
- Sbírej data, analyzuj, prezentuj
- Přihlás uživatele, načti historii, zobraz feed
* Najdi kandidáty (rychle a hrubě), seřaď je (přesné skórování), zkontroluj rozmanitost
- Filtruj nevhodný obsah, doporuč populární, přimíchej nové
! Přesně! Třífázový pipeline: rychlé nalezení stovek kandidátů, přesné seřazení, závěrečná kontrola rozmanitosti a kvality.
