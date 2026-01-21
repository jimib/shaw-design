import React from "react";
import { LucideIcon } from "lucide-react";
interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "cms";
    size?: "sm" | "md" | "lg";
    compact?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    style?: React.CSSProperties;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
}
export declare const Button: React.FC<ButtonProps>;
export {};
