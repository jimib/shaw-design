import React from "react";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: "default" | "transparent";
    error?: boolean;
    success?: boolean;
    warning?: boolean;
}
export declare const Textarea: React.FC<TextareaProps>;
export {};
