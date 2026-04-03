---
id: ch5-formulas
topic: postav
title: Matematika za doporučováním
teaser: Kosinová podobnost a nDCG — vzorce za doporučovači vysvětlené srozumitelně.
---

Kosinová podobnost: sim(A,B) = (A·B) / (||A|| × ||B||). Vynásob hodnocení párově a sečti (skalární součin), pak dělíš délkami obou vektorů. Výsledek 1 = dokonalá shoda, -1 = úplný opak, 0 = žádná podobnost.

Příklad: Alex hodnotí [5, 4, 5], Sam hodnotí [4, 3, 4]. Skalární součin = 5×4 + 4×3 + 5×4 = 52. Podobnost ≈ 1,00. Sam hodnotí vše o trochu níž, ale ve stejném vzoru — kosinová podobnost to zachytí.

nDCG měří, jak dobré je seřazení doporučení: relevantní položky na vrcholu jsou cennější než na konci. Hodnota 1 = ideální seřazení, 0 = nejhorší možné. Takto se porovnávají různé algoritmy.

? Co vlastně měří kosinová podobnost?
- Počet společně hodnocených filmů
- Průměr všech hodnocení obou uživatelů
* Úhel mezi dvěma vektory preferencí — stejný vzorec hodnocení i v různém měřítku dává vysokou podobnost
- Vzdálenost mezi dvěma uživateli v prostoru
! Přesně! Kosinová podobnost sleduje směr, ne velikost. Dva uživatelé hodnotící v přesně stejném pořadí mají podobnost 1 — i když jeden dává vždy o 2 hvězdičky méně.
