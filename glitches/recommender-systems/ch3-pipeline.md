---
id: ch3-pipeline
topic: zpusoby
title: Doporučovací pipeline
teaser: Skutečné systémy nepoužívají jen jednu metodu. Používají VŠECHNY, ve třech chytrých krocích.
hook: Jaké jsou ty kroky?
---

Skutečné systémy si nevybírají jednu metodu — používají všechno ve specifickém pořadí.

NAJDI: z milionů položek rychle sesbírej pár stovek kandidátů. Cílem není dokonalost, ale rychlost. SEŘAĎ: pro každého kandidáta spočítej skóre — pravděpodobnost kliknutí, sledovaná doba. ZKONTROLUJ: ne 10 Minecraft videí za sebou, čerstvost, vhodnost.

? Jaké jsou 3 fáze doporučovacího pipeline?
- Sbírej data, analyzuj, prezentuj
- Přihlás uživatele, načti historii, zobraz feed
* Najdi kandidáty (rychle a hrubě), seřaď je (přesné skórování), zkontroluj rozmanitost
- Filtruj nevhodný obsah, doporuč populární, přimíchej nové
! Přesně! Třífázový pipeline: rychlé nalezení stovek kandidátů, přesné seřazení, závěrečná kontrola rozmanitosti a kvality.

+++
Pipeline architektura je obecný princip, který se používá daleko za hranicemi doporučovacích systémů. Použiješ ho při hledání v e-shopu, při filtrování e-mailů, při vyhledávání v Googlu. Základní myšlenka je vždy stejná: hrubá, rychlá filtrace → přesné hodnocení malé skupiny. Je to efektivnější než aplikovat přesné hodnocení na vše hned.

Seřazovací fáze je nejnákladnější část pipeline — zde se počítají sofistikované modely pro každého z 500 kandidátů. Na YouTube tato fáze používá neuronové sítě s miliardami parametrů, které předpovídají desítky různých signálů najednou: pravděpodobnost kliknutí, sledovaná doba, pravděpodobnost lajku, pravděpodobnost sdílení, pravděpodobnost přihlášení k odběru. Výsledné „skóre" je váženou kombinací všech těchto předpovědí.

Třetí fáze — kontrola rozmanitosti a kvality — je místo, kde mohou firmy prosazovat hodnoty, které algoritmus sám neoptimalizuje. YouTube zde filtruje dezinformace, TikTok zde aplikuje věkové omezení, Spotify zde zajišťuje, že nezávislí umělci dostávají fair šanci. Je to chvíle, kdy lidé (přes pravidla a filtry) zasahují do jinak automatického procesu.
