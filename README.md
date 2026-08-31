# PF2E NPC Forge: Names of the Inner Sea

**Names of the Inner Sea** is a cultural name expansion for **PF2E NPC Forge**. It adds large, setting-inspired name pools for characters from the Inner Sea region while leaving all generation logic in NPC Forge itself.

The add-on requires **PF2E NPC Forge 1.1.2 or newer**.

## 0.7.0 – Regional & Cultural Expansion III

Version 0.7.0 expands the regional layer with eight additional human cultural styles and five ancestry-specific variants. The release keeps the stricter generator-quality rules introduced in 0.6.1 while adding more urban, northern, frontier, and specialist regional identities.

### New human cultures

- Absalomi
- Druman
- Galtan
- Irriseni
- Mendevian
- Numerian
- Razmiri
- River Kingdoms / Riverfolk

All eight participate in automatic human cultural resolution. Their given-name pools remain gender-aware and are checked against the existing human library under the 30% cross-culture overlap ceiling.

### New ancestry-specific regional variants

- **Mordant Spire elves**, using formal ocean-facing elven proper names and sea-themed epithets
- **Dongun Hold dwarves**, using a large compositional family-name space built from craft, metal, engineering, hold, and fortification motifs
- **Absalomi halflings**, using compact cosmopolitan proper names and localized market-, harbor-, street-, household-, and trade-themed speaking family names
- **Absalomi tengu**, using a distinct cosmopolitan phonotactic generator without mandatory family names
- **Absalomi ysoki**, using a reusable root-and-ending given-name stock rather than forced surnames

Absalomi culture therefore supports humans, halflings, tengu, and ysoki, but remains automatic for humans only. Mordant Spire and Dongun Hold are explicit-only ancestry cultures. Installing the add-on still never replaces a universal nonhuman ancestry pack unless a regional culture is selected by the user or supplied by another module.

The release adds **20,720 possible base naming combinations**. The complete library now exposes **165,662 possible base combinations** representing approximately **161,137 distinct base names** before optional epithets.

The integration suite now also exercises the new explicit Mordant Spire, Dongun Hold, and Absalomi ancestry variants against the real NPC Forge 1.1.2 naming engine.

## 0.6.1 – Generator Quality Pass

Version 0.6.1 is a focused generator-quality release. It deliberately trades a small amount of theoretical combination count for cleaner output, stronger regional differentiation, and automated integration coverage against the real NPC Forge naming engine.

### Generator cleanup

- The universal **tengu** generator now uses a single phonotactic onset/vowel/coda pattern with **1,152 unique outputs**. This removes the 432 duplicate generation paths present in 0.6.0 and avoids the most repetitive constructions such as `Kakaka`, `Kashasha`, or `Taratara`.
- **Oprak hobgoblin** family names were rebuilt around oath, duty, law, command, cohort, legion, phalanx, bastion, and citadel motifs. The previous generator shared roughly 40% of its smaller family-name space with the universal hobgoblin pack; the revised generator has no exact family-name overlap with it.
- A German localization collision in the kobold family-name generator was removed by distinguishing `fang` as `fangzahn` from ordinary `tooth` / `zahn`.

### Cultural differentiation

Several of the remaining high-overlap human pools were adjusted, including Brevic, Sarkorian, Nidalese, and Keleshite names. The automated cross-culture quality limit has been tightened from 45% to **30%**, while the current highest overlap between comparable human given-name pools is below 23%.

### Quality and integration testing

The quality suite now verifies that every component generator produces unique rendered outputs in both English and German, not just unique semantic component pairs. It also checks Oprak/universal hobgoblin separation and retains the existing speaking-name, cultural-resolution, and effective-name-count checks.

A real NPC Forge integration suite can now be run with `PF2E_NPC_FORGE_SOURCE` pointing to an NPC Forge 1.1.2+ source checkout. It exercises the actual `ContentRegistry` and `NpcEngine`, confirms that automatic nonhuman naming stays on universal ancestry packs, and verifies explicit regional variants such as Kyonin elves, Varisian tengu, Chelish halflings, Isgeri goblins, Oprak hobgoblins, Brastlewark gnomes, and Katapeshi ysoki.

After the deliberate quality pruning, the library contains **144,942 possible base naming combinations** representing approximately **141,346 distinct base names** before optional epithets.

## 0.6.0 – Regional & Cultural Expansion II

Version 0.6.0 deepens the Inner Sea layer with six additional human cultural styles and five explicit ancestry-specific regional variants. The emphasis is on recognizable regional texture rather than simply increasing pool size.

### New human cultures

- Isgeri
- Molthuni
- Thuvian
- Katapeshi
- Nexian
- Gebbite

These cultures participate in automatic human cultural resolution. Isgeri and Katapeshi also expose nonhuman regional variants, but those remain explicit-only for the nonhuman ancestry.

### New ancestry-specific regional variants

