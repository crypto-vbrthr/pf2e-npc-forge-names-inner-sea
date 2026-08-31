import { registerHumanCultures } from "./content/human-cultures.js";
import { registerAncestryNamesI } from "./content/ancestry-names-i.js";
import { registerAncestryNamesII } from "./content/ancestry-names-ii.js";
import { registerAncestryNamesIII } from "./content/ancestry-names-iii.js";
import { registerRegionalCultures } from "./content/regional-cultures.js";
import { registerRegionalCulturesII } from "./content/regional-cultures-ii.js";

export const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
export const VERSION = "0.6.0";

let registered = false;

export function registerContent(api) {
  if (registered) return true;
  if (!api?.content?.registerNameCulture || !api?.content?.registerNamePack) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge 1.1.1+ cultural-name API is unavailable.`);
    return false;
  }
  if (api.capabilities instanceof Set && !api.capabilities.has("cultural-name-generation")) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge does not advertise cultural-name-generation.`);
    return false;
  }
  registerHumanCultures(api);
  registerAncestryNamesI(api);
  registerAncestryNamesII(api);
  registerAncestryNamesIII(api);
  registerRegionalCultures(api);
  registerRegionalCulturesII(api);
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
