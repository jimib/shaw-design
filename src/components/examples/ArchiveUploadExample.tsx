import React from "react";
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
import { Button, Card, CardContent, CardTitle, Separator } from "../";
import { Upload, FileText, HelpCircle } from "lucide-react";
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
          <SidebarMenuItem active>
            <a href="#">Upload</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
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


const UploadArea = styled.div`
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

const UploadIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 1rem;
  background: hsl(var(--primary) / 0.1);
  margin: 0 auto 16px;
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

export const ArchiveUploadExample: React.FC = () => {
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
              Upload to Archive
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Add new content to the heritage database
            </p>
          </div>

          {/* Upload Section */}
          <UploadArea style={{ marginBottom: "48px" }}>
            <UploadIconContainer>
              <Upload style={{ width: "32px", height: "32px", color: "hsl(var(--primary))" }} />
            </UploadIconContainer>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "hsl(var(--foreground))",
                margin: "0 0 8px 0",
              }}
            >
              Upload Content
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: "0 auto 24px",
                maxWidth: "448px",
              }}
            >
              Drag and drop files here, or click to browse. Supported formats include PDF, images,
              and document files. Multi-page PDFs will be processed for cross-referencing.
            </p>
            <Button variant="primary" size="lg" icon={Upload} iconPosition="left">
              Choose Files
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginTop: "16px",
                fontSize: "12px",
                color: "hsl(var(--muted-foreground))",
              }}
            >
              <HelpCircle style={{ width: "14px", height: "14px" }} />
              <span>Files are automatically scanned and tagged using AI</span>
            </div>
          </UploadArea>

          {/* Recent Activity Sections */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {/* Latest Uploads */}
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
              <RecentCard>
                <CardContent>
                  <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                    Southern Screen 南國電影 No. 147 - May 1970
                  </CardTitle>
                  <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                    Yesterday
                  </p>
                </CardContent>
              </RecentCard>
            </section>

            {/* Recently Edited */}
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

            {/* Most Accessed */}
            <section>
              <SectionTitle>
                <FileText style={{ color: "hsl(var(--muted-foreground))" }} />
                Most Accessed
              </SectionTitle>
              <RecentCard>
                <CardContent>
                  <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                    Southern Screen 南國電影 No. 180 - February 1973
                  </CardTitle>
                  <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                    Today
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
