import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle } from "../";
import { Globe, Link as LinkIcon, ExternalLink, Plus, Settings, Eye } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const ConnectSection = styled(Card) `
  padding: 24px;
  text-align: center;
  margin-bottom: 40px;
`;
const DomainCard = styled(Card) `
  padding: 20px;
  margin: 0 0 12px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: hsl(var(--primary) / 0.2);
    box-shadow: var(--shadow-elevated);
  }
`;
const linkedDomains = [
    {
        id: 1,
        domain: "shawheritage.org",
        articlesLinked: 24,
        lastSync: "2 hours ago",
        status: "active",
    },
    {
        id: 2,
        domain: "hkfilmarchive.com/shaw",
        articlesLinked: 12,
        lastSync: "1 day ago",
        status: "active",
    },
    {
        id: 3,
        domain: "museum.shaw.com",
        articlesLinked: 8,
        lastSync: "3 days ago",
        status: "pending",
    },
];
export const ExhibitionExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "1024px", margin: "0 auto" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Exhibition Assistant" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Link articles to external domains for public-facing content" })] }), _jsxs(ConnectSection, { children: [_jsx("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "1rem",
                                    background: "hsl(var(--primary) / 0.1)",
                                    margin: "0 auto 16px",
                                }, children: _jsx(Globe, { style: { width: "28px", height: "28px", color: "hsl(var(--primary))" } }) }), _jsx("h2", { style: {
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    margin: "0 0 8px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Connect External Domain" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: "0 auto 24px",
                                    maxWidth: "448px",
                                }, children: "Link your curated articles to external websites and platforms. Content is delivered via API for seamless integration." }), _jsx(Button, { variant: "primary", icon: Plus, iconPosition: "left", children: "Add Domain" })] }), _jsxs("section", { children: [_jsx("h3", { style: {
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    margin: "0 0 16px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Connected Domains" }), _jsx("div", { children: linkedDomains.map((domain) => {
                                    const statusColor = domain.status === "active"
                                        ? "hsl(142 76% 36% / 0.1)"
                                        : "hsl(38 92% 50% / 0.1)";
                                    const statusTextColor = domain.status === "active" ? "hsl(142 76% 36%)" : "hsl(38 92% 50%)";
                                    return (_jsx(DomainCard, { children: _jsx(CardContent, { children: _jsxs("div", { style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                }, children: [_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [_jsx("div", { style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    borderRadius: "0.5rem",
                                                                    background: "hsl(var(--secondary))",
                                                                }, children: _jsx(LinkIcon, { style: {
                                                                        width: "20px",
                                                                        height: "20px",
                                                                        color: "hsl(var(--muted-foreground))",
                                                                    } }) }), _jsxs("div", { children: [_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [_jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: domain.domain }), _jsx("span", { style: {
                                                                                    padding: "4px 8px",
                                                                                    borderRadius: "9999px",
                                                                                    fontSize: "12px",
                                                                                    fontWeight: 500,
                                                                                    background: statusColor,
                                                                                    color: statusTextColor,
                                                                                }, children: domain.status === "active" ? "Active" : "Pending" })] }), _jsxs("p", { style: {
                                                                            fontSize: "12px",
                                                                            color: "hsl(var(--muted-foreground))",
                                                                            margin: "4px 0 0 0",
                                                                        }, children: [domain.articlesLinked, " articles linked \u00B7 Last sync ", domain.lastSync] })] })] }), _jsxs("div", { style: { display: "flex", gap: "8px" }, children: [_jsx(Button, { variant: "ghost", size: "sm", icon: Eye, iconPosition: "left", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Preview" }) }), _jsx(Button, { variant: "ghost", size: "sm", icon: Settings, iconPosition: "left", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Settings" }) }), _jsx(Button, { variant: "ghost", size: "sm", icon: ExternalLink, iconPosition: "left", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Open" }) })] })] }) }) }, domain.id));
                                }) })] })] }) }) }));
};
