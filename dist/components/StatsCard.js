import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { TrendingUp } from "lucide-react";
const CardLink = styled.a `
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: ${({ $hasClick }) => ($hasClick ? "pointer" : "default")};
`;
const CardContainer = styled.div `
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  padding: 20px;
  transition: all 0.2s ease-in-out;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    border-color: hsl(var(--primary) / 0.2);
    box-shadow: var(--shadow-elevated);
  }
`;
const CardContent = styled.div `
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const TextContent = styled.div `
  flex: 1;
`;
const Value = styled.p `
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: hsl(var(--foreground));
  margin: 0 0 4px 0;
  line-height: 1.2;
`;
const Label = styled.p `
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: 0;
`;
const IconContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: hsl(var(--secondary));
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  ${CardContainer}:hover & {
    background: hsl(var(--primary) / 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: hsl(var(--muted-foreground));
    transition: color 0.2s ease-in-out;
  }

  ${CardContainer}:hover & svg {
    color: hsl(var(--primary));
  }
`;
const ChangeIndicator = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: hsl(142 76% 36%);
  margin-top: 12px;

  svg {
    width: 12px;
    height: 12px;
  }
`;
export const StatsCard = ({ label, value, change, icon: Icon, href, onClick, className, style, }) => {
    const content = (_jsxs(CardContainer, { className: className, style: style, children: [_jsxs(CardContent, { children: [_jsxs(TextContent, { children: [_jsx(Value, { children: value }), _jsx(Label, { children: label })] }), _jsx(IconContainer, { children: _jsx(Icon, {}) })] }), change && (_jsxs(ChangeIndicator, { children: [_jsx(TrendingUp, {}), change] }))] }));
    if (href) {
        return (_jsx(CardLink, { href: href, "$hasClick": true, children: content }));
    }
    if (onClick) {
        return (_jsx("div", { onClick: onClick, style: { cursor: "pointer" }, children: content }));
    }
    return content;
};
