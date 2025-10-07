import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { keyframes } from "styled-components";
const spin = keyframes `
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const ProgressContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
const ProgressBarContainer = styled.div `
  width: 100%;
  background: hsl(var(--muted));
  border-radius: 8px;
  overflow: hidden;

  ${({ $size }) => {
    switch ($size) {
        case "sm":
            return `height: 4px;`;
        case "md":
            return `height: 8px;`;
        case "lg":
            return `height: 12px;`;
        default:
            return `height: 8px;`;
    }
}}
`;
const ProgressBar = styled.div `
  height: 100%;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
  width: ${({ $value, $max }) => Math.min(100, Math.max(0, ($value / $max) * 100))}%;

  ${({ $variant }) => {
    switch ($variant) {
        case "success":
            return `background: hsl(var(--success));`;
        case "warning":
            return `background: hsl(var(--warning));`;
        case "error":
            return `background: hsl(var(--destructive));`;
        default:
            return `background: hsl(var(--primary));`;
    }
}}
`;
const SpinnerContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $size }) => {
    switch ($size) {
        case "sm":
            return `height: 24px;`;
        case "md":
            return `height: 32px;`;
        case "lg":
            return `height: 40px;`;
        default:
            return `height: 32px;`;
    }
}}
`;
const Spinner = styled.div `
  border-radius: 50%;
  border: 2px solid hsl(var(--muted));
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;

  ${({ $size }) => {
    switch ($size) {
        case "sm":
            return `width: 16px; height: 16px;`;
        case "md":
            return `width: 24px; height: 24px;`;
        case "lg":
            return `width: 32px; height: 32px;`;
        default:
            return `width: 24px; height: 24px;`;
    }
}}

  ${({ $variant }) => {
    switch ($variant) {
        case "success":
            return `border-top-color: hsl(var(--success));`;
        case "warning":
            return `border-top-color: hsl(var(--warning));`;
        case "error":
            return `border-top-color: hsl(var(--destructive));`;
        default:
            return `border-top-color: hsl(var(--primary));`;
    }
}}
`;
const ProgressLabel = styled.div `
  font-size: ${({ theme, $size }) => {
    switch ($size) {
        case "sm":
            return theme.typography.textStyles.bodySmall.fontSize;
        case "md":
            return theme.typography.textStyles.body.fontSize;
        case "lg":
            return theme.typography.textStyles.body.fontSize;
        default:
            return theme.typography.textStyles.body.fontSize;
    }
}};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  text-align: center;

  ${({ $variant }) => {
    switch ($variant) {
        case "success":
            return `color: hsl(var(--success));`;
        case "warning":
            return `color: hsl(var(--warning));`;
        case "error":
            return `color: hsl(var(--destructive));`;
        default:
            return `color: hsl(var(--foreground));`;
    }
}}
`;
const PercentageText = styled.span `
  font-size: ${({ theme, $size }) => {
    switch ($size) {
        case "sm":
            return theme.typography.textStyles.caption.fontSize;
        case "md":
            return theme.typography.textStyles.bodySmall.fontSize;
        case "lg":
            return theme.typography.textStyles.body.fontSize;
        default:
            return theme.typography.textStyles.bodySmall.fontSize;
    }
}};
  color: hsl(var(--muted-foreground));
  margin-left: ${({ theme }) => theme.spacing.sm};
`;
export const Progress = ({ value, max = 100, size = "md", variant = "default", showPercentage = true, showSpinner = false, label, className, }) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    return (_jsxs(ProgressContainer, { className: className, children: [showSpinner && (_jsx(SpinnerContainer, { "$size": size, children: _jsx(Spinner, { "$size": size, "$variant": variant }) })), (label || showPercentage) && (_jsxs(ProgressLabel, { "$size": size, "$variant": variant, children: [label, showPercentage && (_jsxs(PercentageText, { "$size": size, children: [percentage.toFixed(1), "%"] }))] })), _jsx(ProgressBarContainer, { "$size": size, children: _jsx(ProgressBar, { "$value": value, "$max": max, "$variant": variant, "$size": size }) })] }));
};
