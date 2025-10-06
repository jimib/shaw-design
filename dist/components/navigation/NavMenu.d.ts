import React from "react";
interface NavMenuProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "pills" | "underline" | "minimal";
    orientation?: "horizontal" | "vertical";
}
interface NavMenuItemProps {
    children: React.ReactNode;
    href?: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
}
interface NavMenuTriggerProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare const NavMenu: React.FC<NavMenuProps>;
export declare const NavMenuItem: React.FC<NavMenuItemProps>;
export declare const NavMenuTrigger: React.FC<NavMenuTriggerProps>;
export {};
