export const colors = {
  // Shaw Heritage Design System Colors (updated to match designer reference)

  // Primary colors - Shaw Heritage Purple/Magenta theme
  primary: "hsl(320 65% 65%)", // Main brand color
  primaryHover: "hsl(320 65% 60%)",
  primaryLight: "hsl(320 65% 70%)",
  primaryDark: "hsl(320 65% 55%)",
  primaryForeground: "hsl(312 31% 8%)",

  // Secondary colors
  secondary: "hsl(312 20% 18%)",
  secondaryHover: "hsl(312 20% 15%)",
  secondaryLight: "hsl(312 20% 22%)",
  secondaryDark: "hsl(312 20% 12%)",
  secondaryForeground: "hsl(312 15% 92%)",

  // Accent colors
  accent: "hsl(320 65% 65%)",
  accentHover: "hsl(320 65% 60%)",
  accentLight: "hsl(320 65% 70%)",
  accentDark: "hsl(320 65% 55%)",
  accentForeground: "hsl(312 31% 8%)",

  // Background colors
  background: "hsl(312 31% 8%)",
  foreground: "hsl(312 15% 92%)",

  // Card colors
  card: "hsl(312 25% 12%)",
  cardForeground: "hsl(312 15% 92%)",

  // Popover colors
  popover: "hsl(312 25% 12%)",
  popoverForeground: "hsl(312 15% 92%)",

  // Muted colors
  muted: "hsl(312 20% 18%)",
  mutedForeground: "hsl(312 10% 65%)",

  // Destructive colors
  destructive: "hsl(0 84% 60%)",
  destructiveForeground: "hsl(312 15% 92%)",

  // Border and input colors
  border: "hsl(var(--primary) / 0.9)",
  input: "hsl(312 20% 15%)",
  ring: "hsl(320 65% 65%)",

  // Radius
  radius: "0.5rem",

  // Sidebar colors (light mode)
  sidebar: {
    background: "hsl(0 0% 98%)",
    foreground: "hsl(240 5.3% 26.1%)",
    primary: "hsl(240 5.9% 10%)",
    primaryForeground: "hsl(0 0% 98%)",
    accent: "hsl(240 4.8% 95.9%)",
    accentForeground: "hsl(240 5.9% 10%)",
    border: "hsl(220 13% 91%)",
    ring: "hsl(217.2 91.2% 59.8%)",
  },

  // Dark mode colors
  dark: {
    background: "hsl(222.2 84% 4.9%)",
    foreground: "hsl(210 40% 98%)",
    card: "hsl(222.2 84% 4.9%)",
    cardForeground: "hsl(210 40% 98%)",
    popover: "hsl(222.2 84% 4.9%)",
    popoverForeground: "hsl(210 40% 98%)",
    primary: "hsl(210 40% 98%)",
    primaryForeground: "hsl(222.2 47.4% 11.2%)",
    secondary: "hsl(217.2 32.6% 17.5%)",
    secondaryForeground: "hsl(210 40% 98%)",
    muted: "hsl(217.2 32.6% 17.5%)",
    mutedForeground: "hsl(215 20.2% 65.1%)",
    accent: "hsl(217.2 32.6% 17.5%)",
    accentForeground: "hsl(210 40% 98%)",
    destructive: "hsl(0 62.8% 30.6%)",
    destructiveForeground: "hsl(210 40% 98%)",
    border: "hsl(217.2 32.6% 17.5%)",
    input: "hsl(217.2 32.6% 17.5%)",
    ring: "hsl(212.7 26.8% 83.9%)",
    // Dark mode sidebar colors
    sidebar: {
      background: "hsl(240 5.9% 10%)",
      foreground: "hsl(240 4.8% 95.9%)",
      primary: "hsl(224.3 76.3% 48%)",
      primaryForeground: "hsl(0 0% 100%)",
      accent: "hsl(240 3.7% 15.9%)",
      accentForeground: "hsl(240 4.8% 95.9%)",
      border: "hsl(240 3.7% 15.9%)",
      ring: "hsl(217.2 91.2% 59.8%)",
    },
  },

  // Legacy colors (keeping for backward compatibility)
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },

  // Semantic colors
  success: "#10B981",
  successHover: "#059669",
  warning: "#F59E0B",
  warningHover: "#D97706",
  error: "#EF4444",
  errorHover: "#DC2626",
  info: "#3B82F6",
  infoHover: "#2563EB",

  // Gradients (matching designer reference)
  gradients: {
    primary:
      "linear-gradient(135deg, hsl(320 65% 65%) 0%, hsl(330 55% 55%) 100%)",
    card: "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(312 30% 15%) 100%)",
    vintage:
      "linear-gradient(135deg, hsl(320 45% 25%) 0%, hsl(310 35% 15%) 50%, hsl(300 25% 8%) 100%)",
  },

  // Shadows (matching designer reference)
  shadows: {
    elegant:
      "0 20px 25px -5px rgba(139, 69, 139, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
    glow: "0 0 40px hsl(320 65% 65% / 0.2)",
  },

  // Animation variables (matching designer reference)
  transitions: {
    smooth: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  // CSS Custom Properties (matching designer reference exactly)
  cssVariables: {
    light: {
      "--background": "312 31% 8%",
      "--foreground": "312 15% 92%",
      "--card": "312 25% 12%",
      "--card-foreground": "312 15% 92%",
      "--popover": "312 25% 12%",
      "--popover-foreground": "312 15% 92%",
      "--primary": "320 65% 65%",
      "--primary-foreground": "312 31% 8%",
      "--secondary": "312 20% 18%",
      "--secondary-foreground": "312 15% 92%",
      "--muted": "312 20% 18%",
      "--muted-foreground": "312 10% 65%",
      "--accent": "320 65% 65%",
      "--accent-foreground": "312 31% 8%",
      "--destructive": "0 84% 60%",
      "--destructive-foreground": "312 15% 92%",
      "--success": "142 76% 36%",
      "--success-foreground": "312 15% 92%",
      "--warning": "38 92% 50%",
      "--warning-foreground": "312 31% 8%",
      "--info": "213 94% 68%",
      "--info-foreground": "312 15% 92%",
      "--border": "312 20% 20%",
      "--input": "312 20% 15%",
      "--ring": "320 65% 65%",
      "--radius": "0.5rem",
      "--gradient-primary":
        "linear-gradient(135deg, hsl(320 65% 65%) 0%, hsl(330 55% 55%) 100%)",
      "--gradient-card":
        "linear-gradient(145deg, hsl(var(--card)) 0%, hsl(312 30% 15%) 100%)",
      "--gradient-vintage":
        "linear-gradient(135deg, hsl(320 45% 25%) 0%, hsl(310 35% 15%) 50%, hsl(300 25% 8%) 100%)",
      "--shadow-elegant":
        "0 20px 25px -5px rgba(139, 69, 139, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
      "--shadow-glow": "0 0 40px hsl(320 65% 65% / 0.2)",
      "--transition-smooth": "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "--transition-spring": "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "--sidebar-background": "0 0% 98%",
      "--sidebar-foreground": "240 5.3% 26.1%",
      "--sidebar-primary": "240 5.9% 10%",
      "--sidebar-primary-foreground": "0 0% 98%",
      "--sidebar-accent": "240 4.8% 95.9%",
      "--sidebar-accent-foreground": "240 5.9% 10%",
      "--sidebar-border": "220 13% 91%",
      "--sidebar-ring": "217.2 91.2% 59.8%",
    },
    dark: {
      "--background": "222.2 84% 4.9%",
      "--foreground": "210 40% 98%",
      "--card": "222.2 84% 4.9%",
      "--card-foreground": "210 40% 98%",
      "--popover": "222.2 84% 4.9%",
      "--popover-foreground": "210 40% 98%",
      "--primary": "210 40% 98%",
      "--primary-foreground": "222.2 47.4% 11.2%",
      "--secondary": "217.2 32.6% 17.5%",
      "--secondary-foreground": "210 40% 98%",
      "--muted": "217.2 32.6% 17.5%",
      "--muted-foreground": "215 20.2% 65.1%",
      "--accent": "217.2 32.6% 17.5%",
      "--accent-foreground": "210 40% 98%",
      "--destructive": "0 62.8% 30.6%",
      "--destructive-foreground": "210 40% 98%",
      "--success": "142 76% 36%",
      "--success-foreground": "210 40% 98%",
      "--warning": "38 92% 50%",
      "--warning-foreground": "222.2 47.4% 11.2%",
      "--info": "213 94% 68%",
      "--info-foreground": "210 40% 98%",
      "--border": "217.2 32.6% 17.5%",
      "--input": "217.2 32.6% 17.5%",
      "--ring": "212.7 26.8% 83.9%",
      "--sidebar-background": "240 5.9% 10%",
      "--sidebar-foreground": "240 4.8% 95.9%",
      "--sidebar-primary": "224.3 76.3% 48%",
      "--sidebar-primary-foreground": "0 0% 100%",
      "--sidebar-accent": "240 3.7% 15.9%",
      "--sidebar-accent-foreground": "240 4.8% 95.9%",
      "--sidebar-border": "240 3.7% 15.9%",
      "--sidebar-ring": "217.2 91.2% 59.8%",
    },
  },
};
