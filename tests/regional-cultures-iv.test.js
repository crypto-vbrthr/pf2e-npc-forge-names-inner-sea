import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES } from "../scripts/content/human-cultures.js";
import { REGIONAL_CULTURES } from "../scripts/content/regional-cultures.js";
import { REGIONAL_CULTURES_II } from "../scripts/content/regional-cultures-ii.js";
import { REGIONAL_CULTURES_III } from "../scripts/content/regional-cultures-iii.js";
import { REGIONAL_CULTURES_IV, REGIONAL_NAME_PACKS_IV, registerRegionalCulturesIV } from "../scripts/content/regional-cultures-iv.js";

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

test("0.8.0 adds eight cultures and twelve regional name packs", () => {
  assert.equal(REGIONAL_CULTURES_IV.length, 8);
  assert.equal(REGIONAL_NAME_PACKS_IV.length, 12);
  assert.equal(REGIONAL_NAME_PACKS_IV.filter((p) => p.ancestryIds.includes("core.human")).length, 8);
  assert.equal(REGIONAL_NAME_PACKS_IV.filter((p) => !p.ancestryIds.includes("core.human")).length, 4);
});

test("all 0.8.0 definitions and semantic entries remain namespaced", () => {
  for (const definition of [...REGIONAL_CULTURES_IV, ...REGIONAL_NAME_PACKS_IV]) assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
  for (const pack of REGIONAL_NAME_PACKS_IV) for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
});

test("0.8.0 packs reference registered cultures", () => {
  const ids = new Set([...HUMAN_CULTURES, ...REGIONAL_CULTURES, ...REGIONAL_CULTURES_II, ...REGIONAL_CULTURES_III, ...REGIONAL_CULTURES_IV].map((culture) => culture.id));
  for (const pack of REGIONAL_NAME_PACKS_IV) {
    assert.ok(pack.cultureIds?.length > 0, pack.id);
    for (const id of pack.cultureIds) assert.ok(ids.has(id), `${pack.id} -> ${id}`);
  }
});

test("Qadiran supports explicit tengu while remaining human-automatic", () => {
  const culture = REGIONAL_CULTURES_IV.find((entry) => entry.id === `${MODULE_ID}.qadiran`);
  assert.ok(culture);
  assert.deepEqual(culture.automaticAncestryIds, ["core.human"]);
  assert.ok(culture.ancestryIds.includes("core.tengu"));
  const pack = REGIONAL_NAME_PACKS_IV.find((entry) => entry.id === `${MODULE_ID}.tengu-qadiran`);
  assert.ok(pack?.cultureIds.includes(`${MODULE_ID}.qadiran`));
});

test("existing Kyonin, Mwangi, and Katapeshi cultures expose the new explicit ancestry variants", () => {
  const kyonin = REGIONAL_CULTURES.find((entry) => entry.id === `${MODULE_ID}.kyonin`);
  const mwangi = REGIONAL_CULTURES.find((entry) => entry.id === `${MODULE_ID}.mwangi`);
  const katapeshi = REGIONAL_CULTURES_II.find((entry) => entry.id === `${MODULE_ID}.katapeshi`);
  assert.ok(kyonin?.ancestryIds.includes("core.leshy"));
  assert.ok(mwangi?.ancestryIds.includes("core.lizardfolk"));
  assert.ok(katapeshi?.ancestryIds.includes("core.kholo"));
  assert.deepEqual(kyonin.automaticAncestryIds, []);
  assert.deepEqual(mwangi.automaticAncestryIds, ["core.human"]);
  assert.deepEqual(katapeshi.automaticAncestryIds, ["core.human"]);
});

test("new human cultural packs are gender-aware and substantial", () => {
  for (const pack of REGIONAL_NAME_PACKS_IV.filter((entry) => entry.ancestryIds.includes("core.human"))) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    assert.ok(pack.family.length >= 20, `${pack.id} family`);
  }
});

test("regional ancestry variants preserve distinct naming structures", () => {
  const byId = new Map(REGIONAL_NAME_PACKS_IV.map((pack) => [pack.id, pack]));
  assert.equal(byId.get(`${MODULE_ID}.leshy-kyonin`)?.generators?.given?.type, "components");
  assert.equal(byId.get(`${MODULE_ID}.iruxi-mwangi`)?.ancestryIds[0], "core.lizardfolk");
  assert.equal(byId.get(`${MODULE_ID}.kholo-katapeshi`)?.ancestryIds[0], "core.kholo");
  assert.equal(byId.get(`${MODULE_ID}.tengu-qadiran`)?.generators?.given?.type, "components");
  assert.ok(!byId.get(`${MODULE_ID}.leshy-kyonin`)?.family);
  assert.ok(!byId.get(`${MODULE_ID}.tengu-qadiran`)?.family);
});

test("0.8.0 adds at least 12,000 base naming combinations", () => {
  const combinations = REGIONAL_NAME_PACKS_IV.reduce((sum, pack) => sum + baseCombinationCount(pack), 0);
  assert.ok(combinations >= 12000, `only ${combinations} combinations`);
});

test("all 0.8.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const definition of [...REGIONAL_CULTURES_IV, ...REGIONAL_NAME_PACKS_IV]) keys.push(definition.labelKey);
  for (const pack of REGIONAL_NAME_PACKS_IV) for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.8.0 registration stays on the public culture/name-pack API", () => {
  const cultures = [];
  const packs = [];
  const api = { content: {
    registerNameCulture(moduleId, definition) { cultures.push({ moduleId, definition }); },
    registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
  } };
  registerRegionalCulturesIV(api);
  assert.equal(cultures.length, REGIONAL_CULTURES_IV.length);
  assert.equal(packs.length, REGIONAL_NAME_PACKS_IV.length);
  assert.ok([...cultures, ...packs].every((entry) => entry.moduleId === MODULE_ID));
});
