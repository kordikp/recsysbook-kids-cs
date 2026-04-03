---
id: ch3-pipeline-visual
topic: zpusoby
title: Sleduj skutečné doporučení na YouTube
teaser: Sleduj jedno doporučení od okamžiku otevření aplikace až po zobrazení na obrazovce.
---

Klepneš na YouTube. Za 0,1 sekundy systém shrne: posledních 10 sledovaných videí — 6 o Minecraftu, 2 o zvířatech. Čas: sobota 16:00 — obvykle sleduješ delší videa.

Za 0,2 sekundy spustí vyhledávání najednou: kolaborativní dá 200 kandidátů, filtrování podle obsahu 150, tvoje odběry 30, trending 50, průzkum 70. Celkem ~500 kandidátů za zlomek sekundy.

Za 0,4 sekundy každý kandidát dostane skóre: pravděpodobnost kliknutí, očekávaný čas sledování, pravděpodobnost lajku. Za 0,7 sekundy systém zkontroluje rozmanitost, čerstvost a vhodnost. Výsledek je na obrazovce dřív, než mrkneš.

? Jak YouTube najde 20 videí z 800 milionů za 0,2 sekundy?
- Náhodným výběrem z populárních videí
- Prohledáváním jen nových videí
* Doporučovací pipeline — rychlé hrubé filtry zúží miliony na 500 kandidátů, pak přesné seřazení vybere nejlepších 20
- Cachováním stejných výsledků pro všechny uživatele
! Přesně! Pipeline umožňuje zpracovat 800 milionů videí v milisekundách tím, že každá fáze dramaticky zúží počet kandidátů.
