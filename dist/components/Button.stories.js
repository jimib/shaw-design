import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button";
import { Plus, Search, ArrowRight, Download, Upload } from "lucide-react";
const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["primary", "secondary", "accent", "outline", "ghost", "cms"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        compact: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
export const Primary = {
    args: {
        children: "Click me",
        variant: "primary",
        size: "md",
    },
};
export const Secondary = {
    args: {
        children: "Click me",
        variant: "secondary",
        size: "md",
    },
};
export const Accent = {
    args: {
        children: "Click me",
        variant: "accent",
        size: "md",
    },
};
export const Outline = {
    args: {
        children: "Click me",
        variant: "outline",
        size: "md",
    },
};
export const Ghost = {
    args: {
        children: "Click me",
        variant: "ghost",
        size: "md",
    },
};
export const CMS = {
    args: {
        children: "Sign In",
        variant: "cms",
        size: "lg",
    },
};
export const Small = {
    args: {
        children: "Small",
        variant: "primary",
        size: "sm",
    },
};
export const Large = {
    args: {
        children: "Large",
        variant: "primary",
        size: "lg",
    },
};
export const Disabled = {
    args: {
        children: "Disabled",
        variant: "primary",
        size: "md",
        disabled: true,
    },
};
export const Compact = {
    args: {
        children: "Compact Button",
        variant: "primary",
        size: "md",
        compact: true,
    },
};
export const CompactComparison = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Normal:" }), _jsx(Button, { variant: "primary", size: "sm", children: "Small" }), _jsx(Button, { variant: "primary", size: "md", children: "Medium" }), _jsx(Button, { variant: "primary", size: "lg", children: "Large" })] }), _jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx("span", { className: "text-sm text-gray-600", children: "Compact:" }), _jsx(Button, { variant: "primary", size: "sm", compact: true, children: "Small" }), _jsx(Button, { variant: "primary", size: "md", compact: true, children: "Medium" }), _jsx(Button, { variant: "primary", size: "lg", compact: true, children: "Large" })] })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "accent", children: "Accent" }), _jsx(Button, { variant: "outline", children: "Outline" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "cms", children: "CMS" })] })),
};
export const WithIcons = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx(Button, { variant: "primary", icon: Plus, iconPosition: "left", children: "Add Item" }), _jsx(Button, { variant: "outline", icon: Search, iconPosition: "left", children: "Search" }), _jsx(Button, { variant: "ghost", icon: ArrowRight, iconPosition: "right", children: "Continue" }), _jsx(Button, { variant: "cms", icon: Upload, iconPosition: "left", children: "Upload" })] }), _jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx(Button, { variant: "primary", size: "sm", icon: Download, iconPosition: "left", children: "Download" }), _jsx(Button, { variant: "outline", size: "sm", icon: Search, iconPosition: "right", children: "Search" }), _jsx(Button, { variant: "primary", size: "lg", icon: Plus, iconPosition: "left", children: "Create New" })] })] })),
};
export const IconOnly = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx(Button, { variant: "primary", size: "sm", icon: Plus, iconPosition: "left", "aria-label": "Add", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Add" }) }), _jsx(Button, { variant: "outline", size: "sm", icon: Search, iconPosition: "left", "aria-label": "Search", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Search" }) }), _jsx(Button, { variant: "ghost", size: "md", icon: Download, iconPosition: "left", "aria-label": "Download", children: _jsx("span", { style: { width: 0, height: 0, overflow: "hidden" }, children: "Download" }) })] })),
};
