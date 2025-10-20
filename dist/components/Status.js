import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import { Check, AlertTriangle, X } from "lucide-react";
const sizeMap = {
    sm: 24,
    md: 32,
    lg: 40,
};
const StyledStatus = styled.div `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  width: ${({ $size }) => `${sizeMap[$size]}px`};
  height: ${({ $size }) => `${sizeMap[$size]}px`};
  transition: ${({ theme }) => theme.colors.transitions.smooth};

  ${({ $value, $variant, theme }) => {
    const colorByValue = {
        green: {
            base: theme.colors.success,
            hover: theme.colors.successHover,
            fg: theme.colors.successForeground,
        },
        orange: {
            base: theme.colors.warning,
            hover: theme.colors.warningHover,
            fg: theme.colors.warningForeground,
        },
        red: {
            base: theme.colors.error,
            hover: theme.colors.errorHover,
            fg: theme.colors.destructiveForeground,
        },
    };
    const c = colorByValue[$value];
    if ($variant === "outline") {
        return `
        background: transparent;
        color: ${c.base};
        border: 2px solid ${c.base};
        &:hover { border-color: ${c.hover}; color: ${c.hover}; }
      `;
    }
    // solid
    return `
      background: ${c.base};
      color: ${c.fg};
      border: none;
      &:hover { background: ${c.hover}; }
      box-shadow: 0 0 0 3px ${c.base}20;
    `;
}}
`;
const iconForValue = (value) => {
    switch (value) {
        case "green":
            return Check;
        case "orange":
            return AlertTriangle;
        case "red":
            return X;
        default:
            return Check;
    }
};
export const Status = ({ value, variant = "solid", size = "md", className, style, title, }) => {
    const Icon = iconForValue(value);
    const iconSize = Math.max(12, sizeMap[size] - 12);
    return (_jsx(StyledStatus, { "$value": value, "$variant": variant, "$size": size, className: className, style: style, title: title, children: _jsx(Icon, { size: iconSize, strokeWidth: 2.5 }) }));
};
export default Status;
