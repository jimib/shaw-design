import React from "react";
import styled from "styled-components";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: hsl(var(--muted-foreground));
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 40px;
  padding-right: 16px;
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--input));
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  transition: all 0.2s ease-in-out;
  outline: none;

  &::placeholder {
    color: hsl(var(--muted-foreground));
  }

  &:focus {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className,
  style,
}) => {
  return (
    <SearchContainer className={className} style={style}>
      <SearchIcon aria-hidden="true" />
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </SearchContainer>
  );
};
