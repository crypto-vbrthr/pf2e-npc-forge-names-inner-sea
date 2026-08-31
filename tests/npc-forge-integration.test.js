import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { registerHumanCultures } from "../scripts/content/human-cultures.js";
import { registerAncestryNamesI } from "../scripts/content/ancestry-names-i.js";
import { registerAncestryNamesII } from "../scripts/content/ancestry-names-ii.js";
import { registerAncestryNamesIII } from "../scripts/content/ancestry-names-iii.js";
import { registerRegionalCultures } from "../scripts/content/regional-cultures.js";
import { registerRegionalCulturesII } from "../scripts/content/regional-cultures-ii.js";
import { registerRegionalCulturesIII } from "../scripts/content/regional-cultures-iii.js";
import { registerRegionalCulturesIV } from "../scripts/content/regional-cultures-iv.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODULE_ID = "pf2e-npc-forge-names-inner-sea";

function findNpcForgeSource() {
  const candidates = [
    process.env.PF2E_NPC_FORGE_SOURCE,
    path.resolve(ROOT, "../pf2e-npc-forge")
  ].filter(Boolean);
  return candidates.find((candidate) => fs.existsSync(path.join(candidate, "scripts/engine/npc-engine.js"))) ?? null;
}

const NPC_FORGE_ROOT = findNpcForgeSource();

if (!NPC_FORGE_ROOT) {
  test("real NPC Forge integration suite", { skip: "Set PF2E_NPC_FORGE_SOURCE to an NPC Forge 1.1.2+ source checkout." }, () => {});
} else {
  const importCore = (relative) => import(pathToFileURL(path.join(NPC_FORGE_ROOT, relative)).href);
  const [{ ContentRegistry }, { registerCoreContent }, { NpcEngine }, constants] = await Promise.all([
    importCore("scripts/engine/content/content-registry.js"),
    importCore("scripts/engine/content/core-content.js"),
    importCore("scripts/engine/npc-engine.js"),
    importCore("scripts/constants.js")
  ]);

  function setup() {
    const registry = new ContentRegistry();
    registerCoreContent(registry);
    const api = {
      content: {
        registerNameCulture(moduleId, definition) { registry.register("nameCultures", moduleId, definition); },
        registerNamePack(moduleId, definition) { registry.register("namePacks", moduleId, definition); }
      }
    };
    registerHumanCultures(api);
    registerAncestryNamesI(api);
    registerAncestryNamesII(api);
    registerAncestryNamesIII(api);
    registerRegionalCultures(api);
    registerRegionalCulturesII(api);
    registerRegionalCulturesIII(api);
    registerRegionalCulturesIV(api);
    return { registry, engine: new NpcEngine({ registry }) };
  }

  test("integration target is NPC Forge 1.1.2 or newer", () => {
    const parts = String(constants.API_VERSION).split(".").map(Number);
    assert.ok(parts[0] > 1 || (parts[0] === 1 && (parts[1] > 1 || (parts[1] === 1 && parts[2] >= 2))), `NPC Forge ${constants.API_VERSION}`);
    assert.ok(constants.CAPABILITIES.includes("cultural-name-generation"));
    assert.ok(constants.CAPABILITIES.includes("deduplicated-name-pools"));
  });

  test("real NPC Forge keeps nonhuman automatic generation on universal ancestry packs", () => {
    const { registry, engine } = setup();
    const ancestries = ["core.elf", "core.dwarf", "core.orc", "core.tengu", "core.halfling", "core.goblin", "core.hobgoblin", "core.gnome", "core.ratfolk", "core.leshy", "core.lizardfolk", "core.kholo"];
    for (const ancestry of ancestries) {
      for (let i = 0; i < 40; i += 1) {
        const npc = engine.generate({ seed: `names-080-auto-${ancestry}-${i}`, ancestry, identity: { nameLocale: "en" } });
        assert.equal(npc.identity.nameCulture, null, `${ancestry} acquired ${npc.identity.nameCulture?.id}`);
        const pack = registry.get("namePacks", npc.identity.nameParts.packId);
        assert.ok(pack, npc.identity.nameParts.packId);
        assert.ok(!Array.isArray(pack.cultureIds) || pack.cultureIds.length === 0, `${ancestry} selected regional pack ${pack.id}`);
      }
    }
  });

  test("real NPC Forge resolves explicit regional variants through the add-on contracts", () => {
    const { engine } = setup();
    const cases = [
      ["core.elf", `${MODULE_ID}.kyonin`, `${MODULE_ID}.elf-kyonin`],
      ["core.tengu", `${MODULE_ID}.varisian`, `${MODULE_ID}.tengu-varisian-migrant`],
      ["core.halfling", `${MODULE_ID}.chelish`, `${MODULE_ID}.halfling-chelish`],
      ["core.goblin", `${MODULE_ID}.isgeri`, `${MODULE_ID}.goblin-isgeri`],
      ["core.hobgoblin", `${MODULE_ID}.oprak`, `${MODULE_ID}.hobgoblin-oprak`],
      ["core.gnome", `${MODULE_ID}.brastlewark`, `${MODULE_ID}.gnome-brastlewark`],
      ["core.ratfolk", `${MODULE_ID}.katapeshi`, `${MODULE_ID}.ysoki-katapeshi`],
      ["core.elf", `${MODULE_ID}.mordant-spire`, `${MODULE_ID}.elf-mordant-spire`],
      ["core.dwarf", `${MODULE_ID}.dongun-hold`, `${MODULE_ID}.dwarf-dongun-hold`],
      ["core.halfling", `${MODULE_ID}.absalomi`, `${MODULE_ID}.halfling-absalomi`],
      ["core.tengu", `${MODULE_ID}.absalomi`, `${MODULE_ID}.tengu-absalomi`],
      ["core.ratfolk", `${MODULE_ID}.absalomi`, `${MODULE_ID}.ysoki-absalomi`],
      ["core.leshy", `${MODULE_ID}.kyonin`, `${MODULE_ID}.leshy-kyonin`],
      ["core.lizardfolk", `${MODULE_ID}.mwangi`, `${MODULE_ID}.iruxi-mwangi`],
      ["core.kholo", `${MODULE_ID}.katapeshi`, `${MODULE_ID}.kholo-katapeshi`],
      ["core.tengu", `${MODULE_ID}.qadiran`, `${MODULE_ID}.tengu-qadiran`]
    ];
    for (const [ancestry, culture, expectedPack] of cases) {
      const npc = engine.generate({ seed: `names-080-fixed-${ancestry}`, ancestry, identity: { nameCulture: culture, nameLocale: "en" } });
      assert.equal(npc.identity.nameCulture?.id, culture);
      assert.equal(npc.identity.nameParts.packId, expectedPack);
    }
  });
}
