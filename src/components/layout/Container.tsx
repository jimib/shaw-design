import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  centered?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const StyledContainer = styled.div<{
  $size: ContainerProps["size"];
  $centered: boolean;
  $padding: ContainerProps["padding"];
}>`
  width: 100%;
  margin: ${({ $centered }) => ($centered ? "0 auto" : "0")};

  ${({ $size, theme }) => {
    switch ($size) {
      case "sm":
        return `max-width: 640px;`;
      case "md":
        return `max-width: 768px;`;
      case "lg":
        return `max-width: 1024px;`;
      case "xl":
        return `max-width: 1280px;`;
      case "full":
        return `max-width: none;`;
      default:
        return `max-width: 1200px;`;
    }
  }}

  ${({ $padding, theme }) => {
    switch ($padding) {
      case "none":
        return `padding: 0;`;
      case "sm":
        return `padding: 0 ${theme.spacing.sm};`;
      case "md":
        return `padding: 0 ${theme.spacing.md};`;
      case "lg":
        return `padding: 0 ${theme.spacing.lg};`;
      default:
        return `padding: 0 ${theme.spacing.md};`;
    }
  }}
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "lg",
  centered = true,
  padding = "md",
}) => {
  return (
    <StyledContainer
      $size={size}
      $centered={centered}
      $padding={padding}
      className={className}
    >
      {children}
    </StyledContainer>
  );
};
