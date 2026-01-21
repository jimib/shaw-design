import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageLayout, SidebarProvider, } from "../layout";
import { StatsCard, ActivityFeed, QuickActions, UserCard, } from "../";
import { Archive, Feather, Globe, Upload, FileText, Users, Edit3, Eye, } from "lucide-react";
import { ExampleSidebar } from "./ExampleSidebar";
const stats = [
    {
        label: "Archive Items",
        value: "2,847",
        change: "+12 this week",
        icon: Archive,
        href: "#",
    },
    {
        label: "Articles",
        value: "156",
        change: "+3 this week",
        icon: Feather,
        href: "#",
    },
    {
        label: "Exhibition Visitors",
        value: "1,247",
        change: "+89 this week",
        icon: Globe,
        href: "#",
    },
    {
        label: "Connected Domains",
        value: "3",
        change: "All active",
        icon: Globe,
        href: "#",
    },
];
const recentActivity = [
    {
        id: 1,
        action: "uploaded",
        item: "Southern Screen 南國電影 No. 148",
        user: "James",
        time: "2 hours ago",
        icon: Upload,
        iconColor: "hsl(var(--primary))",
        parentCategory: "archive",
    },
    {
        id: 2,
        action: "edited",
        item: "邵逸夫和他的黃金時代",
        user: "Alastair",
        time: "4 hours ago",
        icon: Edit3,
        iconColor: "hsl(38 92% 50%)",
        parentCategory: "curate",
    },
    {
        id: 3,
        action: "published",
        item: "Southern Screen 南國電影 No. 147",
        user: "Wendy",
        time: "Yesterday",
        icon: Globe,
        iconColor: "hsl(142 76% 36%)",
        parentCategory: "exhibition",
    },
    {
        id: 4,
        action: "viewed",
        item: "邵氏電影王國秘辛",
        user: "Ho Puay Peng",
        time: "Yesterday",
        icon: Eye,
        iconColor: "hsl(var(--muted-foreground))",
        parentCategory: "archive",
    },
    {
        id: 5,
        action: "uploaded",
        item: "The Shaw Prize 邵逸夫獎",
        user: "Kiko Fan",
        time: "2 days ago",
        icon: Upload,
        iconColor: "hsl(var(--primary))",
        parentCategory: "archive",
    },
];
const recentUsers = [
    {
        name: "Dora",
        email: "doratoihu@gmail.com",
        joined: "03/12/2025",
        role: "User",
    },
    {
        name: "wenkaihu",
        email: "wenkaihu@revival-heritage.com",
        joined: "29/10/2025",
        role: "User",
    },
    {
        name: "HWK0808",
        email: "hwk0808@outlook.com",
        joined: "23/10/2025",
        role: "User",
    },
];
const quickActions = [
    {
        label: "Upload Content",
        href: "#",
        icon: Upload,
    },
    {
        label: "New Article",
        href: "#",
        icon: FileText,
    },
    {
        label: "Manage Users",
        href: "#",
        icon: Users,
    },
];
export const DashboardExample = () => {
    return (_jsx(SidebarProvider, { children: _jsx(PageLayout, { showSidebar: true, sidebar: _jsx(ExampleSidebar, { activePath: "#" }), containerSize: "full", children: _jsxs("div", { style: { padding: "24px" }, children: [_jsxs("div", { style: { marginBottom: "40px" }, children: [_jsx("h1", { style: {
                                    fontSize: "24px",
                                    fontWeight: 600,
                                    margin: "0 0 4px 0",
                                    color: "hsl(var(--foreground))",
                                }, children: "Dashboard" }), _jsx("p", { style: {
                                    fontSize: "14px",
                                    color: "hsl(var(--muted-foreground))",
                                    margin: 0,
                                }, children: "Overview of the Shaw Heritage CMS" })] }), _jsx("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "16px",
                            marginBottom: "40px",
                        }, children: stats.map((stat, index) => (_jsx(StatsCard, { label: stat.label, value: stat.value, change: stat.change, icon: stat.icon, href: stat.href, style: { animationDelay: `${index * 50}ms` } }, stat.label))) }), _jsxs("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                            gap: "32px",
                        }, children: [_jsx(ActivityFeed, { activities: recentActivity, viewAllHref: "#" }), _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "32px" }, children: [_jsx(QuickActions, { actions: quickActions }), _jsxs("div", { children: [_jsxs("h2", { style: {
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                    margin: "0 0 16px 0",
                                                    color: "hsl(var(--foreground))",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                }, children: [_jsx(Users, { style: { width: "16px", height: "16px", color: "hsl(var(--muted-foreground))" } }), "New Users"] }), _jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: recentUsers.map((user, index) => (_jsx(UserCard, { user: user, style: { animationDelay: `${index * 50}ms` } }, user.email))) })] })] })] })] }) }) }));
};
