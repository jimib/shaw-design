import React from "react";
export { GlobalStyles } from "./GlobalStyles";
export declare const theme: {
    colors: {
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
        successForeground: string;
        warning: string;
        warningHover: string;
        warningForeground: string;
        error: string;
        errorHover: string;
        errorForeground: string;
        info: string;
        infoHover: string;
        infoForeground: string;
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
    spacing: {
        0: string;
        px: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        button: {
            padding: {
                sm: string;
                md: string;
                lg: string;
            };
        };
        input: {
            padding: {
                sm: string;
                md: string;
                lg: string;
            };
        };
        card: {
            padding: string;
            margin: string;
        };
        section: {
            padding: string;
            margin: string;
        };
        header: {
            padding: string;
            margin: string;
        };
    };
    typography: {
        fontFamily: {
            sans: string[];
            serif: string[];
            mono: string[];
        };
        fontSize: {
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
        fontWeight: {
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
        lineHeight: {
            none: string;
            tight: string;
            snug: string;
            normal: string;
            relaxed: string;
            loose: string;
        };
        letterSpacing: {
            tighter: string;
            tight: string;
            normal: string;
            wide: string;
            wider: string;
            widest: string;
        };
        textStyles: {
            h1: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h2: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h3: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h4: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h5: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h6: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            body: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            bodySmall: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            caption: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            button: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            buttonSmall: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
    };
};
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
