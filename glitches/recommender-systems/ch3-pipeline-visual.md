---
id: ch3-pipeline-visual
topic: zpusoby
title: Sleduj skutečné doporučení na YouTube
teaser: Sleduj jedno doporučení od okamžiku otevření aplikace až po zobrazení na obrazovce.
hook: Co se děje za scénou?
---

Klepneš na YouTube. Za 0,1 sekundy systém shrne: posledních 10 sledovaných videí — 6 o Minecraftu, 2 o zvířatech. Čas: sobota 16:00 — obvykle sleduješ delší videa.

Za 0,2 sekundy spustí vyhledávání najednou: kolaborativní dá 200 kandidátů, filtrování podle obsahu 150, tvoje odběry 30, trending 50, průzkum 70. Celkem ~500 kandidátů za zlomek sekundy.

Za 0,4 sekundy každý kandidát dostane skóre: pravděpodobnost kliknutí, očekávaný čas sledování, pravděpodobnost lajku. Za 0,7 sekundy systém zkontroluje rozmanitost, čerstvost a vhodnost. Výsledek je na obrazovce dřív, než mrkneš.

? Jak YouTube najde 20 videí z 800 milionů za 0,2 sekundy?
- Náhodným výběrem z populárních videí
- Prohledáváním jen nových videí
* Doporučovací pipeline — rychlé hrubé filtry zúží miliony na 500 kandidátů, pak přesné seřazení vybere nejlepších 20
- Cachováním stejných výsledků pro všechny uživatele
! Přesně! Pipeline umožňuje zpracovat 800 milionů videí v milisekundách tím, že každá fáze dramaticky zúží počet kandidátů.

+++
Ty 0,7 sekundy celého procesu jsou v realitě rozloženy přes desítky fyzických serverů na různých místech světa. Když otevřeš YouTube v Praze, část výpočtu proběhne v datovém centru v Dublinu, část ve Frankfurtu a část možná ve Varšavě. Všechno je synchronizováno s přesností na milisekundy pomocí sofistikovaných distribuovaných systémů. Takový systém by v 90. letech potřeboval budovu plnou superpočítačů — dnes běží na stovkách standardních serverů.

Zajímavá je fáze diverzity a čerstvosti. Algoritmus by bez ní přirozeně zobrazoval podobná videa za sebou — pokud ti top 500 kandidátů je z velké části o Minecraftu, prvních 20 by bylo taky samé Minecraft. Proto systém záměrně zajišťuje, že ve finálním výběru je mix témat, délek a autorů. Tato fáze existuje ne proto, aby tě překvapila, ale proto, aby tvůj feed vypadal přirozeně a udržel tě déle u sledování.

Vidíš ty doporučení za 0,7 sekundy — ale ve skutečnosti jsou připravena dříve. YouTube předpočítává doporučení pro tebe kontinuálně i ve chvíli, kdy aplikaci právě nepoužíváš. Když ji otevřeš, doporučení jsou prakticky okamžitě k dispozici. Přepočítávají se každých pár minut v pozadí — takže „čerstvost" v twitteru doporučení se liší od platformy k platformě.
