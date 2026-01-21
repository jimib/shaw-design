import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button } from "../";
import { SearchBar, TypeFilter, ContentTable } from "../";
import { Plus } from "lucide-react";
import { ExampleSidebar } from "./ExampleSidebar";
const sampleContent = [
    {
        id: "1",
        title: "Southern Screen 南國電影 No. 148",
        type: "Magazine",
        mediaType: "PDF",
        issue: "No. 148",
        date: "June 1970",
        origin: "University of Hong Kong Libraries",
    },
    {
        id: "2",
        title: "Southern Screen 南國電影 No. 147",
        type: "Magazine",
        mediaType: "PDF",
        issue: "No. 147",
        date: "May 1970",
        origin: "University of Hong Kong Libraries",
    },
    {
        id: "3",
        title: "邵逸夫和他的黃金時代",
        type: "Book",
        mediaType: "PDF",
        date: "2014",
        origin: "University of Hong Kong Libraries",
    },
    {
        id: "4",
        title: "The Shaw Prize 邵逸夫獎",
        type: "Archival Document",
        mediaType: "PDF",
        date: "2002",
        origin: "University of Hong Kong Libraries",
    },
];
export const TableSearchExample = () => {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All Types");
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "24px" }, children: [_jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h1", { style: {
                                    fontSize: "30px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Content Library" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Manage your heritage database collection" })] }), _jsx("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            marginBottom: "24px",
                        }, children: _jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: [_jsx("div", { style: { flex: 1, maxWidth: "384px" }, children: _jsx(SearchBar, { value: search, onChange: setSearch, placeholder: "Search content..." }) }), _jsx(TypeFilter, { value: typeFilter, onChange: setTypeFilter }), _jsx(Button, { variant: "cms", icon: Plus, iconPosition: "left", children: "Add Item" })] }) }), _jsx(ContentTable, { data: sampleContent, search: search, typeFilter: typeFilter, onRowClick: (item) => console.log("Clicked:", item) })] }) }) }));
};
