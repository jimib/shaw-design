import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledCard = styled.div `
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.card.padding};
  margin: ${({ theme }) => theme.spacing.card.margin};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  backdrop-filter: blur(8px);

  ${({ $variant, theme }) => {
    switch ($variant) {
        case "gradient":
            return `
          background: ${theme.colors.gradients.card};
          border: 2px solid ${theme.colors.border};
        `;
        case "vintage":
            return `
          background: ${theme.colors.gradients.vintage};
          border: 2px solid ${theme.colors.border};
          box-shadow: ${theme.colors.shadows.elegant};
        `;
        default:
            return `
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid  ${theme.colors.border};
        `;
    }
}}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.shadows.elegant};
  }
`;
export const Card = ({ children, variant = "default", className, style, }) => {
    return (_jsx(StyledCard, { "$variant": variant, className: className, style: style, children: children }));
};
// Card sub-components
export const CardHeader = styled.div `
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid hsl(var(--border));
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
export const CardContent = styled.div `
  color: hsl(var(--card-foreground));
`;
export const CardTitle = styled.h3 `
  font-size: ${({ theme }) => theme.typography.textStyles.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.textStyles.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.textStyles.h3.lineHeight};
  color: hsl(var(--card-foreground));
  margin: 0;
`;
export const CardDescription = styled.p `
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
`;
