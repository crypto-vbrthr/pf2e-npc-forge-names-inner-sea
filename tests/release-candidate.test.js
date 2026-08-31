import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HUMAN_CULTURES, HUMAN_NAME_PACKS } from "../scripts/content/human-cultures.js";
import { ANCESTRY_NAME_PACKS_I } from "../scripts/content/ancestry-names-i.js";
import { ANCESTRY_NAME_PACKS_II } from "../scripts/content/ancestry-names-ii.js";
import { ANCESTRY_NAME_PACKS_III } from "../scripts/content/ancestry-names-iii.js";
import { REGIONAL_CULTURES, REGIONAL_NAME_PACKS } from "../scripts/content/regional-cultures.js";
import { REGIONAL_CULTURES_II, REGIONAL_NAME_PACKS_II } from "../scripts/content/regional-cultures-ii.js";
import { REGIONAL_CULTURES_III, REGIONAL_NAME_PACKS_III } from "../scripts/content/regional-cultures-iii.js";
import { REGIONAL_CULTURES_IV, REGIONAL_NAME_PACKS_IV } from "../scripts/content/regional-cultures-iv.js";
import { REGIONAL_CULTURES_V, REGIONAL_NAME_PACKS_V } from "../scripts/content/regional-cultures-v.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const CULTURES = [...HUMAN_CULTURES, ...REGIONAL_CULTURES, ...REGIONAL_CULTURES_II, ...REGIONAL_CULTURES_III, ...REGIONAL_CULTURES_IV, ...REGIONAL_CULTURES_V];
const PACKS = [...HUMAN_NAME_PACKS, ...ANCESTRY_NAME_PACKS_I, ...ANCESTRY_NAME_PACKS_II, ...ANCESTRY_NAME_PACKS_III, ...REGIONAL_NAME_PACKS, ...REGIONAL_NAME_PACKS_II, ...REGIONAL_NAME_PACKS_III, ...REGIONAL_NAME_PACKS_IV, ...REGIONAL_NAME_PACKS_V];
const ANCESTRIES = new Set([
  "core.elf", "core.gnome", "core.goblin", "core.halfling", "core.leshy", "core.human", "core.orc", "core.dwarf",
  "core.catfolk", "core.hobgoblin", "core.lizardfolk", "core.kholo", "core.kobold", "core.tengu", "core.tripkee", "core.ratfolk"
]);
const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));

function render(entry, catalog) {
  if (typeof entry === "string") return entry;
  return catalog[entry?.labelKey] ?? entry?.fallback ?? "";
}

function generatorValues(generator, catalog) {
  if (generator?.type !== "components") return [];
  const out = [];
  for (const pattern of generator.patterns ?? []) {
    let partial = [""];
    for (const key of pattern) {
      const pool = generator.components?.[key] ?? [];
      const separator = typeof generator.separator === "string" ? generator.separator : "";
      partial = partial.flatMap((prefix) => pool.map((entry) => `${prefix}${prefix ? separator : ""}${render(entry, catalog)}`));
    }
    out.push(...partial);
  }
  return out;
}

function givenValues(pack, catalog) {
  const generated = generatorValues(pack.generators?.given ?? (pack.generator?.type === "components" ? pack.generator : null), catalog);
  if (generated.length) return generated;
  if (Array.isArray(pack.given)) return pack.given.map((entry) => render(entry, catalog));
  return Object.values(pack.given ?? {}).flat().map((entry) => render(entry, catalog));
}

function familyValues(pack, catalog) {
  const generated = generatorValues(pack.generators?.family, catalog);
  if (generated.length) return generated;
  return (pack.family ?? []).map((entry) => render(entry, catalog));
}

function theoreticalCount(pack) {
  const given = givenValues(pack, en).length;
  const family = familyValues(pack, en).length || 1;
  return given * family;
}

function distinctNames(catalog) {
  const names = new Set();
  for (const pack of PACKS) {
    const given = givenValues(pack, catalog);
    const family = familyValues(pack, catalog);
    if (family.length) for (const first of given) for (const last of family) names.add(`${first} ${last}`);
    else for (const first of given) names.add(first);
  }
  return names;
}

test("1.0 RC freezes the reviewed library shape", () => {
  assert.equal(CULTURES.length, 53);
  assert.equal(PACKS.length, 85);
  assert.equal(CULTURES.filter((culture) => culture.automaticAncestryIds?.includes("core.human")).length, 46);
  assert.equal(CULTURES.reduce((sum, culture) => sum + culture.ancestryIds.filter((id) => id !== "core.human").length, 0), 24);
  assert.equal(PACKS.reduce((sum, pack) => sum + theoreticalCount(pack), 0), 190290);
  assert.equal(distinctNames(en).size, 185482);
  assert.equal(distinctNames(de).size, 185536);
  assert.equal(Object.keys(en).length, 1052);
  assert.equal(Object.keys(de).length, 1052);
});

test("all release-candidate content IDs, ancestries, locales, and weights satisfy the provider contract", () => {
  const definitionIds = [...CULTURES, ...PACKS].map((entry) => entry.id);
  assert.equal(new Set(definitionIds).size, definitionIds.length, "duplicate culture/name-pack ID");

  for (const definition of [...CULTURES, ...PACKS]) {
    assert.ok(definition.id.startsWith(`${MODULE_ID}.`), definition.id);
    assert.ok(definition.labelKey && en[definition.labelKey] && de[definition.labelKey], definition.id);
    assert.deepEqual(new Set(definition.supportedLocales ?? []), new Set(["en", "de"]), definition.id);
    assert.ok(Number.isFinite(definition.weight) && definition.weight > 0, `${definition.id} weight`);
    assert.ok(Array.isArray(definition.ancestryIds) && definition.ancestryIds.length > 0, `${definition.id} ancestries`);
    for (const ancestryId of definition.ancestryIds) assert.ok(ANCESTRIES.has(ancestryId), `${definition.id}: ${ancestryId}`);
  }

  for (const culture of CULTURES) {
    const eligible = new Set(culture.ancestryIds);
    for (const ancestryId of culture.automaticAncestryIds ?? []) assert.ok(eligible.has(ancestryId), `${culture.id}: automatic ${ancestryId}`);
  }
});

test("every declared culture/ancestry route has at least one matching pack", () => {
  for (const culture of CULTURES) {
    for (const ancestryId of culture.ancestryIds) {
      const matches = PACKS.filter((pack) => pack.ancestryIds?.includes(ancestryId) && pack.cultureIds?.includes(culture.id));
      assert.ok(matches.length > 0, `${culture.id} -> ${ancestryId}`);
    }
  }
});

test("all nonhuman NPC Forge core ancestries retain a culture-neutral add-on fallback pack", () => {
  for (const ancestryId of [...ANCESTRIES].filter((id) => id !== "core.human")) {
    const universal = PACKS.filter((pack) => pack.ancestryIds?.includes(ancestryId) && (!pack.cultureIds || pack.cultureIds.length === 0));
    assert.ok(universal.length > 0, ancestryId);
  }
});

test("German and English localization catalogs stay exactly symmetric and non-empty", () => {
  assert.deepEqual(new Set(Object.keys(en)), new Set(Object.keys(de)));
  for (const key of Object.keys(en)) {
    assert.ok(String(en[key]).trim().length > 0, `empty EN ${key}`);
    assert.ok(String(de[key]).trim().length > 0, `empty DE ${key}`);
  }
});
