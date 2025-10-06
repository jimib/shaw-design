import React from "react";
interface SidebarContextType {
    isOpen: boolean;
    isMobile: boolean;
    toggleSidebar: () => void;
    setOpen: (open: boolean) => void;
}
export declare const useSidebar: () => SidebarContextType;
interface SidebarProviderProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
}
export declare const SidebarProvider: React.FC<SidebarProviderProps>;
interface SidebarProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "floating" | "inset";
}
export declare const Sidebar: React.FC<SidebarProps>;
interface SidebarHeaderProps {
    children?: React.ReactNode;
    showLogo?: boolean;
    logoVariant?: "dark" | "light" | "shaw";
    title?: string;
    className?: string;
}
export declare const SidebarHeader: React.FC<SidebarHeaderProps>;
interface SidebarContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const SidebarContent: React.FC<SidebarContentProps>;
interface SidebarFooterProps {
    children: React.ReactNode;
    className?: string;
}
export declare const SidebarFooter: React.FC<SidebarFooterProps>;
interface SidebarTriggerProps {
    className?: string;
}
export declare const SidebarTrigger: React.FC<SidebarTriggerProps>;
interface SidebarMenuProps {
    children: React.ReactNode;
    className?: string;
}
export declare const SidebarMenu: React.FC<SidebarMenuProps>;
interface SidebarMenuItemProps {
    children: React.ReactNode;
    className?: string;
    active?: boolean;
}
export declare const SidebarMenuItem: React.FC<SidebarMenuItemProps>;
export {};
