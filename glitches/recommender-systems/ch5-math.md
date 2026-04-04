---
id: ch5-math
topic: postav
title: Matematika za podobností
teaser: Jak počítače měří podobnost pomocí kosinové podobnosti.
hook: Proč to funguje?
---

Metoda průměrného rozdílu je dobrý začátek. Ale co když někdo hodnotí vše nízko a jiný vše vysoko — přesto mají stejný vzorec preferencí?

Kosinová podobnost to řeší: místo čísel sleduje SMĚR. Alex [5, 4] a Sam [5, 5] ukazují téměř stejným směrem — vysoké skóre. Přísný hodnotitel, který nikdy nedá 5 hvězdiček, ale hodnotí ve stejném pořadí jako ty, je ti stále podobný.

? Co měří kosinová podobnost?
- Průměrný rozdíl hodnocení dvou uživatelů
- Celkový počet společně hodnocených položek
* Úhel mezi dvěma vektory preferencí — stejný vzorec i v různém měřítku ukazuje vysokou podobnost
- Počet shodných hodnocení
! Přesně! Kosinová podobnost se stará o vzorec, ne o absolutní hodnoty. Přísný hodnotitel může být tvůj vkusový dvojník, i když nikdy nedá 5 hvězdiček.

+++
Pearsonova korelace je alternativa k průměrnému rozdílu a kosinové podobnosti, která ještě lépe zvládá přísné vs. benevolentní hodnotitele. Pearsonova korelace normalizuje hodnocení každého uživatele kolem jeho průměru — takže přísný hodnotitel s průměrem 2/5 a benevolentní s průměrem 4/5 jsou srovnatelní, pokud jejich relativní hodnocení odpovídají. Pro velká data je přesnější, ale výpočetně náročnější.

Různé metriky podobnosti dávají různé výsledky na různých typech dat. Pro řídké matice (málo společně hodnocených filmů) funguje lépe kosinová podobnost. Pro husté matice s hodně hodnoceními je lepší Pearsonova korelace. Pro data, kde záleží na pořadí víc než na absolutních číslech, existují rank-based metriky jako Spearmanův korelační koeficient. Výběr správné metriky je sama o sobě designové rozhodnutí.

Matematika za doporučováním je přístupná i bez pokročilé algebry. Pokud víš, co je průměr, součin a odmocnina, dokážeš implementovat základní kosinovou podobnost. Výzva není v matematice samotné, ale v programování a škálování — jak efektivně spočítat tuto metriku pro miliony párů. Proto datová věda kombinuje matematiku s programováním — každé samo o sobě nestačí.
