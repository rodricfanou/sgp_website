import { execSync, spawn } from "child_process";
import { mkdirSync, writeFileSync, cpSync, existsSync, readdirSync } from "fs";
import { join } from "path";

const OUT = join(import.meta.dirname, "..", ".output", "static");
const CLIENT = join(import.meta.dirname, "..", "dist", "client");
const PROJECT = join(import.meta.dirname, "..");

const routes = ["/", "/about", "/services", "/properties", "/contact"];

console.log("Building...");
execSync("npm run build", { cwd: PROJECT, stdio: "inherit" });

console.log("Starting preview server...");
const server = spawn("npx", ["vite", "preview", "--port", "4174"], {
  cwd: PROJECT,
  stdio: "pipe",
  shell: true,
});

await new Promise((resolve) => setTimeout(resolve, 3000));

console.log("Prerendering pages...");
mkdirSync(OUT, { recursive: true });

for (const route of routes) {
  const url = `http://localhost:4174${route}`;
  console.log(`  Fetching ${url}...`);
  try {
    const res = await fetch(url);
    const html = await res.text();
    const dir = route === "/" ? OUT : join(OUT, route.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
    console.log(`  ✓ ${route}`);
  } catch (e) {
    console.error(`  ✗ ${route}: ${e.message}`);
  }
}

// Copy client assets
console.log("Copying client assets...");
function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const s = join(src, entry.name);
    const d = join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else cpSync(s, d);
  }
}
copyDir(CLIENT, OUT);

// 404.html for SPA fallback (GitHub Pages)
cpSync(join(OUT, "index.html"), join(OUT, "404.html"));

// CNAME for custom domain
writeFileSync(join(OUT, "CNAME"), "www.summitglobalproperty.com\n");

server.kill();
console.log(`\nDone. Output in ${OUT}`);
