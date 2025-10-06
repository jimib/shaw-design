"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { colors, spacing, typography } from "../tokens";
export { GlobalStyles } from "./GlobalStyles";
export const theme = {
    colors,
    spacing,
    typography,
};
export const ThemeProvider = ({ children, }) => _jsx(StyledThemeProvider, { theme: theme, children: children });
