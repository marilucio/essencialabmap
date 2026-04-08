# Especificação de Design (desktop-first) — /renal e /renal/obrigado

## Global Styles (tokens)
- Background: #0B0F14 (base) e #0F172A (seções alternadas)
- Texto primário: #E5E7EB; secundário: #9CA3AF
- Cor de destaque (CTA): #22C55E (verde WhatsApp) | hover: #16A34A
- Tipografia (escala): H1 44–56px, H2 28–36px, H3 20–24px, body 16–18px, small 12–14px
- Botões:
  - Primário: fundo verde, texto branco, radius 12px, sombra leve; hover escurece; focus ring visível
  - Secundário: borda cinza, fundo transparente
- Links: sublinhado no hover; contraste AA
- Espaçamento: base 8px; container máx. 1120px; gutters 24–32px
- Componentes: cards com radius 16px; borda 1px #1F2937; sombra suave

## Layout e responsividade
- Sistema: Grid (12 colunas) + Flexbox para alinhamentos.
- Desktop-first: seções em 2 colunas onde fizer sentido (copy + prova); em <= 768px empilhar.
- CTA persistente: no desktop, barra fixa inferior discreta (altura 64–72px) com CTA e microcopy.

---

## Página 1: Landing “Aula Renal” (/renal)

### Meta Information (SEO)
- Title: "Aula sobre Saúde Renal — Inscreva-se pelo WhatsApp"
- Description: "Participe da aula e entenda os pontos-chave para cuidar da saúde renal. Inscrição rápida via WhatsApp."
- Canonical: /renal
- Open Graph: og:title, og:description, og:type=website, og:image (imagem de destaque), og:url
- Robots: index,follow
- Structured data (quando aplicável): FAQPage para a seção de perguntas frequentes

### Page Structure (stacked sections)
1) Header compacto
2) Hero (conversão)
3) Prova/credibilidade
4) Conteúdo: problema → solução → o que você vai aprender
5) Para quem é / não é
6) FAQ
7) Footer + CTA final

### Sections & Components
**1) Header (topo fixo leve)**
- Logo (esquerda) + link âncora “Conteúdo”, “FAQ” (opcional) + botão “Inscrever no WhatsApp” (direita).
- Comportamento: ao rolar, reduzir altura e manter CTA visível.

**2) Hero de conversão (acima da dobra)**
- H1 (promessa direta): “Aula sobre Saúde Renal: entenda o essencial com clareza”
- Subheadline: “Inscreva-se em 1 clique e receba as instruções no WhatsApp.”
- Bullets de valor (3): “Conteúdo prático”, “Linguagem simples”, “Direto ao ponto”.
- CTA primário: “Quero me inscrever no WhatsApp”
- Microcopy abaixo do CTA: “Você será direcionado(a) para uma conversa no WhatsApp. Sem spam.”
- Elemento visual: foto/ilustração (direita) + selo pequeno de credibilidade (se houver).

**3) Prova e credibilidade (cards)**
- Card “Quem conduz a aula” (nome/credenciais resumidas).
- Card “Por que confiar” (anos de experiência/atendimentos/publicações) — somente se existirem.
- Se houver depoimentos: slider simples de 3–5 citações.

**4) Seção “O que você vai ver na aula”**
- H2 + lista em cards/ícones (4–6 itens).
- Copy objetiva, orientada a benefícios (evitar termos técnicos sem explicação).
- CTA secundário ao final: “Garantir minha inscrição no WhatsApp”.

**5) Seção “Para quem é / Para quem não é”**
- Layout 2 colunas, cada uma com bullets.
- Objetivo: qualificar sem reduzir conversão.

**6) FAQ (accordion)**
- 6–10 perguntas essenciais (duração, acesso, custo/condição, privacidade no WhatsApp, para quem serve, como confirmar inscrição).
- Interação: expand/collapse com animação leve (150–200ms).

**7) Footer + CTA final**
- Repetir CTA principal.
- Links institucionais se existirem (termos, privacidade, contato).

### Tracking + Integrações (pontos na UI)
- No carregamento: disparar evento “view” (GA4/Pixel) e chamar endpoint de lead (sem bloquear render).
- No clique do CTA: 
  1) registrar “cta_click” (tracking)
  2) chamar endpoint /lead-capture (webhook)
  3) abrir WhatsApp (nova aba ou same-tab conforme estratégia)
- Persistir UTMs em localStorage/sessionStorage para uso na página de obrigado.

---

## Página 2: Obrigado (/renal/obrigado)

### Meta Information (SEO)
- Title: "Inscrição quase pronta — Abra o WhatsApp"
- Description: "Clique para falar no WhatsApp e finalizar sua inscrição na aula."
- Canonical: /renal/obrigado
- Robots: noindex,follow (recomendado para evitar indexação de páginas de pós-conversão)

### Page Structure (focused confirmation)
1) Confirmação
2) Próximo passo (WhatsApp)
3) Reforço de valor + FAQ curto

### Sections & Components
**1) Bloco de confirmação (hero curto)**
- Título: “Perfeito — falta só um passo.”
- Texto: “Clique no botão abaixo para abrir o WhatsApp com a mensagem pronta e confirmar sua inscrição.”

**2) CTA principal (WhatsApp)**
- Botão grande: “Abrir WhatsApp e confirmar inscrição”
- Abaixo: campo “Mensagem pronta” em caixa destacada + botão “Copiar mensagem” (fallback quando WhatsApp não abre).

**3) Reforço e suporte**
- Mini bullets: “Você recebe as instruções por lá”, “Resposta o mais rápido possível”.
- FAQ compacto (3–4 perguntas) para remover fricção final.
- Link secundário: “Voltar para a página da aula”.

### Tracking + Integrações (pontos na UI)
- No carregamento: evento “thank_you_view”.
- No clique do CTA: evento “cta_click_whatsapp_thankyou” + chamada /lead-capture se o lead ainda não tiver sido confirmado.
- UTM e click_id herdados da landing (armazenamento de sessão) e anexados ao payload do webhook.