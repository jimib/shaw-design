import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle } from "../";
import { Database, Download, HelpCircle, RefreshCw, Shield, Key, HardDrive, BarChart3, FileText, } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const ToolCard = styled(Card) `
  padding: 20px;
  margin: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: hsl(var(--primary) / 0.2);
    box-shadow: var(--shadow-elevated);
  }
`;
const tools = [
    { id: 1, title: "Database Backup", description: "Create and manage database backups", icon: Database, action: "Run Backup" },
    { id: 2, title: "Export Data", description: "Export archive data in various formats", icon: Download, action: "Export" },
    { id: 3, title: "Help & Support", description: "Access documentation and contact support", icon: HelpCircle, action: "Get Help" },
    { id: 4, title: "Reindex Content", description: "Rebuild search indexes for better performance", icon: RefreshCw, action: "Reindex" },
    { id: 5, title: "API Keys", description: "Manage API access and authentication", icon: Key, action: "Manage" },
    { id: 6, title: "Security Settings", description: "Configure access controls and permissions", icon: Shield, action: "Configure" },
];
const stats = [
    { label: "Total Archive Items", value: "2,847", icon: FileText },
    { label: "Storage Used", value: "45.2 GB", icon: HardDrive },
    { label: "Monthly Views", value: "12.4K", icon: BarChart3 },
];
export const AdminExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "1280px", margin: "0 auto" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Tools & Resources" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Administrative tools for managing the heritage database" })] }), _jsx("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "16px",
                            marginBottom: "40px",
                        }, children: stats.map((stat) => (_jsx(Card, { style: { padding: "20px" }, children: _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [_jsx("div", { style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "0.5rem",
                                                background: "hsl(var(--secondary))",
                                            }, children: _jsx(stat.icon, { style: {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "hsl(var(--muted-foreground))",
                                                } }) }), _jsxs("div", { children: [_jsx("p", { style: {
                                                        fontSize: "24px",
                                                        fontWeight: 600,
                                                        margin: "0 0 4px 0",
                                                        color: "hsl(var(--foreground))",
                                                    }, children: stat.value }), _jsx("p", { style: {
                                                        fontSize: "12px",
                                                        color: "hsl(var(--muted-foreground))",
                                                        margin: 0,
                                                    }, children: stat.label })] })] }) }) }, stat.label))) }), _jsxs("section", { children: [_jsx("h3", { style: {
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    margin: "0 0 16px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Administrative Tools" }), _jsx("div", { style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "16px",
                                }, children: tools.map((tool) => (_jsx(ToolCard, { children: _jsxs(CardContent, { children: [_jsx("div", { style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "0.5rem",
                                                    background: "hsl(var(--secondary))",
                                                    marginBottom: "16px",
                                                }, children: _jsx(tool.icon, { style: {
                                                        width: "20px",
                                                        height: "20px",
                                                        color: "hsl(var(--muted-foreground))",
                                                    } }) }), _jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: tool.title }), _jsx("p", { style: {
                                                    fontSize: "12px",
                                                    color: "hsl(var(--muted-foreground))",
                                                    margin: "0 0 16px 0",
                                                }, children: tool.description }), _jsx(Button, { variant: "outline", size: "sm", style: { width: "100%" }, children: tool.action })] }) }, tool.id))) })] })] }) }) }));
};
