---
id: ch5-improve
topic: postav
title: Krok 4 — Udělej ho lepším
teaser: Tvůj systém funguje! Teď ho udělejme chytřejším.
hook: Jak ho udělat chytřejším?
---

Největší zlepšení jedním krokem: více dat. Víc hodnocení od víc lidí = více spojení a lepší předpovědi.

Kombinuj filtrování podle obsahu (žánr filmů) s kolaborativním. Sleduj, co lidé DĚLAJÍ — film sledovaný třikrát je oblíbenec, i bez hvězdičkového hodnocení. A každou změnu testuj A/B testem.

? Co je jediné největší zlepšení doporučovacího systému?
- Lepší algoritmus pro výpočet podobnosti
- Hezčí uživatelské rozhraní
* Více dat! Více uživatelů a hodnocení vytváří více spojení a lepší předpovědi
- Rychlejší server
! Přesně! Více dat je nejsilnější páka. Proto má Netflix tak dobré doporučení — 230 milionů uživatelů hodnotí tisíce filmů. Data poráží chytrost algoritmu.

+++
„Data poráží chytrost algoritmu" je v ML světě téměř axiom. Googlers Peter Norvig a Alon Halevy to popsali v slavném článku „The Unreasonable Effectiveness of Data" z roku 2009 — ukázali, že jednoduchý algoritmus s obrovským množstvím dat poráží sofistikovaný algoritmus s malým množstvím dat. To vysvětluje, proč velké firmy (Google, Meta, Amazon) jsou tak posedlé sběrem dat — je to jejich hlavní konkurenční výhoda.

Sledování implicitního chování namísto hodnocení je klíčový insight. Pokud film sleduje třikrát, je to silnější signál než pět hvězdiček — protože přehrání třikrát je aktivní akce bez sociálního tlaku. Systémy, které kombinují implicitní a explicitní signály, jsou přesnější než ty, které spoléhají jen na jedno. Ale vždy s preferencí implicitu: jsou dostupnější (každý uživatel je generuje) a méně zkreslitelné.

A/B testování každé změny je zdravá praxe nejen pro velké firmy. I tvůj mini systém lze testovat — například tak, že různým skupinám kamarádů ukážeš doporučení vytvořená různými metodami a zeptáš se, které považují za přesnější. Anebo sleduj, kolik z doporučených filmů si skutečně posléze kamarád objednal. Tato zpětná vazba, byť neformální, je v podstatě A/B test v miniaturním měřítku.