- **Chelish halflings**, using compact proper names and localized household-, road-, and hearth-themed family names
- **Isgeri goblins**, using short goblin names and localized scrap-, smoke-, road-, and settlement-themed speaking names
- **Oprak hobgoblins**, using disciplined proper names and compositional duty-, formation-, oath-, and fortification-themed family names
- **Brastlewark gnomes**, using energetic proper names and localized clockwork-, glass-, lens-, spring-, and gadget-themed family names
- **Katapeshi ysoki**, using a recurring-root compositional given-name stock influenced by a cosmopolitan trade environment while preserving the ysoki preference for reusable family name pools rather than mandatory surnames

Chelish culture now explicitly supports halflings, while Isgeri and Katapeshi cultures support goblins and ysoki respectively. In all three cases `automaticAncestryIds` remains human-only, so installing the add-on never replaces the universal ancestry pack for those nonhuman ancestries. Oprak and Brastlewark are explicit-only cultures.

The release adds **17,552 base naming combinations**, bringing the complete library to **148,650 possible base naming combinations** and approximately **144,064 distinct base names** before optional epithets are considered.

## 0.5.1 – Quality & Consistency Fix

Version 0.5.1 is a focused quality pass over the existing library rather than a content expansion. It aligns regional culture behavior with NPC Forge 1.1.1, improves localization consistency, removes awkward compositional collisions, and strengthens cultural differentiation.

### Cultural resolution

Human cultures remain eligible for automatic generation. Regional ancestry variants such as **Kyonin elves**, **Five Kings dwarves**, and **Belkzen orcs** are now explicitly selectable but no longer replace universal ancestry naming by merely being installed. Likewise, Varisian, Taldan, and Chelish migrant-tengu packs remain available for explicit selection or host-module requests, while automatically generated tengu continue to use their universal tengu naming pool unless a culture is supplied.

This behavior requires NPC Forge 1.1.1 and its `automaticAncestryIds` provider contract.

### Naming quality

- Descriptive regional family names in the Shoanti, Kellid, Sarkorian, Nidalese, and Kyonin pools now use semantic entries so speaking names can render appropriately in German and English.
- Component combinations that could produce doubled words such as `Forgeforge`, `Hammerhammer`, `Scalescale`, `Sparkspark`, or `Scarscar` have been removed while keeping the overall pool size intact.
- Rahadoumi, Brevic, Ustalavic, and Nidalese given-name pools were adjusted to reduce excessive cross-culture overlap, especially in neutral-name pools.
- The full library still exposes **131,098 possible base naming combinations**, representing approximately **127,393 distinct base names** before optional epithets are considered.

New quality tests now check automatic-culture intent, compound-word collisions, semantic speaking-name localization, cross-culture duplicate density, and the effective distinct-name count.

## 0.5.0 – Regional & Cultural Expansion I

Version 0.5.0 moves beyond universal ancestry pools and expands regional identity across the Inner Sea. It adds eight further human cultural styles:

- Shoanti
- Kellid
- Mwangi
- Vudrani
- Sarkorian
- Brevic
- Rahadoumi
- Nidalese

It also introduces the first ancestry-specific regional cultures:

- Kyonin elves
- Five Kings dwarves
- Belkzen orcs

and three migrant-tengu variants influenced by Varisian, Taldan, and Chelish naming environments. These tengu packs retain tengu phonetic structure while borrowing regional cadence and localized epithets rather than simply assigning human names to tengu.

The release contributes **26,112 additional base regional naming combinations**, bringing the library to **131,098 possible base naming combinations** before optional epithets are considered.

### Regional selection

The new packs use NPC Forge's cultural-name layer directly. Selecting a culture such as **Kyonin**, **Five Kings Mountains**, or **Belkzen** narrows generation to a matching ancestry-specific regional pack. Varisian, Taldan, and Chelish cultures now also appear for tengu because those cultures have dedicated migrant variants.

Universal ancestry packs from versions 0.2.0–0.4.0 remain available as fallbacks. A dwarf without a selected Five Kings culture therefore still receives a normal dwarf name, and an unavailable regional pack never causes NPC Forge to cross ancestry boundaries.

### Naming styles

- **Five Kings dwarves** use dense forge-, stone-, ore-, and mountain-themed compositional family names with semantic German/English localization.
- **Belkzen orcs** use clan-like compositional family names built from martial, scar, bone, beast, and battlefield imagery.
- **Kyonin elves** use a more formal regional proper-name pool distinct from the universal elf pack.
- **Migrant tengu** use region-influenced compositional given names without mandatory family names, preserving a recognizably tengu structure while reflecting surrounding cultures.

## 0.4.0 – Ancestry Names III

Version 0.4.0 completes expanded-name coverage for all ancestries currently supported by NPC Forge by adding:

- Tengu
- Tripkee
- Ratfolk / Ysoki

These packs follow the naming guidance in Pathfinder Player Core 2 while using original generator content rather than reproducing published example-name lists. They remain culture-neutral universal ancestry packs, so more specific regional variants can still be layered on top later.

