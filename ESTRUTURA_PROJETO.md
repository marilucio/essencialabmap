# Estrutura do Projeto MAP - Landing Page

## Visão Geral
Este é um projeto React/Vite para uma landing page do MAP (Método de Avaliação Personalizada), uma plataforma de avaliação metabólica através de inteligência artificial e análise facial.

## Estrutura de Arquivos e Pastas

### 📁 Raiz do Projeto
```
├── .gitignore                    # Arquivos ignorados pelo Git
├── README.md                     # Documentação básica do projeto
├── components.json               # Configuração dos componentes shadcn/ui
├── index.html                    # Arquivo HTML principal
├── netlify.toml                  # Configuração de deploy no Netlify
├── package.json                  # Dependências e scripts do projeto
├── package-lock.json             # Lock das versões das dependências
└── vite.config.js               # Configuração do Vite (bundler)
```

### 📁 dist/
**Pasta de build de produção (gerada automaticamente)**
```
├── _redirects                    # Regras de redirecionamento para Netlify
├── assets/                       # Assets otimizados (JS/CSS minificados)
├── favicon-ico32x32.png         # Favicon 32x32
├── favicon-ico60x60.png         # Favicon 60x60
├── form-dummy.html              # Página de formulário dummy
├── images/                      # Imagens otimizadas para produção
├── index.html                   # HTML principal buildado
├── metodocalma/                 # Build da seção Método Calma
├── thank-you.html              # Página de agradecimento
└── vite.svg                    # Logo do Vite
```

### 📁 public/
**Assets públicos servidos diretamente**
```
├── _redirects                    # Regras de redirecionamento
├── favicon-ico32x32.png         # Favicon pequeno
├── favicon-ico60x60.png         # Favicon médio
├── form-dummy.html              # Formulário de teste/placeholder
├── images/                      # Imagens da landing page
│   ├── acompanha.webp           # Imagem da seção "Acompanhamento"
│   ├── estudos/                 # Pasta com imagens de estudos científicos
│   ├── hero-3am-anxiety.jpg     # Imagem hero sobre ansiedade 3h da manhã
│   ├── iascaning.webp           # Imagem do processo de scanning IA
│   ├── method-calma.jpg         # Imagem do Método Calma
│   ├── paciente.webp            # Imagem de paciente
│   ├── peaceful-sleep.jpg       # Imagem de sono tranquilo
│   ├── recomenda.webp           # Imagem da seção recomendações
│   ├── scanface.webp            # Imagem do scan facial
│   ├── sogi.webp                # Imagem relacionada ao SOGI
│   └── teia.webp                # Imagem da teia/rede neural
├── js/
│   └── price-localizer.js       # Script para localização de preços
├── metodocalma/                 # Assets do Método Calma
├── thank-you.html              # Página de agradecimento pós-formulário
└── vite.svg                    # Logo do Vite
```

### 📁 src/
**Código fonte principal**

#### 📄 Arquivos Raiz do src/
```
├── App.css                      # Estilos principais da aplicação
├── App.jsx                      # Componente principal (1535 linhas) - Landing page completa
├── index.css                    # Estilos globais e Tailwind CSS
└── main.jsx                     # Ponto de entrada da aplicação React
```

#### 📁 src/assets/
**Assets do código fonte**
```
├── essencialab-logo.svg         # Logo da EssenciaLab em SVG
├── prints/                      # Screenshots/prints da aplicação
└── react.svg                    # Logo do React
```

#### 📁 src/components/
**Componentes React reutilizáveis**

##### 📄 Componentes Principais
```
├── Footer.jsx                   # Rodapé da landing page com links e informações
├── Header.jsx                   # Cabeçalho com navegação e logo MAP
└── ui/                         # Biblioteca de componentes UI (shadcn/ui)
```

