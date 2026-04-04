---
id: ch3-two-tower
topic: zpusoby
title: Architektura dvou věží
teaser: Jak moderní systémy párují uživatele a položky bleskovou rychlostí.
hook: Ale jak to funguje?
---

Architektura dvou věží je populární design na YouTube, Instagramu i TikToku. Věž uživatelů: neuronová síť vezme vše o tobě a vytvoří jeden embedding. Věž položek: druhá síť vezme vše o videu a vytvoří embedding stejné velikosti. Jsou-li tvůj vektor a vektor videa blízko — systém předpovídá, že se ti bude líbit.

Genialita je v oddělení: embeddingy položek se předpočítají a uloží. Když otevřeš aplikaci, jen TVŮJ embedding se spočítá nově — pak stačí najít nejbližší sousedy v připraveném indexu. Trvá to milisekundy.

YouTube má 800 milionů videí. Nemůžeš každé zvlášť ohodnotit — ale MŮŽEŠ prohledat předpřipravený index a najít shody s tvým uživatelským embeddingem.

? Co jsou dvě věže v architektuře dvou věží?
- Dva datové servery ve dvou různých zemích
- Dva různé algoritmy pro různé věkové skupiny
* Jedna věž kóduje uživatele a druhá položky — obě produkují embeddingy ve stejném prostoru
- Dva typy doporučení: populární a personalizovaná
! Přesně! Dvě věže fungují nezávisle — věž položek vytváří embeddingy předem, věž uživatelů je aktualizuje v reálném čase. Proto je systém tak rychlý.

+++
Architektura dvou věží je geniální kvůli asymetrii v nákladech. Věž položek přepočítává embeddingy jednou za čas — nové video se zpracuje při nahrání, pak je uloženo. Věž uživatelů musí reagovat v reálném čase na každou akci — nové kliknutí, nové vyhledávání. Oddělením těchto dvou věží YouTube nemusí přepočítávat embeddingy 800 milionů videí pokaždé, když otevřeš aplikaci. Počítá jen tvůj uživatelský embedding.

Hledání „nejbližších sousedů" (Approximate Nearest Neighbor Search) v prostoru s miliardami vektorů je samo o sobě složitá technická výzva. Firmy jako Spotify, Pinterest a Meta vyvíjely vlastní specializované algoritmy a databáze pro toto hledání — a pak je zveřejnily jako open source (Spotify ANNOY, Facebook Faiss, Google ScaNN). Tato spolupráce v základním výzkumu je fascinující — firmy jinak konkurenti sdílejí klíčové technologie, protože každému závisí na tom, aby byl celý ekosystém lepší.

Věže se trénují společně — systém se naučí, jak převádět uživatele a položky do stejného prostoru tak, aby podobné páry (uživatel × položka, která se mu líbila) byly blízko. Toto trénování potřebuje negativní příklady — videa, která uživatel NEviděl nebo mu NEudělala radost. Jak systém ví, co jsou dobré negativní příklady? To je samo o sobě velký výzkumný problém, protože „uživatel video neviděl" nemusí znamenat, že by se mu nelíbilo — možná o něm prostě nevěděl.
