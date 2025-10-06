import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PageLayout, Header, SidebarProvider, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, } from "../layout";
import { NavMenu, NavMenuItem, } from "../navigation";
import { Card, CardHeader, CardTitle, CardContent, Button, Logo, Separator, } from "../";
// Example sidebar content
const ExampleSidebar = (_jsxs(_Fragment, { children: [_jsx(SidebarHeader, { title: "Shaw Heritage", showLogo: true }), _jsxs(SidebarContent, { children: [_jsxs("div", { style: { marginBottom: "16px" }, children: [_jsx("h4", { style: {
                                margin: "0 0 8px 0",
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "hsl(var(--muted-foreground))",
                                textTransform: "uppercase",
                            }, children: "Main" }), _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Analytics" }) })] })] }), _jsx(Separator, {}), _jsxs("div", { style: { marginTop: "16px" }, children: [_jsx("h4", { style: {
                                margin: "0 0 8px 0",
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "hsl(var(--muted-foreground))",
                                textTransform: "uppercase",
                            }, children: "Management" }), _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Users" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Help" }) })] })] })] }), _jsx(SidebarFooter, { children: _jsx(Button, { variant: "ghost", size: "sm", style: { width: "100%" }, children: "Logout" }) })] }));
// Example header content
const ExampleHeader = (_jsx(Header, { title: "Shaw Heritage CMS", showLogo: true, logoVariant: "shaw", actions: _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [_jsxs(NavMenu, { variant: "minimal", children: [_jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) })] }), _jsx(Separator, { orientation: "vertical", style: { height: "20px" } }), _jsx(Button, { variant: "outline", size: "sm", children: "Settings" }), _jsx(Button, { variant: "cms", size: "sm", children: "Profile" })] }) }));
// Example main content
const ExampleContent = (_jsxs("div", { children: [_jsxs("div", { style: { marginBottom: "24px" }, children: [_jsx("h1", { children: "Dashboard" }), _jsx("p", { children: "Welcome to the Shaw Heritage Content Management System" })] }), _jsxs("div", { style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "16px",
                marginBottom: "32px",
            }, children: [_jsxs(Card, { variant: "gradient", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Collections" }) }), _jsxs(CardContent, { children: [_jsx("div", { style: {
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        color: "hsl(var(--primary))",
                                    }, children: "12" }), _jsx("p", { style: {
                                        margin: "8px 0 0 0",
                                        color: "hsl(var(--muted-foreground))",
                                    }, children: "Active collections" })] })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Media Files" }) }), _jsxs(CardContent, { children: [_jsx("div", { style: {
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        color: "hsl(var(--primary))",
                                    }, children: "1,234" }), _jsx("p", { style: {
                                        margin: "8px 0 0 0",
                                        color: "hsl(var(--muted-foreground))",
                                    }, children: "Media items" })] })] }), _jsxs(Card, { variant: "vintage", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Users" }) }), _jsxs(CardContent, { children: [_jsx("div", { style: {
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                        color: "hsl(var(--primary))",
                                    }, children: "45" }), _jsx("p", { style: {
                                        margin: "8px 0 0 0",
                                        color: "hsl(var(--muted-foreground))",
                                    }, children: "Registered users" })] })] })] }), _jsxs("div", { style: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }, children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Recent Activity" }) }), _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [_jsx("div", { style: {
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    background: "hsl(var(--primary))",
                                                } }), _jsx("span", { children: "New collection \"Vintage Posters\" created" }), _jsx("span", { style: {
                                                    marginLeft: "auto",
                                                    color: "hsl(var(--muted-foreground))",
                                                    fontSize: "0.875rem",
                                                }, children: "2 hours ago" })] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [_jsx("div", { style: {
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    background: "hsl(var(--accent))",
                                                } }), _jsx("span", { children: "15 media files uploaded" }), _jsx("span", { style: {
                                                    marginLeft: "auto",
                                                    color: "hsl(var(--muted-foreground))",
                                                    fontSize: "0.875rem",
                                                }, children: "4 hours ago" })] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [_jsx("div", { style: {
                                                    width: "8px",
                                                    height: "8px",
                                                    borderRadius: "50%",
                                                    background: "hsl(var(--success))",
                                                } }), _jsx("span", { children: "User \"john.doe\" registered" }), _jsx("span", { style: {
                                                    marginLeft: "auto",
                                                    color: "hsl(var(--muted-foreground))",
                                                    fontSize: "0.875rem",
                                                }, children: "1 day ago" })] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Quick Actions" }) }), _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [_jsx(Button, { variant: "cms", size: "sm", style: { width: "100%" }, children: "Create Collection" }), _jsx(Button, { variant: "outline", size: "sm", style: { width: "100%" }, children: "Upload Media" }), _jsx(Button, { variant: "ghost", size: "sm", style: { width: "100%" }, children: "Manage Users" }), _jsx(Button, { variant: "ghost", size: "sm", style: { width: "100%" }, children: "View Analytics" })] }) })] })] })] }));
// Complete layout example
export const CompleteLayoutExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: ExampleSidebar, header: ExampleHeader, containerSize: "full", children: ExampleContent }) }));
};
// Auth layout example
export const AuthLayoutExample = () => {
    return (_jsx(PageLayout, { mainVariant: "centered", containerSize: "sm", children: _jsxs(Card, { variant: "gradient", style: { maxWidth: "400px", margin: "0 auto" }, children: [_jsxs(CardHeader, { children: [_jsx("div", { style: { textAlign: "center", marginBottom: "16px" }, children: _jsx(Logo, { variant: "shaw", size: 60 }) }), _jsx(CardTitle, { style: { textAlign: "center" }, children: "Sign In" })] }), _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsxs("div", { children: [_jsx("label", { style: {
                                            display: "block",
                                            marginBottom: "4px",
                                            fontWeight: "500",
                                        }, children: "Email Address" }), _jsx("input", { type: "email", placeholder: "Enter your email", style: {
                                            width: "100%",
                                            padding: "8px 12px",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: "6px",
                                            background: "hsl(var(--input))",
                                            color: "hsl(var(--foreground))",
                                            fontSize: "14px",
                                        } })] }), _jsxs("div", { children: [_jsx("label", { style: {
                                            display: "block",
                                            marginBottom: "4px",
                                            fontWeight: "500",
                                        }, children: "Password" }), _jsx("input", { type: "password", placeholder: "Enter your password", style: {
                                            width: "100%",
                                            padding: "8px 12px",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: "6px",
                                            background: "hsl(var(--input))",
                                            color: "hsl(var(--foreground))",
                                            fontSize: "14px",
                                        } })] }), _jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }, children: [_jsxs("label", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            fontSize: "14px",
                                        }, children: [_jsx("input", { type: "checkbox" }), "Remember me"] }), _jsx("a", { href: "#", style: {
                                            fontSize: "14px",
                                            color: "hsl(var(--primary))",
                                            textDecoration: "none",
                                        }, children: "Forgot password?" })] }), _jsx(Button, { variant: "cms", size: "lg", style: { width: "100%" }, children: "Sign In" })] }) })] }) }));
};
