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

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
const ALL_PACKS = [...HUMAN_NAME_PACKS, ...ANCESTRY_NAME_PACKS_I, ...ANCESTRY_NAME_PACKS_II, ...ANCESTRY_NAME_PACKS_III, ...REGIONAL_NAME_PACKS, ...REGIONAL_NAME_PACKS_II, ...REGIONAL_NAME_PACKS_III];
const HUMAN_PACKS = [...HUMAN_NAME_PACKS, ...REGIONAL_NAME_PACKS.filter((pack) => pack.ancestryIds?.includes("core.human")), ...REGIONAL_NAME_PACKS_II.filter((pack) => pack.ancestryIds?.includes("core.human")), ...REGIONAL_NAME_PACKS_III.filter((pack) => pack.ancestryIds?.includes("core.human"))];
const en = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/en.json"), "utf8"));
const de = JSON.parse(fs.readFileSync(path.join(ROOT, "lang/de.json"), "utf8"));

function value(entry, catalog = en) {
  if (typeof entry === "string") return entry;
  if (!entry || typeof entry !== "object") return "";
  return catalog[entry.labelKey] ?? entry.fallback ?? "";
}

function normalize(value) {
  return String(value).toLocaleLowerCase("en").replace(/[^\p{L}\p{N}]+/gu, "");
}

function generatorValues(generator, catalog = en) {
  if (generator?.type !== "components") return [];
  const out = [];
  for (const pattern of generator.patterns ?? []) {
    let partial = [""];
    for (const key of pattern) {
      const pool = generator.components?.[key] ?? [];
      const separator = typeof generator.separator === "string" ? generator.separator : "";
      partial = partial.flatMap((prefix) => pool.map((entry) => `${prefix}${prefix ? separator : ""}${value(entry, catalog)}`));
    }
    out.push(...partial);
  }
  return out;
}

function givenValues(pack) {
  const generated = generatorValues(pack.generators?.given ?? (pack.generator?.type === "components" ? pack.generator : null));
  if (generated.length) return generated;
  if (Array.isArray(pack.given)) return pack.given.map((entry) => value(entry));
  return Object.values(pack.given ?? {}).flat().map((entry) => value(entry));
}

function familyValues(pack) {
  const generated = generatorValues(pack.generators?.family);
  if (generated.length) return generated;
  return (pack.family ?? []).map((entry) => value(entry));
}

function overlapRatio(a, b) {
  const A = new Set(a.map(normalize));
  const B = new Set(b.map(normalize));
  if (!A.size || !B.size) return 0;
  let intersection = 0;
  for (const item of A) if (B.has(item)) intersection += 1;
  return intersection / Math.min(A.size, B.size);
}

test("human cultures stay automatic while ancestry-only regional cultures remain explicit-only", () => {
  for (const culture of HUMAN_CULTURES) {
    assert.deepEqual(culture.automaticAncestryIds, ["core.human"], culture.id);
    if (culture.ancestryIds.includes("core.tengu")) assert.ok(!culture.automaticAncestryIds.includes("core.tengu"), culture.id);
  }
  for (const culture of REGIONAL_CULTURES.filter((entry) => entry.ancestryIds.includes("core.human"))) {
    assert.deepEqual(culture.automaticAncestryIds, ["core.human"], culture.id);
  }
  for (const culture of REGIONAL_CULTURES.filter((entry) => !entry.ancestryIds.includes("core.human"))) {
    assert.deepEqual(culture.automaticAncestryIds, [], culture.id);
  }
  for (const culture of REGIONAL_CULTURES_II.filter((entry) => entry.ancestryIds.includes("core.human"))) {
    assert.deepEqual(culture.automaticAncestryIds, ["core.human"], culture.id);
  }
  for (const culture of REGIONAL_CULTURES_II.filter((entry) => !entry.ancestryIds.includes("core.human"))) {
    assert.deepEqual(culture.automaticAncestryIds, [], culture.id);
  }
  for (const culture of REGIONAL_CULTURES_III.filter((entry) => entry.ancestryIds.includes("core.human"))) {
    assert.deepEqual(culture.automaticAncestryIds, ["core.human"], culture.id);
  }
  for (const culture of REGIONAL_CULTURES_III.filter((entry) => !entry.ancestryIds.includes("core.human"))) {
    assert.deepEqual(culture.automaticAncestryIds, [], culture.id);
  }
});

