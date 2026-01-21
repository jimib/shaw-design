import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle, SearchBar } from "../";
import { Plus, User } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const UserCard = styled(Card) `
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
export const UsersExample = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredUsers = sampleUsers.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase()));
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "1024px", margin: "0 auto" }, children: [_jsxs("div", { style: {
                            marginBottom: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }, children: [_jsxs("div", { children: [_jsx("h1", { style: {
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            margin: "0 0 4px 0",
                                            color: "hsl(var(--foreground))",
                                        }, children: "Users" }), _jsx("p", { style: {
                                            fontSize: "14px",
                                            color: "hsl(var(--muted-foreground))",
                                            margin: 0,
                                        }, children: "Manage user accounts and permissions" })] }), _jsx(Button, { variant: "primary", icon: Plus, iconPosition: "left", children: "Add User" })] }), _jsx("div", { style: { marginBottom: "24px" }, children: _jsx(SearchBar, { value: searchQuery, onChange: setSearchQuery, placeholder: "Search users..." }) }), _jsxs("p", { style: {
                            fontSize: "14px",
                            color: "hsl(var(--muted-foreground))",
                            margin: "0 0 16px 0",
                        }, children: [filteredUsers.length, " user", filteredUsers.length !== 1 ? "s" : ""] }), _jsx("div", { children: filteredUsers.map((user) => {
                            const roleColor = user.role === "Admin"
                                ? "hsl(var(--primary) / 0.1)"
                                : "hsl(var(--secondary))";
                            const roleTextColor = user.role === "Admin" ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))";
                            return (_jsx(UserCard, { children: _jsx(CardContent, { children: _jsx("div", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }, children: _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [_jsxs("div", { style: { position: "relative" }, children: [_jsx("div", { style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                width: "44px",
                                                                height: "44px",
                                                                borderRadius: "9999px",
                                                                background: "hsl(var(--secondary))",
                                                            }, children: _jsx(User, { style: {
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    color: "hsl(var(--muted-foreground))",
                                                                } }) }), _jsx("div", { style: {
                                                                position: "absolute",
                                                                bottom: "-2px",
                                                                right: "-2px",
                                                                width: "12px",
                                                                height: "12px",
                                                                borderRadius: "9999px",
                                                                border: "2px solid hsl(var(--card))",
                                                                background: "hsl(142 76% 36%)",
                                                            } })] }), _jsxs("div", { children: [_jsxs("div", { style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "8px",
                                                                marginBottom: "4px",
                                                            }, children: [_jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: user.name }), _jsx("span", { style: {
                                                                        padding: "4px 8px",
                                                                        borderRadius: "9999px",
                                                                        fontSize: "12px",
                                                                        fontWeight: 500,
                                                                        background: roleColor,
                                                                        color: roleTextColor,
                                                                    }, children: user.role }), _jsx("span", { style: {
                                                                        fontSize: "12px",
                                                                        color: "hsl(var(--muted-foreground))",
                                                                    }, children: "Active" })] }), _jsx("p", { style: {
                                                                fontSize: "12px",
                                                                color: "hsl(var(--muted-foreground))",
                                                                margin: "4px 0",
                                                            }, children: user.email }), _jsxs("p", { style: {
                                                                fontSize: "12px",
                                                                color: "hsl(var(--muted-foreground))",
                                                                margin: 0,
                                                            }, children: ["Created: ", user.created, user.lastLogin && (_jsxs("span", { style: { marginLeft: "12px" }, children: ["Last login: ", user.lastLogin] }))] })] })] }) }) }) }, user.id));
                        }) })] }) }) }));
};
