import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Menubar, MenubarItem, MenubarSeparator } from "./Menubar";
const meta = {
    title: "Navigation/Menubar",
    component: Menubar,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "minimal", "bordered"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(MenubarItem, { active: true, children: "File" }), _jsx(MenubarItem, { children: "Edit" }), _jsx(MenubarItem, { children: "View" }), _jsx(MenubarItem, { children: "Tools" }), _jsx(MenubarItem, { children: "Help" })] })),
    },
};
export const Minimal = {
    args: {
        variant: "minimal",
        children: (_jsxs(_Fragment, { children: [_jsx(MenubarItem, { active: true, children: "Dashboard" }), _jsx(MenubarItem, { children: "Collections" }), _jsx(MenubarItem, { children: "Media" }), _jsx(MenubarItem, { children: "Settings" })] })),
    },
};
export const Bordered = {
    args: {
        variant: "bordered",
        children: (_jsxs(_Fragment, { children: [_jsx(MenubarItem, { active: true, children: "Home" }), _jsx(MenubarItem, { children: "About" }), _jsx(MenubarItem, { children: "Services" }), _jsx(MenubarItem, { children: "Contact" })] })),
    },
};
export const WithSeparators = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(MenubarItem, { active: true, children: "File" }), _jsx(MenubarItem, { children: "Edit" }), _jsx(MenubarItem, { children: "View" }), _jsx(MenubarSeparator, {}), _jsx(MenubarItem, { children: "Tools" }), _jsx(MenubarItem, { children: "Help" })] })),
    },
};
export const WithActions = {
    render: () => (_jsxs(Menubar, { children: [_jsx(MenubarItem, { active: true, children: "Dashboard" }), _jsx(MenubarItem, { children: "Collections" }), _jsx(MenubarItem, { children: "Media" }), _jsx(MenubarSeparator, {}), _jsx(MenubarItem, { onClick: () => console.log("Settings clicked"), children: "Settings" }), _jsx(MenubarItem, { onClick: () => console.log("Help clicked"), children: "Help" })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h3", { children: "Default" }), _jsxs(Menubar, { children: [_jsx(MenubarItem, { active: true, children: "File" }), _jsx(MenubarItem, { children: "Edit" }), _jsx(MenubarItem, { children: "View" })] })] }), _jsxs("div", { children: [_jsx("h3", { children: "Minimal" }), _jsxs(Menubar, { variant: "minimal", children: [_jsx(MenubarItem, { active: true, children: "Dashboard" }), _jsx(MenubarItem, { children: "Collections" }), _jsx(MenubarItem, { children: "Media" })] })] }), _jsxs("div", { children: [_jsx("h3", { children: "Bordered" }), _jsxs(Menubar, { variant: "bordered", children: [_jsx(MenubarItem, { active: true, children: "Home" }), _jsx(MenubarItem, { children: "About" }), _jsx(MenubarItem, { children: "Contact" })] })] })] })),
};
