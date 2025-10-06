import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { Button } from "../Button";
const StyledNavMenu = styled.nav `
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ $orientation, theme }) => {
    switch ($orientation) {
        case "vertical":
            return `
          flex-direction: column;
          gap: ${theme.spacing.xs};
        `;
        default:
            return `
          flex-direction: row;
          gap: ${theme.spacing.sm};
        `;
    }
}}

  ${({ $variant, theme }) => {
    switch ($variant) {
        case "pills":
            return `
          background: hsl(var(--muted));
          padding: ${theme.spacing.xs};
          border-radius: 8px;
        `;
        case "underline":
            return `
          border-bottom: 1px solid hsl(var(--border));
        `;
        case "minimal":
            return `
          gap: ${theme.spacing.lg};
        `;
        default:
            return ``;
    }
}}
`;
const StyledNavMenuItem = styled.li `
  list-style: none;

  a {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
    color: hsl(var(--foreground));
    text-decoration: none;
    border-radius: ${({ $variant }) => ($variant === "pills" ? "6px" : "0")};
    transition: ${({ theme }) => theme.colors.transitions.smooth};
    font-weight: 500;

    &:hover {
      color: hsl(var(--primary));
      background: ${({ $variant }) => $variant === "pills" ? "hsl(var(--accent))" : "transparent"};
    }

    ${({ $active, $variant }) => {
    if ($active) {
        switch ($variant) {
            case "pills":
                return `
              background: hsl(var(--primary));
              color: hsl(var(--primary-foreground));
            `;
            case "underline":
                return `
              border-bottom: 2px solid hsl(var(--primary));
              color: hsl(var(--primary));
            `;
            default:
                return `
              color: hsl(var(--primary));
              font-weight: 600;
            `;
        }
    }
}}
  }
`;
const StyledNavMenuTrigger = styled(Button) `
  ${({ $active }) => $active &&
    `
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  `}
`;
export const NavMenu = ({ children, className, variant = "default", orientation = "horizontal", }) => {
    return (_jsx(StyledNavMenu, { "$variant": variant, "$orientation": orientation, className: className, children: children }));
};
export const NavMenuItem = ({ children, href, active = false, onClick, className, }) => {
    const content = href ? (_jsx("a", { href: href, className: className, children: children })) : (_jsx("button", { onClick: onClick, className: className, children: children }));
    return (_jsx(StyledNavMenuItem, { "$active": active, "$variant": "default", children: content }));
};
export const NavMenuTrigger = ({ children, onClick, className, }) => {
    return (_jsx(StyledNavMenuTrigger, { variant: "ghost", onClick: onClick, className: className, "$active": false, children: children }));
};
