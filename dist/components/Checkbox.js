import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const CheckboxContainer = styled.div `
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;
const HiddenCheckbox = styled.input `
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
const StyledCheckbox = styled.div `
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  flex-shrink: 0;

  ${({ $checked, $error, $success, $warning }) => {
    if ($error) {
        return `
        border-color: hsl(var(--destructive));
        background: ${$checked ? "hsl(var(--destructive))" : "transparent"};
        color: white;
      `;
    }
    if ($success) {
        return `
        border-color: hsl(var(--success));
        background: ${$checked ? "hsl(var(--success))" : "transparent"};
        color: white;
      `;
    }
    if ($warning) {
        return `
        border-color: hsl(var(--warning));
        background: ${$checked ? "hsl(var(--warning))" : "transparent"};
        color: white;
      `;
    }
    return `
      border-color: hsl(var(--border));
      background: ${$checked ? "hsl(var(--primary))" : "transparent"};
      color: ${$checked ? "hsl(var(--primary-foreground))" : "transparent"};
    `;
}}

  ${({ $disabled }) => $disabled &&
    `
    cursor: not-allowed;
  `}
`;
const Checkmark = styled.svg `
  width: 12px;
  height: 12px;
  opacity: ${({ $checked }) => ($checked ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
const Label = styled.label `
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  color: hsl(var(--foreground));
  cursor: pointer;
  user-select: none;

  ${({ $error, $success, $warning }) => {
    if ($error) {
        return `color: hsl(var(--destructive));`;
    }
    if ($success) {
        return `color: hsl(var(--success));`;
    }
    if ($warning) {
        return `color: hsl(var(--warning));`;
    }
    return "";
}}
`;
export const Checkbox = ({ label, error = false, success = false, warning = false, disabled = false, checked, className, id, ...props }) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs(CheckboxContainer, { "$disabled": disabled, className: className, children: [_jsx(HiddenCheckbox, { type: "checkbox", id: checkboxId, checked: checked, disabled: disabled, ...props }), _jsx(StyledCheckbox, { "$checked": !!checked, "$error": error, "$success": success, "$warning": warning, "$disabled": disabled, onClick: () => {
                    if (!disabled && props.onChange) {
                        const event = {
                            target: { checked: !checked },
                        };
                        props.onChange(event);
                    }
                }, children: _jsx(Checkmark, { "$checked": !!checked, viewBox: "0 0 12 12", children: _jsx("path", { d: "M10 3L4.5 8.5L2 6", stroke: "currentColor", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), label && (_jsx(Label, { htmlFor: checkboxId, "$error": error, "$success": success, "$warning": warning, children: label }))] }));
};
