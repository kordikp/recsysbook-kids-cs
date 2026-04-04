---
id: ch5-spreadsheet
topic: postav
title: Postav to v tabulce
teaser: Google Sheets jako tvůj první doporučovací engine — s barevnými vzorci.
hook: Postavíš to dnes?
---

Otevři Google Sheets. Buňka A1: „Jméno". B1 až K1: názvy filmů. Řádky 2 a dál: jména lidí s hodnoceními 1–5. Prázdná buňka = neviděl.

Trik: vyber všechna hodnocení a použij podmíněné formátování — červená pro 1–2, žlutá pro 3, zelená pro 4–5. Najednou vizuálně vidíš vzorce vkusu, aniž bys počítal jedinou cifru.

? Proč ti tabulkový procesor pomůže postavit doporučení?
- Automaticky vypočítá doporučení bez vstupu uživatele
- Synchronizuje data s filmovými databázemi
* Barevně označená hodnocení odhalují vzorce vkusu vizuálně — vidíš podobnosti ještě před jakoukoli matematikou
- Ukládá data do cloudu pro sdílení
! Přesně! Podmíněné formátování v tabulce ti umožní vizuálně rozpoznat vkusové vzorce a podobné uživatele — ještě před tím, než uděláš jakýkoli výpočet.

+++
Vizualizace dat je v datové vědě téměř stejně důležitá jako matematika. Před tím, než začneš počítat, je vždy dobré se na data podívat — co vidíš, jaké vzory jsou nápadné, jsou tam outlieři nebo neočekávané hodnoty? Barevná tabulka je primitivní vizualizace, ale přesně tento princip používají sofistikované nástroje jako Tableau nebo Power BI, jen s daleko více možnostmi.

Tabulkový procesor má překvapivé možnosti pro datovou analýzu. Google Sheets a Excel umí průměry, podmíněné formátování, korelační koeficienty i základní vizualizace — to stačí pro miniaturní doporučovací systém. Firmy jako Recombee ale zpracovávají miliardy řádků dat za sekundu, kde tabulkový procesor absolutně nestačí — tam nastupují specializované databáze a výpočetní frameworky.

Dobrá vizualizace odhalí i problémy v datech. Pokud v tabulce vidíš, že jeden člověk dal všem filmům 5 hvězdiček — to je buď někdo, kdo všechno miluje, nebo někdo, kdo se nesnaží hodnotit upřímně. Takový uživatel je „šumivý" — jeho hodnocení nemají diskriminační hodnotu. Čištění dat (odstraňování nebo korekce takových záznamů) je v praxi 80 % práce datového vědce. Data z reálného světa jsou vždy špinavá.
