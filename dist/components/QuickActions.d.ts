import React from "react";
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
export declare const QuickActions: React.FC<QuickActionsProps>;
export {};
