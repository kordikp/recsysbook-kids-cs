---
id: ch3-cf-d-exp
type: spine
title: "Kolaborativní filtrování v akci"
readingTime: 3
standalone: false
teaser: "Vizuální tabulka, která přesně ukazuje, jak systém najde tvoje vkusové dvojníky."
voice: explorer
parent: null
diagram: diagram-cf-matrix
recallQ: "Co jsou vkusové dvojníky v kolaborativním filtrování?"
recallA: "Lidé, kteří měli rádi stejné věci jako ty. Pokud se jim líbí i něco nového, pravděpodobně se to bude líbit i tobě!"
status: accepted
---

Pojďme si vytvořit reálný příklad. Představ si šest dětí a pět filmů. Fajfka znamená, že se jim film líbil:

|  | Spider-Verse | Encanto | Mitchellovi | Červená | Nimona |
|---|---|---|---|---|---|
| **Ty** | ANO | ANO | ANO | ANO | ??? |
| **Maya** | ANO | ANO | ANO | ANO | ANO |
| **Jakub** | ANO |  | ANO |  | ANO |
| **Priya** |  | ANO |  | ANO |  |
| **Leo** | ANO | ANO | ANO | ANO | ANO |
| **Sam** |  |  | ANO |  | ANO |

## Krok 1: Najdi svoje vkusové dvojníky

Podívej se na tabulku. Kdo má rád stejné filmy jako ty?

- **Maya**: shoduje se s tebou ve VŠECH čtyřech filmech. Dokonalá shoda!
- **Leo**: také shoda ve všech čtyřech. Další dokonalá shoda!
- **Jakub**: shoda ve dvou ze čtyř. Celkem dobré.
- **Priya**: shoda ve dvou ze čtyř. Ujde to.
- **Sam**: shoda jen v jednom. Slabá shoda.

Systém seřadí všechny podle toho, jak moc se shodují s tebou. Maya a Leo jsou na vrcholu.

## Krok 2: Zkontroluj, co se tvým dvojníkům líbilo

Teď se podívej na sloupec „Nimona" u tvých nejlepších shod:

- Maya měla Nimonu ráda -- ANO
- Leo měl Nimonu rád -- ANO

Oba tvoji nejbližší vkusoví dvojníci ji milovali!

## Krok 3: Udělej doporučení

Systém je teď docela přesvědčen: **Nimona se ti bude líbit taky**.

Není to stoprocentní jistota. Možná se ti líbit nebude. Ale na základě tohoto vzoru je to velmi silný tip.

## Vyzkoušej to sám

Podívej se na tabulku znovu. Co bys doporučil **Priyě**? Ona měla ráda Encanto a Červenou. Kdo jiný měl rád tyto dva filmy? Ty, Maya a Leo. Co jiného všichni tři jste měli rádi? Spider-Verse a Mitchellovi! Takže systém by Priyě doporučil právě tyto filmy.

To je celý trik. Najdi podobné lidi, podívej se, co se jim líbilo, a doporuč to. Jednoduché — ale neuvěřitelně mocné, když to děláš s miliony uživatelů.
