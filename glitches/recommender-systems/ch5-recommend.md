---
id: ch5-recommend
topic: postav
title: Krok 3 — Vytvoř předpovědi
teaser: Použij podobné uživatele k předpovídání hodnocení a vytvoř skutečná doporučení.
hook: Tak jak na to?
---

Pro každou prázdnou buňku v matici (film, který někdo neviděl): najdi 2–3 nejpodobnější lidi, kteří ten film hodnotili, podívej se na jejich hodnocení, vypočítej průměr. Tento průměr je tvoje předpovězené hodnocení.

Sam neviděl Mario. Alex (velmi podobný Samovi) ohodnotil: 3 hvězdičky. Maya (středně podobná): 4 hvězdičky. Předpověď: (3 + 4) / 2 = 3,5 hvězdičky.

Udělej to pro KAŽDÝ film, který Sam neviděl. Pak seřaď podle předpovězených hodnocení od nejvyššího. Filmy nad 4 hvězdičky — doporuč. Pod 3 hvězdičky — nedoporučuj. Hotovo — máš doporučení!

? Jak předpovíš hodnocení neviděné položky?
- Vezmeš průměr hodnocení od všech uživatelů
- Podíváš se na hodnocení kritiků v médiích
* Najdeš 2–3 nejpodobnější uživatele, kteří ji hodnotili, a zprůměruješ jejich hodnocení
- Náhodně přiřadíš hodnocení mezi 1 a 5
! Přesně! Průměr hodnocení od vkusových dvojníků je jednoduchá, ale účinná metoda předpovídání. Čím přesnější jsou skóre podobnosti, tím lepší jsou předpovědi.

+++
Vážený průměr (weighted average) je vylepšení čistého průměru — místo aby každý vkusový dvojník měl stejnou váhu, dostane váhu podle míry své podobnosti s tebou. Alex, který s tebou souhlasí v 9 z 10 filmů, má větší váhu než Maya, která souhlasí v 6 z 10. Výsledné předpovědi jsou přesnější. Tato technika se nazývá user-based collaborative filtering s váženým průměrem a je přesnější než jednoduchý průměr ve většině případů.

Mimořádně zajímavý problém nastane, když různí dvojníci dají diametrálně odlišná hodnocení — Alex dal Mariu 5 hvězdiček, Maya dala 1. Co předpovíš Samovi? Jednoduchý průměr dá 3, ale to nic neříká. Sofistikované systémy v tomto případě uznají nejistotu a buď doporučení vynechají, nebo ho označí jako „nízká spolehlivost." Je lepší neříct nic než říct nepřesnou předpověď.

Předpovědi s práhovými hodnoceními (4 hvězdičky = doporuč) jsou jednoduchý, ale účinný přístup. Netflix a Spotify neříkají „tento film dostane 4,2 hvězdičky" — říkají „tento film se ti pravděpodobně bude líbit." Binární předpověď (ano/ne) je konzervativnější a méně náchylná na chyby než přesné číselné předpovědi. Proto palec nahoru/dolů funguje lépe než 5-hvězdičkové hodnocení.
