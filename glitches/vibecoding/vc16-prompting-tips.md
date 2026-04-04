---
id: vc16-prompting-tips
topic: nastrojePro
title: Jak psát dobré prompty
teaser: Špatný prompt = frustrující výsledek. Dobrý prompt = magie.
hook: Jak psát správně?
---

Buď konkrétní a popisuj výsledek, ne proces: „Aplikace kde zadám cvičení — název, počet opakování, váha — uložím do databáze a vidím historii posledních 7 dní" je dobrý prompt. „Udělej fitness aplikaci" je špatný.

Přidávej jednu věc najednou a chyby popisuj přesně: „Když kliknu na Uložit, nic se nestane a v konzoli vidím chybu XYZ" je perfektní. „Nefunguje to" je k ničemu.

? Jaký prompt bude mít nejlepší výsledek?
- „Udělej cool aplikaci"
- „Potřebuju pomoc s projektem"
* „Aplikace pro sledování knih: název, autor, hodnocení 1–5, přečteno ano/ne. Seznam seřazený podle hodnocení."
- „Zkopíruj něco podobného jako Goodreads"
! Správně! Konkrétní popis s přesnými funkcemi, datovými poli a chováním dá AI přesně to, co potřebuje k dobrému výsledku.

+++
Promptování je nová dovednost, která vznikla s LLM, a začíná být seriózně vyučována. Stanford, MIT a desítky dalších univerzit nabízejí kurzy „prompt engineering." Výzkumy ukázaly, že způsob formulace promptu může změnit výsledek o 30–40 % — stejná otázka položená jinak dostane jiné a mnohdy lepší odpovědi. Je to méně o magii a více o tom, jak AI modely fungují a co jim pomáhá.

Pravidlo „jeden krok najednou" je důležité i pro správu kontextového okna. Pokud pošleš dlouhý prompt s 10 požadavky najednou, AI přirozeně upřednostní některé a jiné přehlédne. Je to jako zadávat úkoly zahlcenému kolegovi — lepší je jeden jasný úkol, potvrzení výsledku, pak další. Tato disciplína ti ušetří spoustu frustrací z neúplných nebo smíšených výsledků.

Chain-of-thought prompting (řetězové myšlení) je pokročilá technika — místo abys AI řekl „dej mi výsledek," řekneš „přemýšlej krok za krokem a pak mi dej výsledek." Výzkumy ukázaly, že tento přístup zvyšuje přesnost AI u složitých problémů o 20–40 %. Pro vibecoding to znamená: místo „přidej funkci pro export do PDF" zkus „přemysli, jak by fungoval export do PDF v mé aplikaci, a pak ho implementuj krok za krokem." Výsledky bývají výrazně lepší.
