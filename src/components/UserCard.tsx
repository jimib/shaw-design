import React from "react";
import styled from "styled-components";

export interface User {
  name: string;
  email: string;
  joined?: string;
  role?: string;
  avatar?: string;
}

interface UserCardProps {
  user: User;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const CardContainer = styled.div<{ $clickable: boolean }>`
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  padding: 12px;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
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
    ${({ $clickable }) =>
      $clickable
        ? `
      border-color: hsl(var(--primary) / 0.2);
      box-shadow: var(--shadow-subtle);
    `
        : ""}
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const UserDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: hsl(var(--foreground));
  margin: 0 0 4px 0;
`;

const UserEmail = styled.p`
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  background: hsl(var(--secondary));
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  flex-shrink: 0;
`;

const JoinDate = styled.p`
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  margin: 8px 0 0 0;
`;

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onClick,
  className,
  style,
}) => {
  return (
    <CardContainer
      $clickable={!!onClick}
      onClick={onClick}
      className={className}
      style={style}
    >
      <UserInfo>
        <UserDetails>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserDetails>
        {user.role && <RoleBadge>{user.role}</RoleBadge>}
      </UserInfo>
      {user.joined && <JoinDate>Joined {user.joined}</JoinDate>}
    </CardContainer>
  );
};
