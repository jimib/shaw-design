import React from "react";
import styled from "styled-components";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "transparent";
  error?: boolean;
  success?: boolean;
  warning?: boolean;
}

const StyledTextarea = styled.textarea<{
  $variant: TextareaProps["variant"];
  $error: boolean;
  $success: boolean;
  $warning: boolean;
}>`
  width: 100%;
  min-height: 80px;
  padding: ${({ theme }) => theme.spacing.input.padding.md};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  line-height: ${({ theme }) => theme.typography.textStyles.body.lineHeight};
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  outline: none;
  resize: vertical;

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
            color: hsl(var(--muted-foreground));
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
            color: hsl(var(--muted-foreground));
          }
          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `;
    }
  }}

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

export const Textarea: React.FC<TextareaProps> = ({
  variant = "default",
  error = false,
  success = false,
  warning = false,
  className,
  ...props
}) => {
  return (
    <StyledTextarea
      $variant={variant}
      $error={error}
      $success={success}
      $warning={warning}
      className={className}
      {...props}
    />
  );
};
