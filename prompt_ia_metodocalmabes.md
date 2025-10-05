# PROMPT COMPLETO: Criar Landing Page "Método CALMA# ES" - /metodocalmabes

## 🎯 OBJETIVO
Criar uma versão em espanhol da landing page `/metodocalmab` (português) para o mercado latino-americano com a rota `/metodocalmabes`, incluindo todas as adaptações culturais, linguísticas e técnicas necessárias.

---

## 📋 TAREFAS PRINCIPAIS

### 1️⃣ CRIAR ARQUIVO DA LANDING PAGE
- **Rota:** `/metodocalmabes`
- **Base:** Usar a estrutura da página `/metodocalmab` (portuguesa)
- **Idioma:** Espanhol neutro (não mexicano específico, nem argentino - universal para toda LATAM)

---

### 2️⃣ ADAPTAÇÕES DE CONTEÚDO - COPY EM ESPANHOL

#### **A) HEADLINE PRINCIPAL**
❌ **NÃO traduzir literalmente:** "Você Acorda de Madrugada com o Coração Disparado, Achando que Vai Morrer?"

✅ **USAR versão suavizada:**
```
¿Te Despiertas en la Madrugada con Ansiedad y No Puedes Volver a Dormir?
Un protocolo natural desarrollado por naturópata para ayudar a calmar crisis de ansiedad nocturnas y mejorar la calidad del sueño
```

**Motivo:** Culturas latinas preferem tom menos alarmista/dramático na headline inicial.

---

#### **B) ESCASSEZ/URGÊNCIA**
❌ **REMOVER:** Data fixa "até 15/10/2025" e contador de tempo

✅ **USAR:** Escassez baseada em quantidade limitada
```html
⚡ OFERTA ESPECIAL DE LANZAMIENTO

🔥 Últimas 47 unidades disponibles con el Kit de Audios Neuroacústicos GRATIS

[Barra de progresso visual mostrando 47/100 vendidos]

🚀 QUIERO MI KIT COMPLETO AHORA
```

**Implementação técnica:**
- Criar um contador visual de unidades restantes
- Pode ser fixo em "47 unidades" ou usar JavaScript para decrementar aleatoriamente (de 47 até ~20)
- Sem contador de tempo/relógio

---

#### **C) DEPOIMENTOS - ADAPTAÇÃO CRÍTICA**
❌ **REMOVER:** Cidades brasileiras e sobrenomes completos

✅ **FORMATO:**
```
MR
Marina R.
Enfermera
★★★★★
"Amigos, necesito compartir esto con ustedes. Trabajo en turno nocturno y cuando llegaba a casa a las 7h no conseguía desconectar. Me quedaba hasta el mediodía despierta, ansiosa, pensando en los pacientes. Comencé a usar la técnica de la ventana de preocupación hace 2 semanas. Ahora consigo dormir en 20 minutos. Cambió mi vida profesional."
```

**Aplicar para todos os 4 depoimentos:**
1. Marina R. - Enfermera
2. Rafael S. - Desarrollador  
3. Paula M. - Psicóloga
4. Dr. Carlos A. - Cardiólogo

**Ajustes linguísticos nos textos:**
- "Pessoal" → "Amigos"
- "Cara" → "Increíble" ou remover
- "Vocês" → "Ustedes"
- "Ficava" → "Me quedaba"
- Manter naturalidade coloquial em espanhol

---

#### **D) PROTOCOLO CALMA# - EXPLICAÇÃO DO ACRÔNIMO**
⚠️ **PROBLEMA ATUAL:** A sigla CALMA# não está explicada na copy original

✅ **ADICIONAR** após o título "Protocolo CALMA#" uma caixa visual:

