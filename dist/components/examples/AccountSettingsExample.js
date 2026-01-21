import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { Button, Card, CardContent, CardTitle, Input, Label } from "../";
import { User, Mail, Lock, Bell, Palette, Save } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";
const SettingsSection = styled(Card) `
  padding: 24px;
  margin-bottom: 32px;
`;
const SectionHeader = styled.div `
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
export const AccountSettingsExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "40px", maxWidth: "896px", margin: "0 auto" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Account Settings" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Manage your account preferences and settings" })] }), _jsxs(SettingsSection, { children: [_jsxs(SectionHeader, { children: [_jsx(User, {}), _jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: "Profile Information" })] }), _jsxs(CardContent, { children: [_jsxs("div", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "24px",
                                            marginBottom: "24px",
                                        }, children: [_jsx("div", { style: {
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
                                                }, children: "JL" }), _jsx(Button, { variant: "outline", size: "sm", children: "Change Avatar" })] }), _jsxs("div", { style: {
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)",
                                            gap: "16px",
                                        }, children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "firstName", children: "First Name" }), _jsx(Input, { id: "firstName", defaultValue: "James", style: { marginTop: "8px" } })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "lastName", children: "Last Name" }), _jsx(Input, { id: "lastName", defaultValue: "Liu", style: { marginTop: "8px" } })] })] })] })] }), _jsxs(SettingsSection, { children: [_jsxs(SectionHeader, { children: [_jsx(Mail, {}), _jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: "Email Address" })] }), _jsx(CardContent, { children: _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", defaultValue: "james@shaw-heritage.com", style: { marginTop: "8px" } })] }) })] }), _jsxs(SettingsSection, { children: [_jsxs(SectionHeader, { children: [_jsx(Lock, {}), _jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: "Password" })] }), _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "currentPassword", children: "Current Password" }), _jsx(Input, { id: "currentPassword", type: "password", style: { marginTop: "8px" } })] }), _jsxs("div", { style: {
                                                display: "grid",
                                                gridTemplateColumns: "repeat(2, 1fr)",
                                                gap: "16px",
                                            }, children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "newPassword", children: "New Password" }), _jsx(Input, { id: "newPassword", type: "password", style: { marginTop: "8px" } })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "confirmPassword", children: "Confirm New Password" }), _jsx(Input, { id: "confirmPassword", type: "password", style: { marginTop: "8px" } })] })] })] }) })] }), _jsxs(SettingsSection, { children: [_jsxs(SectionHeader, { children: [_jsx(Bell, {}), _jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: "Notifications" })] }), _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsxs("div", { style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }, children: [_jsxs("div", { children: [_jsx("p", { style: {
                                                                fontSize: "14px",
                                                                fontWeight: 500,
                                                                margin: "0 0 4px 0",
                                                                color: "hsl(var(--foreground))",
                                                            }, children: "Email Notifications" }), _jsx("p", { style: {
                                                                fontSize: "12px",
                                                                color: "hsl(var(--muted-foreground))",
                                                                margin: 0,
                                                            }, children: "Receive email updates about activity" })] }), _jsx("input", { type: "checkbox", defaultChecked: true, style: { width: "40px", height: "20px" } })] }), _jsxs("div", { style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }, children: [_jsxs("div", { children: [_jsx("p", { style: {
                                                                fontSize: "14px",
                                                                fontWeight: 500,
                                                                margin: "0 0 4px 0",
                                                                color: "hsl(var(--foreground))",
                                                            }, children: "New Upload Alerts" }), _jsx("p", { style: {
                                                                fontSize: "12px",
                                                                color: "hsl(var(--muted-foreground))",
                                                                margin: 0,
                                                            }, children: "Get notified when new content is uploaded" })] }), _jsx("input", { type: "checkbox", defaultChecked: true, style: { width: "40px", height: "20px" } })] }), _jsxs("div", { style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }, children: [_jsxs("div", { children: [_jsx("p", { style: {
                                                                fontSize: "14px",
                                                                fontWeight: 500,
                                                                margin: "0 0 4px 0",
                                                                color: "hsl(var(--foreground))",
                                                            }, children: "Weekly Digest" }), _jsx("p", { style: {
                                                                fontSize: "12px",
                                                                color: "hsl(var(--muted-foreground))",
                                                                margin: 0,
                                                            }, children: "Receive a weekly summary of activity" })] }), _jsx("input", { type: "checkbox", style: { width: "40px", height: "20px" } })] })] }) })] }), _jsxs(SettingsSection, { children: [_jsxs(SectionHeader, { children: [_jsx(Palette, {}), _jsx(CardTitle, { style: { fontSize: "14px", margin: 0 }, children: "Appearance" })] }), _jsx(CardContent, { children: _jsxs("div", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }, children: [_jsxs("div", { children: [_jsx("p", { style: {
                                                        fontSize: "14px",
                                                        fontWeight: 500,
                                                        margin: "0 0 4px 0",
                                                        color: "hsl(var(--foreground))",
                                                    }, children: "Dark Mode" }), _jsx("p", { style: {
                                                        fontSize: "12px",
                                                        color: "hsl(var(--muted-foreground))",
                                                        margin: 0,
                                                    }, children: "Use dark theme across the application" })] }), _jsx("input", { type: "checkbox", style: { width: "40px", height: "20px" } })] }) })] }), _jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: _jsx(Button, { variant: "primary", icon: Save, iconPosition: "left", children: "Save Changes" }) })] }) }) }));
};
