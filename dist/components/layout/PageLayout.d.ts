import React from "react";
interface PageLayoutProps {
    children: React.ReactNode;
    className?: string;
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    showSidebar?: boolean;
    sidebarVariant?: "default" | "floating" | "inset";
    mainVariant?: "default" | "centered" | "full-width";
    containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}
export declare const PageLayout: React.FC<PageLayoutProps>;
export declare const AuthLayout: React.FC<{
    children: React.ReactNode;
}>;
export declare const DashboardLayout: React.FC<{
    children: React.ReactNode;
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
}>;
export declare const ContentLayout: React.FC<{
    children: React.ReactNode;
    header?: React.ReactNode;
}>;
export {};
