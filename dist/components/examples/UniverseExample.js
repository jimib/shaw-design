import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle } from "../";
import { Globe2, ExternalLink, Sparkles } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const UniverseCard = styled(Card) `
  padding: 32px;
`;
const InfoBox = styled.div `
  border-radius: 0.5rem;
  background: hsl(var(--muted) / 0.5);
  padding: 16px;
  margin-top: 24px;
`;
export const UniverseExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "768px", margin: "0 auto" }, children: [_jsxs("div", { style: { marginBottom: "32px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Universe" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Explore the Shaw Heritage archive in an immersive 3D experience" })] }), _jsx(UniverseCard, { children: _jsxs(CardContent, { children: [_jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "start",
                                        gap: "20px",
                                        marginBottom: "24px",
                                    }, children: [_jsx("div", { style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "64px",
                                                height: "64px",
                                                borderRadius: "1rem",
                                                background: "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 100%)",
                                            }, children: _jsx(Globe2, { style: {
                                                    width: "32px",
                                                    height: "32px",
                                                    color: "hsl(var(--primary))",
                                                } }) }), _jsxs("div", { style: { flex: 1 }, children: [_jsx(CardTitle, { style: {
                                                        fontSize: "20px",
                                                        fontWeight: 600,
                                                        margin: "0 0 8px 0",
                                                    }, children: "Shaw Heritage Universe" }), _jsx("p", { style: {
                                                        fontSize: "14px",
                                                        color: "hsl(var(--muted-foreground))",
                                                        lineHeight: "1.6",
                                                        margin: 0,
                                                    }, children: "The Universe is an immersive 3D visualisation that brings the Shaw Heritage archive to life. Using AI embeddings, it maps the relationships between archive items, articles, and media in a navigable spatial environment\u2014revealing hidden connections and patterns across decades of cinema history." })] })] }), _jsx(InfoBox, { children: _jsxs("div", { style: { display: "flex", alignItems: "start", gap: "12px" }, children: [_jsx(Sparkles, { style: {
                                                    width: "20px",
                                                    height: "20px",
                                                    color: "hsl(38 92% 50%)",
                                                    marginTop: "2px",
                                                } }), _jsxs("div", { children: [_jsx("p", { style: {
                                                            fontSize: "14px",
                                                            fontWeight: 500,
                                                            margin: "0 0 4px 0",
                                                            color: "hsl(var(--foreground))",
                                                        }, children: "Powered by AI Embeddings" }), _jsx("p", { style: {
                                                            fontSize: "14px",
                                                            color: "hsl(var(--muted-foreground))",
                                                            margin: 0,
                                                        }, children: "Each item in the archive is represented as a point in high-dimensional space, then projected into 3D for intuitive exploration. Similar items cluster together, making it easy to discover related content." })] })] }) }), _jsx("div", { style: { marginTop: "24px" }, children: _jsxs(Button, { variant: "primary", size: "lg", icon: Globe2, iconPosition: "left", onClick: () => window.open("https://universe.shawheritage.com", "_blank"), children: ["Enter the Universe", _jsx(ExternalLink, { style: { width: "16px", height: "16px", marginLeft: "8px" } })] }) })] }) })] }) }) }));
};
