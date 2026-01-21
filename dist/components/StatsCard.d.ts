import React from "react";
import { LucideIcon } from "lucide-react";
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
export declare const StatsCard: React.FC<StatsCardProps>;
export {};
