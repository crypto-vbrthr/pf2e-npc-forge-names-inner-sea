import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES } from "../scripts/content/human-cultures.js";
import { REGIONAL_CULTURES, REGIONAL_NAME_PACKS, registerRegionalCultures } from "../scripts/content/regional-cultures.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";

function generatorCombinationCount(generator) {
  if (generator?.type !== "components") return 0;
  return generator.patterns.reduce((sum, pattern) => sum + pattern.reduce((product, key) => product * (generator.components[key]?.length ?? 0), 1), 0);
}

function baseCombinationCount(pack) {
  const generatedGiven = generatorCombinationCount(pack.generators?.given);
  const listedGiven = pack.given ? Object.values(pack.given).flat().length : 0;
  const given = generatedGiven || listedGiven;
  const generatedFamily = generatorCombinationCount(pack.generators?.family);
  const listedFamily = pack.family?.length ?? 0;
  const family = generatedFamily || listedFamily || 1;
  return given * family;
}

function semanticEntries(pack) {
  const entries = [...(pack.epithets ?? []), ...(pack.family ?? []).filter((entry) => entry && typeof entry === "object")];
  for (const generator of Object.values(pack.generators ?? {})) {
    for (const values of Object.values(generator.components ?? {})) entries.push(...values);
  }
  return entries.filter((entry) => entry && typeof entry === "object");
}

test("0.5.0 adds eleven regional cultures and fourteen regional name packs", () => {
  assert.equal(REGIONAL_CULTURES.length, 11);
  assert.equal(REGIONAL_NAME_PACKS.length, 14);
  assert.equal(REGIONAL_NAME_PACKS.filter((p) => p.ancestryIds.includes("core.human")).length, 8);
  assert.equal(REGIONAL_NAME_PACKS.filter((p) => p.ancestryIds.includes("core.tengu")).length, 3);
});

test("all 0.5.0 definitions remain namespaced", () => {
  for (const definition of [...REGIONAL_CULTURES, ...REGIONAL_NAME_PACKS]) assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
  for (const pack of REGIONAL_NAME_PACKS) for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
});

test("regional packs reference cultures registered by this add-on", () => {
  const ids = new Set([...HUMAN_CULTURES, ...REGIONAL_CULTURES].map((c) => c.id));
  for (const pack of REGIONAL_NAME_PACKS) {
    assert.ok(pack.cultureIds?.length > 0, pack.id);
    for (const cultureId of pack.cultureIds) assert.ok(ids.has(cultureId), `${pack.id} -> ${cultureId}`);
  }
});

test("Varisian, Taldan, and Chelish cultures now support migrant tengu variants", () => {
  for (const id of ["varisian", "taldan", "chelish"]) {
    const culture = HUMAN_CULTURES.find((entry) => entry.id === `${MODULE_ID}.${id}`);
    assert.ok(culture?.ancestryIds.includes("core.tengu"), id);
  }
});

test("new human cultural packs remain gender-aware and substantial", () => {
  for (const pack of REGIONAL_NAME_PACKS.filter((p) => p.ancestryIds.includes("core.human"))) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    assert.ok(pack.family.length >= 20, `${pack.id} family`);
  }
});

test("Kyonin elves, Five Kings dwarves, and Belkzen orcs have distinct regional packs", () => {
  const expectations = new Map([["core.elf", "kyonin"], ["core.dwarf", "five-kings"], ["core.orc", "belkzen"]]);
  for (const [ancestryId, culturePart] of expectations) {
    const pack = REGIONAL_NAME_PACKS.find((entry) => entry.ancestryIds.includes(ancestryId));
    assert.ok(pack, ancestryId);
    assert.ok(pack.cultureIds.some((id) => id.endsWith(`.${culturePart}`)), pack.id);
  }
});

test("migrant tengu use culture-specific compositional names without mandatory family names", () => {
  const packs = REGIONAL_NAME_PACKS.filter((entry) => entry.ancestryIds.includes("core.tengu"));
  assert.equal(packs.length, 3);
  for (const pack of packs) {
    assert.equal(pack.generators?.given?.type, "components", pack.id);
    assert.ok(generatorCombinationCount(pack.generators.given) >= 450, pack.id);
    assert.ok(!pack.family && !pack.generators?.family, pack.id);
  }
});

test("0.5.0 adds at least 25,000 base regional naming combinations", () => {
  const combinations = REGIONAL_NAME_PACKS.reduce((sum, pack) => sum + baseCombinationCount(pack), 0);
  assert.ok(combinations >= 25000, `only ${combinations} combinations`);
});

test("all 0.5.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const definition of [...REGIONAL_CULTURES, ...REGIONAL_NAME_PACKS]) keys.push(definition.labelKey);
  for (const pack of REGIONAL_NAME_PACKS) for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.5.0 registration stays on the public culture/name-pack API", () => {
  const cultures = [];
  const packs = [];
  const api = { content: {
    registerNameCulture(moduleId, definition) { cultures.push({ moduleId, definition }); },
    registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
  } };
  registerRegionalCultures(api);
  assert.equal(cultures.length, REGIONAL_CULTURES.length);
  assert.equal(packs.length, REGIONAL_NAME_PACKS.length);
  assert.ok([...cultures, ...packs].every((entry) => entry.moduleId === MODULE_ID));
});
