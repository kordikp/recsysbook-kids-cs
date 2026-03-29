---
id: ch4-ab-d-exp
type: spine
title: "Spusť si vlastní A/B test"
readingTime: 3
standalone: false
teaser: "Experiment s hudební aplikací: která strategie doporučení zvítězí?"
voice: explorer
parent: null
diagram: kids-ab-test
recallQ: "Fungují personalizovaná doporučení skutečně lépe než ukáž jen populární?"
recallA: "Ano! Testy ukazují o 37 % více přehraných písniček, 4× více objevených umělců a vyšší zapojení díky personalizaci."
status: accepted
---

Pojďme si projít skutečný A/B test krok za krokem. Ty jsi hlavní inženýr v hudební streamovací aplikaci zvané „TuneUp". Tvůj úkol: zjistit nejlepší způsob doporučování písniček.

**Experiment:**

Máš dvě strategie doporučení:

**Strategie A – „Oblíbené hity"**
Ukaž všem stejných 30 nejpřehrávanějších písniček týdne. Jednoduché. Všichni dostanou hitparádu.

**Strategie B – „Osobní mix"**
Analyzuj poslechovou historii každého člověka. Najdi uživatele s podobným vkusem. Doporuč písničky, které tito podobní uživatelé milovali, ale tento člověk ještě neslyšel.

**Tví uživatelé:**

Náhodně rozdělíš 10 000 uživatelů do dvou stejných skupin. Dva týdny dostává skupina A Oblíbené hity a skupina B Osobní mix.

**Výsledky:**

| Co jsi měřil | Strategie A (Oblíbené) | Strategie B (Osobní) |
|---|---|---|
| Písničky přehrané za den | 8 | 11 |
| Přeskočené písničky (do 10 sekund) | 35 % | 15 % |
| Noví objevení umělci za týden | 1 | 4 |
| Uživatelé, kteří se vrátili každý den | 60 % | 78 % |
| Uživatelé, kteří v průzkumu řekli „Tuto aplikaci miluji" | 45 % | 72 % |

**Analýza výsledků:**

Strategie B (Osobní mix) vítězí v KAŽDÉM ukazateli:
- Lidé poslouchali **o 37 % více písniček** (11 vs. 8)
- Přeskakovali mnohem méně (**15 % vs. 35 %**) – doporučení byla přesnější
- Objevili **4× více nových umělců** – systém je seznámil s hudbou, kterou by nenašli sami
- Více lidí se vracelo denně (**78 % vs. 60 %**) – byli víc zapojení
- Mnohem více lidí aplikaci milovalo (**72 % vs. 45 %**)

**Ale pozor — je tu háček!**

Podívej se pozorněji. Strategie A má jednu skrytou výhodu: je MNOHEM levnější na provoz. Stačí ti seznam populárních písniček. Strategie B vyžaduje výkonné počítače zpracovávající data pro každého z 10 000 uživatelů zvlášť.

**Skutečná otázka:** Vyplatí se strategie B i přes vyšší cenu? V tomto případě jednoznačně ano — rozdíl je obrovský. Ale někdy jsou výsledky blíž u sebe a musíš se rozhodnout, jestli malé zlepšení stojí za extra složitost.

**Tvůj tah:** Co dalšího bys chtěl měřit? Přemýšlej o věcech, které se mohou projevit až po delší době – například jestli lidé aplikaci dál používají po měsíci, nebo jestli o ní říkají kamarádům. Nejlepší A/B testy neměří jen to, co se stane TENTO týden. Myslí na dlouhodobou hru.
