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

export const REGIONAL_CULTURES_V = Object.freeze([
  { id: `${MODULE_ID}.alkenstari`, labelKey: "NAMESINNERSEA.Culture.Alkenstari", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.jalmerayi`, labelKey: "NAMESINNERSEA.Culture.Jalmerayi", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.shackles`, labelKey: "NAMESINNERSEA.Culture.Shackles", ancestryIds: ["core.human", "core.tengu"], automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.hermean`, labelKey: "NAMESINNERSEA.Culture.Hermean", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 5 },
  { id: `${MODULE_ID}.lirgeni-tradition`, labelKey: "NAMESINNERSEA.Culture.LirgeniTradition", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 5 },
  { id: `${MODULE_ID}.yamasan-tradition`, labelKey: "NAMESINNERSEA.Culture.YamasanTradition", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 5 },
  { id: `${MODULE_ID}.mzali`, labelKey: "NAMESINNERSEA.Culture.Mzali", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 6 },
  { id: `${MODULE_ID}.varki`, labelKey: "NAMESINNERSEA.Culture.Varki", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 5 }
]);

const EPITHETS = {
  alkenstari: [semantic("Alkenstari.Epithet.SteadyHand", "Steady-Hand"), semantic("Alkenstari.Epithet.SmokeWise", "Smoke-Wise")],
  jalmerayi: [semantic("Jalmerayi.Epithet.StillMind", "Still-Mind"), semantic("Jalmerayi.Epithet.OpenPalm", "Open-Palm")],
  shackles: [semantic("Shackles.Epithet.SaltWake", "Salt-Wake"), semantic("Shackles.Epithet.FreeSail", "Free-Sail")],
  hermean: [semantic("Hermean.Epithet.NewPurpose", "New-Purpose"), semantic("Hermean.Epithet.GoldenHorizon", "Golden-Horizon")],
  lirgeni: [semantic("Lirgeni.Epithet.StarReader", "Star-Reader"), semantic("Lirgeni.Epithet.StormRemembered", "Storm-Remembered")],
  yamasan: [semantic("Yamasan.Epithet.MarshRoad", "Marsh-Road"), semantic("Yamasan.Epithet.TideKeeper", "Tide-Keeper")],
  mzali: [semantic("Mzali.Epithet.SunWitness", "Sun-Witness"), semantic("Mzali.Epithet.LionHeart", "Lion-Heart")],
  varki: [semantic("Varki.Epithet.RavenSnow", "Raven-Snow"), semantic("Varki.Epithet.ElkPath", "Elk-Path")]
};

export const REGIONAL_NAME_PACKS_V = Object.freeze([
  {
    id: `${MODULE_ID}.human-alkenstari`, labelKey: "NAMESINNERSEA.Pack.AlkenstariHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.alkenstari`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aldric", "Bennet", "Corven", "Daston", "Edrik", "Farris", "Gerren", "Hollan", "Iver", "Jastin", "Keller", "Larkin", "Merrit", "Nolan", "Orven", "Perrin", "Quent", "Rellan", "Sutter", "Tavin", "Verrick", "Warren"],
      female: ["Aldra", "Bennara", "Corva", "Dasta", "Edria", "Farra", "Gerra", "Holla", "Ivera", "Jasta", "Kella", "Larka", "Merra", "Nola", "Orva", "Perria", "Quenta", "Rella", "Suttera", "Tavia", "Verra", "Warrena"],
      neutral: ["Alden", "Benn", "Cor", "Dast", "Iver", "Kell", "Merr", "Nol", "Quent", "Tav"]
    },
    family: ["Arrowfen", "Blyther", "Caskwell", "Dunbarrel", "Eckert", "Falloway", "Gearlen", "Harrowick", "Iveson", "Jarrow", "Kestner", "Lockmere", "Merrick", "Norran", "Orswick", "Pellum", "Quarryn", "Rivett", "Sabley", "Ternick", "Vossan", "Weldren", "Yarrowick", "Zeller"],
    epithets: EPITHETS.alkenstari, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-jalmerayi`, labelKey: "NAMESINNERSEA.Pack.JalmerayiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.jalmerayi`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aviran", "Bhadren", "Chandir", "Devanu", "Ekaran", "Farish", "Govindar", "Hariven", "Ishaan", "Javiren", "Keshav", "Lohiran", "Manesh", "Naviren", "Ojasen", "Pravan", "Rakesh", "Sahiren", "Tarunesh", "Udayan", "Varakesh", "Yashiren"],
      female: ["Avira", "Bhadra", "Chandira", "Devani", "Ekara", "Farisha", "Govinda", "Hariva", "Ishaana", "Javira", "Keshavi", "Lohira", "Manesha", "Navira", "Ojasa", "Pravana", "Rakesha", "Sahira", "Tarunesha", "Udaya", "Varakesha", "Yashira"],
      neutral: ["Avi", "Bhad", "Chandi", "Devan", "Isha", "Kesh", "Navi", "Ojas", "Sahi", "Uday"]
    },
    family: ["Amarshen", "Bhadrasen", "Chandavar", "Devakari", "Eshanar", "Faravesh", "Govaran", "Harivash", "Isharun", "Javadesh", "Kesharan", "Lohavari", "Manashet", "Navarun", "Ojashar", "Pravades", "Rakeshan", "Sahiraj", "Taravesh", "Udayar", "Varakari", "Yashavan", "Niravesh", "Somaran"],
    epithets: EPITHETS.jalmerayi, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-shackles`, labelKey: "NAMESINNERSEA.Pack.ShacklesHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.shackles`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Avaro", "Bramel", "Coro", "Dastan", "Edrio", "Fennan", "Gavio", "Harker", "Isharo", "Jerran", "Kaleo", "Loran", "Maroq", "Nerio", "Orsik", "Pavel", "Quarro", "Rendo", "Savio", "Toren", "Vasko", "Warrin"],
      female: ["Avara", "Bramela", "Cora", "Dasta", "Edria", "Fenna", "Gavia", "Harka", "Ishara", "Jerra", "Kalea", "Lora", "Mara", "Neria", "Orsa", "Pavela", "Quarra", "Renda", "Savia", "Torena", "Vaska", "Warrina"],
      neutral: ["Avar", "Bram", "Coro", "Dast", "Fenn", "Isha", "Kale", "Maro", "Rend", "Vask"]
    },
    family: ["Aldermast", "Brineck", "Coravel", "Darsen", "Esker", "Faircross", "Gannet", "Harrowtide", "Iverne", "Jastrel", "Kestrel", "Lowen", "Marroway", "Nashrel", "Orwick", "Pellar", "Quillan", "Ravelle", "Sablewake", "Tern", "Vardane", "Wexler", "Yarrow", "Zarell"],
    epithets: EPITHETS.shackles, epithetChance: 0.11
  },
  {
    id: `${MODULE_ID}.human-hermean`, labelKey: "NAMESINNERSEA.Pack.HermeanHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.hermean`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Aleron", "Berys", "Calion", "Demeron", "Elaris", "Faelor", "Galenor", "Helion", "Icaron", "Jovaris", "Kaelor", "Leontes", "Marenos", "Nerion", "Olyran", "Perion", "Quoralis", "Serenus", "Theron", "Valion", "Xanderis", "Zoren"],
      female: ["Alera", "Berysa", "Calia", "Demera", "Elaria", "Faelora", "Galena", "Helia", "Icara", "Jovaria", "Kaelora", "Leonta", "Marena", "Neria", "Olyra", "Peria", "Quoralia", "Serena", "Thera", "Valia", "Xandera", "Zorena"],
      neutral: ["Aler", "Berys", "Cali", "Demer", "Heli", "Icar", "Kael", "Neri", "Seren", "Vali"]
    },
    family: ["Aurelis", "Belorian", "Cendris", "Damaris", "Elarion", "Feneris", "Galenis", "Heloran", "Iveris", "Joralen", "Kaerion", "Lumeris", "Maralis", "Nerovan", "Orelis", "Peradon", "Quenaris", "Seralion", "Theralis", "Valeron", "Xandris", "Yseron", "Zoralis", "Avenor"],
    epithets: EPITHETS.hermean, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-lirgeni-tradition`, labelKey: "NAMESINNERSEA.Pack.LirgeniHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.lirgeni-tradition`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Averu", "Belashi", "Cazeri", "Dovaru", "Eshani", "Faleru", "Gavashi", "Horemi", "Ilaru", "Jaseni", "Kavaru", "Lomashi", "Merenu", "Navashi", "Oreni", "Palaru", "Qaseni", "Ravaru", "Selashi", "Toremi", "Vasharu", "Zerenu"],
      female: ["Avera", "Belasha", "Cazera", "Dovara", "Eshana", "Falera", "Gavasha", "Horema", "Ilara", "Jasena", "Kavara", "Lomasha", "Merena", "Navasha", "Orena", "Palara", "Qasena", "Ravara", "Selasha", "Torema", "Vashara", "Zerena"],
      neutral: ["Aver", "Bela", "Cazer", "Dovar", "Eshan", "Ilar", "Kavar", "Meren", "Qasen", "Torem"]
    },
    family: ["Asteral", "Belavun", "Cazorin", "Demerai", "Eshavar", "Falerin", "Gavorel", "Horazan", "Ilaver", "Jasorin", "Kavalen", "Lomaren", "Merovar", "Navorel", "Orasai", "Paleren", "Qasoran", "Ravalen", "Selorin", "Toravel", "Vasharen", "Zerovan", "Calisar", "Nemeran"],
    epithets: EPITHETS.lirgeni, epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-yamasan-tradition`, labelKey: "NAMESINNERSEA.Pack.YamasanHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.yamasan-tradition`], supportedLocales: LOCALES, weight: 11,
    given: {
      male: ["Amano", "Besharo", "Cavero", "Dumari", "Elaro", "Fumari", "Gashan", "Haruno", "Isaro", "Jumari", "Kasaro", "Lumano", "Mashiro", "Navaro", "Oshano", "Pumari", "Rashano", "Sumaro", "Tavuno", "Umaro", "Veshano", "Yorami"],
      female: ["Amana", "Beshara", "Cavera", "Dumara", "Elara", "Fumara", "Gasha", "Haruna", "Isara", "Jumara", "Kasara", "Lumana", "Mashira", "Navara", "Oshana", "Pumara", "Rashana", "Sumara", "Tavuna", "Umara", "Veshana", "Yorami"],
      neutral: ["Aman", "Besha", "Cave", "Duma", "Haru", "Juma", "Luma", "Osha", "Suma", "Vesha"]
    },
    family: ["Amarun", "Beshori", "Cavaran", "Dumarel", "Elarun", "Fumaren", "Gashori", "Haravel", "Isarun", "Jumarel", "Kasarun", "Lumari", "Masharel", "Navarun", "Oshari", "Pumavel", "Rashari", "Sumaren", "Tavorel", "Umarin", "Veshari", "Yoravel", "Calurun", "Nemari"],
    epithets: EPITHETS.yamasan, epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-mzali`, labelKey: "NAMESINNERSEA.Pack.MzaliHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.mzali`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Abeku", "Baraka", "Chuma", "Dazani", "Ekoro", "Faraji", "Gomari", "Hasani", "Imaro", "Jabali", "Kitoza", "Lumari", "Mavuno", "Naziri", "Odari", "Pekari", "Qumari", "Rashidi", "Sabaro", "Tendaji", "Ujari", "Zubaro"],
      female: ["Abeka", "Baraka", "Chuma", "Dazana", "Ekora", "Faraja", "Gomara", "Hasana", "Imara", "Jabala", "Kitoza", "Lumara", "Mavuna", "Nazira", "Odara", "Pekara", "Qumara", "Rashida", "Sabara", "Tendaja", "Ujara", "Zubara"],
      neutral: ["Abe", "Bara", "Chum", "Daza", "Eko", "Jaba", "Mavu", "Nazu", "Saba", "Uja"]
    },
    family: ["Abaro", "Bakalun", "Chumadi", "Dazaru", "Ekoran", "Farado", "Gomari", "Hasaru", "Imbalo", "Jabari", "Kitoru", "Lumado", "Mavari", "Nazaro", "Odalu", "Pekaro", "Qumadi", "Rasharo", "Sabalu", "Tendaji", "Ujaro", "Zubadi", "Kezaro", "Maluri"],
    epithets: EPITHETS.mzali, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-varki`, labelKey: "NAMESINNERSEA.Pack.VarkiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.varki`], supportedLocales: LOCALES, weight: 12,
    generators: {
      given: componentGenerator([["root", "ending"]], {
        root: ["Sav", "An", "Bek", "Chav", "Dor", "Em", "Gan", "Har", "Il", "Kan", "Lor", "Mar", "Nan", "Or", "Pak", "Qan", "Sar", "Tal", "Ur", "Var"],
        ending: ["a", "i", "o", "u", "ak", "en", "ik", "un", "ara", "iri", "anu", "oro"]
      })
    },
    epithets: EPITHETS.varki, epithetChance: 0.12
  },
  {
    id: `${MODULE_ID}.tengu-shackles`, labelKey: "NAMESINNERSEA.Pack.ShacklesTengu", ancestryIds: ["core.tengu"],
    cultureIds: [`${MODULE_ID}.shackles`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator([["onset", "body", "coda"]], {
        onset: ["K", "Kr", "R", "Sk", "T", "V", "Z", "Ch"],
        body: ["a", "e", "i", "o", "u", "ai"],
        coda: ["vark", "rask", "tarn", "kesh", "vren", "zhar", "skel", "drin"]
      })
    },
    epithets: [semantic("ShacklesTengu.Epithet.BlackWake", "Black-Wake"), semantic("ShacklesTengu.Epithet.StormFeather", "Storm-Feather")], epithetChance: 0.13
  },
  {
    id: `${MODULE_ID}.kholo-osiriani`, labelKey: "NAMESINNERSEA.Pack.OsirianiKholo", ancestryIds: ["core.kholo"],
    cultureIds: [`${MODULE_ID}.osiriani`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Akhari", "Beshet", "Djaru", "Eshaq", "Fahru", "Ghezar", "Hekaru", "Ishaq", "Khamet", "Mazar", "Neshu", "Okaru", "Qeshar", "Rakhut", "Sahru", "Tazem", "Ushar", "Vekhet", "Wazir", "Yekaru", "Zahmet", "Zeshu"],
      female: ["Akhara", "Besheta", "Djara", "Eshaqa", "Fahra", "Ghezara", "Hekara", "Ishaqa", "Khameta", "Mazara", "Nesha", "Okara", "Qeshara", "Rakhuta", "Sahra", "Tazema", "Ushara", "Vekheta", "Wazira", "Yekara", "Zahmeta", "Zesha"],
      neutral: ["Akhar", "Besh", "Djar", "Fahr", "Ghez", "Kham", "Maz", "Qesh", "Sahr", "Zahm"]
    },
    family: [semantic("OsirianiKholo.Family.SunFang", "Sunfang"), semantic("OsirianiKholo.Family.ReedTrack", "Reedtrack"), semantic("OsirianiKholo.Family.DuneEar", "Duneear"), semantic("OsirianiKholo.Family.RiverJaw", "Riverjaw"), semantic("OsirianiKholo.Family.StonePaw", "Stonepaw"), semantic("OsirianiKholo.Family.TempleTrack", "Templetrack"), semantic("OsirianiKholo.Family.SandHowl", "Sandhowl"), semantic("OsirianiKholo.Family.GoldFang", "Goldfang"), semantic("OsirianiKholo.Family.PapyrusEar", "Papyrusear"), semantic("OsirianiKholo.Family.DawnPaw", "Dawnpaw"), semantic("OsirianiKholo.Family.SiltJaw", "Siltjaw"), semantic("OsirianiKholo.Family.RedDune", "Reddune"), semantic("OsirianiKholo.Family.LongRiver", "Longriver"), semantic("OsirianiKholo.Family.TombWatch", "Tombwatch"), semantic("OsirianiKholo.Family.SunTrack", "Suntrack"), semantic("OsirianiKholo.Family.NightReed", "Nightreed"), semantic("OsirianiKholo.Family.CopperPaw", "Copperpaw"), semantic("OsirianiKholo.Family.WideDune", "Widedune")],
    epithets: [semantic("OsirianiKholo.Epithet.LongMemory", "Long-Memory"), semantic("OsirianiKholo.Epithet.DuneWatcher", "Dune-Watcher")], epithetChance: 0.11
  },
  {
    id: `${MODULE_ID}.kholo-nexian`, labelKey: "NAMESINNERSEA.Pack.NexianKholo", ancestryIds: ["core.kholo"],
    cultureIds: [`${MODULE_ID}.nexian`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Azeru", "Beshan", "Cazek", "Dhevar", "Ezhar", "Fazek", "Ghavun", "Heskar", "Izek", "Jhavur", "Kazer", "Leshan", "Mazek", "Nhevar", "Ozhak", "Pezar", "Qhaver", "Rhazek", "Sazur", "Tevhar", "Vezek", "Zhavun"],
      female: ["Azera", "Besha", "Cazeka", "Dhevara", "Ezhara", "Fazeka", "Ghavuna", "Heskara", "Izeka", "Jhavura", "Kazera", "Leshana", "Mazeka", "Nhevara", "Ozhaka", "Pezara", "Qhavera", "Rhazeka", "Sazura", "Tevhara", "Vezeka", "Zhavuna"],
      neutral: ["Azer", "Besh", "Caz", "Dhev", "Ezh", "Ghav", "Izek", "Kaz", "Qhav", "Vez"]
    },
    family: [semantic("NexianKholo.Family.GlassFang", "Glassfang"), semantic("NexianKholo.Family.SpellTrack", "Spelltrack"), semantic("NexianKholo.Family.SilverJaw", "Silverjaw"), semantic("NexianKholo.Family.GolemEar", "Golemear"), semantic("NexianKholo.Family.BluePaw", "Bluepaw"), semantic("NexianKholo.Family.RuneHowl", "Runehowl"), semantic("NexianKholo.Family.BrightFang", "Brightfang"), semantic("NexianKholo.Family.TowerTrack", "Towertrack"), semantic("NexianKholo.Family.MirrorEar", "Mirrorear"), semantic("NexianKholo.Family.ArcaneJaw", "Arcanejaw"), semantic("NexianKholo.Family.CopperRune", "Copperrune"), semantic("NexianKholo.Family.LanternPaw", "Lanternpaw"), semantic("NexianKholo.Family.QuickGlyph", "Quickglyph"), semantic("NexianKholo.Family.WardFang", "Wardfang"), semantic("NexianKholo.Family.DeepRune", "Deeprune"), semantic("NexianKholo.Family.GlassHowl", "Glasshowl"), semantic("NexianKholo.Family.StarJaw", "Starjaw"), semantic("NexianKholo.Family.InkTrack", "Inktrack")],
    epithets: [semantic("NexianKholo.Epithet.GlyphReader", "Glyph-Reader"), semantic("NexianKholo.Epithet.WardBreaker", "Ward-Breaker")], epithetChance: 0.11
  },
  {
    id: `${MODULE_ID}.ysoki-ustalavic`, labelKey: "NAMESINNERSEA.Pack.UstalavicYsoki", ancestryIds: ["core.ratfolk"],
    cultureIds: [`${MODULE_ID}.ustalavic`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator([["root", "ending"]], {
        root: ["Bran", "Caz", "Dren", "Fes", "Grim", "Hes", "Ivr", "Kez", "Lor", "Marn", "Nes", "Orv", "Pez", "Ruz", "Skar", "Ves"],
        ending: ["a", "i", "o", "ek", "en", "ik", "ka", "ko", "ra", "ri"]
      })
    },
    epithets: [semantic("UstalavicYsoki.Epithet.CandleWhisker", "Candle-Whisker"), semantic("UstalavicYsoki.Epithet.CryptRunner", "Crypt-Runner")], epithetChance: 0.12
  }
]);

export function registerRegionalCulturesV(api) {
  for (const culture of REGIONAL_CULTURES_V) api.content.registerNameCulture(MODULE_ID, culture);
  for (const pack of REGIONAL_NAME_PACKS_V) api.content.registerNamePack(MODULE_ID, pack);
}
