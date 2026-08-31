# Changelog

## 1.0.0 – Final Release

- Promoted the reviewed 1.0.0-rc.1 content set to the stable 1.0.0 release with no content or schema changes.
- Confirmed the complete library at 53 naming cultures, 85 name packs, 190,290 theoretical base combinations, 185,482 distinct English base names, 185,536 distinct German rendered base names, and 1,052 matched localization keys before optional epithets.
- Retained compatibility with PF2E NPC Forge 1.1.2+ and confirmed release testing against NPC Forge 1.1.3.
- Finalized release metadata and documentation for stable distribution.

## 1.0.0-rc.1 – Release Candidate & Final Library Review

- Froze the planned 1.0 cultural content scope; no new cultures or name packs were added over 0.9.0.
- Completed a whole-library audit covering all 53 cultures, 85 name packs, all 16 core ancestries, 46 automatic human cultures, and 24 explicit nonhuman culture/ancestry routes.
- Added release-candidate contract tests for unique IDs, valid ancestry references, culture-to-pack coverage, automatic ancestry subset rules, locale support, positive weights, and exact library-scale metrics.
- Expanded real NPC Forge integration coverage to every declared culture/ancestry route and added deterministic repeated-seed checks.
- Confirmed universal nonhuman fallback behavior and all explicit regional routes against the real NPC Forge engine.
- Confirmed compatibility with NPC Forge 1.1.2 and release-tested the same suite against NPC Forge 1.1.3.
- Locked the reviewed library metrics at 190,290 theoretical base combinations, 185,482 distinct English base names, 185,536 distinct German rendered base names, and 1,052 matched localization keys before optional epithets.
- Updated release documentation and metadata for 1.0.0-rc.1.

## 0.9.0 – Final Cultural Expansion

- Added eight final human cultural traditions: Alkenstari, Jalmerayi, Shackles, Hermean, Lirgeni Tradition, Yamasan Tradition, Mzali, and Varki.
- Added explicit regional ancestry packs for Shackles tengu, Osiriani kholo, Nexian kholo, and Ustalavic ysoki.
- Extended Osiriani and Nexian cultures to kholo and Ustalavic culture to ysoki while keeping automatic resolution human-only.
- Made Shackles culture available to tengu while preserving human-only automatic resolution.
- Modeled Lirgen and Yamasa as surviving naming traditions rather than present-day nations.
- Added a mononym-style Varki component generator and seafaring Shackles tengu phonotactics without mandatory family names.
- Added semantically localized Osiriani and Nexian kholo family names plus localized epithets for all new content.
- Added 11,800 base naming combinations, bringing the full library to 190,290 theoretical base combinations and 185,482 distinct base names before optional epithets.
- Expanded the real NPC Forge 1.1.2 integration suite with all four new explicit regional variants.
- Added 0.9.0 namespace, culture-reference, density, localization, provider-contract, and ancestry-resolution regression tests.

## 0.8.1 – Regional Localization & Phonetics Pass

- Rebuilt the Qadiran tengu phonotactic generator around longer codas, retaining 560 unique generated given names while removing accidental lexical outputs.
- Added regression coverage for Qadiran tengu lexical collisions, minimum output length, uniqueness, and regional separation from the universal tengu pack.
- Corrected German `Lastwall` display text to **Finismurer Tradition** and the corresponding human pack label to **Menschennamen der Finismurer Tradition**; English now uses **Lastwall Tradition**.
- Corrected `Mammoth Lands` display text to **Realm of the Mammoth Lords** / **Reich der Mammutherren** and updated the human pack labels.
- Corrected German `New Thassilonian` to **Neu-Thassilonisch** and updated the human pack label.
- Kept all internal culture and pack IDs stable for saved-data and host-module compatibility.
- The complete library now exposes 178,490 theoretical base combinations and 173,946 distinct base names before optional epithets.

## 0.8.0 – Regional & Cultural Expansion IV

- Added eight human cultural name packs: Nirmathi, Qadiran, Ravouneli, Vidric, New Thassilonian, Lastwall, Mediogaltan, and Mammoth Lands.
- Added explicit regional ancestry packs for Kyonin leshies, Mwangi iruxi, Katapeshi kholo, and Qadiran tengu.
- Extended Kyonin culture to leshies, Mwangi culture to iruxi, and Katapeshi culture to kholo without changing their automatic ancestry behavior.
- Made Qadiran culture available to tengu while keeping automatic Qadiran resolution human-only.
- Added semantically localized Nirmathi, Lastwall, and Mammoth Lands speaking family names plus localized regional nonhuman family names and epithets.
- Preserved universal nonhuman ancestry packs as the automatic fallback for leshies, iruxi, kholo, and tengu.
- Added 12,908 possible base combinations, bringing the full library to 178,570 theoretical base combinations and approximately 173,930 distinct base names before optional epithets.
- Expanded real NPC Forge integration coverage to the four new explicit ancestry variants and to automatic fallback protection for leshies, iruxi, and kholo.
- Added 0.8.0 content, localization, namespace, culture-reference, density, and public-API regression tests.

## 0.7.1 – Phonetics, Localization & Release Quality Pass

- Reworked the Absalomi tengu phonotactic generator to reduce exact overlap with the universal tengu pack from roughly 27% to 0%.
- Removed accidental Absalomi tengu lexical outputs such as `Karen` and `Nein` by construction and added regression coverage.
- Split Absalomi ysoki vowel-final and z-final roots into separate ending patterns, removing awkward outputs such as `Abii`, `Beriir`, `Cazzi`, `Fazzi`, and `Kezzi` while retaining 176 unique generated given names.
- Added phonotactic seam-quality and tengu regional-separation tests.
- Corrected German `Mordant Spire` localization to `Mordant-Spitze`.
- Changed German `Numerian` localization from `Numerisch` to the clearer `Numerianisch`.
- Improved German Dongun Hold compound morphology with `Funken-`, `Nieten-`, `-werker`, `Tiefen-`, and `-kind` components.
- Added `npm run check:release`, which requires a real PF2E NPC Forge 1.1.2+ source checkout and fails if the integration dependency is unavailable instead of silently skipping the real-engine suite.
- Updated real-engine integration seeds from the older `names-061-*` labels to `names-071-*`.
- Corrected README wording from two to three completed regional expansion waves.
- Retained 165,662 theoretical base combinations while increasing effective distinct base names to approximately 161,351.

## 0.7.0 – Regional & Cultural Expansion III

- Added eight human cultural name packs: Absalomi, Druman, Galtan, Irriseni, Mendevian, Numerian, Razmiri, and River Kingdoms / Riverfolk.
- Added explicit regional ancestry packs for Mordant Spire elves and Dongun Hold dwarves.
- Added Absalomi regional variants for halflings, tengu, and ysoki.
- Made Absalomi culture available to humans, halflings, tengu, and ysoki while keeping automatic cultural resolution human-only through `automaticAncestryIds`.
- Kept Mordant Spire and Dongun Hold explicit-only so universal elf and dwarf packs remain the automatic fallback.
- Added semantically localized Absalomi halfling speaking family names and Dongun Hold compositional family-name components.
- Preserved the 30% human cross-culture overlap ceiling; the current highest comparable given-name overlap remains below 23%.
- Expanded the real NPC Forge integration suite with the new explicit regional variants.
- Added 20,720 possible base naming combinations, bringing the library to 165,662 possible base combinations and approximately 161,137 distinct base names before optional epithets.

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
