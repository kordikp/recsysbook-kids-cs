---
id: ch5-real-numbers
topic: postav
title: Skutečná čísla ze světa
teaser: Tvůj doporučovač pro 5 kamarádů je roztomilý. Skutečné systémy pracují s čísly, která se sotva vejdou na stránku.
hook: Čísla, co ti vezmou dech →
---

Stavíš mini systém — 5 kamarádů, 6 filmů, 30 buněk. Netflix má 230 milionů uživatelů a 15 000 filmů: 3,4 BILIONU možných kombinací.

Spotify: 600 milionů uživatelů, 100 milionů písniček — 60 KVADRILIONŮ kombinací. YouTube: 2,7 miliardy uživatelů, 800 milionů videí — 2,16 KVINTILIONŮ kombinací.

Představ si tvou mřížku na lepítku. Netflixova ve stejném měřítku by pokryla povrch Země sedmtisíckrát. Spotifyho by sahala za Měsíc. YouTubova za celou sluneční soustavu. A přesto algoritmy nacházejí vzorce v těchto neuvěřitelně řídkých datech.

? Kolik možných kombinací uživatel-položka má Netflix?
- 230 milionů (počet uživatelů)
- 15 000 (počet filmů)
* 3,4 BILIONU! A většina buněk je prázdná
- 1 trilion
! Přesně! 230 milionů uživatelů × 15 000 filmů = 3,4 bilionu kombinací. Přesto algoritmy nacházejí vzorce v těchto řídkých datech — to je skutečná magie.

+++
Řídkost (sparsity) dat je jeden z klíčových problémů, ale zároveň jedna z klíčových příležitostí. Pokud by každý Netflix uživatel viděl každý film (tabulka by byla plná), doporučení by bylo jednoduché. Ale právě proto, že 99 % buněk je prázdných, je doporučení cenné — přesně ten 1 % věcí, které jsi viděl, říká víc o tobě než celá plná tabulka.

Astronomická čísla YouTube (2,16 kvintilionů kombinací) ukazují, proč přesné procházení celé matice není možné. YouTube to řeší předpočítanými embeddingy a přibližným hledáním nejbližšího souseda — místo přesného řešení hledá dostatečně dobré řešení za milisekundy. Toto je obecný princip: v inženýrství je „dost dobré a rychlé" lepší než „dokonalé a pomalé."

Zajímavé je srovnání s biologií. Lidský mozek má přibližně 100 miliard neuronů s 100 biliony spojení — to je 10^14 kombinací. Přesto mozek zpracovává informace v milisekundách, protože většina spojení je v daný moment neaktivních. Podobně doporučovací systém pracuje s řídkými maticemi, kde jen zlomek dat je relevantní pro konkrétního uživatele v konkrétní chvíli. Mozek a algoritmy řeší podobný problém podobnými principy.
