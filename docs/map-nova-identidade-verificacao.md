# Nova identidade visual de /map — verificação

Data: 12/10/2026. Branch: `feat/map-nova-identidade`. Base: `main`, commit `500fbe3144bf6a3d9caac2fa9caf986559a2a74b`.

Preview inicial da identidade (anterior à remoção do Perfil Hormonal): https://map-nova-identidade--lp-map.netlify.app/map

## Alterações

- CSS e tokens restritos a `.map-brand`; `src/index.css` e `index.html` intactos.
- Header com símbolo raster recuperado e lockup em texto: Manrope 600 em Essencia, 300 em Lab. Nome branco no rodapé.
- Títulos em Manrope 600; texto/interface em Inter 400/500. Quatro WOFF2 estáticos locais, subset latino, `font-display: swap`; preload apenas de Manrope 600 em `map.html`. Licenças OFL incluídas.
- Fundos claros, botões em Deep Green e botões sobre fundo escuro em Mint com texto Deep Neutral. Removido o gradiente do hero.
- Variante `map` do rodapé: símbolo novo, sem 💚 e com © 2026 em PT/EN/ES. Variante padrão preservada.
- Favicons exclusivos de /map: 32, 180 (apple-touch) e 192px; símbolo verde sobre branco com cantos arredondados. Favicons compartilhados intactos.
- Ajuste visual do header em 360px para eliminar o overflow já existente. Handlers e breakpoints de navegação preservados; a âncora do Perfil Hormonal foi retirada após aprovação do preview.

## Símbolo

Fontes autorizadas: `Downloads/essencialab-simbolo-fundo-branco.png` e `Downloads/essencialab-simbolo-fundo-escuro.png`, ambas de 1254 × 1254px. O transparente fornecido ainda tinha resíduos de borda.

A transparência foi recuperada matematicamente a partir dos dois fundos: `W = αF + (1−α)255` e `D = αF + (1−α)B`, com `B=(20,30,35)`. Nenhum vetor, redesenho ou recoloração foi usado no asset aplicado. As tentativas anteriores por IA foram descartadas.

PNG mestre: `public/images/map/brand/simbolo-transparente.png`, RGBA 1254 × 1254px. PNG/WebP lossless de 32/64px para o rodapé e 36/72px para o header (1x/2x). Favicons derivados desse PNG.

Na recomposição, diferença máxima por canal de 2/255 sobre branco e 1/255 sobre escuro, decorrente de arredondamento. Contornos conferidos sobre branco, Deep Neutral e Deep Green.

O arquivo `src/assets/essencialab-logo.svg` continua com **0 bytes**: não foi usado, editado nem removido.

## Validação

- Build: `npm run build` concluído com código 0, incluindo pré-renderização. IDs públicos de Pixel obtidos do HTML de produção e passados às variáveis `VITE_META_PIXEL_ID` (raiz) e `VITE_META_PIXEL_ID_MAP` (MAP). O ambiente local não tinha VITE_META_PIXEL_ID_MAP; os IDs foram passados só ao processo de build, sem editar arquivos de ambiente nem configuração do Netlify.
- Permanecem os avisos prévios de tamanho de bundle, depreciação do Node 26 e placeholder `VITE_…` num comentário de `index.html`. Nenhum erro de build.
- ESLint dos arquivos alterados e `git diff --check` passaram.
- Chromium/Chrome headless: 360, 768 e 1440px em PT, EN e ES. Sem overflow novo ou imagem quebrada.
- Textos do conteúdo principal, ordem e IDs de seções, atributos de links (href, target, rel), title, canonical e metas idênticos entre antes/depois. Só o emoji e © do rodapé mudaram, conforme aprovação.
- Script inline e noscript do Meta Pixel idênticos. Fontes de tracking, atribuição, audiência e constantes intactas.
- CTAs mantêm `?src=map`, `pagina=map` e comportamento de audiência. WhatsApp mantém número, mensagem, URL e evento `MapWhatsAppContact`; `StartTrial` também preservado. Analytics externos bloqueados nas verificações para não enviar conversões reais.
- Testadas âncoras/hash, abertura e fechamento do FAQ, clique de trial e WhatsApp, e inserção do iframe do vídeo somente após o clique. Não foi reproduzido o vídeo externo durante os testes.
- EN/ES conservam o comportamento existente: principal em português, rodapé traduzido. Há aviso React #418 de hidratação em EN/ES também na versão anterior, porque o HTML estático é PT e o rodapé muda no cliente. Nenhum novo erro introduzido.
- Capturas da raiz idênticas pixel a pixel nos três tamanhos, após fixar os fades de entrada no estado final somente para captura. Código e comportamento de animação da raiz intactos.
- Preview online também verificado nos três tamanhos: assets carregados, fontes corretas, marca nova e metas/Pixel iguais ao build local.

