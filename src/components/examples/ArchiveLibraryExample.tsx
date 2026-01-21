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
import { SearchBar, Card, CardContent, CardTitle, Button } from "../";
import { FileText, User } from "lucide-react";
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
            <a href="#">Workspace</a>
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

export const ArchiveLibraryExample: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "32px" }}>
          {/* Header */}
          <header style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 600,
                margin: "0 0 4px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Workspace
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Your recent uploads and edits
            </p>
          </header>

          {/* Search */}
          <div style={{ marginBottom: "32px", maxWidth: "448px" }}>
            <SearchBar value={search} onChange={setSearch} placeholder="Search workspace..." />
          </div>

          {/* Recent Activity Sections */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
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
                <User style={{ color: "hsl(142 76% 36%)" }} />
                My Uploads
              </SectionTitle>
              <RecentCard>
                <CardContent>
                  <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                    Southern Screen 南國電影 No. 145 - March 1970
                  </CardTitle>
                  <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                    3 days ago
                  </p>
                </CardContent>
              </RecentCard>
            </section>
          </div>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
