# @jimib/shaw-design

A comprehensive design system package for FeedAR micro-apps, providing shared design tokens, Tailwind presets, Styled Components themes, and reusable React components.

## 🚀 Features

- **Design Tokens**: Centralized colors, spacing, and typography
- **Tailwind CSS Preset**: Easy integration with Tailwind projects
- **Styled Components Theme**: React theming with TypeScript support
- **Reusable Components**: Pre-built Button and Logo components
- **Storybook Documentation**: Visual component library and design token showcase
- **TypeScript Support**: Fully typed design system

## 📦 Installation

```bash
npm install @jimib/shaw-design
```

## 🎨 Usage

### Design Tokens

```typescript
import { colors, spacing, typography } from "@jimib/shaw-design";

// Use colors
const primaryColor = colors.primary; // '#1D4ED8'

// Use spacing
const padding = spacing.md; // '16px'

// Use typography
const fontFamily = typography.fontFamily.sans; // ['Inter', 'system-ui', ...]
```

### Tailwind CSS Integration

1. Install the package in your Tailwind project
2. Add the preset to your `tailwind.config.js`:

```javascript
import sharedPreset from "@jimib/shaw-design/src/tailwind/preset.js";

export default {
  presets: [sharedPreset],
  content: [
    // your content paths
  ],
};
```

### Styled Components Integration

```tsx
import React from "react";
import { ThemeProvider, GlobalStyles } from "@jimib/shaw-design";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using Components

```tsx
import React from "react";
import { Button, Logo } from "@jimib/shaw-design";

function MyComponent() {
  return (
    <div>
      <Logo variant="dark" size={120} />
      <Button
        variant="primary"
        size="md"
        onClick={() => console.log("Clicked!")}
      >
        Click me
      </Button>
    </div>
  );
}
```

## 🎯 Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**

- `variant`: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `onClick`: () => void
- `type`: 'button' | 'submit' | 'reset'

### Logo

A responsive logo component with light and dark variants.

**Props:**

- `variant`: 'dark' | 'light'
- `size`: number (default: 120)

## 🎨 Design Tokens

### Colors

- **Primary**: Blue color palette (#1D4ED8)
- **Secondary**: Purple color palette (#9333EA)
- **Accent**: Orange color palette (#F59E0B)
- **Gray Scale**: 50-900 range
- **Semantic**: Success, warning, error, info colors

### Spacing

- **Base Scale**: 4px increments (0, 4px, 8px, 16px, etc.)
- **Semantic**: xs, sm, md, lg, xl, 2xl, 3xl, etc.
- **Component-specific**: Button padding, input padding, card spacing

### Typography

- **Font Families**: Sans (Inter), Serif, Mono
- **Font Sizes**: xs (12px) to 9xl (128px)
- **Font Weights**: 100-900 range
- **Text Styles**: Pre-defined combinations for headings and body text

## 📚 Storybook

Run the Storybook development server to explore components and design tokens:

```bash
npm run storybook
```

Visit `http://localhost:6006` to view the component library.

## 🛠 Development

### Prerequisites

- Node.js 16+
- npm 7+

### Setup

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run Storybook
npm run storybook

# Watch mode for development
npm run dev
```

### Project Structure

```
src/
├── tokens/           # Design tokens (colors, spacing, typography)
├── tailwind/         # Tailwind CSS preset
├── styled/           # Styled Components theme and global styles
├── components/       # React components
├── assets/           # Logo assets
└── index.ts          # Main export file
```

## 📝 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 Changelog

### 0.1.0

- Initial release
- Design tokens (colors, spacing, typography)
- Tailwind CSS preset
- Styled Components theme
- Button and Logo components
- Storybook documentation
