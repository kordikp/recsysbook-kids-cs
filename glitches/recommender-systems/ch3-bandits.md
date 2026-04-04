---
id: ch3-bandits
topic: zpusoby
title: Dilema průzkum vs. využití
teaser: Má algoritmus ukázat něco, o čem VÍ, že se ti líbí, nebo zkusit něco nového?
hook: Jak by ses rozhodl ty?
---

Jsi na food courtu s 20 restauracemi. Vyzkoušel sis tři a jednu miluješ. Vrátíš se do oblíbené — nebo zkusíš nové místo? Tohle dilema řeší každý doporučovací systém neustále.

Řešení se jmenuje banditové algoritmy. Začni s hodně průzkumem, postupně přecházej k využití — ale průzkum nikdy úplně nezastav. Proto TikTok občas vloží do feedu video z tématu, které jsi nikdy nesledoval.

? Co je dilema průzkumu a využití?
- Jestli ukázat obsah z různých zemí
- Jak rychle načítat doporučení
* Má systém ukázat bezpečné tipy které se ti líbí, nebo zkusit nové věci, které bys mohl objevit?
- Jestli doporučovat placený nebo bezplatný obsah
! Přesně! Příliš mnoho využití = uvízneš v bublině. Příliš mnoho průzkumu = nevidíš věci, které miluješ. Banditové algoritmy hledají chytrou rovnováhu.

+++
Název „banditové algoritmy" pochází z anglického „multi-armed bandit" — výherní automat s více pákami. Klasická otázka gamblerů: máš 10 různých automatů, každý s neznámou pravděpodobností výhry. Jak zjistíš, který je nejlepší, aniž by sis vyplýtval peníze na špatné automaty? Přesně tohle řeší každý doporučovací systém, jen místo peněz jde o tvoji pozornost.

Spotify Discover Weekly používá sofistikovanou variantu průzkumu: playlist vždy obsahuje alespoň 2–3 písničky, u kterých si systém není jistý tvou reakcí. Jsou to „průzkumné sloty." Pokud je nedosleduješ, nic se nestane. Pokud je objeruješ, systém si to zapamatuje a podobný obsah začne doporučovat víc. Tímto způsobem Spotify trvale rozšiřuje tvůj hudební vkus, i když si toho nevšimneš.

Banditové algoritmy mají i temnou stránku. Zpravodajské weby je používají k testování, které titulky klikají víc — a zjistily, že šokující a negativní zprávy klikají výrazně více než neutrální. Algoritmus pak přirozeně posílá do „využití" více šokujícího obsahu. Systém optimalizuje pro kliknutí, ne pro kvalitu informací. Proto čtení zpravodajství z jednoho zdroje řízeného algoritmem může postupně zkreslovat tvůj pohled na svět.
