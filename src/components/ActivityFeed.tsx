import React from "react";
import styled from "styled-components";
import {
  LucideIcon,
  Clock,
  ArrowRight,
  Archive,
  Feather,
  Globe,
} from "lucide-react";

export type ParentCategory = "archive" | "curate" | "exhibition";

export interface ActivityItem {
  id: string | number;
  action: string;
  item: string;
  user: string;
  time: string;
  icon: LucideIcon;
  iconColor?: string;
  parentCategory: ParentCategory;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
  title?: string;
  viewAllHref?: string;
  onItemClick?: (activity: ActivityItem) => void;
  parentCategoryConfig?: Record<
    ParentCategory,
    { icon: LucideIcon; color: string }
 >;
  className?: string;
  style?: React.CSSProperties;
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const FeedTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: hsl(var(--foreground));
  margin: 0;

  svg {
    width: 16px;
    height: 16px;
    color: hsl(var(--muted-foreground));
  }
`;

const ViewAllLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: hsl(var(--foreground));
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const ActivityList = styled.div`
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  overflow: hidden;
`;

const ActivityItem = styled.div<{ $isLast: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-bottom: ${({ $isLast }) =>
    $isLast ? "none" : "1px solid hsl(var(--border))"};
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
    background: hsl(var(--secondary) / 0.5);
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;

const ParentIconContainer = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $color }) => $color};
  }
`;

const ActionIconContainer = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.5rem;
  background: hsl(var(--secondary));

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $color }) => $color || "hsl(var(--primary))"};
  }
`;

const ActivityContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ActivityText = styled.p`
  font-size: ${({ theme }) => theme.typography.textStyles.bodySmall.fontSize};
  color: hsl(var(--foreground));
  margin: 0;
  line-height: 1.5;

  .user {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }

  .action {
    color: hsl(var(--muted-foreground));
  }

  .item {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }
`;

const ActivityTime = styled.span`
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  flex-shrink: 0;
`;

const defaultParentCategoryConfig: Record<
  ParentCategory,
  { icon: LucideIcon; color: string }
> = {
  archive: { icon: Archive, color: "hsl(213 94% 68%)" },
  curate: { icon: Feather, color: "hsl(270 70% 55%)" },
  exhibition: {
    icon: Globe,
    color: "hsl(142 76% 36%)",
  },
};

export const ActivityFeed: React.FC<ActivityFeedProps> = ({
  activities,
  title = "Recent Activity",
  viewAllHref,
  onItemClick,
  parentCategoryConfig,
  className,
  style,
}) => {
  const config = parentCategoryConfig || defaultParentCategoryConfig;

  return (
    <FeedContainer className={className} style={style}>
      <FeedHeader>
        <FeedTitle>
          <Clock />
          {title}
        </FeedTitle>
        {viewAllHref && (
          <ViewAllLink href={viewAllHref}>
            View all
            <ArrowRight />
          </ViewAllLink>
        )}
      </FeedHeader>
      <ActivityList>
        {activities.map((activity, index) => {
          const ParentIcon = config[activity.parentCategory].icon;
          const parentColor = config[activity.parentCategory].color;

          return (
            <ActivityItem
              key={activity.id}
              $isLast={index === activities.length - 1}
              onClick={() => onItemClick?.(activity)}
            >
              <IconGroup>
                <ParentIconContainer $color={parentColor}>
                  <ParentIcon />
                </ParentIconContainer>
                <ActionIconContainer $color={activity.iconColor}>
                  <activity.icon />
                </ActionIconContainer>
              </IconGroup>
              <ActivityContent>
                <ActivityText>
                  <span className="user">{activity.user}</span>
                  <span className="action"> {activity.action} </span>
                  <span className="item">{activity.item}</span>
                </ActivityText>
              </ActivityContent>
              <ActivityTime>{activity.time}</ActivityTime>
            </ActivityItem>
          );
        })}
      </ActivityList>
    </FeedContainer>
  );
};
