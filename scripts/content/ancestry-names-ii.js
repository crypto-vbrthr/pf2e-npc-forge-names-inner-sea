const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const LOCALES = ["en", "de"];

const semantic = (key, fallback) => ({
  id: `${MODULE_ID}.${key}`,
  labelKey: `NAMESINNERSEA.${key}`,
  fallback
});

const componentGenerator = (leftKey, left, rightKey, right, separator = "") => ({
  type: "components",
  patterns: [[leftKey, rightKey]],
  separator,
  components: { [leftKey]: left, [rightKey]: right }
});

const speakingFamilyGenerator = (prefixes, suffixes) => componentGenerator("prefix", prefixes, "suffix", suffixes);

const ancestryEpithets = {
  leshy: [
    semantic("Leshy.Epithet.Oldgrowth", "Old-Growth"),
    semantic("Leshy.Epithet.Raindrinker", "Rain-Drinker"),
    semantic("Leshy.Epithet.Sunturner", "Sun-Turner"),
    semantic("Leshy.Epithet.Rootwise", "Root-Wise")
  ],
  catfolk: [
    semantic("Catfolk.Epithet.Softstep", "Soft-Step"),
    semantic("Catfolk.Epithet.Brightwhisker", "Bright-Whisker"),
    semantic("Catfolk.Epithet.Nightwatcher", "Night-Watcher"),
    semantic("Catfolk.Epithet.Ninelives", "Nine-Lives")
  ],
  hobgoblin: [
    semantic("Hobgoblin.Epithet.Hardmarch", "Hard-March"),
    semantic("Hobgoblin.Epithet.Oathbound", "Oath-Bound"),
    semantic("Hobgoblin.Epithet.Redbanner", "Red-Banner"),
    semantic("Hobgoblin.Epithet.Unyielding", "the Unyielding")
  ],
  iruxi: [
    semantic("Iruxi.Epithet.Sunbasker", "Sun-Basker"),
    semantic("Iruxi.Epithet.Deepcurrent", "Deep-Current"),
    semantic("Iruxi.Epithet.Reedwalker", "Reed-Walker"),
    semantic("Iruxi.Epithet.Oldscale", "Old-Scale")
  ],
  kholo: [
    semantic("Kholo.Epithet.Farlaugh", "Far-Laugh"),
    semantic("Kholo.Epithet.Longtrack", "Long-Track"),
    semantic("Kholo.Epithet.Packvoice", "Pack-Voice"),
    semantic("Kholo.Epithet.Dustrunner", "Dust-Runner")
  ],
  kobold: [
    semantic("Kobold.Epithet.Hoardkeeper", "Hoard-Keeper"),
    semantic("Kobold.Epithet.Embertongue", "Ember-Tongue"),
    semantic("Kobold.Epithet.Tunnelfinder", "Tunnel-Finder"),
    semantic("Kobold.Epithet.Dragonproud", "Dragon-Proud")
  ]
};

