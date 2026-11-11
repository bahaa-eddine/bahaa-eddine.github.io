/**
 * Post-build fix for static hosting (GitHub Pages).
 *
 * Next.js 16's static export writes route-segment prefetch files in nested
 * folders, e.g.  out/books/__next.books/__PAGE__.txt
 * but the client router requests the flat name  out/books/__next.books.__PAGE__.txt
 * A Next.js server maps one to the other; a plain static host returns 404.
 * This script adds a flat copy next to every nested segment file.
 */
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = new URL("../out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
if (!existsSync(OUT)) {
  console.error("fix-export: ./out not found — run `next build` first.");
  process.exit(1);
}

let copied = 0;

/** Copy every file under a `__next.*` folder to a dot-joined flat name in `parentDir`. */
function flatten(parentDir, segDir, prefix) {
  for (const name of readdirSync(segDir)) {
    const p = join(segDir, name);
    const flat = `${prefix}.${name}`;
    if (statSync(p).isDirectory()) {
      flatten(parentDir, p, flat);
    } else {
      const target = join(parentDir, flat);
      if (!existsSync(target)) {
        copyFileSync(p, target);
        copied++;
      }
    }
  }
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(dir, p, name);
    else if (name !== "_next") walk(p);
  }
}

walk(OUT);
console.log(`fix-export: added ${copied} flat prefetch file(s) for static hosting.`);
