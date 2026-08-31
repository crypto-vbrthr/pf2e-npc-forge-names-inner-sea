import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES, HUMAN_NAME_PACKS, registerHumanCultures } from "../scripts/content/human-cultures.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";

function allSemanticEntries(pack) {
  const entries = [...(pack.epithets ?? [])];
  for (const generator of Object.values(pack.generators ?? {})) {
    for (const values of Object.values(generator.components ?? {})) entries.push(...values);
  }
  return entries.filter((entry) => entry && typeof entry === "object");
}

test("0.1.0 registers eight human cultures and eight packs", () => {
  assert.equal(HUMAN_CULTURES.length, 8);
  assert.equal(HUMAN_NAME_PACKS.length, 8);
  assert.ok(HUMAN_CULTURES.every((culture) => culture.ancestryIds.includes("core.human")));
  assert.ok(HUMAN_NAME_PACKS.every((pack) => pack.ancestryIds.includes("core.human")));
});

test("all content IDs remain inside the add-on namespace", () => {
  for (const definition of [...HUMAN_CULTURES, ...HUMAN_NAME_PACKS]) {
    assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
  }
  for (const pack of HUMAN_NAME_PACKS) {
    for (const entry of allSemanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
  }
});

test("every pack references a registered culture", () => {
  const ids = new Set(HUMAN_CULTURES.map((culture) => culture.id));
  for (const pack of HUMAN_NAME_PACKS) {
    assert.ok(pack.cultureIds.length > 0);
    for (const cultureId of pack.cultureIds) assert.ok(ids.has(cultureId), `${pack.id} -> ${cultureId}`);
  }
});

test("given pools are gender-aware and substantial", () => {
  for (const pack of HUMAN_NAME_PACKS) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    for (const pool of Object.values(pack.given)) assert.equal(new Set(pool).size, pool.length, `${pack.id} duplicate in given pool`);
  }
});

test("0.1.0 exposes at least 18,000 base full-name combinations", () => {
  let combinations = 0;
  for (const pack of HUMAN_NAME_PACKS) {
    const given = Object.values(pack.given).flat().length;
    const familyGenerator = pack.generators?.family;
    let family = pack.family?.length ?? 0;
    if (familyGenerator?.type === "components") {
      family = familyGenerator.patterns.reduce((sum, pattern) => {
        const count = pattern.reduce((product, key) => product * (familyGenerator.components[key]?.length ?? 0), 1);
        return sum + count;
      }, 0);
    }
    combinations += given * family;
  }
  assert.ok(combinations >= 18000, `only ${combinations} combinations`);
});

test("all localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const definition of [...HUMAN_CULTURES, ...HUMAN_NAME_PACKS]) keys.push(definition.labelKey);
  for (const pack of HUMAN_NAME_PACKS) for (const entry of allSemanticEntries(pack)) keys.push(entry.labelKey);
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("registration uses only the public cultural-name API", () => {
  const cultures = [];
  const packs = [];
  const api = {
    content: {
      registerNameCulture(moduleId, definition) { cultures.push({ moduleId, definition }); },
      registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
    }
  };
  registerHumanCultures(api);
  assert.equal(cultures.length, 8);
  assert.equal(packs.length, 8);
  assert.ok([...cultures, ...packs].every((entry) => entry.moduleId === MODULE_ID));
});
