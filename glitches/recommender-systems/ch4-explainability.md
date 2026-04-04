---
id: ch4-explainability
topic: lepsi
title: Proč mi to TOHLE doporučilo?
teaser: Vidíš náhodný film na vrcholu feedu. Proč? Odpověď je složitější, než si myslíš.
hook: Proč zrovna tohle?
---

Otevřeš Netflix a na první pozici vidíš dokumentář o chobotnicích. Nikdy jsi nic o chobotnicích nesledoval. Proč tam je?

Jedno doporučení může zahrnovat: kolaborativní filtrování zjistilo, že podobní uživatelé tuto položku měli rádi; obsahová analýza ji označila jako podobnou tomu, co sis užil; průzkumný algoritmus se rozhodl zkusit něco nového; obchodní pravidla ji posílila jako novinku; filtr rozmanitosti ji umístil sem, aby přerušil sérii podobných položek.

Který z těchto důvodů byl „skutečný"? Všechny dohromady. Proto vysvětlení jako „Protože jsi sledoval X" jsou jen zjednodušené aproximace. Skutečný algoritmus použil stovky signálů.

? Proč platformy nemohou plně vysvětlit svá doporučení?
- Protože by tím prozradily obchodní tajemství
- Protože to uživatele nezajímá
* Neuronové sítě používají stovky signálů — ani inženýři nedokážou přesně vysledovat, proč byla vybrána jedna konkrétní položka
- Protože vysvětlení zpomalují systém
! Přesně! Moderní doporučovací systémy jsou příliš složité, aby šlo doporučení plně vysvětlit. Vysvětlení jako „Protože jsi sledoval X" jsou užitečné aproximace, ne úplná pravda.

+++
Problém nevysvětlitelnosti AI systémů se nazývá „black box" problém — z vnějšku vidíš vstupy a výstupy, ale ne co se děje uvnitř. Je to celospolečenský problém: soudní systémy v USA používají AI pro předpověď recidivizmu trestanců, ale soudci nedokážou vysvětlit, proč algoritmus konkrétního člověka označil jako rizikového. Banky odmítají půjčky na základě algoritmů, jejichž logiku neumí zákazníkovi vysvětlit. EU proto v AI Actu z roku 2024 zavedla povinnost vysvětlitelnosti pro „high-risk" AI systémy.

Existuje celé výzkumné odvětví věnované vysvětlitelné AI (XAI — Explainable AI). Vědci vyvíjejí techniky, jak zpětně reconstituovat, proč neuronová síť udělala konkrétní rozhodnutí. Jedna z technik se jmenuje LIME — vytvoří zjednodušený model, který chování neuronové sítě lokálně napodobuje a dá se vysvětlit. Není to dokonalé, ale pomáhá. Spotify tyto techniky používá, aby zjistil, která vlastnost písničky nejvíce ovlivnila její doporučení.

Chobotnicový dokumentár na prvním místě feedu je krásný příklad toho, jak doporučovací systém může být „správný" z datového pohledu, ale „záhadný" z uživatelského pohledu. Studie z Colorada ukázala, že uživatelé, kteří chápali (i nepřesně) důvod doporučení, ho sledovali o 27 % víc než ti, kteří nevěděli proč ho algoritmus ukázal. Vysvětlení zvyšuje důvěru a přijetí — i když není technicky přesné.
