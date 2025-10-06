# @jimib/shaw-design

A comprehensive design system package for Shaw Heritage micro-apps, providing shared design tokens, Tailwind presets, Styled Components themes, and reusable React components.

## 🚀 Features

- **Design Tokens**: Centralized colors, spacing, and typography
- **Tailwind CSS Preset**: Easy integration with Tailwind projects
- **Styled Components Theme**: React theming with TypeScript support
- **Reusable Components**: Pre-built Button, Logo, Card, Input, Label, and Layout components
- **Layout System**: Complete page layouts with Header, Sidebar, and Main content areas
- **Navigation Components**: NavMenu and Menubar for building navigation interfaces
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
const primaryColor = colors.primary; // 'hsl(320 65% 65%)'

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
import {
  Button,
  Logo,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  Input,
  Label,
  PageLayout,
  Header,
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  NavMenu,
  NavMenuItem,
} from "@jimib/shaw-design";

function MyComponent() {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={
          <Sidebar>
            <SidebarHeader title="Shaw Heritage" showLogo={true} />
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem active>
                  <a href="#">Dashboard</a>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <a href="#">Collections</a>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        }
        header={
          <Header
            title="Shaw Heritage CMS"
            showLogo={true}
            logoVariant="shaw"
            actions={
              <NavMenu variant="minimal">
                <NavMenuItem>
                  <a href="#">Dashboard</a>
                </NavMenuItem>
                <NavMenuItem>
                  <a href="#">Settings</a>
                </NavMenuItem>
              </NavMenu>
            }
          />
        }
      >
        <Card variant="gradient">
          <CardHeader>
            <CardTitle>Welcome to Shaw Heritage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button variant="cms" size="lg">
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </PageLayout>
    </SidebarProvider>
  );
}
```

## 🎯 Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**

- `variant`: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'cms'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `onClick`: () => void
- `type`: 'button' | 'submit' | 'reset'

### Logo

A responsive logo component with multiple variants including Shaw Heritage branding.

**Props:**

- `variant`: 'dark' | 'light' | 'shaw'
- `size`: number (default: 120)

### Card

A flexible card component with multiple background variants.

**Props:**

- `variant`: 'default' | 'gradient' | 'vintage'
- `children`: React.ReactNode

### Input

A styled input component with transparent and default variants.

**Props:**

- `variant`: 'default' | 'transparent'
- All standard HTML input attributes

### Label

A styled label component for form inputs.

**Props:**

- All standard HTML label attributes

### Layout Components

#### PageLayout

A comprehensive layout component that combines header, sidebar, and main content areas.

**Props:**

- `showSidebar`: boolean - Whether to show the sidebar
- `sidebar`: React.ReactNode - Sidebar content
- `header`: React.ReactNode - Header content
- `mainVariant`: 'default' | 'centered' | 'full-width'
- `containerSize`: 'sm' | 'md' | 'lg' | 'xl' | 'full'

#### Header

A flexible header component with logo, title, and actions support.

**Props:**

- `variant`: 'default' | 'minimal' | 'hero'
- `showLogo`: boolean
- `logoVariant`: 'dark' | 'light' | 'shaw'
- `title`: string
- `subtitle`: string
- `actions`: React.ReactNode

#### Sidebar

A responsive sidebar component with mobile support and context management.

**Props:**

- `variant`: 'default' | 'floating' | 'inset'
- `children`: React.ReactNode

#### Navigation Components

##### NavMenu

A flexible navigation menu component with multiple variants.

**Props:**

- `variant`: 'default' | 'pills' | 'underline'
- `orientation`: 'horizontal' | 'vertical'

##### Menubar

A horizontal menu bar component for application menus.

**Props:**

- `variant`: 'default' | 'minimal' | 'bordered'

### Pre-built Layouts

The design system includes several pre-built layout combinations:

- `AuthLayout`: Centered layout for authentication pages
- `DashboardLayout`: Full dashboard layout with sidebar and header
- `ContentLayout`: Content-focused layout with header only

## 🎨 Design Tokens

### Colors

- **Primary**: Shaw Heritage Purple/Magenta palette (hsl(320 65% 65%))
- **Secondary**: Dark purple palette (hsl(312 20% 18%))
- **Accent**: Matching primary accent (hsl(320 65% 65%))
- **Backgrounds**: Dark theme with HSL color system
- **Gradients**: Primary, card, and vintage gradient options
- **Shadows**: Elegant and glow shadow effects
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
