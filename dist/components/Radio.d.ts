import React from "react";
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
}
export declare const Radio: React.FC<RadioProps>;
export {};