test("component generators never produce immediate doubled words in English or German", () => {
  for (const catalog of [en, de]) {
    for (const pack of ALL_PACKS) {
      const generators = [...Object.values(pack.generators ?? {}), ...(pack.generator?.type === "components" ? [pack.generator] : [])];
      for (const generator of generators) {
        for (const pattern of generator.patterns ?? []) {
          for (let i = 0; i < pattern.length - 1; i += 1) {
            const left = generator.components?.[pattern[i]] ?? [];
            const right = generator.components?.[pattern[i + 1]] ?? [];
            for (const a of left) for (const b of right) {
              // This check targets semantic word compounds such as Forgeforge or Scalescale.
              // Phonetic syllable generators (plain strings) may intentionally repeat sounds.
              if (typeof a !== "object" || typeof b !== "object") continue;
              assert.notEqual(normalize(value(a, catalog)), normalize(value(b, catalog)), `${pack.id}: ${value(a, catalog)} + ${value(b, catalog)}`);
            }
          }
        }
      }
    }
  }
});



test("all component generators produce unique rendered outputs in English and German", () => {
  for (const catalog of [en, de]) {
    for (const pack of ALL_PACKS) {
      const generators = [
        ...Object.entries(pack.generators ?? {}).map(([part, generator]) => [part, generator]),
        ...(pack.generator?.type === "components" ? [["legacy-given", pack.generator]] : [])
      ];
      for (const [part, generator] of generators) {
        const rendered = generatorValues(generator, catalog);
        const normalized = rendered.map(normalize);
        assert.equal(new Set(normalized).size, normalized.length, `${pack.id} ${part} has duplicate rendered component outputs`);
      }
    }
  }
});

test("Oprak family names are clearly distinct from the universal hobgoblin family generator", () => {
  const universal = ANCESTRY_NAME_PACKS_II.find((pack) => pack.id === `${MODULE_ID}.hobgoblin-inner-sea`);
  const oprak = REGIONAL_NAME_PACKS_II.find((pack) => pack.id === `${MODULE_ID}.hobgoblin-oprak`);
  assert.ok(universal && oprak);
  const ratio = overlapRatio(familyValues(universal), familyValues(oprak));
  assert.ok(ratio <= 0.10, `Oprak/universal hobgoblin family overlap ${(ratio * 100).toFixed(1)}%`);
});

test("descriptive regional family names use semantic localized entries", () => {
  const targets = new Map([
    [`${MODULE_ID}.human-shoanti`, ["Blackstone", "Ironcliff", "Stormtrail"]],
    [`${MODULE_ID}.human-kellid`, ["Bearscar", "Ironjaw", "Winterborn"]],
    [`${MODULE_ID}.human-sarkorian`, ["Ashgrove", "Spiritgrove", "Stonecircle"]],
    [`${MODULE_ID}.human-nidalese`, ["Ashveil", "Nightvale", "Whitethorn"]],
    [`${MODULE_ID}.elf-kyonin`, ["Brightbough", "Goldenleaf", "Silverbranch"]]
  ]);
  for (const [packId, names] of targets) {
    const pack = REGIONAL_NAME_PACKS.find((entry) => entry.id === packId);
    assert.ok(pack, packId);
    for (const name of names) {
      const entry = pack.family.find((item) => typeof item === "object" && item.fallback === name);
      assert.ok(entry, `${packId}: ${name} is not semantic`);
      assert.ok(en[entry.labelKey], `missing EN ${entry.labelKey}`);
      assert.ok(de[entry.labelKey], `missing DE ${entry.labelKey}`);
      assert.notEqual(en[entry.labelKey], de[entry.labelKey], `${entry.labelKey} is not localized`);
    }
  }
});

test("human cultural given-name pools stay meaningfully differentiated", () => {
  for (let i = 0; i < HUMAN_PACKS.length; i += 1) {
    for (let j = i + 1; j < HUMAN_PACKS.length; j += 1) {
      const a = HUMAN_PACKS[i];
      const b = HUMAN_PACKS[j];
      for (const gender of ["male", "female", "neutral"]) {
        const ratio = overlapRatio(a.given?.[gender] ?? [], b.given?.[gender] ?? []);
        assert.ok(ratio <= 0.30, `${a.id} vs ${b.id} (${gender}) overlap ${(ratio * 100).toFixed(1)}%`);
      }
      const familyRatio = overlapRatio(familyValues(a), familyValues(b));
      assert.ok(familyRatio <= 0.30, `${a.id} vs ${b.id} family overlap ${(familyRatio * 100).toFixed(1)}%`);
    }
  }
});

test("the expanded library exposes over 160,000 combinations and over 155,000 distinct base names", () => {
  let theoretical = 0;
  const unique = new Set();
  for (const pack of ALL_PACKS) {
    const given = givenValues(pack);
    const family = familyValues(pack);
    theoretical += given.length * Math.max(1, family.length);
    if (family.length) {
      for (const first of given) for (const last of family) unique.add(`${first} ${last}`);
    } else {
      for (const first of given) unique.add(first);
    }
  }
  assert.ok(theoretical >= 160000, `only ${theoretical} possible combinations`);
  assert.ok(unique.size >= 155000, `only ${unique.size} distinct base names`);
});
