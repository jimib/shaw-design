import React from "react";
interface TypeFilterProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const TypeFilter: React.FC<TypeFilterProps>;
export {};
