import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledInput = styled.input `
  width: 100%;
  padding: ${({ theme }) => theme.spacing.input.padding.md};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  line-height: ${({ theme }) => theme.typography.textStyles.body.lineHeight};
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  outline: none;

  ${({ $variant, theme }) => {
    switch ($variant) {
        case "transparent":
            return `
          background: transparent;
          border: 1px solid transparent;
          color: hsl(var(--foreground));
          &:focus {
            border-color: hsl(var(--ring));
            box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
          }
          &::placeholder {
            // color: hsl(var(--muted-foreground));
            // color: red;
            color: white;
          }
        `;
        default:
            return `
          background: hsl(var(--input));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          &:focus {
            border-color: hsl(var(--ring));
            box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
          }
          &::placeholder {
            // color: hsl(var(--muted-foreground));
            // color: red;
            color: white;
          }
          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `;
    }
}}
`;
export const Input = ({ variant = "default", className, ...props }) => {
    return _jsx(StyledInput, { "$variant": variant, className: className, ...props });
};
