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

export const REGIONAL_CULTURES_IV = Object.freeze([
  { id: `${MODULE_ID}.nirmathi`, labelKey: "NAMESINNERSEA.Culture.Nirmathi", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.qadiran`, labelKey: "NAMESINNERSEA.Culture.Qadiran", ancestryIds: ["core.human", "core.tengu"], automaticAncestryIds: H, supportedLocales: LOCALES, weight: 9 },
  { id: `${MODULE_ID}.ravouneli`, labelKey: "NAMESINNERSEA.Culture.Ravouneli", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.vidric`, labelKey: "NAMESINNERSEA.Culture.Vidric", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.new-thassilonian`, labelKey: "NAMESINNERSEA.Culture.NewThassilonian", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.lastwall`, labelKey: "NAMESINNERSEA.Culture.Lastwall", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 6 },
  { id: `${MODULE_ID}.mediogaltan`, labelKey: "NAMESINNERSEA.Culture.Mediogaltan", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 6 },
  { id: `${MODULE_ID}.mammoth-lands`, labelKey: "NAMESINNERSEA.Culture.MammothLands", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 6 }
]);

const HUMAN_EPITHETS = {
  nirmathi: [semantic("Nirmathi.Epithet.GreenTrail", "Green-Trail"), semantic("Nirmathi.Epithet.FreeBow", "Free-Bow")],
  qadiran: [semantic("Qadiran.Epithet.SaffronRoad", "Saffron-Road"), semantic("Qadiran.Epithet.SunCaravan", "Sun-Caravan")],
  ravouneli: [semantic("Ravouneli.Epithet.OpenHarbor", "Open-Harbor"), semantic("Ravouneli.Epithet.BrokenChain", "Broken-Chain")],
  vidric: [semantic("Vidric.Epithet.NewDawn", "New-Dawn"), semantic("Vidric.Epithet.SaltWind", "Salt-Wind")],
  newThassilonian: [semantic("NewThassilonian.Epithet.RuneAwake", "Rune-Awake"), semantic("NewThassilonian.Epithet.SecondAge", "of the Second Age")],
  lastwall: [semantic("Lastwall.Epithet.WallRemembered", "Wall-Remembered"), semantic("Lastwall.Epithet.GrayBanner", "Gray-Banner")],
  mediogaltan: [semantic("Mediogaltan.Epithet.BlackSail", "Black-Sail"), semantic("Mediogaltan.Epithet.QuietKnife", "Quiet-Knife")],
  mammothLands: [semantic("MammothLands.Epithet.TuskRoad", "Tusk-Road"), semantic("MammothLands.Epithet.WinterVoice", "Winter-Voice")]
};

