# 🎨 jimib Design System — Purpose & Usage

## Purpose

The `@jimib/shaw-design` package provides a **single source of truth** for all visual and thematic elements used across the jimib ecosystem.

Its primary goals are:

- 🧭 **Consistency** — ensure every micro-app (CMS, Shop, Game, Admin, etc.) uses the same colours, typography, logos, and base components.
- 🧱 **Reusability** — allow designers and developers to share UI tokens, styles, and components without code duplication.
- 🔄 **Version Control** — distribute design changes via versioned npm releases (e.g. `@jimib/shaw-design@1.2.3`) so each app can upgrade intentionally.
- ⚙️ **Framework Agnostic Tokens** — design tokens are defined in plain TypeScript and can be used by both Tailwind and Styled Components.
- 📚 **Documentation & Preview** — Storybook provides a visual catalogue of colours, typography, and components for designers to review and sign off.

---

## How It’s Used by Micro-Apps

Each micro-app (built with Vite + Tailwind + StyledComponents) consumes this package as a dependency.

### 1. Install the Package

```bash
npm install @jimib/shaw-design

2. Tailwind Integration

In each app’s tailwind.config.js:

import sharedPreset from '@jimib/shaw-design/src/tailwind/preset.js';

export default {
  presets: [sharedPreset],
};

✅ This automatically applies the shared colour palette, spacing scale, and font settings defined in the design system.
3. Styled Components Integration

Wrap the app with the shared ThemeProvider and apply global styles:

import { ThemeProvider, GlobalStyles } from '@jimib/shaw-design';

export function Root() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
}

✅ This ensures both Styled Components and Tailwind resolve to the same tokens.
4. Import Shared Components or Assets

Use reusable UI elements or logos directly:

import { Button, Logo } from '@jimib/shaw-design';

export function Header() {
  return (
    <header>
      <Logo variant="dark" />
      <Button>Get Started</Button>
    </header>
  );
}

✅ Avoids redefining shared visuals (logos, buttons, spacing).
5. Versioning & Updates

Each release of @jimib/shaw-design is versioned.
Micro-apps pin a specific version for stability and upgrade when needed:

"@jimib/shaw-design": "1.0.3"

✅ This keeps design updates predictable and traceable across all micro-frontends.
6. Visual Documentation via Storybook

Designers and developers can run Storybook locally or view it on Vercel/Chromatic:

npm run storybook

✅ Provides an interactive style guide and a visual regression baseline for QA.
Summary
Feature	Description
Design Tokens	Shared colours, spacing, typography
Tailwind Preset	Inherits tokens into Tailwind config
Styled Components Theme	Unified theme object + global styles
Shared Components	Core brand elements like Button, Logo
Assets	Centralised SVGs and media
Storybook	Visual preview + documentation
Versioned npm Package	Consistent, controlled updates for all micro-apps

In short:

    The @jimib/shaw-design acts as the visual backbone of the jimib platform — defining how everything should look, feel, and behave — and each micro-app simply consumes it as a dependency.
```
