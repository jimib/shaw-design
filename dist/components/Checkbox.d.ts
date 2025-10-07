import React from "react";
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
