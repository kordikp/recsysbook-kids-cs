---
id: ch3-two-tower
topic: zpusoby
title: Architektura dvou věží
teaser: Jak moderní systémy párují uživatele a položky bleskovou rychlostí.
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
