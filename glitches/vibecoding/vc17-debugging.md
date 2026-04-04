---
id: vc17-debugging
topic: nastrojePro
title: Když něco nefunguje — jak ladit
teaser: AI dělá chyby. Ale ví jak je opravit — když ji správně popíšeš.
hook: Jak ji naučíš opravit?
---

AI dělá chyby. To je normální. Klíčová dovednost vibecoding není vyhýbání se chybám — je to efektivní opravování.

Krok 1 — Reprodukuj chybu. Klikni znovu na to co nefunguje. Stane se to vždy, nebo jen někdy? Na jakém kroce?

Krok 2 — Popiš AI přesně. „Tlačítko Přidat nefunguje. Vyplním formulář, kliknu na Přidat, formulář zmizí ale položka se neobjeví v seznamu." Přesný popis = rychlá oprava.

Krok 3 — Pokud máš chybovou hlášku, sdílej ji. V prohlížeči otevři vývojářské nástroje (F12), záložku Console. Pokud tam vidíš červený text, zkopíruj ho a vlož do chatu s AI.

Krok 4 — Pokud AI oprava nevyřeší problém, zkus jiný přístup. „Zkus to implementovat jinak" nebo „Pojď to udělat od začátku."

Krok 5 — Rollback. Macaly a jiné nástroje mají historii verzí. Pokud AI aplikaci „pokazila," vrať se ke starší verzi.

Mentální nastavení: Chyby nejsou selhání. Jsou to informace. Každá chyba tě naučí něco o tom, jak AI přemýšlí.

? Co je nejlepší udělat, když po příkazu AI aplikace nefunguje?
- Smazat celý projekt a začít znovu
- Obvinit AI ze špatné práce a zkusit jiný nástroj
* Přesně popsat co se stane a sdílet případnou chybovou hlášku z konzole
- Počkat den a doufat, že se to opraví samo
! Přesně! Přesný popis problému + chybová hláška z konzole jsou to nejcennější, co můžeš AI dát k opravení chyby.

+++
Vývojářské nástroje v prohlížeči (DevTools) jsou mocný nástroj, který většina lidí ignoruje. Klávesa F12 otevře celý svět diagnostiky — konzole zobrazuje chyby a výstupy kódu, síťová karta zobrazuje, jaká data aplikace posílá a přijímá, inspektor ukazuje HTML a CSS strukturu stránky. Profesionální vývojáři tráví v DevTools desítky procent svého pracovního dne. I základní znalost konzole — jak ji otevřít a přečíst červenou chybu — výrazně zvyšuje tvoji schopnost debugovat.

Debugování je umění — a je to dovednost, která se cení i více než psaní kódu. Výzkumy pracovního chování vývojářů ukazují, že průměrný senior vývojář tráví 50 % pracovní doby debugováním — hledáním a opravením chyb. Schopnost systematicky izolovat problém (co funguje? co ne? kdy se chyba stane? vždy nebo občas?) je cenná dovednost přenositelná daleko za hranice programování.

Mentální nastavení „chyby = informace, ne selhání" je klíčové pro zdravý přístup k vývoji. Nejvýznamnější inženýrské projekty moderní doby — od raket SpaceX po síťové protokoly internetu — jsou výsledkem tisíců iterací a opravených chyb. Edison prý řekl (i když je to možná apokryf): „Nenašel jsem způsob, jak nevynalézat žárovku — našel jsem 10 000 způsobů, jak to nefunguje." Každá opravená chyba je krok blíže k fungující aplikaci.
