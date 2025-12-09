import React from "react";
import styled from "styled-components";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const StyledLabel = styled.label<{ $required: boolean }>`
  display: block;
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  ${({ $required }) =>
    $required &&
    `
    &::after {
      content: " *";
      color: hsl(var(--destructive));
    }
  `}
`;

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  className,
  ...props
}) => {
  return (
    <StyledLabel $required={required} className={className} {...props}>
      {children}
    </StyledLabel>
  );
};

