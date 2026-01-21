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
import { Button, Card, CardContent, CardTitle, SearchBar } from "../";
import { Search, Plus, User } from "lucide-react";
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
          <SidebarMenuItem active>
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


const UserCard = styled(Card)`
  padding: 20px;
  margin: 0 0 12px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: hsl(var(--primary) / 0.2);
    box-shadow: var(--shadow-elevated);
  }
`;

const sampleUsers = [
  {
    id: 1,
    name: "James",
    email: "jimi.bailey@gmail.com",
    role: "Admin",
    status: "active",
    created: "08/07/2025",
    lastLogin: "16/12/2025 11:13:02",
  },
  {
    id: 2,
    name: "Alastair",
    email: "alastaireilbeck@gmail.com",
    role: "Admin",
    status: "active",
    created: "09/07/2025",
    lastLogin: "04/01/2026 13:20:02",
  },
  {
    id: 3,
    name: "Wendy",
    email: "wendyng@revival-heritage.com",
    role: "User",
    status: "active",
    created: "08/09/2025",
    lastLogin: "10/12/2025 10:25:48",
  },
];

export const UsersExample: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = sampleUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={ExampleSidebar}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "1024px", margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: "0 0 4px 0",
                  color: "hsl(var(--foreground))",
                }}
              >
                Users
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "hsl(var(--muted-foreground))",
                  margin: 0,
                }}
              >
                Manage user accounts and permissions
              </p>
            </div>
            <Button variant="primary" icon={Plus} iconPosition="left">
              Add User
            </Button>
          </div>

          {/* Search */}
          <div style={{ marginBottom: "24px" }}>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search users..."
            />
          </div>

          {/* Results Count */}
          <p
            style={{
              fontSize: "14px",
              color: "hsl(var(--muted-foreground))",
              margin: "0 0 16px 0",
            }}
          >
            {filteredUsers.length} user{filteredUsers.length !== 1 ? "s" : ""}
          </p>

          {/* Users List */}
          <div>
            {filteredUsers.map((user) => {
              const roleColor =
                user.role === "Admin"
                  ? "hsl(var(--primary) / 0.1)"
                  : "hsl(var(--secondary))";
              const roleTextColor =
                user.role === "Admin" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))";

              return (
                <UserCard key={user.id}>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div style={{ position: "relative" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "44px",
                              height: "44px",
                              borderRadius: "9999px",
                              background: "hsl(var(--secondary))",
                            }}
                          >
                            <User
                              style={{
                                width: "20px",
                                height: "20px",
                                color: "hsl(var(--muted-foreground))",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "-2px",
                              right: "-2px",
                              width: "12px",
                              height: "12px",
                              borderRadius: "9999px",
                              border: "2px solid hsl(var(--card))",
                              background: "hsl(142 76% 36%)",
                            }}
                          />
                        </div>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginBottom: "4px",
                            }}
                          >
                            <CardTitle style={{ fontSize: "14px", margin: 0 }}>
                              {user.name}
                            </CardTitle>
                            <span
                              style={{
                                padding: "4px 8px",
                                borderRadius: "9999px",
                                fontSize: "12px",
                                fontWeight: 500,
                                background: roleColor,
                                color: roleTextColor,
                              }}
                            >
                              {user.role}
                            </span>
                            <span
                              style={{
                                fontSize: "12px",
                                color: "hsl(var(--muted-foreground))",
                              }}
                            >
                              Active
                            </span>
                          </div>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "hsl(var(--muted-foreground))",
                              margin: "4px 0",
                            }}
                          >
                            {user.email}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "hsl(var(--muted-foreground))",
                              margin: 0,
                            }}
                          >
                            Created: {user.created}
                            {user.lastLogin && (
                              <span style={{ marginLeft: "12px" }}>
                                Last login: {user.lastLogin}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </UserCard>
              );
            })}
          </div>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};
