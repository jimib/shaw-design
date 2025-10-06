import React from "react";
interface MainProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "centered" | "full-width";
    padding?: "none" | "sm" | "md" | "lg";
}
export declare const Main: React.FC<MainProps>;
export {};
