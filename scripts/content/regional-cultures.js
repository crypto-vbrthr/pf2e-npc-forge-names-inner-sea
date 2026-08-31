const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const LOCALES = ["en", "de"];

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

const H = ["core.human"];

export const REGIONAL_CULTURES = Object.freeze([
  { id: `${MODULE_ID}.shoanti`, labelKey: "NAMESINNERSEA.Culture.Shoanti", ancestryIds: H, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.kellid`, labelKey: "NAMESINNERSEA.Culture.Kellid", ancestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.mwangi`, labelKey: "NAMESINNERSEA.Culture.Mwangi", ancestryIds: H, supportedLocales: LOCALES, weight: 9 },
  { id: `${MODULE_ID}.vudrani`, labelKey: "NAMESINNERSEA.Culture.Vudrani", ancestryIds: H, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.sarkorian`, labelKey: "NAMESINNERSEA.Culture.Sarkorian", ancestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.brevic`, labelKey: "NAMESINNERSEA.Culture.Brevic", ancestryIds: H, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.rahadoumi`, labelKey: "NAMESINNERSEA.Culture.Rahadoumi", ancestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.nidalese`, labelKey: "NAMESINNERSEA.Culture.Nidalese", ancestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.kyonin`, labelKey: "NAMESINNERSEA.Culture.Kyonin", ancestryIds: ["core.elf"], supportedLocales: LOCALES, weight: 12 },
  { id: `${MODULE_ID}.five-kings`, labelKey: "NAMESINNERSEA.Culture.FiveKings", ancestryIds: ["core.dwarf"], supportedLocales: LOCALES, weight: 12 },
  { id: `${MODULE_ID}.belkzen`, labelKey: "NAMESINNERSEA.Culture.Belkzen", ancestryIds: ["core.orc"], supportedLocales: LOCALES, weight: 12 }
]);

const humanEpithet = {
  shoanti: [semantic("Shoanti.Epithet.CliffRunner", "Cliff-Runner"), semantic("Shoanti.Epithet.StormMarked", "Storm-Marked")],
  kellid: [semantic("Kellid.Epithet.IronHunter", "Iron-Hunter"), semantic("Kellid.Epithet.WinterScar", "Winter-Scar")],
  mwangi: [semantic("Mwangi.Epithet.SunFriend", "Sun-Friend"), semantic("Mwangi.Epithet.RiverWise", "River-Wise")],
  vudrani: [semantic("Vudrani.Epithet.LotusVoice", "Lotus-Voice"), semantic("Vudrani.Epithet.ManyRoads", "of Many Roads")],
  sarkorian: [semantic("Sarkorian.Epithet.SpiritWalker", "Spirit-Walker"), semantic("Sarkorian.Epithet.GreenWard", "Green-Ward")],
  brevic: [semantic("Brevic.Epithet.SnowRider", "Snow-Rider"), semantic("Brevic.Epithet.OathKeeper", "Oath-Keeper")],
  rahadoumi: [semantic("Rahadoumi.Epithet.SaltWind", "Salt-Wind"), semantic("Rahadoumi.Epithet.FreeMind", "Free-Mind")],
  nidalese: [semantic("Nidalese.Epithet.CandleKeeper", "Candle-Keeper"), semantic("Nidalese.Epithet.NightVeil", "Night-Veil")]
};

export const REGIONAL_NAME_PACKS = Object.freeze([
  {
    id: `${MODULE_ID}.human-shoanti`, labelKey: "NAMESINNERSEA.Pack.ShoantiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.shoanti`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Akan", "Barek", "Chogan", "Delsin", "Ekan", "Garruk", "Hekar", "Istan", "Jarek", "Kodan", "Loran", "Mako", "Narek", "Oran", "Pavan", "Qatak", "Rokan", "Saren", "Tarak", "Ulan", "Vekar", "Wayan"],
      female: ["Asha", "Bena", "Chira", "Daka", "Eleni", "Fara", "Hana", "Ivara", "Jani", "Kaya", "Luma", "Mara", "Nala", "Oria", "Pela", "Rani", "Sava", "Tala", "Una", "Vara", "Wena", "Yara"],
      neutral: ["Ash", "Dari", "Eri", "Kai", "Lio", "Maki", "Nari", "Rin", "Sari", "Tavi"]
    },
    family: ["Ashpeak", "Blackstone", "Cloudstep", "Dawnridge", "Embertrail", "Flinthand", "Greyhawk", "Highmesa", "Ironcliff", "Longstride", "Moonridge", "Nightstone", "Redcanyon", "Riverbone", "Skyrunner", "Stonebow", "Stormtrail", "Sunscar", "Tallpine", "Thunderhead", "Windcliff", "Wolfcrest", "Brightspear", "Rainmark"],
    epithets: humanEpithet.shoanti, epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-kellid`, labelKey: "NAMESINNERSEA.Pack.KellidHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.kellid`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Arvak", "Boran", "Dren", "Egar", "Falk", "Grom", "Harl", "Ivak", "Jor", "Karn", "Lod", "Marek", "Norg", "Orvak", "Pran", "Rusk", "Skar", "Torg", "Urek", "Varn", "Wold", "Zoran"],
      female: ["Arna", "Breda", "Dara", "Esha", "Freka", "Gara", "Halla", "Irna", "Jora", "Kara", "Lena", "Mara", "Nara", "Orla", "Rava", "Sena", "Tara", "Ursa", "Vara", "Wira", "Yara", "Zora"],
      neutral: ["Ar", "Dar", "Fen", "Jor", "Kar", "Lor", "Nar", "Rin", "Tor", "Var"]
    },
    family: ["Ashwolf", "Bearscar", "Coldhand", "Darkpine", "Elkhorn", "Frostmark", "Greyhide", "Hardstone", "Ironjaw", "Longwinter", "Mammothstep", "Northwind", "Oakshield", "Redaxe", "Snowborn", "Stonehide", "Stormbone", "Tallstag", "Wolfblood", "Winterborn", "Whitepeak", "Ravenmark", "Coldwater", "Blackfir"],
    epithets: humanEpithet.kellid, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-mwangi`, labelKey: "NAMESINNERSEA.Pack.MwangiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.mwangi`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Abeni", "Bakari", "Chuma", "Dayo", "Esheko", "Fadili", "Jengo", "Kato", "Kele", "Kwame", "Mosi", "Nuru", "Obasi", "Paki", "Rashidi", "Sefu", "Taji", "Tano", "Uzoma", "Wekesa", "Zuberi", "Amari"],
      female: ["Adia", "Asha", "Binta", "Deka", "Eshe", "Fara", "Imani", "Jaha", "Kesi", "Lela", "Malaika", "Nia", "Nyota", "Penda", "Raziya", "Sanaa", "Tala", "Tia", "Uzuri", "Wema", "Zahra", "Amara"],
      neutral: ["Amani", "Dara", "Imani", "Kito", "Nuru", "Pili", "Safi", "Taji", "Zuri", "Mosi"]
    },
    family: ["Abayomi", "Bantala", "Chikondi", "Dumisa", "Ekonji", "Farakai", "Jendayi", "Kambala", "Kisongo", "Lumumba", "Makori", "Mbeki", "Nandoro", "Olaye", "Pambani", "Rukaro", "Sangala", "Tembwe", "Umari", "Wakili", "Zawadi", "Kafele", "Moyo", "Ndembo"],
    epithets: humanEpithet.mwangi, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-vudrani`, labelKey: "NAMESINNERSEA.Pack.VudraniHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.vudrani`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Adit", "Arjun", "Bahir", "Devak", "Girish", "Harun", "Ishan", "Javin", "Kamal", "Kiran", "Mahir", "Nalin", "Ojas", "Pravan", "Rakesh", "Sajan", "Taran", "Uday", "Varun", "Yash", "Zahir", "Anik"],
      female: ["Aditi", "Anaya", "Devi", "Ila", "Jaya", "Kalini", "Kavya", "Lalita", "Mira", "Nisha", "Padma", "Rani", "Sahana", "Tara", "Uma", "Vanya", "Yamini", "Zara", "Ishani", "Nalini", "Priya", "Samira"],
      neutral: ["Adi", "Arin", "Devi", "Ira", "Kavi", "Mahi", "Navi", "Ravi", "Suri", "Vani"]
    },
    family: ["Avaran", "Bhasari", "Chandran", "Devani", "Gavari", "Harani", "Indrani", "Jasari", "Kaviran", "Lakari", "Mahari", "Navarin", "Oshari", "Pavani", "Rajari", "Sarayan", "Talvari", "Udarin", "Varashi", "Yavari", "Zamari", "Keshari", "Nadari", "Pravani"],
    epithets: humanEpithet.vudrani, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-sarkorian`, labelKey: "NAMESINNERSEA.Pack.SarkorianHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.sarkorian`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aren", "Bregan", "Corren", "Davor", "Eiran", "Ferren", "Galen", "Hadrik", "Iven", "Joran", "Kael", "Loric", "Maren", "Nerin", "Orren", "Perrik", "Rovan", "Saren", "Toren", "Urik", "Varan", "Wren"],
      female: ["Aila", "Brena", "Cerys", "Dara", "Eira", "Fenna", "Gwenna", "Hela", "Iria", "Jessa", "Kara", "Liora", "Mara", "Nessa", "Orla", "Pera", "Rhea", "Sena", "Talia", "Una", "Vela", "Willa"],
      neutral: ["Ari", "Cair", "Eri", "Fen", "Ira", "Lio", "Maren", "Ren", "Tavi", "Wren"]
    },
    family: ["Ashgrove", "Briarward", "Cairnwatch", "Deerpath", "Elderwood", "Fernwalker", "Greenmantle", "Hartgrove", "Ivyward", "Juniper", "Mossbrook", "Oakensong", "Pineward", "Ravenwood", "Rowanmark", "Spiritgrove", "Stagwatch", "Thornward", "Willowmark", "Wolfgrove", "Yewsong", "Stonecircle", "Mooncairn", "Wildbranch"],
    epithets: humanEpithet.sarkorian, epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-brevic`, labelKey: "NAMESINNERSEA.Pack.BrevicHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.brevic`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Alek", "Boris", "Dmitar", "Evgen", "Fyodor", "Gavril", "Ilya", "Kirill", "Lev", "Mikhail", "Nikol", "Oleg", "Pavel", "Radomir", "Sergei", "Tomas", "Vadim", "Viktor", "Yakov", "Yuri", "Zarek", "Anton"],
      female: ["Anya", "Daria", "Elena", "Galina", "Irina", "Katya", "Lada", "Marina", "Nadia", "Oksana", "Polina", "Raisa", "Sasha", "Svetla", "Tanya", "Valya", "Vera", "Yelena", "Zoya", "Alina", "Mira", "Sonya"],
      neutral: ["Ales", "Dani", "Ira", "Mika", "Nika", "Sasha", "Toma", "Val", "Vanya", "Yuri"]
    },
    family: ["Aldorin", "Berezov", "Chernov", "Dragun", "Elisarov", "Fedoren", "Gavrin", "Ilvarov", "Karsov", "Lebedev", "Mirov", "Nazarov", "Orlov", "Petren", "Radovin", "Sokolov", "Taranov", "Velesov", "Volarin", "Yarovin", "Zorin", "Kozarin", "Morozin", "Stoyan"],
    epithets: humanEpithet.brevic, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-rahadoumi`, labelKey: "NAMESINNERSEA.Pack.RahadoumiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.rahadoumi`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Adil", "Bashir", "Daniyar", "Faris", "Halim", "Idris", "Jamal", "Karim", "Latif", "Malik", "Nadir", "Omar", "Qasim", "Rafi", "Samir", "Tariq", "Umar", "Wahid", "Yasir", "Zafir", "Harun", "Khalid"],
      female: ["Amina", "Basira", "Dalia", "Farah", "Hadiya", "Inaya", "Jamila", "Karima", "Layla", "Mariam", "Nadia", "Rania", "Safiya", "Salma", "Samira", "Tahira", "Yara", "Zahra", "Nura", "Rima", "Sana", "Zaina"],
      neutral: ["Ari", "Dara", "Iman", "Jamil", "Nuri", "Rafi", "Sami", "Tari", "Yara", "Zain"]
    },
    family: ["Abdari", "Bahari", "Damar", "Farouqi", "Hadari", "Iskari", "Jannari", "Karimi", "Lahari", "Marazi", "Nadiri", "Qadiri", "Rahmani", "Sabari", "Talari", "Uthari", "Waziri", "Yamani", "Zahiri", "Akhari", "Daryan", "Hassari", "Maziri", "Rashan"],
    epithets: humanEpithet.rahadoumi, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-nidalese`, labelKey: "NAMESINNERSEA.Pack.NidaleseHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.nidalese`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Adrian", "Beren", "Corvin", "Darian", "Edrik", "Ferran", "Gavren", "Hadrin", "Iven", "Jarek", "Korven", "Lucan", "Marek", "Nerian", "Oren", "Pavel", "Rovan", "Severin", "Tavian", "Valen", "Varek", "Zorin"],
      female: ["Adela", "Bela", "Celia", "Daria", "Elena", "Fiora", "Gavria", "Helena", "Irina", "Jessa", "Kora", "Livia", "Mara", "Neria", "Olia", "Petra", "Ravia", "Sabina", "Talia", "Vera", "Vesna", "Zara"],
      neutral: ["Ari", "Dani", "Eli", "Ira", "Jori", "Mika", "Neri", "Sasha", "Toma", "Val"]
    },
    family: ["Ashveil", "Blackmere", "Candlewick", "Duskryn", "Evenfall", "Graven", "Holloway", "Ivoryn", "Karsen", "Lowmere", "Mournwell", "Nightvale", "Palevine", "Ravenmere", "Shadecroft", "Stillwater", "Thornevale", "Umber", "Velloran", "Whitethorn", "Wraithmere", "Yarrowen", "Darkwell", "Gloamridge"],
    epithets: humanEpithet.nidalese, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.elf-kyonin`, labelKey: "NAMESINNERSEA.Pack.KyoninElf", ancestryIds: ["core.elf"],
    cultureIds: [`${MODULE_ID}.kyonin`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Aelion", "Caerith", "Daelis", "Elarion", "Faelar", "Gaereth", "Ithran", "Kaelir", "Laerion", "Maelor", "Naeris", "Orith", "Phaelor", "Quarion", "Raelis", "Saerith", "Taelion", "Vaeril", "Xandrel", "Ythar", "Zaelir", "Aereth"],
      female: ["Aelira", "Caelynn", "Daeriel", "Elanwe", "Faelira", "Gaelith", "Ilyra", "Kaelira", "Laeriel", "Maelis", "Naeriel", "Oriane", "Phaedra", "Quelya", "Raelith", "Saelira", "Taelira", "Vaelora", "Xylara", "Yllira", "Zaeriel", "Aeriel"],
      neutral: ["Aerin", "Cael", "Elior", "Faen", "Iriel", "Kael", "Lorien", "Nael", "Sael", "Vael", "Yriel", "Zae"]
    },
    family: ["Aelthorin", "Brightbough", "Caelaris", "Dawnweave", "Elarien", "Faerwyn", "Goldenleaf", "Ilyrion", "Kaelthas", "Lethariel", "Moonbough", "Naelaris", "Orinthal", "Phaeriel", "Quenlaris", "Silverbranch", "Starbough", "Taelaris", "Vaelorian", "Whiteleaf", "Yllarien", "Zephyrbough", "Greenstar", "Sunweave"],
    epithets: [semantic("Kyonin.Epithet.StarListener", "Star-Listener"), semantic("Kyonin.Epithet.GreenWarden", "Green-Warden")], epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.dwarf-five-kings`, labelKey: "NAMESINNERSEA.Pack.FiveKingsDwarf", ancestryIds: ["core.dwarf"],
    cultureIds: [`${MODULE_ID}.five-kings`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Argrim", "Baldor", "Dorin", "Edrik", "Fargrim", "Garrik", "Harrek", "Ivarn", "Keldor", "Mardek", "Norgrim", "Orrek", "Rurik", "Storn", "Tharek", "Uldar", "Varrik", "Wuldrin", "Yorik", "Zarn", "Brokk", "Dagrim"],
      female: ["Alva", "Brenna", "Dagna", "Eira", "Frida", "Gerta", "Hilda", "Inga", "Kelda", "Marda", "Norna", "Orla", "Runa", "Sigrun", "Thora", "Ulla", "Varda", "Yrsa", "Zilda", "Brynja", "Dagnae", "Hedra"],
      neutral: ["Ari", "Bryn", "Dag", "Eir", "Keld", "Nori", "Run", "Sten", "Tor", "Var"]
    },
    generators: {
      family: componentGenerator([["prefix", "suffix"]], {
        prefix: [semantic("FiveKings.Prefix.Iron", "Iron"), semantic("FiveKings.Prefix.Deep", "Deep"), semantic("FiveKings.Prefix.Stone", "Stone"), semantic("FiveKings.Prefix.Gold", "Gold"), semantic("FiveKings.Prefix.Steel", "Steel"), semantic("FiveKings.Prefix.Anvil", "Anvil"), semantic("FiveKings.Prefix.Ore", "Ore"), semantic("FiveKings.Prefix.Forge", "Forge"), semantic("FiveKings.Prefix.Copper", "Copper"), semantic("FiveKings.Prefix.Hammer", "Hammer"), semantic("FiveKings.Prefix.Mountain", "Mountain"), semantic("FiveKings.Prefix.Crystal", "Crystal")],
        suffix: [semantic("FiveKings.Suffix.Hand", "hand"), semantic("FiveKings.Suffix.Brow", "brow"), semantic("FiveKings.Suffix.Beard", "beard"), semantic("FiveKings.Suffix.Shield", "shield"), semantic("FiveKings.Suffix.Hammer", "hammer"), semantic("FiveKings.Suffix.Ward", "ward"), semantic("FiveKings.Suffix.Delver", "delver"), semantic("FiveKings.Suffix.Heart", "heart"), semantic("FiveKings.Suffix.Vein", "vein"), semantic("FiveKings.Suffix.Forge", "forge")]
      })
    },
    epithets: [semantic("FiveKings.Epithet.DeepDelver", "Deep-Delver"), semantic("FiveKings.Epithet.Forgewise", "Forge-Wise")], epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.orc-belkzen`, labelKey: "NAMESINNERSEA.Pack.BelkzenOrc", ancestryIds: ["core.orc"],
    cultureIds: [`${MODULE_ID}.belkzen`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Agrok", "Brakka", "Dorg", "Gharuk", "Hruk", "Karg", "Krosh", "Mogak", "Narg", "Orzug", "Raguk", "Skarn", "Thok", "Ugrak", "Varg", "Wroth", "Zogar", "Brug", "Drak", "Goruk", "Krag", "Murd"],
      female: ["Arga", "Brakka", "Dura", "Ghara", "Harka", "Kara", "Korga", "Magra", "Nura", "Orga", "Raska", "Shara", "Thura", "Urga", "Vara", "Warka", "Zara", "Bruga", "Draka", "Gora", "Kraga", "Murda"],
      neutral: ["Ark", "Brak", "Dru", "Gar", "Krag", "Mok", "Nar", "Ruk", "Thar", "Vok"]
    },
    generators: {
      family: componentGenerator([["prefix", "suffix"]], {
        prefix: [semantic("Belkzen.Prefix.Iron", "Iron"), semantic("Belkzen.Prefix.Blood", "Blood"), semantic("Belkzen.Prefix.Ash", "Ash"), semantic("Belkzen.Prefix.Bone", "Bone"), semantic("Belkzen.Prefix.Red", "Red"), semantic("Belkzen.Prefix.Black", "Black"), semantic("Belkzen.Prefix.Stone", "Stone"), semantic("Belkzen.Prefix.Wolf", "Wolf"), semantic("Belkzen.Prefix.Boar", "Boar"), semantic("Belkzen.Prefix.Scar", "Scar"), semantic("Belkzen.Prefix.Thunder", "Thunder"), semantic("Belkzen.Prefix.Smoke", "Smoke")],
        suffix: [semantic("Belkzen.Suffix.Fist", "fist"), semantic("Belkzen.Suffix.Tusk", "tusk"), semantic("Belkzen.Suffix.Axe", "axe"), semantic("Belkzen.Suffix.Breaker", "breaker"), semantic("Belkzen.Suffix.Scar", "scar"), semantic("Belkzen.Suffix.Banner", "banner"), semantic("Belkzen.Suffix.Eye", "eye"), semantic("Belkzen.Suffix.Jaw", "jaw"), semantic("Belkzen.Suffix.Roar", "roar"), semantic("Belkzen.Suffix.Step", "step")]
      })
    },
    epithets: [semantic("Belkzen.Epithet.WarLeader", "War-Leader"), semantic("Belkzen.Epithet.NeverYielding", "Never-Yielding")], epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.tengu-varisian-migrant`, labelKey: "NAMESINNERSEA.Pack.VarisianTengu", ancestryIds: ["core.tengu"],
    cultureIds: [`${MODULE_ID}.varisian`], supportedLocales: LOCALES, weight: 14,
    generators: { given: componentGenerator([["onset", "middle", "ending"]], { onset: ["Ka", "Ko", "Ma", "Ra", "Ro", "Ta", "To", "Tsu"], middle: ["va", "ri", "sha", "sa", "ro", "mir", "dar", "ka", "lo", "ya"], ending: ["k", "ra", "ri", "ko", "sha", "v"] }) },
    epithets: [semantic("TenguVarisian.Epithet.RoadWing", "Road-Wing"), semantic("TenguVarisian.Epithet.CardReader", "Card-Reader")], epithetChance: 0.12
  },
  {
    id: `${MODULE_ID}.tengu-taldan-migrant`, labelKey: "NAMESINNERSEA.Pack.TaldanTengu", ancestryIds: ["core.tengu"],
    cultureIds: [`${MODULE_ID}.taldan`], supportedLocales: LOCALES, weight: 14,
    generators: { given: componentGenerator([["onset", "middle", "ending"]], { onset: ["Ka", "Ko", "Ma", "Ra", "Ro", "Ta", "To", "Tsu"], middle: ["la", "le", "dor", "phae", "cass", "val", "ter", "xan", "ori", "sev"], ending: ["k", "ra", "ri", "on", "os", "v"] }) },
    epithets: [semantic("TenguTaldan.Epithet.LaurelWing", "Laurel-Wing"), semantic("TenguTaldan.Epithet.SilverVoice", "Silver-Voice")], epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.tengu-chelish-migrant`, labelKey: "NAMESINNERSEA.Pack.ChelishTengu", ancestryIds: ["core.tengu"],
    cultureIds: [`${MODULE_ID}.chelish`], supportedLocales: LOCALES, weight: 14,
    generators: { given: componentGenerator([["onset", "middle", "ending"]], { onset: ["Ka", "Ko", "Ma", "Ra", "Ro", "Ta", "To", "Tsu"], middle: ["val", "ser", "luc", "cor", "ves", "dar", "sil", "zor", "mar", "ren"], ending: ["k", "ra", "ri", "o", "io", "v"] }) },
    epithets: [semantic("TenguChelish.Epithet.BlackFeather", "Black-Feather"), semantic("TenguChelish.Epithet.CourtWing", "Court-Wing")], epithetChance: 0.1
  }
]);

export function registerRegionalCultures(api) {
  for (const culture of REGIONAL_CULTURES) api.content.registerNameCulture(MODULE_ID, culture);
  for (const pack of REGIONAL_NAME_PACKS) api.content.registerNamePack(MODULE_ID, pack);
}
