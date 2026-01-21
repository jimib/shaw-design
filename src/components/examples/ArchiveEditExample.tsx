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
import { Button, Card, CardContent, CardTitle, SearchBar, ContentTable, Separator } from "../";
import { Search, Filter, Calendar, Tag, Globe, FileText } from "lucide-react";
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
          Archive
        </h4>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="#">Upload</a>
          </SidebarMenuItem>
          <SidebarMenuItem active>
            <a href="#">Library</a>
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


const SearchSection = styled(Card)`
  padding: 24px;
  margin-bottom: 48px;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const SectionTitle = styled.h3`
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

const RecentCard = styled(Card)`
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

export const ArchiveEditExample: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px" }}>
          {/* Header */}
          <div style={{ marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 4px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Library
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Search the archive to add or amend metadata and translations
            </p>
          </div>

          {/* Advanced Search Section */}
          <SearchSection>
            <CardTitle style={{ fontSize: "14px", marginBottom: "16px" }}>Advanced Search</CardTitle>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search titles, keywords, content..."
            />
            <FilterRow>
              <Button variant="outline" size="sm" icon={Filter} iconPosition="left">
                Content Type
              </Button>
              <Button variant="outline" size="sm" icon={Calendar} iconPosition="left">
                Date Range
              </Button>
              <Button variant="outline" size="sm" icon={Tag} iconPosition="left">
                Tags & Themes
              </Button>
              <Button variant="outline" size="sm" icon={Globe} iconPosition="left">
                Language
              </Button>
              <Button variant="outline" size="sm" icon={FileText} iconPosition="left">
                Has Translation
              </Button>
            </FilterRow>
            <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
              <Button variant="primary" icon={Search} iconPosition="left">
                Search Archive
              </Button>
            </div>
          </SearchSection>

          {/* Recent Activity Sections */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              marginBottom: "48px",
            }}
          >
            <section>
              <SectionTitle>
                <FileText style={{ color: "hsl(var(--primary))" }} />
                Latest Uploads
              </SectionTitle>
              <RecentCard>
                <CardContent>
                  <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                    Southern Screen 南國電影 No. 148 - June 1970
                  </CardTitle>
                  <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                    2 hours ago
                  </p>
                </CardContent>
              </RecentCard>
            </section>

            <section>
              <SectionTitle>
                <FileText style={{ color: "hsl(38 92% 50%)" }} />
                Recently Edited
              </SectionTitle>
              <RecentCard>
                <CardContent>
                  <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                    邵逸夫和他的黃金時代 (Run Run Shaw and His Golden Era)
                  </CardTitle>
                  <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                    1 hour ago
                  </p>
                </CardContent>
              </RecentCard>
            </section>

            <section>
              <SectionTitle>
                <FileText style={{ color: "hsl(var(--muted-foreground))" }} />
                Most Accessed
              </SectionTitle>
              <RecentCard>
                <CardContent>
                  <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                    Southern Screen 南國電影 No. 145 - March 1970
                  </CardTitle>
                  <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                    Today
                  </p>
                </CardContent>
              </RecentCard>
            </section>
          </div>

          {/* Content Library Table */}
          <section>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 24px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Browse Library
            </h2>
            <ContentTable data={sampleContent} search={searchQuery} />
          </section>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
