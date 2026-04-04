---
id: ch2-cold-start
topic: jakSeUci
title: Problém studeného startu
teaser: Nový účet, nula indicií — co teď?
hook: Tak jak na to?
---

Vytvořil sis nový účet a doporučení jsou divná, obecná, nudná? Systém o tobě nemá nula dat — takže ukazuje to, co ukazuje všem. Jako být nový ve třídě: první den tě nikdo nezná, mluvíte o populárních věcech.

Ale dej tomu týden. Začneš se projevovat — a algoritmus si začne budovat obrázek. Po prvním týdnu jsou doporučení skutečně tvá.

? Co je problém studeného startu?
- Aplikace je příliš pomalá při spuštění
- Algoritmus zapomíná tvou historii po každém restartu
* Nový účet nemá žádná data — systém neví, kdo jsi, a ukazuje populární obsah pro všechny
- Studený počítač dělá chyby ve výpočtech
! Přesně! Bez dat o tobě systém neví, co doporučit — proto na začátku vidíš obecná populární doporučení, dokud ho nenautrénuješ svým chováním.

+++
Problém studeného startu má dvě strany: nový uživatel (o tobě nemáme data) a nová položka (o tomto videu/songu nemáme data). Nová položka je v některých ohledech ještě těžší — na YouTube se nahraje každou minutu 500 hodin nového obsahu. Jak algoritmus ví, komu doporučit video, které před hodinou vůbec neexistovalo a nikdo ho ještě neviděl?

TikTok tohle řeší geniálně: každé nové video nejdřív ukáže malé skupině 100–500 náhodně vybraných uživatelů. Pokud tato skupinka reaguje dobře (sledují déle, lajkují, sdílejí), video postoupí na skupinu 5 000, pak 50 000 atd. Tím si systém rychle vybuduje data i pro nový obsah — a zároveň každý tvůrce dostane fér šanci, bez ohledu na to, kolik followerů má.

Spotify řeší problém nového uživatele chytře při onboardingu — při registraci tě požádá, aby sis vybral/a pár žánrů a umělců. Nejde jen o to, aby doporučení okamžitě vypadala dobře. Jde i o psychologii: když sám něco vybereš, aplikace ti přijde osobnější a je větší šance, že ji budeš dál používat. Takže onboardingové otázky jsou zároveň sběr dat i marketing.
