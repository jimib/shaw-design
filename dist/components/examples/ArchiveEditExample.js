import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle, SearchBar, ContentTable } from "../";
import { Search, Filter, Calendar, Tag, Globe, FileText } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const SearchSection = styled(Card) `
  padding: 24px;
  margin-bottom: 48px;
`;
const FilterRow = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;
const SectionTitle = styled.h3 `
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: hsl(var(--foreground));
  margin: 0 0 16px 0;

  svg {
    width: 16px;
    height: 16px;
  }
`;
const RecentCard = styled(Card) `
  padding: 12px;
  margin: 0 0 12px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-elevated);
  }
`;
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
];
export const ArchiveEditExample = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Library" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Search the archive to add or amend metadata and translations" })] }), _jsxs(SearchSection, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "16px" }, children: "Advanced Search" }), _jsx(SearchBar, { value: searchQuery, onChange: setSearchQuery, placeholder: "Search titles, keywords, content..." }), _jsxs(FilterRow, { children: [_jsx(Button, { variant: "outline", size: "sm", icon: Filter, iconPosition: "left", children: "Content Type" }), _jsx(Button, { variant: "outline", size: "sm", icon: Calendar, iconPosition: "left", children: "Date Range" }), _jsx(Button, { variant: "outline", size: "sm", icon: Tag, iconPosition: "left", children: "Tags & Themes" }), _jsx(Button, { variant: "outline", size: "sm", icon: Globe, iconPosition: "left", children: "Language" }), _jsx(Button, { variant: "outline", size: "sm", icon: FileText, iconPosition: "left", children: "Has Translation" })] }), _jsx("div", { style: { marginTop: "24px", display: "flex", justifyContent: "flex-end" }, children: _jsx(Button, { variant: "primary", icon: Search, iconPosition: "left", children: "Search Archive" }) })] }), _jsxs("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "32px",
                            marginBottom: "48px",
                        }, children: [_jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(var(--primary))" } }), "Latest Uploads"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 148 - June 1970" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "2 hours ago" })] }) })] }), _jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(38 92% 50%)" } }), "Recently Edited"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "\u90B5\u9038\u592B\u548C\u4ED6\u7684\u9EC3\u91D1\u6642\u4EE3 (Run Run Shaw and His Golden Era)" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "1 hour ago" })] }) })] }), _jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(var(--muted-foreground))" } }), "Most Accessed"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 145 - March 1970" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "Today" })] }) })] })] }), _jsxs("section", { children: [_jsx("h2", { style: {
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    margin: "0 0 24px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Browse Library" }), _jsx(ContentTable, { data: sampleContent, search: searchQuery })] })] }) }) }));
};
