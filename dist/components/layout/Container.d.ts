import React from "react";
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    centered?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}
export declare const Container: React.FC<ContainerProps>;
export {};
