# PF2E NPC Forge: Names of the Inner Sea

**Names of the Inner Sea** is a cultural name expansion for **PF2E NPC Forge**. It adds large, setting-inspired name pools for characters from the Inner Sea region while leaving all generation logic in NPC Forge itself.

The add-on requires **PF2E NPC Forge 1.1.0 or newer**.

## 0.1.0 – Human Cultures I

The first release establishes the add-on framework and adds eight human naming cultures:

- Taldan
- Chelish
- Varisian
- Ulfen
- Osiriani
- Keleshite
- Ustalavic
- Andoren

Each culture provides gender-aware given names, family names, and a small pool of optional epithets. Ulfen family names additionally use NPC Forge's compositional naming support, producing localized speaking names such as `Ironhand` / `Eisenhand` from semantic components.

Across the eight packs, 0.1.0 provides roughly **18,600 base given-name/family-name combinations** before optional epithets are considered.

## How it works

The module contains no NPC-generation engine of its own. When NPC Forge becomes ready, the add-on registers its cultures and name packs through the public content API:

```js
api.content.registerNameCulture(...);
api.content.registerNamePack(...);
```

The new cultures then appear automatically in NPC Forge's **Name Culture** selector for human NPCs. Selecting **Automatic** lets NPC Forge resolve one of the installed cultures using deterministic weighted generation.

If an external module such as Crowd Forge or City Forge later supplies a fixed culture ID, NPC Forge can use the corresponding name pool directly.

## Design goals

- Large name variety without duplicating NPC Forge logic
- Stable seeded generation
- German and English localization
- Proper names remain proper names rather than being translated
- Speaking names and epithets can use semantic localization
- Culture packs remain modular and externally addressable
- Existing NPC Forge core names remain available as fallback content

The names in this add-on are original, setting-inspired generator content. The module is not intended to reproduce lists of named characters from published Pathfinder material.

## Planned expansion

Future releases can add further Inner Sea human cultures and expanded ancestry-focused packs for dwarves, elves, halflings, gnomes, goblins, orcs, kobolds, tengu, ysoki, and the other ancestries supported by NPC Forge.

## Requirements

- Foundry VTT 14
- Pathfinder Second Edition 8.1.2 or newer
- PF2E NPC Forge 1.1.0 or newer

## License

MIT. See `LICENSE`.
