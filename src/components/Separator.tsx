import React from "react";
import styled from "styled-components";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  decorative?: boolean;
}

const StyledSeparator = styled.hr<{
  $orientation: SeparatorProps["orientation"];
}>`
  border: none;
  background: hsl(var(--border));
  margin: 0;

  ${({ $orientation }) => {
    switch ($orientation) {
      case "vertical":
        return `
          width: 1px;
          height: 100%;
        `;
      default:
        return `
          height: 1px;
          width: 100%;
        `;
    }
  }}
`;

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  className,
  decorative = true,
}) => {
  return (
    <StyledSeparator
      $orientation={orientation}
      className={className}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
    />
  );
};
