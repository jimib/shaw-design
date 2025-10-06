import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledMenubar = styled.nav `
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  background: hsl(var(--background));
  border-radius: 8px;

  ${({ $variant }) => {
    switch ($variant) {
        case "minimal":
            return `
          background: transparent;
          padding: 0;
        `;
        case "bordered":
            return `
          border: 1px solid hsl(var(--border));
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        `;
        default:
            return ``;
    }
}}
`;
const StyledMenubarItem = styled.div `
  position: relative;

  button {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
    background: transparent;
    border: none;
    border-radius: 6px;
    color: hsl(var(--foreground));
    font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
    font-weight: 500;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
    transition: ${({ theme }) => theme.colors.transitions.smooth};

    &:hover {
      background: ${({ $disabled }) => $disabled ? "transparent" : "hsl(var(--accent))"};
      color: ${({ $disabled }) => $disabled ? "hsl(var(--foreground))" : "hsl(var(--accent-foreground))"};
    }

    ${({ $active }) => $active &&
    `
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
      font-weight: 600;
    `}
  }
`;
const StyledMenubarSeparator = styled.div `
  width: 1px;
  height: 20px;
  background: hsl(var(--border));
  margin: 0 ${({ theme }) => theme.spacing.xs};
`;
export const Menubar = ({ children, className, variant = "default", }) => {
    return (_jsx(StyledMenubar, { "$variant": variant, className: className, children: children }));
};
export const MenubarItem = ({ children, onClick, active = false, disabled = false, className, }) => {
    return (_jsx(StyledMenubarItem, { "$active": active, "$disabled": disabled, children: _jsx("button", { onClick: onClick, disabled: disabled, className: className, children: children }) }));
};
export const MenubarSeparator = ({ className, }) => {
    return _jsx(StyledMenubarSeparator, { className: className });
};
