import React from "react";
interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    variant?: "default" | "minimal" | "hero";
    showLogo?: boolean;
    logoVariant?: "dark" | "light" | "shaw";
    logoSize?: number;
    title?: string;
    subtitle?: string;
    actions?: React.ReactNode;
    showSidebarTrigger?: boolean;
}
export declare const Header: React.FC<HeaderProps>;
export {};
