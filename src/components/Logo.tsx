import React from "react";
import styled from "styled-components";

interface LogoProps {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
}

const LogoImage = styled.img<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: auto;
  display: block;
`;

const LogoContainer = styled.div`
  display: inline-block;
`;

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = 120,
  className,
}) => {
  // For now, we'll use a placeholder. In a real implementation, you'd import the actual SVG files
  const logoSrc =
    variant === "dark"
      ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTExODI3Ii8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RmVlZEFSPC90ZXh0Pgo8L3N2Zz4K"
      : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzExMTgyNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RmVlZEFSPC90ZXh0Pgo8L3N2Zz4K";

  return (
    <LogoContainer className={className}>
      <LogoImage src={logoSrc} alt="FeedAR Logo" $size={size} />
    </LogoContainer>
  );
};
