import { spacing } from "../tokens/spacing";
export namespace theme {
    namespace extend {
        export let colors: {
            primary: string;
            primaryHover: string;
            primaryLight: string;
            primaryDark: string;
            primaryForeground: string;
            secondary: string;
            secondaryHover: string;
            secondaryLight: string;
            secondaryDark: string;
            secondaryForeground: string;
            accent: string;
            accentHover: string;
            accentLight: string;
            accentDark: string;
            accentForeground: string;
            background: string;
            foreground: string;
            card: string;
            cardForeground: string;
            popover: string;
            popoverForeground: string;
            muted: string;
            mutedForeground: string;
            destructive: string;
            destructiveForeground: string;
            border: string;
            input: string;
            ring: string;
            radius: string;
            sidebar: {
                background: string;
                foreground: string;
                primary: string;
                primaryForeground: string;
                accent: string;
                accentForeground: string;
                border: string;
                ring: string;
            };
            dark: {
                background: string;
                foreground: string;
                card: string;
                cardForeground: string;
                popover: string;
                popoverForeground: string;
                primary: string;
                primaryForeground: string;
                secondary: string;
                secondaryForeground: string;
                muted: string;
                mutedForeground: string;
                accent: string;
                accentForeground: string;
                destructive: string;
                destructiveForeground: string;
                border: string;
                input: string;
                ring: string;
                sidebar: {
                    background: string;
                    foreground: string;
                    primary: string;
                    primaryForeground: string;
                    accent: string;
                    accentForeground: string;
                    border: string;
                    ring: string;
                };
            };
            white: string;
            black: string;
            gray: {
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
                500: string;
                600: string;
                700: string;
                800: string;
                900: string;
            };
            success: string;
            successHover: string;
            warning: string;
            warningHover: string;
            error: string;
            errorHover: string;
            info: string;
            infoHover: string;
            gradients: {
                primary: string;
                card: string;
                vintage: string;
            };
            shadows: {
                elegant: string;
                glow: string;
            };
            transitions: {
                smooth: string;
                spring: string;
            };
            cssVariables: {
                light: {
                    "--background": string;
                    "--foreground": string;
                    "--card": string;
                    "--card-foreground": string;
                    "--popover": string;
                    "--popover-foreground": string;
                    "--primary": string;
                    "--primary-foreground": string;
                    "--secondary": string;
                    "--secondary-foreground": string;
                    "--muted": string;
                    "--muted-foreground": string;
                    "--accent": string;
                    "--accent-foreground": string;
                    "--destructive": string;
                    "--destructive-foreground": string;
                    "--success": string;
                    "--success-foreground": string;
                    "--warning": string;
                    "--warning-foreground": string;
                    "--info": string;
                    "--info-foreground": string;
                    "--border": string;
                    "--input": string;
                    "--ring": string;
                    "--radius": string;
                    "--gradient-primary": string;
                    "--gradient-card": string;
                    "--gradient-vintage": string;
                    "--shadow-elegant": string;
                    "--shadow-glow": string;
                    "--transition-smooth": string;
                    "--transition-spring": string;
                    "--sidebar-background": string;
                    "--sidebar-foreground": string;
                    "--sidebar-primary": string;
                    "--sidebar-primary-foreground": string;
                    "--sidebar-accent": string;
                    "--sidebar-accent-foreground": string;
                    "--sidebar-border": string;
                    "--sidebar-ring": string;
                };
                dark: {
                    "--background": string;
                    "--foreground": string;
                    "--card": string;
                    "--card-foreground": string;
                    "--popover": string;
                    "--popover-foreground": string;
                    "--primary": string;
                    "--primary-foreground": string;
                    "--secondary": string;
                    "--secondary-foreground": string;
                    "--muted": string;
                    "--muted-foreground": string;
                    "--accent": string;
                    "--accent-foreground": string;
                    "--destructive": string;
                    "--destructive-foreground": string;
                    "--success": string;
                    "--success-foreground": string;
                    "--warning": string;
                    "--warning-foreground": string;
                    "--info": string;
                    "--info-foreground": string;
                    "--border": string;
                    "--input": string;
                    "--ring": string;
                    "--sidebar-background": string;
                    "--sidebar-foreground": string;
                    "--sidebar-primary": string;
                    "--sidebar-primary-foreground": string;
                    "--sidebar-accent": string;
                    "--sidebar-accent-foreground": string;
                    "--sidebar-border": string;
                    "--sidebar-ring": string;
                };
            };
        };
        export let backgroundImage: {
            "gradient-primary": string;
            "gradient-card": string;
            "gradient-vintage": string;
        };
        export namespace boxShadow {
            let elegant: string;
            let glow: string;
        }
        export namespace transitionTimingFunction {
            let smooth: string;
            let spring: string;
        }
        export { spacing };
        export let fontFamily: {
            sans: string[];
            serif: string[];
            mono: string[];
        };
        export let fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
            "7xl": string;
            "8xl": string;
            "9xl": string;
        };
        export let fontWeight: {
            thin: string;
            extralight: string;
            light: string;
            normal: string;
            medium: string;
            semibold: string;
            bold: string;
            extrabold: string;
            black: string;
        };
        export let lineHeight: {
            none: string;
            tight: string;
            snug: string;
            normal: string;
            relaxed: string;
            loose: string;
        };
        export let letterSpacing: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
    }
}
