# PF2E NPC Forge: Names of the Inner Sea

**Names of the Inner Sea** is a cultural name expansion for **PF2E NPC Forge**. It adds large, setting-inspired name pools for characters from the Inner Sea region while leaving all generation logic in NPC Forge itself.

The add-on requires **PF2E NPC Forge 1.1.1 or newer**.

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

With all current NPC Forge core ancestries covered and the first regional layer in place, future releases can deepen additional Inner Sea regions, add further ancestry-specific cultural variants, and perform quality, weighting, and duplication review across the complete library.

## Requirements

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2 or newer
- PF2E NPC Forge 1.1.1 or newer

## License

MIT. See `LICENSE`.
