import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "cms";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
}

const StyledButton = styled.button<{
  $variant: ButtonProps["variant"];
  $size: ButtonProps["size"];
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  outline: none;

  /* Size variants */
  ${({ $size, theme }) => {
    switch ($size) {
      case "sm":
        return `
          padding: ${theme.spacing.button.padding.sm};
          font-size: ${theme.typography.textStyles.buttonSmall.fontSize};
          line-height: ${theme.typography.textStyles.buttonSmall.lineHeight};
        `;
      case "lg":
        return `
          padding: ${theme.spacing.button.padding.lg};
          font-size: ${theme.typography.textStyles.button.fontSize};
          line-height: ${theme.typography.textStyles.button.lineHeight};
        `;
      default: // md
        return `
          padding: ${theme.spacing.button.padding.md};
          font-size: ${theme.typography.textStyles.button.fontSize};
          line-height: ${theme.typography.textStyles.button.lineHeight};
        `;
    }
  }}

  /* Color variants */
  ${({ $variant, $disabled, theme }) => {
    if ($disabled) {
      return `
        background: ${theme.colors.gray[300]};
        color: ${theme.colors.mutedForeground};
        opacity: 0.6;
      `;
    }

    switch ($variant) {
      case "primary":
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.primaryForeground};
          &:hover {
            background: ${theme.colors.primaryHover};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
      case "secondary":
        return `
          background: ${theme.colors.secondary};
          color: ${theme.colors.secondaryForeground};
          &:hover {
            background: ${theme.colors.secondaryHover};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.secondary}20;
          }
        `;
      case "accent":
        return `
          background: ${theme.colors.accent};
          color: ${theme.colors.accentForeground};
          &:hover {
            background: ${theme.colors.accentHover};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.accent}20;
          }
        `;
      case "outline":
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.primaryForeground};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.muted};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
      case "cms":
        return `
          background: ${theme.colors.gradients.primary};
          color: ${theme.colors.primaryForeground};
          font-weight: ${theme.typography.fontWeight.semibold};
          &:hover {
            box-shadow: ${theme.colors.shadows.glow};
            transform: scale(1.02);
            transition: ${theme.colors.transitions.smooth};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
      default:
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.primaryForeground};
          &:hover {
            background: ${theme.colors.primaryHover};
          }
          &:focus {
            box-shadow: 0 0 0 3px ${theme.colors.primary}20;
          }
        `;
    }
  }}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className,
  style,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
      style={style}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};
