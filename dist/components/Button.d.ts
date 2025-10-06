import React from "react";
interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "cms";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    style?: React.CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
export {};
