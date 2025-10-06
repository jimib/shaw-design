import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "transparent";
}
export declare const Input: React.FC<InputProps>;
export {};
