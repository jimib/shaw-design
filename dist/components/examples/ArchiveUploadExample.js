import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle } from "../";
import { Upload, FileText, HelpCircle } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const UploadArea = styled.div `
  border-radius: 1rem;
  border: 2px dashed hsl(var(--border));
  background: hsl(var(--secondary) / 0.3);
  padding: 48px;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: hsl(var(--primary) / 0.3);
    background: hsl(var(--secondary) / 0.5);
  }
`;
const UploadIconContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  background: hsl(var(--primary) / 0.1);
  margin: 0 auto 16px;
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
export const ArchiveUploadExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Upload to Archive" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Add new content to the heritage database" })] }), _jsxs(UploadArea, { style: { marginBottom: "48px" }, children: [_jsx(UploadIconContainer, { children: _jsx(Upload, { style: { width: "32px", height: "32px", color: "hsl(var(--primary))" } }) }), _jsx("h2", { style: {
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: "hsl(var(--foreground))",
                                    margin: "0 0 8px 0",
                                }, children: "Upload Content" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: "0 auto 24px",
                                    maxWidth: "448px",
                                }, children: "Drag and drop files here, or click to browse. Supported formats include PDF, images, and document files. Multi-page PDFs will be processed for cross-referencing." }), _jsx(Button, { variant: "primary", size: "lg", icon: Upload, iconPosition: "left", children: "Choose Files" }), _jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                    marginTop: "16px",
                                    fontSize: "12px",
                                    color: "hsl(var(--muted-foreground))",
                                }, children: [_jsx(HelpCircle, { style: { width: "14px", height: "14px" } }), _jsx("span", { children: "Files are automatically scanned and tagged using AI" })] })] }), _jsxs("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "32px",
                        }, children: [_jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(var(--primary))" } }), "Latest Uploads"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 148 - June 1970" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "2 hours ago" })] }) }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 147 - May 1970" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "Yesterday" })] }) })] }), _jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(38 92% 50%)" } }), "Recently Edited"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "\u90B5\u9038\u592B\u548C\u4ED6\u7684\u9EC3\u91D1\u6642\u4EE3 (Run Run Shaw and His Golden Era)" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "1 hour ago" })] }) })] }), _jsxs("section", { children: [_jsxs(SectionTitle, { children: [_jsx(FileText, { style: { color: "hsl(var(--muted-foreground))" } }), "Most Accessed"] }), _jsx(RecentCard, { children: _jsxs(CardContent, { children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Southern Screen \u5357\u570B\u96FB\u5F71 No. 180 - February 1973" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "Today" })] }) })] })] })] }) }) }));
};