The release adds **4,882 additional base given-name combinations**, bringing Names of the Inner Sea to approximately **104,986 base names or full-name combinations** before optional epithets are considered.

### New naming styles

- **Tengu** use a dense, traditional-style compositional given-name generator with repeated hard consonants and compact syllable structures. Tengu names do not require family names. This complements the setting distinction between more traditional tengu names and migrant tengu who may adopt elements from surrounding cultures.
- **Tripkees** use a fully compositional generator emphasizing resonant vowels and chirping consonant clusters. The generated names intentionally remain less immediately familiar to non-tripkees, while optional localized epithets can serve as easier travel names.
- **Ysoki** use a deliberately smaller recurring stock of roots with minor suffix variations. This models the ysoki custom of reusing a family collection of names across generations rather than treating every individual as if they had a unique two-part surname system.

Each ancestry also includes a small pool of optional semantically localized epithets.

## 0.3.0 – Ancestry Names II

Version 0.3.0 adds six further ancestry-focused name packs:

- Leshy
- Catfolk / Amurrun
- Hobgoblin
- Lizardfolk / Iruxi
- Kholo
- Kobold

As with the first ancestry expansion, these are universal ancestry packs rather than invented regional cultures. They can therefore serve as expanded default pools anywhere in the Inner Sea region and remain valid fallbacks when no more specific cultural pack exists.

The new packs add roughly **43,344 additional base names or full-name combinations**. Together with versions 0.1.0 and 0.2.0, Names of the Inner Sea now exposes approximately **100,000 base naming combinations** before optional epithets are considered.

### New naming styles

The second ancestry block makes heavier use of NPC Forge's compositional naming support:

- **Leshies** use fully compositional, semantically localized given names built from natural elements, producing names such as `Mossbud` / `Moosknospe` or `Sunbloom` / `Sonnenblüte`. They do not require a family name.
- **Catfolk / Amurrun** use flowing proper given names and localized descriptive family names such as `Moonwhisker` / `Mondschnurrhaar`.
- **Hobgoblins** use disciplined, martial proper names and formation- or duty-themed family names such as `Ironwatch` / `Eisenwache`.
- **Iruxi** use sibilant proper names and environment- or scale-themed family names such as `Reedtail` / `Schilfschweif`.
- **Kholo** use strong proper names and pack-, trail-, and hunting-themed family names such as `Dusttrack` / `Staubspur`.
- **Kobolds** use compact draconic-sounding proper names and treasure-, tunnel-, and dragon-themed family names such as `Emberhoard` / `Gluthort`.

Each ancestry also includes a small pool of optional localized epithets.

## 0.2.0 – Ancestry Names I

The first ancestry expansion adds universal name packs for:

- Dwarf
- Elf
- Halfling
- Gnome
- Goblin
- Orc

These packs contribute roughly **38,160 base given-name/family-name combinations** and use ancestry-specific structures including localized dwarf, halfling, goblin, and orc speaking names.

## Human cultures

The human culture packs introduced in 0.1.0 remain included:

- Taldan
- Chelish
- Varisian
- Ulfen
- Osiriani
- Keleshite
- Ustalavic
- Andoren

Each culture provides gender-aware given names, family names, and optional epithets. Ulfen family names use NPC Forge's compositional naming support, producing localized speaking names such as `Ironhand` / `Eisenhand` from semantic components.

## How it works

The module contains no NPC-generation engine of its own. When NPC Forge becomes ready, the add-on registers its cultures and name packs through the public content API:

```js
api.content.registerNameCulture(...);
api.content.registerNamePack(...);
```

Human cultures participate in NPC Forge's automatic cultural resolution. Regional nonhuman cultures remain explicitly selectable, while universal ancestry packs stay the automatic default unless a culture is supplied by the user or a host module. All matching cultures and packs remain available through the normal selectors.

If an external module such as Crowd Forge or City Forge supplies a fixed culture or pack ID, NPC Forge can use the corresponding content directly.

## Design goals

- Large name variety without duplicating NPC Forge logic
- Ancestry-appropriate naming structures rather than one universal naming formula
- Stable seeded generation
- German and English localization
- Proper names remain proper names rather than being translated
- Speaking names, compositional names, and epithets can use semantic localization
- Culture and ancestry packs remain modular and externally addressable
- Existing NPC Forge core names remain available as fallback content

The names in this add-on are original, setting-inspired generator content. The module is not intended to reproduce lists of named characters from published Pathfinder material.

## Planned expansion

With all current NPC Forge core ancestries covered and two regional expansion waves in place, future releases can deepen selected cultures, add city- or nation-specific variants where they create a genuinely different naming style, and continue quality, weighting, and duplication review across the complete library.

## Requirements

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2 or newer
- PF2E NPC Forge 1.1.2 or newer

## License

MIT. See `LICENSE`.
