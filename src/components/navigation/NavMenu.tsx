import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

interface NavMenuProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "pills" | "underline" | "minimal";
  orientation?: "horizontal" | "vertical";
}

interface NavMenuItemProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

interface NavMenuTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledNavMenu = styled.nav<{
  $variant: NavMenuProps["variant"];
  $orientation: NavMenuProps["orientation"];
}>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ $orientation, theme }) => {
    switch ($orientation) {
      case "vertical":
        return `
          flex-direction: column;
          gap: ${theme.spacing.xs};
        `;
      default:
        return `
          flex-direction: row;
          gap: ${theme.spacing.sm};
        `;
    }
  }}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "pills":
        return `
          background: hsl(var(--muted));
          padding: ${theme.spacing.xs};
          border-radius: 8px;
        `;
      case "underline":
        return `
          border-bottom: 1px solid hsl(var(--border));
        `;
      case "minimal":
        return `
          gap: ${theme.spacing.lg};
        `;
      default:
        return ``;
    }
  }}
`;

const StyledNavMenuItem = styled.li<{
  $active: boolean;
  $variant: NavMenuProps["variant"];
}>`
  list-style: none;

  a {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
    color: hsl(var(--foreground));
    text-decoration: none;
    border-radius: ${({ $variant }) => ($variant === "pills" ? "6px" : "0")};
    transition: ${({ theme }) => theme.colors.transitions.smooth};
    font-weight: 500;

    &:hover {
      color: hsl(var(--primary));
      background: ${({ $variant }) =>
        $variant === "pills" ? "hsl(var(--accent))" : "transparent"};
    }

    ${({ $active, $variant }) => {
      if ($active) {
        switch ($variant) {
          case "pills":
            return `
              background: hsl(var(--primary));
              color: hsl(var(--primary-foreground));
            `;
          case "underline":
            return `
              border-bottom: 2px solid hsl(var(--primary));
              color: hsl(var(--primary));
            `;
          default:
            return `
              color: hsl(var(--primary));
              font-weight: 600;
            `;
        }
      }
    }}
  }
`;

const StyledNavMenuTrigger = styled(Button)<{ $active: boolean }>`
  ${({ $active }) =>
    $active &&
    `
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  `}
`;

export const NavMenu: React.FC<NavMenuProps> = ({
  children,
  className,
  variant = "default",
  orientation = "horizontal",
}) => {
  return (
    <StyledNavMenu
      $variant={variant}
      $orientation={orientation}
      className={className}
    >
      {children}
    </StyledNavMenu>
  );
};

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  children,
  href,
  active = false,
  onClick,
  className,
}) => {
  const content = href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );

  return (
    <StyledNavMenuItem $active={active} $variant="default">
      {content}
    </StyledNavMenuItem>
  );
};

export const NavMenuTrigger: React.FC<NavMenuTriggerProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <StyledNavMenuTrigger
      variant="ghost"
      onClick={onClick}
      className={className}
      $active={false}
    >
      {children}
    </StyledNavMenuTrigger>
  );
};