export const REGIONAL_NAME_PACKS_IV = Object.freeze([
  {
    id: `${MODULE_ID}.human-nirmathi`, labelKey: "NAMESINNERSEA.Pack.NirmathiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.nirmathi`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Averic", "Brenn", "Calven", "Dorran", "Eldric", "Ferren", "Garran", "Harl", "Ivenor", "Jorren", "Kest", "Loric", "Marren", "Neran", "Orric", "Pellan", "Rusk", "Serren", "Tavren", "Ulric", "Varen", "Werric"],
      female: ["Avera", "Brenna", "Calva", "Dorra", "Eldra", "Ferra", "Garra", "Harla", "Ivena", "Jorra", "Kesta", "Lora", "Marra", "Nera", "Orra", "Pella", "Ruska", "Serra", "Tavra", "Ulra", "Vara", "Werra"],
      neutral: ["Aven", "Bren", "Cal", "Dorr", "Iven", "Kest", "Marr", "Ner", "Rusk", "Tav"]
    },
    family: [semantic("Nirmathi.Family.Alderfen", "Alderfen"), semantic("Nirmathi.Family.Briarward", "Briarward"), semantic("Nirmathi.Family.Caskren", "Caskren"), semantic("Nirmathi.Family.Deepgrove", "Deepgrove"), semantic("Nirmathi.Family.Eversen", "Eversen"), semantic("Nirmathi.Family.Fernholt", "Fernholt"), semantic("Nirmathi.Family.Greenbarrow", "Greenbarrow"), semantic("Nirmathi.Family.Harrowfen", "Harrowfen"), semantic("Nirmathi.Family.Iverwood", "Iverwood"), semantic("Nirmathi.Family.Juniper", "Juniper"), semantic("Nirmathi.Family.Kestrelane", "Kestrelane"), semantic("Nirmathi.Family.Longmead", "Longmead"), semantic("Nirmathi.Family.Mossward", "Mossward"), semantic("Nirmathi.Family.Northmere", "Northmere"), semantic("Nirmathi.Family.Oakren", "Oakren"), semantic("Nirmathi.Family.Pinecross", "Pinecross"), semantic("Nirmathi.Family.Rillwood", "Rillwood"), semantic("Nirmathi.Family.Stoneford", "Stoneford"), semantic("Nirmathi.Family.Thornmere", "Thornmere"), semantic("Nirmathi.Family.Underbough", "Underbough"), semantic("Nirmathi.Family.Valehart", "Valehart"), semantic("Nirmathi.Family.Westgrove", "Westgrove"), semantic("Nirmathi.Family.Yarrowen", "Yarrowen"), semantic("Nirmathi.Family.Zerren", "Zerren")],
    epithets: HUMAN_EPITHETS.nirmathi, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-qadiran`, labelKey: "NAMESINNERSEA.Pack.QadiranHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.qadiran`], supportedLocales: LOCALES, weight: 13,
    given: {
      male: ["Azhad", "Bahramel", "Cazim", "Daryun", "Eshar", "Faroud", "Ghalem", "Hazar", "Ishvan", "Jalir", "Kavehri", "Lazim", "Mehrun", "Nadirak", "Oshar", "Parven", "Qasimel", "Ruzan", "Sahmir", "Tavir", "Vahred", "Zaref"],
      female: ["Azhara", "Bahreya", "Cazira", "Daryana", "Eshara", "Farouza", "Ghalira", "Hazara", "Ishvara", "Jalira", "Kavehra", "Lazira", "Mehrana", "Nadira", "Oshara", "Parvena", "Qasira", "Ruzana", "Sahmira", "Tavira", "Vahreda", "Zarefa"],
      neutral: ["Azhar", "Caz", "Dary", "Esh", "Hazar", "Jali", "Mehr", "Parv", "Ruz", "Tavi"]
    },
    family: ["Ardashen", "Bahrezad", "Cazarin", "Daryavesh", "Eshkavan", "Farouzin", "Ghalamar", "Hazravi", "Ishvaren", "Jalazad", "Kavehran", "Lazamir", "Mehravan", "Nadresh", "Oshkandar", "Parvazi", "Qasimar", "Ruzhavan", "Sahmiran", "Tavresh", "Vahrazad", "Zarevan", "Khordesh", "Mirazun"],
    epithets: HUMAN_EPITHETS.qadiran, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-ravouneli`, labelKey: "NAMESINNERSEA.Pack.RavouneliHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.ravouneli`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Adriano", "Bellaro", "Cavien", "Dorello", "Enzaro", "Fioren", "Gaviano", "Helvaro", "Ilario", "Joreno", "Lucaro", "Marcen", "Nerio", "Orsano", "Pavien", "Quiliano", "Renaro", "Silvano", "Terenzo", "Valerio", "Ylaro", "Zerano"],
      female: ["Adriana", "Bellara", "Caviena", "Dorella", "Enzara", "Fiorena", "Gaviana", "Helvara", "Ilaria", "Jorena", "Lucara", "Marcena", "Neria", "Orsana", "Paviena", "Quiliana", "Renara", "Silvana", "Terenza", "Valeria", "Ylara", "Zerana"],
      neutral: ["Adri", "Bell", "Cavi", "Dore", "Enza", "Ilar", "Neri", "Quil", "Silv", "Vale"]
    },
    family: ["Averani", "Bellacosta", "Cavarelli", "Doraven", "Esparra", "Fiorasca", "Gavellin", "Helmari", "Ilarenne", "Joravelli", "Lucerra", "Maravane", "Nerazzi", "Orselli", "Pavaren", "Quintari", "Ravessa", "Silvarel", "Terenzi", "Valcora", "Yllavane", "Zeretti", "Corvessa", "Marcellan"],
    epithets: HUMAN_EPITHETS.ravouneli, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-vidric`, labelKey: "NAMESINNERSEA.Pack.VidricHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.vidric`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Abeni", "Bakuvo", "Charez", "Doman", "Eshali", "Faroq", "Gaveni", "Hassu", "Ibero", "Jendai", "Kavro", "Lumeki", "Maseno", "Nabari", "Oseko", "Pavalo", "Qadri", "Rashu", "Sembi", "Tavaro", "Vekai", "Zuberi"],
      female: ["Abena", "Bakuva", "Charela", "Domana", "Eshalia", "Faroqa", "Gavena", "Hassia", "Ibera", "Jendaia", "Kavra", "Lumeka", "Masena", "Nabara", "Oseka", "Pavala", "Qadria", "Rasha", "Sembia", "Tavara", "Vekaia", "Zubera"],
      neutral: ["Abe", "Baku", "Chare", "Doma", "Esha", "Jend", "Lume", "Naba", "Semb", "Veka"]
    },
    family: ["Amarobe", "Bakari", "Cazenda", "Domavez", "Eshambe", "Farovan", "Gavedo", "Hassari", "Iberan", "Jendalo", "Kavenda", "Lumaro", "Masembe", "Nabaro", "Osekai", "Pavarez", "Qadiru", "Rashambe", "Sembaro", "Tavendo", "Vekari", "Zubenda", "Calembo", "Maroven"],
    epithets: HUMAN_EPITHETS.vidric, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-new-thassilonian`, labelKey: "NAMESINNERSEA.Pack.NewThassilonianHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.new-thassilonian`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Akrion", "Belthas", "Cyrakon", "Demeris", "Eryxan", "Falzir", "Gorathen", "Heskar", "Iozar", "Kalyx", "Letharos", "Myrkan", "Nyzor", "Otharis", "Phexan", "Qorven", "Rhazek", "Sylaris", "Thyron", "Vezar", "Xandrek", "Zoryx"],
      female: ["Akria", "Belthara", "Cyraka", "Demeria", "Eryxa", "Falzira", "Goratha", "Heskara", "Iozara", "Kalyxa", "Lethara", "Myrkana", "Nyzora", "Otharia", "Phexa", "Qorvena", "Rhazeka", "Sylaria", "Thyra", "Vezara", "Xandreka", "Zoryxa"],
      neutral: ["Akri", "Belth", "Cyra", "Eryx", "Ioz", "Kalyx", "Myr", "Nyz", "Phex", "Zoryx"]
    },
    family: ["Akroth", "Belzaris", "Cyrane", "Demerax", "Erythos", "Falzarek", "Gorathis", "Heskaron", "Iozareth", "Kalyth", "Lethorax", "Myrzane", "Nyzareth", "Otharion", "Phexaris", "Qorath", "Rhaziron", "Sylarax", "Thyren", "Vezareth", "Xandrion", "Zoryth", "Karzene", "Runovar"],
    epithets: HUMAN_EPITHETS.newThassilonian, epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-lastwall`, labelKey: "NAMESINNERSEA.Pack.LastwallHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.lastwall`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Aldren", "Bastor", "Cerran", "Dovik", "Edran", "Ferren", "Garrick", "Halven", "Istran", "Jorad", "Kelden", "Lothar", "Mavric", "Norden", "Ordan", "Perric", "Rennor", "Seldan", "Torric", "Ulmar", "Varden", "Werrad"],
      female: ["Aldria", "Basta", "Cerra", "Dovika", "Edrena", "Ferrica", "Garria", "Halva", "Istra", "Jorada", "Kelda", "Lotha", "Mavrena", "Nordena", "Orda", "Perra", "Rennora", "Selda", "Torria", "Ulma", "Varda", "Werra"],
      neutral: ["Ald", "Bast", "Cerr", "Dovi", "Istr", "Keld", "Mav", "Renn", "Seld", "Vard"]
    },
    family: [semantic("Lastwall.Family.Ashwarden", "Ashwarden"), semantic("Lastwall.Family.Bastioner", "Bastioner"), semantic("Lastwall.Family.Cinderwall", "Cinderwall"), semantic("Lastwall.Family.Dawnshield", "Dawnshield"), semantic("Lastwall.Family.Emberwatch", "Emberwatch"), semantic("Lastwall.Family.Fellward", "Fellward"), semantic("Lastwall.Family.Gravesen", "Gravesen"), semantic("Lastwall.Family.Harrowmark", "Harrowmark"), semantic("Lastwall.Family.Ironvigil", "Ironvigil"), semantic("Lastwall.Family.Judicar", "Judicar"), semantic("Lastwall.Family.Keepward", "Keepward"), semantic("Lastwall.Family.Lanternhold", "Lanternhold"), semantic("Lastwall.Family.Mournwatch", "Mournwatch"), semantic("Lastwall.Family.Nightguard", "Nightguard"), semantic("Lastwall.Family.Oathmere", "Oathmere"), semantic("Lastwall.Family.Palegate", "Palegate"), semantic("Lastwall.Family.Remembran", "Remembran"), semantic("Lastwall.Family.Shieldrest", "Shieldrest"), semantic("Lastwall.Family.Torchward", "Torchward"), semantic("Lastwall.Family.Vigilant", "Vigilant"), semantic("Lastwall.Family.Wallmere", "Wallmere"), semantic("Lastwall.Family.Yarrowguard", "Yarrowguard"), semantic("Lastwall.Family.Zerrow", "Zerrow"), semantic("Lastwall.Family.Greyhaven", "Greyhaven")],
    epithets: HUMAN_EPITHETS.lastwall, epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.human-mediogaltan`, labelKey: "NAMESINNERSEA.Pack.MediogaltanHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.mediogaltan`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Alvaro", "Bastiel", "Correnzo", "Daviros", "Estaro", "Felicen", "Gavaro", "Hernan", "Ilarco", "Javiel", "Lorenzo", "Matevo", "Narcen", "Orvallo", "Perrado", "Quintero", "Rafaelon", "Serrano", "Taviel", "Vasaro", "Xavren", "Zoreno"],
      female: ["Alvara", "Bastiela", "Correnza", "Davira", "Estara", "Felica", "Gavara", "Herna", "Ilarca", "Javiela", "Lorenza", "Mateva", "Narcena", "Orvalla", "Perrada", "Quintera", "Rafaela", "Serrana", "Taviela", "Vasara", "Xavrena", "Zorena"],
      neutral: ["Alvar", "Basti", "Corren", "Davi", "Esta", "Ilar", "Mate", "Quin", "Serran", "Xav"]
    },
    family: ["Almavera", "Bastarron", "Corvallo", "Delmaris", "Estavera", "Fierroza", "Gavellon", "Hernarra", "Ilvarado", "Javerno", "Lorcalva", "Matenza", "Navarrox", "Orvessa", "Perranza", "Quinterra", "Raveldo", "Serravon", "Taverra", "Vascoren", "Xavarra", "Zorvella", "Cadenza", "Marroven"],
    epithets: HUMAN_EPITHETS.mediogaltan, epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-mammoth-lands`, labelKey: "NAMESINNERSEA.Pack.MammothLandsHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.mammoth-lands`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Aukar", "Borgun", "Chedar", "Druvak", "Eigan", "Falkun", "Gorom", "Hrukar", "Ivarn", "Jotak", "Korgan", "Lurvak", "Mordun", "Nogar", "Orvak", "Rukan", "Skarun", "Torag", "Uldar", "Vorgan", "Yoruk", "Zundar"],
      female: ["Auka", "Borga", "Cheda", "Druva", "Eiga", "Falka", "Goroma", "Hruka", "Ivarna", "Jota", "Korga", "Lurva", "Morda", "Noga", "Orva", "Ruka", "Skara", "Tora", "Ulda", "Vorga", "Yora", "Zunda"],
      neutral: ["Auk", "Borg", "Druv", "Eigan", "Hruk", "Korg", "Mord", "Ruk", "Skar", "Vorg"]
    },
    family: [semantic("MammothLands.Family.Aurok", "Aurok"), semantic("MammothLands.Family.Bonepath", "Bonepath"), semantic("MammothLands.Family.Coldstride", "Coldstride"), semantic("MammothLands.Family.DawnTusk", "Dawntusk"), semantic("MammothLands.Family.Elkward", "Elkward"), semantic("MammothLands.Family.Frostmane", "Frostmane"), semantic("MammothLands.Family.Greatstep", "Greatstep"), semantic("MammothLands.Family.Horncaller", "Horncaller"), semantic("MammothLands.Family.Icewalker", "Icewalker"), semantic("MammothLands.Family.Jotunmark", "Jotunmark"), semantic("MammothLands.Family.KeenSpear", "Keenspear"), semantic("MammothLands.Family.LongTrail", "Longtrail"), semantic("MammothLands.Family.Mammothward", "Mammothward"), semantic("MammothLands.Family.NorthTusk", "Northtusk"), semantic("MammothLands.Family.OldTrack", "Oldtrack"), semantic("MammothLands.Family.RedAntler", "Redantler"), semantic("MammothLands.Family.Snowhide", "Snowhide"), semantic("MammothLands.Family.Tuskborn", "Tuskborn"), semantic("MammothLands.Family.Uplands", "Uplands"), semantic("MammothLands.Family.WhiteHorn", "Whitehorn"), semantic("MammothLands.Family.Winterpath", "Winterpath"), semantic("MammothLands.Family.YewSpear", "Yewspear"), semantic("MammothLands.Family.StoneTusk", "Stonetusk"), semantic("MammothLands.Family.Wolftrail", "Wolftrail")],
    epithets: HUMAN_EPITHETS.mammothLands, epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.leshy-kyonin`, labelKey: "NAMESINNERSEA.Pack.KyoninLeshy", ancestryIds: ["core.leshy"],
    cultureIds: [`${MODULE_ID}.kyonin`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator([ ["grove", "form"] ], {
        grove: [semantic("KyoninLeshy.Grove.Silver", "Silver"), semantic("KyoninLeshy.Grove.Star", "Star"), semantic("KyoninLeshy.Grove.Moon", "Moon"), semantic("KyoninLeshy.Grove.Dawn", "Dawn"), semantic("KyoninLeshy.Grove.Glass", "Glass"), semantic("KyoninLeshy.Grove.Veil", "Veil"), semantic("KyoninLeshy.Grove.Song", "Song"), semantic("KyoninLeshy.Grove.Mist", "Mist")],
        form: [semantic("KyoninLeshy.Form.Bloom", "bloom"), semantic("KyoninLeshy.Form.Bough", "bough"), semantic("KyoninLeshy.Form.Leaf", "leaf"), semantic("KyoninLeshy.Form.Reed", "reed"), semantic("KyoninLeshy.Form.Seed", "seed"), semantic("KyoninLeshy.Form.Sprig", "sprig"), semantic("KyoninLeshy.Form.Thorn", "thorn"), semantic("KyoninLeshy.Form.Vine", "vine")]
      })
    },
    epithets: [semantic("KyoninLeshy.Epithet.GroveListener", "Grove-Listener"), semantic("KyoninLeshy.Epithet.LongMemory", "Long-Memory")], epithetChance: 0.12
  },
  {
    id: `${MODULE_ID}.iruxi-mwangi`, labelKey: "NAMESINNERSEA.Pack.MwangiIruxi", ancestryIds: ["core.lizardfolk"],
    cultureIds: [`${MODULE_ID}.mwangi`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Azhk", "Bassar", "Chesek", "Drazh", "Ezzar", "Feshek", "Ghazir", "Hassak", "Izzek", "Jashara", "Khezar", "Lassik", "Mazzar", "Neshak", "Ozzir", "Qassar", "Rhezhek", "Sassir", "Tazhek", "Uzzar", "Vessik", "Zhazhar"],
      female: ["Azhka", "Bassara", "Cheseka", "Drazha", "Ezzara", "Fesheka", "Ghazira", "Hassaka", "Izzeka", "Jashara", "Khezara", "Lassika", "Mazzara", "Neshaka", "Ozzira", "Qassara", "Rhezheka", "Sassira", "Tazheka", "Uzzara", "Vessika", "Zhazhara"],
      neutral: ["Azh", "Bass", "Ches", "Drazh", "Ezz", "Khez", "Nesh", "Qass", "Tazh", "Vess"]
    },
    family: [semantic("MwangiIruxi.Family.RiverScale", "Riverscale"), semantic("MwangiIruxi.Family.SunCrest", "Suncrest"), semantic("MwangiIruxi.Family.ReedClaw", "Reedclaw"), semantic("MwangiIruxi.Family.MudTail", "Mudtail"), semantic("MwangiIruxi.Family.RainBack", "Rainback"), semantic("MwangiIruxi.Family.MangroveEye", "Mangroveeye"), semantic("MwangiIruxi.Family.RedFrill", "Redfrill"), semantic("MwangiIruxi.Family.StoneJaw", "Stonejaw"), semantic("MwangiIruxi.Family.GreenRiver", "Greenriver"), semantic("MwangiIruxi.Family.ShellWatch", "Shellwatch"), semantic("MwangiIruxi.Family.DeepPool", "Deeppool"), semantic("MwangiIruxi.Family.MarshVoice", "Marshvoice"), semantic("MwangiIruxi.Family.WarmStone", "Warmstone"), semantic("MwangiIruxi.Family.LongReed", "Longreed"), semantic("MwangiIruxi.Family.SiltFoot", "Siltfoot"), semantic("MwangiIruxi.Family.DawnScale", "Dawnscale")],
    epithets: [semantic("MwangiIruxi.Epithet.RainWatcher", "Rain-Watcher"), semantic("MwangiIruxi.Epithet.WideRiver", "Wide-River")], epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.kholo-katapeshi`, labelKey: "NAMESINNERSEA.Pack.KatapeshiKholo", ancestryIds: ["core.kholo"],
    cultureIds: [`${MODULE_ID}.katapeshi`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Akaru", "Beshan", "Chaku", "Dazir", "Ekur", "Fashan", "Gharu", "Hazar", "Ikanu", "Jeshar", "Kharu", "Lazek", "Mazur", "Nashan", "Okaru", "Pezhar", "Qashu", "Razan", "Sahru", "Tazek", "Vashan", "Zekaru"],
      female: ["Akara", "Besha", "Chaka", "Dazira", "Ekura", "Fasha", "Ghara", "Hazara", "Ikana", "Jeshara", "Khara", "Lazeka", "Mazura", "Nasha", "Okara", "Pezhara", "Qasha", "Razana", "Sahra", "Tazeka", "Vasha", "Zekara"],
      neutral: ["Akar", "Besh", "Chak", "Daz", "Eku", "Khar", "Maz", "Qash", "Sahr", "Vash"]
    },
    family: [semantic("KatapeshiKholo.Family.SaffronTrack", "Saffrontrack"), semantic("KatapeshiKholo.Family.CopperFang", "Copperfang"), semantic("KatapeshiKholo.Family.BazaarEar", "Bazaarear"), semantic("KatapeshiKholo.Family.DustPaw", "Dustpaw"), semantic("KatapeshiKholo.Family.SilkTrail", "Silktrail"), semantic("KatapeshiKholo.Family.SunJaw", "Sunjaw"), semantic("KatapeshiKholo.Family.CoinSnout", "Coinsnout"), semantic("KatapeshiKholo.Family.SpiceTrack", "Spicetrack"), semantic("KatapeshiKholo.Family.RedAwning", "Redawning"), semantic("KatapeshiKholo.Family.CaravanFang", "Caravanfang"), semantic("KatapeshiKholo.Family.LanternPaw", "Lanternpaw"), semantic("KatapeshiKholo.Family.MarketHowl", "Markethowl"), semantic("KatapeshiKholo.Family.SaltRoad", "Saltroad"), semantic("KatapeshiKholo.Family.GoldEar", "Goldear"), semantic("KatapeshiKholo.Family.NightStall", "Nightstall"), semantic("KatapeshiKholo.Family.QuickTrade", "Quicktrade"), semantic("KatapeshiKholo.Family.PepperFang", "Pepperfang"), semantic("KatapeshiKholo.Family.WideRoad", "Wideroad")],
    epithets: [semantic("KatapeshiKholo.Epithet.CleverTrade", "Clever-Trade"), semantic("KatapeshiKholo.Epithet.LongCaravan", "Long-Caravan")], epithetChance: 0.11
  },
  {
    id: `${MODULE_ID}.tengu-qadiran`, labelKey: "NAMESINNERSEA.Pack.QadiranTengu", ancestryIds: ["core.tengu"],
    cultureIds: [`${MODULE_ID}.qadiran`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator([ ["onset", "vowel", "coda"] ], {
        onset: ["Zh", "Kh", "Q", "D", "F", "J", "M", "Rh", "Sh", "T"],
        vowel: ["a", "e", "i", "o", "u", "ai", "au"],
        coda: ["dar", "mir", "resh", "van", "zar", "shir", "vek", "ram"]
      })
    },
    epithets: [semantic("QadiranTengu.Epithet.CaravanWing", "Caravan-Wing"), semantic("QadiranTengu.Epithet.SaffronFeather", "Saffron-Feather")], epithetChance: 0.11
  }
]);

export function registerRegionalCulturesIV(api) {
  for (const culture of REGIONAL_CULTURES_IV) api.content.registerNameCulture(MODULE_ID, culture);
  for (const pack of REGIONAL_NAME_PACKS_IV) api.content.registerNamePack(MODULE_ID, pack);
}
