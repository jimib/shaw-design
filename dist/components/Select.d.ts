import React from "react";
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
    options: SelectOption[];
    placeholder?: string;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
}
export declare const Select: React.FC<SelectProps>;
export {};
