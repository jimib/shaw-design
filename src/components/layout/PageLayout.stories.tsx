import type { Meta, StoryObj } from "@storybook/react";
import {
  PageLayout,
  AuthLayout,
  DashboardLayout,
  ContentLayout,
} from "./PageLayout";
import { Header } from "./Header";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "./Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { Button } from "../Button";

const meta: Meta<typeof PageLayout> = {
  title: "Layout/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSidebar = (
  <>
    <SidebarHeader title="Shaw Heritage" showLogo={true} />
    <SidebarContent>
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
          <a href="#">Users</a>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <a href="#">Settings</a>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <Button variant="ghost" size="sm" style={{ width: "100%" }}>
        Logout
      </Button>
    </SidebarFooter>
  </>
);

const sampleHeader = (
  <Header
    title="Shaw Heritage CMS"
    showLogo={true}
    logoVariant="shaw"
    actions={
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="outline" size="sm">
          Settings
        </Button>
        <Button variant="cms" size="sm">
          Profile
        </Button>
      </div>
    }
  />
);

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1>Welcome to Shaw Heritage</h1>
        <p>This is a default page layout with no sidebar.</p>
      </div>
    ),
  },
};

export const WithSidebar: Story = {
  args: {
    showSidebar: true,
    sidebar: sampleSidebar,
    children: (
      <div>
        <h1>Dashboard</h1>
        <p>This layout includes a sidebar for navigation.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Collections</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your heritage collections</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Upload and organize media files</p>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
};

export const WithHeaderAndSidebar: Story = {
  args: {
    showSidebar: true,
    sidebar: sampleSidebar,
    header: sampleHeader,
    children: (
      <div>
        <h1>Full Dashboard</h1>
        <p>This layout includes both a header and sidebar.</p>
      </div>
    ),
  },
};

export const AuthLayoutExample: Story = {
  render: () => (
    <AuthLayout>
      <Card variant="gradient" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "4px" }}>
                Email
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
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "4px" }}>
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
                }}
              />
            </div>
            <Button variant="cms" size="lg" style={{ width: "100%" }}>
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  ),
};

export const DashboardLayoutExample: Story = {
  render: () => (
    <DashboardLayout sidebar={sampleSidebar} header={sampleHeader}>
      <div>
        <h1>Dashboard</h1>
        <p>This is a pre-built dashboard layout with sidebar and header.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Collections</CardTitle>
            </CardHeader>
            <CardContent>
              <p>12 active collections</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Media Files</CardTitle>
            </CardHeader>
            <CardContent>
              <p>1,234 media items</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p>45 registered users</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  ),
};

export const ContentLayoutExample: Story = {
  render: () => (
    <ContentLayout header={sampleHeader}>
      <div>
        <h1>Content Page</h1>
        <p>This is a content-focused layout with a header but no sidebar.</p>
        <Card>
          <CardHeader>
            <CardTitle>Article Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is the main content of your article. It's designed to be
              readable and well-spaced.
            </p>
            <p>
              You can include multiple paragraphs, images, and other content
              here.
            </p>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  ),
};

export const LongContentScrolling: Story = {
  render: () => (
    <DashboardLayout sidebar={sampleSidebar} header={sampleHeader}>
      <div>
        <h1>Long Content Test</h1>
        <p>
          This story tests scrolling behavior with long content. The sidebar
          should stay fixed while the main content scrolls.
        </p>

        {Array.from({ length: 50 }, (_, i) => (
          <Card key={i} style={{ marginBottom: "16px" }}>
            <CardHeader>
              <CardTitle>Card {i + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This is card number {i + 1}. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </CardContent>
          </Card>
        ))}

        <div
          style={{
            padding: "20px",
            textAlign: "center",
            background: "hsl(var(--muted))",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <p>
            <strong>End of content</strong>
          </p>
          <p>If you can see this, scrolling is working correctly!</p>
        </div>
      </div>
    </DashboardLayout>
  ),
};

