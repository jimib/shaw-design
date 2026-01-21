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
import { Button, Card, CardContent, CardTitle } from "../";
import { Globe2, ExternalLink, Sparkles } from "lucide-react";
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
          Admin
        </h4>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="#">Tools & Resources</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Users</a>
          </SidebarMenuItem>
          <SidebarMenuItem active>
            <a href="#">Universe</a>
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


const UniverseCard = styled(Card)`
  padding: 32px;
`;

const InfoBox = styled.div`
  border-radius: 0.5rem;
  background: hsl(var(--muted) / 0.5);
  padding: 16px;
  margin-top: 24px;
`;

export const UniverseExample: React.FC = () => {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "768px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "32px" }}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 4px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Universe
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Explore the Shaw Heritage archive in an immersive 3D experience
            </p>
          </div>

          {/* Universe Card */}
          <UniverseCard>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: "20px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "64px",
                    height: "64px",
                    borderRadius: "1rem",
                    background: "linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.05) 100%)",
                  }}
                >
                  <Globe2
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "hsl(var(--primary))",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <CardTitle
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      margin: "0 0 8px 0",
                    }}
                  >
                    Shaw Heritage Universe
                  </CardTitle>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "hsl(var(--muted-foreground))",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    The Universe is an immersive 3D visualisation that brings the Shaw Heritage
                    archive to life. Using AI embeddings, it maps the relationships between archive
                    items, articles, and media in a navigable spatial environment—revealing hidden
                    connections and patterns across decades of cinema history.
                  </p>
                </div>
              </div>

              <InfoBox>
                <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                  <Sparkles
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "hsl(38 92% 50%)",
                      marginTop: "2px",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        margin: "0 0 4px 0",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      Powered by AI Embeddings
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "hsl(var(--muted-foreground))",
                        margin: 0,
                      }}
                    >
                      Each item in the archive is represented as a point in high-dimensional space,
                      then projected into 3D for intuitive exploration. Similar items cluster
                      together, making it easy to discover related content.
                    </p>
                  </div>
                </div>
              </InfoBox>

              <div style={{ marginTop: "24px" }}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={Globe2}
                  iconPosition="left"
                  onClick={() => window.open("https://universe.shawheritage.com", "_blank")}
                >
                  Enter the Universe
                  <ExternalLink style={{ width: "16px", height: "16px", marginLeft: "8px" }} />
                </Button>
              </div>
            </CardContent>
          </UniverseCard>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
