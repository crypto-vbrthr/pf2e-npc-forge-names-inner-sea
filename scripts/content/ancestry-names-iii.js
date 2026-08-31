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

const ancestryEpithets = {
  tengu: [
    semantic("Tengu.Epithet.Stormwise", "Storm-Wise"),
    semantic("Tengu.Epithet.Highperch", "High-Perch"),
    semantic("Tengu.Epithet.Farwing", "Far-Wing"),
    semantic("Tengu.Epithet.Brightbeak", "Bright-Beak")
  ],
  tripkee: [
    semantic("Tripkee.Epithet.Reedwatcher", "Reed-Watcher"),
    semantic("Tripkee.Epithet.Rainlistener", "Rain-Listener"),
    semantic("Tripkee.Epithet.Pondfriend", "Pond-Friend"),
    semantic("Tripkee.Epithet.Patientstep", "Patient-Step")
  ],
  ysoki: [
    semantic("Ysoki.Epithet.Quickear", "Quick-Ear"),
    semantic("Ysoki.Epithet.Brighteye", "Bright-Eye"),
    semantic("Ysoki.Epithet.Manypockets", "Many-Pockets"),
    semantic("Ysoki.Epithet.Truemeasure", "True-Measure")
  ]
};

export const ANCESTRY_NAME_PACKS_III = Object.freeze([
  {
    id: `${MODULE_ID}.tengu-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.TenguInnerSea",
    ancestryIds: ["core.tengu"],
    supportedLocales: LOCALES,
    weight: 12,
    generators: {
      given: componentGenerator(
        [["onset", "vowel", "coda"]],
        {
          onset: ["K", "M", "P", "R", "S", "Sh", "T", "Ts", "V", "Z", "Kr", "Tr"],
          vowel: ["a", "e", "i", "o", "u", "ai", "ei", "ou"],
          coda: ["n", "k", "r", "m", "s", "sh", "ra", "to", "zen", "rin", "dor", "vek"]
        }
      )
    },
    epithets: ancestryEpithets.tengu,
    epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.tripkee-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.TripkeeInnerSea",
    ancestryIds: ["core.tripkee"],
    supportedLocales: LOCALES,
    weight: 12,
    generators: {
      given: componentGenerator(
        [["opening", "chirp", "ending"]],
        {
          opening: ["Aa", "Cta", "Ee", "Gpo", "Gru", "Hra", "Iio", "Kyi", "Mhu", "Oa", "Qua", "Uru", "Yaa", "Zta"],
          chirp: ["po", "pra", "ki", "kri", "gru", "go", "lu", "ru", "ri", "sa", "ti", "yo", "uu", "oa"],
          ending: ["l", "ol", "u", "uu", "ik", "iik", "a", "ak", "o", "oon"]
        }
      )
    },
    epithets: ancestryEpithets.tripkee,
    epithetChance: 0.16
  },
  {
    id: `${MODULE_ID}.ysoki-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.YsokiInnerSea",
    ancestryIds: ["core.ratfolk"],
    supportedLocales: LOCALES,
    weight: 12,
    generators: {
      given: componentGenerator(
        [
          ["root"],
          ["root", "variant"]
        ],
        {
          root: ["Bel", "Bor", "Cha", "Dar", "Dren", "Fik", "Gess", "Jal", "Kav", "Kez", "Kor", "Lem", "Lir", "Mek", "Nab", "Nav", "Nes", "Pik", "Ral", "Rim", "Sak", "Sel", "Siv", "Tek", "Tir", "Tor", "Vek", "Vil", "Zan", "Zir"],
          variant: ["a", "i", "o", "an", "is", "ik", "en", "ri", "to", "zi"]
        }
      )
    },
    epithets: ancestryEpithets.ysoki,
    epithetChance: 0.07
  }
]);

export function registerAncestryNamesIII(api) {
  for (const pack of ANCESTRY_NAME_PACKS_III) api.content.registerNamePack(MODULE_ID, pack);
}
