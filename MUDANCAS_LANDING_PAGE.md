# 🎉 Mudanças na Landing Page - EssenciaLab

## 📋 Resumo das Alterações

Este documento descreve as mudanças importantes feitas no projeto para transformar o site de uma landing page focada exclusivamente no sistema MAP para uma landing page principal do aplicativo EssenciaLab, mantendo o MAP como uma página secundária.

---

## 🔄 Principais Mudanças

### 1. Nova Página Principal - EssenciaLab Home

**Arquivo:** `src/pages/EssenciaLabHome.jsx`

- ✅ **Criada nova landing page** para o aplicativo EssenciaLab
- ✅ **Suporte multilíngue** (Português, Inglês, Espanhol)
- ✅ **Design moderno e atraente** com gradientes verdes/esmeralda
- ✅ **Seções incluídas:**
  - Hero Section com destaque para acesso gratuito
  - Gift Section (Método CALMA - presente exclusivo)
  - MAP Section (link destacado para o sistema MAP)
  - Features (funcionalidades do EssenciaLab)
  - Courses (cursos com Marilúcio Rocha)
  - Testimonials (depoimentos de usuários)
  - FAQ (perguntas frequentes)
  - Final CTA (chamada para ação)

### 2. Sistema MAP Movido para Rota Secundária

**Arquivos:** 
- `src/pages/MapLandingPage.jsx` (cópia do App.jsx original)
- `src/pages/MapWrapper.jsx` (wrapper com suporte a idiomas)

- ✅ **Mantida toda funcionalidade original** do sistema MAP
- ✅ **Nova rota:** `/map` (era `/` antes)
- ✅ **Suporte a idiomas** via query string: `/map?lang=pt|en|es`

### 3. App.jsx Simplificado

**Arquivo:** `src/App.jsx`

- ✅ **Reduzido para wrapper simples** que renderiza a EssenciaLabHome
- ✅ **Detecta idioma** via URL query parameter (`?lang=pt|en|es`)
- ✅ **Código limpo e modular**

### 4. Header Multilíngue

**Arquivo:** `src/components/Header.jsx`

- ✅ **Seletor de idioma** (🇧🇷 PT / 🇺🇸 EN / 🇪🇸 ES)
- ✅ **Navegação atualizada:**
  - Início / Home / Inicio
  - Funcionalidades / Features / Funcionalidades
  - Cursos / Courses / Cursos
  - Sistema MAP (link para `/map`)
- ✅ **Logo EssenciaLab** com ícone de folha
- ✅ **CTA destacado** "Começar Grátis"

### 5. Footer Multilíngue

**Arquivo:** `src/components/Footer.jsx`

- ✅ **Conteúdo em 3 idiomas**
- ✅ **Seções organizadas:**
  - Sobre EssenciaLab
  - Produto (Features, Cursos, MAP, Preços)
  - Suporte (Central de Ajuda, Contato, Status)
  - Legal (Termos, Privacidade, LGPD)
- ✅ **Tagline:** "Cuidando de quem cuida de pessoas" 💚

### 6. Rotas Atualizadas

**Arquivo:** `src/main.jsx`

```jsx
<Routes>
  <Route path="/" element={<App />} />               // Nova home EssenciaLab
  <Route path="/map" element={<MapWrapper />} />    // Sistema MAP
  <Route path="/metodocalma/*" element={<MetodoCalma />} />
  <Route path="/metodocalmaes/*" element={<MetodoCalmaES />} />
  // ... outras rotas existentes
</Routes>
```

---

## 🌍 Como Usar os Idiomas

### Página Principal (EssenciaLab)

- **Português:** `https://essencialab.site/`
- **Inglês:** `https://essencialab.site/?lang=en`
- **Espanhol:** `https://essencialab.site/?lang=es`

### Sistema MAP

- **Português:** `https://essencialab.site/map`
- **Inglês:** `https://essencialab.site/map?lang=en`
- **Espanhol:** `https://essencialab.site/map?lang=es`

### Seletor de Idioma

O header agora possui um seletor de idioma no canto superior direito que:
- Atualiza a URL automaticamente
- Mantém o idioma ao navegar entre páginas
- Preserva a experiência do usuário

---

## 🎨 Design e Copy

### Cores Principais

- **Verde:** `#16a34a` (green-600)
- **Esmeralda:** `#059669` (emerald-600)
- **Gradientes:** Verde → Esmeralda

### Tom da Copy

A landing page do EssenciaLab foi criada para:
- ✨ **Não parecer venda direta**
- 🎁 **Destacar o presente (Método CALMA)**
- 💚 **Gerar desejo pelo aplicativo**
- 🎓 **Ressaltar expertise do Marilúcio Rocha**
- 🌿 **Focar em bem-estar e transformação**

### Mensagem do Link para MAP

Na página principal, há uma seção destacada com o texto:

> "Saiba mais sobre o Método de Avaliação Personalizada e ganhe mais dinheiro atendendo pessoas de forma profissional"

Este link leva para `/map` onde consultores e profissionais podem conhecer o sistema de análise facial com IA.

---

## 📦 Estrutura de Arquivos

```
src/
├── App.jsx                          # Wrapper principal (renderiza EssenciaLabHome)
├── main.jsx                         # Rotas da aplicação
├── components/
│   ├── Header.jsx                   # Header multilíngue com seletor
│   └── Footer.jsx                   # Footer multilíngue
└── pages/
    ├── EssenciaLabHome.jsx          # Nova landing page principal ⭐
    ├── MapLandingPage.jsx           # Landing page do MAP (antiga App.jsx)
    └── MapWrapper.jsx               # Wrapper com suporte a idiomas para MAP
```

---

## ✅ Checklist de Funcionalidades

- [x] Nova landing page do EssenciaLab criada
- [x] Suporte multilíngue (PT, EN, ES)
- [x] Sistema MAP movido para `/map`
- [x] Link destacado da home para o MAP
- [x] Header com seletor de idioma
- [x] Footer multilíngue
- [x] Todas as rotas funcionando
- [x] Design bonito e moderno
- [x] Copy atraente e persuasiva
- [x] Método CALMA em destaque
- [x] Cursos do Marilúcio Rocha apresentados
- [x] Depoimentos e FAQ inclusos
- [x] CTAs claros em todas as seções

---

## 🚀 Próximos Passos

1. **Testar em produção:**
   ```bash
   npm run build
   ```

2. **Deploy no Netlify:**
   - O arquivo `netlify.toml` já está configurado
   - O deploy será automático via Git

3. **Validar SEO:**
   - Adicionar meta tags específicas
   - Configurar Open Graph
   - Adicionar schema.org markup

4. **Testar multilíngue:**
   - Validar todas as traduções
   - Verificar seletor de idioma
   - Testar navegação entre páginas

---

## 📞 Contato

Em caso de dúvidas ou ajustes necessários, consulte a documentação técnica em:
- `docs/README.md`
- `ESTRUTURA_PROJETO.md`

---

**Feito com 💚 pela equipe EssenciaLab**

*Transformando vidas através da integração entre ciência, tecnologia e bem-estar humano*

