import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ANCESTRY_NAME_PACKS_III, registerAncestryNamesIII } from "../scripts/content/ancestry-names-iii.js";
import { ANCESTRY_NAME_PACKS_I } from "../scripts/content/ancestry-names-i.js";
import { ANCESTRY_NAME_PACKS_II } from "../scripts/content/ancestry-names-ii.js";
import { HUMAN_NAME_PACKS } from "../scripts/content/human-cultures.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const EXPECTED_ANCESTRIES = new Set(["core.tengu", "core.tripkee", "core.ratfolk"]);

function semanticEntries(pack) {
  return [...(pack.epithets ?? [])].filter((entry) => entry && typeof entry === "object");
}

function generatorCombinationCount(generator) {
  if (generator?.type !== "components") return 0;
  return generator.patterns.reduce((sum, pattern) => {
    const count = pattern.reduce((product, key) => product * (generator.components[key]?.length ?? 0), 1);
    return sum + count;
  }, 0);
}

test("0.4.0 completes the NPC Forge core ancestry set with three name packs", () => {
  assert.equal(ANCESTRY_NAME_PACKS_III.length, 3);
  assert.deepEqual(new Set(ANCESTRY_NAME_PACKS_III.flatMap((pack) => pack.ancestryIds)), EXPECTED_ANCESTRIES);
  assert.ok(ANCESTRY_NAME_PACKS_III.every((pack) => pack.ancestryIds.length === 1));
});

test("0.4.0 ancestry packs remain culture-neutral universal fallbacks", () => {
  for (const pack of ANCESTRY_NAME_PACKS_III) {
    assert.ok(!Array.isArray(pack.cultureIds) || pack.cultureIds.length === 0, pack.id);
  }
});

test("all 0.4.0 pack and semantic IDs are namespaced", () => {
  for (const pack of ANCESTRY_NAME_PACKS_III) {
    assert.ok(pack.id.startsWith(`${MODULE_ID}.`), pack.id);
    for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
  }
});

test("Tengu use a dense traditional-style compositional given-name generator", () => {
  const pack = ANCESTRY_NAME_PACKS_III.find((entry) => entry.ancestryIds.includes("core.tengu"));
  assert.equal(pack.generators.given.type, "components");
  assert.ok(generatorCombinationCount(pack.generators.given) >= 2500);
  assert.ok(!pack.family && !pack.generators.family);
});

test("Tripkee given names use resonant compositional phonetics without mandatory family names", () => {
  const pack = ANCESTRY_NAME_PACKS_III.find((entry) => entry.ancestryIds.includes("core.tripkee"));
  assert.equal(pack.generators.given.type, "components");
  assert.ok(generatorCombinationCount(pack.generators.given) >= 1900);
  assert.ok(!pack.family && !pack.generators.family);
});

test("Ysoki names model a recurring family-name stock through roots and small variants", () => {
  const pack = ANCESTRY_NAME_PACKS_III.find((entry) => entry.ancestryIds.includes("core.ratfolk"));
  const generator = pack.generators.given;
  assert.equal(generator.type, "components");
  assert.deepEqual(generator.patterns, [["root"], ["root", "variant"]]);
  assert.ok(generator.components.root.length >= 24);
  assert.ok(generator.components.variant.length >= 8);
  assert.ok(generatorCombinationCount(generator) >= 300);
  assert.ok(!pack.family && !pack.generators.family);
});

test("0.4.0 contributes at least 4,700 additional base given names", () => {
  const combinations = ANCESTRY_NAME_PACKS_III.reduce((sum, pack) => sum + generatorCombinationCount(pack.generators.given), 0);
  assert.ok(combinations >= 4700, `only ${combinations} combinations`);
});

test("all 0.4.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const pack of ANCESTRY_NAME_PACKS_III) {
    keys.push(pack.labelKey);
    for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  }
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.4.0 ancestry registration uses only the public name-pack API", () => {
  const packs = [];
  const api = { content: { registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); } } };
  registerAncestryNamesIII(api);
  assert.equal(packs.length, 3);
  assert.ok(packs.every((entry) => entry.moduleId === MODULE_ID));
});


test("0.4.0 gives the add-on coverage for all sixteen NPC Forge core ancestries", () => {
  const covered = new Set([
    ...HUMAN_NAME_PACKS,
    ...ANCESTRY_NAME_PACKS_I,
    ...ANCESTRY_NAME_PACKS_II,
    ...ANCESTRY_NAME_PACKS_III
  ].flatMap((pack) => pack.ancestryIds));
  const expected = new Set([
    "core.human", "core.elf", "core.gnome", "core.goblin", "core.halfling", "core.leshy", "core.orc", "core.dwarf",
    "core.catfolk", "core.hobgoblin", "core.lizardfolk", "core.kholo", "core.kobold", "core.tengu", "core.tripkee", "core.ratfolk"
  ]);
  assert.deepEqual(covered, expected);
});
