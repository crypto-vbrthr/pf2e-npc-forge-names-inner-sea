import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES } from "../scripts/content/human-cultures.js";
import { REGIONAL_CULTURES } from "../scripts/content/regional-cultures.js";
import { REGIONAL_CULTURES_II } from "../scripts/content/regional-cultures-ii.js";
import { REGIONAL_CULTURES_III } from "../scripts/content/regional-cultures-iii.js";
import { REGIONAL_CULTURES_IV } from "../scripts/content/regional-cultures-iv.js";
import { REGIONAL_CULTURES_V, REGIONAL_NAME_PACKS_V, registerRegionalCulturesV } from "../scripts/content/regional-cultures-v.js";

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

test("0.9.0 adds eight final human cultures and twelve name packs", () => {
  assert.equal(REGIONAL_CULTURES_V.length, 8);
  assert.equal(REGIONAL_NAME_PACKS_V.length, 12);
  assert.equal(REGIONAL_NAME_PACKS_V.filter((p) => p.ancestryIds.includes("core.human")).length, 8);
  assert.equal(REGIONAL_NAME_PACKS_V.filter((p) => !p.ancestryIds.includes("core.human")).length, 4);
});

test("all 0.9.0 definitions and semantic entries remain namespaced", () => {
  for (const definition of [...REGIONAL_CULTURES_V, ...REGIONAL_NAME_PACKS_V]) assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
  for (const pack of REGIONAL_NAME_PACKS_V) for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
});

test("0.9.0 packs reference registered cultures", () => {
  const ids = new Set([...HUMAN_CULTURES, ...REGIONAL_CULTURES, ...REGIONAL_CULTURES_II, ...REGIONAL_CULTURES_III, ...REGIONAL_CULTURES_IV, ...REGIONAL_CULTURES_V].map((culture) => culture.id));
  for (const pack of REGIONAL_NAME_PACKS_V) {
    assert.ok(pack.cultureIds?.length > 0, pack.id);
    for (const id of pack.cultureIds) assert.ok(ids.has(id), `${pack.id} -> ${id}`);
  }
});

test("Shackles supports explicit tengu while remaining human-automatic", () => {
  const culture = REGIONAL_CULTURES_V.find((entry) => entry.id === `${MODULE_ID}.shackles`);
  assert.ok(culture);
  assert.deepEqual(culture.automaticAncestryIds, ["core.human"]);
  assert.ok(culture.ancestryIds.includes("core.tengu"));
  assert.ok(REGIONAL_NAME_PACKS_V.some((entry) => entry.id === `${MODULE_ID}.tengu-shackles`));
});

test("existing Osiriani, Nexian, and Ustalavic cultures expose the final explicit ancestry variants", () => {
  const osiriani = HUMAN_CULTURES.find((entry) => entry.id === `${MODULE_ID}.osiriani`);
  const ustalavic = HUMAN_CULTURES.find((entry) => entry.id === `${MODULE_ID}.ustalavic`);
  const nexian = REGIONAL_CULTURES_II.find((entry) => entry.id === `${MODULE_ID}.nexian`);
  assert.ok(osiriani?.ancestryIds.includes("core.kholo"));
  assert.ok(nexian?.ancestryIds.includes("core.kholo"));
  assert.ok(ustalavic?.ancestryIds.includes("core.ratfolk"));
  assert.deepEqual(osiriani.automaticAncestryIds, ["core.human"]);
  assert.deepEqual(nexian.automaticAncestryIds, ["core.human"]);
  assert.deepEqual(ustalavic.automaticAncestryIds, ["core.human"]);
});

test("new listed human packs are substantial while Varki intentionally uses a mononym generator", () => {
  const human = REGIONAL_NAME_PACKS_V.filter((entry) => entry.ancestryIds.includes("core.human"));
  const varki = human.find((entry) => entry.id === `${MODULE_ID}.human-varki`);
  for (const pack of human.filter((entry) => entry !== varki)) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    assert.ok(pack.family.length >= 20, `${pack.id} family`);
  }
  assert.equal(varki?.generators?.given?.type, "components");
  assert.ok(!varki?.family);
  assert.ok(generatorCombinationCount(varki.generators.given) >= 200);
});

test("final ancestry variants preserve distinct naming structures", () => {
  const byId = new Map(REGIONAL_NAME_PACKS_V.map((pack) => [pack.id, pack]));
  assert.equal(byId.get(`${MODULE_ID}.tengu-shackles`)?.generators?.given?.type, "components");
  assert.equal(byId.get(`${MODULE_ID}.ysoki-ustalavic`)?.generators?.given?.type, "components");
  assert.ok(!byId.get(`${MODULE_ID}.tengu-shackles`)?.family);
  assert.ok(!byId.get(`${MODULE_ID}.ysoki-ustalavic`)?.family);
  assert.equal(byId.get(`${MODULE_ID}.kholo-osiriani`)?.ancestryIds[0], "core.kholo");
  assert.equal(byId.get(`${MODULE_ID}.kholo-nexian`)?.ancestryIds[0], "core.kholo");
});

test("0.9.0 adds at least 8,000 base naming combinations", () => {
  const combinations = REGIONAL_NAME_PACKS_V.reduce((sum, pack) => sum + baseCombinationCount(pack), 0);
  assert.ok(combinations >= 8000, `only ${combinations} combinations`);
});

test("all 0.9.0 localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const definition of [...REGIONAL_CULTURES_V, ...REGIONAL_NAME_PACKS_V]) keys.push(definition.labelKey);
  for (const pack of REGIONAL_NAME_PACKS_V) for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("0.9.0 registration stays on the public culture/name-pack API", () => {
  const cultures = [];
  const packs = [];
  const api = { content: {
    registerNameCulture(moduleId, definition) { cultures.push({ moduleId, definition }); },
    registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
  } };
  registerRegionalCulturesV(api);
  assert.equal(cultures.length, REGIONAL_CULTURES_V.length);
  assert.equal(packs.length, REGIONAL_NAME_PACKS_V.length);
  assert.ok([...cultures, ...packs].every((entry) => entry.moduleId === MODULE_ID));
});

test("0.9.0 reviewed German regional labels stay setting-consistent", () => {
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.equal(de["NAMESINNERSEA.Culture.Alkenstari"], "Alkensternisch");
  assert.equal(de["NAMESINNERSEA.Culture.Jalmerayi"], "Jalmerayisch");
  assert.equal(de["NAMESINNERSEA.Culture.Shackles"], "Fesselinseln");
  assert.equal(de["NAMESINNERSEA.Culture.LirgeniTradition"], "Lirgener Tradition");
  assert.equal(de["NAMESINNERSEA.Culture.YamasanTradition"], "Yamasanische Tradition");
});

test("final content avoids obvious published-name and lexical collisions", () => {
  const varki = REGIONAL_NAME_PACKS_V.find((entry) => entry.id === `${MODULE_ID}.human-varki`);
  const mzali = REGIONAL_NAME_PACKS_V.find((entry) => entry.id === `${MODULE_ID}.human-mzali`);
  const roots = varki.generators.given.components.root;
  const endings = varki.generators.given.components.ending;
  const varkiNames = roots.flatMap((root) => endings.map((ending) => `${root}${ending}`.toLocaleLowerCase("en")));
  assert.ok(!varkiNames.includes("samo"), "Varki generator should not reproduce the published example name Samo");
  const mzaliNames = Object.values(mzali.given).flat().map((name) => name.toLocaleLowerCase("en"));
  assert.ok(!mzaliNames.includes("nazi"), "Mzali pool contains an unwanted lexical collision");
});
