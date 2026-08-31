import { registerHumanCultures } from "./content/human-cultures.js";
import { registerAncestryNamesI } from "./content/ancestry-names-i.js";
import { registerAncestryNamesII } from "./content/ancestry-names-ii.js";
import { registerAncestryNamesIII } from "./content/ancestry-names-iii.js";
import { registerRegionalCultures } from "./content/regional-cultures.js";
import { registerRegionalCulturesII } from "./content/regional-cultures-ii.js";
import { registerRegionalCulturesIII } from "./content/regional-cultures-iii.js";
import { registerRegionalCulturesIV } from "./content/regional-cultures-iv.js";
import { registerRegionalCulturesV } from "./content/regional-cultures-v.js";

export const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
export const VERSION = "1.0.0-rc.1";

let registered = false;

export function registerContent(api) {
  if (registered) return true;
  if (!api?.content?.registerNameCulture || !api?.content?.registerNamePack) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge 1.1.2+ cultural-name API is unavailable.`);
    return false;
  }
  if (api.capabilities instanceof Set && !api.capabilities.has("cultural-name-generation")) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge does not advertise cultural-name-generation.`);
    return false;
  }
  if (api.capabilities instanceof Set && !api.capabilities.has("deduplicated-name-pools")) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge 1.1.2+ deduplicated-name-pools capability is required.`);
    return false;
  }
  registerHumanCultures(api);
  registerAncestryNamesI(api);
  registerAncestryNamesII(api);
  registerAncestryNamesIII(api);
  registerRegionalCultures(api);
  registerRegionalCulturesII(api);
  registerRegionalCulturesIII(api);
  registerRegionalCulturesIV(api);
  registerRegionalCulturesV(api);
  registered = true;
  console.log(`${MODULE_ID} | Registered Names of the Inner Sea ${VERSION}`);
  return true;
}

Hooks.once("pf2eNpcForgeReady", (api) => registerContent(api));

Hooks.once("ready", () => {
  if (registered) return;
  const api = game.modules.get("pf2e-npc-forge")?.api;
  if (api) registerContent(api);
});
