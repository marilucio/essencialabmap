// Pré-renderiza as páginas da /map dentro do dist depois do `vite build`:
// a landing (/map → dist/map.html) e a tela 1 do funil (/map/comecar →
// dist/map-comecar.html). Motivo: o HTML sai pronto (LCP sem esperar o JS) e o
// scraper da Meta vê o conteúdo.
import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = process.argv[2] || path.join(root, "dist");

const PAGES = [
  { html: "map.html", ssr: "/src/map-ssr.tsx", url: "/map" },
  { html: "map-comecar.html", ssr: "/src/funil-ssr.tsx", url: "/map/comecar" },
];

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  for (const page of PAGES) {
    const file = path.join(outDir, page.html);
    const { render } = await vite.ssrLoadModule(page.ssr);
    const html = render(page.url);
    const marker = '<div id="root"></div>';
    const source = await readFile(file, "utf8");
    if (!source.includes(marker)) throw new Error(`marker ${marker} not found in ${file}`);
    await writeFile(file, source.replace(marker, `<div id="root">${html}</div>`));
    console.log(`prerender: ${path.relative(root, file)} (${(html.length / 1024).toFixed(1)} KB de HTML)`);
  }
} finally {
  await vite.close();
}
