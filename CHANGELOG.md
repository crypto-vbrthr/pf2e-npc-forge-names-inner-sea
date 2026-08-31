# Changelog

## 0.6.1 – Generator Quality Pass

- Updated the minimum dependency to PF2E NPC Forge 1.1.2 and require the `deduplicated-name-pools` capability at runtime.
- Rebuilt the universal tengu phonetic generator to provide 1,152 unique outputs with no duplicate generation paths and fewer repetitive syllable constructions.
- Reworked Oprak hobgoblin family-name components around oath, duty, law, command, cohort, legion, phalanx, bastion, and citadel motifs.
- Reduced exact Oprak/universal hobgoblin family-name overlap from roughly 40% to 0%.
- Reduced several remaining high-overlap human given-name pools, including Brevic, Sarkorian, Nidalese, and Keleshite content.
- Tightened the automated human cross-culture overlap ceiling from 45% to 30%.
- Fixed a German kobold composite collision by distinguishing `fang` (`fangzahn`) from `tooth` (`zahn`).
- Added a rendered composite-output uniqueness test across both English and German catalogs.
- Added a dedicated Oprak/universal hobgoblin separation test.
- Added an optional real-engine integration suite for NPC Forge 1.1.2+ via `PF2E_NPC_FORGE_SOURCE`, exercising the actual Content Registry and NPC Engine.
- The deliberately pruned library now exposes 144,942 possible base naming combinations and approximately 141,346 distinct base names before optional epithets.

## 0.6.0 – Regional & Cultural Expansion II

- Added six further human cultural name packs: Isgeri, Molthuni, Thuvian, Katapeshi, Nexian, and Gebbite.
- Added explicit ancestry-specific regional packs for Chelish halflings, Isgeri goblins, Oprak hobgoblins, Brastlewark gnomes, and Katapeshi ysoki.
- Extended Chelish culture to support halflings while keeping automatic cultural resolution human-only.
- Added mixed human/nonhuman Isgeri and Katapeshi cultures with nonhuman variants remaining explicit-only through `automaticAncestryIds`.
- Added explicit-only Oprak and Brastlewark cultures.
- Added semantically localized speaking family names and epithets for all descriptive regional content.
- Added a compositional Oprak hobgoblin family-name generator and a recurring-root Katapeshi ysoki given-name generator.
- Added 17,552 base naming combinations, bringing the library to 148,650 possible base combinations and approximately 144,064 distinct base names before optional epithets.
- Added tests for mixed-ancestry culture behavior, explicit-only regional resolution, content density, namespace ownership, localization parity, and public API registration.

## 0.5.1 – Quality & Consistency Fix

- Updated the add-on requirement to PF2E NPC Forge 1.1.1.
- Added `automaticAncestryIds` to all culture definitions.
- Kept human cultures eligible for automatic generation while making Kyonin, Five Kings, and Belkzen ancestry cultures explicit-only.
- Kept Varisian, Taldan, and Chelish migrant-tengu variants explicitly selectable without replacing the universal tengu pack during automatic generation.
- Converted descriptive Shoanti, Kellid, Sarkorian, Nidalese, and Kyonin family names to semantic localized entries.
- Removed compositional collisions that could generate doubled names such as `Forgeforge`, `Hammerhammer`, `Scalescale`, `Sparkspark`, and `Scarscar`.
- Reduced excessive overlap between Rahadoumi and Osiriani pools and between Brevic, Varisian, Ustalavic, and Nidalese neutral-name pools.
- Retained 131,098 possible base naming combinations, with approximately 127,393 distinct base names before optional epithets.
- Added quality tests for automatic-culture intent, compound collisions, speaking-name localization, cross-culture duplicate density, and distinct-name counts.

## 0.5.0 – Regional & Cultural Expansion I

- Added eight further human cultural name packs: Shoanti, Kellid, Mwangi, Vudrani, Sarkorian, Brevic, Rahadoumi, and Nidalese.
- Added regional nonhuman cultures and name packs for Kyonin elves, Five Kings dwarves, and Belkzen orcs.
- Added Varisian-, Taldan-, and Chelish-influenced migrant tengu name packs.
- Extended the existing Varisian, Taldan, and Chelish culture definitions to allow tengu cultural variants without weakening ancestry fallback behavior.
- Added 26,112 additional base regional naming combinations, bringing the library to roughly 131,098 base names or full-name combinations before optional epithets.
- Added semantically localized regional epithets and compositional Five Kings dwarf and Belkzen orc family names.
- Kept all new content on the public NPC Forge 1.1.0 cultural-name API.
- Added validation for regional culture references, migrant tengu support, content density, namespace ownership, localization parity, and public API registration.

## 0.4.0 – Ancestry Names III

- Added ancestry-focused name packs for tengu, tripkees, and ratfolk / ysoki.
- Completed expanded-name coverage for all ancestries currently supported by NPC Forge 1.1.0.
- Added 4,882 new base given-name combinations, bringing the add-on to approximately 104,986 base names or full-name combinations overall.
- Added a dense compositional traditional-style tengu given-name generator without mandatory family names.
- Added a resonant-vowel and chirping-consonant compositional tripkee given-name generator.
- Added a recurring-root plus minor-variant ysoki generator to reflect generational family-name reuse.
- Added localized ancestry-specific epithets for all three new packs.
- Kept all three packs culture-neutral so they remain universal ancestry fallbacks.
- Expanded German and English localization.
- Added validation for full core-ancestry coverage, generator density, namespace ownership, localization parity, and public API registration.

## 0.3.0 – Ancestry Names II

- Added ancestry-focused name packs for leshies, catfolk / Amurrun, hobgoblins, lizardfolk / iruxi, kholo, and kobolds.
- Added roughly 43,344 new base names or full-name combinations, bringing the add-on to approximately 100,000 base combinations overall.
- Added a fully compositional localized given-name generator for leshies.
- Added compositional localized catfolk family names.
- Added martial compositional hobgoblin family names.
- Added environment- and scale-themed compositional iruxi family names.
- Added pack-, trail-, and hunting-themed compositional kholo family names.
- Added treasure-, tunnel-, and dragon-themed compositional kobold family names.
- Added ancestry-specific localized epithets for all six new packs.
- Kept all new ancestry packs culture-neutral so they remain universal fallback packs.
- Expanded German and English localization.
- Added validation for coverage, namespace ownership, pool density, generator density, localization parity, and public API registration.

## 0.2.0 – Ancestry Names I

- Added ancestry-focused name packs for dwarves, elves, halflings, gnomes, goblins, and orcs.
- Added roughly 38,160 new base given-name/family-name combinations.
- Added compositional localized dwarf family names.
- Added compositional localized halfling family names.
- Added compositional localized goblin speaking surnames.
- Added compositional localized orc clan-style family names.
- Added proper-name pools for elves and gnomes.
- Added ancestry-specific localized epithets.
- Kept ancestry packs culture-neutral so they remain valid universal fallback packs.
- Expanded German and English localization.
- Added validation for ancestry coverage, namespace ownership, pool density, component generators, localization parity, and public API registration.

## 0.1.0 – Human Cultures I

- Initial release of PF2E NPC Forge: Names of the Inner Sea.
- Added eight human name cultures: Taldan, Chelish, Varisian, Ulfen, Osiriani, Keleshite, Ustalavic, and Andoren.
- Added culture-specific, gender-aware given-name pools.
- Added culture-specific family-name pools.
- Added optional localized epithets.
- Added compositional Ulfen speaking family names using semantic localized components.
- Added English and German localization.
- Added public NPC Forge 1.1.0 cultural-name API registration.
- Added deterministic-content contract and localization tests.
