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
import {
  Settings,
  Database,
  Download,
  HelpCircle,
  RefreshCw,
  Shield,
  Key,
  HardDrive,
  BarChart3,
  FileText,
} from "lucide-react";
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
          <SidebarMenuItem active>
            <a href="#">Tools & Resources</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Users</a>
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


const ToolCard = styled(Card)`
  padding: 20px;
  margin: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: hsl(var(--primary) / 0.2);
    box-shadow: var(--shadow-elevated);
  }
`;

const tools = [
  { id: 1, title: "Database Backup", description: "Create and manage database backups", icon: Database, action: "Run Backup" },
  { id: 2, title: "Export Data", description: "Export archive data in various formats", icon: Download, action: "Export" },
  { id: 3, title: "Help & Support", description: "Access documentation and contact support", icon: HelpCircle, action: "Get Help" },
  { id: 4, title: "Reindex Content", description: "Rebuild search indexes for better performance", icon: RefreshCw, action: "Reindex" },
  { id: 5, title: "API Keys", description: "Manage API access and authentication", icon: Key, action: "Manage" },
  { id: 6, title: "Security Settings", description: "Configure access controls and permissions", icon: Shield, action: "Configure" },
];

const stats = [
  { label: "Total Archive Items", value: "2,847", icon: FileText },
  { label: "Storage Used", value: "45.2 GB", icon: HardDrive },
  { label: "Monthly Views", value: "12.4K", icon: BarChart3 },
];

export const AdminExample: React.FC = () => {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "1280px", margin: "0 auto" }}>
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
              Tools & Resources
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Administrative tools for managing the heritage database
            </p>
          </div>

          {/* Stats Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {stats.map((stat) => (
              <Card key={stat.label} style={{ padding: "20px" }}>
                <CardContent>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                      <stat.icon
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "hsl(var(--muted-foreground))",
                        }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          margin: "0 0 4px 0",
                          color: "hsl(var(--foreground))",
                        }}
                      >
                        {stat.value}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "hsl(var(--muted-foreground))",
                          margin: 0,
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools Grid */}
          <section>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                margin: "0 0 16px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Administrative Tools
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
              }}
            >
              {tools.map((tool) => (
                <ToolCard key={tool.id}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "0.5rem",
                        background: "hsl(var(--secondary))",
                        marginBottom: "16px",
                      }}
                    >
                      <tool.icon
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "hsl(var(--muted-foreground))",
                        }}
                      />
                    </div>
                    <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>
                      {tool.title}
                    </CardTitle>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "hsl(var(--muted-foreground))",
                        margin: "0 0 16px 0",
                      }}
                    >
                      {tool.description}
                    </p>
                    <Button variant="outline" size="sm" style={{ width: "100%" }}>
                      {tool.action}
                    </Button>
                  </CardContent>
                </ToolCard>
              ))}
            </div>
          </section>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
