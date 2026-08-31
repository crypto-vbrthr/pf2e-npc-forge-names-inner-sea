import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ANCESTRY_NAME_PACKS_II, registerAncestryNamesII } from "../scripts/content/ancestry-names-ii.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const EXPECTED_ANCESTRIES = new Set([
  "core.leshy",
  "core.catfolk",
  "core.hobgoblin",
  "core.lizardfolk",
  "core.kholo",
  "core.kobold"
]);

function semanticEntries(pack) {
  const entries = [...(pack.epithets ?? [])];
  for (const generator of Object.values(pack.generators ?? {})) {
    for (const values of Object.values(generator.components ?? {})) entries.push(...values);
  }
  return entries.filter((entry) => entry && typeof entry === "object");
}

function generatorCombinationCount(generator) {
  if (generator?.type !== "components") return 0;
  return generator.patterns.reduce((sum, pattern) => {
    const count = pattern.reduce((product, key) => product * (generator.components[key]?.length ?? 0), 1);
    return sum + count;
  }, 0);
}

function baseNameCombinationCount(pack) {
  const givenGenerator = pack.generators?.given;
  const given = generatorCombinationCount(givenGenerator) || Object.values(pack.given ?? {}).flat().length;
  const familyGenerator = pack.generators?.family;
  const family = generatorCombinationCount(familyGenerator) || pack.family?.length || 1;
  return given * family;
}

test("0.3.0 adds six more ancestry-focused name packs", () => {
  assert.equal(ANCESTRY_NAME_PACKS_II.length, 6);
  const ancestries = new Set(ANCESTRY_NAME_PACKS_II.flatMap((pack) => pack.ancestryIds));
  assert.deepEqual(ancestries, EXPECTED_ANCESTRIES);
  assert.ok(ANCESTRY_NAME_PACKS_II.every((pack) => pack.ancestryIds.length === 1));
});

test("0.3.0 ancestry packs remain universal fallbacks rather than artificial cultures", () => {
  for (const pack of ANCESTRY_NAME_PACKS_II) {
    assert.ok(!Array.isArray(pack.cultureIds) || pack.cultureIds.length === 0, pack.id);
  }
});

test("all 0.3.0 content remains namespaced", () => {
  for (const pack of ANCESTRY_NAME_PACKS_II) {
    assert.ok(pack.id.startsWith(`${MODULE_ID}.`), pack.id);
    for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
  }
});

test("non-leshy given-name pools are substantial and duplicate-free", () => {
  for (const pack of ANCESTRY_NAME_PACKS_II.filter((entry) => entry.ancestryIds[0] !== "core.leshy")) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    for (const [gender, pool] of Object.entries(pack.given)) {
      assert.equal(new Set(pool).size, pool.length, `${pack.id} duplicate ${gender} name`);
    }
  }
});

test("leshy names use a localized compositional given-name generator", () => {
  const leshy = ANCESTRY_NAME_PACKS_II.find((pack) => pack.ancestryIds.includes("core.leshy"));
  assert.equal(leshy.generators.given.type, "components");
  assert.equal(generatorCombinationCount(leshy.generators.given), 144);
  assert.ok(!leshy.family);
  assert.ok(!leshy.generators.family);
});

test("five 0.3.0 packs use healthy compositional family-name generators", () => {
  const generated = ANCESTRY_NAME_PACKS_II.filter((pack) => pack.generators?.family);
  assert.equal(generated.length, 5);
  for (const pack of generated) {
    const generator = pack.generators.family;
    assert.equal(generator.type, "components");
    assert.equal(generatorCombinationCount(generator), 144, pack.id);
    for (const values of Object.values(generator.components)) {
      assert.ok(values.length >= 12, pack.id);
      assert.equal(new Set(values.map((entry) => entry.id)).size, values.length, `${pack.id} duplicate component ID`);
    }
  }
});

test("0.3.0 adds at least 43,000 base-name combinations", () => {
  const combinations = ANCESTRY_NAME_PACKS_II.reduce((sum, pack) => sum + baseNameCombinationCount(pack), 0);
  assert.ok(combinations >= 43000, `only ${combinations} combinations`);
});

test("all 0.3.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const pack of ANCESTRY_NAME_PACKS_II) {
    keys.push(pack.labelKey);
    for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  }
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.3.0 ancestry registration uses only registerNamePack", () => {
  const packs = [];
  const api = {
    content: {
      registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
    }
  };
  registerAncestryNamesII(api);
  assert.equal(packs.length, 6);
  assert.ok(packs.every((entry) => entry.moduleId === MODULE_ID));
});
