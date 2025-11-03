import React from "react";
type StatusValue = "green" | "orange" | "red" | "gray";
type StatusVariant = "solid" | "outline";
export interface StatusProps {
    value: StatusValue;
    variant?: StatusVariant;
    size?: "sm" | "md" | "lg";
    className?: string;
    style?: React.CSSProperties;
    title?: string;
}
export declare const Status: React.FC<StatusProps>;
export default Status;
