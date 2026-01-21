import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { PageLayout, SidebarProvider, } from "../layout";
import { SearchBar, Card, CardContent, CardTitle } from "../";
import { FileText, User } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
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
export const ArchiveLibraryExample = () => {
    const [search, setSearch] = useState("");
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "32px" }, children: [_jsxs("header", { style: { marginBottom: "32px" }, children: [_jsx("h1", { style: {
                                    fontSize: "30px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Workspace" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Your recent uploads and edits" })] }), _jsx("div", { style: { marginBottom: "32px", maxWidth: "448px" }, children: _jsx(SearchBar, { value: search, onChange: setSearch, placeholder: "Search workspace..." }) }), _jsxs("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "32px",
                        }, children: [_jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(var(--primary))" } }), "Latest Uploads"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 148 - June 1970" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "2 hours ago" })] }) })] }), _jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(38 92% 50%)" } }), "Recently Edited"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "\u90B5\u9038\u592B\u548C\u4ED6\u7684\u9EC3\u91D1\u6642\u4EE3 (Run Run Shaw and His Golden Era)" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "1 hour ago" })] }) })] }), _jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(User, { style: { color: "hsl(142 76% 36%)" } }), "My Uploads"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 145 - March 1970" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "3 days ago" })] }) })] })] })] }) }) }));
};
