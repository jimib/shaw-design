import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "./Sidebar";
import { Button } from "../Button";
import { Separator } from "../Separator";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Story />
          <div
            style={{
              flex: 1,
              padding: "24px",
              background: "hsl(var(--background))",
            }}
          >
            <h2>Main Content</h2>
            <p>
              This is the main content area. The sidebar should be visible on
              the left.
            </p>
            <SidebarTrigger />
          </div>
        </div>
      </SidebarProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "floating", "inset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: (
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
    ),
  },
};

export const Floating: Story = {
  args: {
    variant: "floating",
    children: (
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
          </SidebarMenu>
        </SidebarContent>
      </>
    ),
  },
};

export const WithGroups: Story = {
  args: {
    children: (
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
              Settings
            </h4>
            <SidebarMenu>
              <SidebarMenuItem>
                <a href="#">Users</a>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <a href="#">Preferences</a>
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
    ),
  },
};
