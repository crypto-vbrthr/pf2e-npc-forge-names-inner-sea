const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const LOCALES = ["en", "de"];

const semantic = (key, fallback) => ({
  id: `${MODULE_ID}.${key}`,
  labelKey: `NAMESINNERSEA.${key}`,
  fallback
});

const speakingFamilyGenerator = (prefixes, suffixes) => ({
  type: "components",
  patterns: [["prefix", "suffix"]],
  separator: "",
  components: { prefix: prefixes, suffix: suffixes }
});

const ancestryEpithets = {
  dwarf: [
    semantic("Dwarf.Epithet.Deepdelver", "the Deep-Delver"),
    semantic("Dwarf.Epithet.Forgewise", "Forge-Wise"),
    semantic("Dwarf.Epithet.Oathkeeper", "Oath-Keeper"),
    semantic("Dwarf.Epithet.Stoneborn", "Stone-Born")
  ],
  elf: [
    semantic("Elf.Epithet.Moonlistener", "Moon-Listener"),
    semantic("Elf.Epithet.Starward", "Star-Ward"),
    semantic("Elf.Epithet.Leafwhisper", "Leaf-Whisper"),
    semantic("Elf.Epithet.Longmemory", "Long-Memory")
  ],
  halfling: [
    semantic("Halfling.Epithet.Quickstep", "Quickstep"),
    semantic("Halfling.Epithet.Hearthfriend", "Hearth-Friend"),
    semantic("Halfling.Epithet.Roadwise", "Road-Wise"),
    semantic("Halfling.Epithet.Brightlaugh", "Bright-Laugh")
  ],
  gnome: [
    semantic("Gnome.Epithet.Manyquestions", "Many-Questions"),
    semantic("Gnome.Epithet.Brightspark", "Bright-Spark"),
    semantic("Gnome.Epithet.Twicepainted", "Twice-Painted"),
    semantic("Gnome.Epithet.Wonderstruck", "Wonder-Struck")
  ],
  goblin: [
    semantic("Goblin.Epithet.Bitey", "Bitey"),
    semantic("Goblin.Epithet.Noisy", "the Noisy"),
    semantic("Goblin.Epithet.Sootface", "Soot-Face"),
    semantic("Goblin.Epithet.Sneakyboots", "Sneaky-Boots")
  ],
  orc: [
    semantic("Orc.Epithet.Unbroken", "the Unbroken"),
    semantic("Orc.Epithet.Scarred", "the Scarred"),
    semantic("Orc.Epithet.Ironvoice", "Iron-Voice"),
    semantic("Orc.Epithet.Longstride", "Long-Stride")
  ]
};

