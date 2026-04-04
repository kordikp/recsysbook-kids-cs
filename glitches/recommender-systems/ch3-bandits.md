---
id: ch3-bandits
topic: zpusoby
title: Dilema průzkum vs. využití
teaser: Má algoritmus ukázat něco, o čem VÍ, že se ti líbí, nebo zkusit něco nového?
hook: Jak by ses rozhodl ty?
---

Jsi na food courtu s 20 restauracemi. Vyzkoušel sis 3 a jednu miluješ. Vrátíš se do oblíbené (bezpečná sázka), nebo zkusíš nové místo? Tohle dilema průzkumu vs. využití řeší každý doporučovací systém neustále.

Využití = doporučuj věci, o kterých algoritmus ví, že se ti líbí. Jistota, ale uvízneš na místě. Průzkum = ukaž něco nového, nejistého. Většina tě nezaujme, ale jeden objev může otevřít úplně nový zájem.

Řešení? Banditové algoritmy. Začni s hodně průzkumem. Jak se dozvídáš, co funguje, postupně přecházej k využití. Ale průzkum nikdy úplně nezastav — proto TikTok občas vloží do feedu video z tématu, které jsi nikdy nesledoval.

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
