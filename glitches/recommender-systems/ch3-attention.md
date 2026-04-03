---
id: ch3-attention
topic: zpusoby
title: Self-attention — ne každý klik je stejně důležitý
teaser: Proč film, co jsi sledoval včera, je důležitější než ten z před 3 měsíců.
hook: Jenže jak to možné?
---

Za poslední rok jsi zhlédl 500 videí. Má YouTube zacházet se všemi stejně? Samozřejmě ne — kuchařská show z před 3 měsíců je mnohem méně relevantní než sci-fi film, co jsi sledoval včera.

Self-attention (klíčová technologie za transformery — stejná jako za ChatGPT) řeší toto přiřazením váhy každé položce v tvé historii. Nedávné položky a položky podobné tomu, co teď prohlížíš, dostávají vysoké váhy. Staré nebo náhodné kliky dostávají váhy nízké.

Výsledek: doporučení reaguje na tvoji aktuální náladu a kontext. Pondělní ranní hudba dostane jiné váhy v pátek večer. Proto doporučení dnes působí tak chytře — systém se zaměří na 5 relevantních položek z tvé historie a ignoruje zbylých 495.

? Proč doporučovač nezachází se všemi tvými minulými interakcemi stejně?
- Starší interakce jsou uloženy na pomalejším serveru
- Algoritmus náhodně vybírá, co počítat
* Nedávné a kontextově relevantní interakce jsou mnohem cennější — self-attention se naučí, na které se zaměřit
- Systém má kapacitu jen na posledních 10 interakcí
! Přesně! Self-attention přiřazuje různé váhy různým historickým interakcím podle kontextu. Proto stejná historie dává různá doporučení ráno a večer.
