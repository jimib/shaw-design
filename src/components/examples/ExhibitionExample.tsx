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
import { Globe, Link as LinkIcon, ExternalLink, Plus, Settings, Eye } from "lucide-react";
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
          Exhibition
        </h4>
        <SidebarMenu>
          <SidebarMenuItem active>
            <a href="#">Exhibition Assistant</a>
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


const ConnectSection = styled(Card)`
  padding: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const DomainCard = styled(Card)`
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

export const ExhibitionExample: React.FC = () => {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "1024px", margin: "0 auto" }}>
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
              Exhibition Assistant
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Link articles to external domains for public-facing content
            </p>
          </div>

          {/* Add Domain Section */}
          <ConnectSection>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                borderRadius: "1rem",
                background: "hsl(var(--primary) / 0.1)",
                margin: "0 auto 16px",
              }}
            >
              <Globe style={{ width: "28px", height: "28px", color: "hsl(var(--primary))" }} />
            </div>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                margin: "0 0 8px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Connect External Domain
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: "0 auto 24px",
                maxWidth: "448px",
              }}
            >
              Link your curated articles to external websites and platforms. Content is delivered via
              API for seamless integration.
            </p>
            <Button variant="primary" icon={Plus} iconPosition="left">
              Add Domain
            </Button>
          </ConnectSection>

          {/* Linked Domains */}
          <section>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                margin: "0 0 16px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Connected Domains
            </h3>
            <div>
              {linkedDomains.map((domain) => {
                const statusColor =
                  domain.status === "active"
                    ? "hsl(142 76% 36% / 0.1)"
                    : "hsl(38 92% 50% / 0.1)";
                const statusTextColor =
                  domain.status === "active" ? "hsl(142 76% 36%)" : "hsl(38 92% 50%)";

                return (
                  <DomainCard key={domain.id}>
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "40px",
                              height: "40px",
                              borderRadius: "0.5rem",
                              background: "hsl(var(--secondary))",
                            }}
                          >
                            <LinkIcon
                              style={{
                                width: "20px",
                                height: "20px",
                                color: "hsl(var(--muted-foreground))",
                              }}
                            />
                          </div>
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <CardTitle style={{ fontSize: "14px", margin: 0 }}>
                                {domain.domain}
                              </CardTitle>
                              <span
                                style={{
                                  padding: "4px 8px",
                                  borderRadius: "9999px",
                                  fontSize: "12px",
                                  fontWeight: 500,
                                  background: statusColor,
                                  color: statusTextColor,
                                }}
                              >
                                {domain.status === "active" ? "Active" : "Pending"}
                              </span>
                            </div>
                            <p
                              style={{
                                fontSize: "12px",
                                color: "hsl(var(--muted-foreground))",
                                margin: "4px 0 0 0",
                              }}
                            >
                              {domain.articlesLinked} articles linked · Last sync {domain.lastSync}
                            </p>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                          <Button variant="ghost" size="sm" icon={Eye} iconPosition="left">
                            <span style={{ width: 0, height: 0, overflow: "hidden" }}>Preview</span>
                          </Button>
                          <Button variant="ghost" size="sm" icon={Settings} iconPosition="left">
                            <span style={{ width: 0, height: 0, overflow: "hidden" }}>Settings</span>
                          </Button>
                          <Button variant="ghost" size="sm" icon={ExternalLink} iconPosition="left">
                            <span style={{ width: 0, height: 0, overflow: "hidden" }}>Open</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </DomainCard>
                );
              })}
            </div>
          </section>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
