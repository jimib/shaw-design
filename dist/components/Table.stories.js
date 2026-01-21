import { jsx as _jsx } from "react/jsx-runtime";
import { Table } from "./Table";
import { useState } from "react";
const meta = {
    title: "Components/Table",
    component: Table,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
const sampleData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
];
const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "status", label: "Status", sortable: true },
];
export const Default = {
    render: () => {
        const [sortKey, setSortKey] = useState(null);
        const [sortDirection, setSortDirection] = useState(null);
        const handleSort = (key) => {
            if (sortKey === key) {
                if (sortDirection === "asc") {
                    setSortDirection("desc");
                }
                else if (sortDirection === "desc") {
                    setSortKey(null);
                    setSortDirection(null);
                }
                else {
                    setSortDirection("asc");
                }
            }
            else {
                setSortKey(key);
                setSortDirection("asc");
            }
        };
        return (_jsx("div", { style: { width: "800px" }, children: _jsx(Table, { columns: columns, data: sampleData, sortKey: sortKey, sortDirection: sortDirection, onSort: handleSort }) }));
    },
};
export const WithClick = {
    render: () => {
        return (_jsx("div", { style: { width: "800px" }, children: _jsx(Table, { columns: columns, data: sampleData, onRowClick: (row) => alert(`Clicked: ${row.name}`) }) }));
    },
};
export const WithCustomRender = {
    render: () => {
        const customColumns = [
            { key: "name", label: "Name", sortable: true },
            {
                key: "status",
                label: "Status",
                sortable: true,
                render: (value) => (_jsx("span", { style: {
                        padding: "4px 8px",
                        borderRadius: "4px",
                        background: value === "Active" ? "hsl(142 76% 36% / 0.1)" : "hsl(var(--muted))",
                        color: value === "Active" ? "hsl(142 76% 36%)" : "hsl(var(--muted-foreground))",
                        fontSize: "12px",
                    }, children: value })),
            },
        ];
        return (_jsx("div", { style: { width: "600px" }, children: _jsx(Table, { columns: customColumns, data: sampleData }) }));
    },
};
