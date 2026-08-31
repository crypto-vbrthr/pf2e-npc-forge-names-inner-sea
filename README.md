# PF2E NPC Forge: Names of the Inner Sea

**Names of the Inner Sea** is a cultural name expansion for **PF2E NPC Forge**. It adds large, setting-inspired name pools for characters from the Inner Sea region while leaving all generation logic in NPC Forge itself.

The add-on requires **PF2E NPC Forge 1.1.0 or newer**.

## 0.2.0 – Ancestry Names I

Version 0.2.0 expands the add-on beyond human regional cultures with six ancestry-focused name packs:

- Dwarf
- Elf
- Halfling
- Gnome
- Goblin
- Orc

These packs are registered as universal ancestry packs rather than artificial regional cultures. They therefore work as expanded name pools for the corresponding ancestry anywhere in the Inner Sea region and remain available as fallbacks if no more specific cultural pack exists.

The six new packs add roughly **38,160 base given-name/family-name combinations**. Together with the human cultures from 0.1.0, the add-on now exposes approximately **56,760 base combinations** before optional epithets are considered.

### Ancestry-specific naming styles

The packs intentionally do not force every ancestry into the same `given name + static surname` pattern:

- **Dwarves** use solid given names and compositional, localized craft- and stone-themed family names such as `Ironhammer` / `Eisenhammer`.
- **Elves** use flowing proper given and family names that remain untranslated.
- **Halflings** use approachable given names and compositional speaking family names such as `Greenleaf` / `Grünblatt`.
- **Gnomes** use playful proper names and whimsical family names.
- **Goblins** use short given names plus highly descriptive compositional surnames such as `Sootface` / `Rußgesicht`.
- **Orcs** use strong given names and compositional clan-style family names such as `Ironfist` / `Eisenfaust`.

Each ancestry also includes a small pool of optional, semantically localized epithets.

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

Human cultures appear automatically in NPC Forge's **Name Culture** selector. Ancestry-focused packs are exposed through the normal name-pack selection and participate in deterministic automatic resolution for their matching ancestry.

If an external module such as Crowd Forge or City Forge supplies a fixed culture or pack ID, NPC Forge can use the corresponding content directly.

## Design goals

- Large name variety without duplicating NPC Forge logic
- Ancestry-appropriate naming structures rather than one universal naming formula
- Stable seeded generation
- German and English localization
- Proper names remain proper names rather than being translated
- Speaking names and epithets can use semantic localization
- Culture and ancestry packs remain modular and externally addressable
- Existing NPC Forge core names remain available as fallback content

The names in this add-on are original, setting-inspired generator content. The module is not intended to reproduce lists of named characters from published Pathfinder material.

## Planned expansion

Future releases can add further Inner Sea human cultures and ancestry-focused packs for leshies, catfolk, hobgoblins, iruxi, kholo, kobolds, tengu, tripkees, ysoki, and other ancestries supported by NPC Forge.

## Requirements

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2 or newer
- PF2E NPC Forge 1.1.0 or newer

## License

MIT. See `LICENSE`.
