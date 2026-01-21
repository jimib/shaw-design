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
import { Button, Card, CardContent, CardTitle, Input, Label } from "../";
import { User, Mail, Lock, Bell, Palette, Save } from "lucide-react";
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
          Account
        </h4>
        <SidebarMenu>
          <SidebarMenuItem active>
            <a href="#">Settings</a>
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


const SettingsSection = styled(Card)`
  padding: 24px;
  margin-bottom: 32px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  svg {
    width: 20px;
    height: 20px;
    color: hsl(var(--muted-foreground));
  }
`;

export const AccountSettingsExample: React.FC = () => {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "896px", margin: "0 auto" }}>
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
              Account Settings
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Manage your account preferences and settings
            </p>
          </div>

          {/* Profile Section */}
          <SettingsSection>
            <SectionHeader>
              <User />
              <CardTitle style={{ fontSize: "14px", margin: 0 }}>Profile Information</CardTitle>
            </SectionHeader>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
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
                    borderRadius: "9999px",
                    background: "hsl(var(--primary) / 0.1)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "hsl(var(--primary))",
                  }}
                >
                  JL
                </div>
                <Button variant="outline" size="sm">
                  Change Avatar
                </Button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="James" style={{ marginTop: "8px" }} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Liu" style={{ marginTop: "8px" }} />
                </div>
              </div>
            </CardContent>
          </SettingsSection>

          {/* Email Section */}
          <SettingsSection>
            <SectionHeader>
              <Mail />
              <CardTitle style={{ fontSize: "14px", margin: 0 }}>Email Address</CardTitle>
            </SectionHeader>
            <CardContent>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="james@shaw-heritage.com"
                  style={{ marginTop: "8px" }}
                />
              </div>
            </CardContent>
          </SettingsSection>

          {/* Password Section */}
          <SettingsSection>
            <SectionHeader>
              <Lock />
              <CardTitle style={{ fontSize: "14px", margin: 0 }}>Password</CardTitle>
            </SectionHeader>
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    style={{ marginTop: "8px" }}
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "16px",
                  }}
                >
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      style={{ marginTop: "8px" }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      style={{ marginTop: "8px" }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </SettingsSection>

          {/* Notifications Section */}
          <SettingsSection>
            <SectionHeader>
              <Bell />
              <CardTitle style={{ fontSize: "14px", margin: 0 }}>Notifications</CardTitle>
            </SectionHeader>
            <CardContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        margin: "0 0 4px 0",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      Email Notifications
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "hsl(var(--muted-foreground))",
                        margin: 0,
                      }}
                    >
                      Receive email updates about activity
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked style={{ width: "40px", height: "20px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        margin: "0 0 4px 0",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      New Upload Alerts
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "hsl(var(--muted-foreground))",
                        margin: 0,
                      }}
                    >
                      Get notified when new content is uploaded
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked style={{ width: "40px", height: "20px" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        margin: "0 0 4px 0",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      Weekly Digest
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "hsl(var(--muted-foreground))",
                        margin: 0,
                      }}
                    >
                      Receive a weekly summary of activity
                    </p>
                  </div>
                  <input type="checkbox" style={{ width: "40px", height: "20px" }} />
                </div>
              </div>
            </CardContent>
          </SettingsSection>

          {/* Appearance Section */}
          <SettingsSection>
            <SectionHeader>
              <Palette />
              <CardTitle style={{ fontSize: "14px", margin: 0 }}>Appearance</CardTitle>
            </SectionHeader>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "0 0 4px 0",
                      color: "hsl(var(--foreground))",
                    }}
                  >
                    Dark Mode
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "hsl(var(--muted-foreground))",
                      margin: 0,
                    }}
                  >
                    Use dark theme across the application
                  </p>
                </div>
                <input type="checkbox" style={{ width: "40px", height: "20px" }} />
              </div>
            </CardContent>
          </SettingsSection>

          {/* Save Button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="primary" icon={Save} iconPosition="left">
              Save Changes
            </Button>
          </div>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