```html
<div class="calma-acronym-box">
  <h3>¿Qué significa CALMA#?</h3>
  <ul class="acronym-list">
    <li><strong>C</strong>ontrol de la Respiración</li>
    <li><strong>A</strong>nclaje Sensorial</li>
    <li><strong>L</strong>iberación de Pensamientos</li>
    <li><strong>M</strong>indfulness Nocturno</li>
    <li><strong>A</strong>cción Inmediata</li>
    <li><strong>#</strong> Protocolo Científicamente Fundamentado</li>
  </ul>
</div>
```

**Estilizar** com destaque visual (borda, ícone, background suave)

---

#### **E) SEÇÃO "QUEM CRIOU ESTE MÉTODO"**
✅ **ADICIONAR** após a história pessoal do Dr. Marilúcio:

```
Después de ayudar a cientos de pacientes en Brasil con este protocolo, 
decidí traducir todo el contenido al español para que millones de 
personas en toda Latinoamérica puedan tener acceso a esta solución 
natural y científicamente respaldada.
```

**Posição:** Logo após o parágrafo "Ajudar pessoas é melhor ainda - essa é minha missão!"

---

#### **F) GARANTIA - REFORÇO**
✅ **SUBSTITUIR** o texto atual por versão mais enfática:

```html
🛡️ GARANTÍA INCONDICIONAL DE 14 DÍAS

Si no ves mejoras significativas en tu ansiedad nocturna, 
devolvemos el 100% de tu inversión.

✓ Sin preguntas incómodas
✓ Sin complicaciones  
✓ Sin letra pequeña

Tu satisfacción está 100% garantizada.
```

**Motivo:** Público LATAM tem maior desconfiança com produtos digitais internacionais

---

#### **G) CALLS-TO-ACTION (CTAs)**
✅ **TRADUZIR todos os botões:**

Opção 1 (Racional):
```
🚀 QUIERO MI KIT COMPLETO AHORA
```

Opção 2 (Emocional - **RECOMENDADA**):
```
✅ SÍ, QUIERO CALMAR MI ANSIEDAD HOY
```

**Usar a mesma versão em TODOS os botões** para consistência

---

#### **H) PERGUNTAS FREQUENTES (FAQ)**
✅ **Traduzir e adaptar** culturalmente:

Exemplo de ajuste:
```
❓ ¿Funciona realmente o es solo otro producto digital más?

Entiendo tu escepticismo - hay muchos productos sin fundamento en internet. 
Este protocolo está basado en técnicas de CBT-I (Terapia Cognitivo-Conductual 
para el Insomnio), mindfulness y neuroacústica. Fue desarrollado por un 
naturópata con 15 años de experiencia clínica.

Además, ofrecemos garantía de 14 días. Si no funciona para ti, devolvemos 
tu dinero sin hacer preguntas.
```

---

#### **I) BÔNUS - TÍTULOS E DESCRIÇÕES**
✅ **Traduzir mantendo impacto:**

**Bônus Principal:**
```
🎧 Kit de Audios Neuroacústicos
5 audios poderosos que combinan frecuencias específicas con 
mensajes subliminales a -45db que hablan directamente a tu 
subconsciente, generando creencias positivas y transformando 
tu vida en cuestión de pocos días

✓ 🌙 Inducción de Sueño Profundo
✓ 😰 Alivio para Crisis de Ansiedad  
✓ 🧘 Meditación Nocturna Guiada
✓ 🎯 Foco Mental y Concentración
✓ ⚡ Energía y Vitalidad Renovada
```

**Outros bônus:**
- Fichas para Pensamentos Intrusivos → **Hojas de Trabajo para Pensamientos Intrusivos**
- Guia Visual do Ciclo do Pânico → **Guía Visual del Ciclo del Pánico**
- Trilhas Rápidas de Alívio → **Técnicas Rápidas de Alivio**
- Escalas de Monitoramento → **Escalas de Seguimiento**

---

### 3️⃣ IMPLEMENTAÇÃO DO SCRIPT DE PREÇOS

#### **A) ATUALIZAR O ARQUIVO `price-localizer.js`**

**Mudanças necessárias:**

