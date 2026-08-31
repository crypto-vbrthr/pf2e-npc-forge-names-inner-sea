const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const LOCALES = ["en", "de"];
const H = ["core.human"];

const semantic = (key, fallback) => ({
  id: `${MODULE_ID}.${key}`,
  labelKey: `NAMESINNERSEA.${key}`,
  fallback
});

const componentGenerator = (patterns, components, separator = "") => ({
  type: "components",
  patterns,
  separator,
  components
});

export const REGIONAL_CULTURES_III = Object.freeze([
  { id: `${MODULE_ID}.absalomi`, labelKey: "NAMESINNERSEA.Culture.Absalomi", ancestryIds: ["core.human", "core.halfling", "core.tengu", "core.ratfolk"], automaticAncestryIds: H, supportedLocales: LOCALES, weight: 12 },
  { id: `${MODULE_ID}.druman`, labelKey: "NAMESINNERSEA.Culture.Druman", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.galtan`, labelKey: "NAMESINNERSEA.Culture.Galtan", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.irriseni`, labelKey: "NAMESINNERSEA.Culture.Irriseni", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.mendevian`, labelKey: "NAMESINNERSEA.Culture.Mendevian", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.numerian`, labelKey: "NAMESINNERSEA.Culture.Numerian", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.razmiri`, labelKey: "NAMESINNERSEA.Culture.Razmiri", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 6 },
  { id: `${MODULE_ID}.riverfolk`, labelKey: "NAMESINNERSEA.Culture.Riverfolk", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.mordant-spire`, labelKey: "NAMESINNERSEA.Culture.MordantSpire", ancestryIds: ["core.elf"], automaticAncestryIds: [], supportedLocales: LOCALES, weight: 12 },
  { id: `${MODULE_ID}.dongun-hold`, labelKey: "NAMESINNERSEA.Culture.DongunHold", ancestryIds: ["core.dwarf"], automaticAncestryIds: [], supportedLocales: LOCALES, weight: 12 }
]);

const HUMAN_EPITHETS = {
  absalomi: [semantic("Absalomi.Epithet.ManyTongues", "of Many Tongues"), semantic("Absalomi.Epithet.Streetwise", "Street-Wise")],
  druman: [semantic("Druman.Epithet.GoldMeasure", "Gold-Measure"), semantic("Druman.Epithet.SureLedger", "Sure-Ledger")],
  galtan: [semantic("Galtan.Epithet.FreeVoice", "Free-Voice"), semantic("Galtan.Epithet.RedRibbon", "Red-Ribbon")],
  irriseni: [semantic("Irriseni.Epithet.Frostwise", "Frost-Wise"), semantic("Irriseni.Epithet.LongNight", "of the Long Night")],
  mendevian: [semantic("Mendevian.Epithet.Dawnward", "Dawn-Ward"), semantic("Mendevian.Epithet.ScarredBanner", "Scarred-Banner")],
  numerian: [semantic("Numerian.Epithet.StarFinder", "Star-Finder"), semantic("Numerian.Epithet.IronSky", "Iron-Sky")],
  razmiri: [semantic("Razmiri.Epithet.SilverMask", "Silver-Mask"), semantic("Razmiri.Epithet.QuietFaith", "Quiet-Faith")],
  riverfolk: [semantic("Riverfolk.Epithet.Fordwise", "Ford-Wise"), semantic("Riverfolk.Epithet.ManyRoads", "of Many Roads")]
};

