import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { NavMenu, NavMenuItem, NavMenuTrigger } from "./NavMenu";
const meta = {
    title: "Navigation/NavMenu",
    component: NavMenu,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "pills", "underline"],
        },
        orientation: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) })] })),
    },
};
export const Pills = {
    args: {
        variant: "pills",
        children: (_jsxs(_Fragment, { children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "All" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Recent" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Favorites" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Archived" }) })] })),
    },
};
export const Underline = {
    args: {
        variant: "underline",
        children: (_jsxs(_Fragment, { children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Overview" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Details" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "History" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) })] })),
    },
};
export const Vertical = {
    args: {
        orientation: "vertical",
        children: (_jsxs(_Fragment, { children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Users" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) })] })),
    },
};
export const WithTriggers = {
    render: () => (_jsxs(NavMenu, { children: [_jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Home" }) }), _jsx(NavMenuItem, { children: _jsx(NavMenuTrigger, { onClick: () => console.log("Dropdown clicked"), children: "Collections \u25BC" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Settings" }) })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "32px" }, children: [_jsxs("div", { children: [_jsx("h3", { children: "Default" }), _jsxs(NavMenu, { children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Dashboard" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Collections" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Media" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { children: "Pills" }), _jsxs(NavMenu, { variant: "pills", children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "All" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Recent" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Favorites" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { children: "Underline" }), _jsxs(NavMenu, { variant: "underline", children: [_jsx(NavMenuItem, { active: true, children: _jsx("a", { href: "#", children: "Overview" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "Details" }) }), _jsx(NavMenuItem, { children: _jsx("a", { href: "#", children: "History" }) })] })] })] })),
};
