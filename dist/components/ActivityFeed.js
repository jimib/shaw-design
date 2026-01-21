import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import { Clock, ArrowRight, Archive, Feather, Globe, } from "lucide-react";
const FeedContainer = styled.div `
  display: flex;
  flex-direction: column;
`;
const FeedHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const FeedTitle = styled.h2 `
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
const ViewAllLink = styled.a `
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
const ActivityList = styled.div `
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  overflow: hidden;
`;
const ActivityItem = styled.div `
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-bottom: ${({ $isLast }) => $isLast ? "none" : "1px solid hsl(var(--border))"};
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
const IconGroup = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`;
const ParentIconContainer = styled.div `
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
const ActionIconContainer = styled.div `
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
const ActivityContent = styled.div `
  flex: 1;
  min-width: 0;
`;
const ActivityText = styled.p `
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
const ActivityTime = styled.span `
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  flex-shrink: 0;
`;
const defaultParentCategoryConfig = {
    archive: { icon: Archive, color: "hsl(213 94% 68%)" },
    curate: { icon: Feather, color: "hsl(270 70% 55%)" },
    exhibition: {
        icon: Globe,
        color: "hsl(142 76% 36%)",
    },
};
export const ActivityFeed = ({ activities, title = "Recent Activity", viewAllHref, onItemClick, parentCategoryConfig, className, style, }) => {
    const config = parentCategoryConfig || defaultParentCategoryConfig;
    return (_jsxs(FeedContainer, { className: className, style: style, children: [_jsxs(FeedHeader, { children: [_jsxs(FeedTitle, { children: [_jsx(Clock, {}), title] }), viewAllHref && (_jsxs(ViewAllLink, { href: viewAllHref, children: ["View all", _jsx(ArrowRight, {})] }))] }), _jsx(ActivityList, { children: activities.map((activity, index) => {
                    const ParentIcon = config[activity.parentCategory].icon;
                    const parentColor = config[activity.parentCategory].color;
                    return (_jsxs(ActivityItem, { "$isLast": index === activities.length - 1, onClick: () => onItemClick?.(activity), children: [_jsxs(IconGroup, { children: [_jsx(ParentIconContainer, { "$color": parentColor, children: _jsx(ParentIcon, {}) }), _jsx(ActionIconContainer, { "$color": activity.iconColor, children: _jsx(activity.icon, {}) })] }), _jsx(ActivityContent, { children: _jsxs(ActivityText, { children: [_jsx("span", { className: "user", children: activity.user }), _jsxs("span", { className: "action", children: [" ", activity.action, " "] }), _jsx("span", { className: "item", children: activity.item })] }) }), _jsx(ActivityTime, { children: activity.time })] }, activity.id));
                }) })] }));
};
