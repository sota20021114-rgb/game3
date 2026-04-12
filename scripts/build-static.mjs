import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(scriptDir, "..");
const outputFolder = process.argv[2] || "dist";
const outputDir = resolve(rootDir, outputFolder);

const rootFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "manifest.webmanifest",
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const file of rootFiles) {
  cpSync(join(rootDir, file), join(outputDir, file));
}

for (const folder of ["assets"]) {
  const sourceDir = join(rootDir, folder);
  if (existsSync(sourceDir)) {
    cpSync(sourceDir, join(outputDir, folder), { recursive: true });
  }
}

writeFileSync(join(outputDir, ".nojekyll"), "");

console.log(`Static site built at ${outputDir}`);
