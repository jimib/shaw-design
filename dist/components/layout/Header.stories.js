import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "./Header";
import { Button } from "../Button";
const meta = {
    title: "Layout/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "minimal", "hero"],
        },
        logoVariant: {
            control: { type: "select" },
            options: ["dark", "light", "shaw"],
        },
        showLogo: {
            control: { type: "boolean" },
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: "Shaw Heritage CMS",
        showLogo: true,
        logoVariant: "shaw",
        actions: (_jsxs("div", { style: { display: "flex", gap: "8px" }, children: [_jsx(Button, { variant: "outline", size: "sm", children: "Login" }), _jsx(Button, { variant: "cms", size: "sm", children: "Sign Up" })] })),
    },
};
export const Minimal = {
    args: {
        variant: "minimal",
        title: "Shaw Heritage",
        showLogo: true,
        logoVariant: "shaw",
        logoSize: 32,
    },
};
export const Hero = {
    args: {
        variant: "hero",
        title: "Welcome to Shaw Heritage",
        subtitle: "Preserving history through digital innovation",
        showLogo: true,
        logoVariant: "shaw",
        logoSize: 80,
        actions: (_jsxs("div", { style: { display: "flex", gap: "12px" }, children: [_jsx(Button, { variant: "outline", size: "lg", children: "Learn More" }), _jsx(Button, { variant: "cms", size: "lg", children: "Get Started" })] })),
    },
};
export const WithNavigation = {
    render: () => (_jsx(Header, { title: "Shaw Heritage CMS", showLogo: true, logoVariant: "shaw", actions: _jsxs("nav", { style: { display: "flex", gap: "24px", alignItems: "center" }, children: [_jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Dashboard" }), _jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Collections" }), _jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Settings" }), _jsx(Button, { variant: "cms", size: "sm", children: "Profile" })] }) })),
};
