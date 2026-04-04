---
id: vc17-debugging
topic: nastrojePro
title: Když něco nefunguje — jak ladit
teaser: AI dělá chyby. Ale ví jak je opravit — když ji správně popíšeš.
hook: Jak ji naučíš opravit?
---

AI dělá chyby — to je normální. Klíč je přesný popis: „Tlačítko Přidat nefunguje. Vyplním formulář, kliknu, formulář zmizí, ale položka se neobjeví v seznamu." Otevři konzoli (F12) a zkopíruj červený text — to je zlatý důl pro AI.

Pokud oprava nepomůže, zkus „implementuj to jinak" nebo použij rollback na starší verzi. Chyby nejsou selhání — jsou to informace.

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
