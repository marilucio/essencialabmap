// Pré-renderiza páginas dentro do dist depois do `vite build`:
// - a landing /map (dist/map.html) e a tela 1 do funil (dist/map-comecar.html);
// - as páginas públicas da raiz listadas em scripts/seo-routes.mjs, cada uma em um
//   HTML próprio (dist/home.html, dist/contato.html…) com título, descrição,
//   canonical e dados estruturados da rota;
// - o dist/sitemap.xml.
// Motivo: o HTML sai pronto (LCP sem esperar o JS) e o Google e o scraper da Meta
// veem o conteúdo sem executar JavaScript.
import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  SITE,
  ROUTES,
  EXTRA_SITEMAP_URLS,
  organizationLd,
  homeAppLd,
  mapAppLd,
  faqLd,
} from "./seo-routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = process.argv[2] || path.join(root, "dist");
const ROOT_MARKER = '<div id="root"></div>';
const NOINDEX_SHELL = /\s*<!-- seo:shell-noindex -->\s*<meta name="robots" content="noindex" \/>/;

const MAP_PAGES = [
  { html: "map.html", ssr: "/src/map-ssr.tsx", url: "/map" },
  { html: "map-comecar.html", ssr: "/src/funil-ssr.tsx", url: "/map/comecar" },
];

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const ldScript = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

// Troca o content de uma meta existente; falha o build se a tag não existir,
// para nunca publicar uma página com o metadado da home por engano.
function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*("\\s*\\/?>)`, "s");
  if (!re.test(html)) throw new Error(`meta ${attr}="${key}" não encontrada no index.html`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
}

function injectRoot(html, body, file) {
  if (!html.includes(ROOT_MARKER)) throw new Error(`marker ${ROOT_MARKER} not found in ${file}`);
  return html.replace(ROOT_MARKER, `<div id="root">${body}</div>`);
}

function addToHead(html, tags) {
  return html.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
}

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
  // As páginas da raiz importam de "react-router-dom"; no SSR as duas importações
  // precisam apontar para a mesma cópia do router (senão o contexto não é achado).
  resolve: { alias: { "react-router-dom": "react-router" } },
  ssr: { noExternal: ["react-router"] },
});

try {
  // 1) /map e funil
  const { faq: mapFaq } = await vite.ssrLoadModule("/src/pages/map/content.ts");
  for (const page of MAP_PAGES) {
    const file = path.join(outDir, page.html);
    const { render } = await vite.ssrLoadModule(page.ssr);
    let html = injectRoot(await readFile(file, "utf8"), render(page.url), file);
    if (page.url === "/map") html = addToHead(html, [ldScript(mapAppLd), ldScript(faqLd(mapFaq.items))]);
    await writeFile(file, html);
    console.log(`prerender: ${path.relative(root, file)}`);
  }

  // 2) Páginas públicas da raiz, a partir do index.html do build
  const shell = await readFile(path.join(outDir, "index.html"), "utf8");
  if (!NOINDEX_SHELL.test(shell)) throw new Error("marcador seo:shell-noindex não encontrado no index.html");
  const { render } = await vite.ssrLoadModule("/src/pages-ssr.tsx");
  const { translations } = await vite.ssrLoadModule("/src/pages/essencialab/translations.ts");
  const homeFaq = translations.pt.faq.questions.map(({ question, answer }) => ({ q: question, a: answer }));

  for (const route of ROUTES) {
    const canonical = `${SITE}${route.url}`;
    let html = shell.replace(NOINDEX_SHELL, "");
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(route.title)}</title>`);
    html = setMeta(html, "name", "description", route.description);
    html = setMeta(html, "property", "og:url", canonical);
    if (route.url !== "/") {
      html = setMeta(html, "property", "og:title", route.title);
      html = setMeta(html, "property", "og:description", route.description);
      html = setMeta(html, "name", "twitter:title", route.title);
      html = setMeta(html, "name", "twitter:description", route.description);
    }
    const head = [`<link rel="canonical" href="${canonical}" />`];
    if (!route.index) head.push('<meta name="robots" content="noindex" />');
    if (route.url === "/") head.push(ldScript(organizationLd), ldScript(homeAppLd), ldScript(faqLd(homeFaq)));
    html = addToHead(html, head);
    const file = path.join(outDir, route.out);
    await writeFile(file, injectRoot(html, render(route.url), file));
    console.log(`prerender: ${path.relative(root, file)}${route.index ? "" : " (noindex)"}`);
  }

  // 3) Sitemap
  const today = new Date().toISOString().slice(0, 10);
  const urls = [...ROUTES.filter((r) => r.index).map((r) => r.url), ...EXTRA_SITEMAP_URLS];
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
    "\n</urlset>\n";
  await writeFile(path.join(outDir, "sitemap.xml"), xml);
  console.log(`sitemap: ${urls.length} URLs`);
} finally {
  await vite.close();
}
