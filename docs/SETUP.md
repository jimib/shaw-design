# @jimib/shaw-design Setup Guide

## 🧱 Overview

Create a reusable **design system package** that provides shared design tokens, Tailwind presets, Styled Components themes, and Storybook documentation for all FeedAR micro-apps.

---

## 1. Repository Structure

@jimib/shaw-design/
├── package.json
├── tsconfig.json
├── src/
│ ├── index.ts
│ ├── tokens/
│ │ ├── colors.ts
│ │ ├── spacing.ts
│ │ ├── typography.ts
│ │ └── index.ts
│ ├── tailwind/
│ │ └── preset.js
│ ├── styled/
│ │ ├── ThemeProvider.tsx
│ │ └── GlobalStyles.ts
│ ├── components/
│ │ ├── Logo.tsx
│ │ ├── Button.tsx
│ │ └── index.ts
│ └── assets/
│ ├── logo-dark.svg
│ ├── logo-light.svg
│ └── index.ts
└── .storybook/
├── main.ts
├── preview.tsx
├── preview-head.html
└── tailwind.css

---

## 2. Install Dependencies

```bash
npm init -y
npm install react styled-components
npm install -D typescript tailwindcss postcss autoprefixer @types/react @types/styled-components
npm install -D storybook @storybook/react-vite @storybook/addon-essentials @storybook/addon-styling @storybook/addon-styled-components-v6

3. Configure package.json

{
  "name": "@jimib/shaw-design",
  "version": "0.1.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": ["dist", "src"],
  "scripts": {
    "build": "tsc --project tsconfig.json",
    "dev": "tsc --watch",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "lint": "eslint src --ext .ts,.tsx"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "styled-components": "^6.1.0"
  },
  "publishConfig": { "access": "public" },
  "license": "MIT"
}

4. Create Design Tokens

Example token files in src/tokens:

    colors.ts → shared palette

    spacing.ts → spacing scale

    typography.ts → font sizes, weights, and families

    index.ts → exports all tokens

5. Tailwind Preset

src/tailwind/preset.js:

import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';

export default {
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: { sans: typography.fontFamily.split(',') },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight
    },
  },
};

In each micro-app Tailwind config:

import sharedPreset from '@jimib/shaw-design/src/tailwind/preset.js';
export default { presets: [sharedPreset] };

6. Styled Components Theme

src/styled/ThemeProvider.tsx

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { colors, spacing, typography } from '../tokens';

export const theme = { colors, spacing, typography };

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

src/styled/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin: 0;
    padding: 0;
  }
`;

7. Example Components

Button.tsx

import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: 8px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background 0.2s;
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
`;

Logo.tsx

import React from 'react';
import LogoLight from '../assets/logo-light.svg';
import LogoDark from '../assets/logo-dark.svg';

export const Logo = ({ variant = 'dark', size = 120 }) => {
  const src = variant === 'dark' ? LogoDark : LogoLight;
  return <img src={src} alt="FeedAR Logo" width={size} height="auto" />;
};

8. Storybook Setup

Run:

npx storybook@latest init --type react --builder vite

.storybook/main.ts

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
    '@storybook/addon-styled-components-v6'
  ],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    config.css = { postcss: './postcss.config.js' };
    return config;
  },
};
export default config;

.storybook/preview.tsx

import React from 'react';
import { ThemeProvider, GlobalStyles } from '../src/styled/ThemeProvider';
import '../.storybook/tailwind.css';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyles />
      <div className="p-6 bg-gray-50 min-h-screen"><Story /></div>
    </ThemeProvider>
  ),
];

export const parameters = { controls: { expanded: true } };

.storybook/tailwind.css

@tailwind base;
@tailwind components;
@tailwind utilities;

9. Example Stories

Button

import { Button } from './Button';
export default { title: 'Components/Button', component: Button };
export const Default = { args: { children: 'Click me' } };

Logo

import { Logo } from './Logo';
export default { title: 'Components/Logo', component: Logo };
export const Dark = { args: { variant: 'dark' } };
export const Light = { args: { variant: 'light' } };

Color Tokens

import { colors } from '../tokens/colors';
export default { title: 'Tokens/Colors' };
export const Palette = () => (
  <div className="grid grid-cols-4 gap-4">
    {Object.entries(colors).map(([k,v]) => (
      <div key={k} className="text-center">
        <div className="w-20 h-20 rounded-lg mx-auto" style={{background:v}} />
        <code className="text-xs">{k}</code>
        <p className="text-xs text-gray-600">{v}</p>
      </div>
    ))}
  </div>
);

10. Run Storybook

npm run storybook

Preview at http://localhost:6006
11. Publish to NPM

npm run build
npm version patch
npm publish --access public

Then in any micro-app:

npm install @jimib/shaw-design@latest

12. Optional CI/CD

    Chromatic or Vercel: deploy Storybook for designer access.

    GitHub Actions: auto-publish when tagging new release.

✅ Outputs

    Shared Tailwind + StyledComponents design system

    Centralised theme tokens

    Visual Storybook documentation

    Versioned npm package for all micro-apps
```
