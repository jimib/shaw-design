import React from "react";
import styled from "styled-components";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  warning?: boolean;
}

const StyledSelect = styled.select<{
  $error: boolean;
  $success: boolean;
  $warning: boolean;
}>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.input.padding.md};
  padding-right: 40px; /* Add space for custom arrow */
  border-radius: 8px;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  line-height: ${({ theme }) => theme.typography.textStyles.body.lineHeight};
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  outline: none;
  background: hsl(var(--input));
  border: 1px solid hsl(var(--border));
  color: hsl(var(--foreground));
  cursor: pointer;

  /* Hide native select arrow */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $error, $success, $warning }) => {
    if ($error) {
      return `
        border-color: hsl(var(--destructive));
        &:focus {
          border-color: hsl(var(--destructive));
          box-shadow: 0 0 0 2px hsl(var(--destructive) / 0.2);
        }
      `;
    }
    if ($success) {
      return `
        border-color: hsl(var(--success));
        &:focus {
          border-color: hsl(var(--success));
          box-shadow: 0 0 0 2px hsl(var(--success) / 0.2);
        }
      `;
    }
    if ($warning) {
      return `
        border-color: hsl(var(--warning));
        &:focus {
          border-color: hsl(var(--warning));
          box-shadow: 0 0 0 2px hsl(var(--warning) / 0.2);
        }
      `;
    }
    return "";
  }}
`;

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: hsl(var(--muted-foreground));
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  &::after {
    content: "▼";
    font-size: 10px;
    font-weight: bold;
    transition: ${({ theme }) => theme.colors.transitions.smooth};
  }
`;

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  error = false,
  success = false,
  warning = false,
  className,
  ...props
}) => {
  return (
    <SelectContainer className={className}>
      <StyledSelect
        $error={error}
        $success={success}
        $warning={warning}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <SelectIcon />
    </SelectContainer>
  );
};
