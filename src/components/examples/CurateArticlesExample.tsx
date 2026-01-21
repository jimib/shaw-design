import React, { useState } from "react";
import {
  PageLayout,
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  Main,
  Container,
} from "../layout";
import { Button, Card, CardContent, CardTitle, SearchBar } from "../";
import { Search, Plus } from "lucide-react";
import styled from "styled-components";

const ExampleSidebar = (
  <>
    <SidebarHeader title="Shaw Heritage" showLogo={true} />
    <SidebarContent>
      <div style={{ marginBottom: "16px" }}>
        <h4
          style={{
            margin: "0 0 8px 0",
            fontSize: "12px",
            fontWeight: 600,
            color: "hsl(var(--muted-foreground))",
            textTransform: "uppercase",
          }}
        >
          Curate
        </h4>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="#">New Article</a>
          </SidebarMenuItem>
          <SidebarMenuItem active>
            <a href="#">Articles</a>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </SidebarContent>
    <SidebarFooter>
      <Button variant="ghost" size="sm" style={{ width: "100%" }}>
        Logout
      </Button>
    </SidebarFooter>
  </>
);


const ArticleCard = styled(Card)`
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

export const CurateArticlesExample: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredArticles = sampleArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: "0 0 4px 0",
                  color: "hsl(var(--foreground))",
                }}
              >
                Articles
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "hsl(var(--muted-foreground))",
                  margin: 0,
                }}
              >
                Browse and manage curated content
              </p>
            </div>
            <Button variant="primary" icon={Plus} iconPosition="left">
              New Article
            </Button>
          </div>

          {/* Search and Filters */}
          <div
            style={{
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1, maxWidth: "100%" }}>
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search articles, authors, keywords..."
              />
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {statusFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={statusFilter === filter.value ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(filter.value)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p
            style={{
              fontSize: "14px",
              color: "hsl(var(--muted-foreground))",
              margin: "0 0 16px 0",
            }}
          >
            {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
          </p>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                          {article.title}
                        </CardTitle>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "hsl(var(--muted-foreground))",
                            margin: 0,
                          }}
                        >
                          {article.author} · {article.date}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginBottom: "12px",
                      }}
                    >
                      {article.keywords.slice(0, 3).map((keyword) => (
                        <span
                          key={keyword}
                          style={{
                            display: "inline-flex",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            background: "hsl(var(--secondary))",
                            fontSize: "12px",
                            color: "hsl(var(--muted-foreground))",
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "hsl(var(--muted-foreground))",
                        }}
                      >
                        {article.pageCount} pages
                      </span>
                      <span
                        style={{
                          padding: "4px 8px",
                          borderRadius: "9999px",
                          fontSize: "12px",
                          fontWeight: 500,
                          background:
                            article.status === "published"
                              ? "hsl(142 76% 36% / 0.1)"
                              : "hsl(38 92% 50% / 0.1)",
                          color:
                            article.status === "published"
                              ? "hsl(142 76% 36%)"
                              : "hsl(38 92% 50%)",
                        }}
                      >
                        {article.status === "published" ? "Published" : "Draft"}
                      </span>
                    </div>
                  </CardContent>
                </ArticleCard>
              ))}
            </div>
          ) : (
            <Card style={{ padding: "64px", textAlign: "center" }}>
              <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                No articles found
              </p>
            </Card>
          )}
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
