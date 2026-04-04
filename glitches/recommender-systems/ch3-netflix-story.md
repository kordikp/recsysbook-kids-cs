---
id: ch3-netflix-story
topic: zpusoby
title: Milionová doporučovací soutěž
teaser: Netflix nabídl 1 000 000 dolarů každému, kdo dokáže zlepšit jeho doporučování o 10 %.
hook: Kdo ten milion vyhrál?
---

V roce 2006 Netflix vyhlásil soutěž: milion dolarů pro každého, kdo zlepší filmová doporučení o 10 %. Zveřejnili 100 milionů hodnocení od 480 000 uživatelů. Přihlásilo se 40 000 týmů ze 186 zemí.

Po třech letech tým „BellKor's Pragmatic Chaos" překročil 10% zlepšení. Vyhráli milion dolarů!

A tady přichází překvapení: Netflix vítězné řešení nikdy nepoužil. Bylo příliš složité — kombinovalo stovky metod a nedalo se provozovat v reálném čase pro miliony uživatelů. Jednodušší přístup, skoro stejně dobrý, ale stokrát rychlejší, byl praktičtější.

? Jakou lekci přinesla soutěž Netflix Prize?
- Složitější algoritmy jsou vždy lepší
- Data jsou důležitější než algoritmy
* Větší přesnost nevždy vyhrává — rychlost a jednoduchost jsou v reálných systémech důležitější než dokonalost
- Větší týmy vždy porazí menší
! Přesně! Vítězné řešení bylo příliš složité na provoz. Dost dobré a rychlé poráží dokonalé a pomalé — to platí v mnoha oblastech inženýrství.

+++
Netflix Prize je legendární v světě strojového učení a datové vědy — ale má i zajímavý etický aspekt. Netflix zveřejnil 100 milionů anonymizovaných hodnocení, ale výzkumníci z University of Texas brzy dokázali de-anonymizovat část dat kombinací s veřejnými hodnoceními na IMDb. Ukázalo se, že „anonymní" data nejsou tak anonymní, jak Netflix tvrdil. To vedlo k tomu, že plánované Netflix Prize 2 bylo zrušeno po soudní žalobě kvůli ochraně soukromí.

Vítězný tým BellKor's Pragmatic Chaos byl koalicí tří týmů, které se spojily v posledních týdnech závodu — každý tým pracoval nezávisle a pak kombinoval výsledky. Tato technika „ensemblingu" (kombinace více modelů) přitom přinesla poslední rozhodující zlepšení. Systém, který vyhrál, byl v podstatě super-komplexní kombinace přibližně 100 různých algoritmů. To je také důvod, proč ho Netflix nemohl provozovat.

Lekce z Netflix Prize rezonuje dodnes: v ML soutěžích optimalizujete pro jedno číslo (přesnost na testovacím datasetu). V reálném světě musíte optimalizovat pro desítky věcí najednou — přesnost, rychlost, cenu, škálovatelnost, vysvětlitelnost a bezpečnost. Proto nejlepší Kagglers (vítězové ML soutěží) ne vždy bývají nejlepší inženýři produkčních systémů.
