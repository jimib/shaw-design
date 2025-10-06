import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Sidebar, SidebarProvider, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarTrigger, } from "./Sidebar";
import { Button } from "../Button";
import { Separator } from "../Separator";
const meta = {
    title: "Layout/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (_jsx(SidebarProvider, { children: _jsxs("div", { style: { display: "flex", minHeight: "100vh" }, children: [_jsx(Story, {}), _jsxs("div", { style: {
                            flex: 1,
                            padding: "24px",
                            background: "hsl(var(--background))",
                        }, children: [_jsx("h2", { children: "Main Content" }), _jsx("p", { children: "This is the main content area. The sidebar should be visible on the left." }), _jsx(SidebarTrigger, {})] })] }) })),
    ],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "floating", "inset"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        variant: "default",
        children: (_jsxs(_Fragment, { children: [_jsx(SidebarHeader, { title: "Shaw Heritage", showLogo: true }), _jsx(SidebarContent, { children: _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Users" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) })] }) }), _jsx(SidebarFooter, { children: _jsx(Button, { variant: "ghost", size: "sm", style: { width: "100%" }, children: "Logout" }) })] })),
    },
};
export const Floating = {
    args: {
        variant: "floating",
        children: (_jsxs(_Fragment, { children: [_jsx(SidebarHeader, { title: "Shaw Heritage", showLogo: true }), _jsx(SidebarContent, { children: _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) })] }) })] })),
    },
};
export const WithGroups = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(SidebarHeader, { title: "Shaw Heritage", showLogo: true }), _jsxs(SidebarContent, { children: [_jsxs("div", { style: { marginBottom: "16px" }, children: [_jsx("h4", { style: {
                                        margin: "0 0 8px 0",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: "hsl(var(--muted-foreground))",
                                        textTransform: "uppercase",
                                    }, children: "Main" }), _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) })] })] }), _jsx(Separator, {}), _jsxs("div", { style: { marginTop: "16px" }, children: [_jsx("h4", { style: {
                                        margin: "0 0 8px 0",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: "hsl(var(--muted-foreground))",
                                        textTransform: "uppercase",
                                    }, children: "Settings" }), _jsxs(SidebarMenu, { children: [_jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Users" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Preferences" }) }), _jsx(SidebarMenuItem, { children: _jsx("a", { href: "#", children: "Help" }) })] })] })] }), _jsx(SidebarFooter, { children: _jsx(Button, { variant: "ghost", size: "sm", style: { width: "100%" }, children: "Logout" }) })] })),
    },
};
