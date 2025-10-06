import React from "react";
import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "centered" | "full-width";
  padding?: "none" | "sm" | "md" | "lg";
}

const StyledMain = styled.main<{
  $variant: MainProps["variant"];
  $padding: MainProps["padding"];
}>`
  flex: 1;
  min-height: calc(100vh - 80px); // Adjust based on header height
  background: hsl(var(--background));

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "centered":
        return `
          display: flex;
          align-items: center;
          justify-content: center;
          padding: ${theme.spacing.xl};
        `;
      case "full-width":
        return `
          width: 100%;
          max-width: none;
        `;
      default:
        return `
          max-width: 1200px;
          margin: 0 auto;
        `;
    }
  }}

  ${({ $padding, theme }) => {
    switch ($padding) {
      case "none":
        return `padding: 0;`;
      case "sm":
        return `padding: ${theme.spacing.sm};`;
      case "md":
        return `padding: ${theme.spacing.md};`;
      case "lg":
        return `padding: ${theme.spacing.lg};`;
      default:
        return `padding: ${theme.spacing.md};`;
    }
  }}
`;

export const Main: React.FC<MainProps> = ({
  children,
  className,
  variant = "default",
  padding = "md",
}) => {
  return (
    <StyledMain $variant={variant} $padding={padding} className={className}>
      {children}
    </StyledMain>
  );
};
