import React from "react";
interface CardProps {
    children: React.ReactNode;
    variant?: "default" | "gradient" | "vintage";
    className?: string;
    style?: React.CSSProperties;
}
export declare const Card: React.FC<CardProps>;
export declare const CardHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const CardContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const CardTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
export declare const CardDescription: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
export {};
