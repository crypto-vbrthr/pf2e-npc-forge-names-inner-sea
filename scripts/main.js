import { registerHumanCultures } from "./content/human-cultures.js";
import { registerAncestryNamesI } from "./content/ancestry-names-i.js";

export const MODULE_ID = "pf2e-npc-forge-names-inner-sea";
export const VERSION = "0.2.0";

let registered = false;

export function registerContent(api) {
  if (registered) return true;
  if (!api?.content?.registerNameCulture || !api?.content?.registerNamePack) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge 1.1.0+ cultural-name API is unavailable.`);
    return false;
  }
  if (api.capabilities instanceof Set && !api.capabilities.has("cultural-name-generation")) {
    console.warn(`${MODULE_ID} | PF2E NPC Forge does not advertise cultural-name-generation.`);
    return false;
  }
  registerHumanCultures(api);
  registerAncestryNamesI(api);
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
