import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Separator } from "./Separator";
const meta = {
    title: "Components/Separator",
    component: Separator,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: { type: "select" },
            options: ["horizontal", "vertical"],
        },
    },
};
export default meta;
export const Horizontal = {
    args: {
        orientation: "horizontal",
    },
};
export const Vertical = {
    args: {
        orientation: "vertical",
    },
    render: (args) => (_jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "16px",
            height: "100px",
        }, children: [_jsx("span", { children: "Left content" }), _jsx(Separator, { ...args }), _jsx("span", { children: "Right content" })] })),
};
export const InContent = {
    render: () => (_jsxs("div", { style: { maxWidth: "400px" }, children: [_jsx("h3", { children: "Section 1" }), _jsx("p", { children: "This is the first section of content." }), _jsx(Separator, { style: { margin: "16px 0" } }), _jsx("h3", { children: "Section 2" }), _jsx("p", { children: "This is the second section of content, separated by a horizontal line." }), _jsx(Separator, { style: { margin: "16px 0" } }), _jsx("h3", { children: "Section 3" }), _jsx("p", { children: "This is the third section of content." })] })),
};
export const InNavigation = {
    render: () => (_jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px",
            background: "hsl(var(--muted))",
            borderRadius: "8px",
        }, children: [_jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Home" }), _jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "About" }), _jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Services" }), _jsx(Separator, { orientation: "vertical", style: { height: "20px" } }), _jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Contact" }), _jsx("a", { href: "#", style: { textDecoration: "none", color: "hsl(var(--foreground))" }, children: "Help" })] })),
};
export const AllOrientations = {
    render: () => (_jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [_jsxs("div", { children: [_jsx("h3", { children: "Horizontal Separators" }), _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [_jsx("span", { children: "Content above" }), _jsx(Separator, {}), _jsx("span", { children: "Content below" })] })] }), _jsxs("div", { children: [_jsx("h3", { children: "Vertical Separators" }), _jsxs("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            height: "60px",
                        }, children: [_jsx("span", { children: "Left" }), _jsx(Separator, { orientation: "vertical" }), _jsx("span", { children: "Center" }), _jsx(Separator, { orientation: "vertical" }), _jsx("span", { children: "Right" })] })] })] })),
};
