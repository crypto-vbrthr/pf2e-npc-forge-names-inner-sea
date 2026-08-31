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

export const REGIONAL_CULTURES_II = Object.freeze([
  { id: `${MODULE_ID}.isgeri`, labelKey: "NAMESINNERSEA.Culture.Isgeri", ancestryIds: ["core.human", "core.goblin"], automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.molthuni`, labelKey: "NAMESINNERSEA.Culture.Molthuni", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.thuvian`, labelKey: "NAMESINNERSEA.Culture.Thuvian", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.katapeshi`, labelKey: "NAMESINNERSEA.Culture.Katapeshi", ancestryIds: ["core.human", "core.ratfolk", "core.kholo"], automaticAncestryIds: H, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.nexian`, labelKey: "NAMESINNERSEA.Culture.Nexian", ancestryIds: ["core.human", "core.kholo"], automaticAncestryIds: H, supportedLocales: LOCALES, weight: 7 },
  { id: `${MODULE_ID}.gebbite`, labelKey: "NAMESINNERSEA.Culture.Gebbite", ancestryIds: H, automaticAncestryIds: H, supportedLocales: LOCALES, weight: 6 },
  { id: `${MODULE_ID}.oprak`, labelKey: "NAMESINNERSEA.Culture.Oprak", ancestryIds: ["core.hobgoblin"], automaticAncestryIds: [], supportedLocales: LOCALES, weight: 12 },
  { id: `${MODULE_ID}.brastlewark`, labelKey: "NAMESINNERSEA.Culture.Brastlewark", ancestryIds: ["core.gnome"], automaticAncestryIds: [], supportedLocales: LOCALES, weight: 12 }
]);

const humanEpithets = {
  isgeri: [semantic("Isgeri.Epithet.Roadwise", "Road-Wise"), semantic("Isgeri.Epithet.Bridgekeeper", "Bridge-Keeper")],
  molthuni: [semantic("Molthuni.Epithet.Steadfast", "the Steadfast"), semantic("Molthuni.Epithet.StandardBearer", "Standard-Bearer")],
  thuvian: [semantic("Thuvian.Epithet.DawnReader", "Dawn-Reader"), semantic("Thuvian.Epithet.GlassWalker", "Glass-Walker")],
  katapeshi: [semantic("Katapeshi.Epithet.SharpBargain", "Sharp-Bargain"), semantic("Katapeshi.Epithet.ManyKeys", "of Many Keys")],
  nexian: [semantic("Nexian.Epithet.BrightMind", "Bright-Mind"), semantic("Nexian.Epithet.SevenSigns", "of Seven Signs")],
  gebbite: [semantic("Gebbite.Epithet.StillVoice", "Still-Voice"), semantic("Gebbite.Epithet.OldBlood", "Old-Blood")]
};

