import React from "react";
import styled from "styled-components";
import { Check, AlertTriangle, X, Circle, Trash } from "lucide-react";

type StatusValue = "green" | "orange" | "red" | "gray";
type StatusVariant = "solid" | "outline";

export interface StatusProps {
  value: StatusValue;
  variant?: StatusVariant; // solid (default) or outline (transparent bg with colored border)
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 40,
} as const;

const StyledStatus = styled.div<{
  $value: StatusValue;
  $variant: StatusVariant;
  $size: keyof typeof sizeMap;
}>`
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
      gray: {
        base: theme.colors.gray[500],
        hover: theme.colors.gray[600],
        fg: theme.colors.white,
      },
    } as const;

    const c = colorByValue[$value];

    if ($variant === "outline") {
      return `
        background: transparent;
        color: ${c.base};
        stroke: ${c.base};
        border: 2px solid ${c.base};
        &:hover { border-color: ${c.hover}; color: ${c.hover}; }
      `;
    }

    // solid
    return `
      background: ${c.base};
      color: ${theme.colors.white};
      stroke: ${theme.colors.white};
      border: none;
      &:hover { background: ${c.hover}; }
      box-shadow: 0 0 0 3px ${c.base}20;
    `;
  }}
`;

const iconForValue = (value: StatusValue) => {
  switch (value) {
    case "green":
      return Check;
    case "orange":
      return AlertTriangle;
    case "red":
      return X;
    case "gray":
      return Trash;
    default:
      return Check;
  }
};

export const Status: React.FC<StatusProps> = ({
  value,
  variant = "solid",
  size = "md",
  className,
  style,
  title,
}) => {
  const Icon = iconForValue(value);
  const iconSize = Math.max(12, sizeMap[size] - 12);

  return (
    <StyledStatus
      $value={value}
      $variant={variant}
      $size={size}
      className={className}
      style={style}
      title={title}
    >
      <Icon size={iconSize} strokeWidth={2.5} />
    </StyledStatus>
  );
};

export default Status;