export const REGIONAL_NAME_PACKS_III = Object.freeze([
  {
    id: `${MODULE_ID}.human-absalomi`, labelKey: "NAMESINNERSEA.Pack.AbsalomiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.absalomi`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Adren", "Belisar", "Cavos", "Darian", "Eliasen", "Feros", "Gavian", "Helion", "Ivaros", "Jalen", "Kestor", "Lorian", "Marios", "Nerian", "Othes", "Pavren", "Quintar", "Rhevan", "Silen", "Tavian", "Valeron", "Zerian"],
      female: ["Adria", "Belena", "Cavira", "Dareia", "Eliana", "Ferisa", "Gavella", "Helira", "Ivara", "Jalena", "Kestia", "Lorena", "Marisa", "Nerissa", "Othena", "Pavera", "Quinta", "Rhevina", "Silara", "Tavia", "Valera", "Zeria"],
      neutral: ["Aven", "Ceris", "Dari", "Elian", "Jalen", "Lio", "Neri", "Pavi", "Silen", "Varen"]
    },
    family: ["Averos", "Bellacene", "Castren", "Delmora", "Elaris", "Farsene", "Gavros", "Helvane", "Ilyros", "Jaspen", "Kalliren", "Loravos", "Meredin", "Neraval", "Orsene", "Pavaris", "Quenaro", "Rhelar", "Sorevan", "Talvane", "Ularis", "Vescari", "Ylloren", "Zavros"],
    epithets: HUMAN_EPITHETS.absalomi, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-druman`, labelKey: "NAMESINNERSEA.Pack.DrumanHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.druman`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aldemar", "Brennik", "Caldor", "Derrik", "Edran", "Falkor", "Garrik", "Hesmar", "Ildren", "Jorvik", "Keldan", "Loric", "Marden", "Neldor", "Orven", "Perrik", "Raldan", "Sorenk", "Tervan", "Ulmar", "Vardek", "Werrin"],
      female: ["Aldena", "Brenna", "Calda", "Derra", "Edria", "Falka", "Garria", "Hesma", "Ildra", "Jorva", "Kelda", "Lorika", "Marda", "Nelda", "Orvena", "Perria", "Ralda", "Sorenna", "Terva", "Ulma", "Varda", "Werra"],
      neutral: ["Ald", "Bren", "Calen", "Edrin", "Hes", "Keld", "Maren", "Neld", "Terv", "Varen"]
    },
    family: ["Aldermark", "Besserin", "Caldren", "Dornvek", "Estenhal", "Falkeren", "Gelder", "Hessarin", "Irmvek", "Jorsten", "Kalten", "Lederin", "Marrenk", "Nordenhal", "Ostervek", "Pellen", "Rederin", "Sarnvek", "Tellerin", "Ulmerek", "Vossendal", "Werten", "Yarvek", "Zellerin"],
    epithets: HUMAN_EPITHETS.druman, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-galtan`, labelKey: "NAMESINNERSEA.Pack.GaltanHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.galtan`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Armandel", "Bastien", "Corven", "Delaire", "Etiennek", "Faron", "Gervais", "Hadrien", "Ilarc", "Jovain", "Luceran", "Marcelin", "Norec", "Olivan", "Perron", "Quarel", "Remian", "Sylven", "Taron", "Valcen", "Yvesan", "Zoriel"],
      female: ["Aveline", "Bastienne", "Coralie", "Delaine", "Etrielle", "Faraine", "Gervaise", "Hadrienne", "Ilara", "Jovaine", "Lucera", "Marcelle", "Norelle", "Oliane", "Perrine", "Quarela", "Remielle", "Sylvaine", "Tarielle", "Valcenne", "Ysolde", "Zorielle"],
      neutral: ["Avel", "Corin", "Del", "Farin", "Ilar", "Jov", "Lucen", "Remi", "Syl", "Valen"]
    },
    family: ["Arvenne", "Bellorin", "Cadrieux", "Delonne", "Evrain", "Faucel", "Garenne", "Havrel", "Isarne", "Jorelle", "Lacenne", "Marivaux", "Neroux", "Orlande", "Pervaine", "Quillan", "Ravelle", "Serain", "Tavoux", "Uverne", "Valcour", "Werrane", "Yverin", "Zeloux"],
    epithets: HUMAN_EPITHETS.galtan, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-irriseni`, labelKey: "NAMESINNERSEA.Pack.IrriseniHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.irriseni`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aleksei", "Borislav", "Chernin", "Demyan", "Evrenko", "Fyodorik", "Gavril", "Hrodin", "Ilyar", "Kostan", "Levran", "Mikhailen", "Nikolai", "Ostap", "Pavelik", "Radomir", "Sergen", "Tomasen", "Vadren", "Yarom", "Zoravin", "Veskar"],
      female: ["Alena", "Boriska", "Chernaya", "Demyana", "Evrenka", "Fyodora", "Gavrila", "Hrodina", "Ilyara", "Kostena", "Levra", "Mikhaila", "Nikola", "Ostara", "Pavela", "Radomira", "Sergena", "Tomasya", "Vadrena", "Yaroma", "Zoravina", "Veska"],
      neutral: ["Alek", "Borik", "Cheren", "Demy", "Gavri", "Ilya", "Kosta", "Radom", "Ves", "Yaro"]
    },
    family: ["Aldrov", "Bereznik", "Chernovar", "Drazhen", "Evrosin", "Fedorovik", "Gavrilen", "Hrodov", "Ilvaren", "Kostren", "Levashin", "Morozhen", "Nikoren", "Ostrovik", "Pavlen", "Radovich", "Serevin", "Tomashev", "Vadrov", "Yaroven", "Zorashen", "Vesnov", "Krivaren", "Leshovin"],
    epithets: HUMAN_EPITHETS.irriseni, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-mendevian`, labelKey: "NAMESINNERSEA.Pack.MendevianHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.mendevian`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aldren", "Bravic", "Cerdan", "Darian", "Edras", "Ferran", "Galenor", "Harric", "Iven", "Jorad", "Kellan", "Loric", "Mavren", "Nordan", "Oric", "Perrad", "Rennar", "Savar", "Taldric", "Ulven", "Varan", "Warden"],
      female: ["Aldra", "Bravia", "Cerda", "Darielle", "Edra", "Ferra", "Galenna", "Harria", "Ivena", "Joradia", "Kella", "Lorica", "Mavra", "Nordra", "Orica", "Perria", "Renna", "Savara", "Taldria", "Ulvena", "Varena", "Wardena"],
      neutral: ["Ald", "Brav", "Cer", "Dari", "Iven", "Kell", "Mav", "Ren", "Savar", "Var"]
    },
    family: ["Aldervane", "Brasten", "Cerdric", "Dawnmere", "Edraven", "Ferosk", "Galenward", "Harridan", "Ivensar", "Jorren", "Kellovar", "Lorensen", "Mavric", "Norden", "Orsen", "Perravan", "Rennick", "Savaric", "Taldren", "Ulmaran", "Varros", "Wardenfell", "Yorren", "Zelmar"],
    epithets: HUMAN_EPITHETS.mendevian, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-numerian`, labelKey: "NAMESINNERSEA.Pack.NumerianHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.numerian`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Akran", "Boryk", "Cevor", "Dask", "Eronak", "Feryn", "Garn", "Huros", "Ivek", "Jarek", "Korvan", "Lask", "Mirov", "Nesk", "Orran", "Pryvek", "Ruvan", "Sarkan", "Tovek", "Urzan", "Vaskor", "Zarek"],
      female: ["Akra", "Borya", "Ceva", "Daska", "Erona", "Ferya", "Garna", "Hura", "Iveka", "Jareka", "Korva", "Laska", "Mira", "Neska", "Orra", "Pryva", "Ruva", "Sarka", "Toveka", "Urza", "Vaska", "Zareka"],
      neutral: ["Akr", "Bory", "Cev", "Dask", "Eron", "Ivek", "Korv", "Nesk", "Ruv", "Tov"]
    },
    family: ["Arken", "Borynsk", "Cevran", "Daskov", "Eronesk", "Feryn", "Garnov", "Hurosk", "Ivekar", "Jarev", "Korvask", "Lasken", "Mirovek", "Neskal", "Orrask", "Pryven", "Ruvask", "Sarkan", "Tovren", "Urzesk", "Vaskoran", "Zarev", "Kheskar", "Morvek"],
    epithets: HUMAN_EPITHETS.numerian, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-razmiri`, labelKey: "NAMESINNERSEA.Pack.RazmiriHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.razmiri`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Avarim", "Belesh", "Cadrun", "Dorez", "Evaran", "Feshir", "Gharek", "Havel", "Iramon", "Jazir", "Karem", "Luroz", "Mavish", "Narem", "Ozir", "Qavel", "Rasim", "Sorez", "Tavim", "Uresh", "Vazir", "Zorim"],
      female: ["Avara", "Belisha", "Cadra", "Doreza", "Evara", "Feshira", "Ghara", "Havela", "Iramia", "Jazira", "Karema", "Luroza", "Mavisha", "Narema", "Ozira", "Qavela", "Rasima", "Soreza", "Tavima", "Uresha", "Vazira", "Zorima"],
      neutral: ["Avar", "Bel", "Cadr", "Evari", "Fesh", "Iram", "Qavel", "Ras", "Tav", "Zor"]
    },
    family: ["Averesh", "Belzari", "Cadram", "Dorevan", "Evarin", "Feshari", "Gharevan", "Havelis", "Iramen", "Jazari", "Karevon", "Luroven", "Mavresh", "Narezin", "Oziram", "Qavelin", "Rashem", "Sorevan", "Tavresh", "Ureshin", "Vazarem", "Zoraven", "Kharim", "Nemezar"],
    epithets: HUMAN_EPITHETS.razmiri, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-riverfolk`, labelKey: "NAMESINNERSEA.Pack.RiverfolkHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.riverfolk`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Alder", "Bram", "Corren", "Dalev", "Eryk", "Fenner", "Garron", "Hollis", "Iven", "Jory", "Kellen", "Lark", "Merron", "Nolan", "Oren", "Piers", "Quill", "Renn", "Sayer", "Tobin", "Verren", "Wyl"],
      female: ["Alda", "Brenna", "Corra", "Dalia", "Erya", "Fenna", "Garra", "Hollia", "Ivena", "Jora", "Kella", "Larka", "Merra", "Nola", "Orena", "Piera", "Quilla", "Renna", "Saya", "Tobina", "Verra", "Wylla"],
      neutral: ["Alder", "Cor", "Fen", "Hollis", "Jory", "Lark", "Nol", "Quill", "Renn", "Sayer"]
    },
    family: ["Alderfen", "Bramblecross", "Casker", "Dalehook", "Easthaven", "Fenlock", "Garrick", "Holloway", "Ivenford", "Joryn", "Kellmere", "Larkspur", "Merrit", "Nolaner", "Orenford", "Piersen", "Quillbank", "Rennick", "Sayerfield", "Tobern", "Verren", "Wylcross", "Yarrow", "Zeller"],
    epithets: HUMAN_EPITHETS.riverfolk, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.elf-mordant-spire`, labelKey: "NAMESINNERSEA.Pack.MordantSpireElf", ancestryIds: ["core.elf"],
    cultureIds: [`${MODULE_ID}.mordant-spire`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Aelthir", "Caelion", "Delyr", "Eryndar", "Faelion", "Galyth", "Haelir", "Ilyrion", "Kaevor", "Laethan", "Myrior", "Naelith", "Oryndel", "Phaelor", "Quelyr", "Rhaevan", "Saelith", "Thaelor", "Vaeryn", "Yllar", "Zaevir", "Corynth"],
      female: ["Aelira", "Caelia", "Delyra", "Eryndra", "Faelira", "Galyn", "Haelira", "Ilyria", "Kaeva", "Laetha", "Myria", "Naelira", "Oryna", "Phaelira", "Quelyra", "Rhaeva", "Saelira", "Thaela", "Vaerya", "Yllara", "Zaevira", "Coryntha"],
      neutral: ["Ael", "Cael", "Delyr", "Eryn", "Ilyr", "Kae", "Myr", "Sael", "Vaer", "Yll"]
    },
    family: ["Aesilorn", "Caelthara", "Delyrien", "Eryvane", "Faeloren", "Galythar", "Haelisar", "Ilyndor", "Kaevaryn", "Laethorin", "Myrianel", "Naelisar", "Oryveth", "Phaeloran", "Quelyndar", "Rhaevorin", "Saelvane", "Thaelisar", "Vaeryndel", "Yllorian", "Zaevareth", "Coryndel", "Aevorian", "Nytharel"],
    epithets: [semantic("MordantSpire.Epithet.SeaWatcher", "Sea-Watcher"), semantic("MordantSpire.Epithet.PearlVoice", "Pearl-Voice")], epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.dwarf-dongun-hold`, labelKey: "NAMESINNERSEA.Pack.DongunHoldDwarf", ancestryIds: ["core.dwarf"],
    cultureIds: [`${MODULE_ID}.dongun-hold`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Ardrum", "Balgir", "Dorvek", "Egrim", "Fardek", "Gromir", "Haldum", "Irgarn", "Kordek", "Lodrum", "Mardek", "Norgrim", "Ordrik", "Ragmir", "Skeldum", "Torvek", "Uldrum", "Vargir", "Wodrek", "Yorgrim", "Zardek", "Brumir"],
      female: ["Ardra", "Balgra", "Dorva", "Egrima", "Farda", "Gromira", "Halda", "Irgara", "Korda", "Lodra", "Marda", "Norgra", "Ordra", "Ragmira", "Skelda", "Torva", "Uldra", "Vargra", "Wodra", "Yorgra", "Zarda", "Brumira"],
      neutral: ["Ard", "Balg", "Dorv", "Egrim", "Grom", "Irg", "Kord", "Rag", "Torv", "Zard"]
    },
    generators: {
      family: componentGenerator(
        [["craft", "craftSuffix"], ["hold", "holdSuffix"]],
        {
          craft: [semantic("DongunHold.Craft.Bronze", "Bronze"), semantic("DongunHold.Craft.Copper", "Copper"), semantic("DongunHold.Craft.Steel", "Steel"), semantic("DongunHold.Craft.Spark", "Spark"), semantic("DongunHold.Craft.Gear", "Gear"), semantic("DongunHold.Craft.Powder", "Powder"), semantic("DongunHold.Craft.Barrel", "Barrel"), semantic("DongunHold.Craft.Rivet", "Rivet")],
          craftSuffix: [semantic("DongunHold.CraftSuffix.Beard", "beard"), semantic("DongunHold.CraftSuffix.Hand", "hand"), semantic("DongunHold.CraftSuffix.Hammer", "hammer"), semantic("DongunHold.CraftSuffix.Lock", "lock"), semantic("DongunHold.CraftSuffix.Smith", "smith"), semantic("DongunHold.CraftSuffix.Eye", "eye"), semantic("DongunHold.CraftSuffix.Ward", "ward"), semantic("DongunHold.CraftSuffix.Wright", "wright")],
          hold: [semantic("DongunHold.Hold.Deep", "Deep"), semantic("DongunHold.Hold.Forge", "Forge"), semantic("DongunHold.Hold.Gate", "Gate"), semantic("DongunHold.Hold.Stone", "Stone"), semantic("DongunHold.Hold.Tunnel", "Tunnel"), semantic("DongunHold.Hold.Vault", "Vault"), semantic("DongunHold.Hold.Wall", "Wall"), semantic("DongunHold.Hold.Anvil", "Anvil")],
          holdSuffix: [semantic("DongunHold.HoldSuffix.Born", "born"), semantic("DongunHold.HoldSuffix.Delver", "delver"), semantic("DongunHold.HoldSuffix.Keeper", "keeper"), semantic("DongunHold.HoldSuffix.Sentry", "sentry"), semantic("DongunHold.HoldSuffix.Shield", "shield"), semantic("DongunHold.HoldSuffix.Stout", "stout"), semantic("DongunHold.HoldSuffix.Walker", "walker"), semantic("DongunHold.HoldSuffix.Warden", "warden")]
        }
      )
    },
    epithets: [semantic("DongunHold.Epithet.TrueMeasure", "True-Measure"), semantic("DongunHold.Epithet.DeepSpark", "Deep-Spark")], epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.halfling-absalomi`, labelKey: "NAMESINNERSEA.Pack.AbsalomiHalfling", ancestryIds: ["core.halfling"],
    cultureIds: [`${MODULE_ID}.absalomi`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Albo", "Beri", "Cavo", "Deni", "Elo", "Faro", "Gavi", "Hilo", "Ivo", "Jaro", "Kesi", "Leno", "Maro", "Niko", "Ollo", "Pavo", "Reni", "Silo", "Tavo", "Vero"],
      female: ["Alba", "Bera", "Cava", "Dena", "Ela", "Fara", "Gavia", "Hila", "Iva", "Jara", "Kesa", "Lena", "Mara", "Nika", "Olla", "Pava", "Rena", "Sila", "Tava", "Vera"],
      neutral: ["Ari", "Beri", "Cavi", "Deni", "Hali", "Kesi", "Neri", "Pavi", "Savi", "Veli"]
    },
    family: [semantic("AbsalomiHalfling.Family.Belllane", "Belllane"), semantic("AbsalomiHalfling.Family.Brightdoor", "Brightdoor"), semantic("AbsalomiHalfling.Family.Copperstep", "Copperstep"), semantic("AbsalomiHalfling.Family.Dawncup", "Dawncup"), semantic("AbsalomiHalfling.Family.Fairmarket", "Fairmarket"), semantic("AbsalomiHalfling.Family.Glassbutton", "Glassbutton"), semantic("AbsalomiHalfling.Family.Harborfoot", "Harborfoot"), semantic("AbsalomiHalfling.Family.Lanternlane", "Lanternlane"), semantic("AbsalomiHalfling.Family.Marketbell", "Marketbell"), semantic("AbsalomiHalfling.Family.Nimblekey", "Nimblekey"), semantic("AbsalomiHalfling.Family.Pebblecourt", "Pebblecourt"), semantic("AbsalomiHalfling.Family.Quickcup", "Quickcup"), semantic("AbsalomiHalfling.Family.Redawning", "Redawning"), semantic("AbsalomiHalfling.Family.Saltstep", "Saltstep"), semantic("AbsalomiHalfling.Family.Silverbasket", "Silverbasket"), semantic("AbsalomiHalfling.Family.Sunwindow", "Sunwindow"), semantic("AbsalomiHalfling.Family.Tallgate", "Tallgate"), semantic("AbsalomiHalfling.Family.Threekeys", "Threekeys"), semantic("AbsalomiHalfling.Family.Warmhearth", "Warmhearth"), semantic("AbsalomiHalfling.Family.Whiteapron", "Whiteapron"), semantic("AbsalomiHalfling.Family.Widebridge", "Widebridge"), semantic("AbsalomiHalfling.Family.Yellowdoor", "Yellowdoor"), semantic("AbsalomiHalfling.Family.Coinpocket", "Coinpocket"), semantic("AbsalomiHalfling.Family.Harborbell", "Harborbell")],
    epithets: [semantic("AbsalomiHalfling.Epithet.SevenStreets", "of Seven Streets"), semantic("AbsalomiHalfling.Epithet.QuickWelcome", "Quick-Welcome")], epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.tengu-absalomi`, labelKey: "NAMESINNERSEA.Pack.AbsalomiTengu", ancestryIds: ["core.tengu"],
    cultureIds: [`${MODULE_ID}.absalomi`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator([["onset", "vowel", "coda"]], {
        onset: ["B", "D", "G", "H", "J", "L", "N", "Q", "Ch", "Dr", "Th", "Y"],
        vowel: ["a", "e", "i", "o", "u", "ae", "io", "ei"],
        coda: ["k", "r", "s", "t", "v", "sh", "ren", "lan"]
      })
    },
    epithets: [semantic("AbsalomiTengu.Epithet.HarborWing", "Harbor-Wing"), semantic("AbsalomiTengu.Epithet.HundredVoices", "Hundred-Voices")], epithetChance: 0.11
  },
  {
    id: `${MODULE_ID}.ysoki-absalomi`, labelKey: "NAMESINNERSEA.Pack.AbsalomiYsoki", ancestryIds: ["core.ratfolk"],
    cultureIds: [`${MODULE_ID}.absalomi`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator(
        [["vowelRoot", "vowelEnding"], ["zRoot", "zEnding"]],
        {
          vowelRoot: ["Abi", "Beri", "Deni", "Evi", "Gari", "Hiri", "Javi", "Lumi", "Mazi", "Neri", "Pavi", "Qari", "Reni", "Sabi", "Tavi", "Viri", "Yari", "Zeri"],
          vowelEnding: ["", "k", "a", "u", "en", "r", "zi", "n"],
          zRoot: ["Caz", "Faz", "Kez", "Waz"],
          zEnding: ["", "k", "i", "a", "u", "en", "ir", "ar"]
        }
      )
    },
    epithets: [semantic("AbsalomiYsoki.Epithet.MarketEar", "Market-Ear"), semantic("AbsalomiYsoki.Epithet.FiveKeys", "Five-Keys"), semantic("AbsalomiYsoki.Epithet.HarborWhisker", "Harbor-Whisker")], epithetChance: 0.12
  }
]);

export function registerRegionalCulturesIII(api) {
  for (const culture of REGIONAL_CULTURES_III) api.content.registerNameCulture(MODULE_ID, culture);
  for (const pack of REGIONAL_NAME_PACKS_III) api.content.registerNamePack(MODULE_ID, pack);
}
