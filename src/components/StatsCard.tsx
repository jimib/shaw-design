import React from "react";
import styled from "styled-components";
import { LucideIcon, TrendingUp } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CardLink = styled.a<{ $hasClick: boolean }>`
  display: block;
  text-decoration: none;
  color: inherit;
  cursor: ${({ $hasClick }) => ($hasClick ? "pointer" : "default")};
`;

const CardContainer = styled.div`
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  padding: 20px;
  transition: all 0.2s ease-in-out;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    border-color: hsl(var(--primary) / 0.2);
    box-shadow: var(--shadow-elevated);
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Value = styled.p`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: hsl(var(--foreground));
  margin: 0 0 4px 0;
  line-height: 1.2;
`;

const Label = styled.p`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--muted-foreground));
  margin: 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: hsl(var(--secondary));
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  ${CardContainer}:hover & {
    background: hsl(var(--primary) / 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    color: hsl(var(--muted-foreground));
    transition: color 0.2s ease-in-out;
  }

  ${CardContainer}:hover & svg {
    color: hsl(var(--primary));
  }
`;

const ChangeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: hsl(142 76% 36%);
  margin-top: 12px;

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  change,
  icon: Icon,
  href,
  onClick,
  className,
  style,
}) => {
  const content = (
    <CardContainer className={className} style={style}>
      <CardContent>
        <TextContent>
          <Value>{value}</Value>
          <Label>{label}</Label>
        </TextContent>
        <IconContainer>
          <Icon />
        </IconContainer>
      </CardContent>
      {change && (
        <ChangeIndicator>
          <TrendingUp />
          {change}
        </ChangeIndicator>
      )}
    </CardContainer>
  );

  if (href) {
    return (
      <CardLink href={href} $hasClick={true}>
        {content}
      </CardLink>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        {content}
      </div>
    );
  }

  return content;
};
