# 🌿 EssenciaLab - Landing Page

> **Transformando vidas através da integração entre ciência, tecnologia e bem-estar humano**

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)

---

## 📋 Sobre o Projeto

Landing page do **EssenciaLab** - aplicativo de bem-estar que integra Aromaterapia, Naturopatia e tecnologia de IA para saúde preventiva e autoconhecimento.

### ✨ Destaques

- 🎁 **Acesso 100% Gratuito** + Método CALMA de presente
- 🎓 **Cursos de Aromaterapia** com 20+ anos de expertise
- 🤖 **Análise Facial com IA** sem sensores
- 🌍 **Multilíngue:** Português, Inglês, Espanhol
- 💼 **Sistema MAP** para profissionais

---

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview
```

Acesse: `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
├── src/
│   ├── App.jsx                      # Componente principal
│   ├── main.jsx                     # Rotas
│   ├── components/
│   │   ├── Header.jsx               # Header multilíngue
│   │   ├── Footer.jsx               # Footer multilíngue
│   │   └── ui/                      # Componentes shadcn/ui
│   └── pages/
│       ├── EssenciaLabHome.jsx      # Landing page principal ⭐
│       ├── MapLandingPage.jsx       # Sistema MAP
│       └── MapWrapper.jsx           # Wrapper com idiomas
├── public/                          # Assets públicos
└── docs/                            # Documentação
```

---

## 🌍 Rotas

| Rota | Descrição | Idiomas |
|------|-----------|---------|
| `/` | Landing page EssenciaLab | PT, EN, ES |
| `/map` | Sistema MAP (profissionais) | PT, EN, ES |
| `/metodocalma/*` | Método CALMA (PT) | PT |
| `/metodocalmaes/*` | Método CALMA (ES) | ES |
| `/termos-de-uso` | Termos de Uso | PT |
| `/politica-de-privacidade` | Política de Privacidade | PT |
| `/contato` | Contato | PT |

### Como usar idiomas

- **Português:** `/?lang=pt` ou simplesmente `/`
- **Inglês:** `/?lang=en`
- **Espanhol:** `/?lang=es`

---

## 📚 Documentação

### 📖 Guias Principais

- **[⚡ INICIO_RAPIDO.md](INICIO_RAPIDO.md)** - Comece aqui! Guia rápido para testar tudo
- **[📋 RESUMO_IMPLEMENTACAO.md](RESUMO_IMPLEMENTACAO.md)** - Resumo executivo completo
- **[🔄 ANTES_E_DEPOIS.md](ANTES_E_DEPOIS.md)** - Comparação visual das mudanças

### 📘 Documentação Técnica

- **[📝 MUDANCAS_LANDING_PAGE.md](MUDANCAS_LANDING_PAGE.md)** - Documentação técnica detalhada
- **[🧪 GUIA_TESTE.md](GUIA_TESTE.md)** - Checklist completo de testes
- **[🏗️ ESTRUTURA_PROJETO.md](ESTRUTURA_PROJETO.md)** - Estrutura completa do projeto

### 📗 Informações do Produto

- **[🌿 docs/README.md](docs/README.md)** - Informações completas do EssenciaLab
- **[📄 docs/informações úteis para fazer a copy da landing page.md](docs/informações%20úteis%20para%20fazer%20a%20copy%20da%20landing%20page.md)** - Copy e estratégia de marketing

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI
- **Vite 6** - Build tool ultra-rápido
- **React Router DOM** - Navegação
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI

### Componentes
- **Radix UI** - Primitivos acessíveis
- **Lucide React** - Ícones
- **Framer Motion** - Animações

### Deploy
- **Netlify** - Hospedagem e CI/CD

---

## 🎨 Design System

### Cores Principais

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde | `#16a34a` | Primária |
| Esmeralda | `#059669` | Secundária |
| Gradientes | `green-600 → emerald-600` | Destaques |

### Tipografia

- **Fonte:** System UI (default)
- **Títulos:** Bold, 2xl-5xl
- **Corpo:** Regular, base-lg

---

## ✨ Funcionalidades

### Página Principal (EssenciaLab)

- ✅ Hero section com gradientes animados
- ✅ Gift section (Método CALMA em destaque)
- ✅ MAP section (link para profissionais)
- ✅ Features section (6 funcionalidades)
- ✅ Courses section (com Marilúcio Rocha)
- ✅ Testimonials section
- ✅ FAQ section
- ✅ Final CTA

### Sistema MAP

- ✅ Análise facial com IA
- ✅ Protocolos personalizados
- ✅ Demonstração interativa
- ✅ Base científica
- ✅ Formulário de captura de leads

### Recursos Globais

- ✅ Suporte 3 idiomas (PT, EN, ES)
- ✅ Seletor de idioma no header
- ✅ Design responsivo
- ✅ Animações suaves (AOS)
- ✅ SEO otimizado

---

## 🧪 Testes

### Executar Testes Locais

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview
```

### Checklist Rápido

- [ ] Página principal carrega
- [ ] Seção Método CALMA visível
- [ ] Link MAP funciona
- [ ] Seletor de idioma funciona
- [ ] Página MAP preservada
- [ ] Responsivo em mobile

Para checklist completo, veja: **[GUIA_TESTE.md](GUIA_TESTE.md)**

---

## 🚀 Deploy

### Deploy Automático (Netlify)

```bash
git add .
git commit -m "Atualização da landing page"
git push origin main
```

Netlify detecta automaticamente e faz deploy.

### Deploy Manual

```bash
npm run build
# Arraste a pasta dist/ para o Netlify
```

---

## 📊 Performance

### Métricas Alvo

- **Lighthouse Performance:** > 90
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

---

## 🌐 URLs

### Desenvolvimento
- Local: `http://localhost:5173`

### Produção
- Site: `https://essencialab.site`
- Home: `https://essencialab.site/`
- MAP: `https://essencialab.site/map`
- App: `https://app.essencialab.site`

---

## 👥 Público-Alvo

### Usuários Gerais
- ✨ Pessoas buscando bem-estar
- 🌱 Amantes de aromaterapia
- 🧠 Interessados em autoconhecimento
- 💚 Focados em saúde preventiva

### Profissionais
- 💼 Consultores doTERRA
- 🌿 Terapeutas holísticos
- 👨‍⚕️ Profissionais de saúde integrativa

---

## 📞 Contato

- **Site:** [essencialab.site](https://essencialab.site)
- **App:** [app.essencialab.site](https://app.essencialab.site)
- **Email:** contato@essencialab.com
- **Instagram:** [@essencialab](https://instagram.com/essencialab)

---

## 📄 Licença

Proprietária - © 2025 EssenciaLab

---

## 🙏 Créditos

### Expertise
- **Marilúcio Rocha** - Naturopata Ortomolecular (20+ anos)

### Tecnologia
- React Team
- Vite Team
- Tailwind Labs
- shadcn/ui
- Radix UI

---

## 🔄 Histórico de Versões

### v2.0.0 - Nova Landing Page (2025-11)
- ✨ Nova landing page EssenciaLab
- 🌍 Suporte 3 idiomas (PT, EN, ES)
- 🎁 Destaque para Método CALMA
- 🔗 Link destacado para Sistema MAP
- 💼 Sistema MAP movido para `/map`

### v1.0.0 - Landing Page MAP (2024)
- 🚀 Landing page inicial do Sistema MAP

---

## 📈 Próximos Passos

- [ ] Adicionar mais idiomas (FR, DE, IT)
- [ ] Implementar A/B testing
- [ ] Integrar analytics avançado
- [ ] Adicionar chat ao vivo
- [ ] Criar blog integrado
- [ ] Implementar SEO avançado

---

## 🎯 Missão

> *Transformar vidas através da integração entre ciência, tecnologia e bem-estar humano*

---

**Feito com 💚 pela equipe EssenciaLab**

*Cuidando de quem cuida de pessoas*

---

## ⚡ Links Rápidos

- [🚀 Começar Agora](INICIO_RAPIDO.md)
- [📋 Resumo das Mudanças](RESUMO_IMPLEMENTACAO.md)
- [🧪 Guia de Testes](GUIA_TESTE.md)
- [📚 Documentação Completa](docs/README.md)
