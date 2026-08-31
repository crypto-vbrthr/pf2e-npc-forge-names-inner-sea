import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES } from "../scripts/content/human-cultures.js";
import { REGIONAL_CULTURES } from "../scripts/content/regional-cultures.js";
import { REGIONAL_CULTURES_II, REGIONAL_NAME_PACKS_II, registerRegionalCulturesII } from "../scripts/content/regional-cultures-ii.js";

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

test("0.6.0 adds eight cultures and eleven regional name packs", () => {
  assert.equal(REGIONAL_CULTURES_II.length, 8);
  assert.equal(REGIONAL_NAME_PACKS_II.length, 11);
  assert.equal(REGIONAL_NAME_PACKS_II.filter((p) => p.ancestryIds.includes("core.human")).length, 6);
  assert.equal(REGIONAL_NAME_PACKS_II.filter((p) => !p.ancestryIds.includes("core.human")).length, 5);
});

test("all 0.6.0 definitions and semantic entries remain namespaced", () => {
  for (const definition of [...REGIONAL_CULTURES_II, ...REGIONAL_NAME_PACKS_II]) assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
  for (const pack of REGIONAL_NAME_PACKS_II) for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
});

test("0.6.0 packs reference registered cultures", () => {
  const ids = new Set([...HUMAN_CULTURES, ...REGIONAL_CULTURES, ...REGIONAL_CULTURES_II].map((culture) => culture.id));
  for (const pack of REGIONAL_NAME_PACKS_II) {
    assert.ok(pack.cultureIds?.length > 0, pack.id);
    for (const id of pack.cultureIds) assert.ok(ids.has(id), `${pack.id} -> ${id}`);
  }
});

test("mixed ancestry cultures stay human-automatic and nonhuman-explicit", () => {
  for (const id of ["isgeri", "katapeshi"]) {
    const culture = REGIONAL_CULTURES_II.find((entry) => entry.id === `${MODULE_ID}.${id}`);
    assert.ok(culture, id);
    assert.deepEqual(culture.automaticAncestryIds, ["core.human"]);
    assert.ok(culture.ancestryIds.length > 1);
  }
  for (const id of ["oprak", "brastlewark"]) {
    const culture = REGIONAL_CULTURES_II.find((entry) => entry.id === `${MODULE_ID}.${id}`);
    assert.deepEqual(culture.automaticAncestryIds, [], id);
  }
});

test("Chelish culture supports an explicit halfling regional variant without making it automatic", () => {
  const chelish = HUMAN_CULTURES.find((entry) => entry.id === `${MODULE_ID}.chelish`);
  assert.ok(chelish.ancestryIds.includes("core.halfling"));
  assert.deepEqual(chelish.automaticAncestryIds, ["core.human"]);
  const pack = REGIONAL_NAME_PACKS_II.find((entry) => entry.id === `${MODULE_ID}.halfling-chelish`);
  assert.ok(pack?.cultureIds.includes(`${MODULE_ID}.chelish`));
});

test("new human cultural packs are gender-aware and substantial", () => {
  for (const pack of REGIONAL_NAME_PACKS_II.filter((entry) => entry.ancestryIds.includes("core.human"))) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    assert.ok(pack.family.length >= 20, `${pack.id} family`);
  }
});

test("regional nonhuman packs preserve ancestry-specific naming structures", () => {
  const byId = new Map(REGIONAL_NAME_PACKS_II.map((pack) => [pack.id, pack]));
  assert.equal(byId.get(`${MODULE_ID}.halfling-chelish`)?.ancestryIds[0], "core.halfling");
  assert.equal(byId.get(`${MODULE_ID}.goblin-isgeri`)?.ancestryIds[0], "core.goblin");
  assert.equal(byId.get(`${MODULE_ID}.hobgoblin-oprak`)?.generators?.family?.type, "components");
  assert.equal(byId.get(`${MODULE_ID}.gnome-brastlewark`)?.ancestryIds[0], "core.gnome");
  assert.equal(byId.get(`${MODULE_ID}.ysoki-katapeshi`)?.generators?.given?.type, "components");
  assert.ok(!byId.get(`${MODULE_ID}.ysoki-katapeshi`)?.family);
});

test("0.6.0 adds at least 10,000 base naming combinations", () => {
  const combinations = REGIONAL_NAME_PACKS_II.reduce((sum, pack) => sum + baseCombinationCount(pack), 0);
  assert.ok(combinations >= 10000, `only ${combinations} combinations`);
});

test("all 0.6.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const definition of [...REGIONAL_CULTURES_II, ...REGIONAL_NAME_PACKS_II]) keys.push(definition.labelKey);
  for (const pack of REGIONAL_NAME_PACKS_II) for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.6.0 registration stays on the public culture/name-pack API", () => {
  const cultures = [];
  const packs = [];
  const api = { content: {
    registerNameCulture(moduleId, definition) { cultures.push({ moduleId, definition }); },
    registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
  } };
  registerRegionalCulturesII(api);
  assert.equal(cultures.length, REGIONAL_CULTURES_II.length);
  assert.equal(packs.length, REGIONAL_NAME_PACKS_II.length);
  assert.ok([...cultures, ...packs].every((entry) => entry.moduleId === MODULE_ID));
});