##### 📁 src/components/ui/
**Sistema de Design - Componentes UI (shadcn/ui)**
```
├── accordion.jsx                # Componente de acordeão expansível
├── alert-dialog.jsx            # Diálogos de alerta/confirmação
├── alert.jsx                   # Componente de alertas/notificações
├── aspect-ratio.jsx            # Container com proporção de aspecto fixa
├── avatar.jsx                  # Componente de avatar/foto de perfil
├── badge.jsx                   # Badges/etiquetas coloridas
├── breadcrumb.jsx              # Navegação breadcrumb
├── button.jsx                  # Botões com variantes de estilo
├── calendar.jsx                # Componente de calendário
├── card.jsx                    # Cards/cartões de conteúdo
├── carousel.jsx                # Carrossel de imagens/conteúdo
├── chart.jsx                   # Componentes de gráficos
├── checkbox.jsx                # Caixas de seleção
├── collapsible.jsx             # Conteúdo colapsável
├── command.jsx                 # Interface de comando/busca
├── context-menu.jsx            # Menu de contexto (clique direito)
├── dialog.jsx                  # Modais/diálogos
├── drawer.jsx                  # Gaveta lateral deslizante
├── dropdown-menu.jsx           # Menus dropdown
├── form.jsx                    # Componentes de formulário
├── hover-card.jsx              # Cards que aparecem no hover
├── input-otp.jsx               # Input para códigos OTP
├── input.jsx                   # Campos de entrada de texto
├── label.jsx                   # Labels para formulários
├── menubar.jsx                 # Barra de menu horizontal
├── navigation-menu.jsx         # Menu de navegação complexo
├── pagination.jsx              # Componente de paginação
├── popover.jsx                 # Popovers/tooltips avançados
├── progress.jsx                # Barras de progresso
├── radio-group.jsx             # Grupos de radio buttons
├── resizable.jsx               # Painéis redimensionáveis
├── scroll-area.jsx             # Área de scroll customizada
├── select.jsx                  # Componente de seleção/dropdown
├── separator.jsx               # Separadores visuais
├── sheet.jsx                   # Folhas laterais deslizantes
├── sidebar.jsx                 # Barra lateral de navegação
├── skeleton.jsx                # Placeholders de carregamento
├── slider.jsx                  # Controles deslizantes
├── sonner.jsx                  # Sistema de notificações toast
├── switch.jsx                  # Interruptores on/off
├── table.jsx                   # Tabelas de dados
├── tabs.jsx                    # Componente de abas
├── textarea.jsx                # Área de texto multilinha
├── toggle-group.jsx            # Grupos de botões toggle
├── toggle.jsx                  # Botões de alternância
└── tooltip.jsx                 # Tooltips informativos
```

#### 📁 src/hooks/
**Hooks React customizados**
```
├── use-mobile.js               # Hook para detecção de dispositivos móveis (JS)
├── use-mobile.tsx              # Hook para detecção de dispositivos móveis (TS)
└── use-toast.ts                # Hook para sistema de notificações
```

#### 📁 src/lib/
**Utilitários e bibliotecas**
```
├── utils.js                    # Funções utilitárias gerais (JS)
└── utils.ts                    # Funções utilitárias gerais (TS)
```

#### 📁 src/pages/
**Páginas da aplicação**

##### 📄 Páginas Principais
```
├── CentralDeAjuda.jsx          # Página de central de ajuda/suporte
├── Contato.jsx                 # Página de contato
├── LGPD.jsx                    # Página sobre Lei Geral de Proteção de Dados
├── PoliticaPrivacidade.jsx     # Política de privacidade
├── Precos.jsx                  # Página de preços e planos
├── StatusDoSistema.jsx         # Status do sistema/uptime
└── TermosDeUso.jsx             # Termos de uso da plataforma
```

##### 📁 src/pages/metodocalma/
**Seção Método Calma (Português)**
```
├── Index.tsx                   # Página inicial do Método Calma
├── MetodoCalma.tsx             # Página principal do método
├── NotFound.tsx                # Página 404 específica da seção
└── components/                 # Componentes específicos do Método Calma
```

##### 📁 src/pages/metodocalmaes/
**Seção Método Calma (Espanhol)**
```
├── Index.tsx                   # Página inicial do Método Calma (ES)
├── MetodoCalma.tsx             # Página principal do método (ES)
├── NotFound.tsx                # Página 404 específica da seção (ES)
└── components/                 # Componentes específicos do Método Calma (ES)
```

## Tecnologias Utilizadas

### 🛠️ Stack Principal
- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript/JavaScript** - Linguagens de programação

### 📦 Principais Dependências
- **@radix-ui/** - Componentes UI primitivos acessíveis
- **shadcn/ui** - Sistema de design baseado em Radix UI
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones SVG
- **React Hook Form** - Gerenciamento de formulários
- **TanStack Query** - Gerenciamento de estado servidor

### 🎨 Funcionalidades
- **Landing Page Responsiva** - Design adaptável para todos os dispositivos
- **Análise Facial IA** - Integração com tecnologia de análise facial
- **Avaliação Metabólica** - Sistema de avaliação personalizada
- **Método Calma** - Seção dedicada ao método terapêutico
- **Multilíngue** - Suporte para Português e Espanhol
- **SEO Otimizado** - Estrutura otimizada para motores de busca

## Scripts Disponíveis
- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linting do código

## Deploy
O projeto está configurado para deploy automático no **Netlify** com redirecionamentos e otimizações específicas.