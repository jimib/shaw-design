import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle, SearchBar } from "../";
import { Plus } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const ArticleCard = styled(Card) `
  padding: 20px;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-elevated);
  }
`;
const sampleArticles = [
    {
        id: 1,
        title: "The Golden Age of Shaw Brothers Cinema",
        author: "Dr. Sarah Chen",
        date: "Jan 15, 2024",
        keywords: ["Shaw Brothers", "Hong Kong Cinema", "1960s"],
        pageCount: 12,
        status: "published",
    },
    {
        id: 2,
        title: "Run Run Shaw: A Legacy in Film",
        author: "Michael Wong",
        date: "Jan 10, 2024",
        keywords: ["Biography", "Run Run Shaw", "Film History"],
        pageCount: 8,
        status: "published",
    },
    {
        id: 3,
        title: "The Architecture of Movie Town",
        author: "James Liu",
        date: "Jan 8, 2024",
        keywords: ["Architecture", "Studios", "Hong Kong"],
        pageCount: 5,
        status: "draft",
    },
];
const statusFilters = [
    { value: "all", label: "All Articles" },
    { value: "published", label: "Published" },
    { value: "draft", label: "Drafts" },
    { value: "archived", label: "Archived" },
];
export const CurateArticlesExample = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const filteredArticles = sampleArticles.filter((article) => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === "all" || article.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "1280px", margin: "0 auto" }, children: [_jsxs("div", { style: {
                            marginBottom: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }, children: [_jsxs("div", { children: [_jsx("h1", { style: {
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            margin: "0 0 4px 0",
                                            color: "hsl(var(--foreground))",
                                        }, children: "Articles" }), _jsx("p", { style: {
                                            fontSize: "14px",
                                            color: "hsl(var(--muted-foreground))",
                                            margin: 0,
                                        }, children: "Browse and manage curated content" })] }), _jsx(Button, { variant: "primary", icon: Plus, iconPosition: "left", children: "New Article" })] }), _jsxs("div", { style: {
                            marginBottom: "24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }, children: [_jsx("div", { style: { flex: 1, maxWidth: "100%" }, children: _jsx(SearchBar, { value: searchQuery, onChange: setSearchQuery, placeholder: "Search articles, authors, keywords..." }) }), _jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: statusFilters.map((filter) => (_jsx(Button, { variant: statusFilter === filter.value ? "primary" : "outline", size: "sm", onClick: () => setStatusFilter(filter.value), children: filter.label }, filter.value))) })] }), _jsxs("p", { style: {
                            fontSize: "14px",
                            color: "hsl(var(--muted-foreground))",
                            margin: "0 0 16px 0",
                        }, children: [filteredArticles.length, " article", filteredArticles.length !== 1 ? "s" : ""] }), filteredArticles.length > 0 ? (_jsx("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "16px",
                        }, children: filteredArticles.map((article) => (_jsx(ArticleCard, { children: _jsxs(CardContent, { children: [_jsx("div", { style: {
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "space-between",
                                            marginBottom: "12px",
                                        }, children: _jsxs("div", { style: { flex: 1 }, children: [_jsx(CardTitle, { style: { fontSize: "14px", marginBottom: "4px" }, children: article.title }), _jsxs("p", { style: {
                                                        fontSize: "12px",
                                                        color: "hsl(var(--muted-foreground))",
                                                        margin: 0,
                                                    }, children: [article.author, " \u00B7 ", article.date] })] }) }), _jsx("div", { style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "6px",
                                            marginBottom: "12px",
                                        }, children: article.keywords.slice(0, 3).map((keyword) => (_jsx("span", { style: {
                                                display: "inline-flex",
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                background: "hsl(var(--secondary))",
                                                fontSize: "12px",
                                                color: "hsl(var(--muted-foreground))",
                                            }, children: keyword }, keyword))) }), _jsxs("div", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }, children: [_jsxs("span", { style: {
                                                    fontSize: "12px",
                                                    color: "hsl(var(--muted-foreground))",
                                                }, children: [article.pageCount, " pages"] }), _jsx("span", { style: {
                                                    padding: "4px 8px",
                                                    borderRadius: "9999px",
                                                    fontSize: "12px",
                                                    fontWeight: 500,
                                                    background: article.status === "published"
                                                        ? "hsl(142 76% 36% / 0.1)"
                                                        : "hsl(38 92% 50% / 0.1)",
                                                    color: article.status === "published"
                                                        ? "hsl(142 76% 36%)"
                                                        : "hsl(38 92% 50%)",
                                                }, children: article.status === "published" ? "Published" : "Draft" })] })] }) }, article.id))) })) : (_jsx(Card, { style: { padding: "64px", textAlign: "center" }, children: _jsx("p", { style: { fontSize: "14px", color: "hsl(var(--muted-foreground))", margin: 0 }, children: "No articles found" }) }))] }) }) }));
};
