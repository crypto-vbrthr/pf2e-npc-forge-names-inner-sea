# PF2E NPC Forge: Names of the Inner Sea

**Names of the Inner Sea** is a cultural name expansion for **PF2E NPC Forge**. It adds large, setting-inspired name pools for characters from the Inner Sea region while leaving all generation logic in NPC Forge itself.

The add-on requires **PF2E NPC Forge 1.1.0 or newer**.

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
- **Iruxi** use sibilant proper names and environment- or scale-themed family names such as `Reedscale` / `Schilfschuppe`.
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

Human cultures appear automatically in NPC Forge's **Name Culture** selector. Ancestry-focused packs participate in deterministic automatic resolution for their matching ancestry and remain available through the normal name-pack selection.

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

With all current NPC Forge core ancestries covered, future releases can focus on additional regional human cultures, migrant-tengu cultural variants, specialized nonhuman regional packs, and further quality and duplication review of the complete name library.

## Requirements

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2 or newer
- PF2E NPC Forge 1.1.0 or newer

## License

MIT. See `LICENSE`.
