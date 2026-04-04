---
id: vc13-macaly-memory
topic: macaly
title: Agent Memory — AI, která si pamatuje
teaser: Nemusíš pokaždé vysvětlovat kdo jsi a co děláš. Macaly si to pamatuje.
hook: AI, co si pamatuje vše?
---

Velký problém s AI: Normálně si nepamatuje nic z minulé konverzace. Každý nový chat začínáš od nuly. „Jsem student, dělám aplikaci pro sledování úkolů, preferuji tmavý design..."

Agent Memory v Macaly tento problém řeší. Macaly si ukládá kontext o tvém projektu — jak funguje, jaký je styl, co jsi už udělal/a.

Co si Agent Memory pamatuje? Strukturu projektu, tvoje preference, rozhodnutí, která jsi udělal/a, technické detaily implementace.

Praktický dopad: Příští den pokračuješ tam, kde jsi skončil/a. Nemusíš AI znovu vysvětlovat celý projekt. Prostě napíšeš „přidej funkci pro sdílení" — a AI ví, o jaké aplikaci mluví.

Ještě lepší: Agent Memory funguje i při přepínání mezi zařízeními. Začneš na počítači, pokračuješ na telefonu.

Toto je jedna z věcí, kde Macaly 3.0 udělala velký skok oproti předchozím verzím.

? Co řeší Agent Memory v Macaly?
- Automatické zálohování projektu do cloudu
- Sdílení projektu s kamarády
* To, že AI si pamatuje kontext projektu a nemusíš ho pokaždé znovu vysvětlovat
- Přeložení aplikace do různých jazyků
! Přesně! Agent Memory zajišťuje, že AI si pamatuje tvůj projekt, tvoje preference a rozhodnutí — takže vždy pokračuješ tam, kde jsi skončil/a.

+++
Problém kontextového okna je technickým základem toho, proč AI „zapomíná." LLM (velké jazykové modely) jako GPT-4 nebo Claude mají omezené kontextové okno — množství textu, které „udrží v hlavě" najednou. Starší modely měly okno 4 000 tokenů (zhruba 3 000 slov), novější mají 128 000 nebo více. Ale i velké okno nestačí pro dlouhé projekty. Agent Memory obchází tento limit ukládáním kontextu externě a načítáním relevantních částí podle potřeby.

Paměťové systémy pro AI jsou aktivní výzkumnou oblastí. OpenAI přidalo „Memory" funkci do ChatGPT v roce 2024 — AI si pamatuje fakta o tobě napříč konverzacemi (preferuješ stručné odpovědi, máš alergii na ořechy atd.). Anthropic (tvůrci Claude) pracuje na podobných systémech. Macaly Agent Memory je specifická implementace pro softwarové projekty — ukládá technický kontext, ne osobní informace.

Praktický důsledek dobré paměti je dramatický pro produktivitu. Bez paměti každé sezení začínáš od nuly: „Jsem ve 3. ročníku, dělám aplikaci X, používám technologii Y, chci design Z." To může trvat 5–10 minut pouze pro nastavení kontextu. S paměťovým systémem tento úvod odpadá a rovnou řešíš, co chceš. Při práci na komplexnějších projektech ušetříš hodiny týdně.
