import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledMain = styled.main `
  flex: 1;
  // background: hsl(var(--background));
  overflow-y: auto;
  overflow-x: hidden;

  ${({ $variant, theme }) => {
    switch ($variant) {
        case "centered":
            return `
          display: flex;
          align-items: center;
          justify-content: center;
          padding: ${theme.spacing.xl};
        `;
        case "full-width":
            return `
          width: 100%;
          max-width: none;
        `;
        default:
            return `
          max-width: 1200px;
          margin: 0 auto;
        `;
    }
}}

  ${({ $padding, theme }) => {
    switch ($padding) {
        case "none":
            return `padding: 0;`;
        case "sm":
            return `padding: ${theme.spacing.sm};`;
        case "md":
            return `padding: ${theme.spacing.md};`;
        case "lg":
            return `padding: ${theme.spacing.lg};`;
        default:
            return `padding: ${theme.spacing.md};`;
    }
}}
`;
export const Main = ({ children, className, variant = "default", padding = "md", }) => {
    return (_jsx(StyledMain, { "$variant": variant, "$padding": padding, className: className, children: children }));
};
