import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardTitle } from "../";
import { FilePlus, Lightbulb, BookOpen, Layers } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const CreateSection = styled(Card) `
  padding: 32px;
  text-align: center;
  margin-bottom: 48px;
`;
const IconContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 1rem;
  background: hsl(var(--primary) / 0.1);
  margin: 0 auto 24px;
`;
const InfoCard = styled(Card) `
  padding: 20px;
  margin: 0;
`;
const InfoIconContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: hsl(var(--secondary));
  margin-bottom: 12px;
`;
export const CurateNewArticleExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "768px", margin: "0 auto" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "New Article" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Create narrative content from archive materials" })] }), _jsxs(CreateSection, { children: [_jsx(IconContainer, { children: _jsx(FilePlus, { style: { width: "40px", height: "40px", color: "hsl(var(--primary))" } }) }), _jsx("h2", { style: {
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    margin: "0 0 12px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Start a New Article" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: "0 auto 32px",
                                    maxWidth: "512px",
                                }, children: "Create a new article by searching the archive for relevant content, themes, and narratives. Articles can span multiple pages and include various media types from the heritage collection." }), _jsx(Button, { variant: "primary", size: "lg", icon: FilePlus, iconPosition: "left", children: "Create Article" })] }), _jsxs("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "16px",
                        }, children: [_jsxs(InfoCard, { children: [_jsx(InfoIconContainer, { children: _jsx(Lightbulb, { style: { width: "20px", height: "20px", color: "hsl(38 92% 50%)" } }) }), _jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Search First" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "Browse the archive to find content that supports your narrative before you begin writing." })] }), _jsxs(InfoCard, { children: [_jsx(InfoIconContainer, { children: _jsx(Layers, { style: { width: "20px", height: "20px", color: "hsl(var(--primary))" } }) }), _jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Multi-Page" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "Articles can consist of multiple pages, allowing for in-depth exploration of themes." })] }), _jsxs(InfoCard, { children: [_jsx(InfoIconContainer, { children: _jsx(BookOpen, { style: { width: "20px", height: "20px", color: "hsl(142 76% 36%)" } }) }), _jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: "Headless CMS" }), _jsx("p", { style: { fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "Content created here can be published to external domains via the Exhibition Assistant." })] })] })] }) }) }));
};
