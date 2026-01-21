import React from "react";
export type SortDirection = "asc" | "desc" | null;
export interface TableColumn<T = any> {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (value: any, row: T) => React.ReactNode;
    width?: string;
}
interface TableProps<T = any> {
    columns: TableColumn<T>[];
    data: T[];
    sortKey?: string | null;
    sortDirection?: SortDirection;
    onSort?: (key: string) => void;
    onRowClick?: (row: T) => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare function Table<T = any>({ columns, data, sortKey, sortDirection, onSort, onRowClick, className, style, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
