---
id: ch3-matrix-factorization
topic: zpusoby
title: Maticová faktorizace — metoda Netflixu
teaser: Jak Netflix zkomprimoval miliony hodnocení do skrytých dimenzí vkusu.
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
