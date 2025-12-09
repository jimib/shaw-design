import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "vintage";
  compact?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const StyledCard = styled.div<{
  $variant: CardProps["variant"];
  $compact: boolean;
  $clickable: boolean;
}>`
  border-radius: 12px;
  padding: ${({ $compact, theme }) =>
    $compact
      ? theme.spacing.card.padding.compact
      : theme.spacing.card.padding.default};
  margin: ${({ theme }) => theme.spacing.card.margin};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: ${({ theme }) => theme.colors.transitions.smooth};
  backdrop-filter: blur(8px);
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

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
    transform: ${({ $clickable }) =>
      $clickable ? "translateY(-2px)" : "none"};
    box-shadow: ${({ theme, $clickable }) =>
      $clickable
        ? theme.colors.shadows.elegant
        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"};
  }
`;

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  compact = false,
  onClick,
  className,
  style,
}) => {
  const isClickable = !!onClick;

  return (
    <StyledCard
      $variant={variant}
      $compact={compact}
      $clickable={isClickable}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </StyledCard>
  );
};

// Card sub-components
export const CardHeader = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid hsl(var(--border));
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CardContent = styled.div`
  color: hsl(var(--card-foreground));
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.textStyles.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.textStyles.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.textStyles.h3.lineHeight};
  color: hsl(var(--card-foreground));
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
`;