export const ANCESTRY_NAME_PACKS_II = Object.freeze([
  {
    id: `${MODULE_ID}.leshy-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.LeshyInnerSea",
    ancestryIds: ["core.leshy"],
    supportedLocales: LOCALES,
    weight: 12,
    generators: {
      given: componentGenerator(
        "prefix",
        [
          semantic("Leshy.Given.Prefix.Bark", "Bark"), semantic("Leshy.Given.Prefix.Dew", "Dew"), semantic("Leshy.Given.Prefix.Fern", "Fern"), semantic("Leshy.Given.Prefix.Moss", "Moss"),
          semantic("Leshy.Given.Prefix.Moon", "Moon"), semantic("Leshy.Given.Prefix.Rain", "Rain"), semantic("Leshy.Given.Prefix.Reed", "Reed"), semantic("Leshy.Given.Prefix.Seed", "Seed"),
          semantic("Leshy.Given.Prefix.Sun", "Sun"), semantic("Leshy.Given.Prefix.Thorn", "Thorn"), semantic("Leshy.Given.Prefix.Vine", "Vine"), semantic("Leshy.Given.Prefix.Willow", "Willow")
        ],
        "suffix",
        [
          semantic("Leshy.Given.Suffix.Berry", "berry"), semantic("Leshy.Given.Suffix.Bloom", "bloom"), semantic("Leshy.Given.Suffix.Bud", "bud"), semantic("Leshy.Given.Suffix.Cap", "cap"),
          semantic("Leshy.Given.Suffix.Frond", "frond"), semantic("Leshy.Given.Suffix.Leaf", "leaf"), semantic("Leshy.Given.Suffix.Root", "root"), semantic("Leshy.Given.Suffix.Sprig", "sprig"),
          semantic("Leshy.Given.Suffix.Spore", "spore"), semantic("Leshy.Given.Suffix.Stem", "stem"), semantic("Leshy.Given.Suffix.Twig", "twig"), semantic("Leshy.Given.Suffix.Vine", "vine")
        ]
      )
    },
    epithets: ancestryEpithets.leshy,
    epithetChance: 0.12
  },
  {
    id: `${MODULE_ID}.catfolk-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.CatfolkInnerSea",
    ancestryIds: ["core.catfolk"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Aru", "Baresh", "Cazir", "Damar", "Eshar", "Farek", "Gavir", "Hazan", "Ishun", "Jarek", "Keshar", "Lazir", "Marru", "Nahir", "Orash", "Pazir", "Qadir", "Rashan", "Sahir", "Tarek", "Uzar", "Vashir", "Yazun", "Zarek"],
      female: ["Asha", "Baziri", "Cali", "Dahara", "Eshani", "Fari", "Ghazra", "Hali", "Ishara", "Jasira", "Kali", "Lazha", "Mira", "Nashira", "Orali", "Pashra", "Qasira", "Razi", "Sahra", "Tali", "Ushari", "Vezra", "Yasira", "Zahri"],
      neutral: ["Ari", "Cazi", "Eshi", "Fara", "Kesh", "Miri", "Nari", "Qari", "Raziq", "Sahi", "Tavi", "Zari"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Catfolk.Family.Prefix.Amber", "Amber"), semantic("Catfolk.Family.Prefix.Dawn", "Dawn"), semantic("Catfolk.Family.Prefix.Dusk", "Dusk"), semantic("Catfolk.Family.Prefix.Gold", "Gold"),
          semantic("Catfolk.Family.Prefix.Moon", "Moon"), semantic("Catfolk.Family.Prefix.Night", "Night"), semantic("Catfolk.Family.Prefix.Sand", "Sand"), semantic("Catfolk.Family.Prefix.Silver", "Silver"),
          semantic("Catfolk.Family.Prefix.Sun", "Sun"), semantic("Catfolk.Family.Prefix.Velvet", "Velvet"), semantic("Catfolk.Family.Prefix.Whisper", "Whisper"), semantic("Catfolk.Family.Prefix.Wind", "Wind")
        ],
        [
          semantic("Catfolk.Family.Suffix.Claw", "claw"), semantic("Catfolk.Family.Suffix.Eye", "eye"), semantic("Catfolk.Family.Suffix.Fur", "fur"), semantic("Catfolk.Family.Suffix.Leap", "leap"),
          semantic("Catfolk.Family.Suffix.Paw", "paw"), semantic("Catfolk.Family.Suffix.Shadow", "shadow"), semantic("Catfolk.Family.Suffix.Step", "step"), semantic("Catfolk.Family.Suffix.Stride", "stride"),
          semantic("Catfolk.Family.Suffix.Tail", "tail"), semantic("Catfolk.Family.Suffix.Whisker", "whisker"), semantic("Catfolk.Family.Suffix.Watcher", "watcher"), semantic("Catfolk.Family.Suffix.Song", "song")
        ]
      )
    },
    epithets: ancestryEpithets.catfolk,
    epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.hobgoblin-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.HobgoblinInnerSea",
    ancestryIds: ["core.hobgoblin"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Ardek", "Bargan", "Cadruk", "Dazek", "Gorvan", "Harvek", "Jorak", "Kadran", "Kezek", "Marduk", "Narek", "Ordan", "Razan", "Sargan", "Tarek", "Urdan", "Varnek", "Wargan", "Yarek", "Zardek", "Bravan", "Dorek", "Kazran", "Vordek"],
      female: ["Arka", "Barda", "Cazra", "Dareka", "Gavra", "Harza", "Jarka", "Kadri", "Kezra", "Marda", "Nareka", "Orza", "Rava", "Sarka", "Tavra", "Urda", "Varka", "Warza", "Yadra", "Zareka", "Braka", "Davra", "Kazra", "Vorda"],
      neutral: ["Ard", "Bar", "Daz", "Gor", "Kad", "Kaz", "Mar", "Nar", "Raz", "Sar", "Var", "Zar"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Hobgoblin.Family.Prefix.Ash", "Ash"), semantic("Hobgoblin.Family.Prefix.Black", "Black"), semantic("Hobgoblin.Family.Prefix.Blood", "Blood"), semantic("Hobgoblin.Family.Prefix.Bronze", "Bronze"),
          semantic("Hobgoblin.Family.Prefix.Iron", "Iron"), semantic("Hobgoblin.Family.Prefix.Red", "Red"), semantic("Hobgoblin.Family.Prefix.Shield", "Shield"), semantic("Hobgoblin.Family.Prefix.Spear", "Spear"),
          semantic("Hobgoblin.Family.Prefix.Steel", "Steel"), semantic("Hobgoblin.Family.Prefix.Stone", "Stone"), semantic("Hobgoblin.Family.Prefix.War", "War"), semantic("Hobgoblin.Family.Prefix.Banner", "Banner")
        ],
        [
          semantic("Hobgoblin.Family.Suffix.Banner", "banner"), semantic("Hobgoblin.Family.Suffix.Crest", "crest"), semantic("Hobgoblin.Family.Suffix.Fist", "fist"), semantic("Hobgoblin.Family.Suffix.Guard", "guard"),
          semantic("Hobgoblin.Family.Suffix.Line", "line"), semantic("Hobgoblin.Family.Suffix.March", "march"), semantic("Hobgoblin.Family.Suffix.Oath", "oath"), semantic("Hobgoblin.Family.Suffix.Rank", "rank"),
          semantic("Hobgoblin.Family.Suffix.Shield", "shield"), semantic("Hobgoblin.Family.Suffix.Spear", "spear"), semantic("Hobgoblin.Family.Suffix.Ward", "ward"), semantic("Hobgoblin.Family.Suffix.Watch", "watch")
        ]
      )
    },
    epithets: ancestryEpithets.hobgoblin,
    epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.iruxi-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.IruxiInnerSea",
    ancestryIds: ["core.lizardfolk"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Akhess", "Chassar", "Drazh", "Essak", "Hassar", "Isshek", "Kassir", "Keth", "Nassak", "Oshar", "Qassir", "Rasshek", "Sathar", "Shess", "Tassar", "Ussak", "Vashess", "Xassar", "Yessir", "Zathak", "Chessak", "Kharss", "Sazhek", "Vissar"],
      female: ["Azhessa", "Chassira", "Drazha", "Essira", "Hassara", "Issha", "Kassira", "Ketha", "Nassira", "Oshara", "Qassira", "Rassha", "Sathira", "Shessa", "Tassara", "Ussira", "Vashara", "Xassira", "Yessara", "Zathira", "Chessara", "Kharssa", "Sazha", "Vissara"],
      neutral: ["Akh", "Chass", "Draz", "Ess", "Kass", "Nass", "Rass", "Sath", "Shess", "Tass", "Vash", "Zath"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Iruxi.Family.Prefix.Deep", "Deep"), semantic("Iruxi.Family.Prefix.Mangrove", "Mangrove"), semantic("Iruxi.Family.Prefix.Marsh", "Marsh"), semantic("Iruxi.Family.Prefix.Moon", "Moon"),
          semantic("Iruxi.Family.Prefix.Rain", "Rain"), semantic("Iruxi.Family.Prefix.Reed", "Reed"), semantic("Iruxi.Family.Prefix.River", "River"), semantic("Iruxi.Family.Prefix.Salt", "Salt"),
          semantic("Iruxi.Family.Prefix.Scale", "Scale"), semantic("Iruxi.Family.Prefix.Stone", "Stone"), semantic("Iruxi.Family.Prefix.Sun", "Sun"), semantic("Iruxi.Family.Prefix.Warm", "Warm")
        ],
        [
          semantic("Iruxi.Family.Suffix.Claw", "claw"), semantic("Iruxi.Family.Suffix.Crest", "crest"), semantic("Iruxi.Family.Suffix.Current", "current"), semantic("Iruxi.Family.Suffix.Eye", "eye"),
          semantic("Iruxi.Family.Suffix.Fang", "fang"), semantic("Iruxi.Family.Suffix.Foot", "foot"), semantic("Iruxi.Family.Suffix.Hide", "hide"), semantic("Iruxi.Family.Suffix.Reed", "reed"),
          semantic("Iruxi.Family.Suffix.Scale", "scale"), semantic("Iruxi.Family.Suffix.Tail", "tail"), semantic("Iruxi.Family.Suffix.Tooth", "tooth"), semantic("Iruxi.Family.Suffix.Watcher", "watcher")
        ]
      )
    },
    epithets: ancestryEpithets.iruxi,
    epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.kholo-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.KholoInnerSea",
    ancestryIds: ["core.kholo"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Aruun", "Barka", "Dazho", "Ekkar", "Faruq", "Gharu", "Hazek", "Jarka", "Kezan", "Lurak", "Marruk", "Nekar", "Oruun", "Pazho", "Qarek", "Rhazun", "Sarruk", "Tazek", "Urran", "Varko", "Yazek", "Zharu", "Brakka", "Khorun"],
      female: ["Aruuna", "Barka", "Dazha", "Ekkara", "Farai", "Ghara", "Hazira", "Jarka", "Keza", "Luraka", "Marra", "Nekara", "Oruuna", "Pazha", "Qara", "Rhaza", "Sarra", "Tazira", "Urra", "Varka", "Yaza", "Zhara", "Brakka", "Khorra"],
      neutral: ["Aru", "Bark", "Dazh", "Ghar", "Kez", "Marr", "Nek", "Rhaz", "Sarr", "Taz", "Vark", "Zhar"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Kholo.Family.Prefix.Bone", "Bone"), semantic("Kholo.Family.Prefix.Dune", "Dune"), semantic("Kholo.Family.Prefix.Dust", "Dust"), semantic("Kholo.Family.Prefix.Gold", "Gold"),
          semantic("Kholo.Family.Prefix.Laugh", "Laugh"), semantic("Kholo.Family.Prefix.Long", "Long"), semantic("Kholo.Family.Prefix.Moon", "Moon"), semantic("Kholo.Family.Prefix.Pack", "Pack"),
          semantic("Kholo.Family.Prefix.Red", "Red"), semantic("Kholo.Family.Prefix.Sun", "Sun"), semantic("Kholo.Family.Prefix.Thorn", "Thorn"), semantic("Kholo.Family.Prefix.Wind", "Wind")
        ],
        [
          semantic("Kholo.Family.Suffix.Ear", "ear"), semantic("Kholo.Family.Suffix.Fang", "fang"), semantic("Kholo.Family.Suffix.Howl", "howl"), semantic("Kholo.Family.Suffix.Hunter", "hunter"),
          semantic("Kholo.Family.Suffix.Kin", "kin"), semantic("Kholo.Family.Suffix.Mane", "mane"), semantic("Kholo.Family.Suffix.Paw", "paw"), semantic("Kholo.Family.Suffix.Runner", "runner"),
          semantic("Kholo.Family.Suffix.Stride", "stride"), semantic("Kholo.Family.Suffix.Tail", "tail"), semantic("Kholo.Family.Suffix.Track", "track"), semantic("Kholo.Family.Suffix.Voice", "voice")
        ]
      )
    },
    epithets: ancestryEpithets.kholo,
    epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.kobold-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.KoboldInnerSea",
    ancestryIds: ["core.kobold"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Arrix", "Bexik", "Cazek", "Drik", "Ezzik", "Fex", "Garrik", "Hizzik", "Ixek", "Jax", "Kezik", "Lurrik", "Mexik", "Nix", "Ozzik", "Perrik", "Qix", "Razzik", "Serrik", "Tixik", "Uzzek", "Varrik", "Wex", "Zixik"],
      female: ["Arrixa", "Bexi", "Cazika", "Drika", "Ezzika", "Fexa", "Garrika", "Hizzi", "Ixika", "Jaxa", "Kezika", "Lurrika", "Mexi", "Nixa", "Ozzika", "Perrika", "Qixa", "Razzika", "Serrika", "Tixika", "Uzzika", "Varrika", "Wexa", "Zixika"],
      neutral: ["Bex", "Caz", "Drik", "Ezz", "Fex", "Ix", "Kez", "Nix", "Qix", "Razz", "Tix", "Zix"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Kobold.Family.Prefix.Brass", "Brass"), semantic("Kobold.Family.Prefix.Cinder", "Cinder"), semantic("Kobold.Family.Prefix.Coal", "Coal"), semantic("Kobold.Family.Prefix.Copper", "Copper"),
          semantic("Kobold.Family.Prefix.Dragon", "Dragon"), semantic("Kobold.Family.Prefix.Ember", "Ember"), semantic("Kobold.Family.Prefix.Gold", "Gold"), semantic("Kobold.Family.Prefix.Ruby", "Ruby"),
          semantic("Kobold.Family.Prefix.Scale", "Scale"), semantic("Kobold.Family.Prefix.Silver", "Silver"), semantic("Kobold.Family.Prefix.Smoke", "Smoke"), semantic("Kobold.Family.Prefix.Spark", "Spark")
        ],
        [
          semantic("Kobold.Family.Suffix.Claw", "claw"), semantic("Kobold.Family.Suffix.Coil", "coil"), semantic("Kobold.Family.Suffix.Fang", "fang"), semantic("Kobold.Family.Suffix.Gem", "gem"),
          semantic("Kobold.Family.Suffix.Hoard", "hoard"), semantic("Kobold.Family.Suffix.Scale", "scale"), semantic("Kobold.Family.Suffix.Snout", "snout"), semantic("Kobold.Family.Suffix.Spark", "spark"),
          semantic("Kobold.Family.Suffix.Tail", "tail"), semantic("Kobold.Family.Suffix.Tooth", "tooth"), semantic("Kobold.Family.Suffix.Tunnel", "tunnel"), semantic("Kobold.Family.Suffix.Wing", "wing")
        ]
      )
    },
    epithets: ancestryEpithets.kobold,
    epithetChance: 0.11
  }
]);

export function registerAncestryNamesII(api) {
  for (const pack of ANCESTRY_NAME_PACKS_II) api.content.registerNamePack(MODULE_ID, pack);
}
