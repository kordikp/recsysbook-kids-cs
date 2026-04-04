---
id: ch5-start
topic: postav
title: Tohle fakt zvládneš
teaser: Naučil ses, jak doporučení fungují. Teď je čas postavit jedno vlastní.
hook: Jsi připravený stavět?
---

Naučil ses o kolaborativním filtrování, filtračních bublinách, spravedlnosti a A/B testech. Víš o tom víc než většina dospělých. A teď přichází ta zábavná část: postavíš si vlastní doporučovací systém.

Nepotřebuješ programovat. Na první verzi stačí tužka, papír a základní matematika. Plán je čtyři kroky: sbírej data od kamarádů, najdi podobné lidi, předpovídej a testuj.

Na konci budeš mít postavený stejný základní systém, který Netflix používal, když s doporučováním filmů začínal. Připravený?

? Jaké jsou 4 kroky k sestavení doporučovacího systému?
- Nainstaluj software, připoj databázi, naprogramuj algoritmus, spusť
- Sbírej uživatele, zobrazuj reklamy, měř kliknutí, optimalizuj
* Sbírej data → hledej podobné uživatele → vytvárej předpovědi → testuj a zlepšuj
- Hledej data, čisti data, vizualizuj data, prezentuj data
! Přesně! Čtyři základní kroky: data, podobnost, předpovědi, testování. Tato smyčka je základem každého doporučovacího systému — od tvého papírového projektu po Netflix.

+++
„Postav první, optimalizuj druhé" je zlaté pravidlo softwarového vývoje. Netflix nezačal s maticovou faktorizací a neuronovými sítěmi — začal s jednoduchými pravidly a postupně přidával komplexitu, kde dat ukazovalo, že to pomáhá. Stejně tak tvůj ruční experiment s papírem a tužkou je legitimní první verze — a lepší výchozí bod než žádný.

Smyčka data → podobnost → předpovědi → testování se neuzavírá — je to iterativní cyklus. Po každém testování zjistíš, kde systém selhává, a vrátíš se zpět ke sběru dat, výpočtu podobnosti nebo způsobu předpovídání. Reálné systémy nikdy nejsou „hotové" — Netflix, YouTube, Spotify všechny neustále iterují. To je důvod, proč se doporučení každý rok zlepšují.

Tvůj projekt s kamarády má jednu výhodu, kterou velké systémy nemají: můžeš se přímo zeptat. Pokud tvoje předpověď pro Samu byla špatná, zavolej Samovi a zeptej se proč film neměl rád. Tato přímá zpětná vazba je nenahraditelná a v produkčních systémech prakticky nedostupná — Netflix nemůže zavolat 230 milionům uživatelů. Využij tuto výhodu malého měřítka na maximum.
