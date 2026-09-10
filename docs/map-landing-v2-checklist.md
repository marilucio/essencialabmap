# Landing `/map` v2 — checklist de revisão (branch `feat/map-landing-v2`)

Fonte: `prompt-reescrita-pagina-map.md`. Nada foi mergeado nem publicado em produção.

## Arquivos

- `map.html` — HTML dedicado da rota `/map` (title, description, OG, Twitter, canonical, Pixel com PageView). Servido pelo redirect `/map -> /map.html` (`public/_redirects` e `netlify.toml`).
- `src/map-main.jsx` — entrada exclusiva do `map.html`: carrega só a landing MAP (bundle 377 KB / 121 KB gzip, contra 1,4 MB do bundle único). Hidrata o HTML pré-renderizado.
- `src/map-ssr.tsx` + `scripts/prerender-map.mjs` — no `npm run build`, o HTML da landing é gerado com `react-dom/server` e injetado em `dist/map.html`. O hero pinta junto com o CSS, sem esperar o JS.
- `src/pages/map/` — `MapLanding.tsx`, `content.ts` (copy), `constants.ts` (URL do teste, WhatsApp, vídeo, preço), `tracking.ts` (evento `StartTrial`), `components/*` (um por bloco).
- `src/pages/MapWrapper.jsx` — passa a renderizar `MapLanding`.
- `src/pages/MapLandingPage.jsx` — removido (página antiga).
- `src/components/Footer.jsx` — prop opcional `legalNotice` (só `/map` usa).
- `src/types/layout.d.ts` — tipos mínimos de Header/Footer para TSX.
- `public/images/map/` — capturas em WebP, foto, poster do vídeo e `og-map.jpg` (1200×630).

## Afirmações removidas da página antiga (sem documentação no repositório)

91% de correlação; 728+ citações; 17.000 imagens; "Validado Nature Medicine" e botão da publicação; 2.400+ / 2.347 profissionais; 1.347 análises esta semana; 94% satisfação; 4.8/5 em 147 reviews; 310% ROI; HIPAA; ISO 27001; auditoria externa anual; AWS/Azure; "256-bit SSL"; os três depoimentos (inclusive o seu e o "sugere condutas eficazes"); grade de nove especialidades; lead magnet "Guia de 7 dias" e formulário com dropdown (webhook n8n `map-lead`); botão "Kit de Materiais"; promessas de percepção (impressionar pacientes, honorários, 90 segundos, 5 minutos, menos exames); FAQ antiga; "comunidade exclusiva de profissionais"; "suporte técnico prioritário".

Se algum desses tiver documento, me avise para reintroduzir.

## [CONFIRMAR] antes de publicar

1. **URL do cadastro do teste** — `src/pages/map/constants.ts` usa `https://essencialab.app/?src=map` (pode ser sobrescrita por `VITE_MAP_TRIAL_URL`). Confirmar a rota real de cadastro no app.
2. **ID do Pixel** — `map.html` usa `1147561227476007` (o único presente no repositório, hoje usado em `/renal`). Confirmar se é o pixel correto para `/map`. Evento de conversão: `StartTrial` (custom) com `{source:'map', placement}`; contato WhatsApp dispara `MapWhatsAppContact`.
3. **Bloco 6, frase final** — "O MAP nasceu da minha própria dificuldade de manter relato, exame e decisão no mesmo lugar ao longo de noventa dias."
4. **Bloco 7 (dados e segurança)** — confirmar cada item contra o código do MAP (não está neste repositório): consentimento antes do envio; token com validade; TLS + RLS; imagens da análise facial não armazenadas; LGPD.
5. **Bloco 9 (preço)** — "Avaliações e retornos ilimitados": confirmar limites reais (cota de análises). R$ 127/mês e R$ 1.270/ano.
6. **FAQ 5** — resposta sobre banco/acesso por conta escrita de forma genérica ("banco de dados gerenciado, acesso separado por conta, políticas no próprio banco"). Ajustar se quiser citar Supabase.
7. **FAQ 6** — atualizar quando o curso em módulos for gravado.
8. **Capturas** — só a Teia Funcional (bloco 2, dúvida 1) é captura crua do MAP (`teia.webp` já existente). Exames, Raciocínio, Delta/Comparação e Perfil Hormonal são recortes dos mockups ilustrativos usados em orbina.com.br/profissionais. Substituir por capturas reais das abas quando tiver: `[CAPTURA: Exames]`, `[CAPTURA: Raciocínio]`, `[CAPTURA: Delta MAP]`, `[CAPTURA: Perfil Hormonal]`.
9. **Foto** — `marilucio-rocha.webp` é a mesma de orbina.com.br/profissionais (`marilucio_consultorio.webp`).
10. **Vídeo** — mantido o atual (`lzwZuZK_5Ao`), agora com facade. Trocar em `constants.ts` quando o vídeo de caso existir.
11. **Idiomas** — a copy nova existe só em português. O seletor de idioma do header continua funcionando para os rótulos do header/footer, mas o corpo da página fica em PT em `?lang=en|es`.
12. **Formulário oculto `guia-essencialab`** em `index.html` (raiz) e a pasta `public/materiais/` não foram tocados: estão fora de `/map`. Podem ser removidos se nada mais os usar.

## Meta tags por rota — decisão

Opções avaliadas:
- **Prerender da Netlify**: recurso legado, fila de crawl, não controla o head por rota sem código extra.
- **Edge Function injetando head**: funciona, mas adiciona runtime em cada request de `/map` e mais um lugar para manter.
- **HTML estático dedicado (escolhido)**: `map.html` como segunda entrada do Vite, com redirect `/map -> /map.html` (200). O scraper recebe o head pronto sem JS, zero runtime, e ainda permitiu uma entrada JS própria (bundle 3,7× menor). Custo: dois `<head>` para manter (raiz e MAP).

## Lighthouse (mobile, simulado, servidor local com gzip)

| | Performance | Acessibilidade | FCP/LCP |
|---|---|---|---|
| Antes (main) | 73 | 92 | 4,4 s |
| Depois, sem prerender | 82 | 98 | 3,6 s |
| Depois, com prerender | 90 | 98 | 2,1 s |

Medir de novo no deploy preview da Netlify (CDN + brotli).

## Verificação local

`vite preview` não aplica os redirects da Netlify; para testar `/map` localmente use o deploy preview ou um servidor que reescreva `/map -> /map.html`.
