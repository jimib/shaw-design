import React from "react";
import { LucideIcon } from "lucide-react";
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
    parentCategoryConfig?: Record<ParentCategory, {
        icon: LucideIcon;
        color: string;
    }>;
    className?: string;
    style?: React.CSSProperties;
}
export declare const ActivityFeed: React.FC<ActivityFeedProps>;
export {};
