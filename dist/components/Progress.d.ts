import React from "react";
interface ProgressProps {
    value: number;
    max?: number;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "success" | "warning" | "error";
    showPercentage?: boolean;
    showSpinner?: boolean;
    label?: string;
    className?: string;
}
export declare const Progress: React.FC<ProgressProps>;
export {};