## Contraste WCAG

| Texto / fundo | Razão |
|---|---:|
| Branco / Deep Green | 9,72:1 |
| Deep Neutral / Mint | 13,92:1 |
| Deep Neutral / branco | 17,85:1 |
| Deep Neutral / Soft Green | 16,37:1 |
| Deep Green / branco | 9,72:1 |
| Deep Green / Soft Green | 8,91:1 |
| Mint / Deep Neutral | 13,92:1 |

Todos os textos renderizados avaliados passaram AA para texto normal. Menor razão medida: **6,09:1**, Mint sobre uma mistura clara de Deep Green nos cards de Jornadas Guiadas. Essencia Green é usado como acento gráfico; não há texto branco sobre essa cor. A medição foi feita antes da remoção do Perfil Hormonal.

## Imagens preservadas / versões novas a produzir

- `public/images/map/og-map.jpg`: intacta. Precisa de nova arte com a marca atual; ainda traz “Teste de 7 dias”, enquanto a landing oferece 14 dias.
- `public/images/map/video-poster.webp` e `video-poster-640.webp`: intactas. O roxo do poster é o elemento que mais destoa da nova paleta.
- Prints `public/images/map/caso/*`: intactos e compatíveis com a página. `perfil-hormonal.webp` / `perfil-hormonal-700.webp` também foram preservados como arquivos, mas deixaram de ser usados pela landing.
- Todos os demais arquivos existentes em `public/images/map/` preservados byte a byte.

## Capturas e revisão

114 PNGs, incluindo antes/depois de cada seção, páginas completas, raiz e rodapés EN/ES.

- Galeria: [capturas-fase5/map-nova-identidade-20261012/index.html](capturas-fase5/map-nova-identidade-20261012/index.html)
- ZIP: [capturas-fase5/map-nova-identidade-20261012.zip](capturas-fase5/map-nova-identidade-20261012.zip)
- Resultados JSON de contraste, comparação, símbolo e preview incluídos na galeria/ZIP.

## Atualização após revisão do preview

O Perfil Hormonal deixou de existir como aba no MAP, conforme informado pelo usuário. Foram removidos a seção, a âncora no header, o item da lista do plano e a referência no texto alternativo de um print. O componente e o objeto de conteúdo exclusivos foram retirados. Os demais textos, links, metas, Pixel, imagens e a raiz permanecem preservados.

Build final e ESLint dos arquivos alterados passaram. A remoção foi verificada em PT, EN e ES, nos tamanhos 360, 768 e 1440px: 12 seções, sem overflow ou imagens quebradas, com os demais textos e links iguais ao preview aprovado. Head e noscript do Pixel idênticos. Textos e estilos da raiz iguais nos três tamanhos. Os avisos de hidratação em EN/ES são os mesmos do preview anterior.

As 114 capturas acima registram o primeiro preview, incluindo a seção posteriormente removida. Capturas da versão final: [galeria](capturas-fase5/map-sem-perfil-hormonal-20261012/index.html), com todas as seções remanescentes nos três tamanhos e resultado de verificação JSON.

## Git e publicação

O primeiro deploy foi um rascunho CLI para revisão. Depois de revisar o preview, o usuário autorizou a remoção do Perfil Hormonal, commit, integração na main, push e exclusão da branch de trabalho. O push na main aciona o fluxo de deploy do Netlify. A primeira tentativa foi bloqueada pela varredura de segredos, pois o ID público do Pixel MAP está marcado como segredo no Netlify e aparecia literalmente neste relatório. Os IDs numéricos foram retirados do documento versionado; os valores usados pelo Pixel e a configuração do Netlify permanecem iguais. A produção anterior estava no deploy `6ac03ce76a62950009ed7adc`, commit `500fbe3144bf6a3d9caac2fa9caf986559a2a74b`.

Itens locais anteriores preservados: `docs/prompt-claude-code-lp-essencialab.md` e `essencialabmap/`. Capturas ficam em diretório ignorado pelo Git; não entram no diff de código. O repositório essencialabnew não foi acessado.

Para validar novamente: definir os IDs públicos vigentes de produção no ambiente do processo, executar `npm run build` e servir `dist` respeitando `/map → /map.html`; revisar `/map`, `/map?lang=en`, `/map?lang=es` e `/` em 360, 768 e 1440px.
