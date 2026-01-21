import React from "react";
import styled from "styled-components";
import { LucideIcon } from "lucide-react";

export interface QuickAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon: LucideIcon;
}

interface QuickActionsProps {
  actions: QuickAction[];
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: hsl(var(--foreground));
  margin: 0 0 16px 0;
`;

const ActionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ActionLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  text-decoration: none;
  color: inherit;
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
    box-shadow: var(--shadow-subtle);
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
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
    box-shadow: var(--shadow-subtle);
  }

  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.375rem;
  background: hsl(var(--primary) / 0.1);
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
    color: hsl(var(--primary));
  }
`;

const ActionLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
`;

export const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  title = "Quick Actions",
  className,
  style,
}) => {
  return (
    <ActionsContainer className={className} style={style}>
      {title && <ActionsTitle>{title}</ActionsTitle>}
      <ActionsList>
        {actions.map((action, index) => {
          const content = (
            <>
              <IconContainer>
                <action.icon />
              </IconContainer>
              <ActionLabel>{action.label}</ActionLabel>
            </>
          );

          if (action.href) {
            return (
              <ActionLink
                key={index}
                href={action.href}
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                {content}
              </ActionLink>
            );
          }

          return (
            <ActionButton
              key={index}
              onClick={action.onClick}
              style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
            >
              {content}
            </ActionButton>
          );
        })}
      </ActionsList>
    </ActionsContainer>
  );
};
