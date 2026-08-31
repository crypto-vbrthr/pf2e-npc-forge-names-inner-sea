import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "module.json"), "utf8"));
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
const main = fs.readFileSync(path.join(ROOT, "scripts/main.js"), "utf8");
const readme = fs.readFileSync(path.join(ROOT, "README.md"), "utf8");
const changelog = fs.readFileSync(path.join(ROOT, "CHANGELOG.md"), "utf8");
const mainVersion = main.match(/export const VERSION = "([^"]+)";/)?.[1];

function fail(message) {
  console.error(`Release check failed: ${message}`);
  process.exit(1);
}

if (!manifest.version || manifest.version !== pkg.version || manifest.version !== mainVersion) {
  fail(`version mismatch: module=${manifest.version}, package=${pkg.version}, main=${mainVersion}`);
}
if (!manifest.download?.includes(`/releases/download/${manifest.version}/`)) {
  fail(`download URL does not contain release version ${manifest.version}`);
}
if (!readme.includes(`## ${manifest.version} –`)) fail(`README has no ${manifest.version} release section`);
if (!changelog.includes(`## ${manifest.version} –`)) fail(`CHANGELOG has no ${manifest.version} release section`);

const candidates = [
  process.env.PF2E_NPC_FORGE_SOURCE,
  path.resolve(ROOT, "../pf2e-npc-forge")
].filter(Boolean);
const npcForgeSource = candidates.find((candidate) =>
  fs.existsSync(path.join(candidate, "scripts/engine/npc-engine.js"))
);

if (!npcForgeSource) {
  fail("PF2E NPC Forge 1.1.2+ source is required. Set PF2E_NPC_FORGE_SOURCE to the source checkout.");
}

const result = spawnSync(
  process.execPath,
  ["--test"],
  {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, PF2E_NPC_FORGE_SOURCE: npcForgeSource }
  }
);
if (result.error) throw result.error;
if ((result.status ?? 1) !== 0) process.exit(result.status ?? 1);

console.log(`Release check passed for ${manifest.id} ${manifest.version}.`);