1. **Alterar caminho de ativação:**
```javascript
// LINHA 3 - ALTERAR DE:
if (!location.pathname.includes('/metodocalmaes')) return;

// PARA:
if (!location.pathname.includes('/metodocalmabes')) return;
```

2. **Alterar preço base de R$ 19,90 para R$ 39,90:**
```javascript
// LINHA 5 - ALTERAR DE:
const BASE_BRL = 19.90;

// PARA:
const BASE_BRL = 39.90;
```

3. **Manter todos os países e taxas de câmbio** já configurados no arquivo:
   - MX (México) - MXN
   - CO (Colômbia) - COP  
   - PE (Peru) - PEN
   - UY (Uruguai) - UYU
   - ES (Espanha) - EUR
   - Outros → USD (padrão)

---

#### **B) ADICIONAR ATRIBUTOS `data-price-localize` NO HTML**

✅ **Em TODOS os lugares onde aparece o preço**, adicionar:

```html
<!-- SEÇÃO DE OFERTA PRINCIPAL -->
<div id="offer-section">
  <h3>💡 Inversión de Lanzamiento</h3>
  <p class="price-main">
    <span data-price-localize data-base-brl="39.90">USD $5.99</span>
  </p>
  <p class="price-subtitle">Pago único • Acceso inmediato • Sin mensualidades</p>
</div>

<!-- RESUMO DA OFERTA -->
<p>
  Inversión de Lanzamiento:
  <span data-price-localize data-base-brl="39.90">USD $5.99</span>
</p>

<!-- BOTÕES (se houver preço visível) -->
<button>
  QUIERO MI KIT AHORA POR 
  <span data-price-localize data-base-brl="39.90">USD $5.99</span>
</button>
```

**IMPORTANTE:** O script converterá automaticamente para:
- 🇲🇽 México: $135.66 MXN  
- 🇨🇴 Colômbia: $32.718 COP
- 🇵🇪 Peru: $29.53 PEN
- 🇺🇾 Uruguai: $299.25 UYU
- 🇪🇸 Espanha: €7.18 EUR
- 🌎 Outros: USD $5.99

---

#### **C) INCLUIR O SCRIPT NO HTML**

✅ **Adicionar antes do fechamento do `</body>`:**

```html
<!-- Script de localização de preços -->
<script src="/js/price-localizer.js"></script>
```

**OU se estiver em pasta diferente:**
```html
<script src="/public/js/price-localizer.js"></script>
```

---

### 4️⃣ AJUSTES TÉCNICOS E SEO

#### **A) META TAGS (Head do HTML)**
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Protocolo SOS Ansiedad Natural - Método CALMA#</title>
<meta name="description" content="Protocolo natural para calmar crisis de ansiedad nocturnas y mejorar el sueño. Desarrollado por naturópata con 15 años de experiencia.">
<meta name="keywords" content="ansiedad nocturna, insomnio, crisis de pánico, método natural, audios neuroacústicos">
<meta property="og:title" content="Método CALMA# - Protocolo SOS Ansiedad">
<meta property="og:description" content="¿Te despiertas en la madrugada con ansiedad? Descubre el protocolo natural que ya ayudó a cientos de personas.">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_ES">
<link rel="canonical" href="https://essencialab.site/metodocalmabes">
```

---

#### **B) WHATSAPP / SUPORTE**

⚠️ **DECISÃO NECESSÁRIA:** Como o número de WhatsApp é brasileiro (+55), escolha:

**Opção 1 (Recomendada):** Manter WhatsApp mas avisar claramente
```html
📱 Soporte por WhatsApp
<a href="https://wa.me/5543..." target="_blank">
  Hablar Ahora
</a>
<p class="whatsapp-note">
  📞 Número de Brasil (+55). Respondemos en español en hasta 24 horas.
</p>
```

**Opção 2:** Substituir por suporte email
```html
📧 Soporte Especializado
<a href="mailto:soporte@essencialab.site">
  soporte@essencialab.site
