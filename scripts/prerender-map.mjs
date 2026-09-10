// Pré-renderiza a landing /map dentro de dist/map.html depois do `vite build`.
// Motivo: o HTML sai pronto (LCP sem esperar o JS) e o scraper da Meta vê o conteúdo.
import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = process.argv[2] || path.join(root, "dist");
const file = path.join(outDir, "map.html");

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { render } = await vite.ssrLoadModule("/src/map-ssr.tsx");
  const html = render("/map");
  const marker = '<div id="root"></div>';
  const page = await readFile(file, "utf8");
  if (!page.includes(marker)) throw new Error(`marker ${marker} not found in ${file}`);
  await writeFile(file, page.replace(marker, `<div id="root">${html}</div>`));
  console.log(`prerender: ${path.relative(root, file)} (${(html.length / 1024).toFixed(1)} KB de HTML)`);
} finally {
  await vite.close();
}
