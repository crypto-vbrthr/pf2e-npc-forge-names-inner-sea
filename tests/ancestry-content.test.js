import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ANCESTRY_NAME_PACKS_I, registerAncestryNamesI } from "../scripts/content/ancestry-names-i.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const EXPECTED_ANCESTRIES = new Set([
  "core.dwarf",
  "core.elf",
  "core.halfling",
  "core.gnome",
  "core.goblin",
  "core.orc"
]);

function semanticEntries(pack) {
  const entries = [...(pack.epithets ?? [])];
  for (const generator of Object.values(pack.generators ?? {})) {
    for (const values of Object.values(generator.components ?? {})) entries.push(...values);
  }
  return entries.filter((entry) => entry && typeof entry === "object");
}

function familyCombinationCount(pack) {
  const generator = pack.generators?.family;
  if (generator?.type !== "components") return pack.family?.length ?? 0;
  return generator.patterns.reduce((sum, pattern) => {
    const count = pattern.reduce((product, key) => product * (generator.components[key]?.length ?? 0), 1);
    return sum + count;
  }, 0);
}

test("0.2.0 adds six ancestry-focused name packs", () => {
  assert.equal(ANCESTRY_NAME_PACKS_I.length, 6);
  const ancestries = new Set(ANCESTRY_NAME_PACKS_I.flatMap((pack) => pack.ancestryIds));
  assert.deepEqual(ancestries, EXPECTED_ANCESTRIES);
  assert.ok(ANCESTRY_NAME_PACKS_I.every((pack) => pack.ancestryIds.length === 1));
});

test("ancestry packs are universal fallback packs rather than fake cultures", () => {
  for (const pack of ANCESTRY_NAME_PACKS_I) {
    assert.ok(!Array.isArray(pack.cultureIds) || pack.cultureIds.length === 0, pack.id);
  }
});

test("all ancestry content remains namespaced", () => {
  for (const pack of ANCESTRY_NAME_PACKS_I) {
    assert.ok(pack.id.startsWith(`${MODULE_ID}.`), pack.id);
    for (const entry of semanticEntries(pack)) assert.ok(entry.id.startsWith(`${MODULE_ID}.`), entry.id);
  }
});

test("ancestry given-name pools are substantial and duplicate-free", () => {
  for (const pack of ANCESTRY_NAME_PACKS_I) {
    assert.ok(pack.given.male.length >= 20, `${pack.id} male`);
    assert.ok(pack.given.female.length >= 20, `${pack.id} female`);
    assert.ok(pack.given.neutral.length >= 10, `${pack.id} neutral`);
    for (const [gender, pool] of Object.entries(pack.given)) {
      assert.equal(new Set(pool).size, pool.length, `${pack.id} duplicate ${gender} name`);
    }
  }
});

test("speaking surname generators use healthy component pools", () => {
  const generated = ANCESTRY_NAME_PACKS_I.filter((pack) => pack.generators?.family);
  assert.equal(generated.length, 4);
  for (const pack of generated) {
    const generator = pack.generators.family;
    assert.equal(generator.type, "components");
    assert.ok(generator.patterns.length >= 1);
    for (const values of Object.values(generator.components)) {
      assert.ok(values.length >= 10, pack.id);
      assert.equal(new Set(values.map((entry) => entry.id)).size, values.length, `${pack.id} duplicate component ID`);
    }
  }
});

test("0.2.0 adds at least 38,000 ancestry base-name combinations", () => {
  let combinations = 0;
  for (const pack of ANCESTRY_NAME_PACKS_I) {
    const given = Object.values(pack.given).flat().length;
    combinations += given * familyCombinationCount(pack);
  }
  assert.ok(combinations >= 38000, `only ${combinations} combinations`);
});

test("all ancestry localization keys exist in both catalogs", () => {
  const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  const keys = [];
  for (const pack of ANCESTRY_NAME_PACKS_I) {
    keys.push(pack.labelKey);
    for (const entry of semanticEntries(pack)) keys.push(entry.labelKey);
  }
  for (const key of keys) {
    assert.ok(en[key], `missing EN ${key}`);
    assert.ok(de[key], `missing DE ${key}`);
  }
});

test("ancestry registration uses only registerNamePack", () => {
  const packs = [];
  const api = {
    content: {
      registerNamePack(moduleId, definition) { packs.push({ moduleId, definition }); }
    }
  };
  registerAncestryNamesI(api);
  assert.equal(packs.length, 6);
  assert.ok(packs.every((entry) => entry.moduleId === MODULE_ID));
});
