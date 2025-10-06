import React from "react";
import styled from "styled-components";
import { shawLogo, logoDark, logoLight } from "../assets";

interface LogoProps {
  variant?: "dark" | "light" | "shaw";
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
  variant = "shaw",
  size = 120,
  className,
}) => {
  const getLogoSrc = () => {
    switch (variant) {
      case "shaw":
        return shawLogo;
      case "dark":
        return logoDark;
      case "light":
        return logoLight;
      default:
        return shawLogo;
    }
  };

  const getAltText = () => {
    switch (variant) {
      case "shaw":
        return "Shaw Heritage Logo";
      case "dark":
        return "FeedAR Logo (Dark)";
      case "light":
        return "FeedAR Logo (Light)";
      default:
        return "Shaw Heritage Logo";
    }
  };

  return (
    <LogoContainer className={className}>
      <LogoImage src={getLogoSrc()} alt={getAltText()} $size={size} />
    </LogoContainer>
  );
};
