---
id: vc12-macaly-global-styles
topic: macaly
title: Global Styles — jeden styl pro celou aplikaci
teaser: Změníš barvu jednou — změní se všude. Magie konzistentního designu.
hook: Jak to funguje?
---

Chceš změnit modrou na zelenou — ale modrá je na 15 místech v aplikaci. Musíš to říct 15krát? Ne. Global Styles = centrální nastavení: definuješ jednou, platí všude.

„Moderní minimalistický design. Tmavé pozadí, světlý text, akcentová barva tyrkysová, zaoblené rohy." Nastavíš jednou, celá aplikace vypadá konzistentně.

? K čemu slouží Global Styles v Macaly?
- K nastavení globálního hesla pro celý projekt
- K synchronizaci aplikace mezi zařízeními
* K definování jednotného vizuálního stylu, který platí pro celou aplikaci najednou
- K exportu aplikace na různé platformy
! Správně! Global Styles ti umožní nastavit design jednou (barvy, fonty, zaoblení...) a tento styl se automaticky aplikuje na celou aplikaci konzistentně.

+++
Global Styles jsou implementací principu DRY — Don't Repeat Yourself (neopakuj se). Je to jeden ze základních principů dobrého programování. Pokud máš barvu na 15 místech a změníš ji na každém místě zvlášť, pravděpodobně na jedno místo zapomeneš a aplikace bude nekonzistentní. Global Styles toto řeší: jedna změna, všude se projeví. Profesionální webové aplikace používají CSS variables nebo design tokeny — přesně pro stejný účel.

Design tokeny jsou moderní verzí Global Styles v profesionálním světě. Firmy jako Airbnb, Google nebo Spotify definují celý vizuální systém jako sadu proměnných — primary-color: #FF5A5F, border-radius-medium: 8px, font-size-body: 16px. Tyto proměnné pak platí pro web, mobilní aplikaci i marketingové materiály. Konzistentní identita značky je postavena na tomto principu. Macaly Global Styles je přístupnější verze téhož.

Vizuální konzistence má přímý vliv na vnímání kvality. Výzkumy UX designu ukazují, že uživatelé vnímají aplikaci s konzistentním designem jako „profesionálnější" a „spolehlivější" — i bez ohledu na funkční kvalitu. Konzistentní barvy, fonty a rozestupy jsou zkratkou k důvěryhodnosti. Proto Global Styles není jen estetická záležitost — je to součást toho, jak tvoje aplikace bude vypadat v očích ostatních.
