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
  SidebarTrigger,
  Main,
  Container,
} from "../layout";
import {
  NavMenu,
  NavMenuItem,
  Menubar,
  MenubarItem,
  MenubarSeparator,
} from "../navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Logo,
  Separator,
} from "../";

// Example sidebar content
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
          <SidebarMenuItem active>
            <a href="#">Dashboard</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Collections</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Media</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Analytics</a>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      <Separator />

      <div style={{ marginTop: "16px" }}>
        <h4
          style={{
            margin: "0 0 8px 0",
            fontSize: "12px",
            fontWeight: 600,
            color: "hsl(var(--muted-foreground))",
            textTransform: "uppercase",
          }}
        >
          Management
        </h4>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="#">Users</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Settings</a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="#">Help</a>
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


// Example main content
const ExampleContent = (
  <div>
    <div style={{ marginBottom: "24px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to the Shaw Heritage Content Management System</p>
    </div>

    {/* Stats Cards */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        marginBottom: "32px",
      }}
    >
      <Card variant="gradient">
        <CardHeader>
          <CardTitle>Collections</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "hsl(var(--primary))",
            }}
          >
            12
          </div>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Active collections
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Media Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "hsl(var(--primary))",
            }}
          >
            1,234
          </div>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Media items
          </p>
        </CardContent>
      </Card>

      <Card variant="vintage">
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "hsl(var(--primary))",
            }}
          >
            45
          </div>
          <p
            style={{
              margin: "8px 0 0 0",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Registered users
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Content Sections */}
    <div
      style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "hsl(var(--primary))",
                }}
              />
              <span>New collection "Vintage Posters" created</span>
              <span
                style={{
                  marginLeft: "auto",
                  color: "hsl(var(--muted-foreground))",
                  fontSize: "0.875rem",
                }}
              >
                2 hours ago
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "hsl(var(--accent))",
                }}
              />
              <span>15 media files uploaded</span>
              <span
                style={{
                  marginLeft: "auto",
                  color: "hsl(var(--muted-foreground))",
                  fontSize: "0.875rem",
                }}
              >
                4 hours ago
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "hsl(var(--success))",
                }}
              />
              <span>User "john.doe" registered</span>
              <span
                style={{
                  marginLeft: "auto",
                  color: "hsl(var(--muted-foreground))",
                  fontSize: "0.875rem",
                }}
              >
                1 day ago
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Button variant="cms" size="sm" style={{ width: "100%" }}>
              Create Collection
            </Button>
            <Button variant="outline" size="sm" style={{ width: "100%" }}>
              Upload Media
            </Button>
            <Button variant="ghost" size="sm" style={{ width: "100%" }}>
              Manage Users
            </Button>
            <Button variant="ghost" size="sm" style={{ width: "100%" }}>
              View Analytics
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

// Complete layout example
export const CompleteLayoutExample: React.FC = () => {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        {ExampleContent}
      </PageLayout>
    </SidebarProvider>
  );
};

// Auth layout example
export const AuthLayoutExample: React.FC = () => {
  return (
    <PageLayout mainVariant="centered" containerSize="sm">
      <Card variant="gradient" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <CardHeader>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <Logo variant="shaw" size={60} />
          </div>
          <CardTitle style={{ textAlign: "center" }}>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  background: "hsl(var(--input))",
                  color: "hsl(var(--foreground))",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  background: "hsl(var(--input))",
                  color: "hsl(var(--foreground))",
                  fontSize: "14px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                }}
              >
                <input type="checkbox" />
                Remember me
              </label>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "hsl(var(--primary))",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </a>
            </div>
            <Button variant="cms" size="lg" style={{ width: "100%" }}>
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  );
};

