const MISSIONS = [
  {
    id: 'mission-co-jsou',
    title: 'Co jsou doporučovače?',
    description: 'Zjisti, jak YouTube, TikTok a Spotify vědí, co chceš sledovat.',
    emoji: '🎯',
    topic: 'coJsou',
    glitches: ['ch1-noticed', 'ch1-everywhere', 'ch1-not-magic', 'ch1-three-jobs'],
  },
  {
    id: 'mission-jak-se-uci',
    title: 'Jak se o tobě učí?',
    description: 'Každé kliknutí zanechá stopu. Zjisti, co o tobě systém ví.',
    emoji: '🔍',
    topic: 'jakSeUci',
    glitches: ['ch2-footprints', 'ch2-clues', 'ch2-privacy'],
  },
];

const TOPICS = {
  coJsou: { label: 'Co jsou?', emoji: '🎯', color: '#00A3FF', bg: 'linear-gradient(135deg, #0a1628 0%, #0d2d5e 50%, #003d80 100%)' },
  jakSeUci: { label: 'Jak se učí?', emoji: '🔍', color: '#00E676', bg: 'linear-gradient(135deg, #0a1a0a 0%, #0d3d1a 50%, #005522 100%)' },
};

const GLITCHES = [
  {
    id: 'ch1-noticed',
    topic: 'coJsou',
    title: 'Všiml sis někdy?',
    teaser: 'YouTube nějak ví, co miluješ. Ale jak to dělá?',
    chat: [
      { bot: 'Otevřeš YouTube a hned na hlavní stránce vidíš přesně to, co chceš sledovat. Nic jsi nevyhledával. Prostě... se to tam objevilo.' },
      { bot: 'Totéž na TikToku — tvoje stránka „Pro tebe" je úplně jiná než stránka tvého kamaráda. Stejná aplikace, ale naprosto jiný zážitek.' },
      { bot: 'Za tím vším stojí doporučovací systémy. Je to jako mít superchytrého kamaráda, který si pamatuje každé video, co jsi kdy sledoval — a každý den lépe odhaduje, co se ti bude líbit.' },
      { bot: 'Nejsou to žádná kouzla. Používají matematiku, data a chytré triky. A teď otázka:' },
      {
        quiz: {
          question: 'Jak aplikace jako YouTube vědí, co chceš?',
          options: [
            'Čtou tvoje zprávy a emaily',
            'Sledují tvoje klikání, sledování a přeskakování',
            'Kupují data od tvé školy',
            'Hádají náhodně',
          ],
          correct: 1,
          explanation: 'Přesně tak! Každé kliknutí, zastavení i přeskočení vytváří obrázek tvého vkusu — a algoritmus ho neustále zpřesňuje.',
        },
      },
    ],
  },
  {
    id: 'ch1-everywhere',
    topic: 'coJsou',
    title: 'Doporučení jsou všude',
    teaser: 'Jakmile začneš hledat, přestaneš je přehlížet.',
    chat: [
      { bot: 'Sloupec videí napravo na YouTube? Autoplay po skončení videa? Stránka „Pro tebe" na TikToku? Discover Weekly na Spotify? Všechno jsou doporučení.' },
      { bot: 'Netflix ti dokonce přímo říká proč: „Protože jsi sledoval Stranger Things..." App Store říká „Mohlo by se ti líbit..." Amazon: „Zákazníci, kteří koupili toto, koupili také..."' },
      { bot: 'A doporučovací systémy používají i české firmy — Mall, Alza, iDnes, Seznam. Jsou doslova všude kolem tebe.' },
      { bot: 'Zamysli se: kolik doporučení vidíš za JEDEN den? Většina lidí vidí stovky, aniž by si to uvědomila. Teď otázka:' },
      {
        quiz: {
          question: 'Která platforma NEPOUŽÍVÁ doporučovací systém?',
          options: [
            'TikTok',
            'Spotify',
            'Obyčejná tiskárna',
            'Netflix',
          ],
          correct: 2,
          explanation: 'Správně! Tiskárna žádný algoritmus nemá. Všechny ostatní — TikTok, Spotify, Netflix — jsou postaveny na doporučovacích systémech.',
        },
      },
    ],
  },
  {
    id: 'ch1-not-magic',
    topic: 'coJsou',
    title: 'Není to magie – jsou to vzory',
    teaser: 'Doporučovací systémy jsou jako detektivové. Hledají stopy ve tvých kliknutích.',
    chat: [
      { bot: 'Sledoval jsi 10 videí s kočkami za sebou? Systém si to zapsal. Přeskočil jsi každé sportovní video? Zapsáno. Systém hledá vzory.' },
      { bot: 'A pak se podívá na ostatní. Z 1 000 lidí, kteří milovali videa s kočkami, jich 800 milovalo i videa se psy. Takže ti systém doporučí roztomilé video se štěnětem.' },
      { bot: 'Tvoje kliknutí jsou stopy. Kliknutí ostatních jsou svědci. Doporučení je vyřešený případ. Čím více aplikaci používáš, tím lepší jsou odhady.' },
      { bot: 'Věděl/a jsi? Spotifyho Discover Weekly se generuje každé pondělí znovu pro 600+ milionů uživatelů — to je 600 milionů unikátních playlistů najednou! A teď:' },
      {
        quiz: {
          question: 'Na čem stojí doporučovací systémy?',
          options: [
            'Na čtení myšlenek uživatele',
            'Na náhodném výběru',
            'Na hledání vzorů v datech',
            'Na doporučeních od přátel',
          ],
          correct: 2,
          explanation: 'Přesně! Sleduj → najdi vzory → předpovídej. Jako detektiv hledající stopy — žádná magie, jen matematika.',
        },
      },
    ],
  },
  {
    id: 'ch1-three-jobs',
    topic: 'coJsou',
    title: 'Tři úkoly doporučovače',
    teaser: 'Objevovat, nacházet a udržovat zájem – to je jeho práce.',
    chat: [
      { bot: 'Každý doporučovací systém na světě má tři hlavní úkoly — ať je to YouTube, Spotify nebo Netflix.' },
      { bot: 'Úkol č. 1: Pomoci ti OBJEVIT nové věci. Miluješ Imagine Dragons? Někde tam existuje kapela, kterou budeš milovat stejně moc — ale ještě nevíš, že existuje.' },
      { bot: 'Úkol č. 2: Pomoci ti NAJÍT věci rychleji. YouTube má přes 800 milionů videí. Bez doporučení bys scrolloval celý život. Systém dává nejlepší věci dopředu.' },
      { bot: 'Úkol č. 3: Udržet tě v ZÁJMU. Aplikacím záleží na tom, abys je dál používal. Tento úkol je užitečný — ale může být i problém. O tom si řekneme víc u filtračních bublin. Teď otázka:' },
      {
        quiz: {
          question: 'Jaké jsou 3 úkoly doporučovacího systému?',
          options: [
            'Sledovat, analyzovat, reportovat',
            'Odkrývat, nacházet a udržovat zájem',
            'Prodávat, inzerovat, profilovat',
            'Filtrovat, třídit, mazat',
          ],
          correct: 1,
          explanation: 'Přesně! ODKRÝVAT nové věci, NACHÁZET věci rychleji v obrovských katalozích a UDRŽOVAT zájem — to jsou tři pilíře každého doporučovače.',
        },
      },
    ],
  },
  {
    id: 'ch2-footprints',
    topic: 'jakSeUci',
    title: 'Tvoje digitální stopa',
    teaser: 'Každé kliknutí, každé přeskočení, každé přehrání znovu – zanecháváš za sebou stopu.',
    chat: [
      { bot: 'Představ si, že jdeš čerstvým sněhem. Každý krok zanechá otisk. Na internetu funguje totéž — místo sněhu jsou tu data, místo chodidel tvoje kliknutí.' },
      { bot: 'Klepneš na video? Stopa. Sleduješ ho 3 sekundy a swipneš pryč? Stopa. Sleduješ ho celé a ještě jednou? Velká stopa.' },
      { bot: 'Čím více stop zanecháváš, tím lépe tě systém zná. Začíná jako cizinec — ale s každou stopou se přibližuje nejlepšímu kamarádovi, který ví, co ti doporučit.' },
      { bot: 'Věděl/a jsi? TikTok začne personalizovat tvůj feed už po 8 minutách — to je zhruba 40 swipnutí. Jeden z nejrychleji se učících algoritmů, co kdy vznikl. Teď otázka:' },
      {
        quiz: {
          question: 'Co je digitální stopa?',
          options: [
            'Fotka profilu a bio',
            'Heslo k účtu',
            'Každé kliknutí, sledování a přeskočení v aplikaci',
            'Počet followerů',
          ],
          correct: 2,
          explanation: 'Přesně! Každé kliknutí, sledování, přeskočení a vyhledávání — neviditelné otisky, ze kterých se systém učí o tvém vkusu.',
        },
      },
    ],
  },
  {
    id: 'ch2-clues',
    topic: 'jakSeUci',
    title: 'Tři druhy indicií',
    teaser: 'Indicie z obsahu, z tebe a z tvých akcí — tři ingredience každého doporučení.',
    chat: [
      { bot: 'Doporučovací systém používá tři druhy indicií. Představ si je jako tři ingredience v receptu — pro nejlepší výsledek potřebuješ všechny tři.' },
      { bot: 'Indicie č. 1: Co je k dispozici. Systém zná každou položku — název videa, žánr písničky, délku, energii, náladu. Jako katalog, kde ví o každé věci vše.' },
      { bot: 'Indicie č. 2: Kdo jsi. Tvůj jazyk, přibližný věk, zařízení. Pomáhá to, protože desetiletý kluk v Japonsku chce jiná doporučení než čtyřicetiletý muž v Brazílii.' },
      { bot: 'Indicie č. 3: Co DĚLÁŠ. Nejdůležitější ze všech. Tvoje akce odhalují, kým opravdu jsi. Systém věří tvým akcím, ne tvým slovům. A teď:' },
      {
        quiz: {
          question: 'Které indicie jsou pro doporučování nejdůležitější?',
          options: [
            'Co je k dispozici — katalog obsahu',
            'Kdo jsi — věk a jazyk',
            'Co DĚLÁŠ — tvoje akce a chování',
            'Všechny tři jsou stejně důležité',
          ],
          correct: 2,
          explanation: 'Správně! Tvoje akce jsou nejdůležitější, protože odhalují, kým opravdu jsi. Systém věří tomu, co děláš — ne tomu, co říkáš.',
        },
      },
    ],
  },
  {
    id: 'ch2-privacy',
    topic: 'jakSeUci',
    title: 'Tvoje data, tvoje volba',
    teaser: 'O svých digitálních stopách rozhoduješ ty. Tady je jak na to.',
    chat: [
      { bot: 'Všechny ty digitální stopy, o kterých jsme mluvili? Jsou TVOJE. A máš nad nimi větší kontrolu, než si možná myslíš.' },
      { bot: 'Superschopnost č. 1: Tlačítko „Nezajímá mě". Na YouTube tři tečky → Nezajímá mě. Na TikToku přidrž prst → Nezajímá mě. Přímo říkáš algoritmu: „Ne. Špatně. Zkus znovu."' },
      { bot: 'Superschopnost č. 2: Smazání historie. Jako smazat stopy ve sněhu — systém musí začít znovu. Superschopnost č. 3: Oddělené profily. Tvůj profil, tvá doporučení — žádné reklamy na sekačky kvůli tátovi.' },
      { bot: 'Data jsou obchod: dáváš aplikacím informace o sobě, na oplátku dostáváš lepší doporučení. Tato dohoda by měla fungovat pro TEBE. Teď otázka:' },
      {
        quiz: {
          question: 'Jak můžeš ovlivnit svá doporučení?',
          options: [
            'Nedá se to ovlivnit — algoritmus rozhoduje sám',
            'Jen smazáním celého účtu',
            'Tlačítkem „Nezajímá mě", smazáním historie nebo oddělenými profily',
            'Platbou za prémiový účet',
          ],
          correct: 2,
          explanation: 'Přesně! Máš superschopnosti: Nezajímá mě, smazání historie, oddělené profily, anonymní režim nebo nastavení aplikace.',
        },
      },
    ],
  },
];
