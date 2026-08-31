const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const HUMAN = ["core.human"];
const HUMAN_TENGU = ["core.human", "core.tengu"];
const LOCALES = ["en", "de"];

const semantic = (key, fallback) => ({
  id: `${MODULE_ID}.${key}`,
  labelKey: `NAMESINNERSEA.${key}`,
  fallback
});

export const HUMAN_CULTURES = Object.freeze([
  { id: `${MODULE_ID}.taldan`, labelKey: "NAMESINNERSEA.Culture.Taldan", ancestryIds: HUMAN_TENGU, automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 10 },
  { id: `${MODULE_ID}.chelish`, labelKey: "NAMESINNERSEA.Culture.Chelish", ancestryIds: ["core.human", "core.tengu", "core.halfling"], automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 10 },
  { id: `${MODULE_ID}.varisian`, labelKey: "NAMESINNERSEA.Culture.Varisian", ancestryIds: HUMAN_TENGU, automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 10 },
  { id: `${MODULE_ID}.ulfen`, labelKey: "NAMESINNERSEA.Culture.Ulfen", ancestryIds: HUMAN, automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.osiriani`, labelKey: "NAMESINNERSEA.Culture.Osiriani", ancestryIds: ["core.human", "core.kholo"], automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 9 },
  { id: `${MODULE_ID}.keleshite`, labelKey: "NAMESINNERSEA.Culture.Keleshite", ancestryIds: HUMAN, automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 9 },
  { id: `${MODULE_ID}.ustalavic`, labelKey: "NAMESINNERSEA.Culture.Ustalavic", ancestryIds: ["core.human", "core.ratfolk"], automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 8 },
  { id: `${MODULE_ID}.andoren`, labelKey: "NAMESINNERSEA.Culture.Andoren", ancestryIds: HUMAN, automaticAncestryIds: HUMAN, supportedLocales: LOCALES, weight: 10 }
]);

const commonEpithets = [
  semantic("Epithet.Bold", "the Bold"),
  semantic("Epithet.Quiet", "the Quiet"),
  semantic("Epithet.Red", "the Red"),
  semantic("Epithet.Lucky", "the Lucky"),
  semantic("Epithet.Wanderer", "the Wanderer"),
  semantic("Epithet.Elder", "the Elder"),
  semantic("Epithet.Younger", "the Younger"),
  semantic("Epithet.Swift", "the Swift")
];

export const HUMAN_NAME_PACKS = Object.freeze([
  {
    id: `${MODULE_ID}.human-taldan`,
    labelKey: "NAMESINNERSEA.Pack.TaldanHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.taldan`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Adron", "Alexion", "Amandor", "Basileon", "Cassian", "Darian", "Demeon", "Edrastus", "Evander", "Galen", "Hadrian", "Ilarion", "Korvan", "Leontes", "Marcellan", "Nicanor", "Orestan", "Phaedron", "Quintar", "Severan", "Tavian", "Valerian", "Xandros", "Zorian"],
      female: ["Aelia", "Alexia", "Cassara", "Damaris", "Delphina", "Eirene", "Eudora", "Helena", "Ilyana", "Kallista", "Leandra", "Marcella", "Nerissa", "Octavia", "Petra", "Rhea", "Sabina", "Selene", "Thalia", "Valeria", "Xanthe", "Ylena", "Zenaida", "Zoraya"],
      neutral: ["Aster", "Dorian", "Elian", "Ione", "Kyris", "Lys", "Maren", "Neris", "Soren", "Taris", "Vale", "Xen"]
    },
    family: ["Acastor", "Alerion", "Arvanis", "Bessarion", "Caldris", "Cassivar", "Damarion", "Delvaris", "Eudoxan", "Falcaris", "Gavros", "Helvar", "Ilaris", "Kassandros", "Korvannis", "Leontar", "Madrakis", "Nerovar", "Orentis", "Pavaris", "Quentaris", "Rethanos", "Sarvian", "Severis", "Talarin", "Varanis", "Vexaris", "Xandaris", "Ymeron", "Zerantis"],
    epithets: commonEpithets,
    epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.human-chelish`,
    labelKey: "NAMESINNERSEA.Pack.ChelishHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.chelish`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Alessan", "Bastian", "Calvero", "Dario", "Esteban", "Fabren", "Gavino", "Iago", "Jorvan", "Lucaro", "Matteo", "Nerio", "Orsino", "Paolo", "Rafael", "Renato", "Sandro", "Silvio", "Terenzo", "Valerio", "Vasco", "Xavier", "Zeno", "Zorren"],
      female: ["Alessia", "Bianca", "Carlotta", "Daria", "Elena", "Fabiana", "Gianna", "Isabetta", "Lucia", "Marena", "Nerina", "Orsella", "Paola", "Rafaela", "Renata", "Serafina", "Silvana", "Talia", "Valeria", "Vespera", "Viola", "Xaviera", "Zelina", "Zorina"],
      neutral: ["Ari", "Ciel", "Dani", "Elis", "Jules", "Lio", "Marin", "Neri", "Rian", "Sage", "Vale", "Vieri"]
    },
    family: ["Alverani", "Bellascor", "Caldrano", "Corvelli", "D'Ambrano", "Delmaris", "Estrelli", "Falvero", "Gavrelli", "Illarosa", "Lunetti", "Marcelli", "Nerezza", "Orsatti", "Paverno", "Quintelli", "Ravellino", "Sangravo", "Serrano", "Tessarini", "Valcora", "Valenti", "Verrano", "Vescari", "Villari", "Xaverro", "Zanetti", "Zerboni", "Zorvelli", "Zurano"],
    epithets: [...commonEpithets, semantic("Epithet.Black", "the Black"), semantic("Epithet.Pale", "the Pale")],
    epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-varisian`,
    labelKey: "NAMESINNERSEA.Pack.VarisianHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.varisian`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Aleko", "Boran", "Damir", "Dragan", "Emil", "Goran", "Ilya", "Jarek", "Kasimir", "Luka", "Marek", "Nikolai", "Oleg", "Petar", "Radek", "Sava", "Stefan", "Tomas", "Vadim", "Vasko", "Viktor", "Yaros", "Zarek", "Zoran"],
      female: ["Anika", "Bojana", "Danica", "Daria", "Eliska", "Ilena", "Ivana", "Jasna", "Katarina", "Lada", "Mila", "Mirela", "Nadia", "Oksana", "Petra", "Rada", "Sanja", "Sonya", "Tatiana", "Vesna", "Viera", "Yelena", "Zaria", "Zora"],
      neutral: ["Ales", "Danya", "Ira", "Jori", "Kris", "Mika", "Nika", "Sasha", "Toma", "Val", "Vanya", "Zhen"]
    },
    family: ["Alenko", "Barovin", "Chernen", "Drazek", "Evanov", "Gavrik", "Horvat", "Ilyev", "Jorovic", "Kalenko", "Kostin", "Marovic", "Neskar", "Orlov", "Petrov", "Radovic", "Sarenko", "Stavrin", "Tomasin", "Varek", "Veskar", "Volenko", "Yarovin", "Zadek", "Zelenko", "Zoric", "Zorovan", "Branec", "Kovar", "Mirovic"],
    epithets: [...commonEpithets, semantic("Epithet.Songbird", "the Songbird"), semantic("Epithet.Roadborn", "the Roadborn")],
    epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.human-ulfen`,
    labelKey: "NAMESINNERSEA.Pack.UlfenHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.ulfen`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Alrik", "Arvid", "Bjorn", "Brand", "Einar", "Erik", "Finn", "Gunnar", "Hakon", "Halvar", "Ivar", "Jorund", "Kjell", "Leif", "Magnus", "Njal", "Olaf", "Ragnar", "Sigurd", "Sten", "Torvald", "Ulf", "Vidar", "Yngvar"],
      female: ["Astrid", "Brynja", "Dagny", "Eira", "Freydis", "Gudrun", "Helga", "Hilda", "Inga", "Jorunn", "Kara", "Liv", "Magnhild", "Nanna", "Ragna", "Sigrid", "Solveig", "Thora", "Torhild", "Una", "Valdis", "Vigdis", "Yrsa", "Ylva"],
      neutral: ["Ari", "Eir", "Finn", "Havi", "Kari", "Runi", "Soli", "Storm", "Tori", "Val", "Vig", "Yng"]
    },
    generators: {
      family: {
        type: "components",
        patterns: [["prefix", "suffix"]],
        separator: "",
        components: {
          prefix: [
            semantic("Ulfen.Prefix.Iron", "Iron"), semantic("Ulfen.Prefix.Stone", "Stone"), semantic("Ulfen.Prefix.Frost", "Frost"), semantic("Ulfen.Prefix.Wolf", "Wolf"), semantic("Ulfen.Prefix.Raven", "Raven"), semantic("Ulfen.Prefix.Storm", "Storm"), semantic("Ulfen.Prefix.Bear", "Bear"), semantic("Ulfen.Prefix.Oak", "Oak"), semantic("Ulfen.Prefix.Sea", "Sea"), semantic("Ulfen.Prefix.Winter", "Winter")
          ],
          suffix: [
            semantic("Ulfen.Suffix.Hand", "hand"), semantic("Ulfen.Suffix.Heart", "heart"), semantic("Ulfen.Suffix.Born", "born"), semantic("Ulfen.Suffix.Spear", "spear"), semantic("Ulfen.Suffix.Shield", "shield"), semantic("Ulfen.Suffix.Brow", "brow"), semantic("Ulfen.Suffix.Blood", "blood"), semantic("Ulfen.Suffix.Song", "song"), semantic("Ulfen.Suffix.Walker", "walker"), semantic("Ulfen.Suffix.Ward", "ward")
          ]
        }
      }
    },
    epithets: [...commonEpithets, semantic("Epithet.Seafarer", "the Seafarer"), semantic("Epithet.WolfFriend", "Wolf-Friend")],
    epithetChance: 0.09
  },
  {
    id: `${MODULE_ID}.human-osiriani`,
    labelKey: "NAMESINNERSEA.Pack.OsirianiHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.osiriani`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Akram", "Amunetep", "Bahir", "Djemal", "Faris", "Halim", "Hassan", "Idris", "Jabir", "Kamil", "Khemet", "Maher", "Nadir", "Nassim", "Omar", "Qadir", "Rafiq", "Sabir", "Samir", "Tahir", "Umar", "Wahid", "Yasir", "Zahir"],
      female: ["Amina", "Aziza", "Dalia", "Farah", "Habiba", "Hala", "Imani", "Jamila", "Karima", "Layla", "Maha", "Nadira", "Nasira", "Nefira", "Rania", "Safiya", "Salma", "Samira", "Tahira", "Yasmina", "Zahra", "Zaina", "Zamira", "Zuleika"],
      neutral: ["Ari", "Dara", "Iman", "Jamil", "Kamal", "Nuri", "Rafi", "Sami", "Tari", "Yara", "Zain", "Ziya"]
    },
    family: ["Abari", "Alhazim", "Bahari", "Dahmani", "El-Karim", "Faruqi", "Hadir", "Ibnara", "Jafari", "Kamilan", "Mahari", "Nadiri", "Nassari", "Qadim", "Rashid", "Sabari", "Sahmir", "Talib", "Uthari", "Waziri", "Yafiri", "Zahiri", "Zamari", "Akhmiri", "Djeret", "Hemari", "Khepsu", "Menari", "Nefari", "Sutekhi"],
    epithets: [...commonEpithets, semantic("Epithet.Sandwalker", "the Sand-Walker"), semantic("Epithet.Stargazer", "the Stargazer")],
    epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-keleshite`,
    labelKey: "NAMESINNERSEA.Pack.KeleshiteHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.keleshite`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Ardash", "Bahram", "Cyrus", "Daryun", "Farid", "Housan", "Iskandar", "Javid", "Kamran", "Kaveh", "Mehrad", "Navid", "Omid", "Parviz", "Ramin", "Rostam", "Salar", "Shapur", "Tahir", "Vahid", "Xerun", "Yazdan", "Zamir", "Zarvan"],
      female: ["Anahita", "Azadeh", "Darya", "Farzaneh", "Golara", "Jaleh", "Laleh", "Mina", "Nasrin", "Parisa", "Roxana", "Sahar", "Samira", "Setareh", "Shirin", "Soraya", "Tahmina", "Yasaman", "Zahra", "Zarin", "Ziba", "Zohra", "Nava", "Roya"],
      neutral: ["Arin", "Darye", "Farah", "Jahan", "Kian", "Mehr", "Nivan", "Rahi", "Samad", "Shah", "Yasha", "Zarin"]
    },
    family: ["Arzadi", "Bahrami", "Darvashi", "Farzadi", "Golestan", "Javadi", "Kashani", "Mehrani", "Navari", "Naziri", "Parvani", "Rostami", "Sadeghi", "Sarvani", "Shahrani", "Taheri", "Vahidi", "Yazdani", "Zamani", "Zarandi", "Azarin", "Daryani", "Firdosi", "Kaviani", "Mehrzad", "Neshari", "Ravandi", "Salarin", "Varzani", "Zohari"],
    epithets: [...commonEpithets, semantic("Epithet.Silvertongue", "Silver-Tongue"), semantic("Epithet.FarTraveler", "the Far Traveler")],
    epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.human-ustalavic`,
    labelKey: "NAMESINNERSEA.Pack.UstalavicHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.ustalavic`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Adrian", "Bogdan", "Constantin", "Dorian", "Emil", "Florin", "Gavril", "Ion", "Lucian", "Mihail", "Nicolae", "Ovidiu", "Petru", "Radu", "Sorin", "Stefan", "Toma", "Valentin", "Vasile", "Viktor", "Yaros", "Zarek", "Zorin", "Dragomir"],
      female: ["Adela", "Alina", "Catrina", "Daciana", "Elena", "Florina", "Ilinca", "Irina", "Livia", "Marica", "Nadia", "Oana", "Petra", "Raluca", "Sabina", "Sorina", "Stefana", "Tatiana", "Valeria", "Viorica", "Yelena", "Zaria", "Zorina", "Dragana"],
      neutral: ["Alex", "Deni", "Ilya", "Kris", "Miko", "Niki", "Sasa", "Tomi", "Vali", "Vanya", "Vika", "Zori"]
    },
    family: ["Ardelean", "Barcov", "Cernat", "Dragovic", "Florescu", "Gavrilen", "Iliescu", "Korvan", "Lupescu", "Marcov", "Nicolescu", "Orlovan", "Petrescu", "Radovan", "Sorinov", "Stavrescu", "Tomares", "Varlan", "Vasilev", "Voicu", "Zamfir", "Zorilescu", "Balan", "Cozarin", "Dobrev", "Ionescu", "Muresan", "Preda", "Stancu", "Vladarin"],
    epithets: [...commonEpithets, semantic("Epithet.Grave", "the Grave"), semantic("Epithet.Nightwalker", "the Night-Walker")],
    epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.human-andoren`,
    labelKey: "NAMESINNERSEA.Pack.AndorenHuman",
    ancestryIds: HUMAN,
    cultureIds: [`${MODULE_ID}.andoren`],
    supportedLocales: LOCALES,
    weight: 10,
    given: {
      male: ["Alden", "Bennet", "Corwin", "Darian", "Edric", "Gareth", "Harlan", "Jasper", "Kellan", "Landon", "Merric", "Nolan", "Orrin", "Perrin", "Quentin", "Rowan", "Silas", "Tobias", "Tristan", "Vance", "Warren", "Wesley", "Xander", "Zachary"],
      female: ["Adeline", "Brenna", "Clara", "Daphne", "Elise", "Fiona", "Gwen", "Helena", "Iris", "Jessa", "Kendra", "Lydia", "Mariel", "Nora", "Olivia", "Perrine", "Rosalyn", "Sabine", "Tessa", "Vera", "Willa", "Yvette", "Zara", "Zelia"],
      neutral: ["Avery", "Blair", "Casey", "Ellis", "Jory", "Morgan", "Quinn", "Reese", "Robin", "Sage", "Taylor", "Wren"]
    },
    family: ["Ashford", "Bellamy", "Carrow", "Dunley", "Everett", "Fairwind", "Gallow", "Hartwell", "Iverton", "Kestrel", "Langford", "Marrow", "Northam", "Oakley", "Pember", "Quillan", "Rookwell", "Sterling", "Thorne", "Valecourt", "Weston", "Whitlock", "Windham", "Yarrow", "Alder", "Briar", "Caldwell", "Hawthorne", "Merrow", "Redmont"],
    epithets: [...commonEpithets, semantic("Epithet.Freeborn", "the Freeborn"), semantic("Epithet.Patriot", "the Patriot")],
    epithetChance: 0.05
  }
]);

export function registerHumanCultures(api) {
  for (const culture of HUMAN_CULTURES) api.content.registerNameCulture(MODULE_ID, culture);
  for (const pack of HUMAN_NAME_PACKS) api.content.registerNamePack(MODULE_ID, pack);
}
