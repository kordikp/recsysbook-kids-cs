---
id: ch3-speed
topic: zpusoby
title: Čísla, která ti vezmou dech!
teaser: 800 milionů videí. 0,2 sekundy. Čísla za YouTube doporučeními jsou naprosto šílená.
hook: Ta čísla tě dostanou →
---

YouTube má 800 milionů videí. Celý pipeline — projít kandidáty, seřadit, zkontrolovat — musí proběhnout za méně než 200 milisekund. To je rychleji, než mrkneš (mrknutí trvá 300–400 ms).

Kdybys lidský knihovník procházel 800 milionů videí rychlostí jedno video za sekundu, trvalo by mu to 25 LET. YouTube to zvládne dřív, než stihneš mrknout.

Jak? Pipeline! Rychlé hrubé filtry zúží miliony na tisíce, chytřejší metody pak tisíce na stovky, nejchytřejší logika zpracuje jen pár stovek. Jako hledat jehlu v kupce sena tím, že se nejdřív zbavíš 99 % sena.

? Jak dlouho by trvalo člověku udělat to, co YouTube zvládne za 1 sekundu?
- Hodinu
- Týden
* 25 LET! Proto potřebujeme algoritmy — takové měřítko je pro lidi nemyslitelné
- Jeden den
! Přesně! Při jednom videu za sekundu by procházení 800 milionů videí trvalo 25 let. Algoritmy to zvládnou za zlomek sekundy díky chytrému pipeline designu.

+++
200 milisekund je hranice, za kterou si lidé začínají uvědomovat zpomalení — vědecky se tomu říká „just noticeable delay." Pokud stránka načítá déle než 200 ms, začínáš být nervózní. Pokud déle než 1 sekundu, pravděpodobně ji zavřeš. Proto jsou doporučovací systémy navrženy tak, aby odpovídaly pod touto hranicí — a proto jsou technicky tak náročné. Pomalejší algoritmus, byť přesnější, ve výsledku selhává, protože ho nikdo nečeká.

Infrastruktura za YouTube je obrovská. Google (který YouTube vlastní) provozuje přes 1 milion serverů v datových centrech po celém světě. Jen pro YouTube doporučení existují stovky specializovaných serverů, jejichž jediný úkol je počítat embeddingy a hledat nejbližší sousedy. Roční náklady na provoz YouTube jsou tajné, ale odhaady mluví o miliardách dolarů jen za servery — přičemž velká část jde na doporučovací pipeline.

Zajímavý kontrast: Netflix s menším katalogem (15 000 filmů vs. 800 milionů videí) si může dovolit pomalejší a přesnější algoritmy. Netflix typicky počítá doporučení v dávkách každých pár hodin, ne v reálném čase. YouTube musí reagovat okamžitě, protože nový obsah vzniká každou minutu. Tato odlišná technická omezení vedou k různým architekturám, přestože oba systémy dělají „to samé."
