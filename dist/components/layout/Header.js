import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { Logo } from "../Logo";
const StyledHeader = styled.header `
  width: 100%;
  padding: ${({ theme }) => theme.spacing.header.padding};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid hsl(var(--border));
  transition: ${({ theme }) => theme.colors.transitions.smooth};

  ${({ $variant, theme }) => {
    switch ($variant) {
        case "minimal":
            return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          border-bottom: none;
        `;
        case "hero":
            return `
          padding: ${theme.spacing.xl} ${theme.spacing.md};
          background: ${theme.colors.gradients.primary};
          border-bottom: none;
          text-align: center;
        `;
        default:
            return `
          background: hsl(var(--background));
        `;
    }
}}
`;
const HeaderContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  ${({ $variant, theme }) => {
    switch ($variant) {
        case "hero":
            return `
          flex-direction: column;
          gap: ${theme.spacing.lg};
        `;
        default:
            return `
          flex-direction: row;
        `;
    }
}}
`;
const HeaderBrand = styled.div `
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;
const HeaderTitle = styled.h1 `
  font-size: ${({ theme, $variant }) => $variant === "hero"
    ? theme.typography.textStyles.h1.fontSize
    : theme.typography.textStyles.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme, $variant }) => $variant === "hero"
    ? theme.colors.primaryForeground
    : theme.colors.foreground};
  margin: 0;
`;
const HeaderSubtitle = styled.p `
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  color: ${({ theme, $variant }) => $variant === "hero"
    ? theme.colors.primaryForeground
    : theme.colors.mutedForeground};
  margin: ${({ theme, $variant }) => $variant === "hero" ? `${theme.spacing.sm} 0 0 0` : "0"};
  opacity: ${({ $variant }) => ($variant === "hero" ? 0.9 : 1)};
`;
const HeaderActions = styled.div `
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
export const Header = ({ children, className, variant = "default", showLogo = true, logoVariant = "shaw", logoSize = 40, title, subtitle, actions, }) => {
    return (_jsx(StyledHeader, { "$variant": variant, className: className, children: _jsxs(HeaderContent, { "$variant": variant, children: [_jsxs(HeaderBrand, { children: [showLogo && _jsx(Logo, { variant: logoVariant, size: logoSize }), title && (_jsxs("div", { children: [_jsx(HeaderTitle, { "$variant": variant, children: title }), subtitle && (_jsx(HeaderSubtitle, { "$variant": variant, children: subtitle }))] }))] }), actions && _jsx(HeaderActions, { children: actions }), children] }) }));
};
