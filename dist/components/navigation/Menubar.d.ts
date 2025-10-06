import React from "react";
interface MenubarProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "minimal" | "bordered";
}
interface MenubarItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
    className?: string;
}
interface MenubarSeparatorProps {
    className?: string;
}
export declare const Menubar: React.FC<MenubarProps>;
export declare const MenubarItem: React.FC<MenubarItemProps>;
export declare const MenubarSeparator: React.FC<MenubarSeparatorProps>;
export {};
