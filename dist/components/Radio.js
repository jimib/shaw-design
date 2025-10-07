import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const RadioContainer = styled.div `
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;
const HiddenRadio = styled.input `
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
const StyledRadio = styled.div `
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  flex-shrink: 0;
  position: relative;

  ${({ $checked, $error, $success, $warning }) => {
    if ($error) {
        return `
        border-color: hsl(var(--destructive));
        background: ${$checked ? "hsl(var(--destructive))" : "transparent"};
      `;
    }
    if ($success) {
        return `
        border-color: hsl(var(--success));
        background: ${$checked ? "hsl(var(--success))" : "transparent"};
      `;
    }
    if ($warning) {
        return `
        border-color: hsl(var(--warning));
        background: ${$checked ? "hsl(var(--warning))" : "transparent"};
      `;
    }
    return `
      border-color: hsl(var(--border));
      background: ${$checked ? "hsl(var(--primary))" : "transparent"};
    `;
}}

  ${({ $disabled }) => $disabled &&
    `
    cursor: not-allowed;
  `}
`;
const RadioDot = styled.div `
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
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
export const Radio = ({ label, error = false, success = false, warning = false, disabled = false, checked, className, id, ...props }) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs(RadioContainer, { "$disabled": disabled, className: className, children: [_jsx(HiddenRadio, { type: "radio", id: radioId, checked: checked, disabled: disabled, ...props }), _jsx(StyledRadio, { "$checked": !!checked, "$error": error, "$success": success, "$warning": warning, "$disabled": disabled, onClick: () => {
                    if (!disabled && props.onChange) {
                        const event = {
                            target: { checked: !checked },
                        };
                        props.onChange(event);
                    }
                }, children: _jsx(RadioDot, { "$checked": !!checked }) }), label && (_jsx(Label, { htmlFor: radioId, "$error": error, "$success": success, "$warning": warning, children: label }))] }));
};
