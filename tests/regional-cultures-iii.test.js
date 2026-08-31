import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES } from "../scripts/content/human-cultures.js";
import { REGIONAL_CULTURES } from "../scripts/content/regional-cultures.js";
import { REGIONAL_CULTURES_II } from "../scripts/content/regional-cultures-ii.js";
import { REGIONAL_CULTURES_III, REGIONAL_NAME_PACKS_III, registerRegionalCulturesIII } from "../scripts/content/regional-cultures-iii.js";

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

test("0.7.0 adds ten cultures and thirteen regional name packs", () => {
  assert.equal(REGIONAL_CULTURES_III.length, 10);
  assert.equal(REGIONAL_NAME_PACKS_III.length, 13);
  assert.equal(REGIONAL_NAME_PACKS_III.filter((p) => p.ancestryIds.includes("core.human")).length, 8);
  assert.equal(REGIONAL_NAME_PACKS_III.filter((p) => !p.ancestryIds.includes("core.human")).length, 5);
});

test("all 0.7.0 definitions and semantic entries remain namespaced", () => {
  for (const definition of [...REGIONAL_CULTURES_III, ...REGIONAL_NAME_PACKS_III]) assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
  for (const pack of REGIONAL_NAME_PACKS_III) for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
});

test("0.7.0 packs reference registered cultures", () => {
  const ids = new Set([...HUMAN_CULTURES, ...REGIONAL_CULTURES, ...REGIONAL_CULTURES_II, ...REGIONAL_CULTURES_III].map((culture) => culture.id));
  for (const pack of REGIONAL_NAME_PACKS_III) {
    assert.ok(pack.cultureIds?.length > 0, pack.id);
    for (const id of pack.cultureIds) assert.ok(ids.has(id), `${pack.id} -> ${id}`);
  }
});

test("Absalomi supports cosmopolitan explicit ancestry variants while remaining human-automatic", () => {
  const culture = REGIONAL_CULTURES_III.find((entry) => entry.id === `${MODULE_ID}.absalomi`);
  assert.ok(culture);
  assert.deepEqual(culture.automaticAncestryIds, ["core.human"]);
  for (const ancestry of ["core.halfling", "core.tengu", "core.ratfolk"]) assert.ok(culture.ancestryIds.includes(ancestry), ancestry);
  for (const id of ["halfling-absalomi", "tengu-absalomi", "ysoki-absalomi"]) {
    const pack = REGIONAL_NAME_PACKS_III.find((entry) => entry.id === `${MODULE_ID}.${id}`);
    assert.ok(pack?.cultureIds.includes(`${MODULE_ID}.absalomi`), id);
  }
});

test("Mordant Spire and Dongun Hold remain explicit-only ancestry cultures", () => {
  for (const id of ["mordant-spire", "dongun-hold"]) {
    const culture = REGIONAL_CULTURES_III.find((entry) => entry.id === `${MODULE_ID}.${id}`);
    assert.ok(culture, id);
    assert.deepEqual(culture.automaticAncestryIds, [], id);
  }
});

test("new human cultural packs are gender-aware and substantial", () => {
  for (const pack of REGIONAL_NAME_PACKS_III.filter((entry) => entry.ancestryIds.includes("core.human"))) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    assert.ok(pack.family.length >= 20, `${pack.id} family`);
  }
});

test("regional ancestry variants preserve distinct naming structures", () => {
  const byId = new Map(REGIONAL_NAME_PACKS_III.map((pack) => [pack.id, pack]));
  assert.equal(byId.get(`${MODULE_ID}.elf-mordant-spire`)?.ancestryIds[0], "core.elf");
  assert.equal(byId.get(`${MODULE_ID}.dwarf-dongun-hold`)?.generators?.family?.type, "components");
  assert.equal(byId.get(`${MODULE_ID}.halfling-absalomi`)?.ancestryIds[0], "core.halfling");
  assert.equal(byId.get(`${MODULE_ID}.tengu-absalomi`)?.generators?.given?.type, "components");
  assert.equal(byId.get(`${MODULE_ID}.ysoki-absalomi`)?.generators?.given?.type, "components");
  assert.ok(!byId.get(`${MODULE_ID}.tengu-absalomi`)?.family);
  assert.ok(!byId.get(`${MODULE_ID}.ysoki-absalomi`)?.family);
});

test("0.7.0 adds at least 15,000 base naming combinations", () => {
  const combinations = REGIONAL_NAME_PACKS_III.reduce((sum, pack) => sum + baseCombinationCount(pack), 0);
  assert.ok(combinations >= 15000, `only ${combinations} combinations`);
});

test("all 0.7.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const definition of [...REGIONAL_CULTURES_III, ...REGIONAL_NAME_PACKS_III]) keys.push(definition.labelKey);
  for (const pack of REGIONAL_NAME_PACKS_III) for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.7.0 registration stays on the public culture/name-pack API", () => {
  const cultures = [];
  const packs = [];
  const api = { content: {
    registerNameCulture(moduleId, definition) { cultures.push({ moduleId, definition }); },
    registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
  } };
  registerRegionalCulturesIII(api);
  assert.equal(cultures.length, REGIONAL_CULTURES_III.length);
  assert.equal(packs.length, REGIONAL_NAME_PACKS_III.length);
  assert.ok([...cultures, ...packs].every((entry) => entry.moduleId === MODULE_ID));
});
