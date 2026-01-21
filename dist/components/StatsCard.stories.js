import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatsCard } from "./StatsCard";
import { Archive, Feather, Globe, Users } from "lucide-react";
const meta = {
    title: "Components/StatsCard",
    component: StatsCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        label: "Archive Items",
        value: "2,847",
        change: "+12 this week",
        icon: Archive,
    },
};
export const WithLink = {
    args: {
        label: "Articles",
        value: "156",
        change: "+3 this week",
        icon: Feather,
        href: "#",
    },
};
export const WithClick = {
    args: {
        label: "Exhibition Visitors",
        value: "1,247",
        change: "+89 this week",
        icon: Globe,
        onClick: () => alert("Clicked!"),
    },
};
export const NoChange = {
    args: {
        label: "Connected Domains",
        value: "3",
        icon: Users,
    },
};
export const Grid = {
    render: () => (_jsxs("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
            width: "100%",
            maxWidth: "1200px",
        }, children: [_jsx(StatsCard, { label: "Archive Items", value: "2,847", change: "+12 this week", icon: Archive }), _jsx(StatsCard, { label: "Articles", value: "156", change: "+3 this week", icon: Feather }), _jsx(StatsCard, { label: "Exhibition Visitors", value: "1,247", change: "+89 this week", icon: Globe }), _jsx(StatsCard, { label: "Connected Domains", value: "3", change: "All active", icon: Users })] })),
};