export const REGIONAL_NAME_PACKS_II = Object.freeze([
  {
    id: `${MODULE_ID}.human-isgeri`, labelKey: "NAMESINNERSEA.Pack.IsgeriHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.isgeri`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Alben", "Berrik", "Cedran", "Dovel", "Erman", "Fendrel", "Garran", "Halvik", "Jostan", "Keller", "Lorven", "Merrik", "Noren", "Odran", "Perrin", "Roder", "Seldan", "Tervik", "Ulren", "Varran", "Wendel", "Yoren"],
      female: ["Alena", "Berra", "Cedra", "Dovia", "Elsa", "Fenna", "Gerta", "Halia", "Jessa", "Kella", "Lorna", "Merra", "Nella", "Odra", "Perra", "Ressa", "Selda", "Terva", "Ulla", "Vena", "Wenda", "Ysola"],
      neutral: ["Aven", "Bryn", "Ceri", "Dov", "Eren", "Jori", "Lenn", "Meri", "Tarin", "Venn"]
    },
    family: ["Alderen", "Brammel", "Caldren", "Doverik", "Esten", "Falken", "Gessler", "Haver", "Jorren", "Kelm", "Lasker", "Merren", "Norvik", "Oster", "Pellen", "Rask", "Serren", "Talvek", "Uldren", "Vanner", "Weller", "Yost", "Zelden", "Arken"],
    epithets: humanEpithets.isgeri, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-molthuni`, labelKey: "NAMESINNERSEA.Pack.MolthuniHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.molthuni`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aldric", "Borven", "Cadrik", "Demer", "Eldan", "Fedor", "Grivan", "Hadrik", "Ilyen", "Jarom", "Korven", "Ludek", "Mirok", "Nestor", "Ovan", "Radom", "Starek", "Tomasz", "Velek", "Wojan", "Yarek", "Zden"],
      female: ["Adria", "Borka", "Cezara", "Danira", "Elza", "Fedra", "Grazia", "Hedra", "Ilona", "Jovra", "Kasia", "Ludmira", "Milena", "Nadja", "Olenka", "Radka", "Stana", "Tereza", "Veska", "Wiera", "Yelka", "Zdena"],
      neutral: ["Adel", "Bori", "Caz", "Demi", "Ilen", "Miro", "Novi", "Rado", "Teri", "Veli"]
    },
    family: ["Ardenov", "Belarik", "Cernas", "Dovrin", "Elekov", "Farsen", "Gorodin", "Havelin", "Istrek", "Jarevic", "Korasin", "Ludren", "Malesk", "Nerovin", "Ostrek", "Radovin", "Serevic", "Tarnov", "Velasin", "Worik", "Yarev", "Zoradin", "Branov", "Darsen"],
    epithets: humanEpithets.molthuni, epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-thuvian`, labelKey: "NAMESINNERSEA.Pack.ThuvianHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.thuvian`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Azeem", "Barez", "Dahim", "Esmar", "Fazil", "Ghaled", "Hamez", "Ishaq", "Jasir", "Karem", "Lazim", "Mazir", "Nafez", "Orash", "Qasim", "Ruzan", "Sahir", "Tamez", "Uzair", "Vashid", "Yamen", "Zarek"],
      female: ["Aseela", "Bahiya", "Dazira", "Eshra", "Fayla", "Ghalia", "Haneen", "Isara", "Jasira", "Kezra", "Lamea", "Mazaya", "Nafira", "Oshara", "Qamara", "Ruzia", "Sahira", "Tamira", "Uzaya", "Vashara", "Yamina", "Zareen"],
      neutral: ["Azel", "Dariq", "Esha", "Hadiq", "Jasir", "Kez", "Nuriq", "Razi", "Sahir", "Zaynor"]
    },
    family: ["Aqari", "Bazeem", "Dahari", "Esmari", "Fazari", "Ghalem", "Haziri", "Isqari", "Jamez", "Karezi", "Lashari", "Mazeen", "Nafadi", "Orashi", "Qazari", "Ruzemi", "Sahadi", "Tamezi", "Uzari", "Vashari", "Yamazi", "Zaremi", "Kharazi", "Mirezan"],
    epithets: humanEpithets.thuvian, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-katapeshi`, labelKey: "NAMESINNERSEA.Pack.KatapeshiHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.katapeshi`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aqil", "Baraz", "Cadir", "Dalim", "Eshan", "Farek", "Gharib", "Hazem", "Izzar", "Javek", "Kasim", "Luqan", "Mahir", "Nazeq", "Oraz", "Qarim", "Rasek", "Suvan", "Tarek", "Uzam", "Wazir", "Zafek"],
      female: ["Aqila", "Barezah", "Cadiya", "Dalima", "Eshani", "Farika", "Ghazala", "Hazira", "Izzara", "Javira", "Kasima", "Luqa", "Mahira", "Nazeema", "Oraza", "Qamira", "Raseya", "Suvana", "Tareka", "Uzara", "Wazira", "Zafira"],
      neutral: ["Aqi", "Barin", "Cadi", "Esh", "Fari", "Javi", "Qari", "Rase", "Suvi", "Zafi"]
    },
    family: ["Abarzi", "Balkesh", "Cadari", "Dazeen", "Eshkari", "Farouz", "Ghazari", "Hazani", "Izzarek", "Javani", "Kaseem", "Luqar", "Mahzari", "Nazeer", "Orazzi", "Qadarek", "Rashemi", "Suvani", "Tazari", "Uzarek", "Wazani", "Zafiri", "Kharun", "Mezari"],
    epithets: humanEpithets.katapeshi, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-nexian`, labelKey: "NAMESINNERSEA.Pack.NexianHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.nexian`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Aruzem", "Belsar", "Cazir", "Demeq", "Ekur", "Fazun", "Gireth", "Huzar", "Imeresh", "Jazad", "Kelez", "Lumar", "Merez", "Nuzad", "Omes", "Qezar", "Ramek", "Sazim", "Tumez", "Uqir", "Vezad", "Zumer"],
      female: ["Aruza", "Belsira", "Cazira", "Demeqa", "Ekura", "Fazuna", "Giretha", "Huzara", "Imeresha", "Jazada", "Keleza", "Lumara", "Mereza", "Nuzara", "Omesa", "Qezara", "Rameka", "Sazima", "Tumeza", "Uqira", "Vezara", "Zumera"],
      neutral: ["Aruz", "Bels", "Deme", "Eku", "Gire", "Ime", "Qez", "Sazi", "Tume", "Vez"]
    },
    family: ["Ameshkar", "Belzaru", "Cadrumen", "Demezar", "Ekuran", "Fazukar", "Giremun", "Huzarek", "Imerun", "Jazemir", "Kelemun", "Lurazan", "Merezun", "Nuzarek", "Omeshar", "Qezemun", "Ramezur", "Sazukar", "Tumezan", "Uqimar", "Vezarun", "Zumerak", "Kharumen", "Nemezur"],
    epithets: humanEpithets.nexian, epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-gebbite`, labelKey: "NAMESINNERSEA.Pack.GebbiteHuman", ancestryIds: H,
    cultureIds: [`${MODULE_ID}.gebbite`], supportedLocales: LOCALES, weight: 12,
    given: {
      male: ["Akhrem", "Beras", "Chedar", "Djeset", "Ephren", "Gemet", "Hekar", "Ibes", "Khemun", "Maret", "Nekhar", "Oseth", "Pheres", "Qemur", "Rhetek", "Sahmet", "Tefren", "Ubes", "Vekhet", "Wesir", "Yamenet", "Zekhar"],
      female: ["Akhira", "Beret", "Chedra", "Djesira", "Ephra", "Gemeta", "Hekara", "Ibesa", "Khemira", "Mareta", "Nekhira", "Osetha", "Pheresa", "Qemira", "Rheteka", "Sahmeta", "Tefrena", "Ubesa", "Vekheta", "Wesira", "Yamenet", "Zekhira"],
      neutral: ["Akh", "Beret", "Djes", "Ephr", "Khem", "Maret", "Nekh", "Oset", "Sahm", "Vekh"]
    },
    family: ["Akhmaret", "Beresh", "Chedemet", "Djesari", "Ephrenet", "Gemekhar", "Hekares", "Ibeset", "Khemunet", "Marekh", "Nekhari", "Osethem", "Phereset", "Qemuret", "Rhetekh", "Sahmari", "Tefrenet", "Ubeshar", "Vekhemet", "Wesiret", "Yamenesh", "Zekhari", "Khepra", "Nebetari"],
    epithets: humanEpithets.gebbite, epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.halfling-chelish`, labelKey: "NAMESINNERSEA.Pack.ChelishHalfling", ancestryIds: ["core.halfling"],
    cultureIds: [`${MODULE_ID}.chelish`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Berto", "Ciro", "Dino", "Enzo", "Favio", "Gino", "Ivo", "Leno", "Milo", "Nico", "Orio", "Piero", "Rico", "Savio", "Tino", "Vico", "Zeno", "Aldo", "Brio", "Luca"],
      female: ["Alba", "Bina", "Cetta", "Dina", "Etta", "Fia", "Gina", "Lina", "Mia", "Nina", "Oria", "Pia", "Rina", "Sia", "Tina", "Vina", "Zia", "Bella", "Cara", "Luca"],
      neutral: ["Ari", "Ciel", "Dani", "Lio", "Miri", "Neri", "Reni", "Savi", "Vale", "Vieri"]
    },
    family: [semantic("ChelishHalfling.Family.Bellstep", "Bellstep"), semantic("ChelishHalfling.Family.Brightcup", "Brightcup"), semantic("ChelishHalfling.Family.Candlefoot", "Candlefoot"), semantic("ChelishHalfling.Family.Copperlane", "Copperlane"), semantic("ChelishHalfling.Family.Doorwhistle", "Doorwhistle"), semantic("ChelishHalfling.Family.Featherbed", "Featherbed"), semantic("ChelishHalfling.Family.Hearthlane", "Hearthlane"), semantic("ChelishHalfling.Family.Kettlewick", "Kettlewick"), semantic("ChelishHalfling.Family.Lanternfoot", "Lanternfoot"), semantic("ChelishHalfling.Family.Littlekey", "Littlekey"), semantic("ChelishHalfling.Family.Mooncup", "Mooncup"), semantic("ChelishHalfling.Family.Nimblehand", "Nimblehand"), semantic("ChelishHalfling.Family.Quietstep", "Quietstep"), semantic("ChelishHalfling.Family.Ribbonlane", "Ribbonlane"), semantic("ChelishHalfling.Family.Silvercup", "Silvercup"), semantic("ChelishHalfling.Family.Softshoe", "Softshoe"), semantic("ChelishHalfling.Family.Sparrowfoot", "Sparrowfoot"), semantic("ChelishHalfling.Family.Thimblewick", "Thimblewick"), semantic("ChelishHalfling.Family.Warmhearth", "Warmhearth"), semantic("ChelishHalfling.Family.Willowstep", "Willowstep")],
    epithets: [semantic("ChelishHalfling.Epithet.QuickSmile", "Quick-Smile"), semantic("ChelishHalfling.Epithet.HiddenKey", "Hidden-Key")], epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.goblin-isgeri`, labelKey: "NAMESINNERSEA.Pack.IsgeriGoblin", ancestryIds: ["core.goblin"],
    cultureIds: [`${MODULE_ID}.isgeri`], supportedLocales: LOCALES, weight: 14,
    given: {
      male: ["Bik", "Crik", "Daz", "Fegg", "Gib", "Hark", "Jik", "Kraz", "Mog", "Nek", "Pik", "Ragg", "Sket", "Tib", "Vrak", "Wek", "Zib", "Bruk"],
      female: ["Bikka", "Crika", "Dazza", "Fegga", "Gibba", "Harka", "Jikka", "Krazza", "Moga", "Neka", "Pikka", "Ragga", "Sketta", "Tibba", "Vraka", "Weka", "Zibba", "Bruka"],
      neutral: ["Bix", "Craz", "Fizz", "Grit", "Kip", "Nok", "Ruk", "Skiv", "Tik", "Vex"]
    },
    family: [semantic("IsgeriGoblin.Family.Ashbucket", "Ashbucket"), semantic("IsgeriGoblin.Family.Bridgebite", "Bridgebite"), semantic("IsgeriGoblin.Family.Brokenpot", "Brokenpot"), semantic("IsgeriGoblin.Family.Cindershoe", "Cindershoe"), semantic("IsgeriGoblin.Family.Coppertooth", "Coppertooth"), semantic("IsgeriGoblin.Family.Ditchsniff", "Ditchsniff"), semantic("IsgeriGoblin.Family.Guttercap", "Guttercap"), semantic("IsgeriGoblin.Family.Hotnail", "Hotnail"), semantic("IsgeriGoblin.Family.Kettlecrack", "Kettlecrack"), semantic("IsgeriGoblin.Family.Mudbutton", "Mudbutton"), semantic("IsgeriGoblin.Family.Roadscrap", "Roadscrap"), semantic("IsgeriGoblin.Family.Rustspoon", "Rustspoon"), semantic("IsgeriGoblin.Family.Sootsock", "Sootsock"), semantic("IsgeriGoblin.Family.Sparkplug", "Sparkplug"), semantic("IsgeriGoblin.Family.Tinwhistle", "Tinwhistle"), semantic("IsgeriGoblin.Family.Turnipburn", "Turnipburn"), semantic("IsgeriGoblin.Family.Wagonchew", "Wagonchew"), semantic("IsgeriGoblin.Family.Wirehair", "Wirehair"), semantic("IsgeriGoblin.Family.Woodsmoke", "Woodsmoke"), semantic("IsgeriGoblin.Family.Yellowbrick", "Yellowbrick")],
    epithets: [semantic("IsgeriGoblin.Epithet.BridgeRunner", "Bridge-Runner"), semantic("IsgeriGoblin.Epithet.SmokeNose", "Smoke-Nose")], epithetChance: 0.12
  },
  {
    id: `${MODULE_ID}.hobgoblin-oprak`, labelKey: "NAMESINNERSEA.Pack.OprakHobgoblin", ancestryIds: ["core.hobgoblin"],
    cultureIds: [`${MODULE_ID}.oprak`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Arvek", "Bask", "Dargan", "Evrak", "Gorven", "Hask", "Irdan", "Kavrek", "Mordak", "Narek", "Orven", "Rask", "Sovar", "Targen", "Urvek", "Vask", "Wargan", "Zorvek", "Bravan", "Kordak", "Mavren", "Tovak"],
      female: ["Arva", "Baska", "Darga", "Evra", "Gorva", "Haska", "Irda", "Kavra", "Morda", "Nara", "Orva", "Raska", "Sova", "Targa", "Urva", "Vaska", "Warga", "Zorva", "Brava", "Korda", "Mavra", "Tova"],
      neutral: ["Arv", "Bask", "Darg", "Hask", "Kavr", "Narek", "Sov", "Targ", "Vask", "Zorv"]
    },
    generators: {
      family: componentGenerator(
        [["virtue", "virtueSuffix"], ["formation", "formationSuffix"]],
        {
          virtue: [semantic("Oprak.Virtue.Oath", "Oath"), semantic("Oprak.Virtue.Duty", "Duty"), semantic("Oprak.Virtue.Honor", "Honor"), semantic("Oprak.Virtue.Law", "Law"), semantic("Oprak.Virtue.Vigil", "Vigil"), semantic("Oprak.Virtue.Order", "Order")],
          virtueSuffix: [semantic("Oprak.VirtueSuffix.Keeper", "keeper"), semantic("Oprak.VirtueSuffix.Bearer", "bearer"), semantic("Oprak.VirtueSuffix.Bound", "bound"), semantic("Oprak.VirtueSuffix.Mark", "mark"), semantic("Oprak.VirtueSuffix.Seal", "seal"), semantic("Oprak.VirtueSuffix.Hand", "hand")],
          formation: [semantic("Oprak.Formation.Cohort", "Cohort"), semantic("Oprak.Formation.Legion", "Legion"), semantic("Oprak.Formation.Column", "Column"), semantic("Oprak.Formation.Phalanx", "Phalanx"), semantic("Oprak.Formation.Bastion", "Bastion"), semantic("Oprak.Formation.Citadel", "Citadel"), semantic("Oprak.Formation.Command", "Command")],
          formationSuffix: [semantic("Oprak.FormationSuffix.Guard", "guard"), semantic("Oprak.FormationSuffix.Watch", "watch"), semantic("Oprak.FormationSuffix.Post", "post"), semantic("Oprak.FormationSuffix.Gate", "gate"), semantic("Oprak.FormationSuffix.Crest", "crest"), semantic("Oprak.FormationSuffix.Helm", "helm")]
        }
      )
    },
    epithets: [semantic("Oprak.Epithet.LineHolder", "Line-Holder"), semantic("Oprak.Epithet.OathBound", "Oath-Bound")], epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.gnome-brastlewark`, labelKey: "NAMESINNERSEA.Pack.BrastlewarkGnome", ancestryIds: ["core.gnome"],
    cultureIds: [`${MODULE_ID}.brastlewark`], supportedLocales: LOCALES, weight: 16,
    given: {
      male: ["Bimble", "Cazwick", "Dopple", "Fizzan", "Glim", "Hobbik", "Jazper", "Kett", "Lomble", "Merrix", "Nobbin", "Pellit", "Quazz", "Rimble", "Sprocket", "Tavik", "Vindle", "Wex", "Yobbin", "Zeff"],
      female: ["Bimma", "Cazzie", "Doppa", "Fizza", "Glimma", "Hobbi", "Jazzie", "Ketta", "Lomma", "Merria", "Nobba", "Pella", "Quazza", "Rimma", "Sprocka", "Tavia", "Vinda", "Wexa", "Yobba", "Zeffa"],
      neutral: ["Bim", "Caz", "Fizz", "Glim", "Kett", "Merr", "Quaz", "Sprock", "Vinn", "Wex"]
    },
    family: [semantic("Brastlewark.Family.Brasswhistle", "Brasswhistle"), semantic("Brastlewark.Family.Clockpetal", "Clockpetal"), semantic("Brastlewark.Family.Cogbloom", "Cogbloom"), semantic("Brastlewark.Family.Copperquill", "Copperquill"), semantic("Brastlewark.Family.Geargleam", "Geargleam"), semantic("Brastlewark.Family.Glassgear", "Glassgear"), semantic("Brastlewark.Family.Goldenspring", "Goldenspring"), semantic("Brastlewark.Family.Lenslight", "Lenslight"), semantic("Brastlewark.Family.Mirrorbell", "Mirrorbell"), semantic("Brastlewark.Family.Pebbleclock", "Pebbleclock"), semantic("Brastlewark.Family.Pocketstar", "Pocketstar"), semantic("Brastlewark.Family.Quickspring", "Quickspring"), semantic("Brastlewark.Family.Silvergear", "Silvergear"), semantic("Brastlewark.Family.Sparkquill", "Sparkquill"), semantic("Brastlewark.Family.Spoolwhistle", "Spoolwhistle"), semantic("Brastlewark.Family.Starspindle", "Starspindle"), semantic("Brastlewark.Family.Tinkerglass", "Tinkerglass"), semantic("Brastlewark.Family.Turnkey", "Turnkey"), semantic("Brastlewark.Family.Velvetgear", "Velvetgear"), semantic("Brastlewark.Family.Wirepetal", "Wirepetal"), semantic("Brastlewark.Family.Wondercoil", "Wondercoil"), semantic("Brastlewark.Family.Brightlens", "Brightlens"), semantic("Brastlewark.Family.Mooncog", "Mooncog"), semantic("Brastlewark.Family.Tinyspring", "Tinyspring")],
    epithets: [semantic("Brastlewark.Epithet.SevenGadgets", "of Seven Gadgets"), semantic("Brastlewark.Epithet.BrightIdea", "Bright-Idea")], epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.ysoki-katapeshi`, labelKey: "NAMESINNERSEA.Pack.KatapeshiYsoki", ancestryIds: ["core.ratfolk"],
    cultureIds: [`${MODULE_ID}.katapeshi`], supportedLocales: LOCALES, weight: 14,
    generators: {
      given: componentGenerator([["root", "ending"]], {
        root: ["Adi", "Baq", "Dari", "Faz", "Hazi", "Jami", "Kez", "Luq", "Mazi", "Nari", "Qad", "Rafi", "Sabi", "Taz", "Umi", "Wari", "Yaz", "Zafi", "Kari", "Miri", "Paq", "Razi"],
        ending: ["", "k", "i", "a", "u", "en", "ir", "zi"]
      })
    },
    epithets: [semantic("KatapeshiYsoki.Epithet.CoinCounter", "Coin-Counter"), semantic("KatapeshiYsoki.Epithet.SaffronWhisker", "Saffron-Whisker"), semantic("KatapeshiYsoki.Epithet.ThreePockets", "Three-Pockets")], epithetChance: 0.12
  }
]);

export function registerRegionalCulturesII(api) {
  for (const culture of REGIONAL_CULTURES_II) api.content.registerNameCulture(MODULE_ID, culture);
  for (const pack of REGIONAL_NAME_PACKS_II) api.content.registerNamePack(MODULE_ID, pack);
}
