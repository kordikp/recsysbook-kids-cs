---
id: ch3-matrix-factorization
topic: zpusoby
title: Maticová faktorizace — metoda Netflixu
teaser: Jak Netflix zkomprimoval miliony hodnocení do skrytých dimenzí vkusu.
hook: Skryté dimenze vkusu?!
---

Netflix má 230 milionů uživatelů a 15 000 filmů. Tabulka hodnocení by měla 3,4 bilionu buněk — a 99 % by bylo prázdných.

Maticová faktorizace říká: neuchovávej tu obrovskou tabulku. Místo toho popiš každého uživatele a každou položku krátkým seznamem skrytých čísel — třeba 50. Tato čísla zachycují skryté dimenze vkusu: „Jak moc má rád akci?" „Preferuje temný nebo odlehčený obsah?"

Systém tato čísla nikdy nezná předem — objeví je sám z vzorců v hodnoceních. Pak vynásobí vektory uživatele a položky zpět a dostane předpovězené hodnocení. Přesně tato technika vyhrála milionovou cenu Netflixu.

? Co dělá maticová faktorizace s obrovskou maticí hodnocení?
- Ukládá ji komprimovanou na disk
- Ignoruje prázdné buňky a počítá jen vyplněné
* Rozloží ji na dvě menší matice — pro uživatele a položky — každá s latentními dimenzemi vkusu
- Převede hodnocení na binární hodnoty ano/ne
! Přesně! Rozkladem na dvě menší matice systém odhalí skryté dimenze vkusu a dokáže předpovědět hodnocení pro položky, které uživatel nikdy neviděl.

+++
Skryté dimenze jsou záhadné a fascinující. Nikdo je systému nepojmenoval — systém si je sám vymyslel z dat. V praxi vědci někdy zkoumají, co tyto dimenze zachycují. V analýzách filmových dat se ukázalo, že jedna dimenze zachycuje přibližně „mainstreamové vs. artové filmy," jiná „vážné vs. komediální," další „americké vs. evropské." Ale systém si také vymýšlí dimenze, které žádné přímé pojmenování nemají — zachycují subtilní vzory, které lidé nedokážou jednoduše popsat.

Maticová faktorizace je matematicky ekvivalentní jiným metodám — jako jsou singulárně hodnotový rozklad (SVD) nebo analýza hlavních komponentů (PCA). Tyto techniky se používají i mimo doporučovací systémy: ke kompresi obrázků, analýze genů v biologii nebo k redukci šumu v signálech. Je fascinující, že stejná matematika funguje pro tak různorodé problémy.

Jedním z největších problémů maticové faktorizace v praxi je škálování. Když Netflix přidá 1 milion nových uživatelů nebo 1 000 nových filmů, musí přepočítat celou faktorizaci — a to trvá hodiny na serverové farmě. Proto moderní systémy jako Netflix nepoužívají čistou maticovou faktorizaci, ale přechází na online algoritmy, které se učí inkrementálně z každé nové interakce, bez nutnosti přepočítat vše od začátku.
