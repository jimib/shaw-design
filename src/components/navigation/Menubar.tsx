import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

interface MenubarProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "minimal" | "bordered";
}

interface MenubarItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

interface MenubarSeparatorProps {
  className?: string;
}

const StyledMenubar = styled.nav<{ $variant: MenubarProps["variant"] }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  background: hsl(var(--background));
  border-radius: 8px;

  ${({ $variant }) => {
    switch ($variant) {
      case "minimal":
        return `
          background: transparent;
          padding: 0;
        `;
      case "bordered":
        return `
          border: 1px solid hsl(var(--border));
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        `;
      default:
        return ``;
    }
  }}
`;

const StyledMenubarItem = styled.div<{ $active: boolean; $disabled: boolean }>`
  position: relative;

  button {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
    background: transparent;
    border: none;
    border-radius: 6px;
    color: hsl(var(--foreground));
    font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
    font-weight: 500;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
    transition: ${({ theme }) => theme.colors.transitions.smooth};

    &:hover {
      background: ${({ $disabled }) =>
        $disabled ? "transparent" : "hsl(var(--accent))"};
      color: ${({ $disabled }) =>
        $disabled ? "hsl(var(--foreground))" : "hsl(var(--accent-foreground))"};
    }

    ${({ $active }) =>
      $active &&
      `
      background: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
      font-weight: 600;
    `}
  }
`;

const StyledMenubarSeparator = styled.div`
  width: 1px;
  height: 20px;
  background: hsl(var(--border));
  margin: 0 ${({ theme }) => theme.spacing.xs};
`;

export const Menubar: React.FC<MenubarProps> = ({
  children,
  className,
  variant = "default",
}) => {
  return (
    <StyledMenubar $variant={variant} className={className}>
      {children}
    </StyledMenubar>
  );
};

export const MenubarItem: React.FC<MenubarItemProps> = ({
  children,
  onClick,
  active = false,
  disabled = false,
  className,
}) => {
  return (
    <StyledMenubarItem $active={active} $disabled={disabled}>
      <button onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    </StyledMenubarItem>
  );
};

export const MenubarSeparator: React.FC<MenubarSeparatorProps> = ({
  className,
}) => {
  return <StyledMenubarSeparator className={className} />;
};