export const ANCESTRY_NAME_PACKS_I = Object.freeze([
  {
    id: `${MODULE_ID}.dwarf-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.DwarfInnerSea",
    ancestryIds: ["core.dwarf"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Adrik", "Baern", "Bromir", "Dagrin", "Dorrik", "Eberk", "Faldren", "Fargrim", "Garn", "Harbek", "Hjold", "Kadrik", "Kazrik", "Morgran", "Naldor", "Orsik", "Rurik", "Storn", "Thargrim", "Tordek", "Ulfgar", "Vondrik", "Yorik", "Zarn"],
      female: ["Alrika", "Bardryn", "Brynja", "Dagna", "Dorria", "Eldra", "Falki", "Gunnra", "Helja", "Hlin", "Ingra", "Kelda", "Marda", "Morra", "Nori", "Orla", "Ragna", "Sanna", "Thora", "Torra", "Ulla", "Vigra", "Yrsa", "Zolda"],
      neutral: ["Arin", "Bryn", "Dori", "Eri", "Farin", "Kari", "Mori", "Nari", "Runi", "Tavi", "Vori", "Yori"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Dwarf.Family.Prefix.Amber", "Amber"), semantic("Dwarf.Family.Prefix.Bronze", "Bronze"), semantic("Dwarf.Family.Prefix.Coal", "Coal"), semantic("Dwarf.Family.Prefix.Deep", "Deep"),
          semantic("Dwarf.Family.Prefix.Flint", "Flint"), semantic("Dwarf.Family.Prefix.Gold", "Gold"), semantic("Dwarf.Family.Prefix.Granite", "Granite"), semantic("Dwarf.Family.Prefix.Iron", "Iron"),
          semantic("Dwarf.Family.Prefix.Rune", "Rune"), semantic("Dwarf.Family.Prefix.Silver", "Silver"), semantic("Dwarf.Family.Prefix.Stone", "Stone"), semantic("Dwarf.Family.Prefix.Under", "Under")
        ],
        [
          semantic("Dwarf.Family.Suffix.Anvil", "anvil"), semantic("Dwarf.Family.Suffix.Beard", "beard"), semantic("Dwarf.Family.Suffix.Brow", "brow"), semantic("Dwarf.Family.Suffix.Delver", "delver"),
          semantic("Dwarf.Family.Suffix.Forge", "forge"), semantic("Dwarf.Family.Suffix.Hammer", "hammer"), semantic("Dwarf.Family.Suffix.Heart", "heart"), semantic("Dwarf.Family.Suffix.Pick", "pick"),
          semantic("Dwarf.Family.Suffix.Shield", "shield"), semantic("Dwarf.Family.Suffix.Spark", "spark"), semantic("Dwarf.Family.Suffix.Vault", "vault"), semantic("Dwarf.Family.Suffix.Ward", "ward")
        ]
      )
    },
    epithets: ancestryEpithets.dwarf,
    epithetChance: 0.08
  },
  {
    id: `${MODULE_ID}.elf-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.ElfInnerSea",
    ancestryIds: ["core.elf"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Aelarion", "Aerendyl", "Caelir", "Daevan", "Elaris", "Faelar", "Galeth", "Ilyrion", "Kaelis", "Lethar", "Maelor", "Naevan", "Oryndel", "Phaelis", "Quarion", "Raelith", "Saerel", "Talendir", "Theronel", "Vaelis", "Xyrion", "Yllar", "Zaerith", "Zevran"],
      female: ["Aelira", "Althaea", "Caelynn", "Daelira", "Elariel", "Faenya", "Ilyrana", "Kaelith", "Laeriel", "Lethira", "Maeriel", "Naivara", "Orielle", "Phaedra", "Quelenna", "Raelira", "Saelith", "Sylara", "Thaelira", "Vaelora", "Xilara", "Yllara", "Zaelith", "Zeriel"],
      neutral: ["Aeris", "Cael", "Elior", "Ilyr", "Kael", "Leth", "Naeris", "Oryn", "Sael", "Talis", "Vael", "Zai"]
    },
    family: ["Aelthir", "Amariel", "Caeloren", "Daelwyn", "Elarion", "Faenorin", "Galanodel", "Ilyndor", "Kaelisar", "Laethwyn", "Lethariel", "Maerond", "Naelith", "Orelisar", "Phaerion", "Quelanth", "Raelisar", "Saelwyn", "Sylvarin", "Taeloren", "Therendis", "Vaelisar", "Xyranth", "Yllanor", "Zaelwyn", "Zerandor", "Aerisyl", "Loraeth", "Nymariel", "Vaereth"],
    epithets: ancestryEpithets.elf,
    epithetChance: 0.06
  },
  {
    id: `${MODULE_ID}.halfling-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.HalflingInnerSea",
    ancestryIds: ["core.halfling"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Albin", "Berrit", "Cobb", "Derry", "Edvin", "Fenn", "Garrin", "Hob", "Jory", "Kellen", "Larkin", "Milo", "Nedd", "Orin", "Perrin", "Quin", "Roscoe", "Samrin", "Tobin", "Uldo", "Verran", "Wylie", "Yanni", "Zeb"],
      female: ["Alma", "Bree", "Cora", "Della", "Elsie", "Fenni", "Gilly", "Hana", "Jessa", "Kiri", "Lina", "Mara", "Nella", "Orla", "Pippa", "Quilla", "Rosie", "Sella", "Tessa", "Una", "Vela", "Willa", "Yara", "Zinnia"],
      neutral: ["Ari", "Bram", "Clem", "Dani", "Em", "Jori", "Kit", "Meri", "Pip", "Robin", "Tavi", "Wren"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Halfling.Family.Prefix.Apple", "Apple"), semantic("Halfling.Family.Prefix.Briar", "Briar"), semantic("Halfling.Family.Prefix.Bright", "Bright"), semantic("Halfling.Family.Prefix.Clover", "Clover"),
          semantic("Halfling.Family.Prefix.Green", "Green"), semantic("Halfling.Family.Prefix.Honey", "Honey"), semantic("Halfling.Family.Prefix.Little", "Little"), semantic("Halfling.Family.Prefix.Meadow", "Meadow"),
          semantic("Halfling.Family.Prefix.Penny", "Penny"), semantic("Halfling.Family.Prefix.River", "River"), semantic("Halfling.Family.Prefix.Soft", "Soft"), semantic("Halfling.Family.Prefix.Thistle", "Thistle")
        ],
        [
          semantic("Halfling.Family.Suffix.Bottle", "bottle"), semantic("Halfling.Family.Suffix.Brook", "brook"), semantic("Halfling.Family.Suffix.Button", "button"), semantic("Halfling.Family.Suffix.Foot", "foot"),
          semantic("Halfling.Family.Suffix.Hearth", "hearth"), semantic("Halfling.Family.Suffix.Hill", "hill"), semantic("Halfling.Family.Suffix.Kettle", "kettle"), semantic("Halfling.Family.Suffix.Leaf", "leaf"),
          semantic("Halfling.Family.Suffix.Pocket", "pocket"), semantic("Halfling.Family.Suffix.Reed", "reed"), semantic("Halfling.Family.Suffix.Step", "step"), semantic("Halfling.Family.Suffix.Wick", "wick")
        ]
      )
    },
    epithets: ancestryEpithets.halfling,
    epithetChance: 0.07
  },
  {
    id: `${MODULE_ID}.gnome-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.GnomeInnerSea",
    ancestryIds: ["core.gnome"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Alvix", "Bimble", "Cozzi", "Dovren", "Fizzik", "Glim", "Jebbin", "Kivri", "Lomli", "Merrix", "Nibbin", "Orvix", "Pello", "Quib", "Rindle", "Sivvi", "Tazzik", "Uppi", "Vellix", "Wimble", "Xobbin", "Yarri", "Zeffik", "Zimri"],
      female: ["Alixi", "Breezi", "Cressa", "Dizzi", "Fennel", "Glimma", "Jorra", "Kivva", "Lolli", "Merri", "Nimsi", "Orli", "Perri", "Quilla", "Rizzi", "Saffi", "Tilli", "Ulli", "Vexa", "Wizzi", "Xelli", "Yazzi", "Zeffa", "Zinni"],
      neutral: ["Bix", "Dabble", "Fizz", "Glim", "Jinx", "Kip", "Mox", "Nib", "Pip", "Quirk", "Tink", "Zig"]
    },
    family: ["Amberwink", "Bafflebloom", "Coppergleam", "Dappleglass", "Emberglee", "Fizzlespin", "Glimmerwick", "Hushwhistle", "Ivorytink", "Janglefern", "Kettleglim", "Larkspark", "Merrycoil", "Nimblewort", "Opalwhim", "Puddlewink", "Quillgleam", "Rattlefern", "Silverfizz", "Tumblebloom", "Umberwhistle", "Velvetgear", "Wanderwink", "Xyloglim", "Yellowquill", "Zestercog", "Brightnib", "Clovercoil", "Dazzlewort", "Moonfizz"],
    epithets: ancestryEpithets.gnome,
    epithetChance: 0.1
  },
  {
    id: `${MODULE_ID}.goblin-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.GoblinInnerSea",
    ancestryIds: ["core.goblin"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Bazz", "Chib", "Dreg", "Fenk", "Gib", "Grizz", "Jakk", "Krek", "Mug", "Nizz", "Pib", "Ragz", "Rikk", "Skab", "Snik", "Tekk", "Tizz", "Vrag", "Wikk", "Yap", "Zagg", "Zib", "Zokk", "Zurk"],
      female: ["Bikka", "Chizzi", "Dakka", "Fizzi", "Grezza", "Jibba", "Kikka", "Mazza", "Nakka", "Pikka", "Razzi", "Rikka", "Skizzi", "Snakka", "Tikka", "Tizzi", "Vekka", "Wazza", "Yikka", "Zabba", "Zikka", "Zizzi", "Zokka", "Zukka"],
      neutral: ["Bip", "Crik", "Fiz", "Gak", "Jib", "Kik", "Nib", "Pik", "Ruk", "Tik", "Yak", "Zik"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Goblin.Family.Prefix.Bat", "Bat"), semantic("Goblin.Family.Prefix.Bone", "Bone"), semantic("Goblin.Family.Prefix.Bug", "Bug"), semantic("Goblin.Family.Prefix.Cinder", "Cinder"),
          semantic("Goblin.Family.Prefix.Dog", "Dog"), semantic("Goblin.Family.Prefix.Ear", "Ear"), semantic("Goblin.Family.Prefix.Fang", "Fang"), semantic("Goblin.Family.Prefix.Mud", "Mud"),
          semantic("Goblin.Family.Prefix.Rat", "Rat"), semantic("Goblin.Family.Prefix.Soot", "Soot"), semantic("Goblin.Family.Prefix.Toad", "Toad"), semantic("Goblin.Family.Prefix.Worm", "Worm")
        ],
        [
          semantic("Goblin.Family.Suffix.Biter", "biter"), semantic("Goblin.Family.Suffix.Boot", "boot"), semantic("Goblin.Family.Suffix.Crunch", "crunch"), semantic("Goblin.Family.Suffix.Face", "face"),
          semantic("Goblin.Family.Suffix.Fingers", "fingers"), semantic("Goblin.Family.Suffix.Gnaw", "gnaw"), semantic("Goblin.Family.Suffix.Nose", "nose"), semantic("Goblin.Family.Suffix.Poke", "poke"),
          semantic("Goblin.Family.Suffix.Scrape", "scrape"), semantic("Goblin.Family.Suffix.Spit", "spit"), semantic("Goblin.Family.Suffix.Stink", "stink"), semantic("Goblin.Family.Suffix.Tooth", "tooth")
        ]
      )
    },
    epithets: ancestryEpithets.goblin,
    epithetChance: 0.14
  },
  {
    id: `${MODULE_ID}.orc-inner-sea`,
    labelKey: "NAMESINNERSEA.Pack.OrcInnerSea",
    ancestryIds: ["core.orc"],
    supportedLocales: LOCALES,
    weight: 12,
    given: {
      male: ["Arzug", "Borgakh", "Darg", "Goruk", "Grash", "Hargun", "Kargan", "Krug", "Mordak", "Nargul", "Orgash", "Raghar", "Rogar", "Sharg", "Thok", "Urgath", "Vargan", "Vorg", "Wark", "Yarg", "Zagur", "Zorak", "Brug", "Khorag"],
      female: ["Arga", "Borga", "Dakka", "Ghara", "Grasha", "Harka", "Karga", "Krasha", "Morda", "Narga", "Orga", "Ragha", "Roga", "Shara", "Thura", "Urga", "Varka", "Vorga", "Wara", "Yarga", "Zagra", "Zora", "Brakka", "Khora"],
      neutral: ["Arg", "Borg", "Darg", "Ghar", "Karg", "Morg", "Narg", "Rag", "Thur", "Varg", "Yarg", "Zor"]
    },
    generators: {
      family: speakingFamilyGenerator(
        [
          semantic("Orc.Family.Prefix.Ash", "Ash"), semantic("Orc.Family.Prefix.Blood", "Blood"), semantic("Orc.Family.Prefix.Bone", "Bone"), semantic("Orc.Family.Prefix.Fang", "Fang"),
          semantic("Orc.Family.Prefix.Iron", "Iron"), semantic("Orc.Family.Prefix.Red", "Red"), semantic("Orc.Family.Prefix.Scar", "Scar"), semantic("Orc.Family.Prefix.Skull", "Skull"),
          semantic("Orc.Family.Prefix.Stone", "Stone"), semantic("Orc.Family.Prefix.Storm", "Storm"), semantic("Orc.Family.Prefix.Tusk", "Tusk"), semantic("Orc.Family.Prefix.Wolf", "Wolf")
        ],
        [
          semantic("Orc.Family.Suffix.Breaker", "breaker"), semantic("Orc.Family.Suffix.Cleaver", "cleaver"), semantic("Orc.Family.Suffix.Fist", "fist"), semantic("Orc.Family.Suffix.Hand", "hand"),
          semantic("Orc.Family.Suffix.Heart", "heart"), semantic("Orc.Family.Suffix.Howl", "howl"), semantic("Orc.Family.Suffix.Kin", "kin"), semantic("Orc.Family.Suffix.Mark", "mark"),
          semantic("Orc.Family.Suffix.Shield", "shield"), semantic("Orc.Family.Suffix.Spear", "spear"), semantic("Orc.Family.Suffix.Stride", "stride"), semantic("Orc.Family.Suffix.Ward", "ward")
        ]
      )
    },
    epithets: ancestryEpithets.orc,
    epithetChance: 0.09
  }
]);

export function registerAncestryNamesI(api) {
  for (const pack of ANCESTRY_NAME_PACKS_I) api.content.registerNamePack(MODULE_ID, pack);
}
