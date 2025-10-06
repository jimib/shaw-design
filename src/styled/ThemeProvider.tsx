"use client";

import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { colors, spacing, typography } from "../tokens";
export { GlobalStyles } from "./GlobalStyles";

export const theme = {
  colors,
  spacing,
  typography,
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
