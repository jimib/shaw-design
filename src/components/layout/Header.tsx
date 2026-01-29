import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { SidebarTrigger } from "./Sidebar";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "minimal" | "hero";
  showLogo?: boolean;
  logoVariant?: "dark" | "light" | "shaw";
  logoSize?: number;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  showSidebarTrigger?: boolean;
}

const StyledHeader = styled.header<{ $variant: HeaderProps["variant"] }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.header.padding};
  // background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid hsl(var(--border));
  transition: ${({ theme }) => theme.colors.transitions.smooth};

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "minimal":
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          border-bottom: none;
        `;
      case "hero":
        return `
          padding: ${theme.spacing.xl} ${theme.spacing.md};
          // background: ${theme.colors.gradients.primary};
          border-bottom: none;
          text-align: center;
        `;
      default:
        return `
          // background: hsl(var(--background));
        `;
    }
  }}
`;

const HeaderContent = styled.div<{ $variant: HeaderProps["variant"] }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "hero":
        return `
          flex-direction: column;
          gap: ${theme.spacing.lg};
        `;
      default:
        return `
          flex-direction: row;
        `;
    }
  }}
`;

const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HeaderTitle = styled.h1<{ $variant: HeaderProps["variant"] }>`
  font-size: ${({ theme, $variant }) =>
    $variant === "hero"
      ? theme.typography.textStyles.h1.fontSize
      : theme.typography.textStyles.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme, $variant }) =>
    $variant === "hero"
      ? theme.colors.primaryForeground
      : theme.colors.foreground};
  margin: 0;
`;

const HeaderSubtitle = styled.p<{ $variant: HeaderProps["variant"] }>`
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  color: ${({ theme, $variant }) =>
    $variant === "hero"
      ? theme.colors.primaryForeground
      : theme.colors.mutedForeground};
  margin: ${({ theme, $variant }) =>
    $variant === "hero" ? `${theme.spacing.sm} 0 0 0` : "0"};
  opacity: ${({ $variant }) => ($variant === "hero" ? 0.9 : 1)};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Header: React.FC<HeaderProps> = ({
  children,
  className,
  variant = "default",
  showLogo = true,
  logoVariant = "shaw",
  logoSize = 40,
  title,
  subtitle,
  actions,
  showSidebarTrigger = false,
}) => {
  return (
    <StyledHeader $variant={variant} className={className}>
      <HeaderContent $variant={variant}>
        <HeaderBrand>
          {showSidebarTrigger && <SidebarTrigger />}
          {showLogo && <Logo variant={logoVariant} size={logoSize} />}
          {title && (
            <div>
              <HeaderTitle $variant={variant}>{title}</HeaderTitle>
              {subtitle && (
                <HeaderSubtitle $variant={variant}>{subtitle}</HeaderSubtitle>
              )}
            </div>
          )}
        </HeaderBrand>

        {actions && <HeaderActions>{actions}</HeaderActions>}

        {children}
      </HeaderContent>
    </StyledHeader>
  );
};

