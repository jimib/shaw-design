import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PageLayout, AuthLayout, DashboardLayout, ContentLayout, } from "./PageLayout";
import { Header } from "./Header";
import { SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarFooter, } from "./Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../Card";
import { Button } from "../Button";
const meta = {
    title: "Layout/PageLayout",
    component: PageLayout,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};
export default meta;
const sampleSidebar = (_jsxs(_Fragment, { children: [_jsx(SidebarHeader, { title: "Shaw Heritage", showLogo: true }), _jsx(SidebarContent, { children: _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Users" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) })] }) }), _jsx(SidebarFooter, { children: _jsx(Button, { variant: "ghost", size: "sm", style: { width: "100%" }, children: "Logout" }) })] }));
const sampleHeader = (_jsx(Header, { title: "Shaw Heritage CMS", showLogo: true, logoVariant: "shaw", actions: _jsxs("div", { style: { display: "flex", gap: "8px" }, children: [_jsx(Button, { variant: "outline", size: "sm", children: "Settings" }), _jsx(Button, { variant: "cms", size: "sm", children: "Profile" })] }) }));
export const Default = {
    args: {
        children: (_jsxs("div", { children: [_jsx("h1", { children: "Welcome to Shaw Heritage" }), _jsx("p", { children: "This is a default page layout with no sidebar." })] })),
    },
};
export const WithSidebar = {
    args: {
        showSidebar: true,
        sidebar: sampleSidebar,
        children: (_jsxs("div", { children: [_jsx("h1", { children: "Dashboard" }), _jsx("p", { children: "This layout includes a sidebar for navigation." }), _jsxs("div", { style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "16px",
                        marginTop: "24px",
                    }, children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Collections" }) }), _jsx(CardContent, { children: _jsx("p", { children: "Manage your heritage collections" }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Media" }) }), _jsx(CardContent, { children: _jsx("p", { children: "Upload and organize media files" }) })] })] })] })),
    },
};
export const WithHeaderAndSidebar = {
    args: {
        showSidebar: true,
        sidebar: sampleSidebar,
        header: sampleHeader,
        children: (_jsxs("div", { children: [_jsx("h1", { children: "Full Dashboard" }), _jsx("p", { children: "This layout includes both a header and sidebar." })] })),
    },
};
export const AuthLayoutExample = {
    render: () => (_jsx(AuthLayout, { children: _jsxs(Card, { variant: "gradient", style: { maxWidth: "400px", margin: "0 auto" }, children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Sign In" }) }), _jsx(CardContent, { children: _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [_jsxs("div", { children: [_jsx("label", { style: { display: "block", marginBottom: "4px" }, children: "Email" }), _jsx("input", { type: "email", placeholder: "Enter your email", style: {
                                            width: "100%",
                                            padding: "8px 12px",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: "6px",
                                            background: "hsl(var(--input))",
                                            color: "hsl(var(--foreground))",
                                        } })] }), _jsxs("div", { children: [_jsx("label", { style: { display: "block", marginBottom: "4px" }, children: "Password" }), _jsx("input", { type: "password", placeholder: "Enter your password", style: {
                                            width: "100%",
                                            padding: "8px 12px",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: "6px",
                                            background: "hsl(var(--input))",
                                            color: "hsl(var(--foreground))",
                                        } })] }), _jsx(Button, { variant: "cms", size: "lg", style: { width: "100%" }, children: "Sign In" })] }) })] }) })),
};
export const DashboardLayoutExample = {
    render: () => (_jsx(DashboardLayout, { sidebar: sampleSidebar, header: sampleHeader, children: _jsxs("div", { children: [_jsx("h1", { children: "Dashboard" }), _jsx("p", { children: "This is a pre-built dashboard layout with sidebar and header." }), _jsxs("div", { style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "16px",
                        marginTop: "24px",
                    }, children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Collections" }) }), _jsx(CardContent, { children: _jsx("p", { children: "12 active collections" }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Media Files" }) }), _jsx(CardContent, { children: _jsx("p", { children: "1,234 media items" }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Users" }) }), _jsx(CardContent, { children: _jsx("p", { children: "45 registered users" }) })] })] })] }) })),
};
export const ContentLayoutExample = {
    render: () => (_jsx(ContentLayout, { header: sampleHeader, children: _jsxs("div", { children: [_jsx("h1", { children: "Content Page" }), _jsx("p", { children: "This is a content-focused layout with a header but no sidebar." }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Article Title" }) }), _jsxs(CardContent, { children: [_jsx("p", { children: "This is the main content of your article. It's designed to be readable and well-spaced." }), _jsx("p", { children: "You can include multiple paragraphs, images, and other content here." })] })] })] }) })),
};
export const LongContentScrolling = {
    render: () => (_jsx(DashboardLayout, { sidebar: sampleSidebar, header: sampleHeader, children: _jsxs("div", { children: [_jsx("h1", { children: "Long Content Test" }), _jsx("p", { children: "This story tests scrolling behavior with long content. The sidebar should stay fixed while the main content scrolls." }), Array.from({ length: 50 }, (_, i) => (_jsxs(Card, { style: { marginBottom: "16px" }, children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { children: ["Card ", i + 1] }) }), _jsxs(CardContent, { children: [_jsxs("p", { children: ["This is card number ", i + 1, ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."] }), _jsx("p", { children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." })] })] }, i))), _jsxs("div", { style: {
                        padding: "20px",
                        textAlign: "center",
                        background: "hsl(var(--muted))",
                        borderRadius: "8px",
                        marginTop: "20px",
                    }, children: [_jsx("p", { children: _jsx("strong", { children: "End of content" }) }), _jsx("p", { children: "If you can see this, scrolling is working correctly!" })] })] }) })),
};
