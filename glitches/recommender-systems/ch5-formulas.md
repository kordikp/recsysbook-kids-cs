---
id: ch5-formulas
topic: postav
title: Matematika za doporučováním
teaser: Kosinová podobnost a nDCG — vzorce za doporučovači vysvětlené srozumitelně.
hook: Ale jak to funguje?
---

Kosinová podobnost: vynásob hodnocení párově, sečti, dělíš délkami vektorů. Výsledek 1 = dokonalá shoda, -1 = úplný opak, 0 = žádná podobnost.

Alex hodnotí [5, 4, 5], Sam [4, 3, 4]. Oba hodnotí ve stejném vzoru, jen Sam o trochu níž — kosinová podobnost to pozná a dá jim vysoké skóre.

? Co vlastně měří kosinová podobnost?
- Počet společně hodnocených filmů
- Průměr všech hodnocení obou uživatelů
* Úhel mezi dvěma vektory preferencí — stejný vzorec hodnocení i v různém měřítku dává vysokou podobnost
- Vzdálenost mezi dvěma uživateli v prostoru
! Přesně! Kosinová podobnost sleduje směr, ne velikost. Dva uživatelé hodnotící v přesně stejném pořadí mají podobnost 1 — i když jeden dává vždy o 2 hvězdičky méně.

+++
Kosinová podobnost má etymologii v trigonometrii — kosinus úhlu mezi dvěma vektory. Pokud dva vektory ukazují stejným směrem, úhel je 0° a cos(0°) = 1. Pokud jsou kolmé (žádná podobnost), úhel je 90° a cos(90°) = 0. Pokud ukazují opačně, úhel je 180° a cos(180°) = -1. Proto výsledek kosinové podobnosti je vždy mezi -1 a 1 — a interpretace je přirozená.

nDCG (normalized Discounted Cumulative Gain) je metrika, která se používá nejen pro doporučovací systémy, ale i pro vyhledávání a informační retrieval. Slovo „Discounted" (zdiskontovaný) odkazuje na to, že relevantní výsledek na pozici 5 je méně cenný než na pozici 1 — jsou tam logaritmické penalizace za polohu. „Cumulative" říká, že sčítáme přes celý seznam. „Normalized" znamená, že výsledek je normalizovaný na ideální hodnotu. Je to elegantní formule, která zachycuje intuici „správné věci na správném místě."

Pokud tě matematika za doporučováním láká, lineární algebra je klíčová disciplína k prostudování. Vektory, matice, jejich násobení a rozklady — to je základ. Khan Academy nebo 3Blue1Brown na YouTube mají skvělé bezplatné kurzy. Není potřeba jít hned na universitní úroveň — základní porozumění vektorovým operacím ti umožní číst výzkumné práce a porozumět kódu výrazně lépe.