</a>
<p>Respondemos en hasta 24 horas</p>
```

---

### 5️⃣ TABELA DE TRADUÇÕES - TERMOS IMPORTANTES

Use estas traduções consistentemente em toda a página:

| Português | Español (LATAM) |
|-----------|-----------------|
| Oferta especial | Oferta especial |
| Você | Tú / Usted (use "tú" informal) |
| Pessoal | Amigos |
| Cara | Increíble / Amigo |
| Fichas | Hojas de trabajo |
| Roteiro | Guion / Protocolo |
| Escala | Escala |
| Cartões | Tarjetas |
| Rotina | Rutina |
| Cronograma | Cronograma |
| Protocolo | Protocolo |
| Checklist | Lista de verificación |
| Kit | Kit |
| Bônus | Bonus / Bonificaciones |
| Grátis | GRATIS |
| Investimento | Inversión |
| Quero | Quiero |
| Acesso imediato | Acceso inmediato |
| Garantia | Garantía |

---

### 6️⃣ ESTRUTURA DE ARQUIVOS

```
/
├── metodocalmabes/
│   └── index.html (ou .tsx/.jsx se for React/Next.js)
│
├── public/
│   └── js/
│       └── price-localizer.js (ATUALIZADO)
│
└── (manter estrutura CSS/assets igual à versão PT)
```

---

### 7️⃣ CHECKLIST FINAL DE VALIDAÇÃO

Após criar a página, VERIFICAR:

- [ ] Rota `/metodocalmabes` funciona corretamente
- [ ] Script `price-localizer.js` atualizado (BASE_BRL = 39.90 e pathname 'metodocalmabes')
- [ ] Todos os preços têm `data-price-localize`
- [ ] Headline suavizada (menos alarmista)
- [ ] Escassez por quantidade (não por data/tempo)
- [ ] Depoimentos sem cidade (só nome + profissão)
- [ ] Acrônimo CALMA# explicado visualmente
- [ ] Frase conectando Dr. Marilúcio com público LATAM
- [ ] Garantia reforçada com texto enfático
- [ ] CTAs em espanhol consistentes
- [ ] Meta tags SEO em espanhol
- [ ] WhatsApp com aviso de número brasileiro OU email alternativo
- [ ] TODO o conteúdo em espanhol neutro (não específico MX/AR)
- [ ] Teste manual: acessar de diferentes países (usar `?force=MX`, `?force=CO`, etc.)

---

### 8️⃣ EXEMPLO DE TESTE

Para testar conversão de moeda sem VPN:

```
https://essencialab.site/metodocalmabes?force=MX
https://essencialab.site/metodocalmabes?force=CO  
https://essencialab.site/metodocalmabes?force=ES
https://essencialab.site/metodocalmabes?force=PE
```

O script detectará o parâmetro `force` e mostrará o preço na moeda correspondente.

---

## 🎨 OBSERVAÇÕES FINAIS

1. **Tom de voz:** Mantenha amigável mas profissional. Espanhol neutro sem gírias regionais.

2. **Credibilidade:** Reforce a formação do Dr. Marilúcio e os 15 anos de experiência em TODAS as seções principais.

3. **Diferencial único:** Os **Áudios Neuroacústicos** são o grande diferencial - destaque isso mais de uma vez na copy.

4. **Mobile-first:** Garanta que contadores, boxes explicativos e preços funcionem perfeitamente em mobile.

5. **Velocidade:** Otimize imagens (WebP) e minimize CSS/JS para carregamento rápido em países com internet mais lenta.

---

## ✅ PRONTO PARA EXECUÇÃO

Este prompt contém todas as informações necessárias para criar a landing page `/metodocalmabes` otimizada para o mercado latino-americano com conversão automática de preços e adaptações culturais validadas.

**Preço final configurado:** 
- Base: R$ 39,90 BRL
- LATAM: USD $5,99 (convertido automaticamente por país)

**Países suportados:** México, Colômbia, Peru, Uruguai, Espanha + fallback USD para demais países.
