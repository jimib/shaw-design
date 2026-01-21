import React from "react";
export interface ContentItem {
    id: string;
    title: string;
    type: string;
    mediaType: string;
    thumbnail?: string;
    issue?: string;
    date: string;
    origin: string;
}
interface ContentTableProps {
    data: ContentItem[];
    search?: string;
    typeFilter?: string;
    onRowClick?: (item: ContentItem) => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const ContentTable: React.FC<ContentTableProps>;
export {};
