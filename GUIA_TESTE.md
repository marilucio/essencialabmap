# 🧪 Guia de Teste - Nova Landing Page EssenciaLab

## 🚀 Como Testar Localmente

### 1. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:5173` (ou outra porta disponível).

---

## ✅ Checklist de Testes

### Página Principal (EssenciaLab)

Acesse: `http://localhost:5173/`

- [ ] **Hero Section**
  - [ ] Título aparece corretamente
  - [ ] Botão "Começar Agora Grátis" funciona
  - [ ] Botão "Conhecer o Método CALMA" rola para a seção correta
  - [ ] Animações suaves aparecem

- [ ] **Gift Section (Método CALMA)**
  - [ ] Card do Método CALMA está visível
  - [ ] Lista de benefícios aparece
  - [ ] Botão CTA funciona

- [ ] **MAP Section**
  - [ ] Seção com fundo roxo/indigo está visível
  - [ ] Texto destaque aparece: "Saiba mais sobre o Método de Avaliação Personalizada..."
  - [ ] Botão redireciona para `/map`

- [ ] **Features Section**
  - [ ] 6 cards de funcionalidades aparecem
  - [ ] Ícones estão corretos
  - [ ] Hover funciona

- [ ] **Courses Section**
  - [ ] Perfil do Marilúcio Rocha aparece
  - [ ] 4 cursos listados
  - [ ] Status "Disponível" em cada curso

- [ ] **Testimonials**
  - [ ] 3 depoimentos aparecem
  - [ ] Estrelas de avaliação visíveis
  - [ ] Design dos cards correto

- [ ] **FAQ**
  - [ ] 5 perguntas e respostas aparecem
  - [ ] Expansíveis (se implementado)

- [ ] **Final CTA**
  - [ ] Botão "Criar Conta Gratuita" funciona
  - [ ] Fundo verde com padrão decorativo

---

### Header

- [ ] **Logo EssenciaLab** aparece (folha verde)
- [ ] **Menu de navegação** funciona:
  - [ ] Funcionalidades
  - [ ] Cursos
  - [ ] Sistema MAP
- [ ] **Seletor de idioma** funciona:
  - [ ] 🇧🇷 PT
  - [ ] 🇺🇸 EN
  - [ ] 🇪🇸 ES
- [ ] **Botão "Começar Grátis"** funciona

---

### Footer

- [ ] **Logo EssenciaLab** aparece
- [ ] **4 colunas** de informações:
  - [ ] Sobre
  - [ ] Produto
  - [ ] Suporte
  - [ ] Legal
- [ ] **Todos os links** funcionam
- [ ] **Copyright** aparece corretamente
- [ ] **Tagline** "Cuidando de quem cuida de pessoas" visível

---

### Teste Multilíngue

#### Português (padrão)
Acesse: `http://localhost:5173/`

- [ ] Todo conteúdo em português
- [ ] Header em PT
- [ ] Footer em PT

#### Inglês
Acesse: `http://localhost:5173/?lang=en`

- [ ] Todo conteúdo em inglês
- [ ] Header em EN
- [ ] Footer em EN
- [ ] Seletor mostra "🇺🇸 EN"

#### Espanhol
Acesse: `http://localhost:5173/?lang=es`

- [ ] Todo conteúdo em espanhol
- [ ] Header em ES
- [ ] Footer em ES
- [ ] Seletor mostra "🇪🇸 ES"

---

### Página MAP

Acesse: `http://localhost:5173/map`

- [ ] **Landing page do MAP** carrega corretamente
- [ ] **Todo conteúdo original** preservado
- [ ] **Header** aparece (pode ser diferente)
- [ ] **Footer** aparece
- [ ] **Formulário de captura** funciona
- [ ] **Seção de demonstração** funciona

#### Teste Multilíngue MAP

- [ ] `/map?lang=pt` - Português
- [ ] `/map?lang=en` - Inglês
- [ ] `/map?lang=es` - Espanhol

---

### Navegação Entre Páginas

- [ ] **Home → MAP:** Link "Sistema MAP" no header leva para `/map`
- [ ] **Home → MAP:** Botão na seção MAP leva para `/map`
- [ ] **MAP → Home:** Link "Home" ou logo no header volta para `/`
- [ ] **Idioma persiste** ao navegar entre páginas

---

### Responsividade

#### Desktop (> 1024px)
- [ ] Layout de 2 colunas funciona
- [ ] Menu horizontal no header
- [ ] Cards lado a lado

#### Tablet (768px - 1024px)
- [ ] Layout de 2 colunas ajusta
- [ ] Menu colapsa se necessário
- [ ] Cards reorganizam

#### Mobile (< 768px)
- [ ] Layout de 1 coluna
- [ ] Menu mobile funciona
- [ ] Botões empilham verticalmente
- [ ] Texto legível

---

### Performance

- [ ] **Animações suaves** (AOS funciona)
- [ ] **Imagens carregam** rápido
- [ ] **Sem erros no console** do navegador
- [ ] **Sem warnings** de React

---

### Links Externos

- [ ] **"Começar Grátis"** abre `https://app.essencialab.site`
- [ ] **Links abrem em nova aba** (_blank)

---

## 🐛 Problemas Comuns e Soluções

### 1. Página em branco

**Solução:** 
- Verifique o console do navegador (F12)
- Verifique se todas as dependências foram instaladas: `npm install`

### 2. Animações não funcionam

**Solução:**
- Verifique se a biblioteca AOS está carregada no `index.html`
- Adicione no `<head>`:
  ```html
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  ```

### 3. Seletor de idioma não funciona

**Solução:**
- Verifique se o componente Select está importado corretamente
- Verifique se o estado de idioma está sendo gerenciado

### 4. Rotas não funcionam

**Solução:**
- Verifique o arquivo `src/main.jsx`
- Certifique-se de que o BrowserRouter está envolvendo todas as rotas

---

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

Isso criará a pasta `dist/` com os arquivos otimizados.

### Preview da Build

```bash
npm run preview
```

Testa a build de produção localmente.

### Deploy no Netlify

1. **Via Git (Automático):**
   - Commit e push para o repositório
   - Netlify detectará e fará deploy automático

2. **Manual:**
   - Execute `npm run build`
   - Arraste a pasta `dist/` para o Netlify

---

## 📊 Métricas para Verificar

Após deploy em produção, verifique:

- [ ] **Google PageSpeed Insights:** Score > 90
- [ ] **GTmetrix:** Grade A
- [ ] **Lighthouse:**
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 90
  - SEO: > 95

---

## ✅ Aprovação Final

Antes de considerar completo, certifique-se de que:

- [ ] Todas as seções aparecem corretamente
- [ ] Todos os 3 idiomas funcionam perfeitamente
- [ ] Navegação entre páginas funciona
- [ ] Responsividade testada em 3 dispositivos
- [ ] Sem erros no console
- [ ] Performance aceitável
- [ ] Links externos funcionam
- [ ] CTAs redirecionam corretamente

---

**🎉 Se todos os testes passarem, a landing page está pronta para produção!**

---

## 📞 Suporte

Para questões técnicas:
- Consulte `MUDANCAS_LANDING_PAGE.md`
- Verifique `docs/README.md`
- Revise `ESTRUTURA_PROJETO.md`

