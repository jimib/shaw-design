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
import { Button, Separator } from "../";
import { SearchBar, TypeFilter, ContentTable, ContentItem } from "../";
import { Plus } from "lucide-react";

const sampleContent: ContentItem[] = [
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
  {
    id: "3",
    title: "邵逸夫和他的黃金時代",
    type: "Book",
    mediaType: "PDF",
    date: "2014",
    origin: "University of Hong Kong Libraries",
  },
  {
    id: "4",
    title: "The Shaw Prize 邵逸夫獎",
    type: "Archival Document",
    mediaType: "PDF",
    date: "2002",
    origin: "University of Hong Kong Libraries",
  },
];

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
          Main
        </h4>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="#">Dashboard</a>
          </SidebarMenuItem>
          <SidebarMenuItem active>
            <a href="#">Library</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Media</a>
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


export const TableSearchExample: React.FC = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");

  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "24px" }}>
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 600,
                margin: "0 0 4px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Content Library
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Manage your heritage database collection
            </p>
          </div>

          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <div style={{ flex: 1, maxWidth: "384px" }}>
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  placeholder="Search content..."
                />
              </div>
              <TypeFilter value={typeFilter} onChange={setTypeFilter} />
              <Button variant="cms" icon={Plus} iconPosition="left">
                Add Item
              </Button>
            </div>
          </div>

          {/* Content Table */}
          <ContentTable
            data={sampleContent}
            search={search}
            typeFilter={typeFilter}
            onRowClick={(item) => console.log("Clicked:", item)}
          />
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
