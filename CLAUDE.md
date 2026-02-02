# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EssenciaLab landing page - a React-based marketing site for a wellness application that integrates aromatherapy, naturopathy, and AI technology. Supports Portuguese, English, and Spanish languages.

## Development Commands

```bash
npm run dev      # Start development server at http://localhost:5173
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

**Package manager:** pnpm (v10.4.1)

## Architecture

### Tech Stack
- React 19 + Vite 6
- Tailwind CSS v4 (using `@tailwindcss/vite` plugin, no config file needed)
- React Router DOM for routing
- shadcn/ui components (Radix UI primitives)
- TypeScript/JSX mixed codebase

### Path Alias
`@` maps to `./src` (configured in vite.config.js)

### Directory Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (accordion, button, card, etc.)
│   ├── Header.jsx    # Multilingual header with language selector
│   └── Footer.jsx    # Multilingual footer
├── pages/
│   ├── essencialab/  # Main landing page (TypeScript)
│   │   └── components/  # Section components (Hero, Problem, Solution, etc.)
│   ├── metodocalma/  # Portuguese "Método CALMA" funnel (TypeScript)
│   ├── metodocalmaes/ # Spanish version
│   ├── metodocalmab/  # B variant (Portuguese)
│   ├── metodocalmabes/ # B variant (Spanish)
│   └── *.jsx         # Standalone pages (Contato, LGPD, etc.)
├── lib/utils.js      # Utility functions (cn, getPlatformLink)
└── hooks/            # Custom React hooks
```

### Routing (main.jsx)
- `/` - Main EssenciaLab landing page
- `/map` - MAP System landing (for professionals)
- `/metodocalma/*` - Portuguese funnel
- `/metodocalmaes/*` - Spanish funnel
- `/essencialab` - Alternative route to main landing
- Static pages: `/termos-de-uso`, `/politica-de-privacidade`, `/lgpd`, `/contato`, etc.

### Internationalization Pattern
Language is passed via URL query parameter (`?lang=pt|en|es`). Components define content objects with translations:

```jsx
const content = {
  pt: { title: 'Título' },
  en: { title: 'Title' },
  es: { title: 'Título' }
};
const t = content[language] || content.pt;
```

### Styling
- Tailwind CSS v4 with CSS-first configuration in `src/index.css`
- Custom CSS variables for theming (oklch color space)
- Custom utility classes: `.bg-gradient-calm`, `.heading-responsive`, `.transition-smooth`
- shadcn/ui components use `class-variance-authority` for variants

### Utility Functions (src/lib/utils.js)
- `cn(...classes)` - Tailwind class merging with clsx + tailwind-merge
- `getPlatformLink()` - Detects user platform and returns appropriate app store link
