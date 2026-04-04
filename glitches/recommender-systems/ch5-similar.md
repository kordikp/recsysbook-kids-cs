---
id: ch5-similar
topic: postav
title: Krok 2 — Najdi podobné lidi
teaser: Kdo má stejný vkus? Najdi svoje filmové dvojníky.
hook: Kdo je tvůj filmový dvojník?
---

Alex a Sam — oba dali Frozenu 5 hvězdiček, Spider-Manovi 3, Moaně a Encantu podobné. Průměrný rozdíl hodnocení: 0,5. Velmi podobní!

Alex a Jordan — Frozen: Alex 5, Jordan 2 (rozdíl 3). Moana: Alex 4, Jordan 2 (rozdíl 2). Průměrný rozdíl: přes 2. Úplně různý vkus.

Klíčová myšlenka: nižší průměrný rozdíl = podobnější vkus. Teď, když víš, kdo je komu podobný, můžeš předpovídat: Sam neviděl Naruby 2, ale Alex ho miloval. Sam a Alex jsou skoro stejní → Sam ho bude mít pravděpodobně taky rád!

? Jak najdeš sousedy vkusu?
- Porovnáš jejich věk a pohlaví
- Podíváš se, kdo sleduje stejné kanály
* Porovnáš hodnocení u společných položek — nižší průměrný rozdíl znamená podobnější vkus
- Zeptáš se jich na oblíbené žánry
! Přesně! Matematická podobnost hodnocení odhalí vkusové dvojníky. Čím menší průměrný rozdíl ve sdílených hodnoceních, tím podobnější vkus.

+++
Výpočet podobnosti na papíře je elegantní způsob, jak pochopit, co dělá počítač. Ale v produkčním systému musíš spočítat podobnost pro každý pár uživatelů — a to je obrovský počet výpočtů. Netflix s 230 miliony uživateli má přibližně 26 kvadrilionů párů. I kdybys jeden výpočet zvládl za nanosekundu, trvalo by ti to miliony let. Proto se používají aproximativní metody a předpočítávání.

Lokální vs. globální dvojníci jsou zajímavý koncept. Tvůj globální vkusový dvojník je člověk, s nímž souhlasíš ve všem — ale takový ideální dvojník existuje jen vzácně. Lokální dvojník je člověk, s nímž souhlasíš v konkrétní kategorii — třeba animovaných filmech. Moderní systémy používají lokální dvojníky: místo hledání „nejpodobnějšího uživatele" hledají „nejpodobnějšího uživatele pro tuto kategorii." Výsledky jsou přesnější.

Překvapivé je, jak moc může zdánlivě odlišný člověk být tvůj vkusový dvojník. Výzkumy ukázaly, že věk, pohlaví ani kulturní background nejsou dobré prediktory vkusové podobnosti — daleko lepším prediktorem je přísné chování (sklonem přeskakovat rychle) nebo zvyk sledovat krátce vs. dlouhé formáty. Dva lidé z různých světů mohou mít identický vkus na thrillery, přestože nemají nic jiného společného.
