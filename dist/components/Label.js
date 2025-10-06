import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledLabel = styled.label `
  display: block;
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  ${({ $required }) => $required &&
    `
    &::after {
      content: " *";
      color: hsl(var(--destructive));
    }
  `}
`;
export const Label = ({ children, required = false, className, ...props }) => {
    return (_jsx(StyledLabel, { "$required": required, className: className, ...props, children: children }));
};
