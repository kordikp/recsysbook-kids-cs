# p-book: Jak funguje doporučování online?

**p-book** je otevřený standard pro tvorbu personalizovaných interaktivních digitálních knih poháněných doporučovacími enginy. Tento repozitář obsahuje českou verzi první p-book: **„Jak funguje doporučování online?"** — interaktivní knihu o doporučovacích systémech pro děti 8–15 let.

> **Verze 1.0** — První veřejné vydání. Projekt se bude dále vyvíjet na základě zpětné vazby uživatelů a výzkumu studujícího vliv jednotlivých funkcí na kvalitu učení a pohodu čtenáře.

## Živá ukázka

**[recsysbook-kids-cs.vercel.app](https://recsysbook-kids-cs.vercel.app)**

Anglická verze: **[recsysbook-kids.vercel.app](https://recsysbook-kids.vercel.app)** ([GitHub](https://github.com/kordikp/recsysbook-kids))

![p-book screenshot](images/pbook-recsys4kids.jpeg)

## Co je p-book?

p-book je kniha, která se přizpůsobuje čtenáři. Místo pevného lineárního textu je obsah organizován jako nezávislé bloky, které mohou být servírovány v několika režimech čtení, personalizovány doporučovacím enginem a obohaceny o interaktivní prvky.

### Režimy čtení

| Režim | Popis |
|-------|-------|
| **Mise** | Příběhové questy s průvodcem a závěrečným boss kvízem |
| **Procházet** | Netflix-style police — vyber, co tě zaujme |
| **Číst** | Kapitola po kapitole s nekonečným scrollem |
| **Mapa** | Vizuální přehled — vidíš všechno, vyber si cestu |
| **Kvíz** | Kartičky s rozloženým opakováním (spaced repetition) |
| **Tutor** | AI asistent, který odpovídá na otázky o obsahu |

### Funkce (všechny volitelné, lze zapnout/vypnout)

- **Gamifikace** — XP, úrovně, odznaky, certifikát o absolvování
- **Rozložené opakování** — kvízy ve stylu Anki pro dlouhodobé zapamatování
- **Personalizace** — doporučení poháněná Recombee, hlasové cesty obsahu (Průzkumník/Tvůrce/Myslitel)
- **Minihry** — 8 interaktivních klikacích her s časovačem
- **Mise** — 7 příběhových vzdělávacích cest s větvením a boss kvízy
- **Oblak znalostí** — vizuální mrak konceptů, které jsi se naučil
- **Účty** — přihlášení, synchronizace profilu mezi zařízeními
- **Offline** — Service Worker pre-cachuje celou knihu (~1,5 MB)
- **Analytika** — sledování interakcí po módech pro výzkum

## Struktura obsahu

```
content/
  book.json              # Index kapitol
  ch1-what-are-recommendations/
    01-spine-have-you-noticed.md
    02-spine-recommendations-everywhere.md
    01c-game-signal-sort.md
    05-question-what-type.md
    ...
games/
  signal-sort.json       # Definice herních dat
  taste-match.json
  ...
images/
  kids-footprints.svg    # SVG diagramy a ilustrace
  comic-cf.svg           # Komiksy
  diagram-attention.svg  # Technické diagramy
  ...
```

### Formát obsahového souboru

```yaml
---
id: ch1-noticed
type: spine              # spine | question | game
title: "Všiml sis někdy?"
readingTime: 2
teaser: "YouTube nějak ví, že máš rád Minecraft videa. Ale jak?"
voice: universal         # universal | explorer | creator | thinker
core: true               # Nutné pro certifikát
recallQ: "Jak appky jako YouTube vědí, co chceš?"
recallA: "Sledují tvoje kliky, zhlédnutí a přeskočení..."
status: accepted         # draft | review | accepted
---

Tvůj markdown obsah zde...
```

### Typy obsahu

| Typ | Popis |
|-----|-------|
| `spine` | Běžná obsahová sekce (čtecí materiál) |
| `question` | Interaktivní kvíz s výběrem z odpovědí |
| `game` | Minihra s daty z `games/*.json` |

## Pro LLM a boty

p-book je navržen pro snadné indexování a spoluautorství AI:

- **`/.well-known/pbook.json`** — Discovery manifest pro boty
- **`/pbook.json`** — Kompletní manifest projektu se schématem
- **`/content/book.json`** — Strukturovaný index kapitol/souborů
- **`/llms.txt`** — Textový souhrn pro LLM discovery
- **Obsahové soubory** — Čistý markdown se strojově čitelným YAML frontmatter

## Nasazení

### Požadavky

- **Recombee** (volitelné) — pro personalizovaná doporučení
- **Supabase** (volitelné) — pro uživatelské účty a analytiku

### Supabase konfigurace

1. Vytvoř projekt na [supabase.com](https://supabase.com)
2. V SQL Editoru spusť:

```sql
-- Tabulka interakcí (analytika)
CREATE TABLE IF NOT EXISTS interactions (
  id bigserial PRIMARY KEY,
  user_id text,
  type text NOT NULL,
  item_id text,
  mode text,
  event text,
  duration integer,
  rating real,
  data jsonb,
  server_ts bigint,
  created_at timestamptz DEFAULT now()
);

-- Tabulka uživatelských profilů (účty + sync)
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  display_name text,
  session_token text,
  profile_data jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLS politika (povolit vše přes anon key)
ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON interactions FOR ALL USING (true) WITH CHECK (true);
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all" ON user_profiles FOR ALL USING (true) WITH CHECK (true);
```

3. Zapiš si `SUPABASE_URL` a `SUPABASE_KEY` (anon/publishable key)

### Recombee konfigurace

1. Vytvoř databázi na [recombee.com](https://recombee.com)
2. V Recombee adminu vytvoř scénáře: `homepage-personal`, `homepage-voice`, `next-read`, `context-related`, `search`
3. Zapiš si `RECOMBEE_TOKEN` a `RECOMBEE_DB`

### Vercel

1. Importuj repo na [vercel.com](https://vercel.com)
2. Nastav proměnné prostředí:
   - `RECOMBEE_TOKEN` — token z Recombee
   - `RECOMBEE_DB` — název databáze (volitelné, default v config.js)
   - `SUPABASE_URL` — URL tvého Supabase projektu
   - `SUPABASE_KEY` — Supabase anon key
3. Deploy — žádný build krok není potřeba

### Netlify

1. Připoj repo na [netlify.com](https://netlify.com)
2. Nastav proměnné prostředí (stejné jako výše)
3. Deploy — funkce se automaticky detekují z `netlify/functions/`

### Bez Recombee a Supabase

Kniha funguje plně i bez externích služeb — všechny doporučovací funkce mají lokální fallbacky (náhodný/sekvenční obsah), účty se ukládají lokálně v prohlížeči.

## Lokální vývoj

```bash
# Vytvoř .env s tokeny (volitelné)
cat > .env << EOF
RECOMBEE_TOKEN=tvuj_token
RECOMBEE_DB=tvoje_databaze
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=tvuj_supabase_key
EOF

# Spusť vývojový server
node serve-local.js

# Otevři http://localhost:8000
```

Dev server obsahuje proxy pro Recombee API, Supabase log i auth — vše funguje lokálně.

## Architektura

```
index.html          # Čtečka (SPA)
admin.html          # Admin dashboard
js/
  app.js            # Hlavní aplikace (~4000 řádků)
  config.js         # Konfigurace a feature flags
  recombee.js       # Recombee klient + UserModel + gamifikace
  tutor.js          # AI tutor engine (mock, připravený pro LLM)
  markdown.js       # Markdown→HTML renderer s podporou matiky/tabulek
  diagrams.js       # SVG diagram renderer
css/style.css       # Všechny styly
content/            # Markdown obsahové soubory
games/              # Herní data (JSON)
images/             # SVG diagramy a ilustrace
netlify/functions/  # Serverless proxy (Netlify)
api/                # Serverless proxy (Vercel)
sw.js               # Service Worker pro offline přístup
```

## Vytvoř si vlastní p-book

1. **Forkni tento repozitář**
2. **Uprav `content/book.json`** — definuj své kapitoly
3. **Piš obsah** v `content/chN-*/` jako markdown soubory s frontmatter
4. **Přizpůsob `js/config.js`** — název, autor, hlasy, funkce
5. **Nasaď** na Vercel nebo Netlify (nebo jakýkoliv statický hosting)

## Přispívání

Viz [CONTRIBUTING.md](CONTRIBUTING.md) pro formát obsahu, stylový průvodce a PR workflow.

## Licence

Obsah: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Kód: [MIT](LICENSE)

## Autoři

- **Pavel Kordík** — Autor, spoluzakladatel [Recombee](https://recombee.com) a [AI dětem](https://aidetem.cz), docent na [FIT ČVUT v Praze](https://kam.fit.cvut.cz)
- Vývoj s asistencí AI (Claude, Anthropic)
